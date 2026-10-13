"use client";

import type { RefObject } from "react";
import { FULL_MOTION, gsap, ScrollTrigger, useGSAP } from "./gsap";

/**
 * The site's single scroll-reveal mechanism. Mark any element `data-reveal`.
 *
 * Reduced motion is handled in globals.css by leaving the content in its
 * finished state — never by running the same animation at zero duration.
 */
export function useReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(FULL_MOTION, () => {
        const targets = gsap.utils.toArray<HTMLElement>(
          // Split headings have their own line-by-line entrance.
          "[data-reveal]:not([data-split])",
          scope.current,
        );
        if (targets.length === 0) return;

        gsap.set(targets, { autoAlpha: 0, y: 26 });

        ScrollTrigger.batch(targets, {
          start: "top 90%",
          once: true,
          batchMax: 6,
          interval: 0.08,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.75,
              ease: "power3.out",
              stagger: 0.06,
              overwrite: true,
            }),
        });
      });

      return () => mm.revert();
    },
    { scope },
  );
}
