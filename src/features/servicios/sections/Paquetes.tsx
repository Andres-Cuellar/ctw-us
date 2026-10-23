import type { BundlesContent } from "@/content/types";
import type { Locale } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";
import { NightScope } from "@/shared/motion/NightScope";
import { CtaButton } from "@/shared/ui/atoms/CtaButton";
import { Eyebrow } from "@/shared/ui/atoms/Eyebrow";
import { Panel } from "@/shared/ui/atoms/Panel";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";
import { Sign } from "@/shared/ui/atoms/Sign";

interface PaquetesProps {
  content: BundlesContent;
  locale: Locale;
}

export function Paquetes({ content, locale }: PaquetesProps) {
  return (
    <Panel surface="raised" glow="gold" id="paquetes">
      <NightScope>
        <div className="max-w-[85ch]">
          <Eyebrow hue="gold" data-reveal>
            Niveles de Madurez Comercial
          </Eyebrow>
          <SectionTitle size="lg" className="mt-4 max-w-[22ch]" data-reveal>
            {content.title}
          </SectionTitle>
          {content.subtitle && (
            <p className="mt-6 text-lg leading-relaxed text-bone-70" data-reveal>
              {content.subtitle}
            </p>
          )}
          {content.positioningIntro && (
            <p className="mt-2 text-base text-cyan" data-reveal>
              ✦ {content.positioningIntro}
            </p>
          )}
        </div>

        {/* The 3 tiers grid */}
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {content.bundles.map((bundle) => {
            const isRecommended = bundle.badge === "Recomendado" || bundle.tier === "Recomendado";
            const isPremium = bundle.badge === "Premium" || bundle.tier === "Premium";

            return (
              <div
                key={bundle.id || bundle.name}
                id={bundle.id}
                className="h-full scroll-mt-28 target:scale-[1.02] transition-transform duration-300"
              >
                <Sign
                  lit={isRecommended}
                  className={cn(
                    "relative flex h-full flex-col justify-start overflow-hidden rounded-2xl p-7 md:p-8 transition-all duration-300",
                    "target:border-2 target:border-gold target:shadow-[0_0_40px_rgba(237,152,15,0.45)]",
                    isRecommended
                      ? "border-2 border-gold/80 bg-gradient-to-b from-[#1a1610] via-night-2 to-night shadow-[0_0_36px_-6px_rgba(237,152,15,0.35)] lg:-translate-y-2 lg:scale-[1.02] z-10"
                      : "bg-night/90",
                    isPremium && "border-wine/60 shadow-[0_0_24px_rgba(131,44,32,0.35)]",
                  )}
                >
                  {/* Glowing header badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={cn(
                        "type-eyebrow inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.62rem] uppercase tracking-wider font-bold",
                        isRecommended
                          ? "border border-gold bg-gold/20 text-gold shadow-[0_0_12px_rgba(237,152,15,0.35)]"
                          : isPremium
                            ? "border border-wine bg-wine/25 text-bone"
                            : "border border-cyan/40 bg-cyan/10 text-cyan",
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "size-1.5 rounded-full",
                          isRecommended ? "bg-gold shadow-[0_0_8px_var(--color-gold)]" : isPremium ? "bg-wine shadow-[0_0_6px_var(--color-wine)]" : "bg-cyan shadow-[0_0_6px_var(--color-cyan)]",
                        )}
                      />
                      {bundle.tier}
                    </span>

                    {bundle.badge && bundle.badge !== bundle.tier && (
                      <span className="type-eyebrow rounded bg-bone/10 px-2 py-0.5 text-[0.58rem] text-bone-70">
                        {bundle.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-5">
                    <h3 className="type-marquee min-h-[3.6rem] leading-tight text-[clamp(1.65rem,2.3vw,2rem)] text-bone">
                      {bundle.name}
                    </h3>
                    <p className="mt-1 min-h-[2.5rem] text-sm font-medium text-cyan whitespace-pre-line">
                      {bundle.tagline}
                    </p>
                    <p className="mt-3 min-h-[4rem] text-sm leading-relaxed text-bone-70">
                      {bundle.targetAudience}
                    </p>
                  </div>

                  {/* Price Box */}
                  <div
                    className={cn(
                      "mt-6 rounded-xl border p-4 sm:p-5",
                      isRecommended
                        ? "border-gold/40 bg-night/90 shadow-[0_0_24px_rgba(237,152,15,0.18)]"
                        : "border-bone/10 bg-night/80",
                    )}
                  >
                    {/* Implementación única (Fila superior alineada top) */}
                    <div className="flex items-center justify-between border-b border-bone/10 pb-3">
                      <span className="text-xs text-bone-45">
                        Implementación única
                      </span>
                      <span className="text-xs font-semibold text-bone-70" data-numeric>
                        {bundle.setupPrice}
                      </span>
                    </div>

                    {/* Servicio Mensual (Fila principal) */}
                    <div className="pt-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="type-eyebrow text-[0.65rem] tracking-wider text-bone-45 uppercase">
                          Servicio mensual
                        </span>
                        <span className="text-[0.7rem] text-bone-45">
                          Licencia & soporte
                        </span>
                      </div>
                      <div className="mt-1.5 flex items-baseline gap-2">
                        <span className="type-marquee text-[1.85rem] font-extrabold text-gold tracking-tight" data-numeric>
                          {bundle.monthlyPrice}
                        </span>
                        <span className="text-xs font-medium text-bone-45">
                          {bundle.monthlyCadence || "/mes"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Inherits mention */}
                  {bundle.inheritsFrom ? (
                    <div
                      className={cn(
                        "mt-5 rounded-lg px-3 py-2 text-xs font-medium",
                        isRecommended
                          ? "border border-gold/40 bg-gold/15 text-bone shadow-[0_0_16px_rgba(237,152,15,0.15)]"
                          : "border border-wine/40 bg-wine/20 text-bone shadow-[0_0_16px_rgba(131,44,32,0.15)]",
                      )}
                    >
                      <span className={cn("mr-1 font-bold", isRecommended ? "text-gold" : "text-wine-light")}>★</span>
                      {bundle.inheritsFrom}
                    </div>
                  ) : (
                    <div aria-hidden className="mt-5 hidden lg:block rounded-lg border border-transparent px-3 py-2 text-xs select-none opacity-0">
                      ★ Base tier
                    </div>
                  )}

                  {/* Phases & Features breakdown */}
                  <div className="mt-6 flex flex-col gap-5 border-t border-bone/12 pt-5">
                    {bundle.phases?.map((phase) => (
                      <div key={phase.title} className="flex flex-col gap-2.5">
                        <h4 className="type-eyebrow text-[0.72rem] tracking-wider text-bone uppercase">
                          {phase.title}
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {phase.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-[0.88rem] leading-snug text-bone-70"
                            >
                              <span
                                aria-hidden
                                className={cn(
                                  "mt-1.5 size-1.5 shrink-0 rounded-full",
                                  isRecommended ? "bg-gold" : isPremium ? "bg-wine-light" : "bg-cyan",
                                )}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Maintenance block */}
                    {bundle.maintenance && (
                      <div className="flex flex-col gap-2 border-t border-bone/8 pt-3">
                        <h4 className="type-eyebrow text-[0.7rem] tracking-wider text-bone-70 uppercase">
                          {bundle.maintenance.title}
                        </h4>
                        <ul className="flex flex-col gap-1.5">
                          {bundle.maintenance.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-[0.82rem] text-bone-45"
                            >
                              <span aria-hidden className="mt-1 h-px w-2 shrink-0 bg-bone/30" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Consumption Note */}
                    {bundle.consumptionNote && (
                      <div className="rounded-lg bg-bone/5 p-3 text-[0.78rem] leading-relaxed text-bone-45">
                        <strong className="text-bone-70 block mb-0.5">Consumo:</strong>
                        {bundle.consumptionNote}
                      </div>
                    )}

                    {/* Ideal For */}
                    <div className="rounded-lg border border-cyan/20 bg-cyan/5 p-3 text-xs leading-relaxed text-bone-70">
                      <strong className="text-cyan block mb-0.5">Ideal para:</strong>
                      {bundle.idealFor}
                    </div>
                  </div>

                  {/* CTA button */}
                  <div className="mt-auto pt-8">
                    <CtaButton
                      cta={bundle.cta || content.cta}
                      locale={locale}
                      variant={isRecommended ? "gold" : isPremium ? "wine" : "tube"}
                      className="w-full text-center"
                    />
                  </div>
                </Sign>
              </div>
            );
          })}
        </div>

        {/* Commercial conditions section */}
        {content.commercialConditions && content.commercialConditions.length > 0 && (
          <div className="mt-20 rounded-2xl border border-bone/12 bg-night/80 p-8 sm:p-10 md:p-12" data-reveal>
            <div className="max-w-[70ch]">
              <Eyebrow hue="cyan">Marco de Trabajo & Transparencia</Eyebrow>
              <h3 className="type-marquee mt-3 text-2xl text-bone md:text-3xl">
                {content.conditionsTitle || "Condiciones comerciales que aplican a los tres planes"}
              </h3>
              {content.conditionsIntro && (
                <p className="mt-3 text-sm leading-relaxed text-bone-70">
                  {content.conditionsIntro}
                </p>
              )}
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {content.commercialConditions.map((condition) => (
                <div
                  key={condition.title}
                  className="rounded-xl border border-bone/8 bg-night-2 p-5"
                >
                  <h4 className="type-eyebrow text-sm font-bold text-bone">
                    {condition.title}
                  </h4>
                  <p className="mt-2.5 text-xs leading-relaxed text-bone-70">
                    {condition.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-bone/10 pt-6 sm:flex-row sm:items-center">
              <p className="max-w-[60ch] text-xs leading-relaxed text-bone-45">
                {content.note}
              </p>
              <CtaButton
                cta={content.cta}
                locale={locale}
                variant="tube"
                size="md"
                className="shrink-0"
              />
            </div>
          </div>
        )}
      </NightScope>
    </Panel>
  );
}
