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

export function detailingSeo(city: string, cityLower: string): PageSeo {
  return {
    title: `Auto Detailing Marketing & Booking in ${city} | creamostuweb`,
    description: `Book more auto detailing jobs in ${cityLower} with a website, CRM, missed-call text back, 24/7 scheduling, and AI. Compare plans for your shop.`,
  };
}

export function detailingHero(city: string): HeroContent {
  return {
    eyebrow: `More customers for your detailing business in ${city}`,
    title: "While you work on a car, our system books your next customer.",
    sign: {
      lead: "While you work on a car,",
      lit: "Our system books your next customer.",
      tail: "",
    },
    subtitle: "Stop losing revenue when you can't answer the phone. We set up your website, CRM, and automations to turn missed calls and messages into appointments.",
    primaryCta: { label: "Book a free consultation", kind: "book" },
    secondaryCta: { label: "Talk to an advisor", kind: "whatsapp" },
    trustLine: ["Missed-call text back", "24/7 online booking", "Deposits and reminders"],
    offer: {
      title: "NOVEMBER OFFER",
      body: "Get 50% off the setup fee on any plan. Choose this promotion or the annual offer; they cannot be combined.",
    },
  };
}

export function detailingProblem(): ProblemContent {
  return {
    title: "Your hands are busy. Your next customer is calling someone else.",
    pains: [
      "A missed call can cost hundreds: You're detailing a car when the phone rings. The customer calls the next detailer in {{city}}, and a $250 job is gone.",
      "Inconsistent leads: You rely on word of mouth or Facebook groups instead of a steady way to reach new customers.",
      "Last-minute no-shows: A customer doesn't show up, and you lose three hours of work without a deposit.",
    ],
    closer: "The solution: We run ads to bring in qualified leads. When you can't pick up, the system sends an immediate text: ‘I'm detailing a vehicle right now. What car do you have, and what service are you looking for?’ The conversation keeps moving while you finish the job.",
    closerSign: {
      lead: "The solution: ",
      lit: "ads that bring leads + automatic texts that keep the sale moving.",
    },
  };
}

