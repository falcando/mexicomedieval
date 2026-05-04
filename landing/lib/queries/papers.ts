"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  fetchAcademicPapersPage,
  fetchPresentationsPage,
} from "@/lib/api/papers";

export function academicPapersPageQueryKey(page: number) {
  return ["papers", "academic", page] as const;
}

export function presentationsPageQueryKey(page: number) {
  return ["papers", "presentations", page] as const;
}

export function useAcademicPapersPageQuery(page: number) {
  return useQuery({
    queryKey: academicPapersPageQueryKey(page),
    queryFn: () => fetchAcademicPapersPage(page),
    placeholderData: keepPreviousData,
  });
}

export function usePresentationsPageQuery(page: number) {
  return useQuery({
    queryKey: presentationsPageQueryKey(page),
    queryFn: () => fetchPresentationsPage(page),
    placeholderData: keepPreviousData,
  });
}
