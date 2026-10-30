import type {
  BundlesContent,
  CtaBandContent,
  NicheFaqContent,
  FormSectionContent,
  HeroContent,
  PageSeo,
  ProblemContent,
  ReviewsContent,
  SystemContent,
} from "@/content/types";

export const CITY_TOKEN = "{{city}}";
export const CITY_TOKEN_LOWER = "{{city_lower}}";

export function detailingSeo(city: string, cityLower: string): PageSeo {
  return {
    title: `Marketing y reservas para Auto Detailing en ${city} | creamostuweb`,
    description:
      `Consigue más citas para tu negocio de auto detailing en ${cityLower}. Web, CRM, respuesta a llamadas perdidas, reservas 24/7 e IA. Conoce los planes.`,
  };
}

export function detailingHero(city: string): HeroContent {
  return {
    eyebrow: `Más clientes para tu negocio de detailing en ${city}`,
    title: "Mientras trabajas en un auto, nuestro sistema cierra tu próximo cliente.",
    sign: {
      lead: "Mientras trabajas en un auto,",
      lit: "Nuestro sistema cierra tu próximo cliente.",
      tail: "",
    },
    subtitle:
      "Deja de perder dinero por no poder contestar el teléfono. Te instalamos la infraestructura completa —web, CRM y automatizaciones— para convertir mensajes perdidos en citas automáticamente.",
    primaryCta: { label: "Agendar asesoría gratuita", kind: "book" },
    secondaryCta: {
      label: "Hablar con un asesor",
      kind: "whatsapp",
    },
    trustLine: ["Respuesta a llamadas perdidas", "Agenda disponible 24/7", "Depósitos y recordatorios"],
    offer: {
      title: "OFERTA DE NOVIEMBRE",
      body: "50% de descuento en la implementación de cualquier plan. Elige esta promoción o la oferta anual; (No se pueden combinar).",
    },
  };
}

export function detailingProblem(): ProblemContent {
  return {
    title: "Tienes las manos ocupadas y tu competencia se está llevando a tus clientes.",
    pains: [
      "La llamada que cuesta cientos de dólares: Estás lavando a presión, suena el celular, no contestas. El cliente no espera, llama al siguiente detailer en {{city}} y acabas de perder un servicio de $250 dólares.",
      "Falta de prospectos constantes: Dependes solo del boca a boca o de publicar en grupos de Facebook donde nadie compra.",
      "Las cancelaciones sorpresa: Te dejan plantado, pierdes 3 horas de tu día y nadie te pagó por ese tiempo perdido.",
    ],
    closer:
      "EL ATAQUE (La solución): Nosotros corremos tus anuncios para traerte clientes reales, y si no alcanzas a contestarles, nuestro sistema les envía un SMS automático: “Hola, estoy detallando un vehículo y no puedo contestar. ¿Qué auto tienes y qué servicio buscas?”. ¡La venta no se enfría, se cierra!",
    closerSign: {
      lead: "EL ATAQUE (La solución): ",
      lit: "anuncios que traen clientes + SMS automático que cierra la venta.",
      stutter: "4,18",
    },
  };
}

