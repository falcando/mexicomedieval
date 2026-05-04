"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  fetchArticleChaptersPage,
  fetchJournalArticlesPage,
} from "@/lib/api/articles";

export function journalArticlesPageQueryKey(page: number) {
  return ["articles", "journal", page] as const;
}

export function articleChaptersPageQueryKey(page: number) {
  return ["articles", "chapters", page] as const;
}

export function useJournalArticlesPageQuery(page: number) {
  return useQuery({
    queryKey: journalArticlesPageQueryKey(page),
    queryFn: () => fetchJournalArticlesPage(page),
    placeholderData: keepPreviousData,
  });
}

export function useArticleChaptersPageQuery(page: number) {
  return useQuery({
    queryKey: articleChaptersPageQueryKey(page),
    queryFn: () => fetchArticleChaptersPage(page),
    placeholderData: keepPreviousData,
  });
}
