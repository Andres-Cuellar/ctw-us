"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

/**
 * Plugins are registered once, at module scope, as GSAP recommends. Every
 * motion hook imports from here so registration cannot be forgotten or
 * repeated inside a re-rendering component.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
}

/** Honoured by every hook in this folder. See docs/BRIEF.md section 4. */
export const FULL_MOTION = "(prefers-reduced-motion: no-preference)";

export { gsap, ScrollTrigger, SplitText, useGSAP };
