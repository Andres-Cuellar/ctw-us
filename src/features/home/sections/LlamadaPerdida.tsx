"use client";

import { useRef, useState } from "react";
import type { MissedCallContent } from "@/content/types";
import type { Locale } from "@/shared/config/site";
import { FULL_MOTION, gsap, ScrollTrigger, useGSAP } from "@/shared/motion/gsap";
import { useReveal } from "@/shared/motion/useReveal";
import { useSplitReveal } from "@/shared/motion/useSplitReveal";
import { CtaButton } from "@/shared/ui/atoms/CtaButton";
import { Eyebrow } from "@/shared/ui/atoms/Eyebrow";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";

interface LlamadaPerdidaProps {
  content: MissedCallContent;
  locale: Locale;
}

/**
 * A call rings, goes unanswered, and the automatic reply fires. It demonstrates
 * the single product promise instead of describing it.
 *
 * The markup's resting state is the FINISHED exchange, so with no JavaScript or
 * under reduced motion the panel still tells the whole story and nothing
 * overlaps. `[data-js]` flips it to the starting state for GSAP.
 */
export function LlamadaPerdida({ content, locale }: LlamadaPerdidaProps) {
  const scope = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [canReplay, setCanReplay] = useState(false);

  useReveal(scope);
  useSplitReveal(scope);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(FULL_MOTION, () => {
        const q = gsap.utils.selector(scope);

        // Applied now rather than as the timeline's first step: a paused
        // timeline would leave every stage visible and stacked until it played.
        gsap.set(q("[data-call-stage='ringing']"), { autoAlpha: 1 });
        gsap.set(q("[data-call-stage='missed']"), { autoAlpha: 0 });
        gsap.set(q("[data-call-stage='sms-out'], [data-call-stage='sms-in']"), {
          autoAlpha: 0,
          y: 22,
        });

        const tl = gsap.timeline({
          paused: true,
          onComplete: () => setCanReplay(true),
        });

        // Ring.
        tl.to(q("[data-ring]"), {
          scale: 1.5,
          autoAlpha: 0,
          duration: 1,
          ease: "power2.out",
          repeat: 1,
          stagger: 0.3,
        });

        // The call drops.
        tl.to(q("[data-call-stage='ringing']"), { autoAlpha: 0, duration: 0.2 })
          .to(q("[data-call-stage='missed']"), { autoAlpha: 1, duration: 0.25 })
          .fromTo(
            q("[data-screen]"),
            { x: -4 },
            { x: 4, duration: 0.06, repeat: 5, yoyo: true, ease: "none" },
            "<",
          );

        // The system answers for them.
        tl.to(
          q("[data-call-stage='sms-out']"),
          { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "+=0.5",
        ).to(
          q("[data-call-stage='sms-in']"),
          { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "+=0.7",
        );

        timeline.current = tl;

        const trigger = ScrollTrigger.create({
          trigger: scope.current,
          start: "top 72%",
          once: true,
          onEnter: () => tl.play(0),
        });

        return () => {
          trigger.kill();
          tl.kill();
          timeline.current = null;
        };
      });

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <>
      <hr className="filament border-0" aria-hidden />
      <section className="bloom overflow-x-clip bg-night py-panel md:py-panel-lg">
        <div
          ref={scope}
          className="mx-auto grid w-full max-w-[1280px] gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-center lg:gap-20 lg:px-12"
        >
          <div>
            <Eyebrow hue="gold" data-reveal>
              {content.eyebrow}
            </Eyebrow>
            <SectionTitle size="lg" className="mt-7 max-w-[16ch]">
              {content.title}
            </SectionTitle>
            <p
              className="mt-8 max-w-[54ch] text-lg leading-relaxed text-bone-70"
              data-reveal
            >
              {content.body}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5" data-reveal>
              <CtaButton cta={content.cta} locale={locale} variant="gold" size="lg" />
              {canReplay && (
                <button
                  type="button"
                  onClick={() => timeline.current?.restart()}
                  className="type-label text-sm text-cyan underline decoration-1 underline-offset-4 hover:text-bone"
                >
                  {content.replayLabel}
                </button>
              )}
            </div>
          </div>

          {/* The handset, glowing in the dark. */}
          <figure className="sign mx-auto w-full max-w-[21rem] p-4" data-reveal>
            <figcaption className="type-eyebrow mb-3 text-[0.56rem] text-bone/30">
              {content.demoLabel}
            </figcaption>

            <div
              data-screen
              className="overflow-hidden rounded-[6px] border border-bone/10 bg-night"
            >
              {/* Both call states share one box so the swap reads as one screen. */}
              <div className="relative grid h-36 place-items-center px-5 text-center">
                <div
                  data-call-stage="ringing"
                  className="absolute inset-0 grid place-items-center"
                >
                  <span
                    data-ring
                    aria-hidden
                    className="absolute size-20 rounded-full border border-gold/70"
                  />
                  <span
                    data-ring
                    aria-hidden
                    className="absolute size-20 rounded-full border border-gold/70"
                  />
                  <div className="relative">
                    <p className="type-eyebrow text-[0.56rem] text-gold">
                      {content.ringing}
                    </p>
                    <p className="type-label mt-1.5 text-lg text-bone">
                      {content.caller.name}
                    </p>
                    <p className="text-sm text-bone-45" data-numeric>
                      {content.caller.number}
                    </p>
                  </div>
                </div>

                <div
                  data-call-stage="missed"
                  className="absolute inset-0 grid place-items-center"
                >
                  <div>
                    <p className="type-eyebrow text-[0.56rem] text-wine-light">
                      {content.missed}
                    </p>
                    <p className="type-label mt-1.5 text-lg text-bone">
                      {content.caller.name}
                    </p>
                    <p className="mt-1.5 text-sm text-bone/35">{content.missedNote}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-bone/10 p-4">
                <p
                  data-call-stage="sms-out"
                  className="ml-auto max-w-[85%] rounded-[10px] bg-cyan px-3.5 py-2.5 text-sm text-night shadow-[0_0_22px_-8px_var(--color-cyan)]"
                >
                  {content.outgoing}
                </p>
                <p
                  data-call-stage="sms-in"
                  className="mr-auto max-w-[85%] rounded-[10px] bg-night-3 px-3.5 py-2.5 text-sm text-bone"
                >
                  {content.incoming}
                </p>
              </div>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
}
