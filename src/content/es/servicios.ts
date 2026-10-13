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
  title: "Diseño Web, CRM y Reseñas en el Suroeste | creamostuweb",
  description:
    "Webs, tiendas en línea, CRM, gestión de reseñas y asistente con IA. Todo configurado por nosotros, en español.",
};

export const hero: HeroContent = {
  eyebrow: "Servicios",
  title: "Todo lo que tu negocio necesita para crecer en internet",
  subtitle:
    "Webs, tiendas en línea y herramientas para atender y cerrar más clientes. Elige lo que necesitas hoy y agrega más cuando estés listo.",
  anchors: [
    { label: "Páginas Web", kind: "anchor", href: "#paginas-web" },
    { label: "Tools (Herramientas)", kind: "anchor", href: "#herramientas" },
    { label: "⭐ Servicio Todo en Uno", kind: "anchor", href: "#paquetes" },
    { label: "Tiendas en Línea", kind: "anchor", href: "#tiendas" },
  ],
};

export const webTiers: WebTiersContent = {
  title: "Páginas web que traen clientes",
  intro:
    "Todas incluyen diseño a la medida, versión para celular, hosting, certificado de seguridad (SSL) y botón de WhatsApp. Todas con financiamiento disponible.",
  /** Websites deliberately show no price — sold on the 15-minute call. */
  priceNote:
    "El precio lo vemos juntos en una llamada de 15 minutos, con tu plan de financiamiento.",
  tiers: [
    {
      name: "Landing Page",
      audience: "Para promocionar un servicio o recibir clientes de anuncios.",
      features: [
        "1 página de alta conversión",
        "Formulario conectado a tu CRM",
        "Botón de llamada y WhatsApp",
        "Lista en 7 días",
      ],
      cta: { label: "Aplica ahora", kind: "apply" },
    },
    {
      name: "Web de Negocio",
      flag: "La más elegida",
      audience:
        "Para negocios que quieren verse profesionales y aparecer en Google.",
      features: [
        "Hasta 7 páginas: inicio, servicios, nosotros, galería, contacto y más",
        "Español e inglés",
        "SEO básico y conexión con Google Business Profile",
        "Formularios y agenda de citas en línea",
        "Lista en 10 a 14 días",
      ],
      cta: { label: "Aplica ahora", kind: "apply" },
    },
    {
      name: "Web Pro",
      audience: "Para negocios con varios servicios, sedes o mucho contenido.",
      features: [
        "Páginas ilimitadas",
        "Páginas por servicio y por ciudad para posicionarte en Google",
        "Blog",
        "Integración completa con CRM y automatizaciones",
      ],
      cta: { label: "Aplica ahora", kind: "apply" },
    },
  ],
};

export const store: StoreContent = {
  title: "Tu tienda abierta las 24 horas",
  intro:
    "Vende tus productos en línea con pagos con tarjeta, inventario y envíos. Ideal para boutiques, productos de belleza, comida empacada y más.",
  features: [
    "Catálogo de productos con fotos y variantes",
    "Pagos con tarjeta, Apple Pay y Google Pay",
    "Cálculo de envíos y recogida en tienda",
    "Recuperación automática de carritos abandonados",
    "Panel fácil para manejar pedidos desde el celular",
  ],
  cta: { label: "Cotiza tu tienda", kind: "apply" },
};

