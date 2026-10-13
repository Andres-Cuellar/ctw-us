import type { StepsContent } from "@/content/types";
import { NightScope } from "@/shared/motion/NightScope";
import { Panel } from "@/shared/ui/atoms/Panel";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";
import { StepList } from "@/shared/ui/molecules/StepList";

interface ComoFuncionaProps {
  content: StepsContent;
}

export function ComoFunciona({ content }: ComoFuncionaProps) {
  return (
    <Panel surface="night">
      <NightScope>
        <SectionTitle size="md" data-reveal>
          {content.title}
        </SectionTitle>
        <div className="mt-16">
          <StepList steps={content.steps} />
        </div>
      </NightScope>
    </Panel>
  );
}
