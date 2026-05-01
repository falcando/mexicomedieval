export type TranscriptLine = {
  time: string;
  speaker: string;
  text: string;
};

export type RelatedEpisode = {
  label: string;
  title: string;
  description: string;
  slug: string | null;
};

export type PodcastEpisodeDetail = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  episodeBadge: string;
  title: string;
  titleAccent: string;
  description: string;
  hosts: string;
  dateDisplay: string;
  avatars: { src: string; alt: string }[];
  coverImage: string;
  coverAlt: string;
  player: {
    current: string;
    total: string;
    progressPercent: number;
  };
  bodyParagraphs: string[];
  transcript: TranscriptLine[];
  related: RelatedEpisode[];
  supportCard: {
    image: string;
    alt: string;
    title: string;
    description: string;
  };
};

const EPISODES: Record<string, PodcastEpisodeDetail> = {
  "la-leyenda-de-san-jorge-caballeros-y-dragones": {
    slug: "la-leyenda-de-san-jorge-caballeros-y-dragones",
    metaTitle: "México Medieval | La leyenda de San Jorge",
    metaDescription:
      "Episodio IV: el mito de San Jorge en la Nueva España — caballeros, dragones y sincretismo.",
    episodeBadge: "Episodio IV: El Ciclo de Caballería",
    title: "La leyenda de San Jorge:",
    titleAccent: "Caballeros y Dragones",
    description:
      "Un análisis profundo sobre la transmutación del mito de San Jorge en la Nueva España, desde las crónicas de los conquistadores hasta la devoción popular en las villas mineras del siglo XVI.",
    hosts: "Conducido por Fray Antonio & Dra. Elena Solís",
    dateDisplay: "14 de Mayo, 1524 (Re-edición)",
    avatars: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIDaYzr8fStJu6kv-bjQF8qOukfvn7kRBsyYZ8tIzlmayn_N9qlTpE3uDMbEx7ib6PX9uz__tllfEwGe5020eDLUcnTGKdVbxNKNHSiuSvR0F5cT9hP9ij5NAQVGlnqExWrLpKFfixrjcqSQ2EJUAZ5u7pHidMx6sRcaODfOrceT4QbIPhMab66kY_AOBFDUlA0VdoLRlbm4xQFL9Jycj0DMZMDkIdeB2ffY_eYvqNAjlEKw64aETsRAc5LBf_hmUA1Ive6BtD6xIH",
        alt: "Retrato de Fray Antonio",
      },
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2YsmIekmEGeqy64WpLkx-yF7eNDrBE2_iHNyXcHamPgvHUDfrgHiVUvj8jrSQ2_mnxxbqh7lHs4ALrHzoLwqhisoCk4DZwrc4P2LjM5RaYM0p2o8adWAIykHShxmCHXZotNLcdyZUWNt1s2gMg2IR45EK-xFsYYukYu655vDhoJ6pVbIRuK_8rS4M1GMkqBfHqn7FOZUJ-bqctewtMbFkkXPxHnHe_JV0CziJAT4PBBnQXo4Iv_CbUAZUdb-z2VZdv3wDX5KWnL-6",
        alt: "Retrato de Dra. Elena Solís",
      },
    ],
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeiXwzpSTJe2aeLMyBIgYXlK_a9aCbvqQa1j9PZmPfkDXU8zp_72hGgfuSFvt08X437nCQQfemvzld8adm8bALXMDeKA_s82Et9zcCaaLBolJlffC5N4uQwjTLBwDNJQdBPrB9WJ8EExz5GCF8L1SlulMTI8XSxYnl2roKOOJvvPzuI8IMOzQfrBx-IjVoo7bPEWd_c0otaCOFPhTqW15VcbNccmO4Q0nFPVPr3zAQnKf9FzasbHRtcxb_iEf_zPg5PJ9WnmA-vj_Z",
    coverAlt:
      "Ilustración de manuscrito medieval: caballero y dragón con oro y bordes ornamentados",
    player: {
      current: "04:21",
      total: "58:14",
      progressPercent: 15,
    },
    bodyParagraphs: [
      "En este episodio nos sumergimos en las aguas profundas del mito hagiográfico. San Jorge no solo fue el patrono de la caballería europea, sino que su imagen cruzó el Atlántico en los estandartes de los capitanes españoles. ¿Cómo se interpretó la figura del dragón en una tierra poblada de serpientes emplumadas?",
      "Analizamos las crónicas de Bernal Díaz del Castillo y las representaciones pictóricas en los conventos del Valle del Mezquital, donde el caballero cristiano se funde con la iconografía local para crear un simbolismo de protección único en el mundo medieval tardío.",
    ],
    transcript: [
      {
        time: "00:00",
        speaker: "Fray Antonio:",
        text: "Bienvenidos seáis todos a este scriptorium sonoro. Hoy, las campanas doblan por el dragón, pero no el dragón que escupe fuego en las tierras de Germania...",
      },
      {
        time: "04:12",
        speaker: "Dra. Elena Solís:",
        text: "Exactamente, Antonio. Lo fascinante aquí es el sincretismo. Los caballeros que llegaron no veían monstruos paganos, veían pruebas de fe materializadas en la geografía de la Nueva España.",
      },
      {
        time: "12:45",
        speaker: "Fray Antonio:",
        text: "Se dice que en las minas de Guanajuato, los trabajadores tallaban la cruz de San Jorge en las entradas de los socavones para ahuyentar a los \"espíritus de la tierra\" que ellos asimilaban con la bestia del mito.",
      },
    ],
    related: [
      {
        label: "Episodio III",
        title: "Las reliquias de Compostela en el Altiplano",
        description:
          "El viaje de los huesos sagrados y su impacto en las rutas comerciales del centro de México.",
        slug: null,
      },
      {
        label: "Episodio II",
        title: "Arquitectura de Templos Fortaleza",
        description:
          "Por qué los conventos del siglo XVI parecen castillos y qué defendían realmente.",
        slug: null,
      },
      {
        label: "Episodio I",
        title: "Bestiarios del Nuevo Mundo",
        description:
          "Animales fantásticos y reales en las cartas de relación a Carlos V.",
        slug: null,
      },
    ],
    supportCard: {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDX3xlzn_AgCiY09t96FbSHZX28TgY-tfa4ubNEBYkJo9lJUkMGn_P__dkPcS8K8A4aU_cX-HpH6sK4Lh1iXLLu3OwPFL3uAcABsgqvQAudXBjm2WbKUcEpyGsrF71jDCSZgH8rHv_08htW_9oawBZd9cXCXetETlWmeVhIDmyDyJWUiZREzEA88QZW6ZmCanPUQLgTBPdBvVusF_fRtg-U5bqVwcHo5MqiC15a7GzIkX_fOtzZzcgWRbJCMFDfztlfoxRU2oRlvM9q",
      alt: "Libro encuadernado en cuero con herrajes sobre mesa de madera",
      title: "Apoya al Scriptorium",
      description:
        "Donaciones para la preservación y digitalización de códices coloniales.",
    },
  },
  "derecho-de-conquista-la-escuela-de-salamanca": {
    slug: "derecho-de-conquista-la-escuela-de-salamanca",
    metaTitle: "México Medieval | Derecho de Conquista",
    metaDescription:
      "Vol. 11 — Legal History: la Escuela de Salamanca y el derecho de conquista.",
    episodeBadge: "Vol. 11 — Legal History",
    title: "Derecho de Conquista:",
    titleAccent: "La Escuela de Salamanca",
    description:
      "Recorremos el debate teológico y jurídico que, desde Salamanca, cuestionó la legitimidad de la conquista — voces que resonaron hasta los tribunales novohispanos.",
    hosts: "Conducido por el equipo México Medieval",
    dateDisplay: "28 de septiembre, 2023",
    avatars: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIDaYzr8fStJu6kv-bjQF8qOukfvn7kRBsyYZ8tIzlmayn_N9qlTpE3uDMbEx7ib6PX9uz__tllfEwGe5020eDLUcnTGKdVbxNKNHSiuSvR0F5cT9hP9ij5NAQVGlnqExWrLpKFfixrjcqSQ2EJUAZ5u7pHidMx6sRcaODfOrceT4QbIPhMab66kY_AOBFDUlA0VdoLRlbm4xQFL9Jycj0DMZMDkIdeB2ffY_eYvqNAjlEKw64aETsRAc5LBf_hmUA1Ive6BtD6xIH",
        alt: "Retrato del conductor",
      },
    ],
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBn9KbIcZ1XA8zD1ZT2snQ7Iuz4nUUchwK_0KDAzSV6rrfO-qnM1OTvgRjpqMR-9ln3-c28Lv2JHBpcNtfuqjL_DP4w4iVl-74Mx7IRdHAeOv6awcTsHoCNd_HGYE_nZTAaLvltX-jcdVYekbuXWT0jgpWKCo182JdZTQp6WZ0S2zXZyB5-P8o48uS6yWdXac5XgeiGzY3NdVhKTju1btlY_LUPnNOnddsXYyW6Vjl2hMaJdCsZkLArlMVn4h3npN03kLtr0w0BZdfN",
    coverAlt: "Pergamino con sello de cera y caligrafía sobre mesa rústica",
    player: {
      current: "0:00",
      total: "58:30",
      progressPercent: 0,
    },
    bodyParagraphs: [
      "Las lecturas de Francisco de Vitoria y Domingo de Soto marcaron un antes y un después en la forma en que Europa entendió a los pueblos del otro lado del océano.",
      "Este episodio conecta esas disputas académicas con las pragmáticas que llegaron a la Nueva España y con los silencios del archivo.",
    ],
    transcript: [
      {
        time: "00:00",
        speaker: "Presentador:",
        text: "Hoy seguimos el hilo de quienes, desde la universidad, intentaron poner límites al poder de la corona en nombre de la conciencia.",
      },
    ],
    related: [
      {
        label: "Vol. 12",
        title: "La leyenda de San Jorge",
        description: "Hagiografía y caballería en el imaginario novohispano.",
        slug: "la-leyenda-de-san-jorge-caballeros-y-dragones",
      },
      {
        label: "Vol. 10",
        title: "El Archivo de Indias",
        description: "Metodología y laberintos del papel colonial.",
        slug: "el-archivo-de-indias-laberinto-de-papel",
      },
    ],
    supportCard: {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDX3xlzn_AgCiY09t96FbSHZX28TgY-tfa4ubNEBYkJo9lJUkMGn_P__dkPcS8K8A4aU_cX-HpH6sK4Lh1iXLLu3OwPFL3uAcABsgqvQAudXBjm2WbKUcEpyGsrF71jDCSZgH8rHv_08htW_9oawBZd9cXCXetETlWmeVhIDmyDyJWUiZREzEA88QZW6ZmCanPUQLgTBPdBvVusF_fRtg-U5bqVwcHo5MqiC15a7GzIkX_fOtzZzcgWRbJCMFDfztlfoxRU2oRlvM9q",
      alt: "Libro antiguo sobre mesa de madera",
      title: "Apoya al Scriptorium",
      description:
        "Donaciones para la preservación y digitalización de códices coloniales.",
    },
  },
  "el-archivo-de-indias-laberinto-de-papel": {
    slug: "el-archivo-de-indias-laberinto-de-papel",
    metaTitle: "México Medieval | El Archivo de Indias",
    metaDescription:
      "Vol. 10 — Methodology: navegar el laberinto de papel del Archivo de Indias.",
    episodeBadge: "Vol. 10 — Methodology",
    title: "El Archivo de Indias:",
    titleAccent: "Laberinto de Papel",
    description:
      "Una guía sonora para historiadores: cómo leer legajos, pliegos de petición y el ritmo burocrático del imperio.",
    hosts: "Conducido por el equipo México Medieval",
    dateDisplay: "15 de agosto, 2023",
    avatars: [
      {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2YsmIekmEGeqy64WpLkx-yF7eNDrBE2_iHNyXcHamPgvHUDfrgHiVUvj8jrSQ2_mnxxbqh7lHs4ALrHzoLwqhisoCk4DZwrc4P2LjM5RaYM0p2o8adWAIykHShxmCHXZotNLcdyZUWNt1s2gMg2IR45EK-xFsYYukYu655vDhoJ6pVbIRuK_8rS4M1GMkqBfHqn7FOZUJ-bqctewtMbFkkXPxHnHe_JV0CziJAT4PBBnQXo4Iv_CbUAZUdb-z2VZdv3wDX5KWnL-6",
        alt: "Retrato de la conductora",
      },
    ],
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANPayenFBMFxeARbEqcH3fSbGUSU4glYaWUGRSggODsrP3sbf-WAytM8CpOPTcEItFesn-yCOqApcu-YRDUj4lwWkJOZomiioFgK3ZAYFJXAdJIyngk34_Q5TvzVBd2nYWLQWLHVXMWtT_Nr57YHrm9OYkjUKNInSP0eXShvIjhvcbgWAYHzilFNEKmDvc_CanHch1YYIYBk4b8FfFBRYioIfV5NaZV7X-QaNCGPQJZ4wD3hXmCFs75KYnoixdfQRAG8mDwRqH73Db",
    coverAlt: "Biblioteca clásica con libros encuadernados en piel",
    player: {
      current: "36:42",
      total: "51:00",
      progressPercent: 72,
    },
    bodyParagraphs: [
      "Sevilla guardó siglos de correspondencia entre virreinatos y metrópoli; cada caja es un mapa de voces y omisiones.",
      "Compartimos estrategias de búsqueda, lectura en diagonal y cómo no perderse en los índices del siglo XVIII.",
    ],
    transcript: [
      {
        time: "00:00",
        speaker: "Presentadora:",
        text: "Antes de abrir el primer legajo, respiramos el orden del archivo: olor a papel, tinta y decisiones administrativas.",
      },
    ],
    related: [
      {
        label: "Vol. 11",
        title: "Derecho de Conquista",
        description: "Salamanca y el imperio.",
        slug: "derecho-de-conquista-la-escuela-de-salamanca",
      },
      {
        label: "Vol. 12",
        title: "La leyenda de San Jorge",
        description: "Mito y devoción en las minas.",
        slug: "la-leyenda-de-san-jorge-caballeros-y-dragones",
      },
    ],
    supportCard: {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDX3xlzn_AgCiY09t96FbSHZX28TgY-tfa4ubNEBYkJo9lJUkMGn_P__dkPcS8K8A4aU_cX-HpH6sK4Lh1iXLLu3OwPFL3uAcABsgqvQAudXBjm2WbKUcEpyGsrF71jDCSZgH8rHv_08htW_9oawBZd9cXCXetETlWmeVhIDmyDyJWUiZREzEA88QZW6ZmCanPUQLgTBPdBvVusF_fRtg-U5bqVwcHo5MqiC15a7GzIkX_fOtzZzcgWRbJCMFDfztlfoxRU2oRlvM9q",
      alt: "Libro antiguo sobre mesa de madera",
      title: "Apoya al Scriptorium",
      description:
        "Donaciones para la preservación y digitalización de códices coloniales.",
    },
  },
};

export function getPodcastBySlug(slug: string): PodcastEpisodeDetail | null {
  return EPISODES[slug] ?? null;
}

export function getAllPodcastSlugs(): string[] {
  return Object.keys(EPISODES);
}
