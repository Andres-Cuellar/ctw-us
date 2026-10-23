import type {
  AddOnsContent,
  BillingContent,
  BundlesContent,
  CtaBandContent,
  FaqContent,
  HeroContent,
  PageSeo,
  PaymentsContent,
  StoreContent,
  ToolsContent,
  WebTiersContent,
} from "@/content/types";

export const serviciosSeo: PageSeo = {
  title: "Web Design, CRM & Google Reviews in the Southwest | creamostuweb",
  description:
    "Websites, online stores, CRM, review management, and AI assistants. Fully configured for your business, bilingual support.",
};

export const hero: HeroContent = {
  eyebrow: "Services",
  title: "Everything your business needs to grow online",
  subtitle:
    "Websites, online stores, and systems to serve and convert more clients. Choose what you need today and scale when you're ready.",
  anchors: [
    { label: "Websites", kind: "anchor", href: "#paginas-web" },
    { label: "Tools & CRM", kind: "anchor", href: "#herramientas" },
    { label: "⭐ All-in-One Service", kind: "anchor", href: "#paquetes" },
    { label: "Online Stores", kind: "anchor", href: "#tiendas" },
  ],
};

export const webTiers: WebTiersContent = {
  title: "Websites that convert visitors into clients",
  intro:
    "Every website includes custom responsive design, mobile optimization, fast hosting, SSL security certificate, and direct WhatsApp / call buttons. Financing options available.",
  priceNote:
    "We determine exact pricing together on a 15-minute call, along with your personalized financing plan.",
  tiers: [
    {
      name: "Landing Page",
      audience: "To promote a specific service or capture leads from ad campaigns.",
      features: [
        "1 high-converting single page",
        "Lead capture form synced with CRM",
        "Direct call and WhatsApp buttons",
        "Ready in 7 days",
      ],
      cta: { label: "Apply now", kind: "apply" },
    },
    {
      name: "Business Website",
      flag: "Most Popular",
      audience:
        "For businesses that want a credible presence and to rank on Google.",
      features: [
        "Up to 7 pages: Home, Services, About, Gallery, Contact, and more",
        "English and Spanish versions",
        "On-page SEO and Google Business Profile integration",
        "Lead forms and online appointment scheduling",
        "Ready in 10 to 14 days",
      ],
      cta: { label: "Apply now", kind: "apply" },
    },
    {
      name: "Business Pro Web",
      audience: "For established businesses with multiple services, locations, or extensive content.",
      features: [
        "Unlimited pages",
        "Dedicated service and city pages to rank locally on Google",
        "Company blog / resource center",
        "Full CRM integration and advanced automations",
      ],
      cta: { label: "Apply now", kind: "apply" },
    },
  ],
};

export const store: StoreContent = {
  title: "Your store open 24/7",
  intro:
    "Sell your products online with credit card processing, inventory management, and shipping. Perfect for boutiques, beauty products, packaged food, and more.",
  features: [
    "Product catalog with high-res photos and variants",
    "Card processing, Apple Pay, and Google Pay",
    "Automated shipping rates and local store pickup",
    "Automated abandoned cart recovery",
    "Easy mobile dashboard to manage orders on the go",
  ],
  cta: { label: "Get a store quote", kind: "apply" },
};

export const tools: ToolsContent = {
  title: "Tools to serve clients, get paid, and close more sales",
  intro:
    "Use them standalone or paired with your website. We set up everything for you.",
  tools: [
    {
      name: "Business CRM",
      price: "$97",
      cadence: "/mo",
      pitch: "All your clients and conversations in one centralized inbox.",
      features: [
        "WhatsApp, SMS, Facebook, Instagram, and email in a single unified inbox",
        "Visual sales pipeline to track every deal stage",
        "Instant automated text message when a call is missed",
        "Automated follow-ups and appointment reminders",
        "Mobile app for iOS and Android",
      ],
    },
    {
      name: "Google Review Management",
      price: "$97",
      cadence: "/mo",
      pitch: "More 5-star Google reviews without having to chase anyone down.",
      features: [
        "Automated review requests sent via SMS or WhatsApp after each job",
        "Unhappy customers are routed to a private form first",
        "AI-assisted review replies",
        "Embeddable review widget for your website",
      ],
    },
    {
      name: "Invoices & Contracts",
      price: "$47",
      cadence: "/mo",
      pitch: "Quote, collect payment, and sign contracts right from your phone.",
      features: [
        "Custom estimates and invoices with your branding",
        "Online payment links with debit and credit cards",
        "Automated reminders for unpaid invoices",
        "Digital contracts with legally binding e-signatures",
      ],
    },
    {
      name: "AI Business Assistant",
      price: "$297",
      cadence: "/mo",
      pitch: "A virtual team member answering 24/7 in English and Spanish.",
      features: [
        "Answers common questions across WhatsApp, SMS, and website chat",
        "Qualifies leads and books consultations on your calendar",
        "Transfers the conversation to you when the lead is ready to buy",
        "Trained specifically on your business information and policies",
      ],
    },
  ],
};

