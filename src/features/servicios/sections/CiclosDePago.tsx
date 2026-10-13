import type { BillingContent } from "@/content/types";
import { NightScope } from "@/shared/motion/NightScope";
import { Panel } from "@/shared/ui/atoms/Panel";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";
import { PricingTable } from "@/shared/ui/molecules/PricingTable";

interface CiclosDePagoProps {
  content: BillingContent;
}

export function CiclosDePago({ content }: CiclosDePagoProps) {
  return (
    <Panel surface="night">
      <NightScope>
        <SectionTitle size="md" data-reveal>
          {content.title}
        </SectionTitle>
        <div className="mt-10">
          <PricingTable content={content} />
        </div>
        <p className="mt-6 max-w-[58ch] text-bone-70" data-reveal>
          {content.body}
        </p>
      </NightScope>
    </Panel>
  );
}
