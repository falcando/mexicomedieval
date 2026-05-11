import { Grenze_Gotisch } from "next/font/google";

const grenzeGotisch = Grenze_Gotisch({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <header className="relative z-10 mb-20 text-center">
          {/* TODO: Add kicker */}
          {/* <span className="font-label mb-4 inline-block text-xs font-bold tracking-widest text-tertiary-fixed-dim uppercase">
            Hello world!          </span> */}
        <h1 className="font-headline mb-6 text-5xl font-bold tracking-tight text-primary md:text-7xl">
          <span className={`font-bold ${grenzeGotisch.className}`}>{title}</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant">
          {subtitle}
        </p>
      </header>
    )
}

export default PageHeader;