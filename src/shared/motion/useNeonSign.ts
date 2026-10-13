"use client";

import type { RefObject } from "react";
import { FULL_MOTION, gsap, ScrollTrigger, SplitText, useGSAP } from "./gsap";

/** Per character, in seconds. */
const STEP = 0.042;
/** How long a stuttering character stays dark. */
const STUTTER = 0.075;

/**
 * Turns neon lettering on, character by character, with the stutter a real tube
 * makes before it holds — then one short whole-sign flicker to seal it.
 *
 * Lighting is a hard class toggle, never an opacity tween: neon snaps on. The
 * markup is lit by default (see the `.neon` utility), so this hook darkens the
 * characters first and then releases them. Nothing runs under reduced motion,
 * which leaves every sign simply switched on.
 *
 * Mark an element `data-sign`. Optional `data-sign-stutter="2,7"` names the
 * character indices that should hesitate; omit it and two are chosen from the
 * word length so the effect stays deterministic across replays.
 */
export function useNeonSign(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(FULL_MOTION, () => {
        const root = scope.current;
        if (!root) return;

        const signs = gsap.utils.toArray<HTMLElement>("[data-sign]", root);
        if (signs.length === 0) return;

        const splits: SplitText[] = [];
        const triggers: ScrollTrigger[] = [];

        const build = () => {
          signs.forEach((sign) => {
            const split = SplitText.create(sign, { type: "words,chars", aria: "auto" });
            splits.push(split);

            // Words are split too so a line still breaks between words, never
            // inside one.
            const chars = split.chars as HTMLElement[];
            if (chars.length === 0) return;

            // Dark glass until the sign is switched on.
            gsap.set(chars, { className: "+=neon-char" });

            const stutter = resolveStutter(sign, chars.length);
            const tl = gsap.timeline({ paused: true });

            chars.forEach((char, index) => {
              const at = index * STEP;
              tl.set(char, { className: "-=neon-char" }, at);

              if (stutter.has(index)) {
                tl.set(char, { className: "+=neon-char" }, at + 0.03)
                  .set(char, { className: "-=neon-char" }, at + 0.03 + STUTTER);
              }
            });

            // The whole sign blinks once as it settles.
            const settled = chars.length * STEP + 0.26;
            tl.set(chars, { className: "+=neon-char" }, settled)
              .set(chars, { className: "-=neon-char" }, settled + 0.055);

            triggers.push(
              ScrollTrigger.create({
                trigger: sign,
                start: "top 92%",
                once: true,
                onEnter: () => tl.play(0),
              }),
            );
          });
        };

        // Splitting against a fallback face puts the characters in the wrong
        // places, so wait for the real one.
        if (document.fonts && document.fonts.status !== "loaded") {
          document.fonts.ready.then(build);
        } else {
          build();
        }

        return () => {
          triggers.forEach((trigger) => trigger.kill());
          splits.forEach((split) => split.revert());
        };
      });

      return () => mm.revert();
    },
    { scope },
  );
}

function resolveStutter(sign: HTMLElement, length: number): Set<number> {
  const declared = sign.dataset.signStutter;

  if (declared) {
    return new Set(
      declared
        .split(",")
        .map((value) => Number.parseInt(value.trim(), 10))
        .filter((value) => Number.isInteger(value) && value >= 0 && value < length),
    );
  }

  if (length < 4) return new Set();
  // Derived from the length so a replay stutters in the same places.
  return new Set([Math.floor(length * 0.28), Math.floor(length * 0.74)]);
}
