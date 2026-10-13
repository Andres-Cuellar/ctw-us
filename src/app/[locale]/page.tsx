import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getHomeContent } from "@/content";
import { ComoFunciona } from "@/features/home/sections/ComoFunciona";
import { CtaFinal } from "@/shared/sections/CtaFinal";
import { Financiamiento } from "@/features/home/sections/Financiamiento";
import { Hero } from "@/features/home/sections/Hero";
import { LlamadaPerdida } from "@/features/home/sections/LlamadaPerdida";
import { ParaQuienEs } from "@/features/home/sections/ParaQuienEs";
import { PorQueNosotros } from "@/features/home/sections/PorQueNosotros";
import { Preguntas } from "@/shared/sections/Preguntas";
import { Problema } from "@/features/home/sections/Problema";
import { ServiciosDestacados } from "@/features/home/sections/ServiciosDestacados";
import { Solucion } from "@/features/home/sections/Solucion";
import { Testimonios } from "@/features/home/sections/Testimonios";
import { isLocale } from "@/shared/config/site";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { homeSeo } = getHomeContent(locale);
  return {
    title: { absolute: homeSeo.title },
    description: homeSeo.description,
    openGraph: { title: homeSeo.title, description: homeSeo.description },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const {
    audience,
    ctaFinal,
    faq,
    featuredServices,
    financing,
    hero,
    missedCall,
    problem,
    reasons,
    solution,
    steps,
    testimonials,
  } = getHomeContent(locale);

  return (
    <>
      <Hero content={hero} locale={locale} />
      <Problema content={problem} />
      <Solucion content={solution} />
      <LlamadaPerdida content={missedCall} locale={locale} />
      <ServiciosDestacados content={featuredServices} locale={locale} />
      <Financiamiento content={financing} locale={locale} />
      <ComoFunciona content={steps} />
      <ParaQuienEs content={audience} />
      <PorQueNosotros content={reasons} />
      <Testimonios content={testimonials} />
      <Preguntas content={faq} />
      <CtaFinal content={ctaFinal} locale={locale} />
    </>
  );
}
