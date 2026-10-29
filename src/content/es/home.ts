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
  title: "Páginas Web en el Suroeste para Negocios Locales | creamostuweb",
  description:
    "Páginas web, CRM y reseñas en Google para negocios en el Suroeste. Atención en español y planes con financiamiento.",
};

export const hero: HeroContent = {
  eyebrow: "Agencia digital en el Suroeste",
  title: "Tu negocio merece más clientes, no más complicaciones",
  sign: {
    lead: "Tu negocio merece",
    lit: "más clientes",
    tail: "no más complicaciones",
    stutter: "3,9",
  },
  subtitle:
    "Creamos tu página web y te dejamos listo el sistema para atender, cotizar y cerrar clientes desde un solo lugar. Hablamos tu idioma y tenemos planes con financiamiento.",
  primaryCta: { label: "Aplica a tu web financiada", kind: "apply" },
  secondaryCta: { label: "Escríbenos por WhatsApp", kind: "whatsapp" },
  trustLine: [
    "Sin pago inicial grande",
    "Atención en español",
    "Todo configurado por nosotros",
  ],
  backdrop: {
    src: "/images/home/vegas-strip-night.jpg",
    alt: "El Suroeste iluminado de noche",
  },
  feed: [
    { label: "Nueva reseña en Google", detail: "Pedida sola, al terminar el trabajo", hue: "gold" },
    { label: "Llamada perdida", detail: "Mensaje de texto enviado al instante", hue: "wine" },
    { label: "Nueva cita agendada", detail: "Por WhatsApp, a las 11:48 p. m.", hue: "cyan" },
  ],
};

export const problem: ProblemContent = {
  title: "¿Te suena familiar?",
  pains: [
    "Te llaman mientras trabajas, no contestas y ese cliente termina llamando a la competencia.",
    "Tienes clientes contentos, pero casi ninguna reseña en Google.",
    "Los mensajes llegan por WhatsApp, Facebook, Instagram y llamadas, y algunos se te pierden.",
    "Sabes que necesitas una página web, pero te pidieron miles de dólares de contado.",
    "Ya tuviste un “webmaster” que desapareció y nunca te dejó nada funcionando.",
  ],
  closer: "No es falta de trabajo. Es falta de un sistema.",
  closerSign: {
    lead: "No es falta de trabajo.",
    lit: "Es falta de un sistema.",
    stutter: "4,15",
  },
  media: {
    src: "/images/home/barbershop-busy.jpg",
    alt: "Barberos trabajando con clientes en la silla",
  },
  mediaBadge: { label: "Llamada perdida", detail: "Mientras atendías a otro cliente" },
};

export const solution: SolutionContent = {
  title:
    "Todo lo que tu negocio necesita para vender en internet, en un solo lugar",
  body: "No te vendemos solo una página bonita. Te entregamos la web, el sistema para responder a cada cliente y las herramientas para que te recomienden más. Nosotros lo configuramos, tú te dedicas a trabajar.",
  dashboard: {
    windowTitle: "Tu panel",
    inboxTitle: "Todos tus mensajes, en un solo lugar",
    messages: [
      { channel: "WhatsApp", preview: "¿Tienen cita para mañana?", hue: "cyan" },
      { channel: "Instagram", preview: "¿Cuánto cuesta el servicio?", hue: "wine" },
      { channel: "Llamada", preview: "Llamada perdida · SMS enviado", hue: "gold" },
      { channel: "Facebook", preview: "Me los recomendó mi vecino", hue: "cyan" },
    ],
    chartTitle: "Clientes que llegan por tu web",
    chartCaption: "Ilustración del panel",
  },
};

