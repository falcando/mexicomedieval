export type SpotifyGuestSpot = {
  series: string;
  title: string;
  listenHref: string;
  documentType: "spotifyEpisode";
};

/** Must match `series` on guest spots for that show (used for catalog filtering). */
export const DIAS_CON_LA_GARRA_Y_ALE_GARIBAY_SERIES =
  "dias-con-la-garra-y-ale-garibay" as const;
  
export const DIAS_CON_LA_GARRA_Y_ALE_GARIBAY_SERIES_EPISODES = [
  {
    series: 'dias-con-la-garra-y-ale-garibay',
    title: '241 - Teotihuacán - Dr Jabón, Hervin Fernández, historiador',
    listenHref: 'https://open.spotify.com/episode/52VJgP7T4uhEoxqVXDFbUd',
    documentType: 'spotifyEpisode',
  },
  {
    series: 'dias-con-la-garra-y-ale-garibay',
    title: '238 - Alejandro Magno - Dr Jabón, Hervin Fernández, historiador',
    listenHref: 'https://open.spotify.com/episode/560c0mRm3YtLpbwufSAblF',
    documentType: 'spotifyEpisode',
  },
  {
    series: 'dias-con-la-garra-y-ale-garibay',
    title: '237 - El Imperio Persa (hoy Irán) - Dr Jabón, Hervin Fernández, historiador',
    listenHref: 'https://open.spotify.com/episode/5nYh2QKvz26hwxcWOcqObK',
    documentType: 'spotifyEpisode',
  },
  
  {
    series: 'dias-con-la-garra-y-ale-garibay',
    title: '233 - Evangelios Apócrifos - Dr Jabón, Hervin Fernández, historiador',
    listenHref: 'https://open.spotify.com/episode/7Afe9zrZ3mMSa8jYbBKr3I',
    documentType: 'spotifyEpisode',
  },
  
  {
    series: 'dias-con-la-garra-y-ale-garibay',
    title: '219 - Miércoles de Ceniza - Dr Jabón, Hervin Fernández, historiador',
    listenHref: 'https://open.spotify.com/episode/6qf5gyw0C8xGSr2bd1g4mF',
    documentType: 'spotifyEpisode',
  },
  
  {
    series: 'dias-con-la-garra-y-ale-garibay',
    title: '216 - Fundación de Guadalajara - Dr Jabón, Hervin Fernández',
    listenHref: 'https://open.spotify.com/episode/7wwEyo3vidKyc2tFSCq3oq',
    documentType: 'spotifyEpisode',
  },
  
  {
    series: 'dias-con-la-garra-y-ale-garibay',
    title: '210 - La Edad Media - Dr Jabón, Hervin Fernández, historiador',
    listenHref: 'https://open.spotify.com/episode/2OMxnL0jmsguXpn2qMiAEA',
    documentType: 'spotifyEpisode',
  },
  
  {
    series: 'dias-con-la-garra-y-ale-garibay',
    title: '104 - La Caída de Constantinopla - Dr Jabón, Hervin Fernández, historiador',
    listenHref: 'https://open.spotify.com/episode/2OE0hJyop1kCoHon1pzbkc',
    documentType: 'spotifyEpisode',
  },

  {
    series: 'dias-con-la-garra-y-ale-garibay',
    title: 'Maratón - Dr Jabón, Hervin Fernández, historiador',
    listenHref: 'https://open.spotify.com/episode/39SbfOy691oE29A7uAjED9',
    documentType: 'spotifyEpisode',
  },
  
  {
    series: 'dias-con-la-garra-y-ale-garibay',
    title: '128 - El Tequila - Dr Jabón, Hervin Fernández, historiador',
    listenHref: 'https://open.spotify.com/episode/3PLCmjykGbWvCWiL95tKZu',
    documentType: 'spotifyEpisode',
  },
  
  
  
  {
    series: 'dias-con-la-garra-y-ale-garibay',
    title: '097 - La Historia del Cónclave - Dr Jabón, Hervin Fernández, historiador',
    listenHref: 'https://open.spotify.com/episode/4Bt9R1rGFCj3XHnZnrBzvO',
    documentType: 'spotifyEpisode',
  },
  
  
  
  {
    series: 'dias-con-la-garra-y-ale-garibay',
    title: '213 - Groenlandia ¿Tierra Verde? - Dr Jabón, Hervin Fernández, historiador',
    listenHref: 'https://open.spotify.com/episode/4uUMMzAXF4rbVNoH9iKxHs',
    documentType: 'spotifyEpisode',
  },
  ] as const satisfies readonly SpotifyGuestSpot[];

export const SPOTIFY_GUEST_SPOTS: SpotifyGuestSpot[] = [
  ...DIAS_CON_LA_GARRA_Y_ALE_GARIBAY_SERIES_EPISODES,
  {
    series: 'se-tenia-que-decir-con-el-terri-podcast',
    title:
      "Hervin Fernández, historiador, medievalista e investigador",
    listenHref: "https://open.spotify.com/episode/7uyMnMNWmC5ZOKnCDKAC43",
    documentType: "spotifyEpisode",
  },
  {
    series: 'tiempos-imposibles',
    title: 'Atila destruye Roma (ft. Hervin Fernández) | Ep. 108',
    listenHref: 'https://open.spotify.com/episode/1P1Nl2MBJ2eGjugxXXgmLh',
    documentType: 'spotifyEpisode',
  }
];
