"use client";

import type { RefObject } from "react";
import { FULL_MOTION, gsap, useGSAP } from "./gsap";

/**
 * Depth on scroll. Mark an element `data-parallax="0.2"`: positive values
 * drift down against the scroll (feels further away), negative values rise
 * faster (feels closer). Travel is `speed × 30%` of the layer's height each
 * way, so a layer oversized by 15% top and bottom never shows its edges up to
 * a speed of about 0.4.
 */
export function useParallax(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(FULL_MOTION, () => {
        const layers = gsap.utils.toArray<HTMLElement>("[data-parallax]", scope.current);

        layers.forEach((layer) => {
          const speed = Number(layer.dataset.parallax ?? "0.15");
          gsap.fromTo(
            layer,
            { yPercent: -speed * 30 },
            {
              yPercent: speed * 30,
              ease: "none",
              scrollTrigger: {
                trigger: layer.parentElement ?? layer,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { scope },
  );
}
