/** Hero, featured collaboration, Spotify guest grouping (data list lives in podcast-spotify-guests). */

import { SPOTIFY_GUEST_SPOTS } from "@/lib/data/podcast-spotify-guests";

export type { SpotifyGuestSpot } from "@/lib/data/podcast-spotify-guests";

export const HERO_TEXTURE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDUH7wOddMA3XCgIuP14AcwEUJOnqb91THh_CKmvG7Tj0LrBdnP8dVdw8MFax_SptBh69rcXgqxlC2RoN5YvnHymeYHQ94kIYYGULXLTVXGmn61UjKFmlXsaqy-br71iba-a62fzujdfCn01Jlhy2jk395C-rRiKLruy4bS6GhnaZwchaxF62EO3zIBQZL2Dh81xZleD2xZIo6OpFhehJ_5Qv1paCRAFXuWvYE5ISfJEyikerKCyOy7_mfa2is2NX6MSSHAUz-2z0oL";

export const FEATURED_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAIbz7caxEGDedMumvcfN8Ff10t-3i9cLSgg3kLgq8zLwUyP8Y4bdxiixp_CRyeQE7XmMOJfRDhxnm7V5RVBZUe7LN_sDW4G2mKnUDwqQ6YkvjkqN9Ze3kGU3VSmoER64QDGXrBtYCtLjQe2-IvnrwSPO5OeDQnrA7lkWFOVIbj2GiftrDB1bqP0GGzJXftLKloKE1MM12HA5aD_BzVvArgPhWEJGHU54FqH7LJmPhk-4OVHpFvP6gzO65HyA933fRssZXALFtfBZrC";

export const CARD_IMAGES = {
  'mexico-medieval': '/podcasts/podcast-mexico-medieval.webp',
  'dias-con-la-garra-y-ale-garibay': '/podcasts/podcast-dias.png',
  'se-tenia-que-decir-con-el-terri-podcast': '/podcasts/podcast-se-tenia-que-decir.png',
  'tiempos-imposibles': '/podcasts/podcast-tiempos-imposibles.png',
} as const;

export const TIEMPOS_IMPOSIBLES = {
  title: "Tiempos Imposibles",
  episodeTitle: "Atila destruye Roma (ft. Hervin Fernández)",
  listenHref: "https://open.spotify.com/episode/1P1Nl2MBJ2eGjugxXXgmLh",
} as const;

export { SPOTIFY_GUEST_SPOTS };

export function groupBySeries<T extends { series: string }>(
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

export const SPOTIFY_SERIES_GROUPS = groupBySeries(SPOTIFY_GUEST_SPOTS);

export const SE_TENIA_QUE_DECIR_EPISODE = SPOTIFY_GUEST_SPOTS.find((s) =>
  s.series.includes("Terri"),
)!;

export const cardAltKeys = [
  "podcastPage.cardAlt1",
  "podcastPage.cardAlt2",
  "podcastPage.cardAlt3",
] as const;
