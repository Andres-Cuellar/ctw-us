import type { ChannelsContent } from "@/content/types";
import type { Locale } from "@/shared/config/site";
import { NightScope } from "@/shared/motion/NightScope";
import { CtaButton } from "@/shared/ui/atoms/CtaButton";
import { Panel } from "@/shared/ui/atoms/Panel";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";
import { Sign } from "@/shared/ui/atoms/Sign";

interface CanalesProps {
  content: ChannelsContent;
  locale: Locale;
}

export function Canales({ content, locale }: CanalesProps) {
  return (
    <Panel surface="raised" glow="cyan">
      <NightScope>
        {content.title && (
          <SectionTitle size="md" data-reveal>
            {content.title}
          </SectionTitle>
        )}

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.channels.map((channel) => (
            <li key={channel.kind} className="h-full">
              <Sign className="h-full gap-4" lit={channel.kind === "whatsapp"}>
                <h3 className="type-eyebrow text-[0.6rem] text-gold">
                  {channel.label}
                </h3>
                <p className="type-label text-lg break-words text-bone" data-numeric>
                  {channel.value}
                </p>
                <p className="text-sm text-bone-45">{channel.body}</p>
                <CtaButton
                  cta={channel.cta}
                  locale={locale}
                  variant={channel.kind === "whatsapp" ? "gold" : "tube"}
                  className="mt-auto w-full"
                />
              </Sign>
            </li>
          ))}
        </ul>
      </NightScope>
    </Panel>
  );
}
