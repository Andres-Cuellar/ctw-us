import type { WebTiersContent } from "@/content/types";
import type { Locale } from "@/shared/config/site";
import { NightScope } from "@/shared/motion/NightScope";
import { CtaButton } from "@/shared/ui/atoms/CtaButton";
import { Panel } from "@/shared/ui/atoms/Panel";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";
import { Sign } from "@/shared/ui/atoms/Sign";

interface PaginasWebProps {
  content: WebTiersContent;
  locale: Locale;
}

/**
 * Website tiers carry no price by client decision — they are sold on the
 * 15-minute call with financing. The space a price would occupy says so
 * explicitly, so the omission reads as deliberate rather than as a gap.
 *
 * The recommended tier is already lit; the others switch on as they arrive.
 */
export function PaginasWeb({ content, locale }: PaginasWebProps) {
  return (
    <Panel surface="night" glow="gold" id="paginas-web">
      <NightScope>
        <SectionTitle size="lg" className="max-w-[20ch]" data-reveal>
          {content.title}
        </SectionTitle>
        {content.intro && (
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-bone-70" data-reveal>
            {content.intro}
          </p>
        )}

        <ul className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {content.tiers.map((tier) => (
            <li key={tier.name} className="h-full">
              <Sign className="h-full gap-6" lit={Boolean(tier.flag)}>
                <div>
                  {tier.flag && (
                    <p className="type-eyebrow mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1 text-[0.56rem] text-gold">
                      <span
                        aria-hidden
                        className="size-1.5 rounded-full bg-gold shadow-[0_0_8px_var(--color-gold)]"
                      />
                      {tier.flag}
                    </p>
                  )}
                  <h3 className="type-marquee leading-[1.06] text-[clamp(1.6rem,2.8vw,2.2rem)] text-bone">
                    {tier.name}
                  </h3>
                  <p className="mt-3 text-bone-70">{tier.audience}</p>
                </div>

                <ul className="flex flex-col gap-3 border-t border-bone/12 pt-6">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[0.95rem] text-bone-70"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-px w-3 shrink-0 bg-cyan shadow-[0_0_6px_var(--color-cyan)]"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-4 pt-6">
                  <p className="text-sm text-bone-45">{content.priceNote}</p>
                  <CtaButton
                    cta={tier.cta}
                    locale={locale}
                    variant={tier.flag ? "gold" : "tube"}
                    className="w-full"
                  />
                </div>
              </Sign>
            </li>
          ))}
        </ul>
      </NightScope>
    </Panel>
  );
}
