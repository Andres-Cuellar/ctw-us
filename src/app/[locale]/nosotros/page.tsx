import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getNosotrosContent } from "@/content";
import { Cifras } from "@/features/nosotros/sections/Cifras";
import { Historia } from "@/features/nosotros/sections/Historia";
import { Mision } from "@/features/nosotros/sections/Mision";
import { Valores } from "@/features/nosotros/sections/Valores";
import { PorQueNosotros } from "@/features/home/sections/PorQueNosotros";
import { CtaFinal } from "@/shared/sections/CtaFinal";
import { PageHero } from "@/shared/sections/PageHero";
import { isLocale } from "@/shared/config/site";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { nosotrosSeo } = getNosotrosContent(locale);
  return {
    title: { absolute: nosotrosSeo.title },
    description: nosotrosSeo.description,
    openGraph: { title: nosotrosSeo.title, description: nosotrosSeo.description },
    alternates: { canonical: `/${locale}/nosotros` },
  };
}

export default async function NosotrosPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { ctaFinal, difference, hero, mission, stats, story, values } =
    getNosotrosContent(locale);

  return (
    <>
      <PageHero content={hero} locale={locale} hue="gold" />
      <Historia content={story} />
      <Mision content={mission} />
      <PorQueNosotros content={difference} surface="night" glow="cyan" />
      <Valores content={values} />
      <Cifras content={stats} />
      <CtaFinal content={ctaFinal} locale={locale} />
    </>
  );
}
