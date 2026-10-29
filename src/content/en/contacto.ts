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
  title: "Contact & Free Consultation | creamostuweb Southwest",
  description:
    "Message us on WhatsApp or book a free 30-minute consultation on our calendar.",
};

export const hero: HeroContent = {
  eyebrow: "Contact",
  title: "Let's talk about your business",
  subtitle:
    "Message us, call us, or schedule a visit. We respond the same business day, in English or Spanish.",
  primaryCta: { label: "Book a free consultation", kind: "book" },
};

export const form: FormContent = {
  title: "Apply for a financed website or request a quote",
  fields: [
    {
      id: "nombre",
      label: "Full name",
      kind: "text",
      required: true,
      autoComplete: "name",
    },
    {
      id: "negocio",
      label: "Business name",
      kind: "text",
      required: true,
      autoComplete: "organization",
    },
    {
      id: "telefono",
      label: "Phone number (WhatsApp)",
      kind: "tel",
      required: true,
      autoComplete: "tel",
      placeholder: "(725) 000-0000",
    },
    {
      id: "email",
      label: "Email address",
      kind: "email",
      required: true,
      autoComplete: "email",
    },
    {
      id: "giro",
      label: "What industry is your business in?",
      kind: "select",
      required: false,
      options: [
        "Construction",
        "Roofing",
        "Cleaning",
        "Landscaping",
        "Auto Repair",
        "Beauty & Salon",
        "Restaurant & Food",
        "Professional Services",
        "Other",
      ],
    },
    {
      id: "necesidades",
      label: "What do you need?",
      kind: "checkboxGroup",
      required: false,
      options: [
        "Website",
        "Online Store",
        "CRM System",
        "Google Reviews",
        "AI Assistant",
        "Not sure yet",
      ],
    },
    {
      id: "tieneWeb",
      label: "Do you already have a website?",
      kind: "radio",
      required: false,
      options: ["Yes", "No"],
    },
    {
      id: "financiamiento",
      label: "Are you interested in monthly financing?",
      kind: "radio",
      required: false,
      options: ["Yes", "No"],
    },
    {
      id: "mensaje",
      label: "Tell us a bit more about your project",
      kind: "textarea",
      required: false,
      placeholder: "Optional",
    },
    {
      id: "consentimiento",
      label:
        "I consent to receive SMS and WhatsApp messages from creamostuweb regarding my request. Message and data rates may apply. Reply STOP to opt out.",
      kind: "consent",
      required: true,
    },
  ],
  submitLabel: "Send Request",
  submittingLabel: "Sending…",
  confirmation: `Thank you! We received your inquiry. We will reach out on WhatsApp within business hours. For immediate assistance, call us at ${site.phone.display}.`,
  errorMessage: `We could not submit your request. Please check your connection and try again, or message us on WhatsApp at ${site.phone.display}.`,
};

export const channels: ChannelsContent = {
  title: "Other ways to reach us",
  channels: [
    {
      kind: "whatsapp",
      label: "WhatsApp",
      value: site.whatsapp.display,
      body: "The fastest response.",
      cta: { label: "Message us", kind: "whatsapp" },
    },
    {
      kind: "phone",
      label: "Phone",
      value: site.phone.display,
      body: "Call during office hours.",
      cta: { label: "Call now", kind: "call" },
    },
    {
      kind: "email",
      label: "Email",
      value: site.email.address,
      body: "For proposals and documents.",
      cta: { label: "Send email", kind: "email" },
    },
    {
      kind: "office",
      label: "Office",
      value: `${site.address.street}, ${site.address.city}, ${site.address.region}`,
      body: "By appointment only.",
      cta: { label: "Get directions", kind: "directions" },
    },
  ],
};

export const booking: BookingContent = {
  title: "Prefer to talk directly?",
  body: "Pick a date and time that suits your schedule. It's 15 minutes, completely free, with no obligation.",
  pendingNote:
    "Online calendar integration coming soon. In the meantime, message us on WhatsApp and we will schedule a time today.",
};

export const hours: HoursContent = {
  title: "Business Hours",
  rows: [
    `Monday to Friday: 9:00 am to 6:00 pm`,
    "Saturday: Closed",
    "Sunday: Closed (WhatsApp messages received 24/7)",
  ],
};

export const map: MapContent = {
  title: "Where we are located",
  body: "Serving businesses throughout the Southwest (Nevada, Arizona, Utah, California and beyond).",
  pendingNote: "Map view coming soon.",
};

export const faq: FaqContent = {
  title: "Quick FAQ",
  items: [
    {
      question: "How quickly do you reply?",
      answer:
        "The same business day. On WhatsApp, usually in less than one hour.",
    },
    {
      question: "Is the initial consultation free?",
      answer: "Yes, 100% free with no obligation.",
    },
    {
      question: "Can we meet in person?",
      answer:
        "Yes! Book an appointment and we can meet at our office or at your place of business in the Southwest.",
    },
  ],
};
