import type { StoryContent } from "@/content/types";
import { NightScope } from "@/shared/motion/NightScope";
import { Panel } from "@/shared/ui/atoms/Panel";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";

interface HistoriaProps {
  content: StoryContent;
}

export function Historia({ content }: HistoriaProps) {
  return (
    <Panel surface="night">
      <NightScope className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-20">
        <SectionTitle size="md" data-reveal>
          {content.title}
        </SectionTitle>
        <div className="flex max-w-[64ch] flex-col gap-6 text-lg leading-relaxed">
          {content.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 32)}
              className={index === 0 ? "text-bone" : "text-bone-70"}
              data-reveal
            >
              {paragraph}
            </p>
          ))}
        </div>
      </NightScope>
    </Panel>
  );
}
