"use client";

import { useI18n } from "@/components/i18n/LocaleProvider";
import { useQuery } from "@tanstack/react-query";
import type { Locale } from "@/lib/i18n-config";
import {
  fetchArticleChaptersPage,
  fetchJournalArticlesPage,
} from "@/lib/api/articles";

export function journalArticlesPageQueryKey(page: number, language: Locale) {
  return ["articles", "journal", page, language] as const;
}

export function articleChaptersPageQueryKey(page: number, language: Locale) {
  return ["articles", "chapters", page, language] as const;
}

export function useJournalArticlesPageQuery(page: number) {
  const { locale } = useI18n();
  return useQuery({
    queryKey: journalArticlesPageQueryKey(page, locale),
    queryFn: () => fetchJournalArticlesPage(page, locale),
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

export function useArticleChaptersPageQuery(page: number) {
  const { locale } = useI18n();
  return useQuery({
    queryKey: articleChaptersPageQueryKey(page, locale),
    queryFn: () => fetchArticleChaptersPage(page, locale),
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
