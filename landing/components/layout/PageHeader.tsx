import { Grenze_Gotisch } from "next/font/google";
import SectionSeparator from "./SectionSeparator";

const grenzeGotisch = Grenze_Gotisch({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const PageHeader = ({
  pretitle,
  title,
  subtitle,
}: {
  pretitle: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <>
      <header className="relative z-10 mb-20 text-center">
        {pretitle && (
          <div className="mb-4 inline-block bg-surface-container px-3 py-1 font-medium text-xs text-tertiary tracking-[0.2em] uppercase">
            {pretitle}
          </div>
        )}
        <h1 className="font-headline mb-6 text-5xl font-bold tracking-tight text-primary md:text-7xl">
          <span className={`font-bold ${grenzeGotisch.className}`}>
            {title}
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant">
          {subtitle}
        </p>
      </header>
      <SectionSeparator contrast={true} />
    </>
  );
};

export default PageHeader;
