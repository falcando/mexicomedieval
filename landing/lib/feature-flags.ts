import featureFlags from "../public/feature-flags.json";

export type FeatureFlags = {
  newsletterSubscriptions: boolean;
  booksFilter: boolean;
};

const flags = featureFlags as FeatureFlags;

const FALSEY = new Set(["false", "0", "no", "off"]);
const TRUTHY = new Set(["true", "1", "yes", "on"]);

/** Same name as the key in `public/feature-flags.json`; use as `?newsletterSubscriptions=true`. */
export const NEWSLETTER_SUBSCRIPTIONS_QUERY_KEY =
  "newsletterSubscriptions" as const;

/**
 * Parse a query param value for a boolean feature flag override.
 * Returns `null` if missing or not a recognized boolean string (override ignored).
 */
export function parseBooleanQueryOverride(raw: string | null): boolean | null {
  if (raw === null || raw === "") return null;
  const v = raw.trim().toLowerCase();
  if (FALSEY.has(v)) return false;
  if (TRUTHY.has(v)) return true;
  return null;
}

/**
 * Value from `public/feature-flags.json` only (no URL override).
 * Prefer `useNewsletterSubscriptionsEnabled` in client components so query params apply.
 */
export function isNewsletterSubscriptionsEnabled(): boolean {
  return flags.newsletterSubscriptions;
}

export function resolveNewsletterSubscriptionsWithQueryParam(
  queryValue: string | null,
): boolean {
  const override = parseBooleanQueryOverride(queryValue);
  if (override !== null) return override;
  return isNewsletterSubscriptionsEnabled();
}

/** Same name as the key in `public/feature-flags.json`; use as `?booksFilter=true`. */
export const BOOKS_FILTER_QUERY_KEY = "booksFilter" as const;

/**
 * Value from `public/feature-flags.json` only (no URL override).
 * Prefer `useBooksFilterEnabled` in client components so query params apply.
 */
export function isBooksFilterEnabled(): boolean {
  return flags.booksFilter;
}

export function resolveBooksFilterWithQueryParam(
  queryValue: string | null,
): boolean {
  const override = parseBooleanQueryOverride(queryValue);
  if (override !== null) return override;
  return isBooksFilterEnabled();
}
