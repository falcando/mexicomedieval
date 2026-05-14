/** Shown next to the CTA label when `href` is set (active cards only). */
export type SiteEventCtaIcon = "arrow" | "external";

export type SiteEvent = {
  href?: string;
  /** i18n key for the CTA label; inactive cards may use an empty string when the footer shows only the calendar icon. */
  ctaKey: string;
  title: string;
  description: string;
  institution?: string;
  /** `false` = “coming soon” styling and footer (calendar icon, no CTA link). */
  active: boolean;
  /** Short badge in the header (e.g. Curso, Festival). */
  category: string;
  /** Header line beside the badge when `active` (e.g. hybrid / online). Hidden when inactive (replaced by “Coming soon”). */
  format?: string;
  /** Optional grey uppercase line in the footer (e.g. city / venue TBC). */
  footerNote?: string;
  /** When `active` and `href` is set, which icon to show after the CTA text. */
  ctaIcon?: SiteEventCtaIcon;
};

export type EventsPageResponse = {
  events: SiteEvent[];
  pagination: { total: number };
};

