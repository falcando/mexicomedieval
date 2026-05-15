import type { Book, BookUrl } from "@/lib/types/book";
import Image from "next/image";
import { useTranslations } from "../i18n/LocaleProvider";

export type BookCardImageAlign = "left" | "right";

const BookCTA = ({ url, ctaKey }: BookUrl) => {
  const { t } = useTranslations();
  const ctaLabel = t(ctaKey);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/btn flex w-full items-center justify-between gap-4 border-b border-outline-variant/25 py-3 transition-colors hover:border-tertiary-fixed-dim"
    >
      <span className="font-label text-[11px] tracking-[0.2em] text-on-secondary-fixed-variant uppercase transition-colors group-hover/btn:text-tertiary-fixed-dim">
        {ctaLabel}
      </span>
      <span className="material-symbols-outlined shrink-0 text-lg text-on-secondary-fixed-variant transition-colors group-hover/btn:text-tertiary-fixed-dim">
        open_in_new
      </span>
    </a>
  );
};

type BookCardProps = {
  book: Book;
  /** Side of the layout where the cover image sits. Default: `"right"`. */
  imageAlign?: BookCardImageAlign;
};

const BookCard = ({ book, imageAlign = "right" }: BookCardProps) => {
  const imageFirst = imageAlign === "left";

  const imageBlock = (
    <div className="relative flex w-full shrink-0 items-center justify-center bg-primary px-8 py-12 sm:px-10 sm:py-14 lg:min-h-0 lg:w-80 lg:max-w-[40%] lg:self-stretch lg:px-8 lg:py-10 xl:max-w-sm">
      <div className="relative aspect-2/3 w-full max-w-[min(100%,15rem)] shadow-xl sm:max-w-68">
        <Image
          src={book.image}
          alt={book.alt}
          fill
          className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          sizes="(min-width: 1024px) 17rem, (min-width: 640px) 50vw, 85vw"
        />
      </div>
      {book.badge ? (
        <div className="absolute top-3 right-3 bg-surface-container-lowest/95 px-2.5 py-1 font-label text-[10px] tracking-widest text-primary uppercase shadow-sm backdrop-blur-sm">
          {book.badge}
        </div>
      ) : null}
    </div>
  );

  const textBlock = (
    <div className="flex min-w-0 flex-1 flex-col justify-center px-6 py-8 lg:gap-0 lg:px-10 lg:py-12 xl:px-14">
      <span className="font-label mb-2 text-xs tracking-widest text-on-secondary-fixed-variant uppercase">
        {book.year}
      </span>
      <h3
        className={`font-headline text-2xl leading-snug font-semibold text-primary md:text-3xl ${book.subtitle ? "mb-3" : "mb-4"}`}
      >
        {book.title}
      </h3>
      {book.subtitle ? (
        <p className="mb-4 text-sm leading-snug text-on-surface-variant italic md:text-base">
          {book.subtitle}
        </p>
      ) : null}
      <p className="font-label mb-5 text-[11px] leading-relaxed tracking-[0.12em] text-on-secondary-fixed-variant uppercase">
        {book.author}
      </p>
      <p className="mb-8 text-sm leading-relaxed text-on-surface-variant md:text-base">
        {book.description}
      </p>
      <div className="mt-auto flex flex-col border-t border-outline-variant/20 pt-2">
        {book.urls.map((url) => (
          <BookCTA key={url.url} {...url} />
        ))}
      </div>
    </div>
  );

  return (
    <article className="group flex flex-col overflow-hidden border-t-2 border-tertiary-fixed/30 bg-surface-container-low transition-shadow duration-500 hover:shadow-xl hover:shadow-primary/10 lg:min-h-[min(22rem,45vh)] lg:flex-row lg:items-stretch">
      {imageFirst ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </article>
  );
};

export default BookCard;
