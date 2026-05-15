import type { SpotifyGuestSpot } from "@/lib/data/podcast-spotify-guests";

export type MexicoMedievalDocumentType = "appleShow" | "appleEpisode";

export type MexicoMedievalEpisode = {
  catalogId?: string;
  title: string;
  listenHref: string;
  documentType: MexicoMedievalDocumentType;
  highlighted?: boolean;
  series: string;
};

export const PODCAST_CATEGORY_SLUGS = [
  "mexico-medieval",
  "dias-con-la-garra-y-ale-garibay",
  "others",
] as const;

export type PodcastCategorySlug = (typeof PODCAST_CATEGORY_SLUGS)[number];

export function isPodcastCategorySlug(
  value: string,
): value is PodcastCategorySlug {
  return (PODCAST_CATEGORY_SLUGS as readonly string[]).includes(value);
}

export type PodcastSectionResponse = {
  category: PodcastCategorySlug;
  appleEpisodes: MexicoMedievalEpisode[];
  spotifyGuests: SpotifyGuestSpot[];
};
