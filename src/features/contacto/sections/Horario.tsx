import type { HoursContent, MapContent } from "@/content/types";
import { NightScope } from "@/shared/motion/NightScope";
import { Panel } from "@/shared/ui/atoms/Panel";
import { PendingSlot } from "@/shared/ui/atoms/PendingSlot";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";

interface HorarioProps {
  hours: HoursContent;
  map: MapContent;
}

/**
 * Hours and location share one panel: both answer "can I reach you, and
 * where", and split apart they were two thin bands with nothing in them.
 * PH-05: the map embed replaces PendingSlot once a URL exists.
 */
export function Horario({ hours, map }: HorarioProps) {
  return (
    <Panel surface="night">
      <NightScope className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
        <div>
          <SectionTitle size="sm" as="h2" data-reveal>
            {hours.title}
          </SectionTitle>
          <ul className="mt-6 flex flex-col divide-y divide-bone/10 border-y border-bone/15">
            {hours.rows.map((row) => (
              <li key={row} className="py-3.5 text-bone-70" data-reveal>
                {row}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionTitle size="sm" as="h2" data-reveal>
            {map.title}
          </SectionTitle>
          <p className="mt-6 text-bone-70" data-reveal>
            {map.body}
          </p>
          <div className="mt-6" data-reveal>
            <PendingSlot note={map.pendingNote} />
          </div>
        </div>
      </NightScope>
    </Panel>
  );
}