export const bundles: BundlesContent = {
  title: "Complete commercial systems to scale your business",
  subtitle:
    "Presented across three commercial maturity levels: don't just buy isolated web pages or software, build the infrastructure your stage requires.",
  positioningIntro:
    "Structure your lead generation, automate your follow-ups, or dominate your market with artificial intelligence.",
  bundles: [
    {
      id: "growth-engine",
      name: "Growth Engine",
      tagline: "Digital infrastructure & client management",
      tier: "Starter",
      targetAudience:
        "For businesses that need a professional online presence, centralized contacts, and to stop losing leads.",
      setupPrice: "$1,999 USD",
      monthlyPrice: "$497 USD",
      monthlyCadence: "/mo",
      phases: [
        {
          title: "PHASE 1. Digital Presence",
          items: [
            "Professional website with up to 5 pages.",
            "Mobile-responsive design and speed optimization.",
            "Contact forms and lead capture integration.",
            "Technical SEO foundation and SSL security certificate.",
          ],
        },
        {
          title: "PHASE 2. Commercial Infrastructure",
          items: [
            "Centralized CRM to organize customer records and interaction history.",
            "Unified inbox for compatible channels: website, Facebook, Instagram, Google Business, and SMS.",
            "Digital calendar with synchronized availability and online booking.",
            "Missed-call text back automation (when carrier setup allows).",
            "Initial setup of user permissions and notifications.",
            "Onboarding training to use the system smoothly.",
          ],
        },
      ],
      maintenance: {
        title: "Maintenance & Support",
        items: [
          "Continuous system uptime and performance monitoring.",
          "Maintenance of active configurations.",
          "Standard technical support for platform inquiries.",
        ],
      },
      consumptionNote:
        "Telephony, SMS, third-party services, and usage charges are billed by consumption. Not included in base monthly fee.",
      idealFor:
        "Businesses that need organization, professional presence, and a structured lead intake process.",
      cta: { label: "Get started with Growth Engine", kind: "apply" },
    },
    {
      id: "sales-autopilot",
      name: "Sales Autopilot",
      tagline: "Sales Automation,\nConversion & Meta Ads",
      badge: "Recommended",
      tier: "Recommended",
      targetAudience:
        "For businesses looking to generate qualified social media leads consistently, follow up automatically, and close more deals without missed appointments.",
      setupPrice: "$3,499 USD",
      monthlyPrice: "$1,697 USD",
      monthlyCadence: "/mo",
      inheritsFrom: "Includes everything in Growth Engine, plus:",
      phases: [
        {
          title: "PHASE 1. Advanced Digital Presence",
          items: [
            "Website with up to 10 pages.",
            "Multi-service structure and segmented inquiry forms.",
            "Conversion-rate-optimized landing sections.",
          ],
        },
        {
          title: "PHASE 2. Sales Machine & Follow-Up",
          items: [
            "Visual deal pipeline to track every commercial opportunity.",
            "Automated follow-up drip sequences via email and SMS.",
            "Appointment reminders sent at 24 hours and 1 hour prior.",
            "Automated re-engagement for unresponsive prospects.",
            "Estimates and invoices with one-click payment links via Stripe.",
            "Automated review requests sent to verified clients.",
            "Automations for new contacts, opportunities, and won deals.",
            "Core pipeline tracking and commercial conversion reports.",
          ],
        },
        {
          title: "PHASE 3. Demand Generation with Meta Ads",
          items: [
            "Active management and continuous optimization of Meta Ads campaigns (Facebook & Instagram).",
            "High-converting ad creatives, persuasive copywriting, and continuous A/B testing.",
            "Included $400 USD/month managed ad spend budget directly applied to your Meta campaigns.",
            "Instant CRM synchronization: new leads flow directly into your pipeline and trigger immediate follow-up sequences.",
          ],
        },
      ],
      maintenance: {
        title: "Maintenance & Support",
        items: [
          "Meta Ads campaign monitoring and weekly performance optimization.",
          "Active monitoring of automated workflows and minor configuration refinements.",
          "Monthly review of commercial sales funnel, cost-per-lead, and conversion performance.",
        ],
      },
      consumptionNote:
        "Includes $400 USD/month of managed ad spend in Meta Ads. If you want to scale faster with additional ad budget, you only pay extra ad spend at direct cost. Telephony, carrier SMS, and third-party tools are billed based on usage.",
      idealFor:
        "Service contractors, clinics, agencies, and local businesses that want to acquire leads through paid ads and convert them via automated follow-up.",
      cta: { label: "Choose Sales Autopilot", kind: "apply" },
    },
    {
      id: "market-leader",
      name: "Market Leader",
      tagline: "Artificial Intelligence, Automation & Omnichannel Ads (Meta + Google)",
      badge: "Premium",
      tier: "Premium",
      targetAudience:
        "For companies seeking market dominance: proactive acquisition via Google & Meta Ads, backed by immediate 24/7 intelligent AI response.",
      setupPrice: "$6,999 USD",
      monthlyPrice: "$2,797 USD",
      monthlyCadence: "/mo",
      inheritsFrom: "Includes everything in Sales Autopilot, plus:",
      phases: [
        {
          title: "PHASE 1. Premium Digital Presence",
          items: [
            "Corporate website with up to 20 pages.",
            "Expanded content architecture and advanced technical SEO.",
            "Comprehensive forms, calendar scheduling, and conversion funnels.",
          ],
        },
        {
          title: "PHASE 2. Artificial Intelligence & Communications",
          items: [
            "24/7 conversational AI agent to answer questions, qualify prospects, and book consultations.",
            "Custom AI training tailored with your approved business documents and FAQs.",
            "Direct AI integration with your CRM and sales workflows.",
            "Dedicated local business phone line (subject to carrier availability and compliance).",
            "Included package of up to 10,000 outbound SMS segments/month under fair use policy.",
            "Automated reactivation campaigns for past prospects with consent safeguards.",
            "Bespoke workflows for lead intake, routing, and notifications.",
            "Dashboard tracking automation activity, engagement, and conversion metrics.",
          ],
        },
        {
          title: "PHASE 3. Omnichannel Acquisition: Meta Ads + Google Ads",
          items: [
            "High-intent Google Ads (Search) campaigns to capture customers actively looking for your services.",
            "Meta Ads (Facebook & Instagram) campaigns for targeted demand generation and website retargeting.",
            "Included $800 USD/month managed ad spend budget strategically allocated across Google and Meta.",
            "Instant AI qualification: Google and Meta leads are greeted, pre-qualified, and booked 24/7.",
          ],
        },
        {
          title: "PHASE 4. Premium Ongoing Advisory",
          items: [
            "Priority VIP technical support and proactive workflow, AI, and ad campaign monitoring.",
            "Up to 4 hours per month for adjustments and continuous automation and campaign optimization.",
            "Monthly strategic review analyzing client acquisition cost, pipeline health, and advertising ROI.",
          ],
        },
      ],
      consumptionNote:
        "Includes $800 USD/month in managed Google & Meta ad spend, plus 10,000 SMS segments for eligible US destinations. Additional ad spend is billed at transparent platform pass-through rates. AI voice minutes per provider rates.",
      idealFor:
        "High-volume companies requiring proactive omnichannel customer acquisition and 24/7 automated qualification without expanding headcount.",
      cta: { label: "Scale with Market Leader", kind: "apply" },
    },
  ],
  conditionsTitle: "Commercial Terms Applicable to All Plans",
  conditionsIntro:
    "Total transparency to protect your profitability, establish clear expectations, and foster a lasting partnership.",
  commercialConditions: [
    {
      title: "1. Setup is billed separately",
      description:
        "The one-time implementation fee covers project scope, design, CRM configuration, testing, and launch. Additional feature requests beyond scope are quoted separately.",
    },
    {
      title: "2. Monthly agreement with defined scope",
      description:
        "Monthly fee covers software licenses, hosting, maintenance, and technical support. We recommend an initial 6-month term with straightforward renewal and cancellation terms.",
    },
    {
      title: "3. Out-of-scope custom development",
      description:
        "New websites, pages exceeding plan limits, custom API integrations, complex migrations, or bespoke workflows are estimated and approved prior to execution.",
    },
    {
      title: "4. You retain 100% asset ownership",
      description:
        "We contractually establish that domain names, customer data, advertising accounts, and phone numbers remain 100% owned by your business at all times.",
    },
    {
      title: "5. Focus on commercial capabilities",
      description:
        "We deploy proven, high-performing systems and tools. Revenue growth and conversion outcomes also rely on your offer, market pricing, and operational execution.",
    },
  ],
  note:
    "One-time setup fees cover end-to-end design, implementation, and turnkey delivery. Active monthly plan covers ongoing maintenance, software licensing, and technical support.",
  cta: { label: "Book a 15-minute diagnostic call", kind: "apply" },
};

