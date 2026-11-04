export type LocalizedLabel = { es: string; en: string };

export type IndianLawCategoryKey =
  | "R1"
  | "R2"
  | "I1"
  | "C1"
  | "P1"
  | "P2"
  | "RC"
  | "INST";

export const INDIAN_LAW_CATEGORIES: Record<
  IndianLawCategoryKey,
  { label: LocalizedLabel; color: string }
> = {
  R1: {
    label: { es: "Norma regia promulgada", en: "Enacted royal norm" },
    color: "#155e75",
  },
  R2: {
    label: { es: "Norma territorial o delegada", en: "Territorial or delegated norm" },
    color: "#2f855a",
  },
  I1: {
    label: { es: "Instrumento jurídico-procedimental", en: "Legal-procedural instrument" },
    color: "#9a3412",
  },
  C1: {
    label: { es: "Compilación oficial de uso administrativo", en: "Official administrative compilation" },
    color: "#6d28d9",
  },
  P1: {
    label: { es: "Proyecto oficial o instrumento preparatorio", en: "Official project or preparatory instrument" },
    color: "#b45309",
  },
  P2: {
    label: { es: "Compilación o proyecto no promulgado", en: "Unenacted compilation or project" },
    color: "#9d174d",
  },
  RC: {
    label: { es: "Recopilación promulgada como corpus", en: "Compilation enacted as a legal corpus" },
    color: "#374151",
  },
  INST: {
    label: { es: "Hito institucional", en: "Institutional milestone" },
    color: "#475569",
  },
};

export const INDIAN_LAW_THEMES = {
  "Indígenas y esclavitud": "Indigenous peoples and slavery",
  "Gobierno y población": "Government and settlement",
  "Trabajo indígena": "Indigenous labour",
  "Conquista y legitimación": "Conquest and legitimation",
  Instituciones: "Institutions",
  "Conquista y población": "Conquest and settlement",
  "Encomienda y gobierno": "Encomienda and government",
  "Compilación y administración": "Compilation and administration",
  "Audiencias y justicia": "Audiencias and justice",
  "Reforma ovandina": "Ovando reforms",
  "Información y territorio": "Information and territory",
  "Iglesia y Patronato": "Church and royal patronage",
  Minería: "Mining",
  "Tierra y fiscalidad": "Land and fiscal policy",
} as const;

export type IndianLawSourceKind = "primary" | "edition" | "hist" | "reference";

export type IndianLawSource = {
  kind: IndianLawSourceKind;
  label: string;
  url: string;
};

