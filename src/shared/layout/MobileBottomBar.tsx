"use client";

import { site, type Locale } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

interface MobileBottomBarProps {
  locale?: Locale;
}

export function MobileBottomBar({ locale = "es" }: MobileBottomBarProps) {
  const isEn = locale === "en";

  return (
    <nav
      aria-label={isEn ? "Direct contact actions" : "Acciones de contacto directo"}
      className={cn(
        "fixed inset-x-0 bottom-0 z-[120] md:hidden",
        "border-t border-bone/12 bg-night/95 backdrop-blur-xl",
        "px-4 pt-2.5 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]",
        "shadow-[0_-8px_30px_rgba(0,0,0,0.7)]",
        "[transform:translate3d(0,0,0)] [backface-visibility:hidden]",
      )}
    >
      <div className="mx-auto flex max-w-md items-center gap-3">
        {/* Botón Llamar */}
        <a
          href={site.phone.href}
          aria-label={isEn ? `Call ${site.phone.display}` : `Llamar al ${site.phone.display}`}
          className={cn(
            "flex flex-1 items-center justify-center gap-2 rounded-xl py-3 px-3",
            "bg-gold font-bold text-night text-sm tracking-wide",
            "shadow-[0_0_20px_rgba(236,152,11,0.35)] active:scale-[0.98] transition-transform",
          )}
        >
          <PhoneIcon className="size-4.5 shrink-0" />
          <span>{isEn ? "Call" : "Llamar"}</span>
        </a>

        {/* Botón Enviar SMS */}
        <a
          href={site.sms.href}
          aria-label={isEn ? `Send text message to ${site.sms.display}` : `Enviar mensaje de texto SMS al ${site.sms.display}`}
          className={cn(
            "flex flex-1 items-center justify-center gap-2 rounded-xl py-3 px-3",
            "border border-cyan/40 bg-cyan/15 font-bold text-cyan text-sm tracking-wide",
            "shadow-[0_0_18px_rgba(40,224,240,0.2)] active:scale-[0.98] transition-transform",
            "hover:bg-cyan/25",
          )}
        >
          <SmsIcon className="size-4.5 shrink-0" />
          <span>{isEn ? "Send SMS" : "Enviar SMS"}</span>
        </a>
      </div>
    </nav>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function SmsIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h.01M12 10h.01M16 10h.01" />
    </svg>
  );
}
