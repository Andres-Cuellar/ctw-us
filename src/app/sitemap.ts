import type { MetadataRoute } from "next";
import { site } from "@/shared/config/site";
import { NICHO_CITIES } from "@/shared/lib/city";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/servicios", "/nosotros", "/contacto", "/detailing", "/salon-spa", ...NICHO_CITIES.flatMap((city) => [`/detailing/${city.slug}`, `/salon-spa/${city.slug}`])];
  return paths.flatMap((path) => (["es", "en"] as const).map((locale) => ({
    url: `${site.url}/${locale}${path}`,
    alternates: { languages: { es: `${site.url}/es${path}`, en: `${site.url}/en${path}` } },
  })));
}
