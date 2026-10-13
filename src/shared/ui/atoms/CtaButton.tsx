import Link from "next/link";
import type { Cta } from "@/content/types";
import type { Locale } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";
import { resolveCta } from "@/shared/lib/routes";

export type ButtonVariant = "gold" | "wine" | "tube" | "pink";

/**
 * Lit fills take night-coloured text on gold for maximum contrast and readability.
 * Wine variant provides a rich, elegant burgundy accent.
 */
const VARIANT: Record<ButtonVariant, string> = {
  gold: "btn-gold",
  wine: "btn-wine",
  pink: "btn-gold",
  tube: "btn-tube",
};

interface CtaButtonProps {
  cta: Cta;
  locale: Locale;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  className?: string;
}

export function CtaButton({
  cta,
  locale,
  variant = "gold",
  size = "md",
  className,
}: CtaButtonProps) {
  const { label, href, external } = resolveCta(cta, locale);

  const classes = cn(
    "btn",
    VARIANT[variant],
    size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm",
    className,
  );

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a className={classes} href={href}>
        {label}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {label}
    </Link>
  );
}
