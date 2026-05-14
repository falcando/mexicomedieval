"use client";

import { useQueries } from "@tanstack/react-query";
import { fetchPodcastSection } from "@/lib/api/podcasts";
import {
  PODCAST_CATEGORY_SLUGS,
  type PodcastCategorySlug,
} from "@/lib/types/podcast-mexico-medieval";

export function podcastSectionQueryKey(category: PodcastCategorySlug) {
  return ["podcasts", "section", category] as const;
}

export function usePodcastCatalogSectionsQueries() {
  return useQueries({
    queries: PODCAST_CATEGORY_SLUGS.map((category) => ({
      queryKey: podcastSectionQueryKey(category),
      queryFn: () => fetchPodcastSection(category),
    })),
  });
}
