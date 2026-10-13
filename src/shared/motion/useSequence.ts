"use client";

import type { RefObject } from "react";
import { FULL_MOTION, gsap, ScrollTrigger, useGSAP } from "./gsap";

/**
 * Lights a row of items one after another by adding `is-lit` — the payment
 * months, the steps. Mark the container `data-seq` (optional
 * `data-seq-step="0.12"` seconds) and each item `data-seq-item`.
 *
 * The markup starts lit; the hook darkens the items first, so with no
 * JavaScript or reduced motion the finished state shows.
 */
export function useSequence(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(FULL_MOTION, () => {
        const groups = gsap.utils.toArray<HTMLElement>("[data-seq]", scope.current);

        const triggers = groups.map((group) => {
          const items = gsap.utils.toArray<HTMLElement>("[data-seq-item]", group);
          const step = Number(group.dataset.seqStep ?? "0.12");
          items.forEach((item) => item.classList.remove("is-lit"));

          const tl = gsap.timeline({ paused: true });
          items.forEach((item, index) => {
            tl.call(() => item.classList.add("is-lit"), undefined, index * step);
          });

          return ScrollTrigger.create({
            trigger: group,
            start: "top 80%",
            once: true,
            onEnter: () => tl.play(0),
          });
        });

        return () => triggers.forEach((trigger) => trigger.kill());
      });

      return () => mm.revert();
    },
    { scope },
  );
}
