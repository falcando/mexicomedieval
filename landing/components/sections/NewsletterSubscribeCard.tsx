"use client";

import { FormEvent, useId } from "react";
import { useTranslations } from "@/components/i18n/LocaleProvider";
import { isNewsletterSubscriptionsEnabled } from "@/lib/feature-flags";

export type NewsletterSubscribeCardProps = {
  title?: string;
  description?: string;
  placeholder?: string;
  submitLabel?: string;
  /** Optional line under the form. Pass `null` to force hide. */
  footnote?: string | null;
  className?: string;
};

function NewsletterSubscribeCardImpl({
  title,
  description,
  placeholder,
  submitLabel,
  footnote,
  className = "",
}: NewsletterSubscribeCardProps) {
  const id = useId();
  const inputId = `${id}-newsletter-email`;
  const headingId = `${id}-heading`;
  const { t } = useTranslations();

  const resolvedTitle = title ?? t("newsletter.title");
  const resolvedDescription = description ?? t("newsletter.description");
  const resolvedPlaceholder = placeholder ?? t("newsletter.placeholder");
  const resolvedSubmit = submitLabel ?? t("newsletter.submit");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const resolvedFootnote =
    footnote === null ? null : footnote !== undefined ? footnote : null;

  return (
    <section
      className={`overflow-hidden px-8 py-32 ${className}`.trim()}
      aria-labelledby={headingId}
    >
      <div className="relative mx-auto max-w-4xl bg-primary p-12 text-white md:p-20">
        <div className="absolute top-0 left-0 h-full w-2 bg-tertiary-fixed-dim" />
        <div className="relative z-10 text-center">
          <h2 id={headingId} className="font-headline mb-6 text-3xl md:text-5xl">
            {resolvedTitle}
          </h2>
          <p className="font-body mx-auto mb-10 max-w-xl text-lg text-surface-variant italic opacity-80">
            {resolvedDescription}
          </p>
          <form
            className="mx-auto flex max-w-lg flex-col gap-4 md:flex-row"
            onSubmit={onSubmit}
          >
            <label htmlFor={inputId} className="sr-only">
              {t("common.email")}
            </label>
            <input
              id={inputId}
              name="email"
              type="email"
              required
              placeholder={resolvedPlaceholder}
              autoComplete="email"
              className="font-body flex-1 border-b border-white/30 bg-white/10 px-4 py-4 text-white placeholder:text-white/50 transition-all focus:bg-white/20 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-tertiary-fixed px-8 py-4 font-label text-sm font-bold uppercase tracking-widest text-on-tertiary-fixed transition-colors hover:bg-white"
            >
              {resolvedSubmit}
            </button>
          </form>
          {resolvedFootnote ? (
            <p className="mt-6 font-label text-[10px] tracking-widest text-white/50 uppercase">
              {resolvedFootnote}
            </p>
          ) : null}
        </div>
        <div className="pointer-events-none absolute top-8 right-8 opacity-10">
          <span
            className="material-symbols-outlined text-8xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
            aria-hidden
          >
            auto_stories
          </span>
        </div>
      </div>
    </section>
  );
}

export function NewsletterSubscribeCard(props: NewsletterSubscribeCardProps) {
  if (!isNewsletterSubscriptionsEnabled()) return null;
  return <NewsletterSubscribeCardImpl {...props} />;
}
