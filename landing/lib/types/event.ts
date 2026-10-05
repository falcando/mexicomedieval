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
  /** `false` places the card in the upcoming-events section. */
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
