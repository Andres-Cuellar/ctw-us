import type {
  AudienceContent,
  CtaBandContent,
  FaqContent,
  FeaturedServicesContent,
  FinancingContent,
  HeroContent,
  MissedCallContent,
  PageSeo,
  ProblemContent,
  ReasonsContent,
  SolutionContent,
  StepsContent,
  TestimonialsContent,
} from "@/content/types";

export const homeSeo: PageSeo = {
  title: "Websites in the Southwest for Local Businesses | creamostuweb",
  description:
    "Websites, CRM, and Google reviews for local businesses in the Southwest. Bilingual support and affordable financing plans.",
};

export const hero: HeroContent = {
  eyebrow: "Digital agency in the Southwest",
  title: "Your business deserves more customers, not more complications",
  sign: {
    lead: "Your business deserves",
    lit: "more customers",
    tail: "not more complications",
    stutter: "3,8",
  },
  subtitle:
    "We build your website and set up the system to answer, quote, and close clients from one single place. Bilingual team with flexible financing plans.",
  primaryCta: { label: "Apply for financed web", kind: "apply" },
  secondaryCta: { label: "Message us on WhatsApp", kind: "whatsapp" },
  trustLine: [
    "No large upfront down payment",
    "Bilingual support (EN / ES)",
    "Everything configured for you",
  ],
  backdrop: {
    src: "/images/home/vegas-strip-night.jpg",
    alt: "The Southwest illuminated at night",
  },
  feed: [
    { label: "New Google Review", detail: "Requested automatically upon job completion", hue: "gold" },
    { label: "Missed Call", detail: "Instant text message sent back", hue: "wine" },
    { label: "New Appointment Booked", detail: "Via WhatsApp at 11:48 PM", hue: "cyan" },
  ],
};

export const problem: ProblemContent = {
  title: "Sound familiar?",
  pains: [
    "You get calls while working, you can't answer, and that client ends up calling your competitor.",
    "You have plenty of happy customers, but almost zero reviews on Google.",
    "Messages come from WhatsApp, Facebook, Instagram, and phone calls, and some fall through the cracks.",
    "You know you need a website, but other agencies demanded thousands of dollars upfront.",
    "You already hired a webmaster who disappeared and never left anything working properly.",
  ],
  closer: "It's not a lack of hard work. It's the lack of a system.",
  closerSign: {
    lead: "It's not a lack of hard work.",
    lit: "It's the lack of a system.",
    stutter: "4,14",
  },
  media: {
    src: "/images/home/barbershop-busy.jpg",
    alt: "Barbers working with clients in the chair",
  },
  mediaBadge: { label: "Missed Call", detail: "While you were serving another client" },
};

export const solution: SolutionContent = {
  title:
    "Everything your business needs to sell online, in one single place",
  body: "We don't just sell you a pretty website. We deliver the website, the system to respond to every lead, and the tools to get recommended more. We configure it all, so you can focus on your business.",
  dashboard: {
    windowTitle: "Your Dashboard",
    inboxTitle: "All your messages in one place",
    messages: [
      { channel: "WhatsApp", preview: "Do you have an opening tomorrow?", hue: "cyan" },
      { channel: "Instagram", preview: "How much is this service?", hue: "wine" },
      { channel: "Phone", preview: "Missed call · SMS sent", hue: "gold" },
      { channel: "Facebook", preview: "My neighbor recommended you", hue: "cyan" },
    ],
    chartTitle: "Clients coming from your website",
    chartCaption: "Dashboard overview",
  },
};

export const featuredServices: FeaturedServicesContent = {
  title: "Systems tailored to your business stage",
  cards: [
    {
      icon: "crm",
      title: "Growth Engine (Starter)",
      body: "Professional web presence up to 5 pages, centralized CRM, unified inbox, and instant missed-call text back.",
      cta: { label: "Explore Growth Engine", kind: "anchor", href: "/servicios#paquetes" },
    },
    {
      icon: "web",
      title: "Sales Autopilot (Recommended)",
      body: "Sales machine: web up to 10 pages, sales pipeline, automated follow-up, reviews, and Meta Ads campaigns with $400 USD managed ad spend included.",
      cta: { label: "View Sales Autopilot", kind: "anchor", href: "/servicios#paquetes" },
    },
    {
      icon: "ai",
      title: "Market Leader (Premium)",
      body: "Market dominance: 24/7 AI agent, web up to 20 pages, 10,000 SMS, VIP advisory, and omnichannel Meta + Google Ads with $800 USD managed ad spend included.",
      cta: { label: "View Market Leader", kind: "anchor", href: "/servicios#paquetes" },
    },
    {
      icon: "call",
      title: "Calls that don't get lost",
      body: "If you're busy and can't pick up, your client receives an instant automated text message so they don't call the competition.",
      cta: { label: "See how it works", kind: "anchor", href: "/servicios#herramientas" },
    },
    {
      icon: "reviews",
      title: "Google reviews & reputation",
      body: "Automated review requests sent to happy customers after every job to dominate local Google search results.",
      cta: {
        label: "View tools",
        kind: "anchor",
        href: "/servicios#herramientas",
      },
    },
    {
      icon: "store",
      title: "Online store & payments",
      body: "24/7 catalog, payment links in quotes and invoices with credit card, Apple Pay, and financing.",
      cta: { label: "View options", kind: "anchor", href: "/servicios#tiendas" },
    },
  ],
};

