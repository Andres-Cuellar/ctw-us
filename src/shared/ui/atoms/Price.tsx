import { cn } from "@/shared/lib/cn";

interface PriceProps {
  amount: string;
  cadence?: string;
  className?: string;
}

/** Tools and packages show price publicly. Website tiers never do. */
export function Price({ amount, cadence, className }: PriceProps) {
  return (
    <p className={cn("type-marquee flex items-baseline gap-1.5", className)} data-numeric>
      <span className="text-[clamp(2rem,4vw,2.7rem)] text-gold">{amount}</span>
      {cadence && (
        <span className="type-eyebrow text-[0.72rem] text-bone-45">{cadence}</span>
      )}
    </p>
  );
}
