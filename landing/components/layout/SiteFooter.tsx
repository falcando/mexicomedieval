"use client";

import Link from "next/link";
import { useTranslations } from "@/components/i18n/LocaleProvider";
import { isNewsletterSubscriptionsEnabled } from "@/lib/feature-flags";
import {
  footerExploreLinks,
  footerLegalLinks,
} from "@/lib/site-footer-config";
import { FooterNewsletterForm } from "./FooterNewsletterForm";

const footerHeadingClass =
  "font-headline mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary dark:text-tertiary-fixed-dim";

const footerLinkClass =
  "text-sm text-primary-container decoration-tertiary-fixed-dim underline-offset-4 transition-colors hover:text-primary hover:underline dark:text-surface-variant/90 dark:hover:text-tertiary-fixed";

export function SiteFooter() {
  const showNewsletter = isNewsletterSubscriptionsEnabled();
  const { t } = useTranslations();

  return (
    <footer
      className="mt-auto w-full border-t-4 border-tertiary-fixed-dim bg-[#f2ede3] dark:bg-[#1d1c16]"
      role="contentinfo"
    >
      <div className="mx-auto max-w-screen-2xl px-6 py-16 md:px-12">
        <div
          className={`grid gap-12 md:grid-cols-2 ${showNewsletter ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
        >
          <div className="space-y-4">
            <div className="font-headline text-xl text-primary italic dark:text-tertiary-fixed-dim">
              {t("common.siteName")}
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-primary-container dark:text-surface-variant/80">
              {t("footer.tagline")}
            </p>
          </div>

          <nav aria-label={t("footer.exploreArchive")}>
            <h2 className={footerHeadingClass}>{t("footer.explore")}</h2>
            <ul className="space-y-3">
              {footerExploreLinks.map((item) => (
                <li key={item.href + item.labelKey}>
                  <Link href={item.href} className={footerLinkClass}>
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t("footer.legalContact")}>
            <h2 className={footerHeadingClass}>{t("footer.legalEthics")}</h2>
            <ul className="space-y-3">
              {footerLegalLinks.map((item) => (
                <li key={item.href + item.labelKey}>
                  <Link href={item.href} className={footerLinkClass}>
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {showNewsletter ? (
            <div>
              <h2 className={footerHeadingClass}>{t("footer.newsletter")}</h2>
              <p className="mb-4 text-sm text-primary-container/80 dark:text-surface-variant/75">
                {t("footer.newsletterBlurb")}
              </p>
              <FooterNewsletterForm />
            </div>
          ) : null}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-outline-variant/20 pt-8 md:flex-row dark:border-outline-variant/30">
          <p className="text-center text-xs uppercase tracking-widest text-primary-container/70 md:text-left dark:text-surface-variant/65">
            {t("footer.copyright")}
          </p>
          <div className="flex gap-2 text-primary dark:text-tertiary-fixed-dim">
            <button
              type="button"
              className="material-symbols-outlined rounded-full p-2 transition-opacity hover:opacity-70"
              aria-label={t("footer.share")}
            >
              share
            </button>
            <button
              type="button"
              className="material-symbols-outlined rounded-full p-2 transition-opacity hover:opacity-70"
              aria-label={t("footer.library")}
            >
              local_library
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
