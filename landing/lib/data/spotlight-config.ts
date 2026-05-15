import type { SpotlightTarget } from "@/lib/types/spotlight";

/**
 * Home spotlight selection. For the featured journal article, keep this in sync
 * with the entry that has `highlighted: true` in `lib/data/articles.ts` (same `catalogId`).
 */
export const SPOTLIGHT_TARGET: SpotlightTarget = {
  kind: "journalArticle",
  catalogId: "sigurgards-saga-stemma",
};
