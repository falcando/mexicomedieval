import type {
  PodcastCategorySlug,
  PodcastSectionResponse,
} from "@/lib/types/podcast-mexico-medieval";

export async function fetchPodcastSection(
  category: PodcastCategorySlug,
): Promise<PodcastSectionResponse> {
  const res = await fetch(
    `/api/podcasts/catalog/${encodeURIComponent(category)}`,
  );
  if (!res.ok) {
    throw new Error(`Failed to load podcast catalog: ${res.status}`);
  }
  return res.json() as Promise<PodcastSectionResponse>;
}
