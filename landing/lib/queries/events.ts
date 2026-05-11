"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchEventsPage } from "@/lib/api/events";

export function eventsPageQueryKey(page: number) {
  return ["events", "page", page] as const;
}

export function useEventsPageQuery(page: number) {
  return useQuery({
    queryKey: eventsPageQueryKey(page),
    queryFn: () => fetchEventsPage(page),
    placeholderData: keepPreviousData,
  });
}

