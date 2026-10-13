import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@/shared/config/site";

/**
 * The app has no unprefixed routes: /[locale] is the root layout. Anything that
 * arrives without a known locale prefix is sent to the default one.
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  /**
   * Page routes only. `api` must be excluded or route handlers get redirected
   * to a locale prefix that does not exist and the form silently breaks.
   */
  matcher: ["/((?!api|_next|favicon.ico|robots.txt|sitemap.xml|.*\\.).*)"],
};
