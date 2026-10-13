"use client";

import type { RefObject } from "react";
import { FULL_MOTION, gsap, SplitText, useGSAP } from "./gsap";

/**
 * Headlines rise line by line out of a mask, like letters slotted into a
 * marquee board. Mark the heading `data-split`.
 *
 * CSS pre-hides `[data-split]` once the document is scripted; this hook shows
 * the element as soon as its lines are masked, so nothing flashes.
 */
export function useSplitReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(FULL_MOTION, () => {
        const root = scope.current;
        if (!root) return;

        const headings = gsap.utils.toArray<HTMLElement>("[data-split]", root);
        if (headings.length === 0) return;

        const splits: SplitText[] = [];

        const build = () => {
          headings.forEach((heading) => {
            const split = SplitText.create(heading, {
              type: "lines",
              mask: "lines",
              aria: "auto",
            });
            splits.push(split);

            gsap.set(heading, { opacity: 1 });
            gsap.from(split.lines, {
              yPercent: 110,
              duration: 1,
              ease: "expo.out",
              stagger: 0.09,
              scrollTrigger: { trigger: heading, start: "top 88%", once: true },
            });
          });
        };

        // Line breaks depend on the real face's metrics.
        if (document.fonts && document.fonts.status !== "loaded") {
          document.fonts.ready.then(build);
        } else {
          build();
        }

        return () => splits.forEach((split) => split.revert());
      });

      return () => mm.revert();
    },
    { scope },
  );
}
