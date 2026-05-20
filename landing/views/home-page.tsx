"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { ArchiveCard } from "@/components/sections/ArchiveCard";
import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import Image from "next/image";
import { Grenze_Gotisch } from "next/font/google";
import SpotlightCard from "@/components/sections/SpotlightCard";
import type { Locale } from "@/lib/i18n-config";
import type { SpotlightPayload } from "@/lib/types/spotlight";

const grenzeGotisch = Grenze_Gotisch({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const HERO_IMG =
  "/images/hero.webp";


const VIDEO_THUMB =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD5T0W0_Y91waqV97QE2TqD8hcrvuYoIdKMGha795My3494qfwTyrzSiFwQtdsUyAkOJKV-IZHV8cHXKzkIbDAhPwfpwuxhH66eBo9ILs8H-JfF2D68X2aaGsj66H-z4WtD_2yaTbbGosHbuZIqMGT9-81Jw2cG6hVwYqYb6teZPAcHmlkHpKaLHnF_wMopYfsxW4dBVoZpuNRB8_fkppLi7NpD1PrYX43CAkVtmvYnFL3aDmm3GIbmuYrpuV4EXQfKy5YMZpNQBL_F";

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
            <div className="absolute inset-0 bg-linear-to-b from-primary/60 via-primary/40 to-background" />
          </div>
          <div className="relative z-10 max-w-4xl px-6 text-center">
            <span className="font-label mb-4 block uppercase tracking-[0.3em] bg-tertiary-fixed-dim text-black px-4 py-1">
              {t("home.heroKicker")}
            </span>
            <h1 className={`font-headline mb-8 text-5xl leading-tight tracking-tight text-white md:text-8xl ${grenzeGotisch.className}`}>
              {t("home.heroTitle")}
            </h1>
            <p className="font-body mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-surface-container-low italic opacity-90 md:text-xl">
              {t("home.heroSub")}
            </p>
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
                  href: "/events",
                  text: t("home.eventsCta"),
                }}
                trailing={
                  <div className="relative aspect-video w-full overflow-hidden bg-primary-container md:w-48">
                    <Image
                      src={VIDEO_THUMB}
                      alt={t("home.eventThumbAlt")}
                      fill
                      className="object-cover opacity-50"
                      sizes="(min-width: 768px) 192px, 100vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-4xl text-white"
                        aria-hidden
                      >
                        play_circle
                      </span>
                    </div>
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
