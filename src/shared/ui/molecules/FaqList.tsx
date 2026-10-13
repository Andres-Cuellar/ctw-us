import type { FaqItem } from "@/content/types";

interface FaqListProps {
  items: FaqItem[];
}

/**
 * Native details/summary. No JavaScript, keyboard accessible by default, and
 * the answers sit in the DOM for search engines.
 */
export function FaqList({ items }: FaqListProps) {
  return (
    <div className="divide-y divide-bone/12 border-y border-bone/12">
      {items.map((item) => (
        <details key={item.question} className="group" data-reveal>
          <summary className="type-label flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg text-bone marker:hidden hover:text-gold">
            <span>{item.question}</span>
            <span
              aria-hidden
              className="mt-1 grid size-7 shrink-0 place-items-center rounded-full border border-bone/25 text-sm leading-none transition-all group-open:rotate-45 group-open:border-gold group-open:text-gold group-open:shadow-[0_0_14px_-2px_var(--color-gold)]"
            >
              +
            </span>
          </summary>
          <p className="max-w-[62ch] pb-6 text-bone-70">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
