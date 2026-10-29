/**
 * Content contracts.
 *
 * Every user-facing string lives in src/content/<locale>/*. Sections receive
 * typed content and render it; they never hold copy. That is what makes the EN
 * translation a content task instead of a rewrite.
 */

export type CtaKind = "apply" | "whatsapp" | "call" | "book" | "anchor" | "email" | "directions";

export interface Cta {
  label: string;
  kind: CtaKind;
  /** Required for kind "anchor". */
  href?: string;
}

/** A photograph. Paths are relative to /public. */
export interface Media {
  src: string;
  alt: string;
}

/** A photo with a short label set over it, e.g. the trade it shows. */
export interface CaptionedMedia extends Media {
  caption: string;
}

/**
 * A notification in the hero's live feed. Illustrates what the system does;
 * never names a real customer and never carries an invented figure.
 */
export interface FeedItem {
  label: string;
  detail: string;
  hue: "gold" | "wine" | "cyan" | "pink";
}

export interface Eyebrowed {
  eyebrow?: string;
  title: string;
  intro?: string;
}

/**
 * A line whose closing phrase is lit. Same purpose as HeroSign: the words are
 * the client's, only the typesetting differs.
 */
export interface SplitLine {
  lead: string;
  lit: string;
  /** Character indices of the lit phrase that should hesitate. */
  stutter?: string;
}

/**
 * The headline split into the sign's three registers. The words are the
 * client's, unchanged — only the typesetting differs, so the lit phrase is the
 * one that actually carries the promise.
 */
export interface HeroSign {
  lead: string;
  lit: string;
  tail: string;
  /** Character indices of the lit phrase that should hesitate before holding. */
  stutter?: string;
}

export interface HeroContent extends Eyebrowed {
  subtitle: string;
  /** Present on the home hero; secondary pages set only `title`. */
  sign?: HeroSign;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  /** Short trust statements shown as a single separated line. */
  trustLine?: string[];
  /** Anchor links rendered as a jump bar. */
  anchors?: Cta[];
  /** Full-bleed photograph behind the headline. */
  backdrop?: Media;
  /** Floating notifications around the headline. */
  feed?: FeedItem[];
  /** Irresistible offer banner shown under the hero CTA. */
  offer?: { title: string; body: string };
}

export interface ProblemContent {
  title: string;
  pains: string[];
  /** Full closer, used as the no-split fallback. */
  closer: string;
  /** The closer typeset with its second half lit. */
  closerSign?: SplitLine;
  media?: Media;
  /** Overlay set on the photo, e.g. a missed-call badge. */
  mediaBadge?: { label: string; detail: string };
}

/**
 * The inbox mock in the solution section. Illustrative UI, not data: no
 * customer names and no figures.
 */
export interface DashboardMock {
  windowTitle: string;
  inboxTitle: string;
  messages: { channel: string; preview: string; hue: "gold" | "wine" | "cyan" | "pink" }[];
  chartTitle: string;
  chartCaption: string;
}

export interface SolutionContent {
  title: string;
  body: string;
  dashboard?: DashboardMock;
}

export type ServiceIcon = "web" | "store" | "crm" | "reviews" | "call" | "ai";

export interface ServiceCard {
  icon?: ServiceIcon;
  title: string;
  body: string;
  cta: Cta;
}

export interface FeaturedServicesContent {
  title: string;
  cards: ServiceCard[];
}

export interface FinancingContent {
  title: string;
  body: string;
  benefits: string[];
  cta: Cta;
  /** The payment-plan graphic: a year of equal months lighting in turn. */
  plan?: { title: string; monthLabel: string; months: number; note: string };
}

export interface Step {
  title: string;
  body: string;
}

export interface StepsContent {
  title: string;
  steps: Step[];
}

export interface AudienceContent {
  title: string;
  trades: string[];
  /** Full line, used as the no-split fallback. */
  body: string;
  /** The line typeset with its closing phrase lit. */
  bodySign?: SplitLine;
  gallery?: CaptionedMedia[];
}

export interface Reason {
  title: string;
  body: string;
}

export interface ReasonsContent {
  title: string;
  reasons: Reason[];
  media?: CaptionedMedia;
}

export interface Testimonial {
  name: string;
  business: string;
  quote: string;
}

export interface TestimonialsContent {
  title: string;
  /**
   * PH-01: real clients only, with written permission. An empty array renders
   * a visibly pending slot rather than invented social proof.
   */
  items: Testimonial[];
  pendingNote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  title: string;
  items: FaqItem[];
}

export interface CtaBandContent {
  title: string;
  body?: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  /** When true the band sets the phone number as a display-scale monument. */
  showPhoneMonument?: boolean;
  backdrop?: Media;
}

/* -------------------------------------------------------------------------- */
/* Servicios                                                                  */
/* -------------------------------------------------------------------------- */

export interface WebTier {
  name: string;
  /** "la más elegida" — surfaces the recommended tier. */
  flag?: string;
  audience: string;
  features: string[];
  cta: Cta;
}

export interface WebTiersContent extends Eyebrowed {
  tiers: WebTier[];
  /** Websites deliberately show no price. Sold on the call with financing. */
  priceNote: string;
}

export interface StoreContent extends Eyebrowed {
  features: string[];
  cta: Cta;
}

export interface Tool {
  name: string;
  /** Public price, e.g. "$97". Tools do show price. */
  price: string;
  cadence: string;
  pitch: string;
  features: string[];
}

