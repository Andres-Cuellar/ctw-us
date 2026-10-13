"use client";

import type { RefObject } from "react";
import { gsap, useGSAP } from "./gsap";

/** Fine pointers only, and only when motion is welcome. */
const TILT_MEDIA = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
const MAX_DEG = 6;

/**
 * Signs lean toward the cursor, and a highlight follows it across the glass.
 * Mark the element `data-tilt`; it sets `--mx`/`--my` for the highlight.
 */
export function useTilt(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(TILT_MEDIA, () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-tilt]", scope.current);

        const cleanups = cards.map((card) => {
          gsap.set(card, { transformPerspective: 900, transformStyle: "preserve-3d" });
          const rotateX = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power3.out" });
          const rotateY = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power3.out" });

          const onMove = (event: PointerEvent) => {
            const rect = card.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width;
            const y = (event.clientY - rect.top) / rect.height;
            rotateY((x - 0.5) * MAX_DEG * 2);
            rotateX((0.5 - y) * MAX_DEG * 2);
            card.style.setProperty("--mx", `${x * 100}%`);
            card.style.setProperty("--my", `${y * 100}%`);
          };
          const onLeave = () => {
            rotateX(0);
            rotateY(0);
          };

          card.addEventListener("pointermove", onMove);
          card.addEventListener("pointerleave", onLeave);
          return () => {
            card.removeEventListener("pointermove", onMove);
            card.removeEventListener("pointerleave", onLeave);
          };
        });

        return () => cleanups.forEach((cleanup) => cleanup());
      });

      return () => mm.revert();
    },
    { scope },
  );
}
