import type {
  BundlesContent,
  CtaBandContent,
  HeroContent,
  NicheFaqContent,
  PageSeo,
  ProblemContent,
  ReviewsContent,
  SystemContent,
} from "@/content/types";

export function salonSpaSeo(city: string, cityLower: string): PageSeo {
  return {
    title: `Salon & Spa Marketing and Booking in ${city} | creamostuweb`,
    description: `Book more salon and spa clients in ${cityLower} with a website, CRM, 24/7 scheduling, deposits, reminders, and AI follow-up. Compare plans.`,
  };
}

export function salonSpaHero(city: string): HeroContent {
  return {
    eyebrow: `Client acquisition and automation for salons and spas in ${city}`,
    title: "While you care for the client in front of you, your system books the next one.",
    sign: {
      lead: "While you care for the client in front of you,",
      lit: "Your system books the next one.",
      tail: "",
    },
    subtitle: "Stop losing revenue when you can't answer the phone. We set up your website, CRM, and automations to turn missed calls and messages into appointments.",
    primaryCta: { label: "Book a free consultation", kind: "book" },
    secondaryCta: { label: "Talk to an advisor", kind: "whatsapp" },
    trustLine: ["Booking by specialist", "24/7 online booking", "Deposits and reminders"],
    offer: {
      title: "NOVEMBER OFFER",
      body: "Get 50% off the setup fee on any plan. Choose this promotion or the annual offer; they cannot be combined.",
    },
  };
}

export function salonSpaProblem(): ProblemContent {
  return {
    title: "Your clients deserve your attention. Your inbox should not take over your day.",
    pains: [
      "After-hours messages: It's 10 p.m. and you're still answering questions about prices and availability.",
      "Costly no-shows: A client reserves a two-hour appointment and never arrives. That time and revenue are gone.",
      "Unpredictable demand: Some days the salon is quiet because there is no reliable way to bring in new local clients.",
    ],
    closer: "The solution: We run campaigns to reach new clients. Your virtual receptionist answers questions, lets clients choose a service, collects a card deposit, and sends reminders. You can focus on the appointment in front of you.",
    closerSign: {
      lead: "The solution: ",
      lit: "ads that bring clients + a virtual receptionist that books and collects deposits.",
    },
  };
}

export function salonSpaBundles(city: string): BundlesContent {
  return {
    title: `A booking system built for salons and spas in ${city}`,
    subtitle: "Three levels of service, clear pricing, and an annual offer that waives the setup fee.",
    positioningIntro: "Choose the right system for your salon or spa.",
    bundles: [
      {
        id: "growth-engine",
        name: "Growth Engine",
        tagline: "A polished presence",
        tier: "Starter",
        targetAudience: "For salons that want a premium presence, organized bookings, and fewer missed inquiries.",
        setupPrice: "$1,999 USD",
        setupPromoPrice: "$999.50 USD",
        monthlyPrice: "$497 USD",
        monthlyCadence: "/month",
        annualPromo: "Annual offer: Pay for ~~12~~ 6 months of service and get the $1,999 setup fee waived.",
        cta: { label: "Get started with Growth Engine", kind: "apply" },
        features: [
          "Free AI receptionist for the first 2 months: up to 5,000 messages to answer questions and book appointments.",
          "Fast, elegant website (up to 5 pages).",
          "WhatsApp, Instagram DM, and Messenger in one inbox.",
          "Automatic text response to missed calls.",
        ],
      },
      {
        id: "sales-autopilot",
        name: "Sales Autopilot",
        tagline: "A calendar that keeps filling",
        badge: "Most popular",
        tier: "Recommended",
        targetAudience: "For salons and spas that want more new clients and deposits to protect their schedule.",
        setupPrice: "$3,499 USD",
        setupPromoPrice: "$1,749.50 USD",
        monthlyPrice: "$1,697 USD",
        monthlyCadence: "/month",
        inheritsFrom: "Everything in Growth Engine, plus:",
        annualPromo: "Annual offer: Pay for ~~12~~ 6 months of service and get the $3,499 setup fee waived.",
        cta: { label: "Automate my bookings", kind: "apply" },
        features: [
          "AI receptionist included to answer questions and book appointments.",
          "Managed Meta Ads (Facebook and Instagram) to bring in beauty and wellness leads.",
          "$400 USD/month in ad spend included in your monthly fee.",
          "Advanced online booking by service and specialist.",
          "Required deposits and automatic SMS reminders to reduce no-shows.",
        ],
      },
      {
        id: "market-leader",
        name: "Market Leader",
        tagline: "The intelligent salon",
        badge: "Premium",
        tier: "Premium",
        targetAudience: "For busy salons and clinics ready to expand with AI and search advertising.",
        setupPrice: "$6,999 USD",
        setupPromoPrice: "$3,499.50 USD",
        monthlyPrice: "$2,797 USD",
        monthlyCadence: "/month",
        inheritsFrom: "Everything in Sales Autopilot, plus:",
        annualPromo: "Annual offer: Pay for ~~12~~ 6 months of service and get the $6,999 setup fee waived.",
        cta: { label: "Build my complete system", kind: "apply" },
        features: [
          "Google Ads and Meta Ads to reach people searching for salons and spas nearby.",
          "$800 USD/month in ad spend included in your monthly fee.",
          "AI receptionist that chats, provides estimates, and books directly into your calendar.",
          "SMS campaigns to reconnect with inactive clients.",
          "Recovery of unanswered conversations and automated lead follow-up.",
          "Advanced follow-up, client reactivation, and appointment automations.",
        ],
      },
    ],
    conditionsTitle: "Terms that apply to every plan",
    conditionsIntro: "Clear expectations on pricing, ownership, and the scope of each plan.",
    commercialConditions: [
      { title: "1. One-time setup fee", description: "The setup fee covers the agreed scope, configuration, testing, and launch. The annual offer waives this fee in full." },
      { title: "2. Defined monthly service", description: "Your monthly fee covers the license, maintenance, and support included in your tier. We recommend an initial six-month term with clear renewal and cancellation terms." },
      { title: "3. Additional work", description: "Extra sites or pages, special integrations, complex migrations, and new automations are quoted before work begins." },
      { title: "4. You control your assets", description: "Ownership and administration of your domain, data, ad accounts, and phone numbers are defined in the agreement." },
      { title: "5. Results depend on your business", description: "We implement the system and processes. Sales and conversion results also depend on your offer, market, and operations." },
    ],
    note: "The one-time fee covers full setup and launch. An active monthly plan covers maintenance, licenses, and ongoing support.",
    cta: { label: "Book a discovery call", kind: "apply" },
  };
}

