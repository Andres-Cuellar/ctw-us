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
  xl: "text-[clamp(1.85rem,6vw,5.2rem)] font-extrabold tracking-tight leading-[1.08] break-words",
  lg: "text-[clamp(1.55rem,4.4vw,3.8rem)] font-bold tracking-tight leading-[1.12] break-words",
  md: "text-[clamp(1.3rem,3.2vw,2.7rem)] font-bold tracking-tight leading-[1.15] break-words",
  sm: "text-[clamp(1.1rem,2.2vw,1.8rem)] font-semibold tracking-normal leading-[1.2] break-words",
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
