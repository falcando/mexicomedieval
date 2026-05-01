"use client";

import { FormEvent } from "react";
import { useTranslations } from "@/components/i18n/LocaleProvider";

export function FooterNewsletterForm() {
  const { t } = useTranslations();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className="flex flex-col gap-2 sm:flex-row" onSubmit={onSubmit}>
      <label htmlFor="footer-newsletter-email" className="sr-only">
        {t("common.email")}
      </label>
      <input
        id="footer-newsletter-email"
        name="email"
        type="email"
        required
        placeholder={t("newsletter.placeholder")}
        autoComplete="email"
        className="min-w-0 grow border-0 border-b border-primary/25 bg-transparent px-4 py-3 text-sm text-primary placeholder:text-primary-container/55 focus:border-primary focus:outline-none dark:border-primary/40 dark:placeholder:text-surface-variant/60"
      />
      <button
        type="submit"
        className="shrink-0 bg-tertiary-fixed px-6 py-3 font-label text-xs font-bold uppercase tracking-widest text-on-tertiary-fixed transition-colors hover:bg-white dark:hover:text-primary"
      >
        {t("newsletter.submit")}
      </button>
    </form>
  );
}
