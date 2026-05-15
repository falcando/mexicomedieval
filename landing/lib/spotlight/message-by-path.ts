import type { Locale } from "@/lib/i18n-config";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

const catalogs = { en, es } as const;

function getByPath(obj: unknown, path: string): string {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur !== null && typeof cur === "object" && p in cur) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return path;
    }
  }
  return typeof cur === "string" ? cur : path;
}

/** Resolve an i18n key path against the given locale catalog (for server-side spotlight copy). */
export function messageByPath(locale: Locale, path: string): string {
  return getByPath(catalogs[locale], path);
}
