import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { NewClientsLanding } from "@/features/nuevos-clientes/NewClientsLanding";

export const metadata: Metadata = {
  title: "Web, CRM e IA para tu negocio · 30 días de prueba",
  description: "Conecta tu web, clientes y seguimiento. Planes desde US$297/mes y 30 días sin mensualidad, con US$20 de crédito para IA y mensajería. Pauta aparte.",
  alternates: { canonical: "/es/nuevos-clientes", languages: { es: "/es/nuevos-clientes" } },
  openGraph: { title: "Que ninguna consulta se quede sin respuesta", description: "Web, CRM, automatizaciones e IA para negocios de servicios en todo el Suroeste. Conoce los planes y solicita 30 días de prueba.", url: "/es/nuevos-clientes", locale: "es_US" },
};

export default async function NewClientsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "es") redirect("/es/nuevos-clientes");
  return <NewClientsLanding />;
}
