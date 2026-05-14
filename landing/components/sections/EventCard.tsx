import type { SiteEvent } from "@/lib/types/event";
import { useTranslations } from "@/components/i18n/LocaleProvider";

type EventCardProps = {
  event: SiteEvent;
};

const ink = "text-[#3c1518]";
const gold = "text-[#b08d57]";
const bodyGrey = "text-[#5c5c5c]";
const badgeActive = "bg-[#f5e6c4] text-[#3c1518]";
const badgeInactive = "bg-[#600d14] text-white";
const headerMuted = "text-[#707070]";
const cardInactiveBg = "bg-[#fcf9f5]";
const dashedBorder = "border border-dashed border-[#c4b8a8]";

export function EventCard({ event }: EventCardProps) {
  const { t } = useTranslations();
  const active = event.active;
  const hasHref = event.href != null && event.href !== "";
  const hasCta = event.ctaKey.trim() !== "";
  const ctaLabel = hasCta ? t(event.ctaKey) : "";
  const ctaIcon = event.ctaIcon ?? "external";

  const headerSecondary = active
    ? event.format?.trim()
    : t("events.comingSoonHeader");

  const body = (
    <>
      <div className="flex flex-wrap items-center gap-2.5">
        <span
          className={`rounded-sm px-2.5 py-1 font-label text-[10px] font-bold tracking-[0.2em] uppercase ${
            active ? badgeActive : badgeInactive
          }`}
        >
          {event.category}
        </span>
        {headerSecondary ? (
          <span
            className={`font-label text-[10px] font-semibold tracking-[0.22em] uppercase ${
              active ? headerMuted : ink
            }`}
          >
            {headerSecondary}
          </span>
        ) : null}
      </div>

      {event.institution ? (
        <p
          className={`mt-3 font-label text-[11px] tracking-[0.16em] uppercase ${gold}`}
        >
          {event.institution}
        </p>
      ) : null}

      <h2
        className={`font-headline mt-3 text-xl leading-snug md:text-2xl ${
          active ? ink : "text-[#3c1518]/60"
        }`}
      >
        {event.title}
      </h2>

      <p
        className={`mt-3 text-sm leading-relaxed md:text-base ${bodyGrey} ${
          active ? "" : "opacity-90"
        }`}
      >
        {event.description}
      </p>
    </>
  );

  const ctaLinkClasses = `group/cta inline-flex items-center gap-2 font-label text-xs font-bold tracking-[0.12em] uppercase ${ink} transition-opacity hover:opacity-80`;

  const ctaIconEl =
    ctaIcon === "arrow" ? (
      <span
        className={`material-symbols-outlined text-xl ${ink}`}
        aria-hidden
      >
        arrow_forward
      </span>
    ) : (
      <span
        className={`material-symbols-outlined text-xl ${ink}`}
        aria-hidden
      >
        open_in_new
      </span>
    );

  const activeFooterRight =
    hasCta && hasHref ? (
      <a
        href={event.href}
        target="_blank"
        rel="noopener noreferrer"
        className={ctaLinkClasses}
      >
        <span>{ctaLabel}</span>
        {ctaIconEl}
      </a>
    ) : hasCta ? (
      <span className={`${ctaLinkClasses} cursor-default opacity-90`}>
        <span>{ctaLabel}</span>
      </span>
    ) : null;

  const footer = active ? (
    <div
      className={`mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-[#e5ddd3] pt-5 ${
        event.footerNote && activeFooterRight
          ? "justify-between"
          : activeFooterRight
            ? "justify-end"
            : event.footerNote
              ? "justify-start"
              : ""
      }`}
    >
      {event.footerNote ? (
        <p
          className={`max-w-[58%] font-label text-[10px] leading-snug tracking-[0.2em] uppercase ${headerMuted}`}
        >
          {event.footerNote}
        </p>
      ) : null}
      {activeFooterRight}
    </div>
  ) : (
    <div className="mt-auto flex items-center justify-between gap-4 border-t border-[#e5ddd3] pt-5">
      {event.footerNote ? (
        <p
          className={`max-w-[65%] font-label text-[10px] leading-snug tracking-[0.2em] uppercase ${headerMuted}`}
        >
          {event.footerNote}
        </p>
      ) : (
        <span />
      )}
      <span
        className={`material-symbols-outlined shrink-0 text-2xl ${ink}`}
        aria-label={t("events.comingSoonCalendarAria")}
      >
        event_upcoming
      </span>
    </div>
  );

  return (
    <article
      className={`flex h-full flex-col p-6 shadow-sm transition-shadow ${
        active
          ? `border border-transparent bg-white hover:shadow-md`
          : `${cardInactiveBg} ${dashedBorder}`
      }`}
    >
      {body}
      {footer}
    </article>
  );
}
