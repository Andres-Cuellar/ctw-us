import Link from "next/link";
import type { FeaturedServicesContent } from "@/content/types";
import type { Locale } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";
import { resolveCta } from "@/shared/lib/routes";
import { NightScope } from "@/shared/motion/NightScope";
import { Panel } from "@/shared/ui/atoms/Panel";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";
import { ServiceGlyph } from "@/shared/ui/atoms/ServiceGlyph";
import { Sign } from "@/shared/ui/atoms/Sign";

interface ServiciosDestacadosProps {
  content: FeaturedServicesContent;
  locale: Locale;
}

/**
 * A street of signs, not a card grid. The spans are uneven on purpose: six
 * identical boxes in three columns is the shape every template has, and it
 * reads as a list rather than a row of storefronts.
 *
 * Each sign arrives unlit and switches on as it scrolls into view, carries a
 * bent-tube pictogram, and leans toward the cursor.
 */
const SPAN = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-6",
  "lg:col-span-6",
];

export function ServiciosDestacados({
  content,
  locale,
}: ServiciosDestacadosProps) {
  return (
    <Panel surface="night" glow="gold">
      <NightScope>
        <SectionTitle size="md" className="max-w-[22ch]">
          {content.title}
        </SectionTitle>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {content.cards.map((card, index) => {
            const link = resolveCta(card.cta, locale);
            const linkClasses =
              "type-eyebrow mt-auto inline-flex items-center gap-2 self-start pt-8 text-[0.66rem] text-cyan transition-colors hover:text-bone";

            return (
              <li
                key={card.title}
                className={cn("group h-full sm:col-span-1", SPAN[index % SPAN.length])}
                data-tilt
              >
                <Sign className="h-full overflow-hidden">
                  {/* Light from the cursor, sliding across the glass. */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(22rem circle at var(--mx, 50%) var(--my, 50%), rgb(237 152 15 / 0.18), transparent 60%)",
                    }}
                  />
                  {card.icon && (
                    <ServiceGlyph
                      icon={card.icon}
                      className={cn("mb-8", index % 3 === 1 && "text-cyan", index % 3 === 2 && "text-gold")}
                    />
                  )}
                  <h3 className="type-display text-[clamp(1.6rem,2.6vw,2.2rem)] text-bone">
                    {card.title}
                  </h3>
                  <p className="mt-4 max-w-[44ch] leading-relaxed text-bone-70">{card.body}</p>

                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClasses}
                    >
                      {link.label}
                      <span aria-hidden>→</span>
                    </a>
                  ) : (
                    <Link href={link.href} className={linkClasses}>
                      {link.label}
                      <span aria-hidden>→</span>
                    </Link>
                  )}
                </Sign>
              </li>
            );
          })}
        </ul>
      </NightScope>
    </Panel>
  );
}
