import { getPodcastSectionPayload } from "@/lib/data/podcast-mexico-medieval";
import {
  isPodcastCategorySlug,
  PODCAST_CATEGORY_SLUGS,
} from "@/lib/types/podcast-mexico-medieval";

export const dynamic = "force-static";

export function generateStaticParams() {
  return PODCAST_CATEGORY_SLUGS.map((category) => ({ category }));
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ category: string }> },
) {
  const { category } = await context.params;
  if (!isPodcastCategorySlug(category)) {
    return Response.json({ error: "Invalid category" }, { status: 404 });
  }
  return Response.json(getPodcastSectionPayload(category));
}