export const billing: BillingContent = {
  title: "Clear, transparent investment structure",
  columns: { item: "Commercial Maturity Plan", monthly: "One-Time Setup", annual: "Monthly Service" },
  rows: [
    { item: "Growth Engine (Starter)", monthly: "$1,999 USD", annual: "$497 USD/mo" },
    { item: "Sales Autopilot (Recommended)", monthly: "$3,499 USD", annual: "$1,697 USD/mo (Includes $400 Meta ads)" },
    { item: "Market Leader (Premium)", monthly: "$6,999 USD", annual: "$2,797 USD/mo (Includes $800 Meta + Google ads)" },
  ],
  body: "Turnkey setup, hands-on onboarding training, managed advertising budgets, and continuous bilingual technical support.",
};

export const payments: PaymentsContent = {
  title: "Pay the way you prefer",
  body: "We accept credit and debit cards, Apple Pay, Google Pay, Zelle, Cash App, and bank transfers. Flexible installment plans available through Affirm and Klarna.",
  methods: [
    "Visa",
    "Mastercard",
    "American Express",
    "Apple Pay",
    "Google Pay",
    "Zelle",
    "Cash App",
    "Affirm",
    "Klarna",
  ],
  fineprint:
    "Monthly plans are billed automatically via card. Zelle, Cash App, and bank transfers are available for setup fees, annual plans, and one-off projects. Card processing securely powered by Stripe.",
};

