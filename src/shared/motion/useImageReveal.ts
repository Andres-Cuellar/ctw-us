"use client";

import type { RefObject } from "react";
import { FULL_MOTION, gsap, useGSAP } from "./gsap";

/**
 * Photos open from the bottom like a roll-up shutter on a storefront, while
 * the image inside settles from a slight zoom. Mark the frame
 * `data-img-reveal`; the first `img` inside it gets the zoom.
 */
export function useImageReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(FULL_MOTION, () => {
        const frames = gsap.utils.toArray<HTMLElement>("[data-img-reveal]", scope.current);

        frames.forEach((frame) => {
          const img = frame.querySelector("img");
          const tl = gsap.timeline({
            scrollTrigger: { trigger: frame, start: "top 85%", once: true },
          });

          tl.fromTo(
            frame,
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "expo.inOut" },
          );
          if (img) {
            tl.fromTo(img, { scale: 1.3 }, { scale: 1, duration: 1.8, ease: "expo.out" }, 0.1);
          }
        });
      });

      return () => mm.revert();
    },
    { scope },
  );
}
