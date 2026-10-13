import type { Stat, StatsContent } from "@/content/types";
import { NightScope } from "@/shared/motion/NightScope";
import { Panel } from "@/shared/ui/atoms/Panel";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";

interface CifrasProps {
  content: StatsContent;
}

/** A figure that is purely numeric counts up; anything else is printed as-is. */
function numericValue(stat: Stat): string | null {
  if (!stat.value) return null;
  const digits = stat.value.replace(/[^\d]/g, "");
  return digits.length > 0 && /^\d+\+?$/.test(stat.value.trim()) ? digits : null;
}

/**
 * PH-02. A figure with no real number shows an em dash and the section says
 * why. An agency selling trust does not get to round up numbers it does not
 * have.
 */
export function Cifras({ content }: CifrasProps) {
  const anyPending = content.stats.some((stat) => stat.value === null);

  return (
    <Panel surface="raised" glow="gold">
      <NightScope>
        <SectionTitle size="md" data-reveal>
          {content.title}
        </SectionTitle>

        <dl className="mt-12 grid gap-x-10 gap-y-10 border-t border-bone/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {content.stats.map((stat) => {
            const countTo = numericValue(stat);
            // A phrase like "Español e inglés" is not a figure: lighting it at
            // display scale would shout a label.
            const isFigure = countTo !== null || stat.value === null;

            return (
              <div key={stat.label} data-reveal>
                {isFigure ? (
                  <dd
                    className="type-marquee neon neon-gold text-[clamp(2rem,4.6vw,3.2rem)]"
                    data-numeric
                    {...(countTo
                      ? {
                          "data-count": true,
                          "data-count-to": countTo,
                          "data-count-suffix": stat.value?.includes("+") ? "+" : "",
                        }
                      : {})}
                  >
                    {stat.value ?? "—"}
                  </dd>
                ) : (
                  <dd className="type-marquee text-[clamp(1.3rem,2.4vw,1.8rem)] text-bone">
                    {stat.value}
                  </dd>
                )}
                <dt className="type-eyebrow mt-4 text-[0.62rem] text-bone-45">
                  {stat.label}
                </dt>
              </div>
            );
          })}
        </dl>

        {anyPending && (
          <p className="mt-9 max-w-[56ch] text-sm text-bone/35" data-reveal>
            {content.pendingNote}
          </p>
        )}
      </NightScope>
    </Panel>
  );
}
