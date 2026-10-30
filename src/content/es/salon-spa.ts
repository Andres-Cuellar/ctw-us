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

export function salonSpaSeo(city: string, cityLower: string): PageSeo {
  return {
    title: `Marketing y reservas para Spas y Salones en ${city} | creamostuweb`,
    description:
      `Consigue más citas para tu spa o salón en ${cityLower}. Web, CRM, reservas 24/7, depósitos, recordatorios y seguimiento con IA. Conoce los planes.`,
  };
}

export function salonSpaHero(city: string): HeroContent {
  return {
    eyebrow: `Tecnología y Adquisición para Spas y Salones en ${city}`,
    title: "Mientras atiendes a quien ya está contigo, tu sistema cierra al próximo cliente.",
    sign: {
      lead: "Mientras atiendes a quien ya está contigo,",
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
    trustLine: ["Reservas por especialista", "Agenda disponible 24/7", "Depósitos y recordatorios"],
    offer: {
      title: "OFERTA DE NOVIEMBRE",
      body: "50% de descuento en la implementación de cualquier plan. Elige esta promoción o la oferta anual; (No se pueden combinar)s.",
    },
  };
}

export function salonSpaProblem(): ProblemContent {
  return {
    title: "Tu talento merece una agenda llena, no un desorden en WhatsApp.",
    pains: [
      "Esclavitud digital: Son las 10:00 p.m., estás descansando, y sigues respondiendo mensajes de “¿Cuánto cuesta el balayage?”.",
      "El robo silencioso (Los No-Shows): El cliente agenda un bloque de 2 horas, no llega, no avisa, y tú acabas de perder tiempo y dinero que ya no recuperas.",
      "Falta de flujo constante de clientes: Hay días donde el salón está vacío porque no tienes una estrategia real para atraer clientes nuevos en tu ciudad.",
    ],
    closer:
      "EL ATAQUE (La solución): Nosotros encendemos campañas publicitarias para traerte gente nueva. Tu recepcionista virtual no duerme: los clientes entran, eligen su servicio, pagan el depósito con tarjeta y reciben sus recordatorios solos. Tú solo te enfocas en atender y facturar.",
    closerSign: {
      lead: "EL ATAQUE (La solución): ",
      lit: "publicidad que trae clientes + recepcionista virtual que agenda y cobra.",
      stutter: "4,18",
    },
  };
}

export function salonSpaBundles(city: string): BundlesContent {
  return {
    title: `Sistemas comerciales para el Salón que quiere dominar ${city}`,
    subtitle:
      "Tres niveles para ser el #1 de tu ciudad, precios claros y la promo anual que regala el 100% del setup.",
    positioningIntro:
      "Sistemas comerciales para el Salón que quiere dominar tu ciudad.",
    bundles: [
      {
        id: "growth-engine",
        name: "Growth Engine",
        tagline: "Presencia Impecable",
        tier: "Starter",
        targetAudience:
          "Para el salón que quiere verse premium, organizar sus citas y no perder contactos.",
        setupPrice: "$1,999 USD",
        setupPromoPrice: "$999.50 USD",
        monthlyPrice: "$497 USD",
        monthlyCadence: "/mes",
        annualPromo:
          "Promo Anual: Paga los ~~12~~ 6 meses de licencia y te regalamos los $1,999 de implementación.",
        cta: { label: "Quiero destacar mi Salón", kind: "apply" },
        features: [
          "Recepcionista con IA gratis durante los primeros 2 meses: hasta 5,000 mensajes para resolver consultas y agendar citas.",
          "Web elegante y rápida (hasta 5 páginas).",
          "Bandeja unificada: Todo tu WhatsApp, Instagram DM y Messenger en un solo lugar.",
          "Rescate de llamadas perdidas automático por SMS.",
        ],
      },
      {
        id: "sales-autopilot",
        name: "Sales Autopilot",
        tagline: "Agenda a Reventar",
        badge: "Recomendado",
        tier: "Recomendado",
        targetAudience:
          "Para el spa o salón que quiere clientes nuevos todos los meses y exige depósitos para evitar cancelaciones.",
        setupPrice: "$3,499 USD",
        setupPromoPrice: "$1,749.50 USD",
        monthlyPrice: "$1,697 USD",
        monthlyCadence: "/mes",
        inheritsFrom: "Incluye todo lo de Growth Engine, más:",
        annualPromo:
          "Promo Anual: Paga los ~~12~~ 6 meses de licencia y te regalamos los $3,499 de implementación.",
        cta: { label: "Quiero cero cancelaciones", kind: "apply" },
        features: [
          "Recepcionista con IA incluida para resolver consultas y agendar citas.",
          "Meta Ads (Facebook/Instagram): Gestión de campañas para traerte clientes de servicios de belleza y spa.",
          "Bolsa de inversión incluida: $400 USD/mes de pauta publicitaria ya incluidos.",
          "Sistema de reservas en línea avanzado (por servicio y especialista).",
          "Pagos de depósitos obligatorios y recordatorios implacables por SMS.",
        ],
      },
      {
        id: "market-leader",
        name: "Market Leader",
        tagline: "El Salón Inteligente",
        badge: "Premium",
        tier: "Premium",
        targetAudience:
          "Para clínicas y salones de alto volumen que quieren atención con Inteligencia Artificial y dominar las búsquedas.",
        setupPrice: "$6,999 USD",
        setupPromoPrice: "$3,499.50 USD",
        monthlyPrice: "$2,797 USD",
        monthlyCadence: "/mes",
        inheritsFrom: "Incluye todo lo de Sales Autopilot, más:",
        annualPromo:
          "Promo Anual: Paga los ~~12~~ 6 meses de licencia y te regalamos los $6,999 de implementación.",
        cta: { label: "Quiero la máxima tecnología", kind: "apply" },
        features: [
          "Adquisición Omnicanal (Google Ads + Meta Ads): Aparece de primero cuando alguien busque “mejor spa/salón cerca de mi” en Google.",
          "Bolsa de inversión premium: $800 USD/mes de pauta publicitaria ya incluidos.",
          "Recepcionista con Inteligencia Artificial que chatea, cotiza y agenda directo en tu calendario.",
          "Reactivación masiva por SMS para clientes inactivos.",
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

export function salonSpaSystem(): SystemContent {
  return {
    eyebrow: "El sistema por dentro",
    title: "No es una página web. Es tu salón funcionando en automático.",
    body:
      "Capta, organiza y cobra sin estar pegado al teléfono. Todo conectado en un solo lugar.",
    features: [
      {
        icon: "crm",
        title: "Agenda por especialista",
        body:
          "Reservas online 24/7 organizadas por servicio y por estilista, sin cruces ni sobreventa.",
      },
      {
        icon: "call",
        title: "Rescate de mensajes y llamadas",
        body:
          "El sistema contesta por ti cuando estás atendiendo y no deja perder a la clienta.",
      },
      {
        icon: "ai",
        title: "Recepcionista con IA",
        body:
          "Cotiza, responde dudas y agenda directo en tu calendario, a cualquier hora.",
      },
      {
        icon: "store",
        title: "Depósitos obligatorios",
        body:
          "La clienta paga para reservar. Se acabaron los bloques de dos horas perdidos.",
      },
      {
        icon: "reviews",
        title: "Recordatorios y reseñas",
        body:
          "Menos no-shows y más reseñas en Google, en automático después de cada servicio.",
      },
      {
        icon: "web",
        title: "Web premium y SEO local",
        body:
          "Tu salón con imagen de marca y una página por ciudad lista para aparecer en Google.",
      },
    ],
  };
}

export function salonSpaReviews(): ReviewsContent {
  return {
    eyebrow: "Resultados reales",
    title: "Salones que cambiaron el caos de WhatsApp por una agenda que se llena sola.",
    disclaimer:
      "Reseñas de ejemplo mientras recolectamos las opiniones de nuestros primeros clientes.",
    reviews: [
      {
        quote:
          "Pasaba la noche contestando mensajes. Ahora reservan solas, pagan depósito y llegan con recordatorio.",
        name: "Verónica L.",
        business: "Studio Bella",
        city: "Las Vegas, NV",
        rating: 5,
      },
      {
        quote:
          "La agenda por especialista nos ordenó el salón. Se acabaron los cruces de citas.",
        name: "Daniela P.",
        business: "Glow Salon & Spa",
        city: "Los Ángeles, CA",
        rating: 5,
      },
      {
        quote:
          "Los no-shows bajaron muchísimo desde que pedimos depósito. El sistema hace el trabajo.",
        name: "Marisol G.",
        business: "Divine Beauty",
        city: "San Diego, CA",
        rating: 5,
      },
    ],
  };
}

export function salonSpaFaq(city: string): NicheFaqContent {
  return {
    eyebrow: "Preguntas frecuentes",
    title: `Lo que todo salón pregunta antes de arrancar en ${city}.`,
    items: [
      {
        question: "¿Cuánto tarda en estar lista mi página y el sistema?",
        answer:
          "La implementación típica toma entre 2 y 3 semanas, según la cantidad de contenido y accesos que nos compartas.",
      },
      {
        question: "¿Qué incluye exactamente la mensualidad?",
        answer:
          "Licencia del sistema, hosting, mantenimiento, soporte y las automatizaciones de tu plan: reservas, SMS, depósitos y campañas según el nivel.",
      },
      {
        question: "¿Puedo cobrar el depósito con tarjeta?",
        answer:
          "Sí. Configuramos el cobro de depósitos para que la clienta asegure su cita y reduces las cancelaciones de último minuto.",
      },
      {
        question: "¿La agenda se adapta a varios especialistas?",
        answer:
          "Sí. Cada especialista tiene su propio calendario y disponibilidad, y la clienta elige con quién quiere atenderse.",
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
        question: "¿Y si ya tengo una página web?",
        answer:
          "La usamos como base o la reemplazamos por una orientada a conversión. Te decimos qué conviene en la llamada de diagnóstico.",
      },
    ],
  };
}

export function salonSpaForm(): FormSectionContent {
  return {
    eyebrow: "Da el siguiente paso",
    title: "Déjanos tus datos y te llamamos hoy mismo.",
    body:
      "Completa el formulario y un especialista revisa tu caso contigo. Sin compromiso y sin letra chica.",
    fallbackLabel: "¿No se ve el formulario? Ábrelo en una pestaña nueva",
  };
}

export function salonSpaCtaFinal(): CtaBandContent {
  return {
    title: "¿Listo para llenar tu agenda?",
    body:
      "Agenda una asesoría gratuita de 30 minutos y revisamos qué necesita tu salón o spa.",
    primaryCta: { label: "Hablar por WhatsApp", kind: "whatsapp" },
    secondaryCta: { label: "Agendar asesoría gratuita", kind: "book" },
    showPhoneMonument: true,
  };
}
