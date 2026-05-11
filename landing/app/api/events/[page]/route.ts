import {
  getEventsPagePayload,
  getEventsTotalPages,
} from "@/lib/data/events";

export const dynamic = "force-static";

export function generateStaticParams() {
  const n = getEventsTotalPages();
  return Array.from({ length: n }, (_, i) => ({ page: String(i + 1) }));
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ page: string }> },
) {
  const { page: raw } = await context.params;
  const page = Number.parseInt(raw, 10);
  if (Number.isNaN(page)) {
    return Response.json({ error: "Invalid page" }, { status: 404 });
  }

  const payload = getEventsPagePayload(page);
  if (!payload) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json(payload);
}

