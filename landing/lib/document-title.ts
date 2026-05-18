import type { Locale } from "@/lib/i18n-config";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

const catalogs = { en, es } as const;

export const SITE_TITLE_BRAND = "México Medieval";

export function formatSectionTitle(section: string): string {
  return `${SITE_TITLE_BRAND} | ${section}`;
}

/**
 * Tab title for the current path and UI locale. Matches server metadata rules:
 * home is only the brand; other browse pages use `México Medieval | {section}`.
 *
 * Returns `null` for routes that keep per-document SEO from the server
 * (`output: "export"` has no per-locale strings for those).
 */
export function documentTitleForPath(
  pathname: string,
  locale: Locale,
): string | null {
  const m = catalogs[locale];
  const path = pathname.replace(/\/$/, "") || "/";

  if (path === "/") {
    return SITE_TITLE_BRAND;
  }

  if (path.startsWith("/podcast/") && path !== "/podcast") {
    return null;
  }

  if (/\/papers\/presentations\/[^/]+\/details$/.test(path)) {
    return null;
  }

  if (path === "/events") {
    return formatSectionTitle(m.nav.events);
  }
  if (path === "/podcast") {
    return formatSectionTitle(m.nav.podcast);
  }
  if (path === "/papers" || path.startsWith("/papers/")) {
    return formatSectionTitle(m.nav.papers);
  }
  if (path === "/libros") {
    return formatSectionTitle(m.nav.books);
  }
  if (path === "/articulos") {
    return formatSectionTitle(m.nav.articles);
  }
  if (path === "/quienes-somos") {
    return formatSectionTitle(m.nav.about);
  }
  if (path === "/contacto") {
    return formatSectionTitle(m.contact.title);
  }
  if (path === "/privacy-notice") {
    return formatSectionTitle(m.footer.privacyNotice);
  }

  return null;
}
