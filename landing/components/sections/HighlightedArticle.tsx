import { ArticleEntry } from "@/lib/types/article";
import Image from "next/image";
import { useTranslations } from "../i18n/LocaleProvider";

const FEATURED_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC36OR9bfZWebubcigMG_gSkHrqIrwGug3GKwYO587LUZVmnKxpPBAVrIN5Nsyq2_S-PwJRlpSmPmVpWbK9j3r5L1YuVIO_6X8pC6ed-sw449I49hwQ6MKjKargpx_bJp2tBRlKro2UF3beVTmwtMLbR_k8o6_1JfOZOkRddUVThvnwP-BoPQPo1bCKgyKHI4OR0u1bvjE1NrKaxgOurNYRvLcTqh1ybvSn-uvGLHbLQ0BxE-7M7dRce-I9pG8Fz73WdS5yeiSqXD3u";


const HighlightedArticle = ({ article }: { article: ArticleEntry }) => {
  const { t } = useTranslations();
  return (
    <article className="group relative flex flex-col gap-10 overflow-hidden border border-outline-variant/15 bg-surface-container-lowest p-8 md:col-span-2 md:flex-row md:items-stretch md:gap-10 md:p-12">
      <div className="relative aspect-3/4 w-full shrink-0 overflow-hidden bg-surface-container md:aspect-auto md:h-full md:w-1/3">
        <Image
          src={FEATURED_IMG}
          alt=""
          fill
          className="object-cover opacity-80 mix-blend-multiply"
          sizes="(min-width: 768px) 33vw, 100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent" />
      </div>
      <div className="flex min-w-0 grow flex-col justify-center md:w-0 md:flex-1">
        <div className="mb-4 text-sm font-bold tracking-widest text-tertiary-fixed-dim uppercase">
          {t("articulos.featuredPublication")}
        </div>
        <h3 className="font-headline mb-6 text-4xl leading-tight font-bold text-primary">
          {article.title}
        </h3>
        <p className="font-label mb-4 text-[11px] leading-relaxed tracking-[0.12em] text-on-surface-variant uppercase">
          {article.authors}
        </p>
        <p className="mb-6 text-sm italic text-on-surface-variant/90">
          {article.data}
        </p>
        <div className="mb-6 text-sm font-medium text-on-surface-variant">
          {t("articulos.publicationYear")}: {article.year}
        </div>
        <p className="mb-8 max-w-xl leading-relaxed text-on-surface-variant">
          {article.abstract}
        </p>
        {article.urls.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {article.urls.map((url, index) => (
              <a
                key={url.href}
                href={url.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  index === 0
                    ? "inline-flex items-center gap-3 bg-primary px-8 py-4 font-semibold text-on-primary shadow-lg shadow-primary/10 transition-all hover:opacity-90"
                    : "inline-flex items-center gap-2 border-2 border-primary px-6 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-on-primary"
                }
              >
                {t(url.ctaKey)}
                <span className="material-symbols-outlined text-lg">
                  open_in_new
                </span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
      <div className="absolute top-0 right-0 h-2 w-24 bg-tertiary-fixed" />
    </article>
  );
};

export default HighlightedArticle;