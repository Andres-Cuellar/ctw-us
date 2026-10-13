import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

export type Surface = "night" | "raised";
export type Glow = "wine" | "gold" | "cyan" | "pink" | "none";

const SURFACE: Record<Surface, string> = {
  night: "bg-night",
  raised: "bg-night",
};

const GLOW: Record<Glow, string> = {
  none: "",
  wine: "bloom bloom-wine",
  pink: "bloom bloom-wine",
  cyan: "bloom bloom-cyan",
  gold: "bloom bloom-gold",
};

interface PanelProps {
  children: ReactNode;
  surface?: Surface;
  glow?: Glow;
  id?: string;
  /** The lit filament that separates panels. */
  filament?: boolean;
  size?: "default" | "tight";
  className?: string;
  as?: "section" | "div" | "footer";
}

/**
 * A band on the night. Panels are separated by a lit filament rather than a
 * hard rule, and carry an optional ambient bloom so the dark has depth instead
 * of reading as an empty rectangle.
 */
export function Panel({
  children,
  surface = "night",
  glow = "none",
  id,
  filament = true,
  size = "default",
  className,
  as: Tag = "section",
}: PanelProps) {
  return (
    <>
      {filament && <hr className="filament border-0" aria-hidden />}
      <Tag
        id={id}
        className={cn(
          SURFACE[surface],
          GLOW[glow],
          "overflow-hidden",
          size === "tight" ? "py-14 md:py-20" : "py-panel md:py-panel-lg",
          className,
        )}
      >
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          {children}
        </div>
      </Tag>
    </>
  );
}