export const financing: FinancingContent = {
  title: "Your professional website, without paying all at once",
  body: "We know that when you're growing, every dollar counts. That's why we offer financing plans so you can start today with a predictable monthly payment that fits your budget.",
  benefits: [
    "No large upfront down payment",
    "Fixed monthly fee",
    "Hosting, security, and updates included",
    "Your website ready in 7 to 14 days",
  ],
  cta: { label: "Apply now", kind: "apply" },
  plan: {
    title: "Your plan, month by month",
    monthLabel: "Month",
    months: 12,
    note: "The same monthly payment. No surprises.",
  },
};

export const steps: StepsContent = {
  title: "Getting started is this simple",
  steps: [
    {
      title: "Apply in 2 minutes",
      body: "Choose a time on the calendar or message us on WhatsApp.",
    },
    {
      title: "30-minute consultation",
      body: "We explain what you need, what you don't, and clear pricing without fine print.",
    },
    {
      title: "We build everything",
      body: "We design your website and configure your system. You just approve.",
    },
    {
      title: "Start receiving clients",
      body: "We deliver everything fully working and teach you how to use it with ease.",
    },
  ],
};

export const audience: AudienceContent = {
  title: "We work with businesses like yours",
  trades: [
    "Construction & Remodeling",
    "Roofing",
    "Cleaning Services",
    "Landscaping",
    "Auto Repair Shops",
    "Beauty Salons & Barbershops",
    "Restaurants & Food Trucks",
    "Tax Preparers & Accountants",
    "Insurance Agencies",
    "Clinics & Spas",
  ],
  body: "If your business relies on calls, appointments, or referrals, this is for you.",
  bodySign: {
    lead: "If your business relies on calls, appointments, or referrals,",
    lit: "this is for you.",
    stutter: "2,8",
  },
  gallery: [
    { src: "/images/home/barber.jpg", alt: "Barber finishing a haircut", caption: "Barbershops" },
    { src: "/images/home/taco-truck-night.jpg", alt: "Taco food truck open at night", caption: "Food trucks" },
    { src: "/images/home/mechanic.jpg", alt: "Mechanic shop with cars being repaired", caption: "Auto Repair" },
    { src: "/images/home/construction.jpg", alt: "Construction workers on site", caption: "Construction" },
  ],
};

export const reasons: ReasonsContent = {
  title: "Why local businesses choose us",
  reasons: [
    {
      title: "We speak your language",
      body: "Bilingual team in English and Spanish, and your website can be bilingual as well.",
    },
    {
      title: "We do the work for you",
      body: "We don't hand you software to figure out alone. We configure it completely for your workflow.",
    },
    {
      title: "We're right here in the Southwest",
      body: "We're based in the Southwest. You can meet with us in person.",
    },
    {
      title: "We don't disappear",
      body: "Monthly maintenance, updates included, and a phone number we actually answer.",
    },
  ],
  media: {
    src: "/images/home/las-vegas-boulevard.jpg",
    alt: "Vibrant Southwest boulevard at night with bright neon lights",
    caption: "Southwest, USA",
  },
};

export const testimonials: TestimonialsContent = {
  title: "What our clients say",
  /** PH-01: real clients only, with written permission. */
  items: [],
  pendingNote:
    "We are currently gathering permission from clients to publish their testimonials. In the meantime, message us on WhatsApp and we will gladly connect you with existing clients.",
};

export const faq: FaqContent = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "How much does a website cost?",
      answer:
        "It depends on your business needs. We offer everything from single landing pages to complete stores and CRM systems, all with financing options. On a 30-minute call, we'll give you an exact quote.",
    },
    {
      question: "How long does it take?",
      answer:
        "A landing page is ready in about 7 days. A full multi-page business website takes between 10 and 14 days.",
    },
    {
      question: "Do I need technical skills?",
      answer:
        "Not at all. We set up everything and teach you the essentials. If you ever get stuck, just reach out to us.",
    },
    {
      question: "Can my website be in English and Spanish?",
      answer:
        "Yes! We recommend both languages so you can reach all potential customers across the Southwest.",
    },
    {
      question: "What if I already have an existing website?",
      answer:
        "We review it for free and let you know whether it's best to upgrade it or build a fresh, high-converting site.",
    },
  ],
};

export const ctaFinal: CtaBandContent = {
  title: "Your competition is already online. Are you?",
  body: "Apply today and in less than two weeks your business can be generating new clients.",
  primaryCta: { label: "Apply for financed web", kind: "apply" },
  secondaryCta: { label: "Message us on WhatsApp", kind: "whatsapp" },
  showPhoneMonument: true,
  backdrop: {
    src: "/images/home/neon-street.jpg",
    alt: "",
  },
};

export const missedCall: MissedCallContent = {
  eyebrow: "Example",
  title: "The call that doesn't get lost",
  body: "You're working on a job when a call comes in. You can't answer. Instead of losing that customer, your system instantly sends a text message and keeps the conversation going.",
  demoLabel: "System demonstration",
  caller: { name: "New Client", number: "(702) 555-0148" },
  ringing: "Incoming call",
  missed: "Missed call",
  missedNote: "Before, this is where you lost the customer.",
  outgoing:
    "Hi, thanks for calling! I'm on a job right now and couldn't answer. How can I help you today?",
  incoming: "Hi, I need an estimate. When can you come take a look?",
  replayLabel: "Watch again",
  cta: { label: "I want this for my business", kind: "apply" },
};
