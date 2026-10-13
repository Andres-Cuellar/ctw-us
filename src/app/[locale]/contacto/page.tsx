import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getContactoContent } from "@/content";
import { Agenda } from "@/features/contacto/sections/Agenda";
import { Canales } from "@/features/contacto/sections/Canales";
import { Formulario } from "@/features/contacto/sections/Formulario";
import { Horario } from "@/features/contacto/sections/Horario";
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
  const { contactoSeo } = getContactoContent(locale);
  return {
    title: { absolute: contactoSeo.title },
    description: contactoSeo.description,
    openGraph: { title: contactoSeo.title, description: contactoSeo.description },
    alternates: { canonical: `/${locale}/contacto` },
  };
}

export default async function ContactoPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { booking, channels, faq, form, hero, hours, map } =
    getContactoContent(locale);

  return (
    <>
      <PageHero content={hero} locale={locale} hue="cyan" />
      <Formulario content={form} />
      <Canales content={channels} locale={locale} />
      <Agenda content={booking} />
      <Horario hours={hours} map={map} />
      <Preguntas content={faq} id="preguntas-rapidas" surface="raised" glow="cyan" />
    </>
  );
}
