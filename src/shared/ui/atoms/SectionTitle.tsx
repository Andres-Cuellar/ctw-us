import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: ElementType;
  size?: "xl" | "lg" | "md" | "sm";
  weight?: "extrabold" | "bold" | "semibold" | "medium";
  /**
   * Rise line by line on scroll. Requires a motion scope (NightScope or
   * useSplitReveal) around the title — without one it stays pre-hidden.
   */
  split?: boolean;
}

const SIZE = {
  xl: "text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-tight leading-[1.2] break-words",
  lg: "text-[clamp(1.3rem,2.4vw,1.85rem)] font-bold tracking-tight leading-[1.22] break-words",
  md: "text-[clamp(1.15rem,1.9vw,1.5rem)] font-bold tracking-tight leading-[1.24] break-words",
  sm: "text-[clamp(1rem,1.4vw,1.25rem)] font-semibold tracking-normal leading-[1.25] break-words",
} as const;

const WEIGHT = {
  extrabold: "font-extrabold",
  bold: "font-bold",
  semibold: "font-semibold",
  medium: "font-medium",
} as const;

/** Bone, not neon. Only the signs that carry the argument get lit. */
export function SectionTitle({
  children,
  as: Tag = "h2",
  size = "md",
  weight,
  split = true,
  className,
  ...rest
}: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        "type-display text-bone",
        SIZE[size],
        weight && WEIGHT[weight],
        className,
      )}
      {...rest}
      {...(split ? { "data-split": true } : {})}
    >
      {children}
    </Tag>
  );
}
