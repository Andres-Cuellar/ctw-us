"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getGlobalContent } from "@/content";
import type { Locale } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";
import { withLocale } from "@/shared/lib/routes";
import { CtaButton } from "@/shared/ui/atoms/CtaButton";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const { nav } = getGlobalContent(locale);
  const pathname = usePathname();

  /**
   * Open state is bound to the route it was opened on, so navigating closes the
   * menu during render instead of through an effect that forces a second pass.
   */
  const [menu, setMenu] = useState({ open: false, path: pathname });
  const open = menu.open && menu.path === pathname;
  const toggle = () => setMenu({ open: !open, path: pathname });

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-bone/10 bg-night/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href={withLocale(locale, "/")}
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo.webp"
            alt="creamostuweb"
            width={180}
            height={44}
            priority
            className="h-8 w-auto object-contain sm:h-9"
          />
        </Link>

        <nav aria-label={locale === "en" ? "Primary" : "Principal"} className="hidden items-center gap-7 lg:flex">
          {nav.links.map((link) => {
            const href = withLocale(locale, link.href);
            const active =
              link.href === "/" ? pathname === href : pathname.startsWith(href);

            if (link.children && link.children.length > 0) {
              return (
                <div key={link.href} className="group relative py-2">
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "type-label text-sm transition-colors inline-flex items-center gap-1.5",
                      active ? "text-gold" : "text-bone-70 hover:text-bone",
                    )}
                  >
                    <span>{link.label}</span>
                    <svg
                      aria-hidden
                      viewBox="0 0 10 10"
                      className="size-2.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180 text-bone-45 group-hover:text-gold"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M2 3.5L5 6.5L8 3.5" />
                    </svg>
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="pointer-events-none invisible absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 z-50">
                    <div className="w-[24.5rem] overflow-hidden rounded-2xl border border-bone/15 bg-night-2/95 p-3.5 shadow-2xl backdrop-blur-2xl">
                      <div className="px-3 py-1.5 flex items-center justify-between border-b border-bone/10 pb-2">
                        <span className="type-eyebrow text-[0.6rem] text-gold tracking-widest uppercase font-bold">
                          {locale === "en" ? "Service Categories" : "Categorías de Servicios"}
                        </span>
                        <span className="text-[0.66rem] text-bone-45">
                          {locale === "en" ? "Explore" : "Explorar"}
                        </span>
                      </div>

                      <ul className="mt-2 flex flex-col gap-1.5">
                        {link.children.map((sub) => {
                          const isRec = sub.badge?.includes("★") || sub.badge === "Recomendado" || sub.badge === "Recommended";
                          return (
                            <li key={sub.href}>
                              <Link
                                href={withLocale(locale, sub.href)}
                                className={cn(
                                  "group/item flex flex-col rounded-xl p-2.5 transition-all text-left",
                                  isRec
                                    ? "bg-gold/10 hover:bg-gold/20 border border-gold/40 shadow-[0_0_15px_rgba(237,152,15,0.12)]"
                                    : "hover:bg-bone/8 border border-transparent",
                                )}
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <span className="type-label text-sm text-bone group-hover/item:text-gold flex items-center gap-1.5 font-bold">
                                    {isRec && <span className="text-gold text-xs">★</span>}
                                    {sub.label}
                                  </span>
                                  {sub.badge && (
                                    <span
                                      className={cn(
                                        "rounded-full px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-wider",
                                        isRec
                                          ? "bg-gold text-night shadow-[0_0_8px_rgba(237,152,15,0.4)]"
                                          : "bg-bone/10 text-bone-70",
                                      )}
                                    >
                                      {sub.badge}
                                    </span>
                                  )}
                                </div>
                                {sub.tagline && (
                                  <span className="text-xs text-bone-45 group-hover/item:text-bone-70 mt-0.5">
                                    {sub.tagline}
                                  </span>
                                )}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>

                      <div className="mt-2.5 pt-2 border-t border-bone/10 px-2 flex items-center justify-between text-xs">
                        <Link
                          href={href}
                          className="text-cyan hover:text-bone font-medium transition-colors"
                        >
                          {locale === "en" ? "View all services & tiers →" : "Ver todos los servicios y tiers →"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "type-label text-sm transition-colors",
                  active ? "text-gold" : "text-bone-70 hover:text-bone",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} pathname={pathname} />

          <CtaButton
            cta={nav.cta}
            locale={locale}
            variant="gold"
            className="hidden sm:inline-flex"
          />

          <button
            type="button"
            onClick={toggle}
            aria-label={open ? nav.closeLabel : nav.menuLabel}
            aria-expanded={open}
            aria-controls="menu-movil"
            className="btn btn-tube inline-flex size-11 items-center justify-center p-0 lg:hidden"
          >
            <span className="relative size-5" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={cn("absolute inset-0 size-5 transition-[opacity,transform] duration-200 motion-reduce:transition-none", open ? "rotate-90 opacity-0" : "rotate-0 opacity-100")}>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={cn("absolute inset-0 size-5 transition-[opacity,transform] duration-200 motion-reduce:transition-none", open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0")}>
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        inert={!open}
        aria-hidden={!open}
        className={cn(
          "grid overflow-hidden bg-night transition-[grid-template-rows,opacity,transform] duration-300 ease-out motion-reduce:transition-none lg:hidden",
          open
            ? "grid-rows-[1fr] border-t border-bone/10 opacity-100 translate-y-0"
            : "pointer-events-none grid-rows-[0fr] border-t border-transparent opacity-0 -translate-y-2",
        )}
      >
        <div className="min-h-0 overflow-hidden">
        <nav aria-label={locale === "en" ? "Mobile Navigation" : "Principal móvil"} className="min-h-0 overflow-y-auto px-5 py-5 sm:px-8 max-h-[calc(100dvh-5rem)]">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-bone-45 font-semibold">
              {locale === "en" ? "Language" : "Idioma"}
            </span>
            <LanguageSwitcher locale={locale} pathname={pathname} />
          </div>

          <ul className="flex flex-col divide-y divide-bone/8">
            {nav.links.map((link) => (
              <li key={link.href} className="py-1">
                <Link
                  href={withLocale(locale, link.href)}
                  onClick={() => setMenu({ open: false, path: pathname })}
                  className="type-display block py-3 text-2xl text-bone hover:text-gold"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="mb-3 rounded-xl border border-bone/10 bg-night-2/70 p-3">
                    <p className="type-eyebrow text-[0.62rem] text-gold font-bold uppercase tracking-wider mb-2">
                      {locale === "en" ? "Explore our services:" : "Servicios disponibles:"}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {link.children.map((sub) => {
                        const isRec = sub.badge?.includes("★") || sub.badge === "Recomendado" || sub.badge === "Recommended";
                        return (
                          <li key={sub.href}>
                            <Link
                              href={withLocale(locale, sub.href)}
                              onClick={() => setMenu({ open: false, path: pathname })}
                              className={cn(
                                "flex items-center justify-between rounded-lg p-2 text-sm transition-colors",
                                isRec
                                  ? "bg-gold/15 text-gold font-bold border border-gold/30"
                                  : "text-bone-70 hover:bg-bone/5 hover:text-bone",
                              )}
                            >
                              <div className="flex flex-col">
                                <span className="flex items-center gap-1.5">
                                  {isRec && <span>★</span>}
                                  {sub.label}
                                </span>
                                {sub.tagline && (
                                  <span className="text-[0.72rem] text-bone-45 font-normal">
                                    {sub.tagline}
                                  </span>
                                )}
                              </div>
                              {sub.badge && (
                                <span className="text-[0.65rem] text-gold font-semibold shrink-0">
                                  {sub.badge}
                                </span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <CtaButton
            cta={nav.cta}
            locale={locale}
            variant="gold"
            size="lg"
            className="mt-6 w-full"
          />
          <p className="mt-4 text-sm text-bone-45">
            {locale === "en"
              ? "We respond the same business day."
              : "Te respondemos el mismo día hábil."}
          </p>
        </nav>
        </div>
      </div>
    </header>
  );
}

function LanguageSwitcher({ locale, pathname }: { locale: Locale; pathname: string }) {
  const targetLocale = locale === "es" ? "en" : "es";
  const targetPath = pathname.startsWith(`/${locale}`)
    ? pathname.replace(new RegExp(`^\\/${locale}(\\/|$)`), `/${targetLocale}$1`)
    : `/${targetLocale}`;

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="flex items-center rounded-full border border-bone/15 bg-tube/50 p-0.5 text-xs font-semibold"
    >
      <Link
        href={locale === "es" ? pathname : targetPath}
        className={cn(
          "rounded-full px-2.5 py-1 transition-all",
          locale === "es"
            ? "bg-gold text-night shadow-[0_0_12px_rgba(237,152,15,0.4)] font-bold"
            : "text-bone-70 hover:text-bone",
        )}
        aria-current={locale === "es" ? "true" : undefined}
      >
        ES
      </Link>
      <Link
        href={locale === "en" ? pathname : targetPath}
        className={cn(
          "rounded-full px-2.5 py-1 transition-all",
          locale === "en"
            ? "bg-gold text-night shadow-[0_0_12px_rgba(237,152,15,0.4)] font-bold"
            : "text-bone-70 hover:text-bone",
        )}
        aria-current={locale === "en" ? "true" : undefined}
      >
        EN
      </Link>
    </div>
  );
}
