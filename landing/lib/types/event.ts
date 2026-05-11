export type SiteEvent = {
  title: string;
  description: string;
  href: string;
  year?: string;
};

export type EventsPageResponse = {
  events: SiteEvent[];
  pagination: { total: number };
};

