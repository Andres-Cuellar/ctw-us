"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    fbq?: (command: string, event: string) => void;
  }
}

export function MetaPixel() {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!ready || !pathname || lastTrackedPath.current === pathname) return;

    window.fbq?.("track", "PageView");
    lastTrackedPath.current = pathname;
  }, [pathname, ready]);

  return (
    <Script id="meta-pixel" strategy="afterInteractive" onReady={() => setReady(true)}>
      {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '4416393341916446');`}
    </Script>
  );
}
