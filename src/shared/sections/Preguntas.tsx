import type { FaqContent } from "@/content/types";
import { NightScope } from "@/shared/motion/NightScope";
import { Panel, type Glow, type Surface } from "@/shared/ui/atoms/Panel";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";
import { FaqList } from "@/shared/ui/molecules/FaqList";

interface PreguntasProps {
  content: FaqContent;
  id?: string;
  surface?: Surface;
  glow?: Glow;
}

export function Preguntas({
  content,
  id = "preguntas",
  surface = "raised",
  glow = "none",
}: PreguntasProps) {
  return (
    <Panel surface={surface} glow={glow} id={id}>
      <NightScope className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
        <SectionTitle size="md" data-reveal>
          {content.title}
        </SectionTitle>
        <FaqList items={content.items} />
      </NightScope>
    </Panel>
  );
}
