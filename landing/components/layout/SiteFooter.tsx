"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useTranslations } from "@/components/i18n/LocaleProvider";
import { useNewsletterSubscriptionsEnabled } from "@/lib/feature-flags-hooks";
import { isNewsletterSubscriptionsEnabled } from "@/lib/feature-flags";
import {
  creativeCommonsLicenseUrl,
  footerExploreLinks,
  footerLegalLinks,
} from "@/lib/site-footer-config";
import { FooterNewsletterForm } from "./FooterNewsletterForm";

const footerHeadingClass =
  "font-headline mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary";

const footerLinkClass =
  "text-sm text-primary-container decoration-tertiary-fixed-dim underline-offset-4 transition-colors hover:text-primary hover:underline";

type SiteFooterViewProps = { showNewsletter: boolean };

function SiteFooterView({ showNewsletter }: SiteFooterViewProps) {
  const { t } = useTranslations();

  return (
    <footer
      className="mt-auto w-full border-t-4 border-tertiary-fixed-dim bg-[#f2ede3]"
      role="contentinfo"
    >
      <div className="mx-auto max-w-screen-2xl px-6 py-16 md:px-12">
        <div
          className={`grid gap-12 md:grid-cols-2 ${showNewsletter ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
        >
          <div className="space-y-4">
            <div className="font-headline text-xl text-primary italic">
              {t("common.siteName")}
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-primary-container">
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
            <h2 className={footerHeadingClass}>{t("footer.privacyNotice")}</h2>
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
              <p className="mb-4 text-sm text-primary-container/80">
                {t("footer.newsletterBlurb")}
              </p>
              <FooterNewsletterForm />
            </div>
          ) : null}
        </div>

        <div
          className="mt-12 flex flex-col gap-3 border-t border-outline-variant/20 pt-8"
          data-testid="footer-license"
        >
          <p className="text-center text-sm uppercase tracking-widest text-primary-container/70 md:text-left">
            {t("footer.licensePrefix")}{" "}
            <a
              href={creativeCommonsLicenseUrl}
              className="underline hover:text-primary"
              rel="license"
            >
              {t("footer.licenseName")}
            </a>
            {t("footer.licenseNameSuffix")}
          </p>
          <p className="text-center text-sm text-primary-container/70 md:text-left">
            {t("footer.prismadevsCreditsPrefix")}{" "}
            <a
              href="https://www.prismadevs.studio"
              className="underline hover:text-primary"
            >
              {t("footer.prismadevsProject")}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

function SiteFooterWithQuery() {
  const showNewsletter = useNewsletterSubscriptionsEnabled();
  return <SiteFooterView showNewsletter={showNewsletter} />;
}

export function SiteFooter() {
  return (
    <Suspense
      fallback={
        <SiteFooterView
          showNewsletter={isNewsletterSubscriptionsEnabled()}
        />
      }
    >
      <SiteFooterWithQuery />
    </Suspense>
  );
}
