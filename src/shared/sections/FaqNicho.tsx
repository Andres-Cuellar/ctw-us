"use client";

import { useRef } from "react";
import type { NicheFaqContent } from "@/content/types";
import type { Nicho } from "@/shared/lib/city";
import { useReveal } from "@/shared/motion/useReveal";
import { Eyebrow } from "@/shared/ui/atoms/Eyebrow";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";

interface FaqNichoProps {
  content: NicheFaqContent;
  nicho: Nicho;
}

export function FaqNicho({ content, nicho }: FaqNichoProps) {
  const scope = useRef<HTMLElement>(null);
  useReveal(scope);

  const hue = nicho === "detailing" ? "gold" : "wine";

  return (
    <section
      ref={scope}
      id="preguntas"
      className="relative isolate overflow-hidden bg-night"
    >
      <div className="mx-auto w-full max-w-[1000px] px-5 pt-20 pb-24 sm:px-8 md:pt-24 md:pb-28 lg:px-12">
        <div className="mb-12 max-w-[62ch]" data-reveal>
          <Eyebrow hue={hue}>{content.eyebrow}</Eyebrow>
          <SectionTitle size="lg" split={false} className="mt-4 leading-tight">
            {content.title}
          </SectionTitle>
        </div>

        <div className="flex flex-col gap-3">
          {content.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-bone/10 bg-night-2/60 px-6 py-5 transition-colors open:border-gold/40"
              data-reveal
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-bone [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  aria-hidden
                  className="grid size-7 shrink-0 place-items-center rounded-full border border-gold/40 text-gold transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-bone-70">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
