"use client";

import Link from "next/link";
import { useTranslations } from "@/components/i18n/LocaleProvider";
import PageContainer from "@/components/layout/PageContainer";

const INTRO_PARAGRAPH_KEYS = [
  "privacyNotice.p1",
  "privacyNotice.p2",
  "privacyNotice.p3",
  "privacyNotice.p4",
  "privacyNotice.p5",
  "privacyNotice.p6",
] as const;

export function PrivacyNoticePage() {
  const { t } = useTranslations();

  return (
    <PageContainer title={t("privacyNotice.title")}>
      <article className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-on-surface-variant md:text-lg">
        {INTRO_PARAGRAPH_KEYS.map((key) => (
          <p key={key}>{t(key)}</p>
        ))}
        <p>
          {t("privacyNotice.p7Before")}
          <Link
            href="/contacto"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {t("privacyNotice.contactPageLink")}
          </Link>
          {t("privacyNotice.p7After")}
        </p>
        <p>{t("privacyNotice.p8")}</p>
        <p className="border-t border-outline-variant/20 pt-6 text-center text-sm text-on-surface-variant/80">
          {t("privacyNotice.lastUpdated")}
        </p>
      </article>
    </PageContainer>
  );
}