export const tools: ToolsContent = {
  title: "Herramientas para atender, cobrar y vender más",
  intro:
    "Funcionan solas o junto a tu web. Nosotros las dejamos configuradas.",
  tools: [
    {
      name: "CRM para tu negocio",
      price: "$97",
      cadence: "/mes",
      pitch: "Todos tus clientes y conversaciones en un solo lugar.",
      features: [
        "WhatsApp, SMS, Facebook, Instagram y email en una sola bandeja",
        "Pipeline de ventas para ver en qué etapa va cada cliente",
        "Texto automático cuando no contestas una llamada",
        "Recordatorios y seguimientos automáticos",
        "App para celular",
      ],
    },
    {
      name: "Gestión de Reseñas",
      price: "$97",
      cadence: "/mes",
      pitch: "Más estrellas en Google, sin perseguir a nadie.",
      features: [
        "Solicitud automática de reseña por SMS o WhatsApp después de cada trabajo",
        "Clientes insatisfechos te escriben a ti en privado primero",
        "Respuestas a reseñas con IA",
        "Widget de reseñas para tu web",
      ],
    },
    {
      name: "Facturas y Contratos",
      price: "$47",
      cadence: "/mes",
      pitch: "Cotiza, cobra y firma desde el celular.",
      features: [
        "Cotizaciones y facturas con tu logo",
        "Link de pago con tarjeta",
        "Recordatorios automáticos de pagos pendientes",
        "Contratos con firma electrónica",
      ],
    },
    {
      name: "Asistente con IA",
      price: "$297",
      cadence: "/mes",
      pitch: "Un empleado que responde 24/7, en español e inglés.",
      features: [
        "Responde preguntas frecuentes por WhatsApp, SMS y chat de la web",
        "Califica al cliente y agenda citas en tu calendario",
        "Te pasa la conversación cuando el cliente está listo",
        "Entrenado con la información de tu negocio",
      ],
    },
  ],
};

