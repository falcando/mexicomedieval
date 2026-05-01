"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import Image from "next/image";
import Link from "next/link";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBtdr3QiXvLIf9Lb3XGHkLbHOR241VdP8oyjyLirDfbDSzA3YrKRtA7spnoNZjybH2CRIjaukahmS3CyW6Me8EzayBIB1jHwq0blud6TcRndQveUUs6sE2VTSKl45lfXAy4of_-p0ODgLchB7UKPuHLNTZasd6tHJ6qWAYuyaDTXA5gCotBdWDIqtXDNgAsBDp_SBuHYxcKjSMFXfNQo0hWK-fV0tQQLvZUEoZI-IryOMFAbjTFqgSw_1mSORtNXn2xkxbAmXi5w-UL";

const SPOTLIGHT_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAGp5HYsryP3UFArni3bU8iCX9SxPqZNSoC1BYcVk2JQ7Cqrr2SnngL6CevI6QYYVWiMyNjj7TsFdjOrpWp3WrWlIDtzgNG3oYYi9mdqdVcPmY6eXTaZkmqnI0C3Bu6lMZ7DXpwCsSGyUhhCkpFllk4NrfL8ELghpqyBCvsYDX4IrkFM0OlR2qJXIfvX57Bd-q0_4TSpm_t4lcyBQKr-8WDGtxaqHuTjXi_davOcPIdJOIe1ZOHxap1HJASvgpSgVtfYYNoGkJpUkvo";

const VIDEO_THUMB =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD5T0W0_Y91waqV97QE2TqD8hcrvuYoIdKMGha795My3494qfwTyrzSiFwQtdsUyAkOJKV-IZHV8cHXKzkIbDAhPwfpwuxhH66eBo9ILs8H-JfF2D68X2aaGsj66H-z4WtD_2yaTbbGosHbuZIqMGT9-81Jw2cG6hVwYqYb6teZPAcHmlkHpKaLHnF_wMopYfsxW4dBVoZpuNRB8_fkppLi7NpD1PrYX43CAkVtmvYnFL3aDmm3GIbmuYrpuV4EXQfKy5YMZpNQBL_F";

