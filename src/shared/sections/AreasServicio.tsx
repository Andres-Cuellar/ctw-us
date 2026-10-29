import type { Locale } from "@/shared/config/site";
import type { Nicho } from "@/shared/lib/city";
import { NICHO_CITIES, cityBySlug, cityDisplay, nichoPath } from "@/shared/lib/city";
import { withLocale } from "@/shared/lib/routes";
import { NightScope } from "@/shared/motion/NightScope";
import { SectionTitle } from "@/shared/ui/atoms/SectionTitle";
import { Eyebrow } from "@/shared/ui/atoms/Eyebrow";

interface AreasServicioProps {
  locale: Locale;
  nicho: Nicho;
  /** Ciudad activa, para no auto-enlazar y para marcarla visualmente. */
  currentCity: string;
  label: string;
}

const NICHO_LABEL: Record<Nicho, string> = {
  detailing: "Detailing",
  "salon-spa": "Salón / Spa",
};

export function AreasServicio({
  locale,
  nicho,
  currentCity,
  label,
}: AreasServicioProps) {
  const current = cityBySlug(currentCity);

  return (
    <section className="relative isolate overflow-hidden bg-night">
      <NightScope>
        <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
          <Eyebrow hue="gold" data-reveal>
            {locale === "en" ? "Service areas" : "Áreas de Servicio"}
          </Eyebrow>
          <SectionTitle size="lg" split={false} className="mt-4 max-w-[34ch]" data-reveal>
            {label}
          </SectionTitle>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-bone-70" data-reveal>
            {locale === "en"
              ? "We help you reach customers in every city you serve. Each link leads to a dedicated local page."
              : "Posicionamos tu negocio en cada ciudad donde atendemos. Cada enlace es una página dedicada con el sistema listo para ese mercado."}
          </p>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" data-reveal>
            {NICHO_CITIES.map((city) => {
              const isCurrent = current?.slug === city.slug;
              const href = withLocale(locale, nichoPath(nicho, city));
              return (
                <a
                  key={city.slug}
                  href={href}
                  className={`
                    block rounded-xl border p-4 text-sm leading-relaxed transition-all
                    ${isCurrent
                      ? "border-gold/60 bg-gold/10 text-gold shadow-[0_0_20px_rgba(237,152,15,0.25)]"
                      : "border-bone/10 bg-night/80 text-bone-70 hover:border-gold/50 hover:text-gold hover:shadow-[0_0_16px_rgba(237,152,15,0.15)]"
                  }`}
                >
                  {locale === "en" ? (nicho === "detailing" ? "Detailing" : "Salon / Spa") : NICHO_LABEL[nicho]} {locale === "en" ? "in" : "en"} {locale === "en" ? cityDisplay(city).replace("Los Ángeles", "Los Angeles") : cityDisplay(city)}
                  {isCurrent && (
                    <span className="ml-2 text-[0.62rem] text-bone-45 uppercase tracking-wider">
                      {locale === "en" ? "here" : "aquí"}
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          <p className="mt-10 max-w-[60ch] text-sm text-bone-45" data-reveal>
            {locale === "en" ? "Don't see your city? Message us on WhatsApp to discuss a local page for your business." : "¿Tu ciudad no aparece? Escríbenos por WhatsApp y activamos tu página hoy mismo."}
          </p>
        </div>
      </NightScope>
    </section>
  );
}
