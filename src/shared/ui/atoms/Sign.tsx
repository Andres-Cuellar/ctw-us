import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

interface SignProps {
  children: ReactNode;
  /** Arrives unlit and switches on when it scrolls into view. */
  switches?: boolean;
  /** Already lit and stays lit — for the recommended option. */
  lit?: boolean;
  className?: string;
}

/** A panel raised off the night with a hairline tube edge. */
export function Sign({
  children,
  switches = true,
  lit = false,
  className,
}: SignProps) {
  const animate = switches && !lit;

  return (
    <div
      className={cn(
        "sign flex flex-col p-7 md:p-9",
        lit ? "sign-switch is-lit" : animate && "sign-switch",
        className,
      )}
      {...(animate ? { "data-sign-panel": true } : {})}
    >
      {children}
    </div>
  );
}
