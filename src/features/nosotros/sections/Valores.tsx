import type { ValuesContent } from "@/content/types";
import { NightScope } from "@/shared/motion/NightScope";
import { Panel } from "@/shared/ui/atoms/Panel";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";

interface ValoresProps {
  content: ValuesContent;
}

export function Valores({ content }: ValoresProps) {
  return (
    <Panel surface="night">
      <NightScope>
        {content.title && (
          <SectionTitle size="md" data-reveal>
            {content.title}
          </SectionTitle>
        )}
        <dl className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {content.values.map((value) => (
            <div key={value.title} data-reveal>
              <span
                aria-hidden
                className="block h-px w-12 bg-cyan shadow-[0_0_10px_var(--color-cyan)]"
              />
              <dt className="type-marquee mt-5 text-[clamp(1.3rem,2.2vw,1.7rem)] text-bone">
                {value.title}
              </dt>
              <dd className="mt-3 text-bone-70">{value.body}</dd>
            </div>
          ))}
        </dl>
      </NightScope>
    </Panel>
  );
}
