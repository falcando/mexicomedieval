import type { PodcastCatalogPageResponse } from "@/lib/types/podcast-mexico-medieval";
import { SPOTIFY_GUEST_SPOTS } from "@/lib/data/podcast-spotify-guests";
import {
  slicePageOrEmpty,
  totalPagesFromListLength,
} from "@/lib/pagination";

export const APPLE_SHOW_URL =
  "https://podcasts.apple.com/us/podcast/m%C3%A9xico-medieval/id1571145663";

/** Sourced from static-html/podcast.html; `listenHref` opens Apple Podcasts or Spotify (no iframes). */
export const MEXICO_MEDIEVAL_ITEMS = [
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

export function getPodcastCatalogTotalPages(): number {
  return Math.max(
    totalPagesFromListLength(MEXICO_MEDIEVAL_ITEMS.length),
    totalPagesFromListLength(SPOTIFY_GUEST_SPOTS.length),
  );
}

export function getPodcastCatalogPagePayload(
  page: number,
): PodcastCatalogPageResponse | null {
  if (!Number.isInteger(page) || page < 1) {
    return null;
  }
  if (page > getPodcastCatalogTotalPages()) {
    return null;
  }
  return {
    episodes: slicePageOrEmpty(MEXICO_MEDIEVAL_ITEMS, page),
    spotifyGuests: slicePageOrEmpty(SPOTIFY_GUEST_SPOTS, page),
    pagination: {
      appleTotal: MEXICO_MEDIEVAL_ITEMS.length,
      spotifyTotal: SPOTIFY_GUEST_SPOTS.length,
    },
  };
}
