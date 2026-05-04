import type { PodcastCatalogPageResponse } from "@/lib/types/podcast-mexico-medieval";

export async function fetchMexicoMedievalPage(
  page: number,
): Promise<PodcastCatalogPageResponse> {
  const res = await fetch(`/api/podcasts/mexico-medieval/${page}`);
  if (!res.ok) {
    throw new Error(`Failed to load podcast episodes: ${res.status}`);
  }
  return res.json() as Promise<PodcastCatalogPageResponse>;
}
