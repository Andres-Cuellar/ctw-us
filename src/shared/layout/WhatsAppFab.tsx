"use client";

import { useEffect, useState } from "react";
import { getGlobalContent } from "@/content";
import { site, type Locale } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

interface WhatsAppFabProps {
  locale?: Locale;
}

export function WhatsAppFab({ locale = "es" }: WhatsAppFabProps) {
  const { fab } = getGlobalContent(locale);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setExpanded(window.scrollY > 340);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={site.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={fab.ariaLabel}
      className={cn(
        "fixed right-4 bottom-[calc(4.85rem+env(safe-area-inset-bottom,0px))] z-[110] flex items-center gap-3 sm:right-6 md:bottom-6",
        "btn type-label bg-bone px-4 py-3.5 text-sm text-night",
        "shadow-[0_0_26px_-6px_rgb(244_242_238/0.5)]",
        "[transform:translate3d(0,0,0)]",
      )}
    >
      <WhatsAppMark />
      <span className={cn("hidden", expanded && "sm:inline")}>{fab.bubble}</span>
    </a>
  );
}

function WhatsAppMark() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-6 shrink-0" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.26.86 5.81 2.42a8.16 8.16 0 0 1 2.41 5.82c0 4.54-3.7 8.21-8.23 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.13-.17.25-.65.81-.8.97-.14.17-.29.19-.54.07-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.03-.44-.07-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.6c.12.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.52.6.19 1.14.17 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}
