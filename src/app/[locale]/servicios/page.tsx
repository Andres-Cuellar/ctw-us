import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getServiciosContent } from "@/content";
import { CiclosDePago } from "@/features/servicios/sections/CiclosDePago";
import { Herramientas } from "@/features/servicios/sections/Herramientas";
import { MetodosDePago } from "@/features/servicios/sections/MetodosDePago";
import { PaginasWeb } from "@/features/servicios/sections/PaginasWeb";
import { Paquetes } from "@/features/servicios/sections/Paquetes";
import { PlanesSubmenu } from "@/features/servicios/sections/PlanesSubmenu";
import { ServiciosAdicionales } from "@/features/servicios/sections/ServiciosAdicionales";
import { Tiendas } from "@/features/servicios/sections/Tiendas";
import { CtaFinal } from "@/shared/sections/CtaFinal";
import { PageHero } from "@/shared/sections/PageHero";
import { Preguntas } from "@/shared/sections/Preguntas";
import { isLocale } from "@/shared/config/site";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { serviciosSeo } = getServiciosContent(locale);
  return {
    title: { absolute: serviciosSeo.title },
    description: serviciosSeo.description,
    openGraph: { title: serviciosSeo.title, description: serviciosSeo.description },
    alternates: { canonical: `/${locale}/servicios` },
  };
}

export default async function ServiciosPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const {
    addOns,
    billing,
    bundles,
    ctaFinal,
    faq,
    hero,
    payments,
    store,
    tools,
    webTiers,
  } = getServiciosContent(locale);

  return (
    <>
      <PageHero content={hero} locale={locale} hue="gold" />
      <PlanesSubmenu locale={locale} />
      <PaginasWeb content={webTiers} locale={locale} />
      <Tiendas content={store} locale={locale} />
      <Herramientas content={tools} />
      <Paquetes content={bundles} locale={locale} />
      <CiclosDePago content={billing} />
      <MetodosDePago content={payments} />
      <ServiciosAdicionales content={addOns} locale={locale} />
      <Preguntas content={faq} />
      <CtaFinal content={ctaFinal} locale={locale} />
    </>
  );
}
