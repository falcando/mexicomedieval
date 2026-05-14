"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { documentTitleForPath } from "@/lib/document-title";
import {
  LOCALE_COOKIE,
  type Locale,
  normalizeLocale,
} from "@/lib/i18n-config";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

const catalogs = { en, es } as const;

// `en.json` and `es.json` must stay consistent at runtime, but TypeScript doesn't
// need to enforce identical object shapes at compile time (we access via string
// paths, and `getByPath` already falls back safely).
type MessageTree = (typeof catalogs)[Locale];

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

export type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  messages: MessageTree;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function writeLocaleCookie(locale: Locale) {
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${LOCALE_COOKIE}=${encodeURIComponent(locale)};path=/;max-age=${maxAge};SameSite=Lax`;
}

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: Locale;
}) {
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>(() =>
    normalizeLocale(initialLocale),
  );
  const skipLocaleChangeInvalidationRef = useRef(true);

  useLayoutEffect(() => {
    const next = documentTitleForPath(pathname ?? "/", locale);
    if (next !== null) {
      document.title = next;
    }
  }, [pathname, locale]);

  // Before paint: apply `mm_locale` from the client (static export has no `cookies()` in the root layout).
  useLayoutEffect(() => {
    const match = document.cookie.match(
      new RegExp(
        `(?:^|; )${LOCALE_COOKIE.replace(/[$()*+.?[\\\]^{|}]/g, "\\$&")}=([^;]*)`,
      ),
    );
    const raw = match?.[1];
    const fromCookie = raw ? decodeURIComponent(raw) : null;
    const parsed = normalizeLocale(fromCookie);
    // eslint-disable-next-line react-hooks/set-state-in-layout-effect -- sync persisted locale before first paint to avoid wrong-language chrome
    setLocaleState((prev) => (parsed !== prev ? parsed : prev));
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (skipLocaleChangeInvalidationRef.current) {
      skipLocaleChangeInvalidationRef.current = false;
      return;
    }
    void queryClient.invalidateQueries({
      predicate: (query) => {
        const root = query.queryKey[0];
        return root === "books" || root === "articles";
      },
    });
  }, [locale, queryClient]);

  const setLocale = useCallback((next: Locale) => {
    const normalized = normalizeLocale(next);
    setLocaleState(normalized);
    writeLocaleCookie(normalized);
  }, []);

  const messages = catalogs[locale];

  const t = useCallback(
    (key: string) => getByPath(messages, key),
    [messages],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t, messages }),
    [locale, setLocale, t, messages],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within LocaleProvider");
  }
  return ctx;
}

export function useTranslations() {
  return useI18n();
}
