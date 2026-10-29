"use client";

import { useRef } from "react";
import Image from "next/image";
import type { HeroContent } from "@/content/types";
import type { Locale } from "@/shared/config/site";
import type { Nicho } from "@/shared/lib/city";
import { useNeonSign } from "@/shared/motion/useNeonSign";
import { useReveal } from "@/shared/motion/useReveal";
import { CtaButton } from "@/shared/ui/atoms/CtaButton";
import { Eyebrow } from "@/shared/ui/atoms/Eyebrow";

const HERO_BACKDROP: Record<Nicho, string> = {
  detailing:
    "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1600&auto=format&fit=crop",
  "salon-spa":
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1400&auto=format&fit=crop",
};

/** YouTube background video per niche. */
const HERO_VIDEO: Partial<Record<Nicho, string>> = {
  detailing: "eMBlkjCA298",
};

interface HeroNichoProps {
  content: HeroContent;
  locale: Locale;
  nicho: Nicho;
}

export function HeroNicho({ content, locale, nicho }: HeroNichoProps) {
  const scope = useRef<HTMLElement>(null);
  useNeonSign(scope);
  useReveal(scope);

  const primary = content.primaryCta;
  const secondary = content.secondaryCta;
  const hue = nicho === "detailing" ? "gold" : "wine";
  const videoId = HERO_VIDEO[nicho];

  return (
    <section ref={scope} className="relative isolate overflow-hidden bg-night">
      {/* Dynamic Background with Ambient Lighting & Automotive Gloss */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        {/* High-Resolution Backdrop Image */}
        <Image
          src={HERO_BACKDROP[nicho]}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center [filter:saturate(1.05)_contrast(1.08)_brightness(0.6)]"
        />

        {/* Video layer if available */}
        {videoId && (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1`}
            title=""
            tabIndex={-1}
            allow="autoplay; encrypted-media; picture-in-picture"
            className="pointer-events-none absolute top-1/2 left-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 opacity-65"
          />
        )}

        {/* Vibrant Ambient Glow / Radial Blooms */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-screen"
          style={{
            background:
              nicho === "detailing"
                ? "radial-gradient(ellipse 65% 55% at 72% 35%, rgb(237 152 15 / 0.32) 0%, transparent 72%), radial-gradient(ellipse 45% 45% at 18% 75%, rgb(40 224 240 / 0.14) 0%, transparent 60%)"
                : "radial-gradient(ellipse 65% 55% at 72% 35%, rgb(131 44 32 / 0.4) 0%, transparent 72%), radial-gradient(ellipse 45% 45% at 18% 75%, rgb(237 152 15 / 0.14) 0%, transparent 60%)",
          }}
        />

        {/* Directional Readability Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-night via-night/85 to-night/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-night/60" />
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Copy, Professional CTAs & Offer */}
          <div className="flex min-w-0 flex-col gap-6 lg:col-span-8 xl:col-span-7" data-reveal>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <Eyebrow hue={hue} data-reveal>
                {content.eyebrow ?? ""}
              </Eyebrow>
            </div>

            <h1
              className="type-display leading-[1.2] text-[clamp(1.5rem,3.2vw,2.35rem)] text-bone"
              data-reveal
            >
              {content.title}
            </h1>

            <p
              className="max-w-[54ch] text-base md:text-lg leading-relaxed text-bone-70"
              data-reveal
            >
              {content.subtitle}
            </p>

            {/* CTAs with SVG Icons & Hover Glow */}
            <div className="mt-2 flex w-full min-w-0 flex-col gap-3 min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:items-center sm:gap-4" data-reveal>
              {primary && (
                <div className="relative group w-full min-[430px]:w-auto">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-gold/60 via-amber-400 to-gold blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <CtaButton
                    cta={primary}
                    locale={locale}
                    variant="gold"
                    size="lg"
                    className="relative w-full min-[430px]:w-auto whitespace-nowrap px-3 py-3 text-xs sm:px-8 sm:py-4 sm:text-base shadow-[0_0_28px_rgba(237,152,15,0.45)] hover:shadow-[0_0_42px_rgba(237,152,15,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-bold"
                  />
                </div>
              )}
              {secondary && (
                <CtaButton
                  cta={secondary}
                  locale={locale}
                  variant="tube"
                  size="lg"
                  className="w-full min-[430px]:w-auto whitespace-nowrap px-3 py-3 text-xs sm:px-8 sm:py-4 sm:text-base bg-night-2/80 backdrop-blur-md border border-gold/40 text-bone hover:border-gold hover:bg-gold/15 hover:text-gold hover:shadow-[0_0_25px_rgba(237,152,15,0.25)] transition-all duration-300 font-semibold"
                />
              )}
            </div>

            {/* Live Trust & Speed Strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-bone-70 pt-1" data-reveal>
              <span className="flex items-center gap-1.5 text-gold font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                {locale === "en" ? "Response in under 3 minutes" : "Respuesta en menos de 3 minutos"}
              </span>
              <span className="flex items-center gap-1.5 text-bone-45">
                <span className="flex items-center gap-0.5 text-gold">
                  <StarIcon className="size-3.5 fill-gold text-gold" />
                  <StarIcon className="size-3.5 fill-gold text-gold" />
                  <StarIcon className="size-3.5 fill-gold text-gold" />
                  <StarIcon className="size-3.5 fill-gold text-gold" />
                  <StarIcon className="size-3.5 fill-gold text-gold" />
                </span>
                <span>{locale === "en" ? "4.9/5 rating · 50+ active businesses · No long-term contracts" : "4.9/5 valoración · +50 negocios activos · Sin contratos forzosos"}</span>
              </span>
            </div>

            {/* Irresistible Offer Banner with Professional SVG Icon */}
            {content.offer && (
              <div
                className="mt-2 rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/15 via-gold/5 to-transparent p-5 md:p-6 shadow-[0_0_35px_-12px_rgba(236,152,11,0.3)] backdrop-blur-sm"
                data-reveal
              >
                <div className="flex flex-wrap items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider">
                  <ShieldCheckIcon className="size-4 shrink-0 text-gold" />
                  <span>{content.offer.title.replace(/^[\p{Emoji}\uFE0F\s]+/u, "")}</span>
                  <span className="rounded-full bg-gold/20 border border-gold/40 px-2.5 py-0.5 text-[0.62rem] text-gold font-extrabold uppercase tracking-wider sm:ml-auto">
                    {locale === "en" ? "Save up to $6,999 USD" : "Ahorro de hasta $6,999 USD"}
                  </span>
                </div>
                <p className="mt-2 text-xs md:text-sm text-bone-70 leading-relaxed">
                  {content.offer.body}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Live System HUD (Visual Simulation of the Machine in Action) */}
          {false && <div className="relative lg:col-span-5" data-reveal>
            {/* Ambient Bloom behind HUD */}
            <div
              className={`absolute -inset-4 rounded-3xl blur-2xl opacity-40 -z-10 ${
                hue === "gold" ? "bg-gold/30" : "bg-wine/40"
              }`}
            />

            {/* Glassmorphic HUD Container */}
            <div className="relative rounded-3xl border border-bone/15 bg-night-2/85 backdrop-blur-xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
              {/* Glowing Top Accent Line */}
              <div
                className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${
                  hue === "gold"
                    ? "from-transparent via-gold to-transparent"
                    : "from-transparent via-wine-light to-transparent"
                }`}
              />

              {/* HUD Header */}
              <div className="flex items-center justify-between border-b border-bone/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className="type-label text-xs tracking-wider text-bone font-bold">
                    SISTEMA EN VIVO · 24/7
                  </span>
                </div>
                <span className="rounded-full bg-gold/15 border border-gold/30 px-2.5 py-0.5 text-[0.65rem] font-semibold text-gold uppercase tracking-wider">
                  Automatizado
                </span>
              </div>

              {/* Event 1: Missed Call / Outside Hours Rescue */}
              <div className="mt-4 rounded-2xl border border-bone/10 bg-night/85 p-4 shadow-inner">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="flex items-center gap-2 font-semibold text-rose-400">
                    <PhoneMissedIcon className="size-4 shrink-0 text-rose-400" />
                    <span>
                      {nicho === "detailing"
                        ? "Llamada no contestada (pulidora activa)"
                        : "Mensaje fuera de horario (salón cerrado)"}
                    </span>
                  </span>
                  <span className="text-[0.65rem] text-bone-45">Hace 2 min</span>
                </div>
                <div className="rounded-xl border border-bone/8 bg-night-2/90 p-3 text-xs text-bone-70">
                  <div className="text-[0.68rem] text-gold font-semibold mb-1 flex items-center gap-1.5">
                    <ChatBubbleIcon className="size-3.5 shrink-0 text-gold" />
                    <span>
                      {nicho === "detailing"
                        ? "SMS Automático enviado en 3s:"
                        : "Respuesta Automática con Agenda:"}
                    </span>
                  </div>
                  <p className="italic text-bone leading-relaxed text-xs">
                    {nicho === "detailing"
                      ? "“¡Hola! Estoy detallando un vehículo y no puedo atenderte ahora mismo. ¿Qué modelo tienes y qué servicio necesitas?”"
                      : "“¡Hola! Gracias por escribirnos. Nuestro salón está cerrado, pero puedes agendar y asegurar tu cita con depósito aquí:”"}
                  </p>
                </div>
                <div className="mt-2.5 flex items-center justify-between text-[0.7rem]">
                  <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                    <ZapIcon className="size-3.5 shrink-0 text-emerald-400" />
                    <span>Prospecto no se enfrió · Respondido</span>
                  </span>
                  <span className="text-bone-45 text-[0.65rem]">Auto-Reply</span>
                </div>
              </div>

              {/* Event 2: Confirmed Booking + Deposit Paid */}
              <div className="mt-3 rounded-2xl border border-emerald-500/25 bg-emerald-950/20 p-4">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="flex items-center gap-2 font-semibold text-emerald-400">
                    <CreditCardIcon className="size-4 shrink-0 text-emerald-400" />
                    <span>Cita Agendada &amp; Depósito Cobrado</span>
                  </span>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[0.62rem] font-bold text-emerald-300">
                    PAGADO
                  </span>
                </div>
                <p className="text-xs font-medium text-bone">
                  {nicho === "detailing"
                    ? "Carlos M. — Full Ceramic Coating + Pulido"
                    : "Sofía R. — Balayage + Tratamiento Capilar"}
                </p>
                <div className="mt-2 flex items-center justify-between text-[0.72rem] text-bone-70 border-t border-emerald-500/15 pt-2">
                  <span>Mañana, 10:00 AM</span>
                  <span className="font-bold text-gold">
                    {nicho === "detailing" ? "Depósito: $100.00 USD" : "Depósito: $50.00 USD"}
                  </span>
                </div>
              </div>

              {/* Key Metrics Bar */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="rounded-xl border border-bone/8 bg-night/60 p-2.5">
                  <div className="text-base font-extrabold text-gold">0</div>
                  <div className="text-[0.65rem] text-bone-45 uppercase tracking-wider">
                    Plantones este mes
                  </div>
                </div>
                <div className="rounded-xl border border-bone/8 bg-night/60 p-2.5">
                  <div className="text-base font-extrabold text-emerald-400">100%</div>
                  <div className="text-[0.65rem] text-bone-45 uppercase tracking-wider">
                    Llamadas rescatadas
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Review Badge with Vector Star */}
            <div className="hidden sm:flex absolute -bottom-3 -left-3 items-center gap-2.5 rounded-2xl border border-gold/40 bg-night/95 backdrop-blur-md px-4 py-2.5 shadow-2xl">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-gold/15 text-gold border border-gold/30">
                <StarIcon className="size-4 fill-gold text-gold" />
              </span>
              <div>
                <p className="text-[0.72rem] font-bold text-bone">Reseñas en Google en automático</p>
                <p className="text-[0.62rem] text-bone-45">Enviadas vía SMS al finalizar el servicio</p>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </section>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function PhoneMissedIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 2v6m0 0h6m-6 0 7-7" />
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ChatBubbleIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function CreditCardIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  );
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
