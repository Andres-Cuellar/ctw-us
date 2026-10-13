import type {
  CtaBandContent,
  HeroContent,
  MissionContent,
  PageSeo,
  ReasonsContent,
  StatsContent,
  StoryContent,
  ValuesContent,
} from "@/content/types";

export const nosotrosSeo: PageSeo = {
  title: "Digital Agency in the Southwest | creamostuweb",
  description:
    "We help local businesses grow online with high-converting websites and commercial systems. Discover our story.",
};

export const hero: HeroContent = {
  eyebrow: "About Us",
  title: "Empowering local businesses to grow and stand out online",
  subtitle:
    "We know the dedication it takes to build a thriving business. That's why we make the digital side the easiest part of your day.",
};

export const story: StoryContent = {
  title: "How creamostuweb started",
  paragraphs: [
    "creamostuweb was born from the experience of founder Felipe Cuéllar, designing high-converting websites, CRMs, and commercial automations for businesses in Colombia and the United States.",
    "Along the way, he kept seeing the exact same pattern: hardworking local business owners with exceptional service losing valuable clients because they couldn't answer calls in time, lacked Google reviews, or had been burned by an agency that delivered a broken site.",
    "So we built what we wished existed: an agency that speaks your language, explains everything in plain English and Spanish, sets up the entire system for you, and remains by your side long after launch.",
  ],
};

export const mission: MissionContent = {
  title: "Our Mission",
  body: "To ensure no business in the Southwest ever loses a client simply due to not having a digital presence or failing to answer in time.",
};

export const difference: ReasonsContent = {
  title: "We are not just another digital agency",
  reasons: [
    {
      title: "We leave everything working",
      body: "Other agencies sell you software and leave you on your own. We configure it specifically for your business and train you on how to use it.",
    },
    {
      title: "Crystal-clear pricing",
      body: "We tell you exactly what it costs before starting. No surprise fees, no hidden fine print.",
    },
    {
      title: "Accessible financing",
      body: "Get started with an affordable monthly payment, instead of thousands of dollars all at once.",
    },
    {
      title: "All in one place",
      body: "Website, messaging, reviews, estimates, and online appointments seamlessly connected.",
    },
  ],
};

export const values: ValuesContent = {
  title: "How We Work",
  values: [
    { title: "Trust", body: "We do what we say, when we say we'll do it." },
    { title: "Clarity", body: "We explain everything in straightforward terms without technical jargon." },
    {
      title: "Results",
      body: "We measure success by new clients coming through your doors, not just pretty designs.",
    },
    {
      title: "Close Partnership",
      body: "We answer your messages and you can meet with us locally in person.",
    },
  ],
};

export const stats: StatsContent = {
  title: "In Numbers",
  stats: [
    { label: "Businesses Served", value: null },
    { label: "Websites Delivered", value: null },
    { label: "Years of Experience", value: null },
    { label: "Languages", value: "English & Spanish" },
  ],
  pendingNote:
    "We only display verified figures. We are concluding our annual audit before publishing the numbers here.",
};

export const ctaFinal: CtaBandContent = {
  title: "Let's connect",
  body: "Grab a coffee with us or schedule a 15-minute phone call. We'll share how we can help your business, with no pressure.",
  primaryCta: { label: "Book your free call", kind: "book" },
  secondaryCta: { label: "Message us on WhatsApp", kind: "whatsapp" },
};
