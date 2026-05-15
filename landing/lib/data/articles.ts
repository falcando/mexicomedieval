import type {
  ArticleEntry,
  ArticleSource,
  ArticleChaptersPageResponse,
  JournalArticlesPageResponse,
} from "@/lib/types/article";
import { slicePage, totalPagesFromListLength } from "@/lib/pagination";
import type { Locale } from "@/lib/i18n-config";

function materializeArticle(
  source: ArticleSource,
  language: Locale,
): ArticleEntry {
  const info = source.information[language];
  return {
    year: source.year,
    title: source.title,
    documentType: source.documentType,
    urls: source.urls,
    authors: info.authors,
    data: info.data,
    topics: info.topics,
    abstract: info.abstract,
  };
}

export const ARTICLES: ArticleSource[] = [
  {
    year: "2026",
    title: "A Stemma of Sigurgarðs saga frækna, and a Case Study of Saga-Anthologization",
    documentType: "article",
    highlighted: true,
    information: {
      es: {
        authors:
          "Alaric Hall, Sheryl McDonald, Hervin Fernández-Aceves, Katelin Marit Parsons e Ian Simpson",
        data: "Journal of Early Medieval Northwestern Europe, vol. 22, 2026.",
        topics: [
          "Estemática",
          "Sagas islandesas",
          "Transmisión manuscrita",
          "Antologización",
          "Vikingos",
        ],
        abstract:
          "Este artículo publica el primer stemma de los manuscritos de Sigurgarðs saga frækna, romance islandés del siglo XV, a partir de 58 de los 61 testimonios conocidos. El estudio aprovecha la publicación digital para ofrecer datos abiertos y examinar la transmisión postmedieval de la saga. También analiza manuscritos producidos entre los siglos XVII y XIX en la región islandesa de Dalir para estudiar cómo los escribas construían antologías y cómo esas decisiones influyeron en compilaciones posteriores.",
      },
      en: {
        authors:
          "Alaric Hall, Sheryl McDonald, Hervin Fernández-Aceves, Katelin Marit Parsons and Ian Simpson",
        data: "Journal of Early Medieval Northwestern Europe, vol. 22, 2026. DOI: 10.5281/zenodo.18475600",
        topics: [
          "Stemmatology",
          "Icelandic sagas",
          "Manuscript transmission",
          "Anthologization",
          "Vikings",
        ],
        abstract:
          "This article publishes the first stemma of the manuscripts of Sigurgarðs saga frækna, Icelandic romance of the 15th century, from 58 of the 61 known testimonies. The study makes use of digital publication to offer open data and examine the postmedieval transmission of the saga. It also analyzes manuscripts produced between the 17th and 19th centuries in the Dalir region of Iceland to study how scribes constructed anthologies and how those decisions influenced subsequent compilations.",
      },
    },
    urls: [
      {
        href: "https://jemne.org/issues/22/halletal.php",
        ctaKey: "articulos.readArticle",
      },
      {
        href: "https://doi.org/10.5281/zenodo.18475600",
        ctaKey: "articulos.viewDOI",
      },
    ],
  },

 {
    year: "2019",
    title: "Royal Comestabuli and Military Control in the Sicilian Kingdom: A Prosopographical Contribution to the Study of Italo-Norman Aristocracy",
    documentType: "article",
    information: {
      es: {
        authors: "Hervin Fernández-Aceves",
        data: "Medieval Prosopography, 34, 2019, pp. 1-40",
        topics: ["Sicilia normanda", "Aristocracia", "Prosopografía", "Poder militar"],

        abstract: "El artículo estudia a los comestabuli regios del reino siciliano como parte de los mecanismos de control militar y coordinación política de la monarquía normanda. A través de un enfoque prosopográfico, muestra que estos oficiales permiten entender mejor la relación entre poder regio, aristocracia italo-normanda, servicio militar y administración territorial.",
      },
      en: {
        authors: "Hervin Fernández-Aceves",
        data: "Medieval Prosopography, 34, 2019, pp. 1-40",
        topics: ["Norman Sicily", "Aristocracy", "Prosopography", "Military power"],
        abstract: "This article studies the royal comestabuli of the Sicilian kingdom as part of the mechanisms of military control and political coordination under the Norman monarchy. Through a prosopographical approach, it shows how these officers help explain the relationship between royal power, Italo-Norman aristocracy, military service, and territorial administration.",
      },
    },
    urls: [
      {
        href: "https://www.jstor.org/stable/27041705",
        ctaKey: "articulos.viewArticle",
      },
    ],
  },
  {
    year: "2019",
    title: "La Cerdeña medieval vista desde la modernidad: un epítome historiográfico de la supuesta conectividad mediterránea",
    documentType: "article",
    information: {
      es: {
        authors: "Hervin Fernández-Aceves",
        data: "Qvadrata, 1, 2019, pp. 11-29",
        topics: ["Cerdeña medieval", "Conectividad mediterránea", "Historiografía"],  
        abstract: "El artículo revisa las principales interpretaciones historiográficas sobre la Cerdeña medieval y cuestiona la idea de conectividad mediterránea como explicación automática. Se centra en los giudicati sardos entre los siglos XI y XIII y plantea la necesidad de investigaciones más sólidas sobre las órdenes sociales de la isla durante la Edad Media central.",
      },
      en: {
        authors: "Hervin Fernández-Aceves",
        data: "Qvadrata, 1, 2019, pp. 11-29",
        topics: ["Medieval Sardinia", "Mediterranean connectivity", "Historiography"],
        abstract: "This article reviews majorHistoriographical interpretations of medieval Sardinia and questions the idea of Mediterranean connectivity as an automatic explanation. It focuses on the Sardinian giudicati between the eleventh and thirteenth centuries and argues for the need for more robust research on the island’s social orders during the central Middle Ages.",
      },
    },  
    urls: [
      {
        href: "https://portal.amelica.org/ameli/journal/636/6363021005/6363021005.pdf",
        ctaKey: "articulos.viewArticle",
      },
    ],
  },
 {
    year: "2019",
    title: "Rome Awards: Power and Society in Medieval Sardinia",
    documentType: "article",
    information: {
      es: {
        authors: "Hervin Fernández-Aceves",
        data: "Papers of the British School at Rome, 87, 2019, pp. 361-362",
        topics: ["Cerdeña medieval", "Poder", "Sociedad", "Proyecto de investigación"],
        abstract: "Nota académica vinculada con el proyecto Power and Society in Medieval Sardinia. Presenta el marco de investigación sobre poder, sociedad y estructuras sociales en la Cerdeña medieval.",
      },
      en: {
        authors: "Hervin Fernández-Aceves",
        data: "Papers of the British School at Rome, 87, 2019, pp. 361-362",
        topics: ["Medieval Sardinia", "Power", "Society", "Research project"],
        abstract: "An academic note linked to the project Power and Society in Medieval Sardinia. It presents the research framework on power, society, and social structures in medieval Sardinia.",
      },
    },
    urls: [
      {
        href: "https://www.cambridge.org/core/journals/papers-of-the-british-school-at-rome/article/abs/rome-awards-power-and-society-in-medieval-sardinia/A5E8FB6A67CB0CB452C1751CB0017CB1?utm_campaign=shareaholic&utm_medium=copy_link&utm_source=bookmark",
        ctaKey: "articulos.viewPublication",
      },
    ],
  },
  {
    year: "2017",
    title: "Social Network Analysis and Narrative Structures: Measuring Communication and Influence in a Medieval Source for the Kingdom of Sicily",
    documentType: "article",
    information: {
      es: {
        authors: "Hervin Fernández-Aceves",
        data: "Intersticios Sociales, 14, 2017, pp. 125-153",
        topics: ["Sicilia medieval", "Análisis de redes", "Fuentes narrativas", "Poder e influencia"],
        abstract: "El artículo aplica análisis de redes sociales a una fuente narrativa medieval sobre el reino de Sicilia para medir comunicación, influencia y posiciones dentro del relato. A partir de medidas de centralidad y prestigio, propone una forma de estudiar la estructura social construida por el texto y sus implicaciones históricas.",
      },
      en: {
        authors: "Hervin Fernández-Aceves",
        data: "Intersticios Sociales, 14, 2017, pp. 125-153",
        topics: ["Medieval Sicily", "Network analysis", "Narrative sources", "Power and influence"],
        abstract: "This article applies social network analysis to a medieval narrative source on the Kingdom of Sicily in order to measure communication, influence, and positions within the narrative. Using centrality and prestige measures, it proposes a way to study the social structure constructed by the text and its historical implications.",
      },
    },
    urls: [
      {
        href: "https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2007-49642017000200121",
        ctaKey: "articulos.viewArticle",
      },
    ],
  },
 {
    year: "2016",
    title: "Political Manoeuvring in the Norman Kingdom of Sicily: Civitate and Carinola in the Development of the South-Italian County",
    documentType: "article",
    information: {
      es: {
        authors: "Hervin Fernández-Aceves",
        data: "White Rose College of the Arts and Humanities Journal, 2, 2016, pp. 63-73",
        topics: ["Sicilia normanda", "Condados", "Aristocracia", "Poder regional"],

        abstract: "El artículo examina los casos de Civitate y Carinola para estudiar el desarrollo del condado en la Italia meridional normanda. Muestra cómo las maniobras políticas, las relaciones aristocráticas y las condiciones locales fueron decisivas para entender la construcción del poder condal dentro del reino siciliano.",
      },
      en: {
        authors: "Hervin Fernández-Aceves",
        data: "White Rose College of the Arts and Humanities Journal, 2, 2016, pp. 63-73",
        topics: ["Norman Sicily", "Counties", "Aristocracy", "Regional power"],
        abstract: "This article examines the cases of Civitate and Carinola to study the development of the county in Norman southern Italy. It shows how political manoeuvring, aristocratic relationships, and local conditions were decisive for understanding the construction of comital power within the Sicilian kingdom.",
      },
    },
    urls: [
      {
        href: "https://eprints.whiterose.ac.uk/id/eprint/112263/",
        ctaKey: "articulos.viewArticle",
      },
    ],
  },
 {
  year: "2016",
  title: "The Re-Arrangement of the Nobility Under the Hauteville Monarchy",
  documentType: "article",
  information: {
    es: {
      authors: "Hervin Fernández-Aceves",
      data: "Ex Historia, 8, 2016, pp. 58-90",
      topics: ["Monarquía Hauteville", "Nobleza", "Sicilia normanda", "Poder regio"],
      abstract: "El artículo analiza la reorganización de la nobleza bajo la monarquía Hauteville en el sur de Italia y Sicilia. Propone que el poder regio no simplemente sustituyó a las élites aristocráticas, sino que reordenó sus funciones, jerarquías y relaciones con la monarquía.",
    },
    en: {
      authors: "Hervin Fernández-Aceves",
      data: "Ex Historia, 8, 2016, pp. 58-90",
      topics: ["Hauteville monarchy", "Nobility", "Norman Sicily", "Royal power"],
      abstract: "This article analyses the re-arrangement of the nobility under the Hauteville monarchy in southern Italy and Sicily. It argues that royal power did not simply replace aristocratic elites, but reorganised their functions, hierarchies, and relationships with the monarchy.",
    },
  },
  urls: [
    {
      href: "https://eprints.whiterose.ac.uk/id/eprint/112262/",
      ctaKey: "articulos.viewArticle",
    },
  ],
  },
  {
    year: "2014",
    title: "Social Positions in the Liber de Regno Sicilie",
    documentType: "article",
    information: {
      es: {
        authors: "Hervin Fernández-Aceves",
        data: "Annual of Medieval Studies at CEU, 20, 2014, pp. 42-58",
        topics: ["Pseudo-Falcando", "Sicilia medieval", "Posiciones sociales", "Análisis relacional"],
        abstract: "El artículo analiza las posiciones sociales construidas en el Liber de Regno Sicilie mediante equivalencias estructurales y análisis relacional. A partir de las interacciones narrativas entre personajes, propone una forma de estudiar la composición, tensiones y dinámicas sociales de la corte siciliana descrita por Pseudo-Falcando.",
      },
      en: {
        authors: "Hervin Fernández-Aceves",
        data: "Annual of Medieval Studies at CEU, 20, 2014, pp. 42-58",
        topics: ["Pseudo-Falcandus", "Medieval Sicily", "Social positions", "Relational analysis"],
        abstract: "This article analyses the social positions constructed in the Liber de Regno Sicilie through structural equivalences and relational analysis. Drawing on narrative interactions between characters, it proposes a way to study the composition, tensions, and social dynamics of the Sicilian court described by Pseudo-Falcandus.",
      },
    },  
    urls: [
      {
        href: "https://real-j.mtak.hu/21474/1/Annual_of_Medieval_Studies_at_CEU_Vol_20_2014.pdf",
        ctaKey: "articulos.viewArticle",
      },
    ],
  },
  {
    year: "2009",
    title: "Modernidad política en la Edad Media: la experiencia y las instituciones normandas",
    documentType: "article",
    information: {
      es: {
        authors: "Hervin Fernández-Aceves",
        data: "Ágora, 5(6), 2009, pp. 2-12",
        topics: ["Instituciones normandas", "Modernidad política", "Sicilia", "Inglaterra normanda"],
        abstract: "El artículo revisa la experiencia política e institucional normanda para discutir la idea de modernidad política en la Edad Media. A partir de los casos anglo-normando y siciliano, examina formas de gobierno, articulación institucional y construcción de autoridad en sociedades medievales.",
      },
      en: {
        authors: "Hervin Fernández-Aceves",
        data: "Ágora, 5(6), 2009, pp. 2-12",
        topics: ["Norman institutions", "Political modernity", "Sicily", "Norman England"],
        abstract: "This article revisits the Norman political and institutional experience to discuss the idea of political modernity in the Middle Ages. Through the Anglo-Norman and Sicilian cases, it examines forms of government, institutional articulation, and the construction of authority in medieval societies.",
      },
    },
    urls: [
      {
        href: "https://scripta.up.edu.mx/entities/publication/d24d0522-b610-4e10-8fe4-ef2f3cbf908f",
        ctaKey: "articulos.viewArticle",
      },
    ],
  },
  /**
   Book chapters
   */
  {
    year: "2021",
    title: "The Making of Medieval Sardinia: A Historiographical Introduction",
    documentType: "bookChapter",
    information: {
      es: {
        authors: "Alex Metcalfe, Hervin Fernández-Aceves y Marco Muresu",
        data: "En The Making of Medieval Sardinia, Brill, 2021, pp. 1-16. DOI: 10.1163/9789004467545_002",
        topics: ["Cerdeña medieval", "Historiografía", "Mediterráneo", "Centro y periferia"],
        abstract: "Introducción historiográfica al estudio de la Cerdeña medieval. El capítulo revisa dos problemas centrales de la interpretación histórica de la isla: la idea de aislamiento y la tensión entre centro y periferia. A partir de esos debates, sitúa la necesidad de repensar la historia sarda dentro de redes mediterráneas, estructuras locales de poder y nuevas preguntas historiográficas.",
      },
      en: {
        authors: "Alex Metcalfe, Hervin Fernández-Aceves, and Marco Muresu",
        data: "In The Making of Medieval Sardinia, Brill, 2021, pp. 1-16. DOI: 10.1163/9789004467545_002",
        topics: ["Medieval Sardinia", "Historiography", "Mediterranean", "Centre and periphery"],
        abstract: "A historiographical introduction to the study of medieval Sardinia. The chapter reviews two central problems in the island’s historical interpretation: the idea of isolation and the tension between centre and periphery. Through these debates, it frames the need to rethink Sardinian history within Mediterranean networks, local power structures, and new historiographical questions.",
      },
    },
    urls: [
      {
        href: "https://doi.org/10.1163/9789004467545_002",
        ctaKey: "articulos.viewChapter",
      },
    ],
  },
 {
    year: "2021",
    title: "Discovery, Invention, and Supposition: Three Case Studies from Medieval Sardinia",
    documentType: "bookChapter",
    information: {
      es: {
        authors: "Hervin Fernández-Aceves, Alex Metcalfe y Marco Muresu",
        data: "En The Making of Medieval Sardinia, Brill, 2021, pp. 17-41. DOI: 10.1163/9789004467545_003",
        topics: ["Cerdeña medieval", "Método histórico", "Fuentes fragmentarias", "Interpretación"],
        abstract: "El capítulo presenta tres estudios de caso sobre Cerdeña medieval para mostrar cómo se construyen los problemas históricos a partir de evidencia fragmentaria. A través de los conceptos de descubrimiento, invención y suposición, examina los límites de la interpretación y la necesidad de distinguir entre evidencia documental, reconstrucción historiográfica e hipótesis.",
      },
      en: {
        authors: "Hervin Fernández-Aceves, Alex Metcalfe, and Marco Muresu",
        data: "In The Making of Medieval Sardinia, Brill, 2021, pp. 17-41. DOI: 10.1163/9789004467545_003",
        topics: ["Medieval Sardinia", "Historical method", "Fragmentary sources", "Interpretation"],
        abstract: "This chapter presents three case studies on medieval Sardinia to show how historical problems are constructed from fragmentary evidence. Through the concepts of discovery, invention, and supposition, it examines the limits of interpretation and the need to distinguish between documentary evidence, historiographical reconstruction, and hypothesis.",
      },
    },
    urls: [
      {
        href: "https://doi.org/10.1163/9789004467545_003",
        ctaKey: "articulos.viewChapter",
      },
    ],
  },
];

