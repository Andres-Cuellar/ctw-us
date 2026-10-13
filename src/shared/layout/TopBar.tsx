import { getGlobalContent } from "@/content";
import { site, type Locale } from "@/shared/config/site";

interface TopBarProps {
  locale?: Locale;
}

export function TopBar({ locale = "es" }: TopBarProps) {
  const { topBar } = getGlobalContent(locale);

  return (
    <div className="border-b border-bone/8 bg-night overflow-x-clip">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-5 gap-y-1 px-5 py-2 text-center sm:justify-between sm:px-8 lg:px-12">
        <p className="type-eyebrow flex items-center gap-2 text-[0.6rem] text-gold">
          <span
            aria-hidden
            className="size-1.5 rounded-full bg-gold shadow-[0_0_8px_var(--color-gold)]"
          />
          {topBar.message}
        </p>
        <p className="text-sm text-bone-70">
          {topBar.callLabel}:{" "}
          <a
            className="type-label text-bone hover:text-gold transition-colors"
            href={site.phone.href}
            data-numeric
          >
            {site.phone.display}
          </a>
        </p>
      </div>
    </div>
  );
}
