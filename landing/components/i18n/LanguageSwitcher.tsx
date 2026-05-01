"use client";

import { locales, type Locale } from "@/lib/i18n-config";
import { useTranslations } from "./LocaleProvider";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useTranslations();

  return (
    <div
      className="flex items-center gap-1 rounded-lg border border-outline-variant/30 bg-surface-container-lowest/80 px-1 py-0.5 text-xs font-bold tracking-wide text-primary backdrop-blur-sm"
      role="group"
      aria-label={t("nav.language")}
    >
      {locales.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code as Locale)}
            className={
              active
                ? "rounded-md bg-primary px-2 py-1 text-on-primary"
                : "rounded-md px-2 py-1 text-primary-container transition-colors hover:bg-surface-container-high hover:text-primary"
            }
            aria-pressed={active}
          >
            {code === "en" ? t("nav.localeEn") : t("nav.localeEs")}
          </button>
        );
      })}
    </div>
  );
}