const peerReviewedSorted = [...ARTICLES]
  .filter((a) => a.documentType === "article")
  .sort((a, b) => Number(b.year) - Number(a.year));

export function getHighlightedArticleSource(): ArticleSource | undefined {
  const highlightedFromData = ARTICLES.find(
    (a) => "highlighted" in a && a.highlighted === true,
  );
  return highlightedFromData ?? peerReviewedSorted[0];
}

export function getHighlightedArticle(
  language: Locale,
): ArticleEntry | undefined {
  const src = getHighlightedArticleSource();
  return src ? materializeArticle(src, language) : undefined;
}

export function getJournalListForPagination(excludeFeatured: boolean = false): ArticleSource[] {
  if (!excludeFeatured) {
    return peerReviewedSorted;
  }

  const featured = getHighlightedArticleSource();
  const featuredPrimary = featured?.urls[0]?.href;
  return peerReviewedSorted.filter(
    (a) =>
      !(
        featured?.documentType === "article" &&
        featuredPrimary !== undefined &&
        a.urls[0]?.href === featuredPrimary
      ),
  );
}

export function getChapterListForPagination(): ArticleSource[] {
  return [...ARTICLES]
    .filter((a) => a.documentType === "bookChapter")
    .sort((a, b) => Number(b.year) - Number(a.year));
}

export function getJournalArticlesTotalPages(): number {
  return totalPagesFromListLength(getJournalListForPagination().length);
}

export function getArticleChaptersTotalPages(): number {
  return totalPagesFromListLength(getChapterListForPagination().length);
}

export function getJournalArticlesPagePayload(
  page: number,
  language: Locale,
): JournalArticlesPageResponse | null {
  const list = getJournalListForPagination();
  const slice = slicePage(list, page);
  if (slice === null) {
    return null;
  }
  return {
    journalArticles: slice.map((a) => materializeArticle(a, language)),
    pagination: { total: list.length },
  };
}

export function getArticleChaptersPagePayload(
  page: number,
  language: Locale,
): ArticleChaptersPageResponse | null {
  const list = getChapterListForPagination();
  const slice = slicePage(list, page);
  if (slice === null) {
    return null;
  }
  return {
    chapters: slice.map((a) => materializeArticle(a, language)),
    pagination: { total: list.length },
  };
}
