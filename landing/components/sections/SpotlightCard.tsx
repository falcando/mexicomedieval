import Image from "next/image";
import Link from "next/link";
import type { SpotlightPayload } from "@/lib/types/spotlight";

type SpotlightCardProps = {
  spotlight: SpotlightPayload;
};

const SpotlightCard = ({ spotlight }: SpotlightCardProps) => {
  const showBadge = spotlight.yearBadge.trim().length > 0;

  return (
    <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12">
      <div className="relative md:col-span-7">
        <Image
          src={spotlight.image.src}
          alt={spotlight.image.alt}
          width={1200}
          height={900}
          className="aspect-4/3 w-full object-cover shadow-2xl grayscale"
          sizes="(min-width: 768px) 58vw, 100vw"
        />
        {showBadge ? (
          <div className="absolute -right-4 -bottom-4 bg-primary px-8 py-6 md:-right-8 md:-bottom-8">
            <span className="font-headline text-3xl text-tertiary-fixed-dim">
              {spotlight.yearBadge}
            </span>
          </div>
        ) : null}
      </div>
      <div className="md:col-span-5">
        <h2 className="font-headline mb-4 text-sm uppercase tracking-widest text-tertiary-fixed-dim">
          {spotlight.kicker}
        </h2>
        <h3 className="font-headline mb-6 text-4xl leading-tight text-primary md:text-5xl">
          {spotlight.title}
        </h3>
        <p className="mb-8 text-lg leading-relaxed text-on-surface-variant">
          {spotlight.body}
        </p>
        <Link
          href={spotlight.cta.href}
          className="font-label text-sm font-bold uppercase tracking-widest text-primary transition-colors hover:text-secondary"
          {...(spotlight.cta.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {spotlight.cta.label}
        </Link>
      </div>
    </div>
  );
};

export default SpotlightCard;