export const featuredServices: FeaturedServicesContent = {
  title: "Sistemas por nivel de madurez comercial",
  cards: [
    {
      icon: "crm",
      title: "Growth Engine (Starter)",
      body: "Presencia web profesional hasta 5 páginas, CRM centralizado, buzón unificado y respuesta inmediata a llamadas perdidas.",
      cta: { label: "Conocer Growth Engine", kind: "anchor", href: "/servicios#paquetes" },
    },
    {
      icon: "web",
      title: "Sales Autopilot (Recomendado)",
      body: "Máquina de ventas: web hasta 10 páginas, pipeline comercial, seguimiento automático, reseñas y campañas en Meta Ads con $400 USD de pauta incluida.",
      cta: { label: "Ver Sales Autopilot", kind: "anchor", href: "/servicios#paquetes" },
    },
    {
      icon: "ai",
      title: "Market Leader (Premium)",
      body: "Dominio de mercado: agente IA 24/7, web hasta 20 páginas, 10.000 SMS, soporte VIP y pauta omnicanal en Meta + Google Ads con $800 USD incluidos.",
      cta: { label: "Ver Market Leader", kind: "anchor", href: "/servicios#paquetes" },
    },
    {
      icon: "call",
      title: "Llamadas que no se pierden",
      body: "Si estás ocupado y no puedes contestar, tu cliente recibe un mensaje de texto automático al instante y no se va con la competencia.",
      cta: { label: "Ver cómo funciona", kind: "anchor", href: "/servicios#herramientas" },
    },
    {
      icon: "reviews",
      title: "Reseñas y reputación en Google",
      body: "Solicitud automatizada de opiniones a clientes satisfechos tras cada servicio para dominar las búsquedas locales.",
      cta: {
        label: "Ver herramientas",
        kind: "anchor",
        href: "/servicios#herramientas",
      },
    },
    {
      icon: "store",
      title: "Tiendas y pagos en línea",
      body: "Catálogo 24/7, enlaces de pago en cotizaciones y facturas con tarjeta, Apple Pay y financiamiento.",
      cta: { label: "Ver opciones", kind: "anchor", href: "/servicios#tiendas" },
    },
  ],
};

export const financing: FinancingContent = {
  title: "Tu web profesional, sin pagar todo de una vez",
  body: "Sabemos que cuando estás creciendo, cada dólar cuenta. Por eso tenemos planes de financiamiento para que empieces hoy con una cuota mensual que sí cabe en tu presupuesto.",
  benefits: [
    "Sin pago inicial grande",
    "Cuota fija mensual",
    "Hosting, seguridad y cambios incluidos",
    "Tu web lista en 7 a 14 días",
  ],
  cta: { label: "Aplica ahora", kind: "apply" },
  plan: {
    title: "Tu plan, mes a mes",
    monthLabel: "Mes",
    months: 12,
    note: "La misma cuota todos los meses. Sin sorpresas.",
  },
};

export const steps: StepsContent = {
  title: "Así de fácil es empezar",
  steps: [
    {
      title: "Agenda tu asesoría",
      body: "Elige un horario en el calendario o escríbenos por WhatsApp.",
    },
    {
      title: "Hablamos 30 minutos",
      body: "Te explicamos qué necesitas, qué no, y cuánto cuesta, sin letra pequeña.",
    },
    {
      title: "Construimos todo",
      body: "Diseñamos tu web y configuramos tu sistema. Tú solo apruebas.",
    },
    {
      title: "Empiezas a recibir clientes",
      body: "Te entregamos todo funcionando y te enseñamos a usarlo.",
    },
  ],
};

export const audience: AudienceContent = {
  title: "Trabajamos con negocios como el tuyo",
  trades: [
    "Construcción y remodelación",
    "Roofing",
    "Limpieza",
    "Landscaping",
    "Talleres mecánicos",
    "Salones de belleza y barberías",
    "Restaurantes y food trucks",
    "Tax preparers y contadores",
    "Agencias de seguros",
    "Clínicas y spas",
  ],
  body: "Si tu negocio vive de llamadas, citas o recomendaciones, esto es para ti.",
  bodySign: {
    lead: "Si tu negocio vive de llamadas, citas o recomendaciones,",
    lit: "esto es para ti.",
    stutter: "2,9",
  },
  gallery: [
    { src: "/images/home/barber.jpg", alt: "Barbero terminando un corte", caption: "Barberías" },
    { src: "/images/home/taco-truck-night.jpg", alt: "Food truck de tacos abierto de noche", caption: "Food trucks" },
    { src: "/images/home/mechanic.jpg", alt: "Taller mecánico con autos en reparación", caption: "Talleres" },
    { src: "/images/home/construction.jpg", alt: "Trabajadores de construcción en obra", caption: "Construcción" },
  ],
};

