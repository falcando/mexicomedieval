"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";

/** Placeholder for future video entries (talks, lectures, appearances). */
type SiteVideo = {
  title: string;
  description: string;
  href: string;
  year?: string;
};

const VIDEOS: readonly SiteVideo[] = [];

export default function VideosPage() {
  const { t } = useTranslations();
  const hasVideos = VIDEOS.length > 0;

  return (
    <div className="relative min-h-full bg-[#fdf8ef] font-body text-on-background selection:bg-secondary-container selection:text-on-secondary-container">
      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-24 md:px-12 md:pt-14">
        <section className="mb-16 text-center">
          <span className="font-label mb-4 inline-block text-xs font-bold tracking-widest text-tertiary-fixed-dim uppercase">
            {t("videos.kicker")}
          </span>
          <h1 className="font-headline mb-6 text-5xl font-bold tracking-tight text-primary md:text-7xl">
            {t("videos.title")}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            {t("videos.subtitle")}
          </p>
          <div className="mx-auto mt-12 max-w-md">
            <div className="manuscript-divider-fleuron w-full" />
          </div>
        </section>

        <section aria-label={t("videos.catalogAria")}>
          {hasVideos ? (
            <ul className="grid gap-6 md:grid-cols-2">
              {VIDEOS.map((video) => (
                <li key={video.href}>
                  <a
                    href={video.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-outline-variant/20 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    {video.year ? (
                      <span className="font-label text-xs font-bold text-on-surface-variant/60 uppercase">
                        {video.year}
                      </span>
                    ) : null}
                    <h2 className="font-headline mt-2 text-xl text-primary">
                      {video.title}
                    </h2>
                    <p className="mt-2 text-sm text-on-surface-variant">
                      {video.description}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mx-auto max-w-xl border border-outline-variant/20 bg-white/80 px-8 py-16 text-center shadow-sm md:px-12">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container/25">
                <span
                  className="material-symbols-outlined text-4xl text-primary"
                  aria-hidden
                >
                  smart_display
                </span>
              </div>
              <h2 className="font-headline mb-3 text-2xl font-bold text-primary">
                {t("videos.emptyTitle")}
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                {t("videos.emptyBody")}
              </p>
            </div>
          )}
        </section>

        <NewsletterSubscribeCard className="mt-24" />
      </main>
    </div>
  );
}
