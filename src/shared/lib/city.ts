export interface City {
  /** URL slug, lowercase, e.g. "las-vegas". */
  slug: string;
  /** Display name with accent, e.g. "Las Vegas". */
  name: string;
  /** State abbreviation, e.g. "NV". */
  state: string;
}

export const NICHO_CITIES: readonly City[] = [
  { slug: "las-vegas", name: "Las Vegas", state: "NV" },
  { slug: "los-angeles", name: "Los Ángeles", state: "CA" },
  { slug: "san-diego", name: "San Diego", state: "CA" },
  { slug: "riverside", name: "Riverside", state: "CA" },
  { slug: "bakersfield", name: "Bakersfield", state: "CA" },
  { slug: "san-jose", name: "San Jose", state: "CA" },
  { slug: "san-francisco", name: "San Francisco", state: "CA" },
  { slug: "sacramento", name: "Sacramento", state: "CA" },
  { slug: "santa-cruz", name: "Santa Cruz", state: "CA" },
  { slug: "fresno", name: "Fresno", state: "CA" },
] as const;

export function cityBySlug(slug: string): City | undefined {
  return NICHO_CITIES.find((c) => c.slug === slug);
}

export type Nicho = "detailing" | "salon-spa";

export function nichoPath(nicho: Nicho, city: City): string {
  return `/${nicho}/${city.slug}`;
}

export function cityDisplay(city: City): string {
  return `${city.name}, ${city.state}`;
}

/**
 * Reemplaza los tokens {{city}} y {{city_lower}} de un objeto de contenido
 * por el nombre y el slug de la ciudad activa. Permite usar un bundle único
 * por nicho y renderizarlo diferente por ciudad.
 */
export function interpolateCity<T>(obj: T, city: string, cityLower: string): T {
  const json = JSON.stringify(obj)
    .replace(/\{\{city\}\}/g, city)
    .replace(/\{\{city_lower\}\}/g, cityLower);
  return JSON.parse(json) as T;
}
