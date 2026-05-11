import type { EventsPageResponse } from "@/lib/types/event";

export async function fetchEventsPage(
  page: number,
): Promise<EventsPageResponse> {
  const res = await fetch(`/api/events/${page}`);
  if (!res.ok) {
    throw new Error(`Failed to load events: ${res.status}`);
  }
  return res.json() as Promise<EventsPageResponse>;
}

