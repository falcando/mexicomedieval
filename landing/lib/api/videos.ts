import type { VideosPageResponse } from "@/lib/types/video";

export async function fetchVideosPage(
  page: number,
): Promise<VideosPageResponse> {
  const res = await fetch(`/api/videos/${page}`);
  if (!res.ok) {
    throw new Error(`Failed to load videos: ${res.status}`);
  }
  return res.json() as Promise<VideosPageResponse>;
}
