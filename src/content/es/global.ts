import type { GlobalContent } from "@/content/types";

/** Paths are locale-relative. withLocale() in src/shared/lib/routes.ts prefixes them. */
export const globalContent: GlobalContent = {
  topBar: {
    message: "Planes de financiamiento disponibles",
    callLabel: "Llámanos",
  },

  nav: {
    links: [
      { label: "Inicio", href: "/" },
      {
        label: "Servicios",
        href: "/servicios",
        children: [
          {
            label: "Páginas Web",
            badge: "Financiadas",
            tagline: "Landing pages y webs de negocio que traen clientes.",
            href: "/servicios#paginas-web",
          },
          {
            label: "Tools (Herramientas)",
            badge: "Desde $47/mes",
            tagline: "CRM, Reseñas en Google, Facturas y Asistente con IA.",
            href: "/servicios#herramientas",
          },
          {
            label: "Servicio Todo en Uno",
            badge: "★ Más Completo",
            tagline: "Web + CRM + Automatización de ventas y soporte.",
            href: "/servicios#paquetes",
          },
          {
            label: "Tiendas en Línea",
            badge: "E-commerce",
            tagline: "Catálogo y ventas 24/7 con pagos con tarjeta y envíos.",
            href: "/servicios#tiendas",
          },
        ],
      },
      { label: "Nosotros", href: "/nosotros" },
      { label: "Contacto", href: "/contacto" },
    ],
    cta: { label: "Aplica ahora", kind: "apply" },
    menuLabel: "Abrir menú",
    closeLabel: "Cerrar menú",
  },

  fab: {
    bubble: "¿Tienes preguntas? Escríbenos",
    ariaLabel: "Escríbenos por WhatsApp",
  },

  footer: {
    brandBlurb:
      "Páginas web, CRM y herramientas digitales para negocios en el Suroeste.",
    columns: [
      {
        heading: "Servicios",
        links: [
          { label: "Páginas web", href: "/servicios#paginas-web" },
          { label: "Tiendas en línea", href: "/servicios#tiendas" },
          { label: "CRM", href: "/servicios#herramientas" },
          { label: "Gestión de reseñas", href: "/servicios#herramientas" },
          { label: "Facturas y contratos", href: "/servicios#herramientas" },
          { label: "Asistente con IA", href: "/servicios#herramientas" },
        ],
      },
      {
        heading: "Ayuda",
        links: [
          { label: "Preguntas frecuentes", href: "/servicios#preguntas" },
          // PH-08 / PH-07: destinations pending. Rendered as pending, not as dead links.
          { label: "Portal de clientes", href: "" },
          { label: "Hacer un pago", href: "" },
          { label: "Política de privacidad", href: "" },
          { label: "Términos y condiciones", href: "" },
        ],
      },
    ],
    contactHeading: "Contacto",
    socialPrompt: "Síguenos en Instagram, Facebook y TikTok",
    paymentHeading: "Métodos de pago",
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
    legalLine: "© 2026 creamostuweb. Todos los derechos reservados.",
  },

  skipToContent: "Saltar al contenido",
};
