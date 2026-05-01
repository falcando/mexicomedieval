"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import type { PodcastEpisodeDetail } from "@/lib/podcast-episodes";
import Image from "next/image";
import Link from "next/link";

const C_PRIMARY = "#4f204c";
const C_SURFACE = "#fbf9f1";
const C_ON_SURFACE_VAR = "#4e444b";
const C_SURFACE_VAR = "#e7e2d8";
const C_OUTLINE_VAR = "#d2c2cc";
const C_TERTIARY_FIXED = "#ffdea6";
const C_TERTIARY = "#291b00";
const C_SURFACE_CONTAINER = "#f2ede3";
const C_SURFACE_CONTAINER_HIGH = "#eae8e0";

export function PodcastDetailView({
  episode,
}: {
  episode: PodcastEpisodeDetail;
}) {
  const { t } = useTranslations();
  const p = episode.player.progressPercent;

  return (
    <div
      className="min-h-full font-body"
      style={{
        backgroundColor: C_SURFACE,
        color: "#1d1c16",
      }}
    >
      <main className="relative mx-auto max-w-screen-2xl px-6 pt-8 pb-20 md:px-12 md:pt-10">
        <header className="relative mb-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="z-10 lg:col-span-7">
              <div
                className="mb-4 inline-flex items-center rounded-sm border-l-2 px-3 py-1"
                style={{
                  backgroundColor: C_PRIMARY,
                  borderLeftColor: C_PRIMARY,
                }}
              >
                <span className="text-xs font-bold tracking-widest text-white uppercase">
                  {episode.episodeBadge}
                </span>
              </div>
              <h1 className="font-headline mb-6 text-5xl leading-tight font-bold text-[#4f204c] md:text-7xl">
                {episode.title}{" "}
                <span className="block font-normal text-[#854882] italic md:inline">
                  {episode.titleAccent}
                </span>
              </h1>
              <p
                className="mb-8 max-w-2xl text-xl leading-relaxed"
                style={{ color: C_ON_SURFACE_VAR }}
              >
                {episode.description}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex -space-x-3">
                  {episode.avatars.map((a) => (
                    <div
                      key={a.src}
                      className="h-10 w-10 overflow-hidden rounded-full border-2 bg-[#f2ede3]"
                      style={{ borderColor: C_SURFACE }}
                    >
                      <Image
                        src={a.src}
                        alt={a.alt}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span
                  className="text-sm font-medium"
                  style={{ color: C_ON_SURFACE_VAR }}
                >
                  {episode.hosts}
                </span>
                <span style={{ color: C_OUTLINE_VAR }}>•</span>
                <span
                  className="text-sm font-medium italic"
                  style={{ color: C_ON_SURFACE_VAR }}
                >
                  {episode.dateDisplay}
                </span>
              </div>
            </div>
            <div className="relative lg:col-span-5">
              <div
                className="relative aspect-4/5 overflow-hidden rounded-xl border-8 shadow-xl"
                style={{
                  backgroundColor: C_SURFACE_CONTAINER_HIGH,
                  borderColor: C_SURFACE_CONTAINER,
                }}
              >
                <Image
                  src={episode.coverImage}
                  alt={episode.coverAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                />
              </div>
              <div
                className="absolute -top-6 -right-6 -z-10 h-32 w-32 border-t-2 border-r-2 border-[#4f204c]/20"
              />
            </div>
          </div>
        </header>

        <section className="mb-24">
          <div
            className="relative overflow-hidden rounded-xl p-8 shadow-2xl md:p-12"
            style={{ backgroundColor: C_PRIMARY }}
          >
            <div className="relative z-10">
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <button
                  type="button"
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: C_TERTIARY_FIXED,
                    color: C_TERTIARY,
                  }}
                  aria-label={t("podcastDetail.play")}
                >
                  <span
                    className="material-symbols-outlined text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </button>
                <div className="w-full min-w-0 flex-1">
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className="font-mono text-sm tracking-tighter"
                      style={{ color: C_SURFACE_VAR }}
                    >
                      {episode.player.current} / {episode.player.total}
                    </span>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        className="transition-colors"
                        style={{ color: `${C_SURFACE_VAR}cc` }}
                        aria-label={t("podcastDetail.back10")}
                      >
                        <span className="material-symbols-outlined">
                          replay_10
                        </span>
                      </button>
                      <button
                        type="button"
                        className="transition-colors hover:text-white"
                        style={{ color: `${C_SURFACE_VAR}cc` }}
                        aria-label={t("podcastDetail.forward30")}
                      >
                        <span className="material-symbols-outlined">
                          forward_30
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="relative h-2 w-full cursor-pointer rounded-full bg-white/10">
                    <div
                      className="absolute h-full rounded-full"
                      style={{
                        width: `${p}%`,
                        backgroundColor: C_TERTIARY_FIXED,
                      }}
                    />
                    <div
                      className="absolute -top-1 h-4 w-4 rounded-full shadow-md"
                      style={{
                        left: `${p}%`,
                        transform: "translateX(-50%)",
                        backgroundColor: C_TERTIARY_FIXED,
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined"
                      style={{ color: C_SURFACE_VAR }}
                    >
                      volume_up
                    </span>
                    <div className="h-1 w-24 rounded-full bg-white/10">
                      <div
                        className="h-full w-[70%] rounded-full"
                        style={{ backgroundColor: C_SURFACE_VAR }}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="rounded-md border border-white/20 px-4 py-2 text-sm font-bold transition-colors hover:bg-white/10"
                    style={{
                      backgroundColor: `${C_SURFACE_VAR}33`,
                      color: C_SURFACE_VAR,
                    }}
                  >
                    1.25x
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <section className="mb-16">
              <h2 className="font-headline mb-8 flex items-center gap-3 text-3xl font-bold text-[#4f204c]">
                <span
                  className="h-[3px] w-8"
                  style={{ backgroundColor: C_PRIMARY }}
                />
                {t("podcastDetail.parchmentDescription")}
              </h2>
              <div
                className="space-y-6 text-lg leading-relaxed"
                style={{ color: C_ON_SURFACE_VAR }}
              >
                {episode.bodyParagraphs.map((para) => (
                  <p
                    key={para.slice(0, 24)}
                    className="first-letter:float-left first-letter:mr-4 first-letter:font-headline first-letter:text-6xl first-letter:font-bold first-letter:text-[#4f204c]"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </section>
            <div
              className="mb-16 h-px w-full"
              style={{ backgroundColor: `${C_OUTLINE_VAR}4d` }}
            />
            <section>
              <div className="mb-8 flex items-end justify-between">
                <h2 className="font-headline text-3xl font-bold text-[#4f204c]">
                  {t("podcastDetail.transcript")}
                </h2>
                <button
                  type="button"
                  className="border-b-2 text-sm font-bold tracking-widest text-[#4f204c] uppercase transition-all hover:border-[#4f204c]"
                  style={{ borderColor: `${C_PRIMARY}33` }}
                >
                  {t("podcastDetail.downloadPdf")}
                </button>
              </div>
              <div
                className="custom-scrollbar max-h-[600px] overflow-y-auto rounded-lg border p-8 shadow-inner"
                style={{
                  backgroundColor: C_SURFACE_CONTAINER,
                  borderColor: `${C_OUTLINE_VAR}4d`,
                }}
              >
                <div className="space-y-8">
                  {episode.transcript.map((line) => (
                    <div key={line.time + line.speaker} className="flex gap-6">
                      <span className="shrink-0 pt-1 font-mono text-sm text-[#4f204c]/60">
                        {line.time}
                      </span>
                      <div>
                        <p className="mb-1 font-bold text-[#4f204c]">
                          {line.speaker}
                        </p>
                        <p style={{ color: C_ON_SURFACE_VAR }}>{line.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-12 lg:col-span-4">
            <div
              className="relative overflow-hidden rounded-xl border-t-4 p-8 shadow-sm"
              style={{
                backgroundColor: C_SURFACE_CONTAINER_HIGH,
                borderTopColor: C_PRIMARY,
              }}
            >
              <div className="relative z-10">
                <h3 className="font-headline mb-6 text-xl font-bold text-[#4f204c]">
                  {t("podcastDetail.relatedManuscripts")}
                </h3>
                <div className="space-y-8">
                  {episode.related.map((rel) => (
                    <div key={rel.title}>
                      {rel.slug ? (
                        <Link href={`/podcast/${rel.slug}`} className="group block">
                          <p className="mb-1 text-xs font-bold tracking-widest text-[#4f204c]/60 uppercase">
                            {rel.label}
                          </p>
                          <h4 className="font-headline mb-2 text-lg font-bold text-[#4f204c] transition-colors group-hover:text-[#854882]">
                            {rel.title}
                          </h4>
                          <p
                            className="line-clamp-2 text-sm"
                            style={{ color: C_ON_SURFACE_VAR }}
                          >
                            {rel.description}
                          </p>
                        </Link>
                      ) : (
                        <div className="block">
                          <p className="mb-1 text-xs font-bold tracking-widest text-[#4f204c]/60 uppercase">
                            {rel.label}
                          </p>
                          <h4 className="font-headline mb-2 text-lg font-bold text-[#4f204c]">
                            {rel.title}
                          </h4>
                          <p
                            className="line-clamp-2 text-sm"
                            style={{ color: C_ON_SURFACE_VAR }}
                          >
                            {rel.description}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <Link
                  href="/podcast"
                  className="mt-8 block w-full rounded-sm border-2 py-4 text-center text-sm font-bold tracking-widest text-[#4f204c] uppercase transition-all hover:bg-[#4f204c] hover:text-white"
                  style={{ borderColor: C_PRIMARY }}
                >
                  {t("podcastDetail.viewAllArchive")}
                </Link>
              </div>
            </div>

            <div
              className="group relative cursor-pointer overflow-hidden rounded-xl border shadow-lg"
              style={{ borderColor: `${C_OUTLINE_VAR}33` }}
            >
              <div className="relative aspect-square">
                <Image
                  src={episode.supportCard.image}
                  alt={episode.supportCard.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
              <div
                className="absolute inset-0 flex translate-y-2 flex-col justify-end p-6 transition-transform group-hover:translate-y-0"
                style={{ backgroundColor: `${C_PRIMARY}cc` }}
              >
                <h4 className="font-headline mb-2 text-xl font-bold text-white">
                  {episode.supportCard.title}
                </h4>
                <p className="text-sm" style={{ color: `${C_SURFACE_VAR}e6` }}>
                  {episode.supportCard.description}
                </p>
              </div>
            </div>
          </aside>
        </div>

        <NewsletterSubscribeCard className="mt-32 px-8" />
      </main>
    </div>
  );
}
