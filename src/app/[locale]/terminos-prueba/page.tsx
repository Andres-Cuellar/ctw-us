import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { terms } from "@/features/nuevos-clientes/content";

export const metadata = { title: "Términos de los 30 días de prueba", alternates: { canonical: "/es/terminos-prueba" } };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  if ((await params).locale !== "es") redirect("/es/terminos-prueba");
  return <article className="mx-auto max-w-3xl px-6 py-12"><Image src="/logo.webp" alt="creamostuweb" width={180} height={44} /><h1 className="my-10 text-4xl">Términos de los 30 días de prueba</h1><p>Estas condiciones se complementan con la propuesta aceptada antes de comenzar.</p><ol className="my-10 list-decimal space-y-8 pl-5">{terms.map(([title, body]) => <li key={title}><h2 className="mb-3 text-xl">{title}</h2><p className="leading-relaxed text-bone-70">{body}</p></li>)}</ol><Link className="text-gold underline" href="/es/clientes-nuevos">Volver a la oferta</Link></article>;
}
