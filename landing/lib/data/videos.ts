import type { SiteVideo, VideosPageResponse } from "@/lib/types/video";
import { slicePage, totalPagesFromListLength } from "@/lib/pagination";

/** Placeholder for future video entries (talks, lectures, appearances). */
export const VIDEOS: SiteVideo[] = [];

export function getVideosTotalPages(): number {
  return totalPagesFromListLength(VIDEOS.length);
}

export function getVideosPagePayload(page: number): VideosPageResponse | null {
  const videos = slicePage(VIDEOS, page);
  if (videos === null) {
    return null;
  }
  return {
    videos,
    pagination: { total: VIDEOS.length },
  };
}
