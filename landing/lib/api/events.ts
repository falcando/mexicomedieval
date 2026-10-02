import type { Locale } from "@/lib/i18n-config";
import type { EventsPageResponse } from "@/lib/types/event";

/**
 * Loads events in the browser without calling `/api/events/...`.
 * With `output: "export"`, App Route handlers are not served in `next dev` (404),
 * and production is static files only — same data as `app/api/events/[language]/[page]/route.ts`.
 */
export async function fetchEventsPage(
  page: number,
  language: Locale,
): Promise<EventsPageResponse> {
  const { getEventsPagePayload } = await import("@/lib/data/events");
  const payload = getEventsPagePayload(page, language);
  if (!payload) {
    throw new Error("Failed to load events: not found");
  }
  return payload;
}

