"use client";

import { useRef } from "react";
import type { SystemContent } from "@/content/types";
import type { Nicho } from "@/shared/lib/city";
import { useReveal } from "@/shared/motion/useReveal";
import { Eyebrow } from "@/shared/ui/atoms/Eyebrow";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";
import { ServiceGlyph } from "@/shared/ui/atoms/ServiceGlyph";

interface SistemaNichoProps {
  content: SystemContent;
  nicho: Nicho;
}

export function SistemaNicho({ content, nicho }: SistemaNichoProps) {
  const scope = useRef<HTMLElement>(null);
  useReveal(scope);

  const hue = nicho === "detailing" ? "gold" : "wine";
  const glyph = nicho === "detailing" ? "text-gold" : "text-wine-light";

  return (
    <section
      ref={scope}
      id="sistema"
      className="relative isolate overflow-hidden bg-night"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 pt-20 pb-24 sm:px-8 md:pt-28 md:pb-28 lg:px-12">
        <div className="max-w-[62ch] mb-14" data-reveal>
          <Eyebrow hue={hue}>{content.eyebrow}</Eyebrow>
          <SectionTitle
            size="lg"
            split={false}
            className="mt-4 max-w-[24ch] leading-tight"
          >
            {content.title}
          </SectionTitle>
          {content.body && (
            <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-bone-70">
              {content.body}
            </p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.features.map((feature) => (
            <div
              key={feature.title}
              className="group flex h-full flex-col rounded-2xl border border-bone/10 bg-night-2/60 p-6 transition-colors hover:border-gold/40 md:p-7"
              data-reveal
            >
              <ServiceGlyph
                icon={feature.icon}
                className={`size-9 ${glyph} opacity-90`}
              />
              <h3 className="mt-5 text-lg font-semibold leading-snug text-bone">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-70">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