export function salonSpaSystem(): SystemContent {
  return {
    eyebrow: "Inside the system",
    title: "More than a website. A system that keeps your salon moving.",
    body: "Attract clients, manage appointments, and collect deposits with everything connected in one place.",
    features: [
      { icon: "crm", title: "Booking by specialist", body: "24/7 bookings organized by service and team member, with clear availability." },
      { icon: "call", title: "Missed-message follow-up", body: "The system responds when you're with a client, so new inquiries don't go unanswered." },
      { icon: "ai", title: "AI receptionist", body: "Answers questions, shares estimates, and books appointments directly into your calendar." },
      { icon: "store", title: "Booking deposits", body: "Clients secure appointments with a deposit, helping protect your schedule." },
      { icon: "reviews", title: "Reminders and reviews", body: "Automatic reminders help reduce no-shows, followed by Google review requests." },
      { icon: "web", title: "Premium website and local SEO", body: "A polished brand presence with dedicated pages for the cities you serve." },
    ],
  };
}

export function salonSpaReviews(): ReviewsContent {
  return {
    eyebrow: "What this could look like",
    title: "Picture a calmer inbox and a more predictable schedule.",
    disclaimer: "Illustrative examples. We are collecting verified reviews from our first salon and spa clients.",
    reviews: [
      { quote: "I used to spend evenings answering messages. Now clients book, pay a deposit, and receive reminders automatically.", name: "Verónica L.", business: "Studio Bella", city: "Las Vegas, NV", rating: 5 },
      { quote: "Booking by specialist made our schedule easier to manage and helped prevent overlapping appointments.", name: "Daniela P.", business: "Glow Salon & Spa", city: "Los Angeles, CA", rating: 5 },
      { quote: "Deposits have made our calendar more dependable and reduced wasted appointment time.", name: "Marisol G.", business: "Divine Beauty", city: "San Diego, CA", rating: 5 },
    ],
  };
}

export function salonSpaFaq(city: string): NicheFaqContent {
  return {
    eyebrow: "Frequently asked questions",
    title: `What salon and spa owners in ${city} ask before getting started.`,
    items: [
      { question: "How long does setup take?", answer: "A typical setup takes two to three weeks, depending on the content and account access you provide." },
      { question: "What is included in the monthly fee?", answer: "The system license, hosting, maintenance, support, and the booking, SMS, deposit, and campaign features included in your plan." },
      { question: "Can clients pay a deposit by card?", answer: "Yes. We can configure card deposits so clients secure their appointments." },
      { question: "Can I set up multiple specialists?", answer: "Yes. Each specialist can have their own availability, and clients can choose who they want to see." },
      { question: "Will I own my domain and accounts?", answer: "Yes. Your domain, ad accounts, phone number, and data remain in your name. We manage them for you." },
      { question: "Do I need technical experience?", answer: "No. We configure the system and show you and your team how to use it." },
      { question: "What if I already have a website?", answer: "We can build on it or replace it with a site designed to convert. We'll recommend the best option during your consultation." },
    ],
  };
}

export function salonSpaCtaFinal(): CtaBandContent {
  return {
    title: "Ready for a fuller calendar?",
    body: "Book a free 30-minute consultation to see what your salon or spa needs.",
    primaryCta: { label: "Chat on WhatsApp", kind: "whatsapp" },
    secondaryCta: { label: "Book a free consultation", kind: "book" },
    showPhoneMonument: true,
  };
}
