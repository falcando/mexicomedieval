"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import { APPLE_SHOW_URL } from "@/lib/data/podcast-mexico-medieval";
import {
  CARD_IMAGES,
  FEATURED_IMG,

  SE_TENIA_QUE_DECIR_EPISODE,
  TIEMPOS_IMPOSIBLES,
  cardAltKeys,
  groupBySeries,
} from "@/lib/data/podcast-page-static";
import { ENTITY_PAGE_SIZE, totalPagesFromTotal } from "@/lib/pagination";
import { useMexicoMedievalPageQuery } from "@/lib/queries/podcasts";
import Image from "next/image";
import { useMemo, useState } from "react";
import PageContainer from "@/components/layout/PageContainer";

function PaginationFolio({
  page,
  totalPages,
  isFetching,
  onPrev,
  onNext,
  prevLabel,
  nextLabel,
  folioLabel,
  ofLabel,
}: {
  page: number;
  totalPages: number;
  isFetching: boolean;
  onPrev: () => void;
  onNext: () => void;
  prevLabel: string;
  nextLabel: string;
  folioLabel: string;
  ofLabel: string;
}) {
  const hasPreviousPage = page > 1;
  const hasNextPage = page < totalPages;
  return (
    <div className="mt-16 flex flex-col items-center gap-6">
      <div className="manuscript-divider mb-4 w-16" />
      <div className="flex items-center gap-12 font-label text-xs tracking-[0.4em] text-on-surface-variant uppercase">
        <button
          type="button"
          disabled={!hasPreviousPage || isFetching}
          onClick={onPrev}
          className={`flex items-center gap-2 transition-colors ${
            hasPreviousPage && !isFetching
              ? "hover:text-primary"
              : "cursor-not-allowed opacity-30"
          }`}
        >
          <span className="material-symbols-outlined text-lg">chevron_left</span>
          {prevLabel}
        </button>
        <span className="font-bold text-primary">
          {folioLabel}{" "}
          <span className="font-headline mx-2 text-lg italic">{page}</span>{" "}
          {ofLabel} {totalPages}
        </span>
        <button
          type="button"
          disabled={!hasNextPage || isFetching}
          onClick={onNext}
          className={`flex items-center gap-2 transition-colors ${
            hasNextPage && !isFetching
              ? "hover:text-primary"
              : "cursor-not-allowed opacity-30"
          }`}
        >
          {nextLabel}
          <span className="material-symbols-outlined text-lg">chevron_right</span>
        </button>
      </div>
    </div>
  );
}

type PodcastEpisodeCardProps = {
  image: string;
  alt: string;
  title: string;
  volume: string;
  date: string;
  duration: string;
  progress: number;
  current: string;
  total: string;
  playIcon: "play_arrow" | "pause";
  listenHref: string;
  detailLabel: string;
  listenAria: string;
};

