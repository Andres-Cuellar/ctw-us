"use client";

import type { RefObject } from "react";
import { FULL_MOTION, gsap, ScrollTrigger, useGSAP } from "./gsap";

/**
 * Lights sign panels as they enter the viewport by adding `is-lit`, which the
 * `sign-switch` utility styles. Panels arrive unlit and switch on in sequence,
 * so scrolling the page reads as walking a street at opening time.
 *
 * Mark each panel `data-sign-panel`.
 */
export function useSignSwitch(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(FULL_MOTION, () => {
        const panels = gsap.utils.toArray<HTMLElement>(
          "[data-sign-panel]",
          scope.current,
        );
        if (panels.length === 0) return;

        ScrollTrigger.batch(panels, {
          start: "top 88%",
          once: true,
          batchMax: 4,
          interval: 0.12,
          onEnter: (batch) =>
            batch.forEach((panel, index) =>
              gsap.delayedCall(index * 0.14, () => panel.classList.add("is-lit")),
            ),
        });
      });

      return () => mm.revert();
    },
    { scope },
  );
}
