"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { ArchiveCard } from "@/components/sections/ArchiveCard";
import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import Image from "next/image";
import { Grenze_Gotisch } from "next/font/google";
import SpotlightCard from "@/components/sections/SpotlightCard";
import type { Locale } from "@/lib/i18n-config";
import { ANABASIS_PROJECT_URL } from "@/lib/site-partners";
import type { SpotlightPayload } from "@/lib/types/spotlight";

const grenzeGotisch = Grenze_Gotisch({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const HERO_IMG = "/images/hero.webp";

/**
 * true  — full purple-to-background gradient overlay.
 * false — no full gradient; purple tint + bottom vignette (see reference hero).
 */
const HERO_GRADIENT_ENABLED = true;

/** true — semi-transparent purple panel behind hero sub text. */
const HERO_SUB_PANEL_ENABLED = true;


const EVENTS_THUMB = "/images/eventos-thumb.webp";

export function HomePage({
  spotlightByLocale,
}: {
  spotlightByLocale: Record<Locale, SpotlightPayload | null>;
}) {
  const { t, locale } = useTranslations();
  const spotlight = spotlightByLocale[locale];

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
            {HERO_GRADIENT_ENABLED ? (
              <div
                className="absolute inset-0 bg-linear-to-b from-primary/60 via-primary/40 to-background"
                aria-hidden
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-primary/45" aria-hidden />
                <div
                  className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_45%,rgb(54_9_53/0.55)_72%,rgb(12_2_14/0.92)_100%)]"
                  aria-hidden
                />
              </>
            )}
          </div>
          <div className="relative z-10 max-w-6xl px-6 text-center">
            <span className="font-label mb-4 inline-block bg-tertiary-fixed-dim px-3 py-0.5 text-[7.5pt] uppercase tracking-[0.18em] text-black md:text-[9pt]">
              {t("home.heroKicker")}
            </span>
            <h1 className={`font-headline mb-6 text-[46pt] leading-tight tracking-tight text-white md:text-[92pt] ${grenzeGotisch.className}`}>
              {t("home.heroTitle")}
            </h1>
            <p
              className={
                HERO_SUB_PANEL_ENABLED
                  ? "font-body mx-auto mb-12 max-w-lg rounded-md bg-primary/55 px-3 py-2 text-[9pt] font-medium leading-tight text-white md:text-[10.5pt]"
                  : "font-body mx-auto mb-12 max-w-lg text-[9pt] leading-tight text-surface-container-low opacity-90 md:text-[10.5pt]"
              }
            >
              {t("home.heroSub")}
            </p>
          </div>
        </section>

        <section className="bg-primary py-24">
          <div className="mx-auto max-w-screen-2xl px-6 md:px-8">
            <div className="mb-16 text-center">
              <h2 className="font-headline mb-4 text-4xl text-tertiary-fixed-dim">
                {t("home.archiveTitle")}
              </h2>
              <div className="manuscript-divider mx-auto w-48" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <ArchiveCard
                icon="auto_stories"
                title={t("home.booksTitle")}
                description={t("home.booksDesc")}
                variant="white"
                cta={{
                  kind: "label",
                  href: "/libros",
                  text: t("home.booksCta"),
                }}
              />

              <ArchiveCard
                icon="history_edu"
                title={t("home.articlesTitle")}
                description={t("home.articlesDesc")}
                variant="gray"
                cta={{
                  kind: "label",
                  href: "/articulos",
                  text: t("home.articlesCta"),
                }}
              />

              <ArchiveCard
                icon="podcasts"
                title={t("home.podcastTitle")}
                description={t("home.podcastDesc")}
                variant="white"
                cta={{
                  kind: "link-row",
                  href: "/podcast",
                  text: t("home.podcastCta"),
                  showPlayIcon: true,
                }}
              />

              <ArchiveCard
                icon="movie_filter"
                title={t("home.eventsTitle")}
                description={t("home.eventsDesc")}
                variant="gray"
                mdColSpan={2}
                cta={{
                  kind: "label",
                  href: "/eventos",
                  text: t("home.eventsCta"),
                }}
                trailing={
                  <div className="relative aspect-video w-full overflow-hidden bg-primary-container md:w-80">
                    <Image
                      src={EVENTS_THUMB}
                      alt={t("home.eventThumbAlt")}
                      fill
                      className="object-cover opacity-70"
                      sizes="(min-width: 768px) 320px, 100vw"
                    />
                  </div>
                }
              />

              <ArchiveCard
                icon="article"
                title={t("home.papersTitle")}
                description={t("home.papersDesc")}
                variant="white"
                cta={{
                  kind: "label",
                  href: "/papers",
                  text: t("home.papersCta"),
                }}
              />
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-16">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center md:flex-row md:text-left">
            <Image
              src="/images/anabasis-project.jpeg"
              alt={t("home.anabasisLogoAlt")}
              width={300}
              height={300}
              className="h-36 w-36 shrink-0 rounded-full object-contain"
              sizes="144px"
            />
            <div className="max-w-2xl">
              <p className="font-label mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-container">
                {t("home.partnershipKicker")}
              </p>
              <h2 className="font-headline mb-3 text-3xl text-primary">
                Anabasis Project
              </h2>
              <p className="font-body mb-6 leading-relaxed text-primary-container">
                {t("home.partnershipDescription")}
              </p>
              <a
                href={ANABASIS_PROJECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary px-5 py-3 font-label text-sm font-semibold uppercase tracking-widest text-on-primary transition-opacity hover:opacity-90"
              >
                {t("home.partnershipCta")}
              </a>
            </div>
          </div>
        </section>

        {spotlight ? (
          <section className="mx-auto max-w-screen-2xl px-6 py-24 md:px-8">
            <SpotlightCard spotlight={spotlight} />
          </section>
        ) : null}

        <NewsletterSubscribeCard className="px-6 py-20 md:px-8" />
      </main>
    </div>
  );
}
