import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { ClientLanding } from "@/features/clientes-nuevos/ClientLanding";

export const metadata: Metadata = {
  title: "No pierdas clientes por no contestar a tiempo",
  description: "Web, seguimiento y citas para negocios de servicios en Las Vegas. Prueba 30 días sin mensualidad ni implementación inicial.",
  alternates: { canonical: "/es/clientes-nuevos", languages: { es: "/es/clientes-nuevos" } },
  openGraph: { title: "Tu negocio sigue. Tus consultas también.", url: "/es/clientes-nuevos", locale: "es_US" },
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  if ((await params).locale !== "es") redirect("/es/clientes-nuevos");
  return <ClientLanding />;
}
