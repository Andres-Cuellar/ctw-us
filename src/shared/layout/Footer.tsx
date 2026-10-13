import Image from "next/image";
import Link from "next/link";
import { getGlobalContent } from "@/content";
import { site, type Locale } from "@/shared/config/site";
import { withLocale } from "@/shared/lib/routes";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const { footer } = getGlobalContent(locale);

  return (
    <>
      <hr className="filament border-0" aria-hidden />
      <footer className="bg-night">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
          <div>
            <Link href={withLocale(locale, "/")} className="inline-block transition-opacity hover:opacity-90">
              <Image
                src="/logo.webp"
                alt="creamostuweb"
                width={170}
                height={42}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-[32ch] text-sm text-bone-45">
              {footer.brandBlurb}
            </p>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="type-eyebrow text-[0.62rem] text-gold">
                {column.heading}
              </h2>
              <ul className="mt-5 flex flex-col gap-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <Link
                        href={withLocale(locale, link.href)}
                        className="text-bone-70 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      // PH-07 / PH-08: destination not supplied. Shown as
                      // pending rather than as a link that goes nowhere.
                      <span className="text-bone/25" title="Próximamente">
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="type-eyebrow text-[0.62rem] text-gold">
              {footer.contactHeading}
            </h2>
            <address className="mt-5 flex flex-col gap-2.5 text-sm not-italic text-bone-70">
              <span>
                {site.address.street}, {site.address.city}, {site.address.region}
              </span>
              <a className="hover:text-gold transition-colors" href={site.phone.href} data-numeric>
                {site.phone.display}
              </a>
              <a className="hover:text-gold transition-colors" href={site.email.href}>
                {site.email.address}
              </a>
              <span className="text-bone-45">{site.hours.summary}</span>
            </address>

            {/* PH-03: handle not supplied, so no dead social links are rendered. */}
            <p className="mt-6 text-sm text-bone/30">
              {footer.socialPrompt}
              {site.social.handle ? `: ${site.social.handle}` : " — próximamente"}
            </p>
          </div>
        </div>

        <div className="border-t border-bone/8">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-5 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div>
              <h2 className="type-eyebrow text-[0.58rem] text-bone/30">
                {footer.paymentHeading}
              </h2>
              {/* PH-06: brand logos pending. Wordmarks keep the row honest. */}
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-bone/35">
                {footer.paymentMethods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-bone/30">{footer.legalLine}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
