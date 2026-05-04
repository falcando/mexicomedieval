export type SiteVideo = {
  title: string;
  description: string;
  href: string;
  year?: string;
};

export type VideosPageResponse = {
  videos: SiteVideo[];
  pagination: { total: number };
};
