import type { FinancingContent } from "@/content/types";
import type { Locale } from "@/shared/config/site";
import { NightScope } from "@/shared/motion/NightScope";
import { CtaButton } from "@/shared/ui/atoms/CtaButton";
import { Panel } from "@/shared/ui/atoms/Panel";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";

interface FinanciamientoProps {
  content: FinancingContent;
  locale: Locale;
}

/**
 * The objection-killer, and the reason most people apply. Lit in gold.
 *
 * The plan graphic is a year of identical months switching on one after
 * another: the point of financing is that every month looks the same.
 */
export function Financiamiento({ content, locale }: FinanciamientoProps) {
  const plan = content.plan;

  return (
    <Panel surface="raised" glow="gold" id="financiamiento">
      <NightScope className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <SectionTitle size="md" className="max-w-[16ch]">
            {content.title}
          </SectionTitle>
          <p className="mt-8 max-w-[50ch] text-lg leading-relaxed text-bone-70" data-reveal>
            {content.body}
          </p>

          <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {content.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3.5" data-reveal>
                <span
                  aria-hidden
                  className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-gold/60 text-gold shadow-[0_0_12px_-3px_var(--color-gold)]"
                >
                  <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3.5 8.5l3 3 6-7" />
                  </svg>
                </span>
                <p className="type-label text-[1.05rem] leading-snug text-bone">{benefit}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12" data-reveal>
            <CtaButton cta={content.cta} locale={locale} variant="gold" size="lg" />
          </div>
        </div>

        {plan && (
          <div data-reveal>
            <figure className="sign p-7 md:p-9" data-tilt>
              <figcaption className="flex items-baseline justify-between gap-4">
                <span className="type-display text-[clamp(1.5rem,2.4vw,2rem)] text-bone">
                  {plan.title}
                </span>
                <span aria-hidden className="neon neon-gold type-marquee text-[2.4rem]">
                  $
                </span>
              </figcaption>

              <ol
                className="mt-8 grid grid-cols-3 gap-2.5 sm:grid-cols-4"
                data-seq
                data-seq-step="0.14"
              >
                {Array.from({ length: plan.months }, (_, index) => (
                  <li
                    key={index}
                    className="month-cell is-lit flex flex-col items-start gap-3 px-3 py-3.5"
                    data-seq-item
                  >
                    <span className="type-eyebrow text-[0.56rem]">
                      {plan.monthLabel} {index + 1}
                    </span>
                    {/* Every bar the same height: that is the whole promise. */}
                    <span aria-hidden className="block h-1.5 w-full rounded-full bg-current opacity-80" />
                  </li>
                ))}
              </ol>

              <p className="mt-7 text-bone-70">{plan.note}</p>
            </figure>
          </div>
        )}
      </NightScope>
    </Panel>
  );
}
