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
  title: "Agencia Digital en el Suroeste | creamostuweb",
  description:
    "Ayudamos a negocios locales a crecer en internet con páginas web y sistemas comerciales. Conoce nuestra historia.",
};

export const hero: HeroContent = {
  eyebrow: "Nosotros",
  title: "Impulsamos a negocios locales a crecer y destacar en internet",
  subtitle:
    "Sabemos lo que cuesta sacar adelante un negocio en este país. Por eso hacemos que la parte digital sea lo más fácil de tu día.",
};

export const story: StoryContent = {
  title: "Cómo empezó creamostuweb",
  paragraphs: [
    "creamostuweb nació de la experiencia de Felipe Cuéllar, fundador, construyendo páginas web, CRMs y automatizaciones para negocios en Colombia y Estados Unidos.",
    "En el camino vio siempre el mismo problema. Los negocios locales trabajan duro y tienen clientes contentos, pero pierden ventas por no contestar a tiempo, por no tener reseñas o porque alguien les vendió una web que nunca funcionó.",
    "Así que creamos lo que nos hubiera gustado encontrar: una agencia que habla tu idioma, que te explica todo claro, que lo deja funcionando y que sigue ahí después de cobrar.",
  ],
};

export const mission: MissionContent = {
  title: "Nuestra misión",
  body: "Que ningún negocio en el Suroeste pierda un cliente por no estar en internet o por no contestar a tiempo.",
};

export const difference: ReasonsContent = {
  title: "No somos una agencia más",
  reasons: [
    {
      title: "Lo dejamos funcionando",
      body: "Otras agencias te venden un software y te dejan solo. Nosotros lo configuramos para tu negocio y te enseñamos a usarlo.",
    },
    {
      title: "Precios claros",
      body: "Te decimos cuánto cuesta antes de empezar. Sin cargos sorpresa ni letra pequeña.",
    },
    {
      title: "Financiamiento real",
      body: "Empiezas con una cuota mensual, no con miles de dólares de contado.",
    },
    {
      title: "Todo en un solo lugar",
      body: "Web, mensajes, reseñas, cotizaciones y citas, conectados entre sí.",
    },
  ],
};

export const values: ValuesContent = {
  title: "Cómo trabajamos",
  values: [
    { title: "Confianza", body: "Hacemos lo que decimos, cuando lo decimos." },
    { title: "Claridad", body: "Te explicamos todo en palabras simples." },
    {
      title: "Resultados",
      body: "Medimos el éxito en clientes nuevos para ti, no en páginas bonitas.",
    },
    {
      title: "Cercanía",
      body: "Te contestamos el WhatsApp y puedes vernos en persona.",
    },
  ],
};

export const stats: StatsContent = {
  title: "En números",
  /** PH-02: real data only. null renders a pending slot, never an invented figure. */
  stats: [
    { label: "Negocios atendidos", value: null },
    { label: "Páginas web entregadas", value: null },
    { label: "Años de experiencia", value: null },
    { label: "Idiomas", value: "Español e inglés" },
  ],
  pendingNote:
    "Publicamos solo cifras reales. Estamos cerrando los números del año antes de mostrarlos aquí.",
};

export const ctaFinal: CtaBandContent = {
  title: "Conozcámonos",
  body: "Tomemos un café o hablemos 15 minutos por teléfono. Te contamos cómo podemos ayudarte, sin compromiso.",
  primaryCta: { label: "Agenda tu llamada gratis", kind: "book" },
  secondaryCta: { label: "Escríbenos por WhatsApp", kind: "whatsapp" },
};
