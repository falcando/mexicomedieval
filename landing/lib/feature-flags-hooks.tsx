"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import {
  BOOKS_FILTER_QUERY_KEY,
  NEWSLETTER_SUBSCRIPTIONS_QUERY_KEY,
  resolveBooksFilterWithQueryParam,
  resolveNewsletterSubscriptionsWithQueryParam,
} from "@/lib/feature-flags";

/**
 * Effective newsletter UI flag: JSON config plus optional `?newsletterSubscriptions=…` override
 * (`true` / `false` / `1` / `0` / `yes` / `no` / `on` / `off`). Only affects this browser session / URL.
 */
export function useNewsletterSubscriptionsEnabled(): boolean {
  const searchParams = useSearchParams();
  const raw = searchParams.get(NEWSLETTER_SUBSCRIPTIONS_QUERY_KEY);
  return useMemo(
    () => resolveNewsletterSubscriptionsWithQueryParam(raw),
    [raw],
  );
}

/**
 * Books page filter UI: JSON config plus optional `?booksFilter=…` override
 * (`true` / `false` / `1` / `0` / `yes` / `no` / `on` / `off`). Only affects this browser session / URL.
 */
export function useBooksFilterEnabled(): boolean {
  const searchParams = useSearchParams();
  const raw = searchParams.get(BOOKS_FILTER_QUERY_KEY);
  return useMemo(() => resolveBooksFilterWithQueryParam(raw), [raw]);
}