export function detailingBundles(city: string): BundlesContent {
  return {
    title: `Elige el sistema que tu negocio de Detailing necesita para dominar ${city}`,
    subtitle:
      "Tres niveles de madurez comercial, precios claros y la promo anual que regala el 100% del setup.",
    positioningIntro:
      "Elige el sistema que tu negocio de Detailing necesita para dominar tu ciudad.",
    bundles: [
      {
        id: "growth-engine",
        name: "Growth Engine",
        tagline: "Presencia y Control",
        tier: "Starter",
        targetAudience:
          "Para el detailer que necesita presencia profesional y dejar de perder clientes por llamadas perdidas.",
        setupPrice: "$1,999 USD",
        setupPromoPrice: "$999.50 USD",
        monthlyPrice: "$497 USD",
        monthlyCadence: "/mes",
        annualPromo:
          "Promo Anual: Paga los ~~12~~ 6 meses de licencia y te regalamos los $1,999 de implementación.",
        cta: { label: "Arrancar con Growth Engine", kind: "apply" },
        features: [
          "Recepcionista con IA gratis durante los primeros 2 meses: hasta 5,000 mensajes para resolver consultas y agendar citas.",
          "Web de alta conversión (hasta 5 páginas).",
          "Sistema automático de respuesta a llamadas perdidas por SMS.",
          "Todas tus conversaciones (Instagram, Facebook, WhatsApp, SMS) en una sola bandeja.",
        ],
      },
      {
        id: "sales-autopilot",
        name: "Sales Autopilot",
        tagline: "Máquina de Citas y Anuncios",
        badge: "El más vendido",
        tier: "Recomendado",
        targetAudience:
          "Para el detailer que quiere clientes en automático con publicidad y cobrar depósitos.",
        setupPrice: "$3,499 USD",
        setupPromoPrice: "$1,749.50 USD",
        monthlyPrice: "$1,697 USD",
        monthlyCadence: "/mes",
        inheritsFrom: "Incluye todo lo de Growth Engine, más:",
        annualPromo:
          "Promo Anual: Paga los ~~12~~ 6 meses de licencia y te regalamos los $3,499 de implementación.",
        cta: { label: "Quiero automatizar mis ventas", kind: "apply" },
        features: [
          "Recepcionista con IA incluida para resolver consultas y agendar citas.",
          "Meta Ads (Facebook/Instagram): Gestión de campañas para traerte clientes de detailing todos los días.",
          "Bolsa de inversión incluida: $400 USD/mes de pauta publicitaria ya incluidos en tu mensualidad.",
          "Calendario 24/7 con cobro de anticipos/depósitos automáticos.",
          "Recordatorios automáticos por SMS y solicitud de reseñas en Google.",
        ],
      },
      {
        id: "market-leader",
        name: "Market Leader",
        tagline: "El Imperio del Detailing",
        badge: "Premium",
        tier: "Premium",
        targetAudience:
          "Para el dueño de negocio que quiere dominar su mercado con IA y Google Ads.",
        setupPrice: "$6,999 USD",
        setupPromoPrice: "$3,499.50 USD",
        monthlyPrice: "$2,797 USD",
        monthlyCadence: "/mes",
        inheritsFrom: "Incluye todo lo de Sales Autopilot, más:",
        annualPromo:
          "Promo Anual: Paga los ~~12~~ 6 meses de licencia y te regalamos los $6,999 de implementación.",
        cta: { label: "Quiero dominar mi mercado", kind: "apply" },
        features: [
          "Adquisición Omnicanal (Google Ads + Meta Ads): Captamos clientes que buscan activamente “auto detailing cerca de mi” en Google.",
          "Bolsa de inversión premium: $800 USD/mes de pauta publicitaria ya incluidos en tu mensualidad.",
          "Recepcionista con IA 24/7: Responde cotizaciones, califica clientes y agenda citas por ti.",
          "10,000 SMS al mes para campañas de reactivación.",
          "Recuperación de conversaciones sin respuesta y seguimiento automatizado de prospectos.",
          "Automatizaciones avanzadas para seguimiento, reactivación de clientes y citas.",
        ],
      },
    ],
    conditionsTitle: "Condiciones comerciales aplicables a todos los planes",
    conditionsIntro:
      "Transparencia total para proteger tu rentabilidad, establecer expectativas claras y asegurar una relación duradera.",
    commercialConditions: [
      {
        title: "1. El setup se paga por separado",
        description:
          "La implementación única cubre el alcance definido del proyecto, la configuración, las pruebas y la puesta en marcha. Con la promo anual, este costo queda cubierto al 100%.",
      },
      {
        title: "2. Contrato mensual con alcance definido",
        description:
          "La mensualidad cubre la licencia, el mantenimiento y el soporte descritos para cada nivel. Establecemos una vigencia inicial recomendada de 6 meses con condiciones claras de renovación y cancelación.",
      },
      {
        title: "3. Desarrollos adicionales fuera del alcance",
        description:
          "Nuevos sitios, páginas por encima del límite del plan, integraciones especiales, migraciones complejas y automatizaciones nuevas se presupuestan antes de ejecutarse.",
      },
      {
        title: "4. El cliente conserva el control de sus activos",
        description:
          "Definimos contractualmente la propiedad y administración del dominio, los datos, las cuentas publicitarias y los números telefónicos. Siempre sabrás qué servicios dependen de cada infraestructura.",
      },
      {
        title: "5. Enfoque en sistemas y capacidades comerciales",
        description:
          "Implementamos procesos y herramientas de alto impacto probado. El crecimiento de ventas y conversiones depende también de la oferta, el mercado y la gestión operativa de tu negocio.",
      },
    ],
    note:
      "Los costos de implementación única cubren el setup completo y la entrega llave en mano. Mensualidad activa para mantenimiento, licencias y soporte continuo.",
    cta: { label: "Agenda una llamada de diagnóstico", kind: "apply" },
  };
}

