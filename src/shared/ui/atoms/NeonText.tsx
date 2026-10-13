import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

export type NeonHue = "gold" | "wine" | "cyan" | "pink";

const HUE: Record<NeonHue, string> = {
  gold: "neon-gold",
  wine: "neon-wine",
  pink: "neon-wine",
  cyan: "neon-cyan",
};

interface NeonTextProps {
  children: ReactNode;
  hue?: NeonHue;
  /** Lights character by character on scroll. Off for small or inline uses. */
  animated?: boolean;
  /** Character indices that should hesitate before holding. */
  stutter?: string;
  className?: string;
}

/**
 * Lit tube lettering. Reserved for the signs that carry the argument — the
 * hero, the mission, the phone number, the service names — never body copy,
 * which stays bone so it is readable.
 */
export function NeonText({
  children,
  hue = "gold",
  animated = true,
  stutter,
  className,
}: NeonTextProps) {
  return (
    <span
      className={cn("neon", HUE[hue], className)}
      {...(animated ? { "data-sign": true } : {})}
      {...(stutter ? { "data-sign-stutter": stutter } : {})}
    >
      {children}
    </span>
  );
}
