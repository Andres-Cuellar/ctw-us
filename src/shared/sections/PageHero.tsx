"use client";

import Link from "next/link";
import { useRef } from "react";
import type { HeroContent } from "@/content/types";
import type { Locale } from "@/shared/config/site";
import { resolveCta } from "@/shared/lib/routes";
import { useNeonSign } from "@/shared/motion/useNeonSign";
import { useReveal } from "@/shared/motion/useReveal";
import { CtaButton } from "@/shared/ui/atoms/CtaButton";
import { Eyebrow } from "@/shared/ui/atoms/Eyebrow";
import type { NeonHue } from "@/shared/ui/atoms/NeonText";

interface PageHeroProps {
  content: HeroContent;
  locale: Locale;
  /** Each page gets its own hue, so the four front doors are distinguishable. */
  hue?: NeonHue;
}

const BLOOM: Record<NeonHue, string> = {
  gold: "rgb(237 152 15 / 0.28)",
  wine: "rgb(131 44 32 / 0.32)",
  pink: "rgb(131 44 32 / 0.32)",
  cyan: "rgb(40 224 240 / 0.18)",
};

const EYEBROW: Record<NeonHue, "gold" | "wine" | "cyan" | "bone" | "pink"> = {
  gold: "gold",
  wine: "wine",
  pink: "wine",
  cyan: "cyan",
};

/**
 * Hero for the secondary pages. The home hero keeps the largest type scale and
 * the lit marquee to itself; these are quieter, with the glow doing the work.
 */
export function PageHero({ content, locale, hue = "gold" }: PageHeroProps) {
  const scope = useRef<HTMLElement>(null);
  useNeonSign(scope);
  useReveal(scope);

  return (
    <section ref={scope} className="relative isolate overflow-hidden bg-night">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[30rem] w-[72rem] -translate-x-1/2"
        style={{
          background: `radial-gradient(45% 55% at 50% 42%, ${BLOOM[hue]} 0%, transparent 70%)`,
        }}
      />

      <div className="mx-auto w-full max-w-[1280px] px-5 pt-16 pb-14 sm:px-8 md:pt-24 md:pb-20 lg:px-12">
        {content.eyebrow && (
          <Eyebrow hue={EYEBROW[hue]} data-reveal>
            {content.eyebrow}
          </Eyebrow>
        )}

        <h1 className="type-marquee mt-7 max-w-[24ch] text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15] text-bone">
          {content.title}
        </h1>

        <p
          className="mt-7 max-w-[58ch] text-lg leading-relaxed text-bone-70"
          data-reveal
        >
          {content.subtitle}
        </p>

        {content.anchors && (
          <nav aria-label="Secciones de esta página" className="mt-9" data-reveal>
            <ul className="flex flex-wrap gap-3">
              {content.anchors.map((anchor) => {
                const link = resolveCta(anchor, locale);
                return (
                  <li key={anchor.label}>
                    <Link
                      href={link.href}
                      className="btn btn-tube px-5 py-2.5 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}

        {(content.primaryCta || content.secondaryCta) && (
          <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal>
            {content.primaryCta && (
              <CtaButton
                cta={content.primaryCta}
                locale={locale}
                variant="gold"
                size="lg"
              />
            )}
            {content.secondaryCta && (
              <CtaButton
                cta={content.secondaryCta}
                locale={locale}
                variant="tube"
                size="lg"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
