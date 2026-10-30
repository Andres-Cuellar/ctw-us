"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  const [showOffer, setShowOffer] = useState(false);
  const [offerAnimationKey, setOfferAnimationKey] = useState(0);
  useNeonSign(scope);
  useReveal(scope);

  const primary = content.primaryCta;
  const secondary = content.secondaryCta;
  const hue = nicho === "detailing" ? "gold" : "wine";
  const videoId = HERO_VIDEO[nicho];

  const openOffer = () => {
    setOfferAnimationKey((value) => value + 1);
    setShowOffer(true);
  };

  useEffect(() => {
    if (!content.offer) return;

    const timer = window.setTimeout(() => {
      if (document.querySelector("dialog[open]")) return;
      setOfferAnimationKey((value) => value + 1);
      setShowOffer(true);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [content.offer]);

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

      <div className="mx-auto w-full max-w-[1280px] px-5 pb-16 pt-20 sm:px-8 md:pb-24 md:pt-28 lg:px-12 lg:pt-32">
        <div className="flex min-w-0 max-w-[710px] flex-col items-start" data-reveal>
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <p className="text-sm font-bold text-gold leading-relaxed" data-reveal>
              {content.eyebrow ?? ""}
            </p>
          </div>

          <h1
            className="type-display mt-7 max-w-[710px] break-words text-[clamp(2rem,4vw,3.25rem)] leading-[1.15] tracking-[-0.035em] text-bone"
            data-reveal
          >
            {content.sign ? (
              <>
                <span className="block text-[clamp(1.5rem,2.5vw,2.1rem)] font-light leading-snug tracking-[-0.02em] text-bone-70">
                  {content.sign.lead}
                </span>
                <span className="mt-2 block text-[clamp(2.15rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.04em] text-bone">
                  {content.sign.lit}
                </span>
              </>
            ) : content.title}
          </h1>

          <p
            className="mt-6 max-w-[54ch] text-base leading-relaxed text-bone-70 md:text-lg"
            data-reveal
          >
            {content.subtitle}
          </p>

          {/* CTAs with SVG Icons & Hover Glow */}
          <div className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4" data-reveal>
            {primary && (
              <div className="group relative w-full sm:w-auto">
                <div className="absolute -inset-1 rounded-xl bg-gold/40 opacity-50 blur-md transition-opacity duration-300 group-hover:opacity-80" />
                <CtaButton
                  cta={primary}
                  locale={locale}
                  variant="gold"
                  size="lg"
                  className="relative w-full rounded-xl px-5 py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5 sm:w-auto sm:px-6 sm:text-base"
                />
              </div>
            )}
            {secondary && (
              <CtaButton
                cta={secondary}
                locale={locale}
                variant="tube"
                size="lg"
                className="w-full rounded-xl border border-bone/30 bg-night-2/70 px-5 py-3.5 text-sm font-semibold text-bone backdrop-blur-md transition-colors hover:border-gold hover:bg-gold/10 sm:w-auto sm:px-6 sm:text-base"
              />
            )}
          </div>

          {content.trustLine && (
            <ul className="mt-10 grid w-full grid-cols-2 gap-4 border-t border-bone/20 pt-6 text-sm text-bone-70 lg:grid-cols-4 lg:gap-5" data-reveal>
              {content.trustLine.map((benefit) => (
                <li key={benefit} className="flex min-w-0 items-center gap-3">
                  <ShieldCheckIcon className="size-5 shrink-0 text-gold" />
                  <span className="leading-snug">{benefit}</span>
                </li>
              ))}
              {content.offer && (
                <li className="min-w-0">
                  <button
                    type="button"
                    onClick={openOffer}
                    className="flex h-full min-h-10 w-full items-center gap-3 text-left leading-snug text-gold transition-colors hover:text-bone focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    <ShieldCheckIcon className="size-5 shrink-0" />
                    <span>{locale === "en" ? "November offer" : "Oferta de noviembre"}</span>
                  </button>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
      {content.offer && showOffer && typeof document !== "undefined" && createPortal(
        <aside
          key={offerAnimationKey}
          aria-label={locale === "en" ? "November offer" : "Oferta de noviembre"}
          className="november-offer-notice fixed bottom-[calc(9rem+env(safe-area-inset-bottom,0px))] left-4 right-4 z-[1000] max-h-[calc(100dvh-10rem)] overflow-y-auto rounded-2xl border border-gold/45 bg-night-2/95 p-5 text-bone shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl md:bottom-6 md:left-6 md:right-auto md:max-h-[calc(100dvh-3rem)] md:w-[min(400px,calc(100vw-3rem))]"
        >
          <div className="relative pr-7">
            <button
              type="button"
              onClick={() => setShowOffer(false)}
              aria-label={locale === "en" ? "Dismiss offer" : "Cerrar oferta"}
              className="absolute -right-2 -top-2 grid size-8 place-items-center rounded-lg text-xl text-bone-70 transition-colors hover:bg-bone/10 hover:text-bone focus-visible:outline-2 focus-visible:outline-gold"
            >
              ×
            </button>
            <div className="mb-3 flex items-center gap-2 text-gold">
              <ShieldCheckIcon className="size-5 shrink-0" />
              <span className="text-[0.65rem] font-bold uppercase tracking-widest">{locale === "en" ? "Limited promotion" : "Promoción especial"}</span>
            </div>
            <h2 className="text-lg font-bold leading-tight text-bone">
              {content.offer.title.replace(/^[\p{Emoji}\uFE0F\s]+/u, "")}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-bone-70">{content.offer.body}</p>
            <div className="mt-4">
              {primary && <CtaButton cta={primary} locale={locale} variant="gold" size="md" className="rounded-xl" />}
            </div>
          </div>
        </aside>,
        document.body,
      )}
    </section>
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
