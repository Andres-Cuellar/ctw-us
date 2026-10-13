import type { PaymentsContent } from "@/content/types";
import { NightScope } from "@/shared/motion/NightScope";
import { Panel } from "@/shared/ui/atoms/Panel";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";

interface MetodosDePagoProps {
  content: PaymentsContent;
}

/**
 * PH-06: brand logos are not available yet, so the methods render as tube
 * wordmarks. That reads as a deliberate type treatment rather than a row of
 * missing images.
 */
export function MetodosDePago({ content }: MetodosDePagoProps) {
  return (
    <Panel surface="raised">
      <NightScope>
        <SectionTitle size="md" data-reveal>
          {content.title}
        </SectionTitle>
        <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-bone-70" data-reveal>
          {content.body}
        </p>

        <ul className="mt-10 flex flex-wrap gap-3">
          {content.methods.map((method) => (
            <li
              key={method}
              className="type-label rounded-full border border-bone/20 px-4 py-2 text-sm text-bone-70"
              data-reveal
            >
              {method}
            </li>
          ))}
        </ul>

        <p className="mt-9 max-w-[70ch] text-sm text-bone/35" data-reveal>
          {content.fineprint}
        </p>
      </NightScope>
    </Panel>
  );
}
