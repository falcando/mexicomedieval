"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import {
  NEWSLETTER_SUBSCRIPTIONS_QUERY_KEY,
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
