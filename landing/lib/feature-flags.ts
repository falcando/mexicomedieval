const FALSEY = new Set(["false", "0", "no", "off"]);

/**
 * Controls newsletter subscribe UI (navbar button, footer block, in-page cards).
 *
 * Build-time flag via `NEXT_PUBLIC_NEWSLETTER_SUBSCRIPTIONS`. When unset, subscriptions are shown.
 * To hide: set to `false`, `0`, `no`, or `off` (case-insensitive).
 */
export function isNewsletterSubscriptionsEnabled(): boolean {
  const raw = process.env.NEXT_PUBLIC_NEWSLETTER_SUBSCRIPTIONS;
  if (raw === undefined || raw === "") return true;
  return !FALSEY.has(raw.trim().toLowerCase());
}
