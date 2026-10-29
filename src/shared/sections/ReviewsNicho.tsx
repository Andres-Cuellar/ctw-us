"use client";

import { useRef } from "react";
import type { ReviewsContent } from "@/content/types";
import type { Locale } from "@/shared/config/site";
import type { Nicho } from "@/shared/lib/city";
import { useReveal } from "@/shared/motion/useReveal";
import { Eyebrow } from "@/shared/ui/atoms/Eyebrow";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";

interface ReviewsNichoProps {
  content: ReviewsContent;
  locale: Locale;
  nicho: Nicho;
}

export function ReviewsNicho({ content, locale, nicho }: ReviewsNichoProps) {
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

        <div className="space-y-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]" data-reveal>
          {[content.reviews, [...content.reviews].reverse()].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`testimonial-track flex w-max ${rowIndex === 0 ? "testimonial-track-right" : "testimonial-track-left"}`}
              style={{
                animation: rowIndex === 0
                  ? "marquee-slide-reverse 42s linear infinite"
                  : "marquee-slide 42s linear infinite",
              }}
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 gap-4 pr-4" aria-hidden={copy === 1}>
                  {row.map((review, index) => (
                <figure
                  key={`${index}-${review.name}`}
                  className="flex w-[min(20rem,82vw)] shrink-0 flex-col rounded-2xl border border-bone/10 bg-night-2/80 p-5 shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div aria-hidden className={`grid size-11 shrink-0 place-items-center rounded-full text-sm font-bold ${hue === "gold" ? "bg-gold/15 text-gold" : "bg-wine/25 text-wine-light"}`}>
                      {review.name.split(/\s+/).map((part) => part[0]).slice(0, 2).join("")}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-bone">{review.name}</p>
                      <p className="truncate text-xs text-bone-45">
                        {review.business}{review.city ? ` · ${review.city}` : ""}
                      </p>
                    </div>
                  </div>
                  <blockquote className="flex-1 py-4 text-sm leading-relaxed text-bone-70">
                    “{review.quote}”
                  </blockquote>
                  <div className="flex items-center justify-between border-t border-bone/10 pt-3 text-xs text-bone-45">
                    <span className="flex gap-0.5 text-gold" aria-label={locale === "en" ? `${review.rating ?? 5} out of 5 stars` : `${review.rating ?? 5} de 5 estrellas`}>
                      {Array.from({ length: review.rating ?? 5 }).map((_, i) => <span key={i} aria-hidden>★</span>)}
                    </span>
                    <span aria-label={locale === "en" ? "Testimonial" : "Testimonio"}>✦</span>
                  </div>
                </figure>
                  ))}
                </div>
              ))}
            </div>
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
