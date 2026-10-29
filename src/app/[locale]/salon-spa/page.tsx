import type { Metadata } from "next";
import { getSalonSpaContent } from "@/content";
import { isLocale } from "@/shared/config/site";
import CitySalonSpaPage from "./[city]/page";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getSalonSpaContent(locale);
  const city = "Las Vegas";
  const seo = content.salonSpaSeo(city, city.toLowerCase());
  return {
    title: { absolute: seo.title },
    description: seo.description,
    openGraph: { title: seo.title, description: seo.description },
    alternates: {
      canonical: `/${locale}/salon-spa`,
      languages: { es: "/es/salon-spa", en: "/en/salon-spa" },
    },
  };
}

export default async function SalonSpaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return CitySalonSpaPage({ params: Promise.resolve({ locale, city: "las-vegas" }) });
}