function PodcastEpisodeCard({
  image,
  alt,
  title,
  volume,
  date,
  duration,
  progress,
  current,
  total,
  playIcon,
  listenHref,
  detailLabel,
  listenAria,
}: PodcastEpisodeCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-primary/5 bg-surface shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-square overflow-hidden bg-black/5">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-primary/20 transition-colors group-hover:bg-transparent" />
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-primary/90 to-transparent p-4">
          <div className="flex items-center gap-3">
            <a
              href={listenHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-tertiary-fixed text-on-tertiary-fixed transition-transform hover:scale-105"
              aria-label={listenAria}
            >
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {playIcon}
              </span>
            </a>
            <div className="min-w-0 grow">
              <div className="h-1 overflow-hidden rounded-full bg-white/30">
                <div
                  className="h-full bg-tertiary-fixed-dim"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-1 flex justify-between font-label text-[8px] font-bold tracking-tighter text-on-primary/70 uppercase">
                <span>{current}</span>
                <span>{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex grow flex-col p-6 group-hover:bg-surface-container-lowest bg-surface-container">
        <span className="font-label text-[10px] font-bold tracking-widest text-tertiary-fixed-dim uppercase">
          {volume}
        </span>
        <h3 className="font-headline mt-2 mb-3 text-xl leading-snug font-bold text-primary">
          {title}
        </h3>
        <div className="mb-6 flex flex-wrap items-center gap-4 font-label text-xs font-medium text-on-surface-variant">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">
              calendar_today
            </span>
            {date}
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">
              schedule
            </span>
            {duration}
          </span>
        </div>
        <div className="mt-auto">
          <a
            href={listenHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-primary/20 pb-1 font-label text-xs font-bold tracking-widest text-primary uppercase transition-all hover:border-primary"
          >
            {detailLabel}{" "}
            <span className="material-symbols-outlined text-[14px]">
              open_in_new
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function PodcastIndexPage() {
  const { t } = useTranslations();
  const [pageMm, setPageMm] = useState(1);
  const mmQuery = useMexicoMedievalPageQuery(pageMm);
  const appleTotal = mmQuery.data?.pagination.appleTotal;
  const spotifyTotal = mmQuery.data?.pagination.spotifyTotal;
  const mmTotalPages =
    appleTotal !== undefined && spotifyTotal !== undefined
      ? Math.max(
          totalPagesFromTotal(appleTotal),
          totalPagesFromTotal(spotifyTotal),
        )
      : 1;

  const spotifySeriesGroupsWithArt = useMemo(() => {
    const guests = mmQuery.data?.spotifyGuests ?? [];
    const groups = groupBySeries(guests);
    const baseIdx = (pageMm - 1) * ENTITY_PAGE_SIZE;
    const episodeOffsetPerGroup: number[] = [];
    let cumulative = 0;
    for (const g of groups) {
      episodeOffsetPerGroup.push(cumulative);
      cumulative += g.episodes.length;
    }
    return groups.map((group, gi) => ({
      series: group.series,
      episodes: group.episodes.map((item, j) => {
        const linear = episodeOffsetPerGroup[gi] + j;
        const artGlobal = baseIdx + linear;
        return {
          item,
          image: CARD_IMAGES[artGlobal % CARD_IMAGES.length],
          altKey: cardAltKeys[artGlobal % cardAltKeys.length],
        };
      }),
    }));
  }, [mmQuery.data?.spotifyGuests, pageMm]);

  const mexicoMedievalAudioCards = useMemo(() => {
    const alts = cardAltKeys.map((k) => t(k));
    const items = mmQuery.data?.episodes ?? [];
    const offset = (pageMm - 1) * ENTITY_PAGE_SIZE;
    return items.map((item, i) => {
      const globalIndex = offset + i;
      const image = CARD_IMAGES[globalIndex % CARD_IMAGES.length];
      const alt = alts[globalIndex % alts.length] ?? "";
      const isShow = item.documentType === "appleShow";
      return {
        ...item,
        image,
        alt,
        volume: isShow
          ? t("podcastPage.volumeShow")
          : t("podcastPage.volumeEpisode"),
        date: t("podcastPage.applePodcasts"),
        duration: isShow
          ? t("podcastPage.seriesComplete")
          : t("podcastPage.episode"),
        progress: 0,
        current: "0:00",
        total: "—",
        playIcon: "play_arrow" as const,
        detailLabel: isShow
          ? t("podcastPage.openApple")
          : t("podcastPage.listenEpisode"),
      };
    });
  }, [mmQuery.data?.episodes, pageMm, t]);

  return (
    <PageContainer title={t("podcastPage.titleLine")} subtitle={t("podcastPage.subtitle")}>
        <section
          id="audio-volumes"
          className="mb-32 scroll-mt-24"
        >
          <div className="mx-auto max-w-screen-2xl px-8">
            <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
              <div>
                <h2 className="font-headline text-4xl font-bold text-primary">
                  {t("podcastPage.audioVolumes")}
                </h2>
                <p className="mt-2 text-on-surface-variant">
                  {t("podcastPage.appleSubtitle")}
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href={APPLE_SHOW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-surface-container-highest px-4 py-2 font-label text-xs font-bold tracking-widest text-primary uppercase transition-colors hover:bg-tertiary-fixed-dim"
                >
                  {t("podcastPage.viewSeries")}
                </a>
              </div>
            </div>
            {mmQuery.isPending && !mmQuery.data && (
              <p className="mb-8 text-center text-on-surface-variant">
                {t("podcastPage.listLoading")}
              </p>
            )}
            {mmQuery.isError && (
              <p className="mb-8 text-center text-primary" role="alert">
                {t("podcastPage.listLoadError")}
              </p>
            )}
            <div
              className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
              aria-busy={mmQuery.isFetching}
            >
              {mexicoMedievalAudioCards.map((ep, idx) => (
                <PodcastEpisodeCard
                  key={`${pageMm}-${idx}-${ep.listenHref}`}
                  image={ep.image}
                  alt={ep.alt}
                  title={ep.title}
                  volume={ep.volume}
                  date={ep.date}
                  duration={ep.duration}
                  progress={ep.progress}
                  current={ep.current}
                  total={ep.total}
                  playIcon={ep.playIcon}
                  listenHref={ep.listenHref}
                  detailLabel={ep.detailLabel}
                  listenAria={t("podcastPage.listenAria")}
                />
              ))}
            </div>
            {mmTotalPages > 1 ? (
              <PaginationFolio
                page={pageMm}
                totalPages={mmTotalPages}
                isFetching={mmQuery.isFetching}
                onPrev={() => setPageMm((p) => Math.max(1, p - 1))}
                onNext={() =>
                  setPageMm((p) => Math.min(mmTotalPages, p + 1))
                }
                prevLabel={t("podcastPage.prev")}
                nextLabel={t("podcastPage.next")}
                folioLabel={t("podcastPage.folio")}
                ofLabel={t("podcastPage.of")}
              />
            ) : null}
            <div className="mt-20 text-center">
              <a
                href={APPLE_SHOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-primary/20 px-10 py-4 font-label font-bold tracking-widest text-primary uppercase transition-all hover:bg-primary hover:text-on-primary"
              >
                {t("podcastPage.discoverArchive")}
              </a>
            </div>
          </div>
        </section>

        <div className=" py-16 md:py-24">
          {spotifySeriesGroupsWithArt.map((group, groupIndex) => (
            <section
              key={`${group.series}-${groupIndex}`}
              id={`spotify-series-${groupIndex}`}
              className="mx-auto max-w-screen-2xl border-t border-outline-variant/15 px-8 py-16 first:border-t-0 first:pt-0 scroll-mt-24"
            >
              <div className="mb-12">
                <span className="font-label mb-2 block text-xs font-bold tracking-widest text-tertiary-fixed-dim uppercase">
                  {t("podcastPage.spotifyLabel")}
                </span>
                <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                  {group.series}
                </h2>
                <p className="mt-2 text-on-surface-variant">
                  {t("podcastPage.episodesInSeries")}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {group.episodes.map(({ item, image, altKey }) => (
                  <PodcastEpisodeCard
                    key={item.listenHref}
                    image={image}
                    alt={t(altKey ?? "podcastPage.cardAlt1")}
                    title={item.title}
                    volume={t("podcastPage.spotifyLabel")}
                    date={t("podcastPage.spotifyLabel")}
                    duration={t("podcastPage.episode")}
                    progress={0}
                    current="0:00"
                    total="—"
                    playIcon="play_arrow"
                    listenHref={item.listenHref}
                    detailLabel={t("podcastPage.openSpotify")}
                    listenAria={t("podcastPage.listenAria")}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mx-auto max-w-5xl px-8">
          <NewsletterSubscribeCard />
        </div>
        </PageContainer>
  );
}
