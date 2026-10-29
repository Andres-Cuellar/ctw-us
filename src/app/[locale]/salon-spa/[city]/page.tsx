import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getSalonSpaContent } from "@/content";
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
  const content = getSalonSpaContent(locale);
  if (!content) return {};
  const cityName = locale === "en" ? ciudad.name.replace("Los Ángeles", "Los Angeles") : ciudad.name;
  const seo = content.salonSpaSeo(cityName, cityName.toLowerCase());
  return {
    title: { absolute: seo.title },
    description: seo.description,
    openGraph: { title: seo.title, description: seo.description },
    alternates: { canonical: withLocale(locale, nichoPath("salon-spa", ciudad)) },
  };
}

export default async function CitySalonSpaPage({
  params,
}: CityPageProps) {
  const { locale, city } = await params;
  if (!isLocale(locale)) notFound();

  const ciudad = cityBySlug(city);
  if (!ciudad) notFound();

  const content = getSalonSpaContent(locale);
  if (!content) notFound();

  const cityName = locale === "en" ? ciudad.name.replace("Los Ángeles", "Los Angeles") : ciudad.name;
  const cityLower = cityName.toLowerCase();

  const hero = interpolateCity(content.salonSpaHero(cityName), cityName, cityLower);
  const problem = interpolateCity(content.salonSpaProblem(), cityName, cityLower);
  const system = interpolateCity(content.salonSpaSystem(), cityName, cityLower);
  const bundles = interpolateCity(content.salonSpaBundles(cityName), cityName, cityLower);
  const reviews = interpolateCity(content.salonSpaReviews(), cityName, cityLower);
  const faq = interpolateCity(content.salonSpaFaq(cityName), cityName, cityLower);
  const ctaFinal = content.salonSpaCtaFinal();

  return (
    <>
      <HeroNicho content={hero} locale={locale} nicho="salon-spa" />
      <CrudaRealidad content={problem} locale={locale} nicho="salon-spa" />
      <SistemaNicho content={system} nicho="salon-spa" />
      <PlanesNicho content={bundles} locale={locale} nicho="salon-spa" />
      <ReviewsNicho content={reviews} locale={locale} nicho="salon-spa" />
      <FaqNicho content={faq} nicho="salon-spa" />
      <AreasServicio
        locale={locale}
        nicho="salon-spa"
        currentCity={ciudad.slug}
        label={locale === "en" ? "Helping salons and spas across the Southwest and California" : "Ayudamos a salones y spas en todo el Suroeste y California"}
      />
      <CtaFinal content={ctaFinal} locale={locale} />
    </>
  );
}
