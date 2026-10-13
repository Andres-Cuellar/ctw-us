import type { TestimonialsContent } from "@/content/types";
import { NightScope } from "@/shared/motion/NightScope";
import { Panel } from "@/shared/ui/atoms/Panel";
import { PendingSlot } from "@/shared/ui/atoms/PendingSlot";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";
import { Sign } from "@/shared/ui/atoms/Sign";

interface TestimoniosProps {
  content: TestimonialsContent;
}

/**
 * PH-01. Until real, permissioned testimonials exist this renders an honest
 * pending slot. Inventing social proof for an agency that sells trust to people
 * who have already been burned is not an option.
 */
export function Testimonios({ content }: TestimoniosProps) {
  const hasItems = content.items.length > 0;

  return (
    <Panel surface="night">
      <NightScope>
        <SectionTitle size="md" data-reveal>
          {content.title}
        </SectionTitle>

        {hasItems ? (
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {content.items.map((item) => (
              <li key={`${item.name}-${item.business}`} className="h-full">
                <Sign className="h-full gap-6">
                  <blockquote className="text-lg leading-relaxed text-bone">
                    “{item.quote}”
                  </blockquote>
                  <footer className="mt-auto">
                    <p className="type-label text-bone">{item.name}</p>
                    <p className="text-sm text-bone-45">{item.business}</p>
                  </footer>
                </Sign>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10" data-reveal>
            <PendingSlot note={content.pendingNote} />
          </div>
        )}
      </NightScope>
    </Panel>
  );
}
