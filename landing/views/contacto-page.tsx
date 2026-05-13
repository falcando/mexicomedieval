"use client";

import type { ReactNode } from "react";
import { useTranslations } from "@/components/i18n/LocaleProvider";
import PageContainer from "@/components/layout/PageContainer";
import { CONTACT_EXTERNAL } from "@/lib/data/contact-external";
import { Grenze_Gotisch } from "next/font/google";
import Image from "next/image";

const grenzeGotisch = Grenze_Gotisch({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function SectionIconHeading({
  symbol,
  children,
}: {
  symbol: ReactNode;
  children: ReactNode;
}) {
  return (
    <h2 className="font-headline mb-6 flex items-center gap-3 text-2xl font-bold text-primary md:text-[1.65rem]">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-tertiary-fixed-dim text-base font-bold text-primary"
        aria-hidden
      >
        {symbol}
      </span>
      {children}
    </h2>
  );
}

function ExternalProfileCard({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex min-h-18 items-center border border-outline-variant/25 bg-white px-4 py-3 pr-12 shadow-sm transition-shadow hover:shadow-md"
    >
      <span className="font-headline text-base font-semibold text-primary">{label}</span>
      <span
        className="material-symbols-outlined absolute right-3 top-3 text-tertiary-fixed-dim"
        aria-hidden
      >
        open_in_new
      </span>
    </a>
  );
}

export function ContactoPage() {
  const { t } = useTranslations();

  const profileLinks: Array<{
    href: string;
    labelKey:
      | "contact.linkOrcid"
      | "contact.linkScholar"
      | "contact.linkScopus"
      | "contact.linkInstitutional"
      | "contact.linkScripta";
    fullWidth?: boolean;
  }> = [
    { href: CONTACT_EXTERNAL.orcid, labelKey: "contact.linkOrcid" },
    { href: CONTACT_EXTERNAL.googleScholar, labelKey: "contact.linkScholar" },
    { href: CONTACT_EXTERNAL.scopus, labelKey: "contact.linkScopus" },
    {
      href: CONTACT_EXTERNAL.institutionalProfile,
      labelKey: "contact.linkInstitutional",
    },
    {
      href: CONTACT_EXTERNAL.scriptaUp,
      labelKey: "contact.linkScripta",
      fullWidth: true,
    },
  ];

  return (
    <PageContainer
      customHeader={
        <header className="relative z-10 mb-12 md:mb-16">
          <div className="relative grid gap-8 lg:grid-cols-[1fr_minmax(140px,240px)] lg:items-start">
            <div className="relative z-10 max-w-3xl">
              <span className="font-label mb-3 inline-block text-xs font-bold tracking-[0.35em] text-tertiary-fixed-dim uppercase">
                {t("contact.kicker")}
              </span>
              <h1 className="font-headline mb-3 text-4xl font-bold tracking-tight text-primary md:text-6xl">
                <span className={`font-bold ${grenzeGotisch.className}`}>
                  {t("contact.title")}
                </span>
              </h1>
              <p className="font-headline mb-5 text-xl text-secondary md:text-2xl">
                {t("contact.nameLine")}
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg">
                {t("contact.intro")}
              </p>
            </div>

            <div
              className="pointer-events-none relative hidden select-none justify-self-end opacity-[0.6] lg:flex lg:w-full"
              aria-hidden
            >
              <Image
                src="/images/contact_hero.png"
                alt={t("contact.contactHeroAlt")}
                width={800}
                height={520}
                className="w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </div>

          <div className="mt-10 h-px w-full bg-linear-to-r from-transparent via-tertiary-fixed-dim to-transparent" />
        </header>
      }
    >
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(260px,380px)] lg:gap-16 lg:items-start">
        <div className="space-y-14">
          <section aria-labelledby="contact-emails-heading">
            <SectionIconHeading symbol="@">{t("contact.emailsHeading")}</SectionIconHeading>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-outline-variant/20 bg-white/95 p-5 shadow-sm">
                <span className="font-label text-[0.65rem] font-bold tracking-[0.2em] text-primary-container uppercase">
                  {t("contact.emailLabelUp")}
                </span>
                <a
                  href={CONTACT_EXTERNAL.emailUp}
                  className="mt-2 block font-body text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  hervin.fernandez@up.edu.mx
                </a>
              </div>
              <div className="rounded-lg border border-outline-variant/20 bg-white/95 p-5 shadow-sm">
                <span className="font-label text-[0.65rem] font-bold tracking-[0.2em] text-primary-container uppercase">
                  {t("contact.emailLabelColjal")}
                </span>
                <a
                  href={CONTACT_EXTERNAL.emailColjal}
                  className="mt-2 block break-all font-body text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  hervin.fernandez@elcolegiodejalisco.edu.mx
                </a>
              </div>
            </div>
            <p className="mt-6 border-l-4 border-tertiary-fixed-dim bg-surface-container-low/80 px-4 py-3 text-sm italic leading-relaxed text-on-surface-variant">
              {t("contact.emailNote")}
            </p>
          </section>

          <section aria-labelledby="contact-profiles-heading">
            <SectionIconHeading symbol={<span className="material-symbols-outlined text-xl">school</span>}>
              {t("contact.profilesHeading")}
            </SectionIconHeading>
            <ul className="grid gap-3 sm:grid-cols-2">
              {profileLinks.map((item) => (
                <li
                  key={item.labelKey}
                  className={item.fullWidth ? "sm:col-span-2" : undefined}
                >
                  <ExternalProfileCard href={item.href} label={t(item.labelKey)} />
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="flex flex-col gap-12">
          <section aria-labelledby="contact-networks-heading">
            <h2
              id="contact-networks-heading"
              className="font-headline mb-6 text-2xl font-bold text-primary"
            >
              {t("contact.networksHeading")}
            </h2>
            <div className="flex flex-col gap-4">
              <a
                href={CONTACT_EXTERNAL.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-primary px-4 py-4 text-on-primary shadow-sm transition-opacity hover:opacity-95"
              >
                <span className="material-symbols-outlined shrink-0 text-2xl" aria-hidden>
                  share
                </span>
                <div className="min-w-0 flex-1 text-center sm:text-left">
                  <div className="font-label text-[0.65rem] font-bold tracking-[0.25em] uppercase opacity-90">
                    {t("contact.twitterLabel")}
                  </div>
                  <div className="font-headline truncate text-lg font-semibold">
                    {t("contact.twitterHandle")}
                  </div>
                </div>
              </a>

              <a
                href={CONTACT_EXTERNAL.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-outline-variant/30 bg-surface-container-high px-4 py-4 text-on-background shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="material-symbols-outlined shrink-0 text-2xl text-primary" aria-hidden>
                  link
                </span>
                <div className="min-w-0 flex-1 text-center sm:text-left">
                  <div className="font-label text-[0.65rem] font-bold tracking-[0.25em] text-on-surface-variant uppercase">
                    {t("contact.linktreeLabel")}
                  </div>
                  <div className="font-headline truncate text-lg font-semibold text-primary">
                    linktr.ee/hervinFA
                  </div>
                </div>
              </a>
            </div>
          </section>

          <section aria-labelledby="contact-publications-heading">
            <h2
              id="contact-publications-heading"
              className="font-headline mb-6 text-2xl font-bold text-primary"
            >
                {t("contact.authorPagesTitle")}
            </h2>
            <div className="border-t-2 border-primary/80 bg-surface-container-low/90 px-5 py-5">
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={CONTACT_EXTERNAL.amazonMx}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-outline-variant/40 bg-white px-4 py-3 text-center font-label text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-surface-container-high"
                >
                  {t("contact.amazonMx")}
                </a>
                <a
                  href={CONTACT_EXTERNAL.amazonUs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-outline-variant/40 bg-white px-4 py-3 text-center font-label text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-surface-container-high"
                >
                  {t("contact.amazonUs")}
                </a>
              </div>
            </div>
          </section>

        </aside>
      </div>
    </PageContainer>
  );
}
