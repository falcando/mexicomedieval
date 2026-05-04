"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchVideosPage } from "@/lib/api/videos";

export function videosPageQueryKey(page: number) {
  return ["videos", "page", page] as const;
}

export function useVideosPageQuery(page: number) {
  return useQuery({
    queryKey: videosPageQueryKey(page),
    queryFn: () => fetchVideosPage(page),
    placeholderData: keepPreviousData,
  });
}
