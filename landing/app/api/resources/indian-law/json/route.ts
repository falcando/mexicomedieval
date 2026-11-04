import {
  INDIAN_LAW_CATEGORIES,
  INDIAN_LAW_SOURCES,
} from "@/lib/data/indian-law-sources";
import { INDIAN_LAW_EVENTS } from "@/lib/data/indian-law-events";

export const dynamic = "force-static";

export async function GET() {
  const payload = {
    categories: INDIAN_LAW_CATEGORIES,
    sources: INDIAN_LAW_SOURCES,
    events: INDIAN_LAW_EVENTS,
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": 'attachment; filename="legislacion-indiana-siglo-xvi.json"',
    },
  });
}
