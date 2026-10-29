import type { Metadata } from "next";
import { getDetailingContent } from "@/content";
import { isLocale } from "@/shared/config/site";
import CityDetailingPage from "./[city]/page";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getDetailingContent(locale);
  const city = "Las Vegas";
  const seo = content.detailingSeo(city, city.toLowerCase());
  return {
    title: { absolute: seo.title },
    description: seo.description,
    openGraph: { title: seo.title, description: seo.description },
    alternates: {
      canonical: `/${locale}/detailing`,
      languages: { es: "/es/detailing", en: "/en/detailing" },
    },
  };
}

export default async function DetailingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return CityDetailingPage({ params: Promise.resolve({ locale, city: "las-vegas" }) });
}
