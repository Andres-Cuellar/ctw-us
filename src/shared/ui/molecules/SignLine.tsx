import type { SplitLine } from "@/content/types";
import { cn } from "@/shared/lib/cn";
import { NeonText, type NeonHue } from "@/shared/ui/atoms/NeonText";

interface SignLineProps {
  /** Used when no split is supplied, so the line always renders. */
  fallback: string;
  line?: SplitLine;
  hue?: NeonHue;
  className?: string;
}

/**
 * A statement whose closing phrase lights up. Both halves come from the content
 * layer — the component only decides the typesetting.
 */
export function SignLine({
  fallback,
  line,
  hue = "gold",
  className,
}: SignLineProps) {
  if (!line) {
    return <p className={cn("type-marquee leading-[1.08] text-bone", className)}>{fallback}</p>;
  }

  return (
    <p className={cn("type-marquee leading-[1.08] text-bone-45", className)}>
      {line.lead}{" "}
      <NeonText hue={hue} stutter={line.stutter}>
        {line.lit}
      </NeonText>
    </p>
  );
}
