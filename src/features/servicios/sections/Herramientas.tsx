import type { ToolsContent } from "@/content/types";
import { NightScope } from "@/shared/motion/NightScope";
import { Panel } from "@/shared/ui/atoms/Panel";
import { Price } from "@/shared/ui/atoms/Price";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";
import { Sign } from "@/shared/ui/atoms/Sign";

interface HerramientasProps {
  content: ToolsContent;
}

/** Tools do show price publicly, unlike the website tiers. */
export function Herramientas({ content }: HerramientasProps) {
  return (
    <Panel surface="night" glow="gold" id="herramientas">
      <NightScope>
        <SectionTitle size="lg" className="max-w-[22ch]" data-reveal>
          {content.title}
        </SectionTitle>
        {content.intro && (
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-bone-70" data-reveal>
            {content.intro}
          </p>
        )}

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {content.tools.map((tool) => (
            <li key={tool.name} className="h-full">
              <Sign className="h-full gap-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h3 className="type-marquee leading-[1.06] max-w-[14ch] text-[clamp(1.5rem,2.6vw,2rem)] text-bone">
                    {tool.name}
                  </h3>
                  <Price amount={tool.price} cadence={tool.cadence} />
                </div>
                <p className="type-label text-lg text-cyan">{tool.pitch}</p>
                <ul className="flex flex-col gap-3 border-t border-bone/12 pt-5">
                  {tool.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[0.95rem] text-bone-70"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-px w-3 shrink-0 bg-bone/30"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Sign>
            </li>
          ))}
        </ul>
      </NightScope>
    </Panel>
  );
}
