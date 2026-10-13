import type { StoreContent } from "@/content/types";
import type { Locale } from "@/shared/config/site";
import { NightScope } from "@/shared/motion/NightScope";
import { CtaButton } from "@/shared/ui/atoms/CtaButton";
import { Panel } from "@/shared/ui/atoms/Panel";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";

interface TiendasProps {
  content: StoreContent;
  locale: Locale;
}

export function Tiendas({ content, locale }: TiendasProps) {
  return (
    <Panel surface="raised" glow="cyan" id="tiendas">
      <NightScope className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <SectionTitle size="lg" className="max-w-[16ch]" data-reveal>
            {content.title}
          </SectionTitle>
          {content.intro && (
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-bone-70" data-reveal>
              {content.intro}
            </p>
          )}
          <div className="mt-9" data-reveal>
            <CtaButton cta={content.cta} locale={locale} variant="gold" size="lg" />
          </div>
        </div>

        <ul className="flex flex-col divide-y divide-bone/10 self-center border-y border-bone/15">
          {content.features.map((feature) => (
            <li key={feature} className="py-4 text-lg text-bone-70" data-reveal>
              {feature}
            </li>
          ))}
        </ul>
      </NightScope>
    </Panel>
  );
}
