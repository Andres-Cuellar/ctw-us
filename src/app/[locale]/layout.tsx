import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

import { getGlobalContent } from "@/content";
import { DEFAULT_LOCALE, LOCALES, isLocale, site, type Locale } from "@/shared/config/site";
import { Footer } from "@/shared/layout/Footer";
import { BookingDialog } from "@/shared/layout/BookingDialog";
import { Header } from "@/shared/layout/Header";
import { MobileBottomBar } from "@/shared/layout/MobileBottomBar";
import { TopBar } from "@/shared/layout/TopBar";
import { WhatsAppFab } from "@/shared/layout/WhatsAppFab";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = isLocale(locale) ? locale : DEFAULT_LOCALE;
  const isEn = currentLocale === "en";

  return {
    metadataBase: new URL(site.url),
    title: {
      default: isEn
        ? "Websites in the Southwest for Local Businesses | creamostuweb"
        : "Páginas Web en el Suroeste para Negocios Locales | creamostuweb",
      template: "%s | creamostuweb",
    },
    description: isEn
      ? "Websites, CRM, and Google reviews for businesses in the Southwest. Bilingual support and financing plans."
      : "Páginas web, CRM y reseñas en Google para negocios en el Suroeste. Atención en español y planes con financiamiento.",
    openGraph: {
      type: "website",
      locale: isEn ? "en_US" : "es_US",
      siteName: site.name,
      url: `${site.url}/${currentLocale}`,
    },
    alternates: {
      canonical: `/${currentLocale}`,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const globalContent = getGlobalContent(locale);

  return (
    <html
      lang={locale}
      className={sora.variable}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.dataset.js="true"',
          }}
        />
      </head>
      <body className="pb-16 md:pb-0">
        <a
          href="#contenido"
          className="type-label sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2.5 focus:text-night"
        >
          {globalContent.skipToContent}
        </a>

        <TopBar locale={locale} />
        <Header locale={locale} />
        <main id="contenido">{children}</main>
        <Footer locale={locale} />
        <WhatsAppFab locale={locale} />
        <MobileBottomBar locale={locale} />
        <BookingDialog locale={locale} />

        <LocalBusinessSchema locale={locale} />
      </body>
    </html>
  );
}

/** LocalBusiness structured data. Only fields the client actually supplied. */
function LocalBusinessSchema({ locale }: { locale: Locale }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    telephone: site.phone.e164,
    email: site.email.address,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: site.serviceArea.map((name) => ({ "@type": "City", name })),
    openingHours: site.hours.schema,
    availableLanguage: ["es", "en"],
    inLanguage: locale,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
