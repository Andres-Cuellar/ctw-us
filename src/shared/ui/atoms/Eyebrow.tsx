import type { HTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  children: string;
  hue?: "gold" | "wine" | "cyan" | "bone" | "pink";
}

const HUE = {
  gold: "text-gold",
  wine: "text-wine-light",
  pink: "text-wine-light",
  cyan: "text-cyan",
  bone: "text-bone-45",
} as const;

export function Eyebrow({
  children,
  className,
  hue = "gold",
  ...rest
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "type-eyebrow flex items-center gap-3 text-[0.68rem]",
        HUE[hue],
        className,
      )}
      {...rest}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
      {children}
    </p>
  );
}
