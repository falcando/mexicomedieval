export const LOCALE_COOKIE = "mm_locale";

export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];

export const defaultLocale: Locale = "en";

export function normalizeLocale(value: string | undefined | null): Locale {
  if (value === "es" || value === "en") return value;
  return defaultLocale;
}

export function pickLocaleFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;
  const lower = header.toLowerCase();
  const tags = lower.split(",").map((part) => part.split(";")[0]?.trim() ?? "");
  for (const tag of tags) {
    if (tag.startsWith("es")) return "es";
  }
  return defaultLocale;
}
