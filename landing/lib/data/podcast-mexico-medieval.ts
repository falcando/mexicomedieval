import type {
  MexicoMedievalEpisode,
  PodcastCategorySlug,
  PodcastSectionResponse,
} from "@/lib/types/podcast-mexico-medieval";
import {
  DIAS_CON_LA_GARRA_Y_ALE_GARIBAY_SERIES,
  SPOTIFY_GUEST_SPOTS,
} from "@/lib/data/podcast-spotify-guests";

export const APPLE_SHOW_URL =
  "https://podcasts.apple.com/us/podcast/m%C3%A9xico-medieval/id1571145663";

/** Sourced from static-html/podcast.html; `listenHref` opens Apple Podcasts or Spotify (no iframes). */
export const MEXICO_MEDIEVAL_ITEMS: readonly MexicoMedievalEpisode[] = [
  {
    catalogId: "podcast-mexico-medieval-show",
    title: "México Medieval - Serie completa",
    listenHref: APPLE_SHOW_URL,
    documentType: "appleShow",
    highlighted: true,
    series: "mexico-medieval",
  },
  {
    catalogId: "podcast-san-jorge-dragon",
    title: "La leyenda de san Jorge y el dragón",
    listenHref:
      "https://podcasts.apple.com/us/podcast/la-leyenda-de-san-jorge-y-el-drag%C3%B3n/id1571145663?i=1000533096220",
    documentType: "appleEpisode",
    series: "mexico-medieval",
  },
  {
    catalogId: "podcast-transiciones-poder-medieval",
    title: "Transiciones del poder medieval",
    listenHref:
      "https://podcasts.apple.com/us/podcast/transiciones-del-poder-medieval/id1571145663?i=1000532381918",
    documentType: "appleEpisode",
    series: "mexico-medieval",
  },
  {
    catalogId: "podcast-derecho-conquista",
    title: "Derecho de conquista",
    listenHref:
      "https://podcasts.apple.com/us/podcast/derecho-de-conquista/id1571145663?i=1000531755209",
    documentType: "appleEpisode",
    series: "mexico-medieval",
  },
  {
    catalogId: "podcast-pastes-medievales",
    title: "Pastes medievales",
    listenHref:
      "https://podcasts.apple.com/us/podcast/pastes-medievales/id1571145663?i=1000530996373",
    documentType: "appleEpisode",
    series: "mexico-medieval",
  },
  {
    catalogId: "podcast-mujeres-poderosas",
    title: "Mujeres poderosas",
    listenHref:
      "https://podcasts.apple.com/us/podcast/mujeres-poderosas/id1571145663?i=1000530280407",
    documentType: "appleEpisode",
    series: "mexico-medieval",
  },
  {
    catalogId: "podcast-escudo-nacional-mexicano",
    title: "Escudo Nacional mexicano",
    listenHref:
      "https://podcasts.apple.com/us/podcast/escudo-nacional-mexicano/id1571145663?i=1000529598471",
    documentType: "appleEpisode",
    series: "mexico-medieval",
  },
  {
    catalogId: "podcast-festivales-medievales-mexico",
    title: "Festivales Medievales en México",
    listenHref:
      "https://podcasts.apple.com/us/podcast/festivales-medievales-en-m%C3%A9xico/id1571145663?i=1000528855857",
    documentType: "appleEpisode",
    series: "mexico-medieval",
  },
  {
    catalogId: "podcast-ardemac-recreacionismo",
    title: "Ardemac y el recreacionismo histórico",
    listenHref:
      "https://podcasts.apple.com/us/podcast/ardemac-y-el-recreacionismo-hist%C3%B3rico/id1571145663?i=1000528152301",
    documentType: "appleEpisode",
    series: "mexico-medieval",
  },
  {
    catalogId: "podcast-videojuegos-medievales",
    title: "Videojuegos medievales",
    listenHref:
      "https://podcasts.apple.com/us/podcast/videojuegos-medievales/id1571145663?i=1000527414895",
    documentType: "appleEpisode",
    series: "mexico-medieval",
  },
  {
    catalogId: "podcast-armas-asedio",
    title: "Armas de asedio",
    listenHref:
      "https://podcasts.apple.com/us/podcast/armas-de-asedio/id1571145663?i=1000526612477",
    documentType: "appleEpisode",
    series: "mexico-medieval",
  },
];

function spotifyDiasConLaGarraGuests() {
  return SPOTIFY_GUEST_SPOTS.filter(
    (s) => s.series === DIAS_CON_LA_GARRA_Y_ALE_GARIBAY_SERIES,
  );
}

function spotifyOtherCollaborationGuests() {
  return SPOTIFY_GUEST_SPOTS.filter(
    (s) => s.series !== DIAS_CON_LA_GARRA_Y_ALE_GARIBAY_SERIES,
  );
}

export function getPodcastSectionPayload(
  category: PodcastCategorySlug,
): PodcastSectionResponse {
  switch (category) {
    case "mexico-medieval":
      return {
        category,
        appleEpisodes: [...MEXICO_MEDIEVAL_ITEMS],
        spotifyGuests: [],
      };
    case "dias-con-la-garra-y-ale-garibay":
      return {
        category,
        appleEpisodes: [],
        spotifyGuests: spotifyDiasConLaGarraGuests(),
      };
    case "others":
      return {
        category,
        appleEpisodes: [],
        spotifyGuests: spotifyOtherCollaborationGuests(),
      };
  }
}
