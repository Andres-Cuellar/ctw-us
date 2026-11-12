"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import "./not-found.css";

export function NotFoundContent({ standalone = false }: { standalone?: boolean }) {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] === "en" ? "en" : "es";
  const isEnglish = locale === "en";

  useEffect(() => {
    if (standalone) document.documentElement.lang = locale;
  }, [locale, standalone]);

  return (
    <section className={`ctw-not-found${standalone ? " ctw-not-found-standalone" : ""}`} lang={locale} aria-labelledby="not-found-title">
      {standalone && <header className="ctw-not-found-header">
        <Link href={`/${locale}`} aria-label={isEnglish ? "CreamosTuWeb home" : "Inicio de CreamosTuWeb"}>
          <Image src="/logo.webp" alt="creamostuweb" width={180} height={44} preload />
        </Link>
        <span>LAS VEGAS · {isEnglish ? "LET’S GET YOU BACK" : "ENCUENTRA TU CAMINO"}</span>
      </header>}
      <div className="ctw-not-found-grid">
        <div className="ctw-not-found-art" aria-hidden="true">
          <div className="ctw-not-found-sign">
            <span className="ctw-not-found-sign-label">CREAMOSTUWEB · LAS VEGAS</span>
            <span className="ctw-not-found-number">4<span>0</span>4</span>
            <span className="ctw-not-found-sign-bottom"><i /> {isEnglish ? "DESTINATION NOT FOUND" : "DESTINO NO ENCONTRADO"}</span>
          </div>
          <svg className="ctw-not-found-road" viewBox="0 0 400 80" fill="none"><path d="M0 50h100c40 0 30-30 75-30h50c45 0 35 40 80 40h95" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8"/><circle cx="220" cy="20" r="4" fill="currentColor"/></svg>
        </div>
        <div className="ctw-not-found-copy">
          <p className="ctw-not-found-eyebrow"><span />{isEnglish ? "PAGE NOT FOUND" : "PÁGINA NO ENCONTRADA"}</p>
          <h1 id="not-found-title">{isEnglish ? <>A wrong turn.<br /><em>A way forward.</em></> : <>Esta página está<br /><em>fuera del mapa.</em></>}</h1>
          <p className="ctw-not-found-description">{isEnglish ? "The link may have changed, or the address may be incorrect. Let’s get you back to your next step." : "Puede que el enlace haya cambiado o que la dirección no sea correcta. Te ayudamos a volver al camino."}</p>
          <div className="ctw-not-found-actions">
            <Link href={`/${locale}`} className="ctw-not-found-primary">{isEnglish ? "Back to home" : "Volver al inicio"}<span aria-hidden="true">↗</span></Link>
            <Link href={`/${locale}/contacto`} className="ctw-not-found-contact">{isEnglish ? "Contact us" : "Hablar con nosotros"}<span aria-hidden="true">→</span></Link>
          </div>
          <div className="ctw-not-found-explore">
            <span>{isEnglish ? "LOOKING FOR OUR SERVICES?" : "¿BUSCABAS NUESTROS SERVICIOS?"}</span>
            <Link href={`/${locale}/servicios`}>{isEnglish ? "Explore websites, CRM & automation" : "Explorar web, CRM y automatizaciones"} <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </div>
      {standalone && <footer className="ctw-not-found-footer"><span>creamostuweb</span><span>{isEnglish ? "Your business deserves to be found." : "Tu negocio merece que lo encuentren."}</span></footer>}
    </section>
  );
}
