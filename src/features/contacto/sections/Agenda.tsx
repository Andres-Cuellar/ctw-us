import type { BookingContent } from "@/content/types";
import { site } from "@/shared/config/site";
import { ANCHORS } from "@/shared/lib/routes";
import { NightScope } from "@/shared/motion/NightScope";
import { Panel } from "@/shared/ui/atoms/Panel";
import { PendingSlot } from "@/shared/ui/atoms/PendingSlot";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";

interface AgendaProps {
  content: BookingContent;
}

/** PH-04: calendar embed pending. Drop the iframe in place of PendingSlot. */
export function Agenda({ content }: AgendaProps) {
  const calendar = site.external.bookingCalendar;

  return (
    <Panel surface="night" id={ANCHORS.booking}>
      <NightScope>
        <SectionTitle size="md" className="max-w-[24ch]" data-reveal>
          {content.title}
        </SectionTitle>
        <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-bone-70" data-reveal>
          {content.body}
        </p>

        <div className="mt-10" data-reveal>
          {calendar ? (
            <iframe
              src={calendar}
              title={content.title}
              className="sign h-[42rem] w-full"
              loading="lazy"
            />
          ) : (
            <PendingSlot note={content.pendingNote} />
          )}
        </div>
      </NightScope>
    </Panel>
  );
}
