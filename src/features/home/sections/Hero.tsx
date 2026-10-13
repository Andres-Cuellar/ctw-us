"use client";

import Image from "next/image";
import { useRef } from "react";
import type { FeedItem, HeroContent } from "@/content/types";
import type { Locale } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";
import { FULL_MOTION, gsap, SplitText, useGSAP } from "@/shared/motion/gsap";
import { useNeonSign } from "@/shared/motion/useNeonSign";
import { CtaButton } from "@/shared/ui/atoms/CtaButton";
import { Eyebrow } from "@/shared/ui/atoms/Eyebrow";

interface HeroProps {
  content: HeroContent;
  locale: Locale;
}

/** Where each feed notification hangs around the headline on wide screens. */
const FEED_POSITION = [
  "lg:left-[4%] lg:top-[20%]",
  "lg:right-[3%] lg:top-[44%]",
  "lg:left-[7%] lg:bottom-[14%]",
];

const DOT: Record<FeedItem["hue"], string> = {
  gold: "bg-gold shadow-[0_0_12px_var(--color-gold)]",
  wine: "bg-wine shadow-[0_0_12px_var(--color-wine)]",
  pink: "bg-wine shadow-[0_0_12px_var(--color-wine)]",
  cyan: "bg-cyan shadow-[0_0_12px_var(--color-cyan)]",
};

/**
 * The thesis. The whole pitch is "que te vean", so the page opens on the Strip
 * at night and does it: the marquee switches on, character by character, while
 * the notifications a working system produces drift in around it.
 *
 * The headline is one sentence of the client's copy set in three registers —
 * the lit phrase is the half that carries the promise.
 */
export function Hero({ content, locale }: HeroProps) {
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

        intro.fromTo(
          q("[data-feed]"),
          { autoAlpha: 0, y: 40, scale: 0.86 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1, stagger: 0.35, ease: "back.out(1.6)" },
          1.4,
        );

        // Once in, the notifications keep breathing, each on its own rhythm.
        q("[data-feed]").forEach((card, index) => {
          gsap.to(card, {
            y: index % 2 === 0 ? -12 : 12,
            duration: 2.6 + index * 0.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 2.6 + index * 0.3,
          });
        });

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

      {content.feed && (
        <ul aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
          {content.feed.map((item, index) => (
            <li
              key={item.label}
              data-feed
              className={cn("notice absolute w-[17rem] px-4 py-3", FEED_POSITION[index % FEED_POSITION.length])}
            >
              <span className={cn("size-2.5 shrink-0 rounded-full", DOT[item.hue])} />
              <span className="min-w-0">
                <span className="type-label block text-[0.95rem] text-bone">{item.label}</span>
                <span className="mt-1 block truncate text-[0.8rem] leading-snug text-bone-70">
                  {item.detail}
                </span>
              </span>
            </li>
          ))}
        </ul>
      )}

      <div
        className="mx-auto w-full max-w-[1280px] px-5 py-24 text-center sm:px-8 md:py-32 lg:px-12"
        data-hero-content
      >
        {content.eyebrow && (
          <Eyebrow hue="cyan" className="justify-center" data-hero-item>
            {content.eyebrow}
          </Eyebrow>
        )}

        {sign ? (
          <h1 className="mt-8">
            {/* The full sentence for assistive tech and search, read once. */}
            <span className="sr-only">{content.title}</span>

            <span aria-hidden className="flex flex-col items-center gap-[clamp(0.5rem,1.1vw,0.9rem)]">
              <span
                className="type-display block text-[clamp(1.1rem,2.4vw,1.85rem)] font-medium leading-none text-bone-70"
                data-hero-lead
              >
                {sign.lead}
              </span>
              <span
                className="neon neon-gold type-marquee block py-[0.04em] text-[clamp(2.2rem,7vw,5.5rem)] font-extrabold leading-[0.94]"
                data-sign
                data-sign-stutter={sign.stutter}
              >
                {sign.lit}
              </span>
              <span
                className="type-display block text-[clamp(1rem,2.1vw,1.55rem)] font-medium leading-none text-bone-70"
                data-hero-item
              >
                <span className="text-wine-light font-bold">—</span> {sign.tail}
              </span>
            </span>
          </h1>
        ) : (
          <h1 className="type-marquee mt-7 text-[clamp(1.9rem,4.8vw,4.2rem)] font-extrabold text-bone">
            {content.title}
          </h1>
        )}

        <p
          className="mx-auto mt-10 max-w-[54ch] text-lg leading-relaxed text-bone md:mt-12 md:text-xl"
          data-hero-item
        >
          {content.subtitle}
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
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
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
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
    </section>
  );
}
