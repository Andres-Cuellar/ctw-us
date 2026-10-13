import type { DashboardMock as DashboardMockContent } from "@/content/types";
import { cn } from "@/shared/lib/cn";

interface DashboardMockProps {
  content: DashboardMockContent;
  className?: string;
}

const HUE = {
  gold: "bg-gold text-night",
  wine: "bg-wine text-bone",
  pink: "bg-wine text-bone",
  cyan: "bg-cyan text-night",
} as const;

/** Bar heights for the illustrative chart, rising toward the right. */
const BARS = [28, 36, 32, 48, 44, 58, 54, 70, 66, 82, 78, 96];

/**
 * The product, shown rather than described: one inbox for every channel and a
 * line that goes up. It is an illustration — no names, no figures — and is
 * marked as one in its caption.
 */
export function DashboardMock({ content, className }: DashboardMockProps) {
  return (
    <figure className={cn("sign overflow-hidden p-0", className)} data-tilt>
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-bone/10 px-5 py-3.5">
        <span className="size-2.5 rounded-full bg-wine/80" />
        <span className="size-2.5 rounded-full bg-gold/80" />
        <span className="size-2.5 rounded-full bg-cyan/80" />
        <span className="type-label ml-3 text-sm text-bone-45">{content.windowTitle}</span>
      </div>

      <div className="grid gap-0 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="border-bone/10 p-5 sm:border-r">
          <p className="type-eyebrow text-[0.6rem] text-bone-45">{content.inboxTitle}</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {content.messages.map((message) => (
              <li
                key={message.channel}
                className="flex items-center gap-3 rounded-lg border border-bone/8 bg-night/60 px-3 py-2.5"
                data-reveal
              >
                <span
                  className={cn(
                    "type-label grid size-8 shrink-0 place-items-center rounded-full text-[0.8rem]",
                    HUE[message.hue],
                  )}
                  aria-hidden
                >
                  {message.channel.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="type-label block text-[0.85rem] text-bone">{message.channel}</span>
                  <span className="block truncate text-[0.8rem] text-bone-70">{message.preview}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col p-5">
          <p className="type-eyebrow text-[0.6rem] text-bone-45">{content.chartTitle}</p>
          <div
            aria-hidden
            className="mt-4 flex h-44 items-end gap-1.5 sm:h-auto sm:flex-1"
            data-draw-track
          >
            {BARS.map((height, index) => (
              <span
                key={index}
                data-draw="y"
                className="flex-1 rounded-t-[3px] bg-gradient-to-t from-gold/25 via-gold/60 to-gold shadow-[0_0_14px_-4px_var(--color-gold)]"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <span aria-hidden className="mt-2 block h-px bg-bone/15" />
        </div>
      </div>

      <figcaption className="border-t border-bone/10 px-5 py-2.5 text-[0.7rem] text-bone-45">
        {content.chartCaption}
      </figcaption>
    </figure>
  );
}
