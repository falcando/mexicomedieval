import Link from "next/link";
import { type ReactNode } from "react";

/** White vs gray tile backgrounds (maps to surface container tokens). */
export type ArchiveCardVariant = "white" | "gray";

export type ArchiveCardCta =
  | {
      kind: "label";
      href: string;
      text: ReactNode;
    }
  | {
      kind: "link-row";
      href: string;
      text: ReactNode;
      showPlayIcon?: boolean;
    }
  | { kind: "none" };

export type ArchiveCardProps = {
  icon: string;
  title: ReactNode;
  description: ReactNode;
  variant: ArchiveCardVariant;
  /** Column span on `md` grid (parent must be a 3-column grid). */
  mdColSpan?: 1 | 2;
  cta?: ArchiveCardCta;
  /** Optional side region (e.g. event thumbnail). */
  trailing?: ReactNode;
  className?: string;
};

function variantClass(variant: ArchiveCardVariant) {
  return variant === "white"
    ? "bg-surface-container-lowest"
    : "bg-surface-container-highest";
}

const cardChrome =
  "shadow-sm transition-shadow duration-300 hover:shadow-md";

function ArchiveCardCtaBlock({ cta }: { cta: ArchiveCardCta }) {
  switch (cta.kind) {
    case "label":
      return (
        <Link
          href={cta.href}
          className="mt-8 inline-block font-label text-xs uppercase tracking-widest text-primary/70 transition-colors hover:text-primary"
        >
          {cta.text}
        </Link>
      );
    case "link-row":
      return (
        <Link
          href={cta.href}
          className="mt-8 flex items-center gap-2 font-label text-sm font-bold uppercase tracking-widest text-primary"
        >
          {cta.text}
          {cta.showPlayIcon ? (
            <span className="material-symbols-outlined text-sm" aria-hidden>
              play_arrow
            </span>
          ) : null}
        </Link>
      );
    case "none":
      return null;
  }
}

export function ArchiveCard({
  icon,
  title,
  description,
  variant,
  mdColSpan = 1,
  cta = { kind: "none" },
  trailing,
  className = "",
}: ArchiveCardProps) {
  const hasTrailing = Boolean(trailing);

  const rootClass = [
    "flex p-10",
    cardChrome,
    hasTrailing
      ? "flex-col items-center gap-8 md:flex-row"
      : "min-h-72 flex-col justify-between",
    variantClass(variant),
    mdColSpan === 2 ? "md:col-span-2" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const body = (
    <>
      <span
        className="material-symbols-outlined mb-6 block text-4xl text-primary"
        aria-hidden
      >
        {icon}
      </span>
      <h4 className="font-headline mb-4 text-2xl text-primary">{title}</h4>
      <p className="text-on-surface-variant">{description}</p>
    </>
  );

  const ctaBlock =
    cta.kind !== "none" ? <ArchiveCardCtaBlock cta={cta} /> : null;

  return (
    <div className={rootClass}>
      {hasTrailing ? (
        <>
          <div className="flex-1">
            {body}
            {ctaBlock}
          </div>
          {trailing}
        </>
      ) : (
        <>
          <div>{body}</div>
          {ctaBlock}
        </>
      )}
    </div>
  );
}
