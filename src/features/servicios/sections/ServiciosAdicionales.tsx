import type { AddOnsContent } from "@/content/types";
import type { Locale } from "@/shared/config/site";
import { NightScope } from "@/shared/motion/NightScope";
import { CtaButton } from "@/shared/ui/atoms/CtaButton";
import { Panel } from "@/shared/ui/atoms/Panel";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";

interface ServiciosAdicionalesProps {
  content: AddOnsContent;
  locale: Locale;
}

export function ServiciosAdicionales({
  content,
  locale,
}: ServiciosAdicionalesProps) {
  return (
    <Panel surface="night">
      <NightScope className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
        <div>
          <SectionTitle size="md" data-reveal>
            {content.title}
          </SectionTitle>
          <div className="mt-9" data-reveal>
            <CtaButton cta={content.cta} locale={locale} variant="tube" size="lg" />
          </div>
        </div>

        <ul className="grid gap-x-10 sm:grid-cols-2">
          {content.items.map((item) => (
            <li
              key={item}
              className="border-b border-bone/10 py-4 text-lg text-bone-70"
              data-reveal
            >
              {item}
            </li>
          ))}
        </ul>
      </NightScope>
    </Panel>
  );
}
