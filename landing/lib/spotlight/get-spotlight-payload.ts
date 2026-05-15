import { ARTICLES } from "@/lib/data/articles";
import { BOOKS } from "@/lib/data/books";
import { EVENTS } from "@/lib/data/events";
import { MEXICO_MEDIEVAL_ITEMS } from "@/lib/data/podcast-mexico-medieval";
import { PAPERS } from "@/lib/data/papers";
import { SPOTLIGHT_TARGET } from "@/lib/data/spotlight-config";
import { messageByPath } from "@/lib/spotlight/message-by-path";
import { yearStringToRomanBadge } from "@/lib/spotlight/year-to-roman";
import type { Locale } from "@/lib/i18n-config";
import type { SpotlightPayload } from "@/lib/types/spotlight";

const BODY_MAX = 560;

const DEFAULT_VISUAL = "/images/hero.webp";

function clipBody(text: string): string {
  const t = text.trim();
  if (t.length <= BODY_MAX) return t;
  return `${t.slice(0, BODY_MAX - 1)}…`;
}

export function getSpotlightPayload(language: Locale): SpotlightPayload | null {
  const { kind, catalogId } = SPOTLIGHT_TARGET;

  switch (kind) {
    case "book": {
      const row = BOOKS.find((b) => b.catalogId === catalogId);
      if (!row) return null;
      const info = row.information[language];
      const first = row.urls[0];
      if (!first) return null;
      return {
        image: { src: row.image, alt: row.alt },
        kicker: messageByPath(language, "home.spotlightKindBook"),
        title: row.title,
        body: clipBody(info.description),
        yearBadge: yearStringToRomanBadge(row.year),
        cta: {
          href: first.url,
          label: messageByPath(language, first.ctaKey),
        },
      };
    }
    case "journalArticle":
    case "bookChapter": {
      const row = ARTICLES.find((a) => a.catalogId === catalogId);
      if (!row) return null;
      if (kind === "journalArticle" && row.documentType !== "article") {
        return null;
      }
      if (kind === "bookChapter" && row.documentType !== "bookChapter") {
        return null;
      }
      const info = row.information[language];
      const first = row.urls[0];
      if (!first) return null;
      const kickerKey =
        row.documentType === "article"
          ? "home.spotlightKindJournalArticle"
          : "home.spotlightKindBookChapter";
      return {
        image: { src: DEFAULT_VISUAL, alt: row.title },
        kicker: messageByPath(language, kickerKey),
        title: row.title,
        body: clipBody(info.abstract),
        yearBadge: yearStringToRomanBadge(row.year),
        cta: {
          href: first.href,
          label: messageByPath(language, first.ctaKey),
        },
      };
    }
    case "event": {
      const row = EVENTS.find((e) => e.catalogId === catalogId);
      if (!row) return null;
      if (!row.href) return null;
      const info = row.information[language];
      return {
        image: { src: DEFAULT_VISUAL, alt: info.title },
        kicker: messageByPath(language, "home.spotlightKindEvent"),
        title: info.title,
        body: clipBody(info.description),
        yearBadge: info.category.toLocaleUpperCase(language).slice(0, 14),
        cta: {
          href: row.href,
          label: messageByPath(language, row.ctaKey),
        },
      };
    }
    case "paper":
    case "presentation": {
      const row = PAPERS.find((p) => p.catalogId === catalogId);
      if (!row) return null;
      if (kind === "paper" && row.documentType !== "paper") return null;
      if (kind === "presentation" && row.documentType !== "presentation") {
        return null;
      }
      const kickerKey =
        row.documentType === "paper"
          ? "home.spotlightKindPaper"
          : "home.spotlightKindPresentation";
      const ctaLabelKey =
        row.documentType === "paper"
          ? "papers.viewPaper"
          : "papers.viewDetails";
      return {
        image: { src: DEFAULT_VISUAL, alt: row.title },
        kicker: messageByPath(language, kickerKey),
        title: row.title,
        body: clipBody(row.context),
        yearBadge: yearStringToRomanBadge(row.year),
        cta: {
          href: row.href,
          label: messageByPath(language, ctaLabelKey),
        },
      };
    }
    case "podcast": {
      const row = MEXICO_MEDIEVAL_ITEMS.find((p) => p.catalogId === catalogId);
      if (!row) return null;
      return {
        image: {
          src: "/podcasts/podcast-mexico-medieval.webp",
          alt: messageByPath(language, "home.spotlightPodcastImgAlt"),
        },
        kicker: messageByPath(language, "home.spotlightKindPodcast"),
        title: row.title,
        body: messageByPath(language, "home.spotlightPodcastBody"),
        yearBadge: messageByPath(language, "home.spotlightPodcastYearBadge"),
        cta: {
          href: row.listenHref,
          label: messageByPath(language, "home.spotlightPodcastCta"),
        },
      };
    }
    default: {
      const _exhaustive: never = kind;
      return _exhaustive;
    }
  }
}
