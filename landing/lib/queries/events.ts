"use client";

import { useI18n } from "@/components/i18n/LocaleProvider";
import { useQuery } from "@tanstack/react-query";
import type { Locale } from "@/lib/i18n-config";
import { fetchEventsPage } from "@/lib/api/events";

export function eventsPageQueryKey(page: number, language: Locale) {
  return ["events", "page", page, language] as const;
}

export function useEventsPageQuery(page: number) {
  const { locale } = useI18n();
  return useQuery({
    queryKey: eventsPageQueryKey(page, locale),
    queryFn: () => fetchEventsPage(page, locale),
    placeholderData: (previousData, previousQuery) => {
      const prevKey = previousQuery?.queryKey;
      const prevLocale =
        Array.isArray(prevKey) && prevKey.length > 3 ? prevKey[3] : undefined;
      if (prevLocale === locale && previousData !== undefined) {
        return previousData;
      }
      return undefined;
    },
  });
}

