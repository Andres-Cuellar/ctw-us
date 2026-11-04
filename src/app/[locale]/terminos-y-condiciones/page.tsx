import { notFound } from "next/navigation";
import { isLocale } from "@/shared/config/site";
import { LegalPage, legalMetadata } from "@/shared/legal/LegalPage";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return legalMetadata(locale, "terms");
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalPage locale={locale} document="terms" />;
}
