import {
  LOCALE_COOKIE,
  normalizeLocale,
  type Locale,
} from "@/lib/i18n-config";

const listeners = new Set<() => void>();

export function subscribeLocale(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

export function notifyLocaleStore() {
  for (const listener of listeners) {
    listener();
  }
}

/** Decoded `mm_locale` cookie value, or `null` if absent (or during SSR). */
export function readRawLocaleFromCookie(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(
      `(?:^|; )${LOCALE_COOKIE.replace(/[$()*+.?[\\\]^{|}]/g, "\\$&")}=([^;]*)`,
    ),
  );
  const raw = match?.[1];
  return raw ? decodeURIComponent(raw) : null;
}

export function persistLocale(locale: Locale) {
  const normalized = normalizeLocale(locale);
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${LOCALE_COOKIE}=${encodeURIComponent(normalized)};path=/;max-age=${maxAge};SameSite=Lax`;
  notifyLocaleStore();
}
