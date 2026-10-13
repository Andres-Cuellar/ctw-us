import type { ReasonsContent } from "@/content/types";
import { cn } from "@/shared/lib/cn";
import { NightScope } from "@/shared/motion/NightScope";
import { Panel, type Glow, type Surface } from "@/shared/ui/atoms/Panel";
import { Photo } from "@/shared/ui/atoms/Photo";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";

interface PorQueNosotrosProps {
  content: ReasonsContent;
  surface?: Surface;
  glow?: Glow;
}

/** "Estamos aquí" is a claim about a place, so the place is shown. */
export function PorQueNosotros({
  content,
  surface = "raised",
  glow = "gold",
}: PorQueNosotrosProps) {
  const media = content.media;

  return (
    <Panel surface={surface} glow={glow}>
      <NightScope
        className={cn(
          media && "grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20",
        )}
      >
        {media && (
          <Photo media={media} className="aspect-[4/5] w-full lg:aspect-auto lg:min-h-full">
            <figcaption className="photo-caption neon neon-gold text-[clamp(1.6rem,3vw,2.4rem)]">
              {media.caption}
            </figcaption>
          </Photo>
        )}

        <div>
          <SectionTitle size="lg" className="max-w-[18ch]">
            {content.title}
          </SectionTitle>

          <ul className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {content.reasons.map((reason) => (
              <li key={reason.title} data-reveal>
                <span
                  aria-hidden
                  className="block h-[2px] w-14 bg-gold shadow-[0_0_10px_var(--color-gold)]"
                />
                <h3 className="type-display mt-6 text-[clamp(1.5rem,2.4vw,2rem)] text-bone">
                  {reason.title}
                </h3>
                <p className="mt-4 max-w-[42ch] leading-relaxed text-bone-70">{reason.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </NightScope>
    </Panel>
  );
}
