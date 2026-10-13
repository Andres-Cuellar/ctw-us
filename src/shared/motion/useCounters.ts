"use client";

import type { RefObject } from "react";
import { FULL_MOTION, gsap, ScrollTrigger, useGSAP } from "./gsap";

/**
 * Counts a figure up when it scrolls into view.
 *
 * Mark the element `data-count` with `data-count-to="120"` and optional
 * `data-count-suffix="+"`. The element's server-rendered text is already the
 * final value, so with no JavaScript or reduced motion the real number shows.
 */
export function useCounters(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(FULL_MOTION, () => {
        const nodes = gsap.utils.toArray<HTMLElement>("[data-count]", scope.current);
        if (nodes.length === 0) return;

        const triggers = nodes.map((node) => {
          const target = Number(node.dataset.countTo ?? "0");
          const suffix = node.dataset.countSuffix ?? "";
          const counter = { value: 0 };

          node.textContent = `0${suffix}`;

          return ScrollTrigger.create({
            trigger: node,
            start: "top 92%",
            once: true,
            onEnter: () =>
              gsap.to(counter, {
                value: target,
                duration: 1.5,
                ease: "power2.out",
                onUpdate: () => {
                  node.textContent = `${Math.round(counter.value)}${suffix}`;
                },
              }),
          });
        });

        return () => triggers.forEach((trigger) => trigger.kill());
      });

      return () => mm.revert();
    },
    { scope },
  );
}
