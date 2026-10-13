import type { ProblemContent } from "@/content/types";
import { NightScope } from "@/shared/motion/NightScope";
import { SignLine } from "@/shared/ui/molecules/SignLine";
import { Panel } from "@/shared/ui/atoms/Panel";
import { Photo } from "@/shared/ui/atoms/Photo";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";

interface ProblemaProps {
  content: ProblemContent;
}

/**
 * The pains are unlit signs: dark glass, no glow, a dead bulb beside each one.
 * Beside them, a shop in the middle of a working day — the moment the phone
 * rings and nobody can pick it up. The closer is the first thing on the page
 * to light up after the hero, the turn the rest of the argument stands on.
 */
export function Problema({ content }: ProblemaProps) {
  return (
    <Panel surface="night">
      <NightScope>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          {content.media && (
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Photo media={content.media} className="aspect-[4/5] w-full">
                {content.mediaBadge && (
                  <div
                    className="notice absolute right-4 bottom-4 left-4 z-[2] px-4 py-3.5 sm:right-auto"
                    data-reveal
                  >
                    <span
                      aria-hidden
                      className="grid size-9 shrink-0 place-items-center rounded-full bg-wine/30 text-gold shadow-[0_0_16px_-4px_var(--color-gold)]"
                    >
                      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                        <path d="M16 3l5 5M21 3l-5 5" />
                      </svg>
                    </span>
                    <span>
                      <span className="type-label block text-gold">{content.mediaBadge.label}</span>
                      <span className="mt-0.5 block text-sm text-bone-70">{content.mediaBadge.detail}</span>
                    </span>
                  </div>
                )}
              </Photo>
            </div>
          )}

          <div>
            <SectionTitle size="lg" className="max-w-[16ch]">
              {content.title}
            </SectionTitle>

            <ul className="mt-12 flex flex-col gap-4">
              {content.pains.map((pain) => (
                <li
                  key={pain}
                  className="flex items-start gap-5 rounded-[var(--radius-sign)] border border-bone/8 bg-night-2/60 px-6 py-5 md:px-7 md:py-6"
                  data-reveal
                >
                  {/* A dead bulb: glass with nothing behind it. */}
                  <span
                    aria-hidden
                    className="mt-2 size-2.5 shrink-0 rounded-full border border-bone/25 bg-bone/5"
                  />
                  <p className="max-w-[52ch] text-[1.05rem] leading-relaxed text-bone-70">{pain}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <SignLine
          fallback={content.closer}
          line={content.closerSign}
          hue="gold"
          className="mt-20 max-w-[22ch] text-[clamp(2rem,5vw,3.8rem)] md:mt-28"
        />
      </NightScope>
    </Panel>
  );
}
