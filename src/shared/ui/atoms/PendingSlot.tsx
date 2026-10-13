import { cn } from "@/shared/lib/cn";

interface PendingSlotProps {
  note: string;
  className?: string;
}

/**
 * Where real content is still missing — testimonials, figures, calendar, map.
 * Deliberately visible rather than fabricated: an agency selling trust to
 * people who have already been burned does not get to invent social proof.
 * See docs/BRIEF.md section 7.
 */
export function PendingSlot({ note, className }: PendingSlotProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-sign)] border border-dashed border-bone/20 bg-night-2/60 p-6 md:p-8",
        className,
      )}
    >
      <p className="max-w-[54ch] text-bone-70">{note}</p>
    </div>
  );
}
