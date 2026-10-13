import type { Cta } from "@/content/types";
import { DEFAULT_LOCALE, site, type Locale } from "@/shared/config/site";

/** Prefix a locale-relative content path with the active locale. */
export function withLocale(locale: Locale, path: string): string {
  if (!path.startsWith("/")) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Anchor targets the CTA kinds point at. Kept here so they cannot drift. */
export const ANCHORS = {
  application: "aplica",
  booking: "agenda",
} as const;

export interface ResolvedCta {
  label: string;
  href: string;
  /** Opens a third-party destination, so it needs rel/target handling. */
  external: boolean;
}

export function resolveCta(cta: Cta, locale: Locale = DEFAULT_LOCALE): ResolvedCta {
  switch (cta.kind) {
    case "apply":
      return {
        label: cta.label,
        href: `${withLocale(locale, "/contacto")}#${ANCHORS.application}`,
        external: false,
      };
    case "book":
      return {
        label: cta.label,
        href: `${withLocale(locale, "/contacto")}#${ANCHORS.booking}`,
        external: false,
      };
    case "whatsapp":
      return { label: cta.label, href: site.whatsapp.href, external: true };
    case "call":
      return { label: cta.label, href: site.phone.href, external: false };
    case "email":
      return { label: cta.label, href: site.email.href, external: false };
    case "directions":
      return { label: cta.label, href: site.address.directionsHref, external: true };
    case "anchor": {
      const href = cta.href ?? "#";
      // A bare "#id" stays on the page; a "/path" is locale-relative.
      return {
        label: cta.label,
        href: href.startsWith("/") ? withLocale(locale, href) : href,
        external: false,
      };
    }
  }
}