export function detailingSystem(): SystemContent {
  return {
    eyebrow: "El sistema por dentro",
    title: "No es una página web. Es tu negocio funcionando en automático.",
    body:
      "Todo lo que necesitas para captar, organizar y cerrar clientes, conectado en un solo lugar.",
    features: [
      {
        icon: "crm",
        title: "Calendario y agenda 24/7",
        body:
          "Tus clientes reservan solos, a cualquier hora, y cada cita cae ordenada en un solo calendario.",
      },
      {
        icon: "call",
        title: "Rescate de llamadas perdidas",
        body:
          "Si estás puliendo un auto, el sistema responde por SMS al instante y no deja enfriar al prospecto.",
      },
      {
        icon: "ai",
        title: "Recepcionista virtual",
        body:
          "Responde precios, califica al cliente y agenda la cita sin que sueltes la pulidora.",
      },
      {
        icon: "store",
        title: "Depósitos con tarjeta",
        body:
          "El cliente asegura su cita pagando por adelantado. Menos plantones, más ingresos seguros.",
      },
      {
        icon: "reviews",
        title: "Recordatorios y reseñas",
        body:
          "SMS automáticos antes de la cita y solicitud de reseña en Google después del servicio.",
      },
      {
        icon: "web",
        title: "Web y SEO local por ciudad",
        body:
          "Una página propia para cada ciudad donde trabajas, lista para aparecer en Google.",
      },
    ],
  };
}

export function detailingReviews(): ReviewsContent {
  return {
    eyebrow: "Resultados reales",
    title: "Detailers que dejaron de perseguir clientes y empezaron a recibirlos.",
    disclaimer:
      "Reseñas de ejemplo mientras recolectamos las opiniones de nuestros primeros clientes.",
    reviews: [
      {
        quote:
          "Antes perdía llamadas mientras lavaba. Ahora el sistema contesta, agenda y cobra el depósito. Mi calendario por fin está lleno.",
        name: "Carlos M.",
        business: "Detailing Pro LV",
        city: "Las Vegas, NV",
        rating: 5,
      },
      {
        quote:
          "En dos semanas dejé de depender del boca a boca. Los anuncios traen clientes y la agenda se organiza sola.",
        name: "José R.",
        business: "Bright Auto Detail",
        city: "Los Ángeles, CA",
        rating: 5,
      },
      {
        quote:
          "Lo que más me cambió fue el depósito. Ya casi no tengo plantones y trabajo más tranquilo.",
        name: "Miguel S.",
        business: "Premium Shine",
        city: "San Diego, CA",
        rating: 5,
      },
    ],
  };
}

export function detailingFaq(city: string): NicheFaqContent {
  return {
    eyebrow: "Preguntas frecuentes",
    title: `Lo que todo detailer pregunta antes de arrancar en ${city}.`,
    items: [
      {
        question: "¿Cuánto tarda en estar lista mi página y el sistema?",
        answer:
          "La implementación típica toma entre 2 y 3 semanas, según la cantidad de contenido y accesos que nos compartas.",
      },
      {
        question: "¿Qué incluye exactamente la mensualidad?",
        answer:
          "Licencia del sistema, hosting, mantenimiento, soporte y las automatizaciones de tu plan: agenda, SMS, depósitos y campañas según el nivel.",
      },
      {
        question: "¿El dominio y las cuentas quedan a mi nombre?",
        answer:
          "Sí. El dominio, las cuentas publicitarias, el número de teléfono y tus datos quedan a tu nombre. Nosotros los administramos.",
      },
      {
        question: "¿Necesito saber de tecnología?",
        answer:
          "No. Nosotros configuramos todo y te entregamos el sistema funcionando, con una capacitación simple para ti y tu equipo.",
      },
      {
        question: "¿Qué pasa si no contesto una llamada?",
        answer:
          "El sistema le responde por SMS al instante y guarda la conversación para que la retomes cuando termines el servicio.",
      },
      {
        question: "¿Cómo se paga?",
        answer:
          "La implementación se paga al inicio y la mensualidad es recurrente. Con la promo anual, la implementación queda gratis.",
      },
      {
        question: "¿Y si ya tengo una página web?",
        answer:
          "La usamos como base o la reemplazamos por una orientada a conversión. Te decimos qué conviene en la llamada de diagnóstico.",
      },
    ],
  };
}

export function detailingForm(): FormSectionContent {
  return {
    eyebrow: "Da el siguiente paso",
    title: "Déjanos tus datos y te llamamos hoy mismo.",
    body:
      "Completa el formulario y un especialista revisa tu caso contigo. Sin compromiso y sin letra chica.",
    fallbackLabel: "¿No se ve el formulario? Ábrelo en una pestaña nueva",
  };
}

export function detailingCtaFinal(): CtaBandContent {
  return {
    title: "¿Listo para llenar tu agenda?",
    body:
      "Agenda una asesoría gratuita de 30 minutos y revisamos qué necesita tu negocio de detailing.",
    primaryCta: { label: "Escríbenos por WhatsApp", kind: "whatsapp" },
    secondaryCta: { label: "Agendar asesoría gratuita", kind: "book" },
    showPhoneMonument: true,
  };
}
