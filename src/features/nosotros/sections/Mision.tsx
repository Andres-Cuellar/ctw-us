import type { MissionContent } from "@/content/types";
import { NightScope } from "@/shared/motion/NightScope";
import { Eyebrow } from "@/shared/ui/atoms/Eyebrow";
import { NeonText } from "@/shared/ui/atoms/NeonText";
import { Panel } from "@/shared/ui/atoms/Panel";

interface MisionProps {
  content: MissionContent;
}

/**
 * One sentence, lit, with the panel to itself. The mission is the strongest
 * line on the page — a heading plus a paragraph would bury it.
 */
export function Mision({ content }: MisionProps) {
  return (
    <Panel surface="raised" glow="gold">
      <NightScope>
        <Eyebrow hue="gold" data-reveal>
          {content.title}
        </Eyebrow>
        <p className="type-marquee mt-8 max-w-[30ch] text-[clamp(1.8rem,5vw,3.6rem)] leading-[1.1]">
          <NeonText hue="gold" stutter="6,34">
            {content.body}
          </NeonText>
        </p>
      </NightScope>
    </Panel>
  );
}
