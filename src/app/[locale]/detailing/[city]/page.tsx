import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDetailingContent } from "@/content";
import { HeroNicho } from "@/shared/sections/HeroNicho";
import { CrudaRealidad } from "@/shared/sections/CrudaRealidad";
import { SistemaNicho } from "@/shared/sections/SistemaNicho";
import { PlanesNicho } from "@/shared/sections/PlanesNicho";
import { ReviewsNicho } from "@/shared/sections/ReviewsNicho";
import { FaqNicho } from "@/shared/sections/FaqNicho";
import { AreasServicio } from "@/shared/sections/AreasServicio";
import { CtaFinal } from "@/shared/sections/CtaFinal";
import { isLocale } from "@/shared/config/site";
import {
  NICHO_CITIES,
  cityBySlug,
  interpolateCity,
  nichoPath,
} from "@/shared/lib/city";
import { withLocale } from "@/shared/lib/routes";

interface CityPageProps {
  params: Promise<{ locale: string; city: string }>;
}

export function generateStaticParams() {
  return NICHO_CITIES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { locale, city } = await params;
  if (!isLocale(locale)) return {};
  const ciudad = cityBySlug(city);
  if (!ciudad) return {};
  const content = getDetailingContent(locale);
  if (!content) return {};
  const cityName = locale === "en" ? ciudad.name.replace("Los Ángeles", "Los Angeles") : ciudad.name;
  const seo = content.detailingSeo(cityName, cityName.toLowerCase());
  return {
    title: { absolute: seo.title },
    description: seo.description,
    openGraph: { title: seo.title, description: seo.description },
    alternates: { canonical: withLocale(locale, nichoPath("detailing", ciudad)) },
  };
}

export default async function CityDetailingPage({
  params,
}: CityPageProps) {
  const { locale, city } = await params;
  if (!isLocale(locale)) notFound();

  const ciudad = cityBySlug(city);
  if (!ciudad) notFound();

  const content = getDetailingContent(locale);
  if (!content) notFound();

  const cityName = locale === "en" ? ciudad.name.replace("Los Ángeles", "Los Angeles") : ciudad.name;
  const cityLower = cityName.toLowerCase();

  const hero = interpolateCity(content.detailingHero(cityName), cityName, cityLower);
  const problem = interpolateCity(content.detailingProblem(), cityName, cityLower);
  const system = interpolateCity(content.detailingSystem(), cityName, cityLower);
  const bundles = interpolateCity(content.detailingBundles(cityName), cityName, cityLower);
  const reviews = interpolateCity(content.detailingReviews(), cityName, cityLower);
  const faq = interpolateCity(content.detailingFaq(cityName), cityName, cityLower);
  const ctaFinal = content.detailingCtaFinal();

  return (
    <>
      <HeroNicho content={hero} locale={locale} nicho="detailing" />
      <CrudaRealidad content={problem} locale={locale} nicho="detailing" />
      <SistemaNicho content={system} nicho="detailing" />
      <PlanesNicho content={bundles} locale={locale} nicho="detailing" />
      <ReviewsNicho content={reviews} locale={locale} nicho="detailing" />
      <FaqNicho content={faq} nicho="detailing" />
      <AreasServicio
        locale={locale}
        nicho="detailing"
        currentCity={ciudad.slug}
        label={locale === "en" ? "Helping detailers and car washes across the Southwest and California" : "Ayudamos a detailers y car wash en todo el Suroeste y California"}
      />
      <CtaFinal content={ctaFinal} locale={locale} />
    </>
  );
}
