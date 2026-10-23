"use client";

import { useRef } from "react";
import type { ProblemContent } from "@/content/types";
import type { Locale } from "@/shared/config/site";
import type { Nicho } from "@/shared/lib/city";
import { useReveal } from "@/shared/motion/useReveal";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";
import { Eyebrow } from "@/shared/ui/atoms/Eyebrow";

interface CrudaRealidadProps {
  content: ProblemContent;
  locale: Locale;
  nicho: Nicho;
}

export function CrudaRealidad({ content, nicho }: CrudaRealidadProps) {
  const scope = useRef<HTMLElement>(null);
  useReveal(scope);

  const hue = nicho === "detailing" ? "gold" : "wine";

  return (
    <section ref={scope} className="relative isolate overflow-hidden bg-night">
      <div className="mx-auto w-full max-w-[1280px] px-5 pt-20 pb-24 sm:px-8 md:pt-24 md:pb-28 lg:px-12">
        {/* Eyebrow + Title */}
        <div className="max-w-[60ch] mb-16" data-reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-1 w-3 rounded-full bg-gold" />
            <Eyebrow hue={hue} data-reveal>
              La cruda realidad
            </Eyebrow>
          </div>
          <SectionTitle size="lg" split={false} className="mt-2 leading-tight text-bone" data-reveal>
            {content.title}
          </SectionTitle>
        </div>

        {/* Pains: three ❌ cards */}
        <div className="grid gap-8 md:grid-cols-3" data-reveal>
          {content.pains.map((pain, i) => (
            <PainCard key={i} text={pain} hue={hue} />
          ))}
        </div>

        {/* Solution closer */}
        <div className="mt-20 flex flex-col items-center gap-6 rounded-2xl border border-gold/30 bg-gold/5 p-8 md:p-12 text-center" data-reveal>
          <div className="inline-flex items-center gap-2 text-gold font-bold text-xs tracking-widest uppercase">
            <svg viewBox="0 0 16 16" className="size-4 stroke-current shrink-0" fill="none" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.5 4.5l-7 7L3 8" />
            </svg>
            <span>EL ATAQUE — La solución</span>
          </div>
          <p className="max-w-[55ch] text-lg leading-relaxed text-bone-70">
            {content.closer}
          </p>
        </div>
      </div>
    </section>
  );
}

function splitPain(text: string): { title: string; body: string } {
  const idx = text.indexOf(": ");
  if (idx === -1) return { title: text, body: "" };
  return { title: text.slice(0, idx), body: text.slice(idx + 2) };
}

function PainCard({
  text,
  hue,
}: {
  text: string;
  hue: "gold" | "wine" | "cyan" | "pink";
}) {
  const accent =
    hue === "gold"
      ? "border-gold/30 hover:border-gold/60"
      : "border-wine/40 hover:border-wine/70";
  const { title, body } = splitPain(text);

  return (
    <div
      className={`group flex h-full flex-col rounded-2xl border bg-night-2/70 p-7 md:p-8 transition-colors ${accent}`}
      data-reveal
    >
      <div className="flex items-start gap-3 mb-3">
        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-400 mt-0.5">
          <svg viewBox="0 0 16 16" className="size-3 stroke-current" fill="none" strokeWidth={2.2} strokeLinecap="round">
            <path d="M4 4l8 8m0-8l-8 8" />
          </svg>
        </span>
        <h3 className="text-bone text-lg font-semibold leading-snug">
          {title}
        </h3>
      </div>
      {body && <p className="text-bone-70 leading-relaxed">{body}</p>}
    </div>
  );
}
