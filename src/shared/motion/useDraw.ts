"use client";

import type { RefObject } from "react";
import { FULL_MOTION, gsap, useGSAP } from "./gsap";

/**
 * Lines and bars that draw themselves. Mark the element `data-draw` for a
 * horizontal tube that fills with the scroll, or `data-draw="y"` for a bar
 * that grows once when its `data-draw-track` arrives (bars in the same track
 * grow in turn). The markup is fully drawn, so with no JavaScript or reduced
 * motion the line is simply there.
 */
export function useDraw(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(FULL_MOTION, () => {
        const lines = gsap.utils.toArray<HTMLElement>("[data-draw]", scope.current);

        const bars = lines.filter((line) => line.dataset.draw === "y");
        const tubes = lines.filter((line) => line.dataset.draw !== "y");

        const tracks = new Map<Element, HTMLElement[]>();
        bars.forEach((bar) => {
          const track = bar.closest("[data-draw-track]") ?? bar;
          tracks.set(track, [...(tracks.get(track) ?? []), bar]);
        });
        tracks.forEach((group, track) => {
          gsap.fromTo(
            group,
            { scaleY: 0, transformOrigin: "bottom" },
            {
              scaleY: 1,
              duration: 0.9,
              ease: "expo.out",
              stagger: 0.06,
              scrollTrigger: { trigger: track, start: "top 85%", once: true },
            },
          );
        });

        tubes.forEach((line) => {
          gsap.fromTo(
            line,
            { scaleX: 0, transformOrigin: "left" },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: line.closest("[data-draw-track]") ?? line,
                start: "top 80%",
                end: "bottom 55%",
                scrub: 0.6,
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
