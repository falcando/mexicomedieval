import type { SpotifyGuestSpot } from "@/lib/data/podcast-spotify-guests";

export type MexicoMedievalDocumentType = "appleShow" | "appleEpisode";

export type MexicoMedievalEpisode = {
  title: string;
  listenHref: string;
  documentType: MexicoMedievalDocumentType;
  highlighted?: boolean;
};

export type PodcastCatalogPageResponse = {
  episodes: MexicoMedievalEpisode[];
  spotifyGuests: SpotifyGuestSpot[];
  pagination: {
    appleTotal: number;
    spotifyTotal: number;
  };
};