export default function Home() {
  const { t } = useTranslations();

  return (
    <div className="relative flex min-h-full flex-col">
      <div
        className="parchment-grain pointer-events-none fixed inset-0 z-100"
        aria-hidden
      />

      <main>
        <section className="relative flex min-h-[min(921px,100dvh)] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={HERO_IMG}
              alt={t("home.heroImgAlt")}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-b from-primary/60 via-primary/40 to-background" />
          </div>
          <div className="relative z-10 max-w-4xl px-6 text-center">
            <span className="font-label mb-4 block uppercase tracking-[0.3em] text-tertiary-fixed-dim">
              {t("home.heroKicker")}
            </span>
            <h1 className="font-headline mb-8 text-5xl leading-tight tracking-tight text-white md:text-8xl">
              {t("home.heroTitle")}
            </h1>
            <p className="font-body mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-surface-container-low italic opacity-90 md:text-xl">
              {t("home.heroSub")}
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <button
                type="button"
                className="bg-tertiary-fixed px-10 py-4 font-label text-sm font-bold uppercase tracking-widest text-on-tertiary-fixed transition-all hover:shadow-[0_0_20px_rgba(247,189,72,0.3)]"
              >
                {t("home.ctaResearch")}
              </button>
              <button
                type="button"
                className="border border-white/30 bg-transparent px-10 py-4 font-label text-sm uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white hover:text-primary"
              >
                {t("home.ctaArchive")}
              </button>
            </div>
          </div>
        </section>

        <section className="bg-surface-container py-24">
          <div className="mx-auto max-w-screen-2xl px-6 md:px-8">
            <div className="mb-16 text-center">
              <h2 className="font-headline mb-4 text-4xl text-primary">
                {t("home.archiveTitle")}
              </h2>
              <div className="manuscript-divider mx-auto w-48" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="group flex min-h-72 flex-col justify-between bg-surface-container-lowest p-10 transition-colors duration-500 hover:bg-primary-container">
                <div>
                  <span className="material-symbols-outlined mb-6 block text-4xl text-tertiary-fixed-dim group-hover:text-white">
                    auto_stories
                  </span>
                  <h4 className="font-headline mb-4 text-2xl text-primary group-hover:text-white">
                    {t("home.booksTitle")}
                  </h4>
                  <p className="text-on-surface-variant group-hover:text-surface-variant">
                    {t("home.booksDesc")}
                  </p>
                </div>
                <div className="mt-8 font-label text-xs uppercase tracking-widest text-tertiary-fixed-dim">
                  {t("home.booksCta")}
                </div>
              </div>

              <div className="group flex flex-col justify-between bg-surface-container-highest p-10 transition-colors duration-500 hover:bg-secondary-fixed">
                <div>
                  <span className="material-symbols-outlined mb-6 block text-4xl text-primary">
                    history_edu
                  </span>
                  <h4 className="font-headline mb-4 text-2xl text-primary">
                    {t("home.articlesTitle")}
                  </h4>
                  <p className="text-on-surface-variant">
                    {t("home.articlesDesc")}
                  </p>
                </div>
                <div className="mt-8 font-label text-xs uppercase tracking-widest text-primary/60">
                  {t("home.articlesCta")}
                </div>
              </div>

              <div className="flex flex-col justify-between border-t-2 border-tertiary-fixed-dim bg-surface-container-lowest p-10">
                <div>
                  <span className="material-symbols-outlined mb-6 block text-4xl text-primary">
                    podcasts
                  </span>
                  <h4 className="font-headline mb-4 text-2xl text-primary">
                    {t("home.podcastTitle")}
                  </h4>
                  <p className="text-on-surface-variant">
                    {t("home.podcastDesc")}
                  </p>
                </div>
                <Link
                  href="/podcast"
                  className="mt-8 flex items-center gap-2 font-label text-sm font-bold uppercase tracking-widest text-primary"
                >
                  {t("home.podcastCta")}
                  <span className="material-symbols-outlined text-sm">
                    play_arrow
                  </span>
                </Link>
              </div>

              <div className="flex flex-col items-center gap-8 border-l-2 border-tertiary-fixed-dim bg-surface-container-highest p-10 md:col-span-2 md:flex-row">
                <div className="flex-1">
                  <span className="material-symbols-outlined mb-6 block text-4xl text-primary">
                    movie_filter
                  </span>
                  <h4 className="font-headline mb-4 text-2xl text-primary">
                    {t("home.videosTitle")}
                  </h4>
                  <p className="text-on-surface-variant">
                    {t("home.videosDesc")}
                  </p>
                </div>
                <div className="relative aspect-video w-full overflow-hidden bg-primary-container md:w-48">
                  <Image
                    src={VIDEO_THUMB}
                    alt={t("home.videoThumbAlt")}
                    fill
                    className="object-cover opacity-50"
                    sizes="(min-width: 768px) 192px, 100vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-white">
                      play_circle
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between bg-surface-container-lowest p-10">
                <div>
                  <span className="material-symbols-outlined mb-6 block text-4xl text-primary">
                    school
                  </span>
                  <h4 className="font-headline mb-4 text-2xl text-primary">
                    {t("home.teachingTitle")}
                  </h4>
                  <p className="text-on-surface-variant">
                    {t("home.teachingDesc")}
                  </p>
                </div>
                <Link
                  href="#"
                  className="mt-8 font-label text-sm text-primary underline decoration-tertiary-fixed-dim decoration-2 underline-offset-4"
                >
                  {t("home.teachingCta")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-6 py-24 md:px-8">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12">
            <div className="relative md:col-span-7">
              <Image
                src={SPOTLIGHT_IMG}
                alt={t("home.spotlightImgAlt")}
                width={1200}
                height={900}
                className="aspect-4/3 w-full object-cover shadow-2xl grayscale"
                sizes="(min-width: 768px) 58vw, 100vw"
              />
              <div className="absolute -right-4 -bottom-4 bg-primary px-8 py-6 md:-right-8 md:-bottom-8">
                <span className="font-headline text-3xl text-tertiary-fixed-dim">
                  MDXXVI
                </span>
              </div>
            </div>
            <div className="md:col-span-5">
              <h2 className="font-headline mb-4 text-sm uppercase tracking-widest text-tertiary-fixed-dim">
                {t("home.spotlightKicker")}
              </h2>
              <h3 className="font-headline mb-6 text-4xl leading-tight text-primary md:text-5xl">
                {t("home.spotlightTitle")}
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-on-surface-variant">
                {t("home.spotlightBody")}
              </p>
              <Link
                href="/libros"
                className="font-label text-sm font-bold uppercase tracking-widest text-primary transition-colors hover:text-secondary"
              >
                {t("home.spotlightCta")}
              </Link>
            </div>
          </div>
        </section>

        <NewsletterSubscribeCard className="px-6 py-20 md:px-8" />
      </main>
    </div>
  );
}
