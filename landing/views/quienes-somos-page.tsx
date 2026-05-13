"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

const SIDEBAR_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAGp5HYsryP3UFArni3bU8iCX9SxPqZNSoC1BYcVk2JQ7Cqrr2SnngL6CevI6QYYVWiMyNjj7TsFdjOrpWp3WrWlIDtzgNG3oYYi9mdqdVcPmY6eXTaZkmqnI0C3Bu6lMZ7DXpwCsSGyUhhCkpFllk4NrfL8ELghpqyBCvsYDX4IrkFM0OlR2qJXIfvX57Bd-q0_4TSpm_t4lcyBQKr-8WDGtxaqHuTjXi_davOcPIdJOIe1ZOHxap1HJASvgpSgVtfYYNoGkJpUkvo";

const PILLAR_ICONS = ["menu_book", "podcasts", "database"] as const;

const ARCHIVE_LINKS = [
  {
    href: "/libros",
    labelKey: "about.linkBooks",
    hintKey: "about.linkBooksHint",
  },
  {
    href: "/articulos",
    labelKey: "about.linkArticles",
    hintKey: "about.linkArticlesHint",
  },
  {
    href: "/podcast",
    labelKey: "about.linkPodcast",
    hintKey: "about.linkPodcastHint",
  },
  {
    href: "/papers",
    labelKey: "about.linkPapers",
    hintKey: "about.linkPapersHint",
  },
] as const;

const PILLAR_KEYS = [
  { titleKey: "about.pillar1Title", bodyKey: "about.pillar1Body" },
  { titleKey: "about.pillar2Title", bodyKey: "about.pillar2Body" },
  { titleKey: "about.pillar3Title", bodyKey: "about.pillar3Body" },
] as const;

const THEME_KEYS = [
  "about.theme1",
  "about.theme2",
  "about.theme3",
  "about.theme4",
] as const;

export function QuienesSomosPage() {
  const { t } = useTranslations();

  return (
    <PageContainer title={t("about.title")} subtitle={t("about.subtitle")}>
      <section
        aria-labelledby="autor-heading"
        className="mb-20 grid gap-12 lg:grid-cols-12 lg:gap-16"
      >
        <div className="relative aspect-4/5 overflow-hidden border border-outline-variant/15 bg-surface-container-lowest shadow-sm lg:col-span-5">
          <Image
            src={SIDEBAR_IMG}
            alt={t("about.sidebarImgAlt")}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 380px, 100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary/50 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 font-label text-xs tracking-widest text-white/90 uppercase">
            {t("about.sidebarCaption")}
          </p>
        </div>

        <div className="lg:col-span-7">
          <span className="font-label text-xs font-bold tracking-widest text-tertiary-fixed-dim uppercase">
            {t("about.authorKicker")}
          </span>
          <h2
            id="autor-heading"
            className="font-headline mt-2 mb-2 text-3xl font-bold text-primary md:text-4xl"
          >
            {t("about.authorName")}
          </h2>
          <p className="font-label mb-6 text-sm tracking-widest text-on-surface-variant uppercase">
            {t("about.authorHonorific")}
          </p>
          <p className="mb-8 text-lg font-medium leading-relaxed text-primary">
            {t("about.authorTagline")}
          </p>
          <div className="space-y-4 text-on-surface-variant leading-relaxed">
            <p>{t("about.authorBio1")}</p>
            <p>{t("about.authorBio2")}</p>
          </div>
          <h3 className="font-headline mt-10 mb-4 text-lg text-primary">
            {t("about.themesHeading")}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {THEME_KEYS.map((key) => (
              <li key={key}>
                <span className="inline-block border border-outline-variant/25 bg-surface-container-lowest px-3 py-1.5 text-xs text-on-surface">
                  {t(key)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section
        aria-labelledby="proyecto-heading"
        className="mb-20 border border-outline-variant/15 bg-white/90 p-8 shadow-sm md:p-12"
      >
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-label text-xs font-bold tracking-widest text-tertiary-fixed-dim uppercase">
              {t("about.projectKicker")}
            </span>
            <h2
              id="proyecto-heading"
              className="font-headline mt-2 text-3xl font-bold text-primary md:text-4xl"
            >
              {t("about.projectHeading")}
            </h2>
          </div>
        </div>
        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-on-surface-variant">
          {t("about.projectLede")}
        </p>
        <ul className="grid gap-8 md:grid-cols-3">
          {PILLAR_KEYS.map((pillar, idx) => (
            <li
              key={pillar.titleKey}
              className="border-t border-outline-variant/20 pt-6 md:border-t-0 md:border-l md:border-outline-variant/20 md:pt-0 md:pl-8 first:md:border-l-0 first:md:pl-0"
            >
              <span
                className="material-symbols-outlined mb-4 block text-3xl text-primary"
                aria-hidden
              >
                {PILLAR_ICONS[idx]}
              </span>
              <h3 className="font-headline mb-2 text-xl text-primary">
                {t(pillar.titleKey)}
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                {t(pillar.bodyKey)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <NewsletterSubscribeCard className="mt-24" />
    </PageContainer>
  );
}
