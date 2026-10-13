import type { GlobalContent } from "@/content/types";

/** Paths are locale-relative. withLocale() in src/shared/lib/routes.ts prefixes them. */
export const globalContent: GlobalContent = {
  topBar: {
    message: "Financing plans available",
    callLabel: "Call us",
  },

  nav: {
    links: [
      { label: "Home", href: "/" },
      {
        label: "Services",
        href: "/servicios",
        children: [
          {
            label: "Websites",
            badge: "Financed",
            tagline: "Landing pages and business websites that bring customers.",
            href: "/servicios#paginas-web",
          },
          {
            label: "Tools (Digital Suite)",
            badge: "From $47/mo",
            tagline: "CRM, Google reviews, invoicing and 24/7 AI assistant.",
            href: "/servicios#herramientas",
          },
          {
            label: "All-in-One Service",
            badge: "★ Complete System",
            tagline: "Website + CRM + Sales automation & client follow-up.",
            href: "/servicios#paquetes",
          },
          {
            label: "Online Stores",
            badge: "E-commerce",
            tagline: "24/7 product catalog with card payments & shipping.",
            href: "/servicios#tiendas",
          },
        ],
      },
      { label: "About Us", href: "/nosotros" },
      { label: "Contact", href: "/contacto" },
    ],
    cta: { label: "Apply Now", kind: "apply" },
    menuLabel: "Open menu",
    closeLabel: "Close menu",
  },

  fab: {
    bubble: "Questions? Chat with us",
    ariaLabel: "Message us on WhatsApp",
  },

  footer: {
    brandBlurb:
      "Websites, CRM, and digital tools for local businesses in the Southwest.",
    columns: [
      {
        heading: "Services",
        links: [
          { label: "Websites", href: "/servicios#paginas-web" },
          { label: "Online Stores", href: "/servicios#tiendas" },
          { label: "CRM", href: "/servicios#herramientas" },
          { label: "Review Management", href: "/servicios#herramientas" },
          { label: "Invoices & Contracts", href: "/servicios#herramientas" },
          { label: "AI Assistant", href: "/servicios#herramientas" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "FAQ", href: "/servicios#preguntas" },
          { label: "Client Portal", href: "" },
          { label: "Make a Payment", href: "" },
          { label: "Privacy Policy", href: "" },
          { label: "Terms & Conditions", href: "" },
        ],
      },
    ],
    contactHeading: "Contact",
    socialPrompt: "Follow us on Instagram, Facebook, and TikTok",
    paymentHeading: "Payment Methods",
    paymentMethods: [
      "Visa",
      "Mastercard",
      "Amex",
      "Apple Pay",
      "Google Pay",
      "Zelle",
      "Cash App",
      "Affirm",
    ],
    legalLine: "© 2026 creamostuweb. All rights reserved.",
  },

  skipToContent: "Skip to content",
};
