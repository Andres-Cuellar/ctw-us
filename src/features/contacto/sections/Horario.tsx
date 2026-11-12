import type { HoursContent, MapContent } from "@/content/types";
import { site, type Locale } from "@/shared/config/site";
import { NightScope } from "@/shared/motion/NightScope";
import { CtaButton } from "@/shared/ui/atoms/CtaButton";
import { Panel } from "@/shared/ui/atoms/Panel";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";

interface HorarioProps {
  hours: HoursContent;
  map: MapContent;
  locale: Locale;
}

/**
 * Hours and location share one panel: both answer "can I reach you, and
 * where", and split apart they were two thin bands with nothing in them.
 * The map is a keyless Google Maps embed driven by site.address.
 */
export function Horario({ hours, map, locale }: HorarioProps) {
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
          <address className="mt-6 not-italic" data-reveal>
            <p className="type-label text-lg text-bone" data-numeric>
              {map.address}
            </p>
            <p className="mt-1 text-sm text-bone-45">{map.note}</p>
          </address>
          <div className="mt-6" data-reveal>
            <CtaButton cta={map.cta} locale={locale} variant="tube" />
          </div>
          <div className="mt-6" data-reveal>
            <iframe
              src={site.address.embedHref}
              title={map.embedTitle}
              className="sign h-[22rem] w-full md:h-[26rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </NightScope>
    </Panel>
  );
}
