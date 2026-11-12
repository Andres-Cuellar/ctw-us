"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/shared/motion/useReveal";
import { benefits, faqs, plans, terms } from "./content";
import "./landing.css";

const money = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
const stages = ["Consulta nueva", "Respuesta enviada", "Cita reservada", "Seguimiento"];
const demoMessages = [
  { label: "Una nueva oportunidad", time: "9:41", text: "Hola, me gustaría cotizar un servicio. ¿Tienen disponibilidad esta semana?", reply: "La consulta llega a tu panel con los datos del interesado.", status: "Contacto registrado", icon: "contacts" },
  { label: "La conversación continúa", time: "9:42", text: "¡Hola! Podemos ayudarte. ¿Qué servicio necesitas y en qué zona te encuentras?", reply: "La IA ayuda con las preguntas iniciales. Tu equipo puede intervenir cuando lo necesite.", status: "Atención inicial con IA", icon: "chat" },
  { label: "Un siguiente paso claro", time: "9:44", text: "Tu cita está reservada para el jueves a las 10:00 a. m. Te enviaremos un recordatorio.", reply: "La reserva aparece en tu agenda y activa la confirmación configurada.", status: "Cita confirmada", icon: "calendar" },
  { label: "Nada depende de la memoria", time: "Día siguiente", text: "Tienes una cotización pendiente de seguimiento. Revisa la conversación y continúa la atención.", reply: "Tu equipo ve la tarea pendiente y registra el resultado de la oportunidad.", status: "Tarea creada para tu equipo", icon: "flow" },
];

function Icon({ name, className }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    web: <><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 13l-2 2 2 2m8-4 2 2-2 2m-3-5-2 6"/></>,
    contacts: <><circle cx="9" cy="8" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3m2-16a3 3 0 0 1 0 6m1 4a5 5 0 0 1 3 5"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18m-13 5 3 3 5-5"/></>,
    flow: <><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h6a3 3 0 0 1 3 3v6M15 12l3 3 3-3M6 12v6h6"/></>,
    chat: <><path d="M21 11a8 8 0 0 1-8 8H6l-4 3V11a9 9 0 0 1 19 0Z"/><path d="M7 10h10m-10 4h6"/></>,
    support: <><path d="M4 14v-3a8 8 0 0 1 16 0v3m-4 7h1a3 3 0 0 0 3-3"/><rect x="2" y="11" width="5" height="7" rx="2"/><rect x="17" y="11" width="5" height="7" rx="2"/><path d="M12 21h4"/></>,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6"/>,
    check: <path d="m5 12 4 4L19 6"/>,
    spark: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"/><path d="m20 2 .5 1.5L22 4l-1.5.5L20 6l-.5-1.5L18 4l1.5-.5L20 2Z"/></>,
  };
  return <svg aria-hidden="true" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[name] ?? paths.spark}</svg>;
}

function BookButton({ plan, light = false }: { plan?: string; light?: boolean }) {
  return <button type="button" className={`${"nc-cta"} ${light ? "nc-ctaLight" : ""}`} onClick={() => window.dispatchEvent(new CustomEvent("open-booking", { detail: { plan, source: "nuevos-clientes" } }))}>Agendar una demostración <Icon name="arrow" /></button>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className={"nc-eyebrow"}><span aria-hidden="true" />{children}</p>;
}

function useSceneCycle(enabled: boolean, count: number) {
  const element = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
    }, { threshold: 0.35 });
    if (element.current) observer.observe(element.current);
    const timer = window.setInterval(() => {
      if (inView && !document.hidden && !media.matches) {
        setStep(current => (current + 1) % count);
      }
    }, 4200);
    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, [enabled, count, step]);

  return { element, step, setStep };
}

