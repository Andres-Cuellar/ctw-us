/**
 * Single source of truth for brand facts.
 *
 * Never hardcode a phone number, email, or address in a component. If a value
 * is wrong it must be wrong in exactly one place.
 *
 * See docs/BRIEF.md section 2.
 */

const PHONE_E164 = "+17252637598";

/**
 * OPEN-01: the project domain is creamostuweb.us but the client copy uses
 * hola@creamostuweb.co in the footer and contact cards. Both are kept here so
 * aligning them is a one-line change.
 */
const EMAIL_DOMAIN = "creamostuweb.co";

const WHATSAPP_PREFILL =
  "Hola, vi su página y quiero información sobre una página web para mi negocio.";

export const LOCALES = ["es", "en"] as const;
export const DEFAULT_LOCALE = "es";
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export const site = {
  name: "creamostuweb",
  domain: "creamostuweb.us",
  url: "https://creamostuweb.us",

  phone: {
    e164: PHONE_E164,
    display: "+1 (725) 263-7598",
    href: `tel:${PHONE_E164}`,
  },

  sms: {
    e164: PHONE_E164,
    display: "+1 (725) 263-7598",
    href: `sms:${PHONE_E164}?&body=${encodeURIComponent("Hola, quiero información sobre una página web para mi negocio.")}`,
  },

  whatsapp: {
    display: "+1 (725) 263-7598",
    prefill: WHATSAPP_PREFILL,
    href: `https://wa.me/${PHONE_E164.replace("+", "")}?text=${encodeURIComponent(
      WHATSAPP_PREFILL,
    )}`,
  },

  email: {
    address: `hola@${EMAIL_DOMAIN}`,
    href: `mailto:hola@${EMAIL_DOMAIN}`,
  },

  address: {
    street: "103 Red Tee Ln",
    city: "Las Vegas",
    region: "NV",
    /** Not supplied by the client. Needed for LocalBusiness JSON-LD. */
    postalCode: null,
    country: "US",
    note: "Solo con cita previa",
    /** Resolves without a hardcoded place ID or API key. */
    directionsHref:
      "https://www.google.com/maps/dir/?api=1&destination=" +
      encodeURIComponent("103 Red Tee Ln, Las Vegas, NV"),
  },

  hours: {
    weekdays: "9:00 am a 6:00 pm",
    summary: "Lunes a viernes, 9:00 am a 6:00 pm",
    /** Schema.org openingHours shorthand. */
    schema: ["Mo-Fr 09:00-18:00"],
  },

  serviceArea: ["Southwest", "Nevada", "Arizona", "Utah", "California"],

  /** PH-03: handle not supplied. Links stay hidden until this is filled. */
  social: {
    handle: null as string | null,
    instagram: null as string | null,
    facebook: null as string | null,
    tiktok: null as string | null,
  },

  /** PH-04 / PH-08: destinations not supplied yet. */
  external: {
    bookingCalendar: null as string | null,
    clientPortal: null as string | null,
    makeAPayment: null as string | null,
  },
} as const;

export type Site = typeof site;
