"use client";

import { useRef, type ReactNode } from "react";
import { useCounters } from "./useCounters";
import { useDraw } from "./useDraw";
import { useImageReveal } from "./useImageReveal";
import { useNeonSign } from "./useNeonSign";
import { useParallax } from "./useParallax";
import { useReveal } from "./useReveal";
import { useSequence } from "./useSequence";
import { useSignSwitch } from "./useSignSwitch";
import { useSplitReveal } from "./useSplitReveal";
import { useTilt } from "./useTilt";

interface NightScopeProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps a server-rendered section and wires the whole motion vocabulary to it:
 * neon lettering, sign panels switching on, split headlines, photo shutters,
 * parallax, tilt, drawn lines, lit sequences, scroll reveals and counters. One
 * scope per section keeps the ScrollTrigger count proportional to the page.
 */
export function NightScope({ children, className }: NightScopeProps) {
  const scope = useRef<HTMLDivElement>(null);

  useNeonSign(scope);
  useSignSwitch(scope);
  useReveal(scope);
  useCounters(scope);
  useSplitReveal(scope);
  useImageReveal(scope);
  useParallax(scope);
  useTilt(scope);
  useDraw(scope);
  useSequence(scope);

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