export const reasons: ReasonsContent = {
  title: "Por qué los negocios locales nos eligen",
  reasons: [
    {
      title: "Hablamos tu idioma",
      body: "Te atendemos en español, y tu web puede estar en español e inglés.",
    },
    {
      title: "Lo hacemos por ti",
      body: "No te dejamos un software para que lo descifres solo. Lo dejamos configurado.",
    },
    {
      title: "Estamos aquí",
      body: "Estamos en el Suroeste. Puedes vernos en persona.",
    },
    {
      title: "No desaparecemos",
      body: "Soporte mensual, cambios incluidos y un número al que sí contestamos.",
    },
  ],
  media: {
    src: "/images/home/las-vegas-boulevard.jpg",
    alt: "Avenida nocturna del Suroeste, llena de letreros de neón",
    caption: "Southwest, EE. UU.",
  },
};

export const testimonials: TestimonialsContent = {
  title: "Lo que dicen nuestros clientes",
  /** PH-01: real clients only, with written permission. */
  items: [],
  pendingNote:
    "Estamos pidiendo permiso a nuestros clientes para publicar sus testimonios. Mientras tanto, pregúntanos por WhatsApp y te ponemos en contacto con alguno de ellos.",
};

export const faq: FaqContent = {
  title: "Preguntas frecuentes",
  items: [
    {
      question: "¿Cuánto cuesta una página web?",
      answer:
        "Depende de lo que necesites. Tenemos desde landing pages hasta tiendas completas, todas con opción de financiamiento. En una llamada de 30 minutos te damos el precio exacto.",
    },
    {
      question: "¿Cuánto se demora?",
      answer:
        "Una landing page está lista en unos 7 días. Una web completa, entre 10 y 14 días.",
    },
    {
      question: "¿Necesito saber de tecnología?",
      answer:
        "No. Nosotros configuramos todo y te enseñamos lo básico. Si te atoras, nos escribes.",
    },
    {
      question: "¿Mi web puede estar en inglés y español?",
      answer:
        "Sí. Te recomendamos las dos versiones para llegar a todos tus clientes en el Suroeste.",
    },
    {
      question: "¿Qué pasa si ya tengo una página?",
      answer:
        "La revisamos gratis y te decimos si conviene mejorarla o hacer una nueva.",
    },
  ],
};

export const ctaFinal: CtaBandContent = {
  title: "Tu competencia ya está en internet. ¿Y tú?",
  body: "Aplica hoy y en menos de dos semanas tu negocio puede estar recibiendo clientes nuevos.",
  primaryCta: { label: "Aplica a tu web financiada", kind: "apply" },
  secondaryCta: { label: "Escríbenos por WhatsApp", kind: "whatsapp" },
  showPhoneMonument: true,
  backdrop: {
    src: "/images/home/neon-street.jpg",
    alt: "",
  },
};

/**
 * The page's signature moment. Copy here is a product demonstration, not a
 * testimonial — no business name, no person, nothing that could be mistaken
 * for a real customer.
 */
export const missedCall: MissedCallContent = {
  eyebrow: "Ejemplo",
  title: "La llamada que no se pierde",
  body: "Estás en el trabajo y entra una llamada. No alcanzas a contestar. En lugar de perder a ese cliente, tu sistema le manda un mensaje al instante y la conversación sigue.",
  demoLabel: "Demostración del sistema",
  caller: { name: "Cliente nuevo", number: "(702) 555-0148" },
  ringing: "Llamada entrante",
  missed: "Llamada perdida",
  missedNote: "Antes, aquí se acababa todo.",
  outgoing:
    "Hola, gracias por llamar. Estoy en un trabajo y no pude contestar. ¿En qué te puedo ayudar?",
  incoming: "Hola, necesito una cotización. ¿Cuándo pueden venir a ver?",
  replayLabel: "Ver otra vez",
  cta: { label: "Quiero esto en mi negocio", kind: "apply" },
};