function HeroActivity({ playing }: { playing: boolean }) {
  const { element, step } = useSceneCycle(playing, 3);
  const scenes = [
    { icon: "chat", label: "CONSULTA RECIBIDA", title: "¿Tienen disponibilidad?", detail: "Tu web abre la conversación." },
    { icon: "contacts", label: "OPORTUNIDAD ORGANIZADA", title: "Cada contacto, en su lugar.", detail: "Tu equipo sabe qué sigue." },
    { icon: "calendar", label: "UN SIGUIENTE PASO", title: "Una cita en tu agenda.", detail: "Confirmación y recordatorio conectados." },
  ];
  const scene = scenes[step];
  return <div ref={element} className="nc-heroActivity">
    <div className="nc-activityScene" key={step}>
      <span className="nc-notificationMark"><Icon name={scene.icon}/></span>
      <div><small>{scene.label}</small><strong>{scene.title}</strong><p>{scene.detail}</p></div>
    </div>
    <div className="nc-activityTrack" aria-hidden="true">{scenes.map((item, index) => <span key={item.label} className={index === step ? "nc-trackActive" : ""}/>)}</div>
    <span className="nc-activityCaption">Ejemplo del recorrido de una consulta</span>
  </div>;
}

function JourneyDemo({ playing }: { playing: boolean }) {
  const [interacting, setInteracting] = useState(false);
  const { element, step, setStep } = useSceneCycle(playing && !interacting, stages.length);
  const current = demoMessages[step];
  return <div ref={element} className={"nc-demo"}
    onMouseEnter={() => setInteracting(true)}
    onMouseLeave={event => setInteracting(event.currentTarget.contains(document.activeElement))}
    onFocusCapture={() => setInteracting(true)}
    onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}
  >
    <div className={"nc-demoTop"}><span><i /><i /><i /></span><span>Tu negocio / Centro de oportunidades</span><span className={"nc-demoBadge"}>DEMO INTERACTIVA</span></div>
    <div className={"nc-demoWorkspace"}>
      <aside className={"nc-demoSidebar"}><div className={"nc-demoMonogram"}>c<span>↗</span></div>{["web", "contacts", "chat", "calendar", "flow"].map((name, i) => <span key={name} className={i === 1 ? "nc-sidebarActive" : ""}><Icon name={name}/></span>)}<span className={"nc-sidebarBottom"}>LV</span></aside>
      <div className={"nc-demoMain"}>
        <div className={"nc-demoHeading"}><div><small>ASÍ SE CONECTA TODO</small><h3>Una consulta.<br/>Un siguiente paso.</h3></div><span className={"nc-liveDot"}>Ejemplo ilustrativo</span></div>
        <div className={"nc-stageNav"} role="group" aria-label="Explorar el recorrido de una consulta">{stages.map((stage, i) => <button type="button" aria-pressed={step === i} key={stage} className={step === i ? "nc-activeStage" : ""} onClick={() => setStep(i)}><span>0{i + 1}</span>{stage}</button>)}</div>
        <div className={"nc-demoScene"} key={step}>
          <div className={"nc-contactCard"}><span className={"nc-avatar"}>AC</span><div><strong>Alex · Cliente de ejemplo</strong><small>Servicio solicitado · Las Vegas</small></div><span className={"nc-contactStatus"}>En seguimiento</span></div>
          <div className={"nc-messageRow"}><span className={"nc-messageIcon"}><Icon name={current.icon}/></span><div><div className={"nc-messageMeta"}><strong>{current.label}</strong><span>{current.time}</span></div><p className={"nc-messageBubble"}>{current.text}</p><span className={"nc-messageStatus"}><Icon name="check"/>{current.status}</span></div></div>
          <div className={"nc-demoInsight"}><Icon name="spark"/><p>{current.reply}</p></div>
        </div>
        <div className={"nc-demoBottom"}><span><Icon name="check"/> Web + CRM + agenda conectados</span><button type="button" onClick={() => setStep((step + 1) % stages.length)}>Ver siguiente paso <Icon name="arrow"/></button></div>
      </div>
    </div>
    <p className={"nc-demoCaption"}>Explora cada paso. La atención con IA está incluida en Crecimiento y Expansión.</p>
  </div>;
}

