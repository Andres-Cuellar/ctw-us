import type { ServiceIcon } from "@/content/types";
import { cn } from "@/shared/lib/cn";

interface ServiceGlyphProps {
  icon: ServiceIcon;
  className?: string;
}

/**
 * Bent-tube pictograms. Drawn as single strokes with round caps, the way a
 * neon bender would shape them, and lit with the same glow as the lettering.
 */
const PATHS: Record<ServiceIcon, string[]> = {
  web: ["M4 7h24v16H4z", "M4 11h24", "M7 9h.01M10 9h.01", "M10 27h12", "M16 23v4"],
  store: ["M5 11l2-6h18l2 6", "M5 11v15h22V11", "M5 11h22", "M13 26v-7h6v7"],
  crm: ["M16 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8", "M25 9a3 3 0 1 1 0 6", "M27 25c0-2.8-1.5-5-4-6"],
  reviews: ["M16 4l3.6 7.4 8.1 1.2-5.9 5.7 1.4 8.1L16 22.6l-7.2 3.8 1.4-8.1-5.9-5.7 8.1-1.2z"],
  call: ["M8 5h5l2 6-3 2c1.4 3 3.6 5.2 6.6 6.6l2-3 6 2v5c0 1.1-.9 2-2 2C14.4 25.6 6.4 17.6 6 7c0-1.1.9-2 2-2z", "M20 5h7v7", "M27 5l-7 7"],
  ai: ["M6 8h20v13H14l-6 5v-5H6z", "M12 14.5h.01M16 14.5h.01M20 14.5h.01"],
};

export function ServiceGlyph({ icon, className }: ServiceGlyphProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn(
        "size-10 text-gold [filter:drop-shadow(0_0_4px_currentColor)_drop-shadow(0_0_12px_currentColor)]",
        className,
      )}
    >
      {PATHS[icon].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
