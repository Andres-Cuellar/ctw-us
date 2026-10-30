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

export function CrudaRealidad({ content, locale, nicho }: CrudaRealidadProps) {
  const scope = useRef<HTMLElement>(null);
  useReveal(scope);

  const hue = nicho === "detailing" ? "gold" : "wine";

  return (
    <section ref={scope} className="relative isolate overflow-hidden bg-night">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="mb-12 max-w-[760px] text-left" data-reveal>
          <div className="mb-5 flex justify-start">
            <Eyebrow hue={hue} data-reveal>
              {locale === "en" ? "The real challenge" : "La cruda realidad"}
            </Eyebrow>
          </div>
          <SectionTitle size="lg" split={false} className="max-w-[24ch] leading-tight text-bone" data-reveal>
            {content.title}
          </SectionTitle>
        </div>

        <div className="grid gap-4 md:grid-cols-12 md:gap-5" data-reveal>
          {content.pains.map((pain, i) => (
            <PainCard key={i} text={pain} hue={hue} index={i} />
          ))}
          <div className={`flex min-h-[245px] flex-col rounded-2xl border p-6 sm:p-8 md:col-span-7 md:p-9 ${hue === "gold" ? "border-gold/45 bg-gradient-to-br from-gold/15 via-night-2 to-night-2" : "border-wine/55 bg-gradient-to-br from-wine/20 via-night-2 to-night-2"}`} data-reveal>
            <span className={`mb-7 grid size-12 place-items-center rounded-xl border ${hue === "gold" ? "border-gold/40 bg-gold/15 text-gold" : "border-wine/50 bg-wine/25 text-wine-light"}`}>
              <svg aria-hidden viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m4 12 5 5L20 6" /></svg>
            </span>
            <h3 className="text-xl font-semibold leading-snug text-bone sm:text-2xl">
              {locale === "en" ? "The solution" : "EL ATAQUE — La solución"}
            </h3>
            <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-bone-70 sm:text-base">
              {content.closer.replace(/^(EL ATAQUE \(La solución\)|The solution):\s*/, "")}
            </p>
          </div>
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
  index,
}: {
  text: string;
  hue: "gold" | "wine" | "cyan" | "pink";
  index: number;
}) {
  const { title, body } = splitPain(text);

  return (
    <div
      className={`group flex min-h-[245px] flex-col rounded-2xl border border-bone/12 bg-night-2/75 p-6 transition-[border-color,transform] hover:-translate-y-1 sm:p-8 md:p-9 ${index === 0 ? "md:col-span-7" : "md:col-span-5"} ${hue === "gold" ? "hover:border-gold/50" : "hover:border-wine/60"}`}
      data-reveal
    >
      <span className="mb-7 grid size-12 place-items-center rounded-xl border border-rose-400/25 bg-rose-400/10 text-rose-300">
        <PainIcon index={index} />
      </span>
      <h3 className="text-lg font-semibold leading-snug text-bone sm:text-xl">{title}</h3>
      {body && <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-bone-70 sm:text-base">{body}</p>}
    </div>
  );
}

function PainIcon({ index }: { index: number }) {
  if (index === 0) return <svg aria-hidden viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-3l-5-2-2 2a14 14 0 0 1-6-6l2-2-2-5Z"/><path d="m15 3 6 6m0-6-6 6"/></svg>;
  if (index === 1) return <svg aria-hidden viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17h5l4-4 3 2 6-8"/><path d="M16 7h5v5"/><path d="M3 21h18"/></svg>;
  return <svg aria-hidden viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-12 4 6 5m0-5-6 5"/></svg>;
}
