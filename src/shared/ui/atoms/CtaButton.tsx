import Link from "next/link";
import type { Cta } from "@/content/types";
import type { Locale } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";
import { resolveCta } from "@/shared/lib/routes";

export type ButtonVariant = "gold" | "wine" | "tube" | "pink";

const VARIANT: Record<ButtonVariant, string> = {
  gold: "btn-gold",
  wine: "btn-wine",
  pink: "btn-pink",
  tube: "btn-tube",
};

interface CtaButtonProps {
  cta: Cta;
  locale: Locale;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  className?: string;
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-4 shrink-0 fill-current">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.26.86 5.81 2.42a8.16 8.16 0 0 1 2.41 5.82c0 4.54-3.7 8.21-8.23 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.13-.17.25-.65.81-.8.97-.14.17-.29.19-.54.07-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.03-.44-.07-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.6c.12.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.52.6.19 1.14.17 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className="size-3.5 shrink-0 transition-transform group-hover:translate-x-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10m-4-4 4 4-4 4" />
    </svg>
  );
}

export function CtaButton({
  cta,
  locale,
  variant = "gold",
  size = "md",
  className,
}: CtaButtonProps) {
  const { label, href, external } = resolveCta(cta, locale);
  // Remove any legacy emoji prefix from label
  const cleanLabel = label.replace(/^[\p{Emoji}\uFE0F\s]+/u, "").trim();

  const isWhatsApp = cta.kind === "whatsapp";
  const hasArrow = cta.kind === "anchor" || cta.kind === "apply";

  const content = (
    <span className="inline-flex items-center justify-center gap-2">
      {isWhatsApp && <WhatsAppIcon />}
      <span>{cleanLabel}</span>
      {hasArrow && <ArrowIcon />}
    </span>
  );

  const classes = cn(
    "btn group",
    VARIANT[variant],
    size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm",
    className,
  );

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
