import type { EventsPageResponse, SiteEvent } from "@/lib/types/event";
import { slicePage, totalPagesFromListLength } from "@/lib/pagination";

/** Placeholder for future event entries (talks, lectures, appearances). */
export const EVENTS: SiteEvent[] = [];

export function getEventsTotalPages(): number {
  return totalPagesFromListLength(EVENTS.length);
}

export function getEventsPagePayload(
  page: number,
): EventsPageResponse | null {
  const events = slicePage(EVENTS, page);
  if (events === null) {
    return null;
  }
  return {
    events,
    pagination: { total: EVENTS.length },
  };
}

