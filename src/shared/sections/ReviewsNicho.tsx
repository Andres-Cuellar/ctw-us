"use client";

import { useRef } from "react";
import type { ReviewsContent } from "@/content/types";
import type { Nicho } from "@/shared/lib/city";
import { useReveal } from "@/shared/motion/useReveal";
import { Eyebrow } from "@/shared/ui/atoms/Eyebrow";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";

interface ReviewsNichoProps {
  content: ReviewsContent;
  nicho: Nicho;
}

export function ReviewsNicho({ content, nicho }: ReviewsNichoProps) {
  const scope = useRef<HTMLElement>(null);
  useReveal(scope);

  const hue = nicho === "detailing" ? "gold" : "wine";

  return (
    <section
      ref={scope}
      id="resenas"
      className="relative isolate overflow-hidden bg-night"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 pt-20 pb-24 sm:px-8 md:pt-24 md:pb-28 lg:px-12">
        <div className="max-w-[62ch] mb-12" data-reveal>
          <Eyebrow hue={hue}>{content.eyebrow}</Eyebrow>
          <SectionTitle size="lg" split={false} className="mt-4 leading-tight">
            {content.title}
          </SectionTitle>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {content.reviews.map((review) => (
            <figure
              key={`${review.name}-${review.business}`}
              className="flex h-full flex-col rounded-2xl border border-bone/10 bg-night-2/70 p-7"
              data-reveal
            >
              <div
                className="mb-4 flex gap-1 text-gold"
                aria-label={`${review.rating ?? 5} de 5 estrellas`}
              >
                {Array.from({ length: review.rating ?? 5 }).map((_, i) => (
                  <span key={i} aria-hidden>
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="flex-1 text-bone-70 leading-relaxed">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-bone/10 pt-4">
                <p className="text-sm font-semibold text-bone">{review.name}</p>
                <p className="mt-1 text-xs text-bone-45">
                  {review.business}
                  {review.city ? ` · ${review.city}` : ""}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {content.disclaimer && (
          <p className="mt-8 max-w-[70ch] text-xs leading-relaxed text-bone-45" data-reveal>
            {content.disclaimer}
          </p>
        )}
      </div>
    </section>
  );
}
