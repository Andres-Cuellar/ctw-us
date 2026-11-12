"use client";

import Image from "next/image";
import { useRef } from "react";
import type { HeroContent, MissedCallContent } from "@/content/types";
import type { Locale } from "@/shared/config/site";
import { FULL_MOTION, gsap, SplitText, useGSAP } from "@/shared/motion/gsap";
import { useNeonSign } from "@/shared/motion/useNeonSign";
import { CtaButton } from "@/shared/ui/atoms/CtaButton";
import { Eyebrow } from "@/shared/ui/atoms/Eyebrow";

interface HeroProps {
  content: HeroContent;
  locale: Locale;
  missedCall: MissedCallContent;
}

export function Hero({ content, locale, missedCall }: HeroProps) {
  const scope = useRef<HTMLElement>(null);
  useNeonSign(scope);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(FULL_MOTION, () => {
        const q = gsap.utils.selector(scope);
        const lead = q("[data-hero-lead]")[0] as HTMLElement | undefined;
        const split = lead
          ? SplitText.create(lead, { type: "words", mask: "words" })
          : null;

        const intro = gsap.timeline({ defaults: { ease: "expo.out" } });

        intro
          .fromTo(
            q("[data-hero-backdrop]"),
            { scale: 1.22, autoAlpha: 0 },
            { scale: 1.06, autoAlpha: 1, duration: 2.4, ease: "power2.out" },
          )
          .fromTo(
            q("[data-hero-item]"),
            { autoAlpha: 0, y: 34 },
            { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.1 },
            0.25,
          );

        if (split) {
          intro.from(split.words, { yPercent: 110, duration: 1, stagger: 0.07 }, 0.35);
        }

        // Leaving: the street sinks, the sign lifts away.
        const exit = { trigger: scope.current, start: "top top", end: "bottom top", scrub: true };
        gsap.to(q("[data-hero-depth]"), { yPercent: 18, ease: "none", scrollTrigger: exit });
        gsap.to(q("[data-hero-content]"), { y: -120, autoAlpha: 0.15, ease: "none", scrollTrigger: exit });

        return () => split?.revert();
      });

      return () => mm.revert();
    },
    { scope },
  );

  const sign = content.sign;

  return (
    <section
      ref={scope}
      className="relative isolate flex min-h-[calc(100svh-7rem)] items-center overflow-hidden bg-night"
    >
      {content.backdrop && (
        <div aria-hidden className="absolute inset-0 -z-20" data-hero-depth>
          <div className="absolute inset-0" data-hero-backdrop>
            <Image
              src={content.backdrop.src}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[50%_35%] [filter:saturate(0.9)_contrast(1.1)_brightness(0.62)]"
            />
          </div>
        </div>
      )}

      {/* Night grade: keeps the photo under the sign instead of beside it. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: [
            "radial-gradient(60% 55% at 50% 48%, rgb(10 10 15 / 0.78) 0%, rgb(10 10 15 / 0.45) 60%, rgb(10 10 15 / 0.2) 100%)",
            "linear-gradient(180deg, rgb(10 10 15 / 0.85) 0%, transparent 22%, transparent 70%, var(--color-night) 100%)",
            "radial-gradient(45% 40% at 50% 50%, rgb(130 38 33 / 0.28) 0%, transparent 70%)",
          ].join(", "),
        }}
      />

      <div
        className="mx-auto grid w-full max-w-[1280px] items-center gap-10 px-5 py-16 text-center sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-16 lg:px-12 lg:text-left"
        data-hero-content
      >
        <div>
          {content.eyebrow && (
            <Eyebrow hue="cyan" className="justify-center lg:justify-start" data-hero-item>
              {content.eyebrow}
            </Eyebrow>
          )}

          {sign ? (
            <h1 className="mt-8">
              {/* The full sentence for assistive tech and search, read once. */}
              <span className="sr-only">{content.title}</span>

              <span aria-hidden className="flex flex-col items-center lg:items-start gap-[clamp(0.5rem,1.1vw,0.9rem)]">
                <span
                  className="type-display block text-[clamp(1.1rem,2.4vw,1.85rem)] font-medium leading-none text-bone-70"
                  data-hero-lead
                >
                  {sign.lead}
                </span>
                <span
                  className="neon neon-gold type-marquee block py-[0.04em] text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold leading-[0.94]"
                  data-sign
                  data-sign-stutter={sign.stutter}
                >
                  {sign.lit}
                </span>
                <span
                  className="type-display block text-[clamp(1rem,2.1vw,1.55rem)] font-medium leading-none text-bone-70"
                  data-hero-item
                >
                  {sign.tail}
                </span>
              </span>
            </h1>
          ) : (
            <h1 className="type-marquee mt-7 text-[clamp(1.9rem,4.8vw,4.2rem)] font-extrabold text-bone">
              {content.title}
            </h1>
          )}

          <p
            className="mx-auto mt-8 max-w-[54ch] lg:mx-0 text-lg leading-relaxed text-bone md:mt-12 md:text-xl"
            data-hero-item
          >
            {content.subtitle}
          </p>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            data-hero-item
          >
            {content.primaryCta && (
              <CtaButton cta={content.primaryCta} locale={locale} variant="gold" size="lg" />
            )}
            {content.secondaryCta && (
              <CtaButton
                cta={content.secondaryCta}
                locale={locale}
                variant="tube"
                size="lg"
                className="bg-night/40 backdrop-blur-sm"
              />
            )}
          </div>

          {content.trustLine && (
            <ul
              className="mt-12 flex flex-wrap items-center justify-center gap-x-8 lg:justify-start gap-y-3"
              data-hero-item
            >
              {content.trustLine.map((item) => (
                <li
                  key={item}
                  className="type-eyebrow flex items-center gap-2.5 text-[0.66rem] text-bone-70"
                >
                  <span
                    aria-hidden
                    className="size-1.5 rounded-full bg-gold shadow-[0_0_9px_var(--color-gold)]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <figure className="sign mx-auto w-full max-w-[22rem] gap-4 p-5 text-left" data-hero-item>
          <figcaption className="type-eyebrow text-xs text-bone-70">
            {missedCall.demoLabel}
          </figcaption>
          <div className="rounded-md border border-bone/15 bg-night p-4">
            <p className="type-label text-wine-light">{missedCall.missed}</p>
            <p className="mt-1 text-sm text-bone">{missedCall.caller.name}</p>
          </div>
          <p className="ml-5 rounded-lg bg-cyan px-4 py-3 text-sm leading-relaxed text-night">
            {missedCall.outgoing}
          </p>
        </figure>
      </div>
    </section>
  );
}
