import Image from "next/image";
import type { CtaBandContent } from "@/content/types";
import { site, type Locale } from "@/shared/config/site";
import { NightScope } from "@/shared/motion/NightScope";
import { CtaButton } from "@/shared/ui/atoms/CtaButton";
import { NeonText } from "@/shared/ui/atoms/NeonText";
import { Panel } from "@/shared/ui/atoms/Panel";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";

interface CtaFinalProps {
  content: CtaBandContent;
  locale: Locale;
}

/**
 * The closing note. With showPhoneMonument the number is the largest lit thing
 * on the page: for a trades business the number is the storefront, and the
 * whole site has been arguing that calls are what gets lost.
 */
export function CtaFinal({ content, locale }: CtaFinalProps) {
  return (
    <Panel surface="night" glow="gold" className="relative isolate overflow-hidden">
      <NightScope className="text-center">
        {content.backdrop && (
          <div aria-hidden className="absolute inset-0 -z-10">
            <div className="absolute inset-x-0 -inset-y-[15%]" data-parallax="0.25">
              <Image
                src={content.backdrop.src}
                alt={content.backdrop.alt}
                fill
                sizes="100vw"
                className="object-cover [filter:saturate(0.9)_brightness(0.45)]"
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, var(--color-night) 0%, rgb(10 10 15 / 0.55) 30%, rgb(10 10 15 / 0.7) 70%, var(--color-night) 100%)",
              }}
            />
          </div>
        )}

        <SectionTitle size="lg" split={false} className="mx-auto max-w-[20ch]">
          {content.title}
        </SectionTitle>

        {content.body && (
          <p
            className="mx-auto mt-8 max-w-[54ch] text-lg leading-relaxed text-bone"
            data-reveal
          >
            {content.body}
          </p>
        )}

        <div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          data-reveal
        >
          <CtaButton
            cta={content.primaryCta}
            locale={locale}
            variant="gold"
            size="lg"
          />
          {content.secondaryCta && (
            <CtaButton
              cta={content.secondaryCta}
              locale={locale}
              variant="tube"
              size="lg"
            />
          )}
        </div>

        {content.showPhoneMonument && (
          <div className="mt-20">
            <p className="type-eyebrow text-[0.72rem] text-bone-45" data-reveal>
              O llámanos ahora mismo
            </p>
            <a
              href={site.phone.href}
              className="mt-5 block"
              aria-label={`Llamar al ${site.phone.display}`}
            >
              <NeonText
                hue="gold"
                animated={false}
                stutter="3,12"
                className="type-marquee block text-[clamp(2.2rem,9vw,7rem)] leading-none"
              >
                <span data-numeric>{site.phone.display}</span>
              </NeonText>
            </a>
            <p className="mt-6 text-bone-45" data-reveal>
              {site.hours.summary}
            </p>
          </div>
        )}
      </NightScope>
    </Panel>
  );
}