export const bundles: BundlesContent = {
  title: "Sistemas comerciales completos para escalar tu negocio",
  subtitle:
    "Presentados como tres niveles de madurez comercial: no compres solo páginas o herramientas aisladas, implementa la infraestructura que tu etapa necesita.",
  positioningIntro:
    "Organiza tu captación, automatiza tu seguimiento o lidera tu mercado con inteligencia artificial.",
  bundles: [
    {
      id: "growth-engine",
      name: "Growth Engine",
      tagline: "Infraestructura digital y gestión de clientes",
      tier: "Starter",
      targetAudience:
        "Para negocios que necesitan profesionalizar su presencia digital, centralizar sus contactos y dejar de perder oportunidades.",
      setupPrice: "$1.999 USD",
      monthlyPrice: "$497 USD",
      monthlyCadence: "/mes",
      phases: [
        {
          title: "FASE 1. Presencia digital",
          items: [
            "Sitio web profesional de hasta 5 páginas.",
            "Diseño adaptable a móviles y optimización de velocidad.",
            "Formularios de contacto y captación de prospectos.",
            "Configuración básica de SEO técnico y certificado SSL.",
          ],
        },
        {
          title: "FASE 2. Infraestructura comercial",
          items: [
            "CRM centralizado para organizar contactos e historial de interacciones.",
            "Bandeja de entrada unificada para canales compatibles: web, Facebook, Instagram, Google Business Profile y SMS.",
            "Calendario digital con disponibilidad sincronizada y reservas en línea.",
            "Automatización de respuesta a llamadas perdidas mediante SMS (cuando la configuración telefónica lo permita).",
            "Configuración inicial de usuarios, permisos y notificaciones.",
            "Capacitación inicial para utilizar el sistema.",
          ],
        },
      ],
      maintenance: {
        title: "Mantenimiento y soporte",
        items: [
          "Monitoreo básico del funcionamiento.",
          "Mantenimiento de la configuración existente.",
          "Soporte técnico estándar para incidencias de la plataforma.",
        ],
      },
      consumptionNote:
        "Telefonía, SMS, servicios de terceros y consumos adicionales se facturan según uso. No están incluidos en la mensualidad.",
      idealFor:
        "Negocios que necesitan orden, presencia profesional y un proceso de captación estructurado.",
      cta: { label: "Comenzar con Growth Engine", kind: "apply" },
    },
    {
      id: "sales-autopilot",
      name: "Sales Autopilot",
      tagline: "Automatización comercial\ny conversión",
      badge: "Recomendado",
      tier: "Recomendado",
      targetAudience:
        "Para negocios que reciben prospectos de manera constante y necesitan dar seguimiento, cerrar más ventas y reducir las ausencias a sus citas.",
      setupPrice: "$3.499 USD",
      monthlyPrice: "$997 USD",
      monthlyCadence: "/mes",
      inheritsFrom: "Incluye todo lo del plan Growth Engine, más:",
      phases: [
        {
          title: "FASE 1. Presencia digital avanzada",
          items: [
            "Sitio web de hasta 10 páginas.",
            "Estructura para múltiples servicios y formularios segmentados.",
            "Optimización de páginas orientada a la conversión.",
          ],
        },
        {
          title: "FASE 2. Máquina de ventas",
          items: [
            "Pipeline visual para controlar cada oportunidad comercial.",
            "Secuencias automáticas de seguimiento por correo y SMS.",
            "Recordatorios de citas configurados para 24 horas y 1 hora antes.",
            "Automatización de seguimiento a prospectos que no han respondido.",
            "Presupuestos y facturas con enlaces de pago mediante integraciones compatibles.",
            "Solicitud automática de reseñas a clientes reales.",
            "Automatizaciones para nuevos contactos, oportunidades y clientes.",
            "Reportes básicos del pipeline y seguimiento comercial.",
          ],
        },
      ],
      maintenance: {
        title: "Mantenimiento y soporte",
        items: [
          "Monitoreo de automatizaciones existentes.",
          "Ajustes menores y soporte prioritario estándar.",
          "Revisión mensual del funcionamiento del embudo comercial.",
        ],
      },
      consumptionNote:
        "Telefonía, SMS, correo de pago, IA y servicios externos se cobran según uso. Conoce tarifas y límites antes de activar cada servicio.",
      idealFor:
        "Empresas de servicios, clínicas, agencias y negocios que necesitan convertir más prospectos en clientes.",
      cta: { label: "Elegir Sales Autopilot", kind: "apply" },
    },
    {
      id: "market-leader",
      name: "Market Leader",
      tagline: "Inteligencia artificial y automatización avanzada",
      badge: "Premium",
      tier: "Premium",
      targetAudience:
        "Para empresas que quieren automatizar la atención, recuperar oportunidades comerciales y escalar su operación con un sistema integrado.",
      setupPrice: "$6.999 USD",
      monthlyPrice: "$1.500 USD",
      monthlyCadence: "/mes",
      inheritsFrom: "Incluye todo lo del plan Sales Autopilot, más:",
      phases: [
        {
          title: "FASE 1. Presencia digital premium",
          items: [
            "Sitio web corporativo de hasta 20 páginas.",
            "Arquitectura de contenido y SEO técnico ampliado.",
            "Integración de formularios, calendarios y puntos de conversión.",
          ],
        },
        {
          title: "FASE 2. Inteligencia artificial y comunicaciones",
          items: [
            "Agente conversacional de IA disponible 24/7 para responder preguntas frecuentes, calificar prospectos y facilitar reservas.",
            "Entrenamiento inicial de la IA con la información y documentos aprobados del negocio.",
            "Integración de IA con el CRM y los flujos comerciales compatibles.",
            "Línea telefónica comercial local (sujeta a disponibilidad y requisitos del proveedor).",
            "Bolsa de hasta 10.000 segmentos SMS salientes al mes bajo política de uso definida.",
            "Automatización de reactivación de clientes y prospectos respetando consentimientos.",
            "Flujos de trabajo personalizados para bienvenida, asignación y seguimiento.",
            "Panel de seguimiento de actividad y resultados de las automatizaciones.",
          ],
        },
        {
          title: "FASE 3. Acompañamiento premium",
          items: [
            "Soporte técnico prioritario y monitoreo de flujos y agente IA.",
            "Hasta 4 horas mensuales de ajustes y optimización de automatizaciones existentes.",
            "Revisión mensual de oportunidades de mejora continua.",
          ],
        },
      ],
      consumptionNote:
        "10.000 segmentos SMS incluidos mensualmente para destinos EE.UU. elegibles (sujeto a uso razonable). Segmentos adicionales, llamadas, voz de IA y operadores externos se facturan según tarifas reales del proveedor.",
      idealFor:
        "Empresas con volumen importante de consultas y clientes que necesitan automatizar procesos y atención fuera del horario laboral.",
      cta: { label: "Escalar con Market Leader", kind: "apply" },
    },
  ],
  conditionsTitle: "Condiciones comerciales aplicables a todos los planes",
  conditionsIntro:
    "Transparencia total para proteger tu rentabilidad, establecer expectativas claras y asegurar una relación duradera.",
  commercialConditions: [
    {
      title: "1. El setup se paga por separado",
      description:
        "La implementación única cubre el alcance definido del proyecto, la configuración, las pruebas y la puesta en marcha. Solicitudes que amplíen ese alcance se cotizan adicionalmente.",
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

export const billing: BillingContent = {
  title: "Estructura de inversión clara y transparente",
  columns: { item: "Plan de Madurez Comercial", monthly: "Implementación Única", annual: "Servicio Mensual" },
  rows: [
    { item: "Growth Engine (Starter)", monthly: "$1.999 USD", annual: "$497 USD/mes" },
    { item: "Sales Autopilot (Recomendado)", monthly: "$3.499 USD", annual: "$997 USD/mes" },
    { item: "Market Leader (Premium)", monthly: "$6.999 USD", annual: "$1.500 USD/mes" },
  ],
  body: "Configuración llave en mano, capacitación incluida y soporte técnico continuo en español.",
};

export const payments: PaymentsContent = {
  title: "Paga como prefieras",
  body: "Aceptamos tarjetas de crédito y débito, Apple Pay, Google Pay, Zelle, Cash App y transferencia bancaria. También puedes pagar en cuotas con Affirm o Klarna.",
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
    "Los planes mensuales se cobran automáticamente con tarjeta. Zelle, Cash App y transferencia están disponibles para pagos de contado, anticipos y planes anuales. Pagos con tarjeta procesados de forma segura por Stripe.",
};

export const addOns: AddOnsContent = {
  title: "Complementa tu presencia digital",
  items: [
    "Registro de dominio (.com)",
    "Email corporativo (tunombre@tunegocio.com)",
    "Idioma adicional para tu web",
    "Configuración de Google Business Profile",
    "SEO mensual",
    "Manejo de redes sociales",
    "Publicidad en Facebook, Instagram y Google",
  ],
  cta: { label: "Pregúntanos por WhatsApp", kind: "whatsapp" },
};

export const faq: FaqContent = {
  title: "Preguntas frecuentes",
  items: [
    {
      question: "¿Por qué el setup o implementación se cobra por separado?",
      answer:
        "La implementación inicial cubre el diseño del sitio web, la integración técnica del CRM, configuración de números, embudos, flujos y capacitación personalizada. La mensualidad cubre la infraestructura, mantenimiento, licencias y soporte continuo.",
    },
    {
      question: "¿Cuál de los tres planes es el recomendado para mi negocio?",
      answer:
        "Si buscas dejar de perder prospectos y automatizar citas y seguimientos sin contratar más personal, recomendamos Sales Autopilot. Si necesitas presencia básica estructurada con CRM, Growth Engine es el punto de inicio. Si manejas un alto volumen y buscas atención inteligente 24/7 y reactivación comercial, Market Leader es la opción ideal.",
    },
    {
      question: "¿Qué pasa con los consumos de llamadas, SMS e IA?",
      answer:
        "En Growth Engine y Sales Autopilot, telefonía y consumos de terceros se facturan según uso transparente. En Market Leader incluimos hasta 10.000 segmentos SMS al mes para EE.UU. bajo política de uso razonable. Conocerás todas las tarifas y límites antes de activar cada servicio.",
    },
    {
      question: "¿Tengo que firmar un contrato a largo plazo?",
      answer:
        "Recomendamos una vigencia inicial de 6 meses para consolidar la infraestructura comercial y la maduración de tus conversiones, con condiciones claras y transparentes de renovación y cancelación.",
    },
    {
      question: "¿Quién conserva la propiedad de mi dominio, números y contactos?",
      answer:
        "El cliente siempre conserva el control de sus activos: tu dominio, tus datos, bases de contactos y cuentas publicitarias son 100% de tu negocio.",
    },
    {
      question: "¿Quién configura y enseña a usar todo el sistema?",
      answer:
        "Nosotros nos encargamos de todo el trabajo técnico de configuración y te brindamos capacitación completa en español para que tu equipo opere con facilidad.",
    },
  ],
};

export const ctaFinal: CtaBandContent = {
  title: "¿No sabes por dónde empezar?",
  body: "Agenda una llamada gratis de 15 minutos y te decimos exactamente qué necesita tu negocio, y qué no.",
  primaryCta: { label: "Agenda tu llamada gratis", kind: "book" },
  secondaryCta: { label: "Escríbenos por WhatsApp", kind: "whatsapp" },
};
