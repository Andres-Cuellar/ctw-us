import type { SolutionContent } from "@/content/types";
import { NightScope } from "@/shared/motion/NightScope";
import { Panel } from "@/shared/ui/atoms/Panel";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";
import { DashboardMock } from "@/shared/ui/molecules/DashboardMock";

interface SolucionProps {
  content: SolutionContent;
}

/** The pivot from problem to offer — and the first look at the product. */
export function Solucion({ content }: SolucionProps) {
  return (
    <Panel surface="raised" glow="cyan">
      <NightScope className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
        <div>
          <SectionTitle size="md" className="max-w-[18ch]">
            {content.title}
          </SectionTitle>
          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-bone-70" data-reveal>
            {content.body}
          </p>
        </div>

        {content.dashboard && (
          <div data-reveal>
            <DashboardMock content={content.dashboard} />
          </div>
        )}
      </NightScope>
    </Panel>
  );
}
