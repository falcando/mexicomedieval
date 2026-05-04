import {
  getPodcastCatalogPagePayload,
  getPodcastCatalogTotalPages,
} from "@/lib/data/podcast-mexico-medieval";

export const dynamic = "force-static";

export function generateStaticParams() {
  const n = getPodcastCatalogTotalPages();
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
  const payload = getPodcastCatalogPagePayload(page);
  if (!payload) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }
  return Response.json(payload);
}
