import type { BundlesContent } from "@/content/types";
import type { Locale } from "@/shared/config/site";
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
  const isEnglish = locale === "en";

  return (
    <Panel surface="raised" glow="gold" id="paquetes" className="scroll-mt-28">
      <NightScope>
        <SectionTitle size="lg" className="max-w-[22ch]" data-reveal>
          {content.title}
        </SectionTitle>
        {content.subtitle && (
          <p className="mt-5 max-w-[60ch] text-lg text-bone-70" data-reveal>
            {content.subtitle}
          </p>
        )}

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
          {content.bundles.map((bundle) => (
            <article key={bundle.id} id={bundle.id} className="scroll-mt-28">
              <Sign switches={false} className="gap-0 p-6 sm:p-7 md:p-7">
                <h3 className="type-marquee text-2xl text-bone">{bundle.name}</h3>
                <p className="mt-2 text-sm font-semibold text-cyan lg:min-h-10">
                  {bundle.tagline}
                </p>

                <div className="mt-5 border-y border-bone/15 py-4">
                  <p className="flex flex-wrap items-baseline gap-2">
                    <strong className="type-marquee text-2xl text-gold" data-numeric>
                      {bundle.monthlyPrice}
                    </strong>
                    <span className="text-sm text-bone-70">{bundle.monthlyCadence}</span>
                  </p>
                  {bundle.summary?.adBreakdown && (
                    <p className="mt-1 text-sm text-bone-70">{bundle.summary.adBreakdown}</p>
                  )}
                  <p className="mt-2 text-sm text-bone-70">
                    {isEnglish ? "One-time setup" : "Implementación única"}{" "}
                    <strong className="text-bone">{bundle.setupPrice}</strong>
                  </p>
                </div>

                {bundle.summary && (
                  <>
                    <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-bone-70 marker:text-cyan">
                      {bundle.summary.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                    <h4 className="mt-5 text-sm font-semibold text-bone">
                      {isEnglish ? "What we do each month" : "Qué hacemos cada mes"}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-bone-70">
                      {bundle.summary.monthly}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-bone-70">
                      {bundle.summary.usage}
                    </p>
                  </>
                )}

                <CtaButton
                  cta={bundle.cta || content.cta}
                  locale={locale}
                  variant="tube"
                  className="mt-5 w-full text-center"
                />

                <details className="mt-4 border-t border-bone/15 pt-3">
                  <summary className="cursor-pointer rounded-sm py-2 text-sm font-semibold text-cyan focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan">
                    {isEnglish ? "See full scope" : "Ver alcance completo"}
                  </summary>
                  {bundle.inheritsFrom && (
                    <p className="mt-3 text-sm font-semibold text-bone">{bundle.inheritsFrom}</p>
                  )}
                  {[...(bundle.phases ?? []), ...(bundle.maintenance ? [bundle.maintenance] : [])].map((group) => (
                    <div key={group.title} className="mt-4">
                      <h4 className="text-sm font-semibold text-bone">{group.title}</h4>
                      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-bone-70">
                        {group.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  ))}
                  {bundle.consumptionNote && (
                    <p className="mt-4 text-sm text-bone-70">{bundle.consumptionNote}</p>
                  )}
                </details>
              </Sign>
            </article>
          ))}
        </div>

        {content.onboarding && (
          <div className="mt-14">
            <h3 className="type-marquee text-2xl text-bone">{content.onboarding.title}</h3>
            <ol className="mt-5 grid list-decimal gap-x-8 gap-y-5 pl-6 marker:font-bold marker:text-gold sm:grid-cols-2 lg:grid-cols-5">
              {content.onboarding.steps.map((step) => (
                <li key={step.title}>
                  <h4 className="font-semibold text-bone">{step.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-bone-70">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Commercial conditions section */}
        {content.commercialConditions && content.commercialConditions.length > 0 && (
          <div className="mt-20 rounded-2xl border border-bone/12 bg-night/80 p-8 sm:p-10 md:p-12" data-reveal>
            <div className="max-w-[70ch]">
              <Eyebrow hue="cyan">{isEnglish ? "Terms and scope" : "Condiciones y alcance"}</Eyebrow>
              <h3 className="type-marquee mt-3 text-2xl text-bone md:text-3xl">
                {content.conditionsTitle}
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
