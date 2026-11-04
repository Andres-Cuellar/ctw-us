import Link from "next/link";
import type { Metadata } from "next";
import { legalContent, legalPaths, type LegalDocument } from "@/content/legal";
import { site, type Locale } from "@/shared/config/site";

export function legalMetadata(locale: Locale, document: LegalDocument): Metadata {
  const content = legalContent[locale][document];
  const path = legalPaths[document];
  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { es: `/es${path}`, en: `/en${path}` },
    },
    openGraph: { title: content.title, description: content.description, url: `/${locale}${path}` },
  };
}

export function LegalPage({ locale, document }: { locale: Locale; document: LegalDocument }) {
  const content = legalContent[locale][document];
  const otherDocument = document === "terms" ? "privacy" : "terms";
  const isSpanish = locale === "es";

  return (
    <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <header className="max-w-3xl border-b border-gold/30 pb-10">
        <p className="type-eyebrow text-gold">{isSpanish ? "Información legal" : "Legal information"}</p>
        <h1 className="mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl">{content.title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-bone-70">{content.description}</p>
        <p className="mt-6 text-sm text-bone-45">
          {isSpanish ? "Última actualización: " : "Last updated: "}
          <time dateTime="2026-11-03">{isSpanish ? "3 de noviembre de 2026" : "November 3, 2026"}</time>
        </p>
      </header>

      <div className="mt-10 grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
        <aside>
          <nav aria-label={isSpanish ? "En esta página" : "On this page"} className="lg:sticky lg:top-32">
            <h2 className="type-eyebrow text-gold">{isSpanish ? "En esta página" : "On this page"}</h2>
            <ul className="mt-5 space-y-3 border-l border-bone/15 pl-5 text-sm">
              {content.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="text-bone-70 hover:text-gold">{section.title}</a>
                </li>
              ))}
              <li><a href="#contact" className="text-bone-70 hover:text-gold">{isSpanish ? "Contacto" : "Contact"}</a></li>
            </ul>
          </nav>
        </aside>

        <article className="min-w-0 max-w-3xl">
          {content.sections.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="mb-10 scroll-mt-32">
              <h2 id={`${section.id}-title`} className="text-xl font-semibold sm:text-2xl">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-relaxed text-bone-70">{paragraph}</p>
              ))}
            </section>
          ))}

          {document === "privacy" && (
            <section aria-labelledby="provider-links" className="mb-10 rounded-xl border border-bone/15 bg-night-2 p-6">
              <h2 id="provider-links" className="text-xl font-semibold">{isSpanish ? "Privacidad de terceros y controles" : "Third-party privacy and controls"}</h2>
              <ul className="mt-4 space-y-3 text-sm text-gold [&_a]:underline [&_a]:underline-offset-4">
                <li><a href="https://policies.google.com/technologies/partner-sites">{isSpanish ? "Cómo utiliza Google los datos de sitios asociados" : "How Google uses data from partner websites"}</a></li>
                <li><a href="https://tools.google.com/dlpage/gaoptout">{isSpanish ? "Complemento de exclusión de Google Analytics" : "Google Analytics opt-out browser add-on"}</a></li>
                <li><a href="https://www.facebook.com/privacy/policy/">{isSpanish ? "Política de privacidad de Meta" : "Meta privacy policy"}</a></li>
                <li><a href="https://www.facebook.com/adpreferences">{isSpanish ? "Preferencias de anuncios de Meta" : "Meta ad preferences"}</a></li>
                <li><a href="https://www.whatsapp.com/legal/privacy-policy">{isSpanish ? "Política de privacidad de WhatsApp" : "WhatsApp privacy policy"}</a></li>
              </ul>
            </section>
          )}

          <section id="contact" aria-labelledby="contact-title" className="scroll-mt-32 border-t border-gold/30 pt-8">
            <h2 id="contact-title" className="text-2xl font-semibold">{isSpanish ? "Contacto" : "Contact"}</h2>
            <address className="mt-4 space-y-2 text-bone-70 not-italic">
              <p className="font-semibold text-bone">{site.name}</p>
              <p>{site.address.street}, {site.address.city}, {site.address.region}, {isSpanish ? "Estados Unidos" : "United States"}</p>
              <p><a href={site.email.href} className="break-all text-gold underline underline-offset-4">{site.email.address}</a></p>
              <p><a href={site.phone.href} className="hover:text-gold">{site.phone.display}</a></p>
            </address>
            <Link href={`/${locale}${legalPaths[otherDocument]}`} className="mt-8 inline-block text-gold underline underline-offset-4">
              {legalContent[locale][otherDocument].title}
            </Link>
          </section>
        </article>
      </div>
    </div>
  );
}
