"use client";

import { useRef } from "react";
import type { Bundle, BundlesContent } from "@/content/types";
import type { Locale } from "@/shared/config/site";
import type { Nicho } from "@/shared/lib/city";
import { useReveal } from "@/shared/motion/useReveal";
import { CtaButton } from "@/shared/ui/atoms/CtaButton";
import { Eyebrow } from "@/shared/ui/atoms/Eyebrow";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";
import { Sign } from "@/shared/ui/atoms/Sign";

interface PlanesNichoProps {
  content: BundlesContent;
  locale: Locale;
  nicho: Nicho;
}

export function PlanesNicho({ content, locale, nicho }: PlanesNichoProps) {
  const scope = useRef<HTMLElement>(null);
  useReveal(scope);

  const hue = nicho === "detailing" ? "gold" : "wine";

  return (
    <section ref={scope} className="relative isolate overflow-hidden bg-night" id="planes">
      <div className="mx-auto w-full max-w-[1280px] px-5 pt-20 pb-24 sm:px-8 md:pt-24 md:pb-28 lg:px-12">
        <div className="max-w-[60ch] mb-16" data-reveal>
          <Eyebrow hue={hue} data-reveal>
            {locale === "en" ? "Choose your system" : "Elige tu sistema"}
          </Eyebrow>
          <SectionTitle size="lg" split={false} className="mt-2 leading-tight text-bone" data-reveal>
            {content.title}
          </SectionTitle>
          {content.subtitle && (
            <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-bone-70" data-reveal>
              {content.subtitle}
            </p>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-3" data-reveal>
          {content.bundles.map((bundle) => {
            const isRecommended = bundle.badge === "Recomendado" || bundle.tier === "Recomendado" || bundle.tier === "Recommended";
            const isPremium = bundle.badge === "Premium" || bundle.tier === "Premium";

            return (
              <PlanCard
                key={bundle.id || bundle.name}
                bundle={bundle}
                isRecommended={isRecommended}
                isPremium={isPremium}
                locale={locale}
              />
            );
          })}
        </div>

        {content.note && (
          <p className="mt-16 max-w-[52ch] text-xs text-bone-45 text-center" data-reveal>
            {content.note}
          </p>
        )}
      </div>
    </section>
  );
}

interface PlanCardProps {
  bundle: Bundle;
  isRecommended: boolean;
  isPremium: boolean;
  locale: Locale;
}

function PlanCard({
  bundle,
  isRecommended,
  isPremium,
  locale,
}: PlanCardProps) {
  const accent = isRecommended
    ? "border-gold/60 bg-gold/5 shadow-[0_0_40px_-12px_rgba(236,152,11,0.25)]"
    : isPremium
      ? "border-wine/50 bg-wine/5"
      : "border-bone/10";

  return (
    <Sign
      lit={isRecommended}
      switches={false}
      className={`flex flex-col h-full rounded-2xl p-8 transition-all duration-300 ${isRecommended ? "-translate-y-2 scale-[1.03] z-10" : ""} ${accent}`}
    >
      {/* Badge + name */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
        <span
          className={`type-eyebrow inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.68rem] uppercase tracking-wider font-bold ${
            isRecommended
              ? "border border-gold bg-gold/20 text-gold shadow-[0_0_12px_rgba(236,152,15,0.35)]"
              : isPremium
                ? "border border-wine bg-wine/25 text-bone"
                : "border border-cyan/40 bg-cyan/10 text-cyan"
          }`}
        >
          <span
            aria-hidden
            className={`size-1.5 rounded-full ${isRecommended ? "bg-gold shadow-[0_0_8px_var(--color-gold)]" : isPremium ? "bg-wine shadow-[0_0_6px_var(--color-wine)]" : "bg-cyan shadow-[0_0_6px_var(--color-cyan)]"}`}
          />
          {bundle.tier}
        </span>
        {bundle.badge && bundle.badge !== bundle.tier && (
          <span className="type-eyebrow rounded bg-bone/10 px-2 py-0.5 text-[0.65rem] text-bone-70">
            {bundle.badge}
          </span>
        )}
      </div>

      <h3 className="type-display mb-2 min-h-[2.8rem] leading-tight text-[clamp(1.5rem,2vw,1.75rem)] text-bone">
        {bundle.name}
      </h3>
      <p className="mb-4 text-sm font-medium text-cyan">{bundle.tagline}</p>
      <p className="mb-6 text-sm leading-relaxed text-bone-70">
        {bundle.targetAudience}
      </p>

      {/* Pricing */}
      <div className="mb-8 rounded-xl border border-bone/10 bg-night/80 p-5 md:p-6">
        <div className="flex items-center justify-between border-b border-bone/10 pb-3">
          <span className="text-xs text-bone-45">{locale === "en" ? "One-time setup" : "Implementación única"}</span>
          <span className="text-right text-xs font-semibold text-bone-70" data-numeric>
            {bundle.setupPromoPrice && <span className="mr-2 text-bone-45 line-through">{bundle.setupPrice}</span>}
            {bundle.setupPromoPrice ?? bundle.setupPrice}
          </span>
        </div>
        <div className="pt-4">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="type-display text-[2.2rem] font-extrabold text-gold tracking-tight" data-numeric>
              {bundle.monthlyPrice}
            </span>
            <span className="text-xs font-medium text-bone-45">{bundle.monthlyCadence || "/mes"}</span>
          </div>
          <p className="text-xs text-bone-45 leading-relaxed">
            {locale === "en" ? "License & support" : "Licencia & soporte"}
          </p>
        </div>
      </div>

      {bundle.inheritsFrom && (
        <div className="mb-6 rounded-lg border border-wine/40 bg-wine/10 p-3">
          <span className="text-wine font-bold text-xs">★</span>{" "}
          <span className="text-bone-70 text-xs">{bundle.inheritsFrom}</span>
        </div>
      )}

      {/* Annual promo */}
      {bundle.annualPromo && (
        <div className="mb-8 rounded-xl border border-gold/40 bg-gold/10 p-5">
          <p className="text-sm font-bold text-gold leading-relaxed">
            {bundle.annualPromo.split("~~12~~").map((part, index) => (
              <span key={index}>
                {index > 0 && <del>12</del>}
                {part}
              </span>
            ))}
          </p>
        </div>
      )}

      {bundle.setupPromoPrice && (
        <div className="mb-8 rounded-xl border border-gold/40 bg-gold/10 p-5">
          <p className="text-sm font-bold text-gold leading-relaxed">{locale === "en" ? "Black November: 50% off setup. Choose this offer or the annual offer; they cannot be combined." : "Black November: 50% de descuento en la implementación. Puedes elegir esta promo o la anual; no se combinan."}</p>
        </div>
      )}

      {/* Features */}
      {bundle.features && bundle.features.length > 0 && (
        <div className="mb-8 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-bone-45 mb-2">
            {locale === "en" ? "What's included" : "Lo que incluye"}
          </span>
          <ul className="flex flex-col gap-2">
            {bundle.features.map((feature: string) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-bone-70 leading-relaxed">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-gold" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <div className="mt-auto pt-4">
        {bundle.cta && (
          <CtaButton
            cta={bundle.cta}
            locale={locale}
            variant={isRecommended ? "gold" : isPremium ? "wine" : "tube"}
            size="md"
            className="w-full text-center"
          />
        )}
      </div>
    </Sign>
  );
}
