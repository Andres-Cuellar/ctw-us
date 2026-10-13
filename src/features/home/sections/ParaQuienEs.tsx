import type { AudienceContent } from "@/content/types";
import { cn } from "@/shared/lib/cn";
import { NightScope } from "@/shared/motion/NightScope";
import { Panel } from "@/shared/ui/atoms/Panel";
import { Photo } from "@/shared/ui/atoms/Photo";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";
import { SignLine } from "@/shared/ui/molecules/SignLine";
import { TradeMarquee } from "@/shared/ui/molecules/TradeMarquee";

interface ParaQuienEsProps {
  content: AudienceContent;
}

const CAPTION_HUE = ["neon-gold", "neon-wine", "neon-cyan", "neon-gold"];

/**
 * The street these businesses are on: real shops at work, each with its trade
 * hung over it in neon, set at staggered heights so the row reads as
 * storefronts rather than a grid of thumbnails. Then the full list runs past
 * as a marquee — because a marquee is a sign, the movement is the subject.
 */
export function ParaQuienEs({ content }: ParaQuienEsProps) {
  return (
    <Panel surface="night" className="overflow-hidden">
      <NightScope>
        <SectionTitle size="lg" className="max-w-[18ch]">
          {content.title}
        </SectionTitle>

        {content.gallery && (
          <ul className="mt-14 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {content.gallery.map((item, index) => (
              <li key={item.src} className={cn(index % 2 === 1 && "translate-y-10 md:translate-y-16")}>
                <Photo
                  media={item}
                  className="aspect-[3/4] w-full"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  depth={index % 2 === 0 ? 0.22 : 0.12}
                >
                  <figcaption
                    className={cn(
                      "photo-caption neon text-[clamp(1.3rem,2.4vw,2rem)]",
                      CAPTION_HUE[index % CAPTION_HUE.length],
                    )}
                  >
                    {item.caption}
                  </figcaption>
                </Photo>
              </li>
            ))}
          </ul>
        )}
      </NightScope>

      <div className="mt-24 -mx-5 sm:-mx-8 md:mt-32 lg:-mx-12">
        <TradeMarquee trades={content.trades} />
      </div>

      <NightScope>
        <SignLine
          fallback={content.body}
          line={content.bodySign}
          hue="cyan"
          className="mt-14 max-w-[24ch] text-[clamp(1.7rem,3.8vw,2.9rem)]"
        />
      </NightScope>
    </Panel>
  );
}