function PromoNotice() {
  const storageKey = "ctw-trial-promo-closed";
  const [state, setState] = useState<"pending" | "open" | "closed">("pending");

  useEffect(() => {
    try {
      setState(sessionStorage.getItem(storageKey) === "1" ? "closed" : "open");
    } catch {
      setState("open");
    }
  }, []);

  const closePromotion = () => {
    setState("closed");
    try { sessionStorage.setItem(storageKey, "1"); } catch { /* Keep the choice in this view when storage is unavailable. */ }
  };

  const openPromotion = () => {
    setState("open");
    try { sessionStorage.removeItem(storageKey); } catch { /* Reopening also works without session storage. */ }
  };

  if (state === "pending") return null;

  return <>
    {state === "closed" && <button type="button" className="nc-promoLauncher" aria-label="Ver promoción de 30 días" onClick={openPromotion}><Icon name="spark"/><span>Tu mes gratis <b>↗</b></span></button>}
    {state === "open" && <aside className="nc-promoNotice" aria-label="Promoción de bienvenida">
      <button type="button" aria-label="Cerrar promoción" className="nc-noticeClose" onClick={closePromotion}>×</button>
      <span className="nc-noticeIcon"><Icon name="spark"/></span><small>UN BUEN COMIENZO</small>
      <h2>Tu primer mes,<br/>por nuestra cuenta.</h2>
      <p>30 días sin mensualidad ni implementación inicial. Incluye US$20 de crédito para IA y mensajería.</p>
      <BookButton/>
      <p className="nc-noticeFine">Si continúas mes a mes, se cobra la implementación. Bonificada con 6 o 12 meses anticipados. Pauta y otros consumos aparte.</p>
      <a href="#condiciones">Ver condiciones de la promoción</a>
    </aside>}
  </>;
}