export const INDIAN_LAW_SOURCES: Record<string, IndianLawSource> = {
  garcia_gallo: {
    kind: "hist",
    label: 'Alfonso García-Gallo, "La Ley como fuente del Derecho en Indias en el siglo XVI" (AHDE)',
    url: "https://www.boe.es/biblioteca_juridica/anuarios_derecho/articulo.php?id=ANU-H-1951-10060700730",
  },
  dougnac_manual: {
    kind: "hist",
    label: "Antonio Dougnac Rodríguez, Manual de historia del derecho indiano (UNAM)",
    url: "https://repositorio.unam.mx/contenidos/5009046",
  },
  cruz_barney: {
    kind: "hist",
    label: 'Oscar Cruz Barney, "Carlos V y el derecho indiano" (UNAM)',
    url: "https://revistas.juridicas.unam.mx/index.php/historia-derecho/article/download/17674/18211",
  },
  perez_copulata: {
    kind: "hist",
    label: 'Leticia Pérez Puente, "Releer la Copulata de las leyes y provisiones de indias" (UNAM)',
    url: "https://revistas.juridicas.unam.mx/index.php/historia-derecho/article/view/18529",
  },
  perez_iglesia: {
    kind: "hist",
    label: "Leticia Pérez Puente, La Iglesia del rey. El patronato indiano y el libro De la gobernación espiritual (UNAM)",
    url: "https://www.iisue.unam.mx/publicaciones/libros/la-iglesia-del-rey-el-patronato-indiano-y-el-libro-de-la-gobernacion-espiritual",
  },
  burgos_pares: {
    kind: "primary",
    label: "PARES: Ordenanzas para el tratamiento de los indios (copia de las Leyes de Burgos), AGI, INDIFERENTE,419,L.4,F.83R-96V",
    url: "https://pares.cultura.gob.es/ParesBusquedas20/catalogo/description/246509",
  },
  valladolid_pares: {
    kind: "primary",
    label: "PARES: documentos de 1513 sobre buen tratamiento; AGI, PATRONATO,174,R.1",
    url: "https://pares.cultura.gob.es/ParesBusquedas20/catalogo/description/124766",
  },
  burgos_bne: {
    kind: "edition",
    label: "BNE: facsímil y estudio de las Leyes de Burgos (1512) y Valladolid (1513)",
    url: "https://datos.bne.es/edicion/bimo0000274045.html",
  },
  burgos_revision: {
    kind: "hist",
    label: "José Sánchez-Arcilla Bernal, revisión histórico-jurídica de las Leyes de Burgos (UCM)",
    url: "https://revistas.ucm.es/index.php/CUHD/article/view/77969",
  },
  ovando_pares: {
    kind: "primary",
    label: "PARES: Juan de Ovando, registro de autoridad y trayectoria en el Consejo de Indias",
    url: "https://pares.cultura.gob.es/ParesBusquedas20/catalogo/autoridad/62194",
  },
  rah_docleg_5: {
    kind: "edition",
    label: "Real Academia de la Historia, Colección de documentos inéditos, Documentos legislativos I (edición histórica digital)",
    url: "https://readingroo.ms/5/6/4/5/56452/56452-h/56452-h.htm",
  },
  inah_1500: {
    kind: "hist",
    label: "INAH: estudio con referencias al AGI y ediciones de la cédula de 20 de junio de 1500",
    url: "https://investigacion.inah.gob.mx/_flysystem/fedora/2024-07/mmtria-por-la-senda-de-la-libertad-hispana-ideologia.pdf",
  },
  requerimiento_pares: {
    kind: "primary",
    label: "PARES: registro de autoridad del Requerimiento (1512-1542)",
    url: "https://pares.cultura.gob.es/ParesBusquedas20/catalogo/autoridad/155788",
  },
  requerimiento_cervantes: {
    kind: "edition",
    label: "Biblioteca Virtual Miguel de Cervantes: transcripción del Requerimiento en versiones de Nueva España, Tierra Firme y Perú",
    url: "https://www.cervantesvirtual.com/obra/requerimiento-que-ha-de-hacerse-a-los-indios-para-que-se-sometan-para-nueva-espana-en-1518-y-1523-tierra-firme-1526-y-peru-1533-fragmento-1259446/",
  },
  requerimiento_hist: {
    kind: "hist",
    label: "Fernando Méndez Sánchez, análisis histórico-jurídico del Requerimiento (Hipogrifo)",
    url: "https://www.redalyc.org/journal/5175/517569474048/517569474048.pdf",
  },
  consejo_ministerio: {
    kind: "reference",
    label: "Ministerio de Cultura: Consejo de Indias, funciones y cronología institucional",
    url: "https://www.cultura.gob.es/eu/cultura/archivos/difusion/mc-difusion/bicentenarios/contexto-historico/imperio-espanol/organizacion/consejo-de-indias.html",
  },
  rah_docleg_9: {
    kind: "edition",
    label: "Real Academia de la Historia, Colección de documentos inéditos, Documentos legislativos II: disposiciones de 1526",
    url: "https://www.gutenberg.org/cache/epub/60971/pg60971-images.html",
  },
  rah_docleg_10: {
    kind: "edition",
    label: "Real Academia de la Historia, Colección de documentos inéditos, Documentos legislativos III: cédulas y provisiones de 1530-1534",
    url: "https://www.gutenberg.org/cache/epub/66554/pg66554-images.html",
  },
  lillo_esclavitud: {
    kind: "hist",
    label: 'Víctor Lillo Casta, "La Información en derecho de Vasco de Quiroga..." (Manuscrits)',
    url: "https://revistes.uab.cat/manuscrits/article/view/v44-lillo-2",
  },
  leyes_nuevas_pares: {
    kind: "primary",
    label: "PARES: Leyes Nuevas (1542), Real Provisión de 20 de noviembre de 1542",
    url: "https://pares.cultura.gob.es/ParesBusquedas20/catalogo/autoridad/145917/imprimir",
  },
  leyes_nuevas_doc: {
    kind: "primary",
    label: "PARES: Real Provisión de las Leyes Nuevas, AGI, INDIFERENTE,423,L.20,F.606V-615R",
    url: "https://pares.cultura.gob.es/ParesBusquedas20/catalogo/description/255830/imprimir",
  },
  malinas_unm: {
    kind: "reference",
    label: "Finding aid del registro AGI, Indiferente General, 427, L.30: provisiones de Malinas, 20 de octubre de 1545",
    url: "https://library.unm.edu/cswr/docs/nmarchives/FindingAids/mss841indiferente.pdf",
  },
  malinas_unam: {
    kind: "edition",
    label: "UNAM: edición/estudio que reproduce la cédula de Malinas de 20 de octubre de 1545",
    url: "https://archivos.juridicas.unam.mx/www/bjv/libros/11/5166/41.pdf",
  },
  mendoza_ministerio: {
    kind: "reference",
    label: "Ministerio de Cultura, Legislación Histórica: compilaciones y Ordenanzas de Antonio de Mendoza (1548)",
    url: "https://www.cultura.gob.es/ca/cultura/archivos/bases-de-datos/lhe/fuentes/leyes-hechas-consejo/compilaciones.html",
  },
  mendoza_cdiex: {
    kind: "edition",
    label: "CDIEx: ficha y facsímil de Ordenanzas y copilación de leyes de Antonio de Mendoza (México, 1548)",
    url: "https://cdiex.es/documento/ordenanzas-y-copilacion-de-leyes-por-el-muy-ilustre-senor-don-antonio-de-mendoza",
  },
  instituciones_boe: {
    kind: "hist",
    label: "BOE, Estudios de Instituciones Hispano-Indianas, tomo I",
    url: "https://www.boe.es/biblioteca_juridica/pdf/PUB-DH-2015-79_1.pdf",
  },
  servicio_1549_somoza: {
    kind: "edition",
    label: "Colección Somoza: cédula de 1 de junio de 1549 contra la carga de indígenas (con referencia AGI)",
    url: "https://www.enriquebolanos.org/media/publicacion/coleccionsomoza_tomo15.pdf",
  },
  servicio_zavala: {
    kind: "hist",
    label: "Silvio Zavala, El servicio personal de los indios en la Nueva España: 1550-1575 (edición OA en JSTOR)",
    url: "https://www.jstor.org/stable/j.ctv3dnpvq",
  },
  puga_original: {
    kind: "primary",
    label: "Primeros Libros de las Américas: Vasco de Puga, Provisiones cédulas instrucciones de su majestad (México, 1563)",
    url: "https://primeroslibros.org/spotlight/primeros-libros-de-las-americas/catalog/ebbc4ec8c99efd9e6b30179aec00f6a8?locale=es",
  },
  puga_muro: {
    kind: "hist",
    label: "Antonio Muro Orejón, estudio sobre el Cedulario de Vasco de Puga (UNAM)",
    url: "https://revistas-colaboracion.juridicas.unam.mx/index.php/rev-facultad-derecho-mx/article/view/27024/0",
  },
  audiencias_unam: {
    kind: "hist",
    label: 'Agustín Bermúdez Aznar, "Las Ordenanzas de Audiencias en la Recopilación de 1680" (UNAM)',
    url: "https://archivos.juridicas.unam.mx/www/bjv/libros/2/820/10.pdf",
  },
  nueva_recop_boe: {
    kind: "primary",
    label: "BOE: Nueva Recopilación de las Leyes de Castilla, reimpresión digital con estudio",
    url: "https://www.boe.es/biblioteca_juridica/publicacion.php?id=PUB-LH-2022-271_NUEVA_RECOPILACI%C3%93N_DE_LAS_LEYES_DE_CASTILLA&modo=1&tipo=L",
  },
  junta_uned: {
    kind: "hist",
    label: "UNED: investigación sobre la visita de Ovando y la Junta Magna de 1568",
    url: "https://portalcientifico.uned.es/documentos/5d1df64c29995204f7667acf?lang=es",
  },
  ordenanzas_1571_open: {
    kind: "primary",
    label: "Open Library / Internet Archive: Ordenanzas reales del Consejo de las Indias, texto de 1571 en edición antigua",
    url: "https://openlibrary.org/works/OL43296509W/Ordenanzas_reales_del_Conseio_de_las_Indias..",
  },
  ordenanzas_1571_csic: {
    kind: "hist",
    label: "Anuario de Estudios Americanos: estudio sobre las Ordenanzas del Consejo de 1571",
    url: "https://estudiosamericanos.revistas.csic.es/index.php/estudiosamericanos/article/download/281/286/286",
  },
  descripciones_cvc: {
    kind: "primary",
    label: "CVC / Archivo General de Indias: Ordenanzas para la descripción de las Indias, 3 de julio de 1573, AGI, INDIFERENTE,427,L.29,F.5V-66V",
    url: "https://cvc.cervantes.es/obref/arnac/indias/indias_01.htm",
  },
  poblacion_bne: {
    kind: "edition",
    label: "BNE: transcripción facsimilar de las Ordenanzas de descubrimiento, nueva población y pacificación de 13 de julio de 1573",
    url: "https://datos.bne.es/resource/a4685996",
  },
  ovando_scielo: {
    kind: "hist",
    label: "Estudios de Historia Novohispana: reformas ovandinas y su aplicación territorial",
    url: "https://www.scielo.org.mx/scielo.php?pid=S0185-25232021000200055&script=sci_arttext",
  },
  encinas_boe: {
    kind: "primary",
    label: "BOE: Cedulario Indiano de Diego de Encinas, cuatro libros y estudio de García-Gallo",
    url: "https://www.boe.es/biblioteca_juridica/publicacion.php?id=PUB-LH-2018-56",
  },
  encinas_estudio: {
    kind: "hist",
    label: "Alfonso García-Gallo, estudio e índices del Cedulario de Encinas (BOE)",
    url: "https://www.boe.es/biblioteca_juridica/abrir_pdf.php?id=PUB-LH-2018-56_5",
  },
  zorita_rb: {
    kind: "primary",
    label: "Real Biblioteca Digital: manuscrito de Alonso de Zorita, Leyes y ordenanças reales de las Indias del mar océano (1574)",
    url: "https://rbdigital.realbiblioteca.es/s/realbiblioteca/item/12710",
  },
  zorita_contexto: {
    kind: "hist",
    label: "Real Biblioteca Digital: contexto del corpus legislativo de las Audiencias y del manuscrito de Zorita",
    url: "https://rbdigital.realbiblioteca.es/s/manuscritos-de-am-rica/page/un-corpus-legislativo-de-las-audiencias-indianas-m-s-all-de-lo-legal",
  },
  nuevo_cuaderno_cervantes: {
    kind: "primary",
    label: "Biblioteca Virtual Miguel de Cervantes: edición digital de las Nuevas leyes y ordenanzas de minas (1585; ordenanzas de 1584)",
    url: "https://www.cervantesvirtual.com/obra/nueuas-leyes-y-ordenancas-sic-hechas-por-su-magestad-del-rey-don-felipe-nuestro-senor-cerca-de-la-forma-que-se-ha-de-tener-enestos-reynos-en-el-descubrimiento-lauor-y-beneficio-delas-minas-de-oro-plata-acogue-y-otros-metales-y-con-la-parte-que-se-ha-de-acudir-a-su-magestad-y-la-que-han-de-auer-los-descubridores-y-beneficiadores-dellas/",
  },
  nuevo_cuaderno_hist: {
    kind: "hist",
    label: "Antonio Dougnac Rodríguez, estudio sobre las Ordenanzas del Nuevo Cuaderno (Universidad de Chile)",
    url: "https://historiadelderecho.uchile.cl/index.php/RCHD/article/view/22129",
  },
  tierras_solano: {
    kind: "edition",
    label: "Francisco de Solano, Cedulario de tierras. Compilación de legislación agraria colonial (1497-1820), UNAM",
    url: "https://repositorio.unam.mx/contenidos/5030732",
  },
  tierras_scielo: {
    kind: "hist",
    label: "Estudios de Historia Novohispana: composiciones de tierras y cédulas de 1591-1595",
    url: "https://www.scielo.org.mx/scielo.php?pid=S0185-25232015000100029&script=sci_arttext",
  },
  tierras_jurado: {
    kind: "hist",
    label: "María Carolina Jurado, recepción de las Reales Cédulas de 1591 en el Perú (Revista Complutense)",
    url: "https://revistas.ucm.es/index.php/RCHA/es/article/view/85518",
  },
  recop1680_loc: {
    kind: "primary",
    label: "Library of Congress: primera edición oficial impresa de la Recopilación de leyes de los reinos de las Indias (Madrid, 1681)",
    url: "https://www.loc.gov/item/31010935/",
  },
  recop1680_boe: {
    kind: "edition",
    label: "BOE: edición digital de la Recopilación de leyes de los reinos de las Indias",
    url: "https://www.boe.es/biblioteca_juridica/publicacion.php?id=PUB-LH-1998-62",
  },
  recop1680_hist: {
    kind: "hist",
    label: "Concepción García-Gallo, estudio sobre la Recopilación de 1680 (AHDE / BOE)",
    url: "https://www.boe.es/biblioteca_juridica/anuarios_derecho/articulo.php?id=ANU-H-1979-10009900120",
  },
};

export const INDIAN_LAW_CORE_HISTORIOGRAPHY = [
  "garcia_gallo",
  "dougnac_manual",
  "cruz_barney",
  "perez_copulata",
  "perez_iglesia",
] as const;
