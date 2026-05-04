"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchBooksPage } from "@/lib/api/books";

export function booksPageQueryKey(page: number) {
  return ["books", "page", page] as const;
}

export function useBooksPageQuery(page: number) {
  return useQuery({
    queryKey: booksPageQueryKey(page),
    queryFn: () => fetchBooksPage(page),
    placeholderData: keepPreviousData,
  });
}