export function NewClientsLanding() {
  const scope = useRef<HTMLDivElement>(null);
  const [billing, setBilling] = useState<1 | 6 | 12>(1);
  const [motionPaused, setMotionPaused] = useState(false);
  useReveal(scope);

  return <div ref={scope} className={`nc-landing${motionPaused ? " nc-motionPaused" : ""}`} lang="es">
    <nav className={"nc-sectionNav"} aria-label="Contenido de la propuesta"><span>NUEVOS CLIENTES <b>↗</b></span><div><a href="#sistema">Tu sistema</a><a href="#planes">Planes y precios</a><a href="#prueba">30 días de prueba</a></div><a href="#planes" className={"nc-navPrice"}>Desde US$297/mes <span>↗</span></a></nav>

    <section className={"nc-hero"}>
      <button type="button" className="nc-motionControl" aria-pressed={motionPaused} onClick={() => setMotionPaused(value => !value)}>{motionPaused ? "▶ Activar animaciones" : "Ⅱ Pausar animaciones"}</button>
      <div className={"nc-heroGrid"}>
        <div className={"nc-heroCopy"} data-reveal><Eyebrow>PARA NEGOCIOS DE SERVICIOS EN TODO EL SUROESTE</Eyebrow><h1>Que ninguna<br/>consulta se quede<br/><em>sin respuesta.</em></h1><p>Tu web atrae la atención. Tu sistema organiza las consultas. Tu equipo sabe cómo continuar.</p><p className={"nc-heroSecondary"}>Conectamos tu web, tus clientes y tu seguimiento. Suma inteligencia artificial y publicidad cuando tu negocio lo necesite.</p><BookButton/><div className={"nc-heroChecks"}><span><Icon name="check"/> Configurado para tu negocio</span><span><Icon name="check"/> Atención en español</span></div></div>
        <div className={"nc-heroVisual"} data-reveal><div className={"nc-heroPhoto"}><Image src="/images/home/barbershop-busy.jpg" alt="Profesional atendiendo su negocio de servicios" fill sizes="(max-width: 760px) 100vw, 45vw" preload/><div className={"nc-photoShade"}/><span className={"nc-photoLabel"}>TÚ TE OCUPAS DE TU NEGOCIO.</span><p>Tu próxima oportunidad<br/>también merece atención.</p></div><HeroActivity playing={!motionPaused}/><div className={"nc-heroTrial"}><strong>30<span>días</span></strong><div>Conoce el sistema.<br/><b>El primer mes va por nuestra cuenta.</b><a href="#prueba">Incluye US$20 de crédito. Ver condiciones ↗</a></div></div></div>
      </div>
      <div className={"nc-connectionStrip"}><span>Una sola operación.</span><div>{["Tu web", "Tus consultas", "Tu agenda", "Tu seguimiento"].map((label, i) => <span key={label}>{i > 0 && <Icon name="arrow"/>}{label}</span>)}</div><span>Todo conectado. <Icon name="flow"/></span></div>
    </section>

    <section className={`${"nc-section"} ${"nc-painSection"}`}>
      <div className={"nc-painIntro"} data-reveal><Eyebrow>EL PROBLEMA NO ES SOLO RECIBIR CONSULTAS</Eyebrow><h2>Es lo que pasa<br/><em>después.</em></h2><p>Tu día ya está lleno. Dar seguimiento no debería depender de acordarte de todo.</p></div>
      <div className={"nc-painList"}>{[["“Te respondo en un rato.”", "Estás trabajando, llega un mensaje y se queda pendiente."],["“Le envié la cotización…”", "Pero pasan los días y nadie retoma la conversación."],["“¿Dónde anoté esa cita?”", "Mensajes, notas y agendas que no se conectan."],["“¿Qué pasó con los anuncios?”", "Llegan consultas, pero pierdes de vista el resultado."]].map(([title, body]) => <div key={title} data-reveal><span aria-hidden="true">↗</span><div><h3>{title}</h3><p>{body}</p></div></div>)}</div>
    </section>

    <section id="sistema" className={`${"nc-section"} ${"nc-systemSection"}`}>
      <div className={"nc-sectionHeading"} data-reveal><Eyebrow>DEL PRIMER MENSAJE AL SIGUIENTE PASO</Eyebrow><h2>Menos piezas sueltas.<br/><em>Más conexión.</em></h2><p>Mira cómo avanza una oportunidad en tu negocio. Puedes seleccionar cada etapa; la reproducción se pausa mientras interactúas.</p></div>
      <div data-reveal><JourneyDemo playing={!motionPaused}/></div>
    </section>

    <section className={`${"nc-section"} ${"nc-benefitsSection"}`}>
      <div className={"nc-splitHeading"} data-reveal><div><Eyebrow>LO QUE VAS A RECIBIR</Eyebrow><h2>Una base sólida.<br/>Para el día a día.</h2></div><p>Herramientas que trabajan juntas y un equipo que te ayuda a ponerlas en marcha.</p></div>
      <div className={"nc-benefitGrid"}>{benefits.map(([icon, title, body]) => <article className={"nc-benefit"} key={title} data-reveal><span className={"nc-benefitIcon"}><Icon name={icon}/></span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>

    <section className={`${"nc-section"} ${"nc-aiSection"}`}>
      <div className={"nc-aiVisual"} data-reveal><div className={"nc-aiOrbit"}><Icon name="spark"/><span>IA</span></div><div className={"nc-aiChat"}><small>11:48 P. M. · EJEMPLO ILUSTRATIVO</small><p>Hola, ¿atienden en mi zona?</p><p>¡Hola! Con gusto te ayudo. ¿En qué zona te encuentras y qué servicio necesitas?</p><span><Icon name="check"/> Tu equipo puede continuar la conversación.</span></div><span className={"nc-aiLabel"}>ASISTENCIA INICIAL · CONTROL HUMANO</span></div>
      <div data-reveal><Eyebrow>INCLUIDA EN CRECIMIENTO Y EXPANSIÓN</Eyebrow><h2>Tu día termina.<br/>Las preguntas<br/><em>no siempre.</em></h2><p>Un asistente con IA, configurado con la información de tu negocio, ayuda a atender las primeras preguntas incluso fuera de horario.</p><ul className={"nc-checkList"}>{["Explica tus servicios, horarios y zona de atención.", "Recopila los datos iniciales del interesado.", "Ayuda a encontrar un horario para una cita.", "Deriva a tu equipo los casos que necesitan atención humana."].map(item => <li key={item}><Icon name="check"/>{item}</li>)}</ul><p className={"nc-aiNote"}>Tu equipo mantiene el control de las decisiones comerciales. La IA no reemplaza la atención personalizada.</p></div>
    </section>

    <section className={`${"nc-section"} ${"nc-adsSection"}`}>
      <div data-reveal><Eyebrow>CUANDO ESTÉS LISTO PARA SUMAR CAPTACIÓN</Eyebrow><h2>Que te descubran.<br/>Que te encuentren.</h2><p>Dos maneras de llegar a posibles clientes. Un mismo sistema para continuar la conversación.</p></div>
      <div className={"nc-adChannels"}><article data-reveal><span className={"nc-channelLogo"}>f <span>◎</span></span><small>DESDE CRECIMIENTO</small><h3>Facebook e Instagram</h3><p>Presenta tus servicios a posibles clientes. Gestionamos anuncios, textos y revisión de las oportunidades recibidas.</p></article><article data-reveal><span className={"nc-channelLogo"}>G<span>↗</span></span><small>EN EXPANSIÓN</small><h3>Google Ads</h3><p>Llega a personas que ya buscan tus servicios. Gestionamos campañas de búsqueda, anuncios y revisión de términos.</p></article></div>
      <div className={"nc-adNotice"} data-reveal><Icon name="spark"/><p><strong>La pauta la pagas tú. La recomendación la hacemos contigo.</strong> Ningún plan incluye inversión publicitaria. Te recomendamos un presupuesto según tus objetivos, tu mercado y tu capacidad de atención. Lo apruebas antes de activar campañas.</p></div>
    </section>

    <section id="planes" className={`${"nc-section"} ${"nc-pricingSection"}`}>
      <div className={"nc-sectionHeading"} data-reveal><Eyebrow>TRES NIVELES. UNA BASE CONECTADA.</Eyebrow><h2>Elige cómo quieres<br/><em>dar el siguiente paso.</em></h2><p>Empieza con organización. Suma IA y gestión publicitaria cuando las necesites.</p></div>
      <div className={"nc-billingOptions"} role="group" aria-label="Forma de pago">{([[1, "Mes a mes"], [6, "6 meses"], [12, "12 meses"]] as const).map(([period, label]) => <button type="button" key={period} aria-pressed={billing === period} onClick={() => setBilling(period)} className={billing === period ? "nc-billingActive" : ""}>{label}{period !== 1 && <span>Sin implementación</span>}</button>)}</div>
      <p className={"nc-billingNote"}>{billing === 1 ? "Precios de continuidad después de los 30 días de prueba." : "Pago anticipado después de la prueba. Implementación bonificada. Consulta las condiciones de cancelación."}</p>
      <div className={"nc-planGrid"}>{plans.map((plan, index) => <article className={`${"nc-plan"} ${index === 1 ? "nc-recommended" : ""}`} key={plan.name}>
        <div className={"nc-planTop"}><span>{plan.name}</span>{index === 1 ? <span className={"nc-recommendedBadge"}><Icon name="spark"/> Recomendado</span> : <Icon name={index === 0 ? "web" : "flow"}/>}</div><h3>{plan.tagline}</h3><p className={"nc-planDescription"}>{plan.description}</p><div className={"nc-planPrice"}><span>US$</span><strong>{money(plan.price).slice(1)}</strong><span>/mes</span></div>{billing !== 1 && <p className={"nc-prepaidTotal"}>{money(plan.price * billing)} USD por {billing} meses, por adelantado.</p>}<div className={"nc-setupPrice"}><span>Implementación · pago único</span><strong>{billing === 1 ? `${money(plan.setup)} USD` : <><del>{money(plan.setup)}</del> Bonificada</>}</strong></div><BookButton plan={plan.name} light={index === 1}/><p className={"nc-planAdNote"}>Pauta no incluida · Consumos aparte</p><div className={"nc-planDivider"}/><h4>{index === 0 ? "Tu sistema incluye" : `Todo lo anterior, y más`}</h4><ul>{plan.features.map(feature => <li key={feature}><Icon name="check"/>{feature}</li>)}</ul><p className={"nc-planExtra"}>{plan.extra}</p>
      </article>)}</div>
      <div className={"nc-pricingFootnote"}><strong>Publicidad y consumos, por separado.</strong><p>Ningún precio incluye inversión en anuncios. Los consumos de IA, mensajería, telefonía, correo y otros servicios externos se detallan antes de contratar. La prueba incluye US$20 de crédito combinado para IA y mensajería; los excedentes requieren tu aprobación.</p></div>
    </section>

    <section id="prueba" className={`${"nc-section"} ${"nc-trialSection"}`}>
      <div className={"nc-trialStamp"} data-reveal><span>CONÓCELO POR DENTRO</span><strong>30</strong><b>DÍAS DE PRUEBA</b><span>SIN OBLIGACIÓN DE CONTINUAR</span></div>
      <div data-reveal><Eyebrow>UN BUEN COMIENZO, SIN MENSUALIDAD</Eyebrow><h2>Tu primer mes,<br/><em>por nuestra cuenta.</em></h2><p>Prueba el servicio durante 30 días sin pagar mensualidad ni implementación inicial. Incluimos <strong>US$20 de crédito para IA y mensajería</strong>, según las funciones de tu plan.</p><div className={"nc-trialChoices"}><div><Icon name="check"/><p><strong>Si continúas mes a mes</strong>Pagas la implementación y la mensualidad de tu plan.</p></div><div><Icon name="check"/><p><strong>Si pagas 6 o 12 meses por adelantado</strong>Bonificamos la implementación.</p></div><div><Icon name="check"/><p><strong>Si decides no continuar</strong>Terminas sin pagar mensualidad ni implementación.</p></div></div><BookButton/><p className={"nc-trialFine"}>Sin renovación automática de la prueba. La pauta y otros costos externos no están incluidos. <a href="#condiciones">Ver condiciones completas.</a></p></div>
    </section>

    <section className={`${"nc-section"} ${"nc-onboarding"}`}>
      <div className={"nc-sectionHeading"} data-reveal><Eyebrow>DE LA DEMOSTRACIÓN A TU OPERACIÓN</Eyebrow><h2>Nosotros lo conectamos.<br/>Tú aprendes a aprovecharlo.</h2></div>
      <div className={"nc-steps"}>{[["Conocemos tu negocio", "Servicios, zona, forma de cotizar y capacidad de atención. Empezamos por entender cómo trabajas."],["Definimos y construimos", "Recibes el alcance y el cronograma. Preparamos tu web, agenda, panel y seguimiento según el plan."],["Probamos y te acompañamos", "Revisamos el recorrido, te enseñamos a usarlo y, cuando está disponible, comienzan tus 30 días."]].map(([title, body], i) => <article key={title} data-reveal><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>

    <section className={`${"nc-section"} ${"nc-faqSection"}`}>
      <div data-reveal><Eyebrow>TODO CLARO ANTES DE EMPEZAR</Eyebrow><h2>Buenas preguntas.<br/><em>Respuestas claras.</em></h2><p>Los precios, el proceso y lo que pasa después del mes gratuito.</p></div><div className={"nc-faqList"}>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
    </section>

    <section className={`${"nc-section"} ${"nc-finalSection"}`}><div data-reveal><Eyebrow>MENOS PENDIENTES. MÁS CLARIDAD.</Eyebrow><h2>Tu próxima consulta<br/>merece <em>un siguiente paso.</em></h2><p>Descubre cómo conectar tu web, tus clientes y tu seguimiento en una demostración para tu negocio.</p><BookButton/><span className={"nc-finalFine"}>30 días sin mensualidad · US$20 de crédito incluido · Pauta aparte</span></div></section>

    <section id="condiciones" className={`${"nc-section"} ${"nc-termsSection"}`}><div className={"nc-termsIntro"}><Eyebrow>LA PROMOCIÓN, SIN SORPRESAS</Eyebrow><h2>Términos de los 30 días de prueba.</h2><p>Estas condiciones se complementan con la propuesta de servicio que recibes antes de comenzar.</p></div><details className={"nc-termsDetails"}><summary>Leer las condiciones completas <span aria-hidden="true">+</span></summary><ol>{terms.map(([title, body]) => <li key={title}><h3>{title}</h3><p>{body}</p></li>)}</ol></details></section>
    <PromoNotice/>
  </div>;
}
