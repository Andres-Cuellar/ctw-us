import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { NewClientsLanding } from "@/features/nuevos-clientes/NewClientsLanding";

const title = "Web, CRM e IA · 30 días de prueba";
const description =
  "Conecta tu web, clientes y seguimiento. Planes desde US$297/mes y 30 días sin mensualidad, con US$20 de crédito para IA y mensajería. Pauta aparte.";

const socialTitle = "Que ninguna consulta se quede sin respuesta";
const socialDescription =
  "Web, CRM, automatizaciones e IA para negocios de servicios en todo el Suroeste. Conoce los planes y solicita 30 días de prueba.";
const socialImage = {
  url: "/og-nuevos-clientes.jpg",
  width: 1200,
  height: 630,
  alt: "Landing de nuevos clientes: que ninguna consulta se quede sin respuesta",
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/es/nuevos-clientes", languages: { es: "/es/nuevos-clientes" } },
  openGraph: {
    type: "website",
    siteName: "creamostuweb",
    title: socialTitle,
    description: socialDescription,
    url: "/es/nuevos-clientes",
    locale: "es_US",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
    images: [socialImage],
  },
};

export default async function NewClientsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "es") redirect("/es/nuevos-clientes");
  return <NewClientsLanding />;
}
