"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { NewsletterSubscribeCard } from "@/components/sections/NewsletterSubscribeCard";
import Image from "next/image";
import { useMemo } from "react";

const HERO_TEXTURE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDUH7wOddMA3XCgIuP14AcwEUJOnqb91THh_CKmvG7Tj0LrBdnP8dVdw8MFax_SptBh69rcXgqxlC2RoN5YvnHymeYHQ94kIYYGULXLTVXGmn61UjKFmlXsaqy-br71iba-a62fzujdfCn01Jlhy2jk395C-rRiKLruy4bS6GhnaZwchaxF62EO3zIBQZL2Dh81xZleD2xZIo6OpFhehJ_5Qv1paCRAFXuWvYE5ISfJEyikerKCyOy7_mfa2is2NX6MSSHAUz-2z0oL";

const FEATURED_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAIbz7caxEGDedMumvcfN8Ff10t-3i9cLSgg3kLgq8zLwUyP8Y4bdxiixp_CRyeQE7XmMOJfRDhxnm7V5RVBZUe7LN_sDW4G2mKnUDwqQ6YkvjkqN9Ze3kGU3VSmoER64QDGXrBtYCtLjQe2-IvnrwSPO5OeDQnrA7lkWFOVIbj2GiftrDB1bqP0GGzJXftLKloKE1MM12HA5aD_BzVvArgPhWEJGHU54FqH7LJmPhk-4OVHpFvP6gzO65HyA933fRssZXALFtfBZrC";

const CARD_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCvsgoAWQcwvkJI-ciwvnu70ZvoUMBdtqISqpN5I5zDuJOCcOyEQbpmRuqPnh2eLui0y-JXeQ6-XJEnfCvjUrWEZ_t2ices3y4kxWY1rRFkKmvTORZJSmzRQAMUytOsJrpx6nBmQQAI3BHxQyLT8OaF_UidtibpehWBdrmdx0W6xCCPuCexqSZTVRzlch-t3OGsr21p5EI2wSyQDUpuyMSYCRzvPFNqQVv0DEOM9MdPDzW3hHHJ6Ayev2uOS-u6dxc73Mr44USdwix8",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBn9KbIcZ1XA8zD1ZT2snQ7Iuz4nUUchwK_0KDAzSV6rrfO-qnM1OTvgRjpqMR-9ln3-c28Lv2JHBpcNtfuqjL_DP4w4iVl-74Mx7IRdHAeOv6awcTsHoCNd_HGYE_nZTAaLvltX-jcdVYekbuXWT0jgpWKCo182JdZTQp6WZ0S2zXZyB5-P8o48uS6yWdXac5XgeiGzY3NdVhKTju1btlY_LUPnNOnddsXYyW6Vjl2hMaJdCsZkLArlMVn4h3npN03kLtr0w0BZdfN",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuANPayenFBMFxeARbEqcH3fSbGUSU4glYaWUGRSggODsrP3sbf-WAytM8CpOPTcEItFesn-yCOqApcu-YRDUj4lwWkJOZomiioFgK3ZAYFJXAdJIyngk34_Q5TvzVBd2nYWLQWLHVXMWtT_Nr57YHrm9OYkjUKNInSP0eXShvIjhvcbgWAYHzilFNEKmDvc_CanHch1YYIYBk4b8FfFBRYioIfV5NaZV7X-QaNCGPQJZ4wD3hXmCFs75KYnoixdfQRAG8mDwRqH73Db",
] as const;

const APPLE_SHOW_URL =
  "https://podcasts.apple.com/us/podcast/m%C3%A9xico-medieval/id1571145663";

/** Sourced from static-html/podcast.html; `listenHref` opens Apple Podcasts or Spotify (no iframes). */
const MEXICO_MEDIEVAL_ITEMS = [
  {
    title: "México Medieval - Serie completa",
    listenHref: APPLE_SHOW_URL,
    documentType: "appleShow" as const,
    highlighted: true,
  },
  {
    title: "La leyenda de san Jorge y el dragón",
    listenHref:
      "https://podcasts.apple.com/us/podcast/la-leyenda-de-san-jorge-y-el-drag%C3%B3n/id1571145663?i=1000533096220",
    documentType: "appleEpisode" as const,
  },
  {
    title: "Transiciones del poder medieval",
    listenHref:
      "https://podcasts.apple.com/us/podcast/transiciones-del-poder-medieval/id1571145663?i=1000532381918",
    documentType: "appleEpisode" as const,
  },
  {
    title: "Derecho de conquista",
    listenHref:
      "https://podcasts.apple.com/us/podcast/derecho-de-conquista/id1571145663?i=1000531755209",
    documentType: "appleEpisode" as const,
  },
  {
    title: "Pastes medievales",
    listenHref:
      "https://podcasts.apple.com/us/podcast/pastes-medievales/id1571145663?i=1000530996373",
    documentType: "appleEpisode" as const,
  },
  {
    title: "Mujeres poderosas",
    listenHref:
      "https://podcasts.apple.com/us/podcast/mujeres-poderosas/id1571145663?i=1000530280407",
    documentType: "appleEpisode" as const,
  },
  {
    title: "Escudo Nacional mexicano",
    listenHref:
      "https://podcasts.apple.com/us/podcast/escudo-nacional-mexicano/id1571145663?i=1000529598471",
    documentType: "appleEpisode" as const,
  },
  {
    title: "Festivales Medievales en México",
    listenHref:
      "https://podcasts.apple.com/us/podcast/festivales-medievales-en-m%C3%A9xico/id1571145663?i=1000528855857",
    documentType: "appleEpisode" as const,
  },
  {
    title: "Ardemac y el recreacionismo histórico",
    listenHref:
      "https://podcasts.apple.com/us/podcast/ardemac-y-el-recreacionismo-hist%C3%B3rico/id1571145663?i=1000528152301",
    documentType: "appleEpisode" as const,
  },
  {
    title: "Videojuegos medievales",
    listenHref:
      "https://podcasts.apple.com/us/podcast/videojuegos-medievales/id1571145663?i=1000527414895",
    documentType: "appleEpisode" as const,
  },
  {
    title: "Armas de asedio",
    listenHref:
      "https://podcasts.apple.com/us/podcast/armas-de-asedio/id1571145663?i=1000526612477",
    documentType: "appleEpisode" as const,
  },
] as const;