export function detailingBundles(city: string): BundlesContent {
  return {
    title: `Choose the system your detailing business needs in ${city}`,
    subtitle: "Three levels of service, clear pricing, and an annual offer that waives the setup fee.",
    positioningIntro: "Choose the right system for your detailing business.",
    bundles: [
      {
        id: "growth-engine",
        name: "Growth Engine",
        tagline: "Presence and control",
        tier: "Starter",
        targetAudience: "For detailers who need a professional presence and a way to capture missed calls.",
        setupPrice: "$1,999 USD",
        setupPromoPrice: "$999.50 USD",
        monthlyPrice: "$497 USD",
        monthlyCadence: "/month",
        annualPromo: "Annual offer: Pay for ~~12~~ 6 months of service and get the $1,999 setup fee waived.",
        cta: { label: "Start with Growth Engine", kind: "apply" },
        features: [
          "Free AI receptionist for the first 2 months: up to 5,000 messages to answer questions and book appointments.",
          "High-converting website (up to 5 pages).",
          "Automatic text response to missed calls.",
          "Instagram, Facebook, WhatsApp, and SMS conversations in one inbox.",
        ],
      },
      {
        id: "sales-autopilot",
        name: "Sales Autopilot",
        tagline: "Bookings and ads",
        badge: "Most popular",
        tier: "Recommended",
        targetAudience: "For detailers who want a steady flow of leads and deposits to secure bookings.",
        setupPrice: "$3,499 USD",
        setupPromoPrice: "$1,749.50 USD",
        monthlyPrice: "$1,697 USD",
        monthlyCadence: "/month",
        inheritsFrom: "Everything in Growth Engine, plus:",
        annualPromo: "Annual offer: Pay for ~~12~~ 6 months of service and get the $3,499 setup fee waived.",
        cta: { label: "Automate my bookings", kind: "apply" },
        features: [
          "AI receptionist included to answer questions and book appointments.",
          "Managed Meta Ads (Facebook and Instagram) to bring in detailing leads.",
          "$400 USD/month in ad spend included in your monthly fee.",
          "24/7 online booking with automatic deposit collection.",
          "Automatic SMS reminders and Google review requests.",
        ],
      },
      {
        id: "market-leader",
        name: "Market Leader",
        tagline: "The complete detailing system",
        badge: "Premium",
        tier: "Premium",
        targetAudience: "For owners ready to expand their reach with AI and Google Ads.",
        setupPrice: "$6,999 USD",
        setupPromoPrice: "$3,499.50 USD",
        monthlyPrice: "$2,797 USD",
        monthlyCadence: "/month",
        inheritsFrom: "Everything in Sales Autopilot, plus:",
        annualPromo: "Annual offer: Pay for ~~12~~ 6 months of service and get the $6,999 setup fee waived.",
        cta: { label: "Grow my market presence", kind: "apply" },
        features: [
          "Google Ads and Meta Ads to reach customers actively searching for auto detailing nearby.",
          "$800 USD/month in ad spend included in your monthly fee.",
          "24/7 AI receptionist to answer quote requests, qualify leads, and book appointments.",
          "10,000 SMS messages per month for reactivation campaigns.",
          "Recovery of unanswered conversations and automated lead follow-up.",
          "Advanced follow-up, customer reactivation, and appointment automations.",
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

export function detailingSystem(): SystemContent {
  return {
    eyebrow: "Inside the system",
    title: "More than a website. A system that keeps your business moving.",
    body: "Capture, organize, and convert leads with everything connected in one place.",
    features: [
      { icon: "crm", title: "24/7 online booking", body: "Customers book whenever it's convenient, and every appointment goes into one calendar." },
      { icon: "call", title: "Missed-call text back", body: "When you're working on a car, an instant text keeps the conversation going." },
      { icon: "ai", title: "AI receptionist", body: "Answers questions, qualifies leads, and books appointments while you keep working." },
      { icon: "store", title: "Card deposits", body: "Customers secure their appointment with a deposit, helping reduce no-shows." },
      { icon: "reviews", title: "Reminders and reviews", body: "Automatic appointment reminders and Google review requests after each service." },
      { icon: "web", title: "Website and local SEO", body: "A dedicated page for each city you serve, built to be found in local search." },
    ],
  };
}

export function detailingReviews(): ReviewsContent {
  return {
    eyebrow: "What this could look like",
    title: "Picture a day with fewer missed calls and more confirmed appointments.",
    disclaimer: "Illustrative examples. We are collecting verified reviews from our first detailing clients.",
    reviews: [
      { quote: "I used to miss calls while washing cars. Now the system follows up, books appointments, and collects deposits.", name: "Carlos M.", business: "Detailing Pro LV", city: "Las Vegas, NV", rating: 5 },
      { quote: "The ads bring in leads, and the calendar helps me stay organized without chasing every message.", name: "José R.", business: "Bright Auto Detail", city: "Los Angeles, CA", rating: 5 },
      { quote: "Collecting deposits has made my schedule more predictable and reduced wasted time.", name: "Miguel S.", business: "Premium Shine", city: "San Diego, CA", rating: 5 },
    ],
  };
}

export function detailingFaq(city: string): NicheFaqContent {
  return {
    eyebrow: "Frequently asked questions",
    title: `What detailers in ${city} ask before getting started.`,
    items: [
      { question: "How long does setup take?", answer: "A typical setup takes two to three weeks, depending on the content and account access you provide." },
      { question: "What is included in the monthly fee?", answer: "The system license, hosting, maintenance, support, and the booking, SMS, deposit, and campaign features included in your plan." },
      { question: "Will I own my domain and accounts?", answer: "Yes. Your domain, ad accounts, phone number, and data remain in your name. We manage them for you." },
      { question: "Do I need technical experience?", answer: "No. We configure the system and show you and your team how to use it." },
      { question: "What happens when I miss a call?", answer: "The system sends an immediate text and saves the conversation so you can pick it up after the job." },
      { question: "How does payment work?", answer: "The setup fee is due at the start, and the service fee is billed monthly. The annual offer waives the setup fee." },
      { question: "What if I already have a website?", answer: "We can build on it or replace it with a site designed to convert. We'll recommend the best option during your consultation." },
    ],
  };
}

export function detailingCtaFinal(): CtaBandContent {
  return {
    title: "Ready for a fuller calendar?",
    body: "Book a free 30-minute consultation to see what your detailing business needs.",
    primaryCta: { label: "Chat on WhatsApp", kind: "whatsapp" },
    secondaryCta: { label: "Book a free consultation", kind: "book" },
    showPhoneMonument: true,
  };
}
