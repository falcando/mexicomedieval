/** Shown next to the CTA label when `href` is set. */
export type SiteEventCtaIcon = "arrow" | "external";

export type SiteEvent = {
  href?: string;
  /** i18n key for the CTA label; may be empty when a card has no CTA. */
  ctaKey: string;
  /** Optional already-localised CTA label for event-specific wording. */
  ctaLabel?: string;
  title: string;
  description: string;
  institution?: string;
  /** Optional event artwork/posters shown on the event card. */
  images?: string[];
  /** Full-resolution artwork URLs, matching the thumbnail order. */
  originalImages?: string[];
  /** Full-resolution source files, indexed to images; never link to optimised previews when originals exist. */
  originalImages?: string[];
  /** Calendar date (YYYY-MM-DD) of the event in Guadalajara. */
  date?: string;
  /** Last calendar date for multi-day events (inclusive). */
  endDate?: string;
  /** Precise event start, with explicit UTC offset, when published. */
  startsAt?: string;
  /** Precise end, with explicit UTC offset, when published. */
  endsAt?: string;
  /** Presentation flag; dated events are automatically reclassified by the events page. */
  active: boolean;
  /** True for a confirmed future event that should keep solid styling and a normal CTA. */
  confirmed?: boolean;
  /** Short badge in the header (e.g. Curso, Festival). */
  category: string;
  /** Header line beside the badge (e.g. hybrid / online / historical conversation). */
  format?: string;
  /** Optional grey uppercase line in the footer (e.g. date / venue). */
  footerNote?: string;
  /** Which icon to show after the CTA text. */
  ctaIcon?: SiteEventCtaIcon;
};

export type EventsPageResponse = {
  events: SiteEvent[];
  pagination: { total: number };
};