const TIEMPOS_IMPOSIBLES = {
  title: "Tiempos Imposibles",
  episodeTitle: "Atila destruye Roma (ft. Hervin Fernández)",
  listenHref: "https://open.spotify.com/episode/1P1Nl2MBJ2eGjugxXXgmLh",
} as const;

const SPOTIFY_GUEST_SPOTS = [
  {
    series: "Días con la Garra y Ale Garibay",
    title: "ORIGEN DE LA CRIPTOMONEDA",
    listenHref: "https://open.spotify.com/episode/3CjyRFiEny0GvSkvRdKpna",
    documentType: "spotifyEpisode" as const,
  },
  {
    series: "Días con la Garra y Ale Garibay",
    title: "LA HISTORIA DEL CÓNCLAVE",
    listenHref: "https://open.spotify.com/episode/4Bt9R1rGFCj3XHnZnrBzvO",
    documentType: "spotifyEpisode" as const,
  },
  {
    series: "Días con la Garra y Ale Garibay",
    title: "LA CAÍDA DE CONSTANTINOPLA",
    listenHref: "https://open.spotify.com/episode/2OE0hJyop1kCoHon1pzbkc",
    documentType: "spotifyEpisode" as const,
  },
  {
    series: "Días con la Garra y Ale Garibay",
    title: "EL TEQUILA",
    listenHref: "https://open.spotify.com/episode/3PLCmjykGbWvCWiL95tKZu",
    documentType: "spotifyEpisode" as const,
  },
  {
    series: "Días con la Garra y Ale Garibay",
    title:
      "EL FLAUTISTA DE HAMELIN: ENTRE PESTE, CASTIGO Y LEYENDA",
    listenHref: "https://open.spotify.com/episode/1CP1xskhp6El9zS2VEoOkK",
    documentType: "spotifyEpisode" as const,
  },
  {
    series: "Días con la Garra y Ale Garibay",
    title:
      "PEREGRINACIÓN MEXICA Y SÍMBOLOS ESPAÑOLES: La historia detrás del Escudo Nacional",
    listenHref: "https://open.spotify.com/episode/0Aw1CdAhP8W2KUYcS3kcdr",
    documentType: "spotifyEpisode" as const,
  },
  {
    series: '"Se Tenía Que Decir" con El Terri Podcast',
    title:
      "Hervin Fernández, historiador, medievalista e investigador",
    listenHref: "https://open.spotify.com/episode/7uyMnMNWmC5ZOKnCDKAC43",
    documentType: "spotifyEpisode" as const,
  },
] as const;

const SE_TENIA_QUE_DECIR_EPISODE = SPOTIFY_GUEST_SPOTS.find((s) =>
  s.series.includes("Terri"),
)!;

function groupBySeries<T extends { series: string }>(
  items: readonly T[],
): { series: string; episodes: T[] }[] {
  const order: string[] = [];
  const seen = new Set<string>();
  for (const item of items) {
    if (!seen.has(item.series)) {
      seen.add(item.series);
      order.push(item.series);
    }
  }
  return order.map((series) => ({
    series,
    episodes: items.filter((i) => i.series === series),
  }));
}

const SPOTIFY_SERIES_GROUPS = groupBySeries(SPOTIFY_GUEST_SPOTS);

const cardAltKeys = [
  "podcastPage.cardAlt1",
  "podcastPage.cardAlt2",
  "podcastPage.cardAlt3",
] as const;

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
      <div className="flex grow flex-col p-6">
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