export const addOns: AddOnsContent = {
  title: "Enhance your digital presence",
  items: [
    "Domain registration (.com)",
    "Custom business email (name@yourbusiness.com)",
    "Additional language version for your site",
    "Google Business Profile setup & optimization",
    "Monthly SEO ranking management",
    "Social media management",
    "Additional advertising budget for campaigns",
  ],
  cta: { label: "Ask us on WhatsApp", kind: "whatsapp" },
};

export const faq: FaqContent = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "Why is setup charged separately?",
      answer:
        "The initial implementation covers custom design, technical CRM setup, ad tracking pixels and accounts configuration, funnel building, workflow testing, and 1-on-1 team training. The monthly fee covers infrastructure, hosting, ad campaign management, and ongoing technical support.",
    },
    {
      question: "How does the included ad spend budget work on Sales Autopilot and Market Leader?",
      answer:
        "Your monthly plan already includes a dedicated managed advertising budget ($400 USD on Sales Autopilot for Meta Ads, and $800 USD on Market Leader for Meta + Google Ads). We handle strategy, ad creative design, copywriting, and daily campaign optimization. If you wish to invest more budget in any given month to accelerate growth, you can add ad spend at direct pass-through cost with zero management markups.",
    },
    {
      question: "Which plan is right for my business?",
      answer:
        "If you want to generate qualified leads on Facebook & Instagram and convert them with automated follow-ups and booked appointments without hiring staff, Sales Autopilot is our top recommendation. If you need a solid foundational presence with website and CRM, Growth Engine is your entry point. If you want to dominate your local market with Google Ads, Meta Ads, and 24/7 AI response, Market Leader is the ultimate end-to-end engine.",
    },
    {
      question: "How do call, SMS, and AI usage fees work?",
      answer:
        "On Growth Engine and Sales Autopilot, telephony and carrier usage are billed strictly at transparent pass-through costs. Market Leader includes up to 10,000 monthly SMS segments for US numbers under fair use, in addition to the $800 USD managed ad spend budget. All carrier rates are reviewed prior to activation.",
    },
    {
      question: "Do I have to sign a long-term contract?",
      answer:
        "We recommend an initial 6-month commitment to allow the commercial infrastructure and conversions to mature, with straightforward renewal and cancellation guidelines.",
    },
    {
      question: "Who owns my domain, phone numbers, and contacts?",
      answer:
        "You do. You retain 100% legal ownership of your domain, customer database, phone numbers, and advertising assets. We never lock you out.",
    },
    {
      question: "Who sets up and trains our team on the system?",
      answer:
        "We take care of all technical setup, integrations, and testing, and provide complete onboarding training in English or Spanish so your team feels confident from day one.",
    },
  ],
};

export const ctaFinal: CtaBandContent = {
  title: "Not sure where to start?",
  body: "Book a free 15-minute consultation and we'll tell you exactly what your business needs, and what it doesn't.",
  primaryCta: { label: "Book your free call", kind: "book" },
  secondaryCta: { label: "Message us on WhatsApp", kind: "whatsapp" },
};
