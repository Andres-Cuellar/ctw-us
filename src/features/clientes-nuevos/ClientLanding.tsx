"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { site } from "@/shared/config/site";
import { plans, faqs } from "@/features/nuevos-clientes/content";
import { useReveal } from "@/shared/motion/useReveal";
import { WhatsAppGallery } from "./WhatsAppGallery";
import "./landing.css";

const CTA = "Quiero mi llamada de 15 minutos";
function track(event: string, placement?: string) {
  const browser = window as Window & { dataLayer?: Record<string, unknown>[] };
  (browser.dataLayer ??= []).push({ event, landing: "clientes-nuevos", placement });
}
function CallToAction({ placement }: { placement: string }) {
  return <a className="cn-button" href="#formulario" onClick={() => track("cta_click", placement)}>{CTA}<span aria-hidden="true">↗</span></a>;
}
function BenefitIcon({ index }: { index: number }) {
  const paths = [
    ["M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9H13", "m17 3-3 5h5l-3 5"],
    ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8", "M22 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"],
    ["M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z", "M16 3v4M8 3v4M3 11h18", "m9 16 2 2 4-4"],
    ["M3 14v-3a9 9 0 0 1 18 0v3", "M5 12H3v7h4v-7H5ZM19 12h2v7h-4v-7h2Z", "M21 19a3 3 0 0 1-3 3h-4"],
  ];
  return <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[index].map(path => <path key={path} d={path} />)}</svg>;
}

function LeadForm() {
  return (
    <div id="formulario" className="cn-form cn-embeddedForm">
      <p className="cn-eyebrow">HABLEMOS DE TU NEGOCIO</p>
      <h2 data-reveal>15 minutos para ver si encaja.</h2>
      <p>Déjanos tus datos. Coordinamos la llamada contigo; este formulario no reserva una cita.</p>
      <iframe
        src="https://api.gstf.us/widget/form/GwfIU0D64U4MbxDeEpDl"
        style={{ width: "100%", height: 579, minHeight: 579, border: "none", borderRadius: 8, display: "block" }}
        id="inline-GwfIU0D64U4MbxDeEpDl"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="CTW-Solo-Form"
        data-height="579"
        data-layout-iframe-id="inline-GwfIU0D64U4MbxDeEpDl"
        data-form-id="GwfIU0D64U4MbxDeEpDl"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="CTW-Solo-Form"
      />
      <Script src="https://api.gstf.us/js/form_embed.js" strategy="afterInteractive" />
      <p className="cn-small">Si el formulario no carga, <a href="https://api.gstf.us/widget/form/GwfIU0D64U4MbxDeEpDl" target="_blank" rel="noopener noreferrer">ábrelo aquí</a>.</p>
    </div>
  );
}

