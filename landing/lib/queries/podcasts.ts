"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchMexicoMedievalPage } from "@/lib/api/podcasts";

export function mexicoMedievalPageQueryKey(page: number) {
  return ["podcasts", "mexico-medieval", page] as const;
}

export function useMexicoMedievalPageQuery(page: number) {
  return useQuery({
    queryKey: mexicoMedievalPageQueryKey(page),
    queryFn: () => fetchMexicoMedievalPage(page),
  });
}