export interface ToolsContent extends Eyebrowed {
  tools: Tool[];
}

export interface PlanPhase {
  title: string;
  items: string[];
}

export interface PlanMaintenance {
  title: string;
  items: string[];
}

export interface Bundle {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  tier: string;
  targetAudience: string;
  setupPrice: string;
  setupPromoPrice?: string;
  monthlyPrice: string;
  monthlyCadence?: string;
  inheritsFrom?: string;
  phases?: PlanPhase[];
  maintenance?: PlanMaintenance;
  consumptionNote?: string;
  idealFor?: string;
  cta?: Cta;
  /** Bullet features shown under the plan card. */
  features?: string[];
  /** Annual promo line, e.g. "🔥 Promo Anual: ...". */
  annualPromo?: string;
}

export interface CommercialCondition {
  title: string;
  description: string;
}

export interface BundlesContent {
  title: string;
  subtitle?: string;
  positioningIntro?: string;
  bundles: Bundle[];
  conditionsTitle?: string;
  conditionsIntro?: string;
  commercialConditions?: CommercialCondition[];
  note: string;
  cta: Cta;
}

export interface BillingRow {
  item: string;
  monthly: string;
  annual: string;
}

export interface BillingContent {
  title: string;
  columns: { item: string; monthly: string; annual: string };
  rows: BillingRow[];
  body: string;
}

export interface PaymentsContent {
  title: string;
  body: string;
  methods: string[];
  fineprint: string;
}

export interface AddOnsContent {
  title: string;
  items: string[];
  cta: Cta;
}

/* -------------------------------------------------------------------------- */
/* Nosotros                                                                   */
/* -------------------------------------------------------------------------- */

export interface StoryContent {
  title: string;
  paragraphs: string[];
}

export interface MissionContent {
  title: string;
  body: string;
}

export interface Value {
  title: string;
  body: string;
}

export interface ValuesContent {
  title?: string;
  values: Value[];
}

export interface Stat {
  label: string;
  /** PH-02: null until a real number is supplied. Never invent one. */
  value: string | null;
}

export interface StatsContent {
  title: string;
  stats: Stat[];
  pendingNote: string;
}

/* -------------------------------------------------------------------------- */
/* Contacto                                                                   */
/* -------------------------------------------------------------------------- */

export type FieldKind = "text" | "tel" | "email" | "select" | "checkboxGroup" | "radio" | "textarea" | "consent";

export interface FormField {
  id: string;
  label: string;
  kind: FieldKind;
  required: boolean;
  options?: string[];
  placeholder?: string;
  autoComplete?: string;
}

export interface FormContent {
  title: string;
  fields: FormField[];
  submitLabel: string;
  submittingLabel: string;
  confirmation: string;
  /** Shown when the submit port rejects. Says what happened and what to do. */
  errorMessage: string;
}

export interface Channel {
  kind: "whatsapp" | "phone" | "email" | "office";
  label: string;
  value: string;
  body: string;
  cta: Cta;
}

export interface ChannelsContent {
  title?: string;
  channels: Channel[];
}

export interface BookingContent {
  title: string;
  body: string;
  pendingNote: string;
}

export interface HoursContent {
  title: string;
  rows: string[];
}

export interface MapContent {
  title: string;
  body: string;
  pendingNote: string;
}

/* -------------------------------------------------------------------------- */
/* Global chrome                                                              */
/* -------------------------------------------------------------------------- */

export interface NavSubItem {
  label: string;
  href: string;
  badge?: string;
  tagline?: string;
  price?: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavSubItem[];
}

export interface GlobalContent {
  topBar: { message: string; callLabel: string };
  nav: { links: NavLink[]; cta: Cta; menuLabel: string; closeLabel: string };
  fab: { bubble: string; ariaLabel: string };
  footer: {
    brandBlurb: string;
    columns: { heading: string; links: NavLink[] }[];
    contactHeading: string;
    socialPrompt: string;
    paymentHeading: string;
    paymentMethods: string[];
    legalLine: string;
  };
  skipToContent: string;
}

export interface PageSeo {
  title: string;
  description: string;
}

/* -------------------------------------------------------------------------- */
/* Niche landing pages                                                        */
/* -------------------------------------------------------------------------- */

export interface SystemFeature {
  icon: ServiceIcon;
  title: string;
  body: string;
}

export interface SystemContent {
  eyebrow: string;
  title: string;
  body?: string;
  features: SystemFeature[];
}

export interface Review {
  quote: string;
  name: string;
  business: string;
  city?: string;
  rating?: number;
}

export interface ReviewsContent {
  eyebrow: string;
  title: string;
  /** Shown when the reviews are illustrative samples, not verified clients. */
  disclaimer?: string;
  reviews: Review[];
}

export interface NicheFaqContent {
  eyebrow: string;
  title: string;
  items: FaqItem[];
}

export interface FormSectionContent {
  eyebrow: string;
  title: string;
  body?: string;
  fallbackLabel: string;
}

/* -------------------------------------------------------------------------- */
/* Signature sequence                                                         */
/* -------------------------------------------------------------------------- */

/**
 * Content for the animated "missed call" demonstration. Deliberately generic:
 * no invented business name, because a mock must not read as a real client.
 */
export interface MissedCallContent {
  eyebrow: string;
  title: string;
  body: string;
  demoLabel: string;
  caller: { name: string; number: string };
  ringing: string;
  missed: string;
  missedNote: string;
  outgoing: string;
  incoming: string;
  replayLabel: string;
  cta: Cta;
}
