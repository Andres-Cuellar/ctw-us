import Link from "next/link";
import type { Locale } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

interface PlanesSubmenuProps {
  locale: Locale;
}

export function PlanesSubmenu({ locale }: PlanesSubmenuProps) {
  const isEn = locale === "en";

  const categories = [
    {
      id: "paginas-web",
      name: isEn ? "Websites" : "Páginas Web",
      badge: isEn ? "Financing Available" : "Financiadas",
      tagline: isEn
        ? "Landing pages and business websites that bring customers."
        : "Landing pages, webs de negocio y corporativas que traen clientes.",
      highlights: isEn
        ? "Custom design · Mobile ready · Hosting & SSL"
        : "Diseño a medida · Versión móvil · Hosting & SSL",
      cta: isEn ? "Explore Websites ↓" : "Ver Páginas Web ↓",
      badgeClass: "bg-bone/10 text-bone-70",
      borderClass: "border-bone/15 hover:border-gold/50 bg-night-2/80",
    },
    {
      id: "herramientas",
      name: isEn ? "Tools & CRM" : "Tools (Herramientas)",
      badge: isEn ? "From $47/mo" : "Desde $47/mes",
      tagline: isEn
        ? "CRM, Google reviews, invoicing and 24/7 conversational AI."
        : "CRM, reseñas automáticas, cotizaciones y asistente con IA.",
      highlights: isEn
        ? "Unified inbox · Review engine · AI agent"
        : "Bandeja unificada · Reseñas Google · Asistente IA",
      cta: isEn ? "Explore Tools ↓" : "Ver Herramientas ↓",
      badgeClass: "bg-cyan/15 text-cyan border border-cyan/30",
      borderClass: "border-bone/15 hover:border-cyan/50 bg-night-2/80",
    },
    {
      id: "paquetes",
      name: isEn ? "All-in-One Services" : "Servicio Todo en Uno",
      badge: isEn ? "★ Recommended" : "★ Más Completo",
      tagline: isEn
        ? "Complete systems: Website + CRM + Sales Autopilot automation."
        : "Sistemas comerciales completos: Web + CRM + Máquina de ventas.",
      highlights: isEn
        ? "Growth Engine · Sales Autopilot · Market Leader"
        : "Growth Engine · Sales Autopilot · Market Leader",
      cta: isEn ? "View All-in-One Plans ↓" : "Ver Planes Todo en Uno ↓",
      badgeClass:
        "bg-gold text-night font-bold shadow-[0_0_10px_rgba(237,152,15,0.4)]",
      borderClass:
        "border-2 border-gold/75 bg-gradient-to-b from-[#1b1710] to-night-2 shadow-[0_0_30px_rgba(237,152,15,0.22)]",
      isRecommended: true,
    },
    {
      id: "tiendas",
      name: isEn ? "Online Stores" : "Tiendas en Línea",
      badge: "E-commerce 24/7",
      tagline: isEn
        ? "Sell products with card checkout, inventory and shipping."
        : "Vende productos con tarjeta, inventario y envíos.",
      highlights: isEn
        ? "Apple Pay & cards · Abandoned cart recovery"
        : "Pagos con tarjeta · Recuperación de carritos",
      cta: isEn ? "Explore Stores ↓" : "Ver Tiendas ↓",
      badgeClass: "bg-wine/30 text-bone border border-wine/40",
      borderClass: "border-bone/15 hover:border-wine/60 bg-night-2/80",
    },
  ];

  return (
    <section
      aria-label={isEn ? "Services navigation" : "Navegación de servicios"}
      className="relative z-20 -mt-4 mb-12 px-5 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1280px] rounded-2xl border border-bone/15 bg-night-2/95 p-5 shadow-2xl backdrop-blur-xl sm:p-7 md:p-8">
        {/* Header bar */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-bone/10 pb-5">
          <div>
            <p className="type-eyebrow flex items-center gap-2 text-[0.62rem] text-gold uppercase tracking-widest font-bold">
              <span className="size-1.5 rounded-full bg-gold shadow-[0_0_8px_var(--color-gold)]" />
              {isEn ? "Service Categories" : "Categorías de Servicios"}
            </p>
            <h2 className="type-display mt-1 text-xl font-bold text-bone sm:text-2xl">
              {isEn
                ? "Jump directly to the service you need"
                : "Salta directo a la categoría que tu negocio necesita"}
            </h2>
          </div>
          <p className="text-xs text-bone-45 max-w-[38ch] leading-relaxed">
            {isEn
              ? "Websites, independent tools, e-commerce, or all-in-one scalable systems."
              : "Páginas web, herramientas independientes, tiendas o paquetes todo en uno."}
          </p>
        </div>

        {/* 4 Categories grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`#${cat.id}`}
              className={cn(
                "group relative flex flex-col justify-between rounded-xl p-5 transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-xl",
                cat.borderClass,
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      "type-marquee text-base font-bold text-bone transition-colors group-hover:text-gold sm:text-lg",
                      cat.isRecommended && "text-gold",
                    )}
                  >
                    {cat.name}
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-wider shrink-0",
                      cat.badgeClass,
                    )}
                  >
                    {cat.badge}
                  </span>
                </div>

                <p className="mt-2 text-xs text-bone-70 leading-relaxed">
                  {cat.tagline}
                </p>

                <p className="mt-3 text-[0.72rem] text-bone-45 border-t border-bone/10 pt-2.5">
                  {cat.highlights}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between text-xs font-semibold">
                <span
                  className={cn(
                    "flex items-center gap-1.5 transition-colors",
                    cat.isRecommended
                      ? "text-gold group-hover:underline"
                      : "text-cyan group-hover:text-bone",
                  )}
                >
                  {cat.cta}
                  <span aria-hidden className="transition-transform group-hover:translate-y-0.5">
                    ↓
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
