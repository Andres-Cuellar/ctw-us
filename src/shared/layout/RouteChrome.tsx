"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Keep campaign pages independent from the site's navigation and dialogs. */
export function RouteChrome({ children }: { children: ReactNode }) {
  const path = usePathname();
  if (/\/(clientes-nuevos|terminos-prueba)\/?$/.test(path)) return null;
  return children;
}