export default function PodcastPage() {
  const { t } = useTranslations();

  const mexicoMedievalAudioCards = useMemo(() => {
    const alts = cardAltKeys.map((k) => t(k));
    return MEXICO_MEDIEVAL_ITEMS.map((item, i) => {
      const image = CARD_IMAGES[i % CARD_IMAGES.length];
      const alt = alts[i % alts.length] ?? "";
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
  }, [t]);

  return (
    <div className="relative flex min-h-full flex-col">
      <div
        className="manuscript-grain pointer-events-none fixed inset-0 z-100"
        aria-hidden
      />

      <main className="pb-20 pt-8 md:pt-10">
        <section className="relative overflow-hidden bg-surface-container-low px-8 py-24 md:py-32">
          <div className="absolute inset-0 opacity-10">
            <Image
              src={HERO_TEXTURE}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <span className="font-label mb-6 block text-xs font-semibold tracking-[0.3em] text-tertiary-fixed-dim uppercase">
              {t("podcastPage.heroKicker")}
            </span>
            <h1 className="font-headline mb-8 text-5xl leading-tight font-bold tracking-tight text-primary md:text-7xl">
              {t("podcastPage.heroTitleBefore")}{" "}
              <span className="font-normal italic">
                {t("podcastPage.heroTitleAccent")}
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed font-light text-on-surface-variant md:text-xl">
              {t("podcastPage.heroSub")}
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#audio-volumes"
                className="group flex items-center gap-3 rounded-md border-b-2 border-tertiary-fixed-dim bg-primary px-8 py-4 font-label font-semibold uppercase tracking-wide text-on-primary transition-all hover:bg-primary-container"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
                {t("podcastPage.startListening")}
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-8 py-32">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <div className="group relative lg:col-span-7">
              <div className="absolute -top-6 -left-6 z-0 h-32 w-32 bg-tertiary-fixed/20" />
              <a
                href={TIEMPOS_IMPOSIBLES.listenHref}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 block overflow-hidden rounded-lg bg-surface-container-highest shadow-xl shadow-primary/5 transition-opacity hover:opacity-95"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={FEATURED_IMG}
                    alt={t("podcastPage.featuredImgAlt")}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 58vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-0 p-10 text-on-primary">
                    <span className="mb-4 inline-block bg-tertiary-fixed px-3 py-1 font-label text-[10px] font-bold tracking-widest text-on-tertiary-fixed uppercase">
                      {t("podcastPage.spotify")}
                    </span>
                    <h3 className="font-headline mb-2 text-3xl font-bold">
                      {TIEMPOS_IMPOSIBLES.title}
                    </h3>
                    <p className="max-w-lg font-light text-on-primary/80">
                      {TIEMPOS_IMPOSIBLES.episodeTitle}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="lg:col-span-5">
              <h2 className="font-headline mb-6 text-4xl leading-tight font-bold text-primary">
                {t("podcastPage.featuredCollaborations")}
              </h2>
              <p className="mb-8 leading-relaxed text-on-surface-variant">
                {t("podcastPage.collaborationsBody")}
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 rounded-md border-l-4 border-tertiary-fixed-dim bg-surface-container-low p-4">
                  <div className="font-headline text-2xl font-bold text-primary italic opacity-30">
                    01
                  </div>
                  <div>
                    <a
                      href={TIEMPOS_IMPOSIBLES.listenHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-headline font-bold text-primary underline-offset-4 hover:underline"
                    >
                      {TIEMPOS_IMPOSIBLES.title}
                    </a>
                    <p className="mt-1 text-sm text-on-surface-variant">
                      {TIEMPOS_IMPOSIBLES.episodeTitle}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 rounded-md border-l-4 border-transparent p-4 transition-colors hover:bg-surface-container-low">
                  <div className="font-headline text-2xl font-bold text-primary italic opacity-30">
                    02
                  </div>
                  <div>
                    <a
                      href={SE_TENIA_QUE_DECIR_EPISODE.listenHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-headline font-bold text-primary underline-offset-4 hover:underline"
                    >
                      {t("podcastPage.seTeniaQueDecir")}
                    </a>
                    <p className="mt-1 text-sm text-on-surface-variant">
                      {SE_TENIA_QUE_DECIR_EPISODE.title}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="audio-volumes"
          className="bg-surface-container py-32 scroll-mt-24"
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
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {mexicoMedievalAudioCards.map((ep) => (
                <PodcastEpisodeCard
                  key={ep.listenHref}
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

        <div className="bg-surface-container-low py-16 md:py-24">
          {SPOTIFY_SERIES_GROUPS.map((group, groupIndex) => (
            <section
              key={group.series}
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
                {group.episodes.map((item, i) => {
                  const artIdx = (groupIndex * 5 + i) % CARD_IMAGES.length;
                  const image = CARD_IMAGES[artIdx];
                  const alt =
                    t(cardAltKeys[artIdx % cardAltKeys.length] ?? "podcastPage.cardAlt1");
                  return (
                    <PodcastEpisodeCard
                      key={item.listenHref}
                      image={image}
                      alt={alt}
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
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <div className="mx-auto max-w-5xl px-8">
          <NewsletterSubscribeCard />
        </div>
      </main>
    </div>
  );
}