export function ClientLanding() {
  const scope = useRef<HTMLDivElement>(null);
  useReveal(scope);
  const [plansExpanded, setPlansExpanded] = useState(false);
  useEffect(() => {
    let sent = false;
    const onScroll = () => {
      if (!sent && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight * .5) { sent = true; track("scroll_50"); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div ref={scope} className="cn-page" lang="es">
    <header className="cn-header"><Image src="/logo.webp" alt="creamostuweb" width={180} height={44} preload /></header>
    <section className="cn-hero cn-wrap"><div><p className="cn-eyebrow">PARA NEGOCIOS DE SERVICIOS EN LAS VEGAS</p><h1>Recupera el tiempo.<br />No dejes tus próximas consultas <em>sin respuesta.</em></h1><p className="cn-lead">Te instalamos un sistema que confirma cada consulta recibida por los canales conectados, organiza tus clientes y te ayuda a agendar citas.</p>

      <div className="cn-heroActions"><CallToAction placement="hero" /><a className="cn-button cn-buttonSecondary" href="#planes" onClick={() => track("cta_click", "hero-plans")}>Ver los planes<span aria-hidden="true">↓</span></a></div><p className="cn-trust">30 días sin mensualidad ni implementación inicial · sin permanencia en el plan mensual · atención en español.</p><p className="cn-small">Los 30 días empiezan cuando tu sistema está configurado, probado y disponible.</p>
    </div><div className="cn-heroVisual"><div className="cn-heroPhoto"><Image src="/images/home/barbershop-busy.jpg" alt="Profesional atendiendo su negocio de servicios" fill sizes="(max-width: 640px) 100vw, 45vw" preload /><div className="cn-photoShade" /><span className="cn-photoLabel">TÚ TE OCUPAS DE TU NEGOCIO.</span><p>Tu próxima consulta<br />también merece atención.</p></div><div className="cn-message"><span className="cn-messageIcon" aria-hidden="true">↗</span><div><small>EJEMPLO ILUSTRATIVO</small><strong>Nueva consulta recibida</strong><span>Un contacto. Un siguiente paso.</span></div></div><div className="cn-trial"><strong>30<span>DÍAS</span></strong><p>Conoce tu sistema por dentro.<br /><b>El primer mes va por nuestra cuenta.</b><br /><small>Sin mensualidad ni implementación inicial.</small></p></div></div></section>
    <div className="cn-wrap"><div className="cn-example"><span className="cn-eyebrow">ASÍ SE CONECTA · EJEMPLO ILUSTRATIVO</span><div><p><small>01 · MENSAJE</small>“Hola, necesito una cotización.”</p><p><small>02 · RESPUESTA</small>“Recibimos tu solicitud. ¿Qué servicio necesitas?”</p><p><small>03 · SEGUIMIENTO</small>Tu equipo recibe el contacto y coordina la cita.</p></div><p className="cn-small">El alcance depende del plan. La IA conversacional está disponible desde Crecimiento.</p></div></div>
    <div className="cn-local cn-wrap"><strong>Un equipo al que puedes contactar.</strong><address>{site.address.oneLine} · Solo con cita previa</address><a href={site.phone.href}>{site.phone.display}</a><span>{site.hours.summary} · Las Vegas</span></div>
    <section className="cn-section cn-wrap"><div className="cn-sectionVisual"><div><p className="cn-eyebrow">TU DÍA YA ESTÁ LLENO</p><h2 data-reveal>Tú trabajas.<br />Las consultas no esperan.</h2><p>Mientras atiendes un servicio, tu sistema ayuda a que el siguiente contacto tenga respuesta.</p></div><figure className="cn-supportPhoto" data-reveal><Image src="/images/home/construction.jpg" alt="Profesionales trabajando en una obra" fill sizes="(max-width: 640px) 100vw, 45vw" /><figcaption>Tu atención, donde hace falta.</figcaption></figure></div><div className="cn-grid">{[["“Te respondo en un rato.”", "Estás trabajando. Llega un mensaje. Cuando vuelves a verlo, pasó el día."], ["“Le envié la cotización…”", "Pero nadie retomó la conversación para saber qué decidió."], ["“¿Dónde anoté esa cita?”", "Entre mensajes y notas, cuesta saber quién viene y cuándo."]].map(([title, body]) => <article key={title} data-reveal><h3>{title}</h3><p>{body}</p></article>)}</div><p className="cn-bridge">Dale a cada consulta un siguiente paso, incluso cuando estás ocupado.</p></section>
    <section className="cn-section cn-tint"><div className="cn-wrap"><p className="cn-eyebrow">CÓMO FUNCIONA</p><h2 data-reveal>Lo conectamos. Lo pruebas. Tú decides.</h2><div className="cn-grid">{[["Conocemos tu negocio", "En una llamada de 15 minutos revisamos tus servicios y cómo atiendes hoy."], ["Preparamos tu sistema", "Empezamos después de aceptar la propuesta y recibir accesos y materiales. El cronograma se acuerda por escrito."], ["Lo usas durante 30 días", "Con el sistema listo, empieza la prueba. Te enseñamos a usarlo y decides si continúas."]].map(([title, body], i) => <article key={title} data-reveal><span className="cn-number">0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="cn-section cn-wrap cn-proof">
      <div className="cn-supportPhoto cn-workshopPhoto" data-reveal><Image src="/images/home/mechanic.jpg" alt="Un equipo ocupado en las tareas de su taller" fill sizes="(max-width: 640px) 100vw, 45vw" /><div className="cn-photoStamp"><strong>30 días</strong><span>Para probarlo en tu negocio.</span></div></div>
      <div><p className="cn-eyebrow">CERCA DE TU NEGOCIO</p><h2 data-reveal>Menos tiempo entre chats.<br /><em>Más tiempo en lo tuyo.</em></h2><p>Antes de contratar, revisamos cómo llegan tus consultas y cómo darles seguimiento. Recibes el alcance por escrito y te enseñamos a usar el sistema.</p><p>La preparación no consume tu prueba. Tú decides si continúas.</p><CallToAction placement="proof" /></div>
    </section>
    <WhatsAppGallery />
    <section className="cn-section cn-wrap"><p className="cn-eyebrow">QUÉ RECIBES</p><h2 data-reveal>Menos pendientes. Más orden.</h2><div className="cn-grid cn-four">{[["Responde rápido", "Confirmaciones de recepción y avisos a tu equipo en los canales configurados."], ["Cada cliente tiene su lugar", "Contactos, consultas y seguimiento en un panel de clientes (CRM)."], ["Citas con recordatorios", "Agenda, confirmaciones y recordatorios conectados."], ["Te acompañamos a usarlo", "Configuración, capacitación inicial y soporte sobre lo implementado."]].map(([title, body], index) => <article key={title} data-reveal><span className="cn-check"><BenefitIcon index={index} /></span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="cn-section cn-tint">
      <div className="cn-wrap cn-offer cn-offerPlans" id="planes">
        <div className="cn-offerIntro">
          <p className="cn-eyebrow">ORGANIZA TU NEGOCIO O SUMA CAPTACIÓN</p>
          <h2 data-reveal>Dos formas de dar<br /><em>el siguiente paso.</em></h2>
          <p>Prueba el plan que necesita tu negocio durante 30 días.</p>
          <ul className="cn-trialSummary">
            <li><strong>Durante la prueba:</strong> sin mensualidad ni implementación. Hasta US$20 de crédito combinado para IA y mensajería, según el plan.</li>
            <li><strong>Si continúas mes a mes:</strong> pagas la implementación y la primera mensualidad del plan elegido. Los importes están detallados abajo.</li>
            <li><strong>Si no continúas:</strong> se suspende el servicio sin cargos retroactivos de mensualidad ni implementación.</li>
          </ul>
          <p className="cn-small">Dominio, consumos adicionales y otros costos externos requieren aprobación. La entrega exportable del sitio puede acordarse por US$497 según la propuesta. <Link href="/es/terminos-prueba">Ver las 13 condiciones completas</Link>.</p>
        </div>
        {plans.slice(0, 2).map((plan, index) => (
          <article data-reveal className={`cn-price${index === 1 ? " cn-priceFeatured" : ""}`} key={plan.name}>
            <p className="cn-eyebrow">{index === 0 ? "ESENCIAL · LA HERRAMIENTA" : "CRECIMIENTO · IMÁN DE CLIENTES"}</p>
            <h3>{index === 0 ? "La herramienta." : "El imán de clientes."}</h3>
            <p>{index === 0 ? "Para atender y organizar a quienes ya llegan a tu negocio." : "Suma captación con anuncios y atención inicial con IA."}</p>
            <p className="cn-priceAmount"><strong>US${plan.price}</strong><span>/mes después de la prueba</span></p>
            <p className="cn-small">Implementación: US${plan.setup} · pago único si continúas mes a mes.</p>
            <ul className="cn-planBenefits">
              {(index === 0 ? [
                ["Tu negocio en internet", "Web para celulares, alojamiento y mantenimiento."],
                ["Cada consulta, en orden", "Contactos y formularios en un solo panel."],
                ["Citas y seguimiento", "Agenda, recordatorios y cotizaciones organizadas."],
                ["No estás solo", "Capacitación y soporte para usar tu sistema."],
              ] : [
                ["Toda la herramienta", "Incluye web, panel, agenda y soporte de Esencial."],
                ["Anuncios para atraer consultas", "Gestionamos tus campañas de Facebook e Instagram."],
                ["Atención fuera de horario", "IA para preguntas iniciales y ayuda para agendar."],
                ["Seguimiento con tu equipo", "Revisión de oportunidades y derivación a una persona."],
              ]).map(([title, body]) => <li key={title}><span aria-hidden="true">✓</span><div><strong>{title}</strong><p>{body}</p></div></li>)}
            </ul>
            <details className="cn-planDetails" open={plansExpanded}><summary onClick={event => { event.preventDefault(); setPlansExpanded(value => !value); }}>{plansExpanded ? "Ocultar detalle de ambos planes" : "Ver todo lo que incluye"}</summary><ul>{plan.features.map(item => <li key={item}>{item}</li>)}</ul></details>
            <CallToAction placement={`offer-${plan.name.toLowerCase()}`} />
            <p className="cn-small">Pauta no incluida · Consumos aparte{index === 1 ? " · Sin garantía de ventas o cantidad de clientes" : ""}</p>
          </article>
        ))}
        <p className="cn-small cn-offerIntro">Con seis o doce meses prepagados, implementación bonificada. <Link href="/es/terminos-prueba">Consulta las condiciones de cancelación</Link>.</p>
      </div>
    </section>
    <section className="cn-section cn-wrap cn-faq"><div><p className="cn-eyebrow">ANTES DE DECIDIR</p><h2 data-reveal>Todo claro, desde el principio.</h2></div><div>{[faqs[0], faqs[9], faqs[2], faqs[5], faqs[4], faqs[8]].map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
    <section className="cn-section cn-wrap cn-final"><div className="cn-finalCopy"><p className="cn-eyebrow">TU PRÓXIMA CONSULTA MERECE ATENCIÓN</p><h2 data-reveal>Empieza con una conversación.</h2><p>Cuéntanos qué negocio tienes y revisamos juntos el siguiente paso.</p><div className="cn-finalActions"><a className="cn-button" href="#formulario" onClick={() => track("cta_click", "final-form")}>Completa el formulario<span aria-hidden="true">↗</span></a><a className="cn-button cn-buttonSecondary" href={`https://wa.me/${site.phone.e164.replace("+", "")}?text=${encodeURIComponent("Vengo de ver la promo Nuevos Clientes")}`} target="_blank" rel="noopener noreferrer" onClick={() => track("cta_click", "final-whatsapp")}>Hablar con un asesor por WhatsApp<span aria-hidden="true">↗</span></a></div><p className="cn-small">30 días de prueba · Sin renovación automática · <Link href="/es/terminos-prueba">Términos de la promoción</Link></p></div><LeadForm /></section>
    <footer className="cn-footer cn-wrap"><Image src="/logo.webp" alt="creamostuweb" width={150} height={37} /><div className="cn-footerInfo"><address>{site.address.oneLine}</address><a href={site.phone.href}>{site.phone.display}</a><Link href="/es/politica-de-privacidad">Privacidad</Link><Link href="/es/terminos-prueba">Términos de la prueba</Link><Link href="/es/terminos-y-condiciones">Términos del servicio</Link></div></footer>
    <div className="cn-mobile"><CallToAction placement="mobile" /></div>
  </div>;
}
