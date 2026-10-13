import type {
  BookingContent,
  ChannelsContent,
  FaqContent,
  FormContent,
  HeroContent,
  HoursContent,
  MapContent,
  PageSeo,
} from "@/content/types";
import { site } from "@/shared/config/site";

export const contactoSeo: PageSeo = {
  title: "Contacto y Cotización Gratis | creamostuweb Suroeste",
  description:
    "Escríbenos por WhatsApp o agenda una llamada gratis de 15 minutos. Respondemos el mismo día en español o inglés.",
};

export const hero: HeroContent = {
  eyebrow: "Contacto",
  title: "Hablemos de tu negocio",
  subtitle:
    "Escríbenos, llámanos o visítanos. Te respondemos el mismo día hábil, en español o en inglés.",
};

export const form: FormContent = {
  title: "Aplica a tu web financiada o pide tu cotización",
  fields: [
    {
      id: "nombre",
      label: "Nombre completo",
      kind: "text",
      required: true,
      autoComplete: "name",
    },
    {
      id: "negocio",
      label: "Nombre de tu negocio",
      kind: "text",
      required: true,
      autoComplete: "organization",
    },
    {
      id: "telefono",
      label: "Teléfono (WhatsApp)",
      kind: "tel",
      required: true,
      autoComplete: "tel",
      placeholder: "(725) 000-0000",
    },
    {
      id: "email",
      label: "Email",
      kind: "email",
      required: true,
      autoComplete: "email",
    },
    {
      id: "giro",
      label: "¿A qué se dedica tu negocio?",
      kind: "select",
      required: false,
      options: [
        "Construcción",
        "Roofing",
        "Limpieza",
        "Landscaping",
        "Taller",
        "Belleza",
        "Restaurante",
        "Servicios profesionales",
        "Otro",
      ],
    },
    {
      id: "necesidades",
      label: "¿Qué necesitas?",
      kind: "checkboxGroup",
      required: false,
      options: [
        "Página web",
        "Tienda en línea",
        "CRM",
        "Reseñas en Google",
        "Asistente con IA",
        "No estoy seguro",
      ],
    },
    {
      id: "tieneWeb",
      label: "¿Ya tienes página web?",
      kind: "radio",
      required: false,
      options: ["Sí", "No"],
    },
    {
      id: "financiamiento",
      label: "¿Te interesa el financiamiento?",
      kind: "radio",
      required: false,
      options: ["Sí", "No"],
    },
    {
      id: "mensaje",
      label: "Cuéntanos un poco más",
      kind: "textarea",
      required: false,
      placeholder: "Opcional",
    },
    {
      id: "consentimiento",
      /**
       * LEGAL: starting point for A2P 10DLC registration, not approved copy.
       * Must be reviewed before launch. See docs/BRIEF.md section 7.
       */
      label:
        "Acepto recibir mensajes de texto y WhatsApp de creamostuweb sobre mi solicitud. Pueden aplicar tarifas de mensajes y datos. Responde STOP para cancelar.",
      kind: "consent",
      required: true,
    },
  ],
  submitLabel: "Enviar solicitud",
  submittingLabel: "Enviando…",
  confirmation: `¡Gracias! Recibimos tu solicitud. Te escribiremos por WhatsApp en las próximas horas hábiles. Si es urgente, llámanos al ${site.phone.display}.`,
  errorMessage: `No pudimos enviar tu solicitud. Revisa tu conexión e inténtalo otra vez, o escríbenos por WhatsApp al ${site.phone.display}.`,
};

export const channels: ChannelsContent = {
  title: "Otras formas de encontrarnos",
  channels: [
    {
      kind: "whatsapp",
      label: "WhatsApp",
      value: site.whatsapp.display,
      body: "La forma más rápida.",
      cta: { label: "Escríbenos", kind: "whatsapp" },
    },
    {
      kind: "phone",
      label: "Teléfono",
      value: site.phone.display,
      body: "Llámanos en horario de oficina.",
      cta: { label: "Llamar ahora", kind: "call" },
    },
    {
      kind: "email",
      label: "Email",
      value: site.email.address,
      body: "Para propuestas y documentos.",
      cta: { label: "Enviar email", kind: "email" },
    },
    {
      kind: "office",
      label: "Oficina",
      value: `${site.address.street}, ${site.address.city}, ${site.address.region}`,
      body: "Solo con cita previa.",
      cta: { label: "Cómo llegar", kind: "directions" },
    },
  ],
};

export const booking: BookingContent = {
  title: "¿Prefieres hablar directamente?",
  body: "Escoge el día y la hora que te queden mejor. Son 15 minutos, gratis y sin compromiso.",
  /** PH-04: calendar embed pending. */
  pendingNote:
    "La agenda en línea está en camino. Mientras tanto, escríbenos por WhatsApp y te damos una hora hoy mismo.",
};

export const hours: HoursContent = {
  title: "Horario de atención",
  rows: [
    `Lunes a viernes: ${site.hours.weekdays}`,
    "Sábados: cerrado",
    "Domingos: cerrado (el WhatsApp recibe mensajes 24/7)",
  ],
};

export const map: MapContent = {
  title: "Dónde estamos",
  body: "Atendemos negocios en todo el Suroeste (Nevada, Arizona, Utah, California y más).",
  /** PH-05: Google Map embed pending. */
  pendingNote: "Mapa en camino.",
};

export const faq: FaqContent = {
  title: "Preguntas rápidas",
  items: [
    {
      question: "¿Cuánto tardan en responder?",
      answer:
        "El mismo día hábil. Por WhatsApp, normalmente en menos de una hora.",
    },
    {
      question: "¿La primera llamada tiene costo?",
      answer: "No. Es gratis y sin compromiso.",
    },
    {
      question: "¿Puedo reunirme en persona?",
      answer:
        "Sí. Agenda una cita y nos vemos en nuestra oficina o en tu negocio.",
    },
  ],
};
