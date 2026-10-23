import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDetailingContent } from "@/content";
import { HeroNicho } from "@/shared/sections/HeroNicho";
import { CrudaRealidad } from "@/shared/sections/CrudaRealidad";
import { SistemaNicho } from "@/shared/sections/SistemaNicho";
import { PlanesNicho } from "@/shared/sections/PlanesNicho";
import { ReviewsNicho } from "@/shared/sections/ReviewsNicho";
import { FormNicho } from "@/shared/sections/FormNicho";
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
  return NICHO_CITIES.map((city) => ({
    locale: "es",
    city: city.slug,
  }));
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
  const seo = content.detailingSeo(ciudad.name, ciudad.name.toLowerCase());
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

  const cityLower = ciudad.name.toLowerCase();

  const hero = interpolateCity(content.detailingHero(ciudad.name), ciudad.name, cityLower);
  const problem = interpolateCity(content.detailingProblem(), ciudad.name, cityLower);
  const system = interpolateCity(content.detailingSystem(), ciudad.name, cityLower);
  const bundles = interpolateCity(content.detailingBundles(ciudad.name), ciudad.name, cityLower);
  const reviews = interpolateCity(content.detailingReviews(), ciudad.name, cityLower);
  const form = content.detailingForm();
  const faq = interpolateCity(content.detailingFaq(ciudad.name), ciudad.name, cityLower);
  const ctaFinal = content.detailingCtaFinal();

  return (
    <>
      <HeroNicho content={hero} locale={locale} nicho="detailing" />
      <CrudaRealidad content={problem} locale={locale} nicho="detailing" />
      <SistemaNicho content={system} nicho="detailing" />
      <PlanesNicho content={bundles} locale={locale} nicho="detailing" />
      <ReviewsNicho content={reviews} nicho="detailing" />
      <FormNicho nicho="detailing" content={form} />
      <FaqNicho content={faq} nicho="detailing" />
      <AreasServicio
        locale={locale}
        nicho="detailing"
        currentCity={ciudad.slug}
        label="Ayudamos a detailers y car wash en todo el Suroeste y California"
      />
      <CtaFinal content={ctaFinal} locale={locale} />
    </>
  );
}
