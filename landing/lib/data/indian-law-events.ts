import { INDIAN_LAW_THEMES, type IndianLawCategoryKey } from "@/lib/data/indian-law-sources";

export type LocalizedText = {
  es: string;
  en: string;
};

export type IndianLawEvidence = "A" | "B" | "C";

export type IndianLawEvent = {
  year: string;
  start: number;
  cat: IndianLawCategoryKey;
  theme: keyof typeof INDIAN_LAW_THEMES;
  title: LocalizedText;
  form: LocalizedText;
  authority: string;
  scope: LocalizedText;
  sanction: LocalizedText;
  evidence: IndianLawEvidence;
  summary: LocalizedText;
  interpretation: LocalizedText;
  sources: string[];
  archivalNote?: LocalizedText;
};

const bi = (es: string, en: string): LocalizedText => ({ es, en });

export const INDIAN_LAW_EVENTS: IndianLawEvent[] = [
  {
    year: "1500",
    start: 1500,
    cat: "R1",
    theme: "Indígenas y esclavitud",
    title: bi(
      "Cédula a Pedro de Torres: libertad y restitución de indígenas",
      "Cédula to Pedro de Torres: freedom and restitution of Indigenous people",
    ),
    form: bi("Real cédula", "Royal cédula"),
    authority: "Reyes Católicos",
    scope: bi(
      "Casos concretos de indígenas llevados y vendidos en Castilla",
      "Specific cases of Indigenous people taken to and sold in Castile",
    ),
    sanction: bi("Norma regia expedida", "Issued royal norm"),
    evidence: "B",
    summary: bi(
      "Ordenó poner en libertad y devolver a las Indias a indígenas que habían sido llevados y vendidos por mandato de Colón. No debe convertirse retrospectivamente en una abolición universal y definitiva de toda esclavitud indígena: durante el siglo XVI persistieron excepciones, autorizaciones y cambios de política.",
      "It ordered the release and return to the Indies of Indigenous people who had been taken to Castile and sold on Columbus's orders. It should not be retrospectively treated as a universal and definitive abolition of Indigenous slavery: exceptions, authorisations, and policy reversals persisted throughout the sixteenth century.",
    ),
    interpretation: bi(
      "El interés historiográfico está en la construcción temprana de la condición libre del indígena, pero la medida de 1500 es concreta y convive después con categorías de cautiverio y guerra.",
      "Its historiographical importance lies in the early construction of Indigenous legal freedom, but the measure of 1500 was specific and later coexisted with categories of captivity and war.",
    ),
    sources: ["inah_1500", "garcia_gallo"],
    archivalNote: bi(
      "AGI, Contratación, 3249, f. 242, según la edición y bibliografía citadas; no se localizó en esta revisión un enlace PARES directo al ítem.",
      "AGI, Contratación, 3249, f. 242, according to the cited edition and bibliography; this review did not locate a direct PARES link to the item.",
    ),
  },
  {
    year: "1501–1503",
    start: 1501,
    cat: "R1",
    theme: "Gobierno y población",
    title: bi("Instrucciones a Nicolás de Ovando", "Instructions to Nicolás de Ovando"),
    form: bi("Reales cédulas e instrucciones", "Royal cédulas and instructions"),
    authority: "Reyes Católicos",
    scope: bi(
      "Gobernación de las Indias, especialmente La Española",
      "Government of the Indies, especially Hispaniola",
    ),
    sanction: bi(
      "Mandatos regios obligatorios para el destinatario",
      "Royal commands binding on the addressee",
    ),
    evidence: "A",
    summary: bi(
      "Las instrucciones a Ovando articulan gobierno, población, evangelización, hospitales, relación con los indígenas y administración. Son un buen ejemplo de norma regia dirigida a un oficio concreto: obligatoria, pero no necesariamente formulada como ley general para todas las Indias.",
      "The instructions to Ovando combine government, settlement, evangelisation, hospitals, relations with Indigenous communities, and administration. They exemplify a royal norm directed to a specific office: binding, but not necessarily framed as general law for all the Indies.",
    ),
    interpretation: bi(
      "La instrucción debe distinguirse de una recopilación o de unas ordenanzas generales: su fuerza deriva del mandato regio y de su destinatario y ámbito.",
      "An instruction must be distinguished from a compilation or general ordinances: its force derives from the royal command and from its specific addressee and scope.",
    ),
    sources: ["ovando_pares", "dougnac_manual", "garcia_gallo"],
    archivalNote: bi(
      "AGI, INDIFERENTE,418,L.1, con varias instrucciones de 1501 y 1503.",
      "AGI, INDIFERENTE,418,L.1, containing several instructions from 1501 and 1503.",
    ),
  },
  {
    year: "20 dic. 1503",
    start: 1503.97,
    cat: "R1",
    theme: "Trabajo indígena",
    title: bi(
      "Compulsión laboral con salario y condición formal de libertad",
      "Compulsory labour with wages and formal legal freedom",
    ),
    form: bi(
      "Real cédula / provisión en la tradición documental",
      "Royal cédula / provision in the documentary tradition",
    ),
    authority: "Corona",
    scope: bi("La Española", "Hispaniola"),
    sanction: bi("Norma regia expedida", "Issued royal norm"),
    evidence: "B",
    summary: bi(
      "La Corona permitió compeler a los indígenas a trabajar en minas, edificios y granjerías, fijando salario y repitiendo que debían hacerlo como personas libres y no como siervos. La tensión entre libertad jurídica y trabajo obligatorio aparece aquí de forma especialmente nítida.",
      "The Crown allowed Indigenous people to be compelled to work in mines, buildings, and agricultural enterprises, while fixing wages and insisting that they were to work as free persons rather than serfs. The tension between legal freedom and compulsory labour is especially clear here.",
    ),
    interpretation: bi(
      "Es un hito estructural para leer después Burgos: la legislación protectora no elimina la coerción laboral, sino que intenta regularla y compatibilizarla con la condición jurídica de libre.",
      "This is a structural milestone for reading Burgos later: protective legislation did not remove labour coercion, but sought to regulate it and reconcile it with free legal status.",
    ),
    sources: ["rah_docleg_5", "garcia_gallo"],
    archivalNote: bi(
      "AGI, Indiferente General, 418, L.1, ff. 121-122, citado por la bibliografía especializada; enlace directo PARES no localizado en esta revisión.",
      "AGI, Indiferente General, 418, L.1, ff. 121-122, as cited in the specialist literature; no direct PARES link was located in this review.",
    ),
  },
  {
    year: "27 dic. 1512",
    start: 1512.99,
    cat: "R1",
    theme: "Trabajo indígena",
    title: bi("Leyes de Burgos", "Laws of Burgos"),
    form: bi(
      "Reales ordenanzas / Real Provisión en la copia conservada",
      "Royal ordinances / Royal Provision in the surviving copy",
    ),
    authority: "Fernando el Católico",
    scope: bi("Antillas, con proyección indiana", "Antilles, with broader Indian projection"),
    sanction: bi("Cuerpo normativo regio", "Royal normative body"),
    evidence: "A",
    summary: bi(
      "Treinta y cinco capítulos sobre residencia, trabajo, alimentación, catequesis, descanso, mujeres, menores, caciques y control de los encomenderos. La copia de 1513 conservada en PARES identifica expresamente el original de 27 de diciembre de 1512.",
      "Thirty-five chapters regulate residence, labour, food, catechesis, rest, women, minors, caciques, and control of encomenderos. The 1513 copy preserved in PARES explicitly identifies the original of 27 December 1512.",
    ),
    interpretation: bi(
      "No conviene describirlas como una abolición general de la esclavitud ni proyectar sobre ellas sin matices categorías modernas de derechos humanos. Jurídicamente intentan ordenar una relación de tutela, evangelización y trabajo compulsivo.",
      "They should not be described as a general abolition of slavery, nor should modern human-rights categories be projected onto them without qualification. Legally, they sought to regulate a relationship of guardianship, evangelisation, and compulsory labour.",
    ),
    sources: ["burgos_pares", "burgos_revision", "garcia_gallo"],
  },
  {
    year: "28 jul. 1513",
    start: 1513.57,
    cat: "R1",
    theme: "Trabajo indígena",
    title: bi(
      "Declaración y moderación de Valladolid",
      "Valladolid declarations and modifications",
    ),
    form: bi(
      "Declaraciones y adiciones a las ordenanzas",
      "Declarations and additions to the ordinances",
    ),
    authority: "Corona",
    scope: bi("Régimen iniciado en Burgos", "Regime initiated at Burgos"),
    sanction: bi(
      "Modificación regia del régimen de 1512",
      "Royal modification of the 1512 regime",
    ),
    evidence: "A",
    summary: bi(
      "Las disposiciones de Valladolid complementan y moderan las ordenanzas de Burgos. Para estudiar vigencia y contenido, es más preciso hablar de un ciclo Burgos–Valladolid, 1512–1513, que tratar el texto de 1512 como un bloque inmutable.",
      "The Valladolid provisions supplemented and modified the Burgos ordinances. For questions of validity and content, it is more accurate to speak of a Burgos–Valladolid cycle, 1512–1513, than to treat the 1512 text as immutable.",
    ),
    interpretation: bi(
      "Este caso muestra una característica central del derecho indiano: la norma se corrige y declara poco después de su expedición, por lo que la fecha del texto inicial no basta para reconstruir el régimen vigente.",
      "This case illustrates a central feature of Indian law: a norm could be corrected and clarified soon after issue, so the date of the initial text alone is insufficient to reconstruct the regime in force.",
    ),
    sources: ["valladolid_pares", "burgos_bne", "garcia_gallo"],
  },
  {
    year: "1513 →",
    start: 1513.6,
    cat: "I1",
    theme: "Conquista y legitimación",
    title: bi("Requerimiento", "Requerimiento"),
    form: bi("Fórmula jurídico-procedimental", "Legal-procedural formula"),
    authority: "Corona / práctica de expediciones",
    scope: bi(
      "Expediciones de conquista y sometimiento",
      "Expeditions of conquest and submission",
    ),
    sanction: bi(
      "Instrumento prescrito, no código general",
      "Prescribed instrument, not a general code",
    ),
    evidence: "A",
    summary: bi(
      "Fórmula que debía comunicar determinadas pretensiones de soberanía, evangelización y obediencia antes de ciertas acciones de guerra o sometimiento. Circuló en distintas versiones y contextos, incluidos Nueva España, Tierra Firme y Perú.",
      "A formula intended to communicate claims of sovereignty, evangelisation, and obedience before certain acts of war or submission. It circulated in different versions and settings, including New Spain, Tierra Firme, and Peru.",
    ),
    interpretation: bi(
      "Debe tratarse como instrumento procedimental de una política de conquista, no como una recopilación ni como un cuerpo general de legislación. Su eficacia práctica y la inteligibilidad de su lectura a las comunidades indígenas son problemas distintos de su función jurídica formal.",
      "It should be treated as a procedural instrument within a policy of conquest, not as a compilation or general legislative body. Its practical effectiveness and the intelligibility of its reading to Indigenous communities are separate questions from its formal legal function.",
    ),
    sources: ["requerimiento_pares", "requerimiento_cervantes", "requerimiento_hist"],
  },
  {
    year: "1524",
    start: 1524,
    cat: "INST",
    theme: "Instituciones",
    title: bi(
      "Consolidación del Consejo de Indias",
      "Consolidation of the Council of the Indies",
    ),
    form: bi("Hito institucional", "Institutional milestone"),
    authority: "Carlos V",
    scope: bi("Administración central de las Indias", "Central administration of the Indies"),
    sanction: bi(
      "No es una ley única; es contexto institucional del circuito normativo",
      "Not a single law; an institutional context for the normative circuit",
    ),
    evidence: "A",
    summary: bi(
      "1524 funciona como fecha convencional de creación o consolidación del Consejo Supremo y Real de Indias, órgano consultivo, judicial y de gobierno. Desde este punto, buena parte de la legislación se prepara mediante consultas, acuerdos y despachos en relación con el monarca.",
      "1524 functions as the conventional date for the creation or consolidation of the Supreme and Royal Council of the Indies, a consultative, judicial, and governmental body. From this point, much legislation was prepared through consultas, agreements, and royal dispatches.",
    ),
    interpretation: bi(
      "Una consulta del Consejo no debe confundirse con una ley: el Consejo delibera y propone; la decisión regia se expresa después en el despacho correspondiente.",
      "A Council consulta should not be confused with a law: the Council deliberated and proposed, while the royal decision was subsequently expressed through the appropriate instrument.",
    ),
    sources: ["consejo_ministerio", "garcia_gallo", "dougnac_manual"],
  },
  {
    year: "17 nov. 1526",
    start: 1526.88,
    cat: "R1",
    theme: "Conquista y población",
    title: bi(
      "Disposiciones sobre descubrimientos y poblaciones",
      "Provisions on discoveries and settlements",
    ),
    form: bi(
      "Real cédula y disposiciones conexas según la transmisión",
      "Royal cédula and related provisions in the documentary transmission",
    ),
    authority: "Carlos V",
    scope: bi(
      "Nuevos descubrimientos y poblaciones",
      "New discoveries and settlements",
    ),
    sanction: bi("Normativa regia", "Royal legislation"),
    evidence: "B",
    summary: bi(
      "El ciclo de 1526 reforzó la supervisión de las expediciones: investigación de violencias, presencia de religiosos, trato pacífico inicial, límites al cautiverio y reglas de población. Es un antecedente directo de la gran ordenación filipina de 1573.",
      "The 1526 cycle strengthened supervision of expeditions through investigation of violence, the presence of religious personnel, initial peaceful treatment, limits on captivity, and settlement rules. It is a direct predecessor of the major Philip II ordinances of 1573.",
    ),
    interpretation: bi(
      "La edición histórica reúne varias piezas de la misma fecha. Conviene evitar convertirlas sin comprobación diplomática en un único documento con un título moderno fijo.",
      "The historical edition brings together several instruments from the same date. They should not be turned, without diplomatic verification, into a single document bearing a fixed modern title.",
    ),
    sources: ["rah_docleg_9", "garcia_gallo"],
  },
  {
    year: "2 ago. 1530",
    start: 1530.59,
    cat: "R1",
    theme: "Indígenas y esclavitud",
    title: bi(
      "Prohibición general de esclavizar indígenas",
      "General prohibition on enslaving Indigenous people",
    ),
    form: bi("Real cédula / provisión general", "Royal cédula / general provision"),
    authority: "Carlos V",
    scope: bi("Indias", "Indies"),
    sanction: bi("Norma regia expedida", "Issued royal norm"),
    evidence: "B",
    summary: bi(
      "La disposición de 1530 prohibió hacer esclavos indígenas bajo los supuestos entonces admitidos. La sobrecarta de 1531 conserva e incorpora la referencia expresa a esta provisión general.",
      "The 1530 measure prohibited the enslavement of Indigenous people under the grounds then accepted. A 1531 sobrecarta preserves and explicitly refers back to this general provision.",
    ),
    interpretation: bi(
      "Su relevancia se entiende mejor junto con 1534: no expresa una política lineal e irreversible, sino un momento de una controversia política y jurídica dentro del gobierno indiano.",
      "Its significance is best understood alongside 1534: it does not represent a linear and irreversible policy, but one moment in a political and legal controversy within Indian government.",
    ),
    sources: ["rah_docleg_10", "lillo_esclavitud"],
  },
  {
    year: "20 feb. 1534",
    start: 1534.14,
    cat: "R1",
    theme: "Indígenas y esclavitud",
    title: bi(
      "Revocación parcial de la política antiesclavista de 1530",
      "Partial reversal of the 1530 anti-slavery policy",
    ),
    form: bi("Real provisión", "Royal provision"),
    authority: "Carlos V",
    scope: bi("Indias", "Indies"),
    sanction: bi("Norma regia expedida", "Issued royal norm"),
    evidence: "B",
    summary: bi(
      "La provisión de 1534 dejó sin efecto la prohibición absoluta de 1530 y volvió a admitir cautiverio en determinados supuestos de guerra considerada justa y rescate, bajo condiciones específicas.",
      "The 1534 provision set aside the absolute prohibition of 1530 and again allowed captivity under specified conditions of supposedly just war and rescate.",
    ),
    interpretation: bi(
      "La secuencia 1530–1534 es un ejemplo especialmente claro de que el derecho indiano debe estudiarse como legislación móvil: promulgación, reacción, revisión y nueva regulación.",
      "The 1530–1534 sequence is a particularly clear example of why Indian law must be studied as moving legislation: enactment, reaction, revision, and renewed regulation.",
    ),
    sources: ["rah_docleg_10", "lillo_esclavitud"],
  },
  {
    year: "20 nov. 1542",
    start: 1542.89,
    cat: "R1",
    theme: "Encomienda y gobierno",
    title: bi("Leyes Nuevas", "New Laws"),
    form: bi(
      "Real Provisión: Leyes y ordenanzas nuevamente hechas...",
      "Royal Provision: Leyes y ordenanzas nuevamente hechas...",
    ),
    authority: "Carlos V",
    scope: bi("Indias", "Indies"),
    sanction: bi("Cuerpo normativo regio", "Royal normative body"),
    evidence: "A",
    summary: bi(
      "Reforma mayor del gobierno indiano, las Audiencias, la encomienda y el tratamiento de los indígenas. El texto de PARES identifica la Real Provisión de Barcelona de 20 de noviembre de 1542 y su articulado.",
      "A major reform of Indian government, the Audiencias, encomienda, and treatment of Indigenous people. The PARES record identifies the Barcelona Royal Provision of 20 November 1542 and its articles.",
    ),
    interpretation: bi(
      "La historiografía debe evitar dos simplificaciones: que las Leyes Nuevas abolieron de inmediato la encomienda en la práctica, o que fueron simplemente derogadas en bloque. El régimen fue modificado y parcialmente retraído en los años siguientes.",
      "Historiography should avoid two simplifications: that the New Laws immediately abolished encomienda in practice, or that they were simply repealed wholesale. The regime was modified and partially rolled back in the following years.",
    ),
    sources: ["leyes_nuevas_doc", "leyes_nuevas_pares", "cruz_barney", "garcia_gallo"],
  },
  {
    year: "26 jun. 1543",
    start: 1543.49,
    cat: "R1",
    theme: "Encomienda y gobierno",
    title: bi(
      "Disposiciones complementarias a las Leyes Nuevas",
      "Supplementary provisions to the New Laws",
    ),
    form: bi("Real Provisión complementaria", "Supplementary Royal Provision"),
    authority: "Carlos V",
    scope: bi("Indias", "Indies"),
    sanction: bi("Norma regia", "Royal norm"),
    evidence: "A",
    summary: bi(
      "La normativa de 1542 fue completada en 1543 mediante nuevas disposiciones y aclaraciones. El propio registro de autoridad de PARES presenta 1542–1543 como un ciclo normativo.",
      "The 1542 legislation was supplemented in 1543 through further provisions and clarifications. PARES itself presents 1542–1543 as a normative cycle.",
    ),
    interpretation: bi(
      "Separar 1542 y 1543 ayuda a evitar la ficción de un texto único y cerrado cuando la Corona siguió ajustando el régimen tras la promulgación inicial.",
      "Separating 1542 from 1543 avoids the fiction of a single closed text when the Crown continued to adjust the regime after the initial enactment.",
    ),
    sources: ["leyes_nuevas_pares", "garcia_gallo"],
  },
  {
    year: "20 oct. 1545",
    start: 1545.8,
    cat: "R1",
    theme: "Encomienda y gobierno",
    title: bi(
      "Provisión de Malinas: modificación de la reforma de encomiendas",
      "Malines provision: modification of encomienda reform",
    ),
    form: bi("Real provisión / cédula de Malinas", "Royal provision / cédula of Malines"),
    authority: "Carlos V",
    scope: bi("Indias", "Indies"),
    sanction: bi(
      "Norma regia; revocación parcial de capítulos concretos",
      "Royal norm; partial repeal of specific provisions",
    ),
    evidence: "B",
    summary: bi(
      "La Corona revocó disposiciones conflictivas de las Leyes Nuevas en materia de encomiendas y devolvió determinados aspectos al estado anterior. No equivale a borrar todo el programa de 1542.",
      "The Crown revoked controversial provisions of the New Laws concerning encomiendas and restored certain aspects of the previous regime. This did not erase the entire programme of 1542.",
    ),
    interpretation: bi(
      "El caso obliga a registrar la unidad normativa afectada: hablar de revocación de las Leyes Nuevas sin especificar capítulos y materias exagera el alcance de la medida.",
      "The case requires identifying the precise normative unit affected: speaking of a repeal of the New Laws without specifying chapters and subjects exaggerates the measure's reach.",
    ),
    sources: ["malinas_unm", "malinas_unam", "garcia_gallo"],
  },
  {
    year: "1548",
    start: 1548,
    cat: "R2",
    theme: "Compilación y administración",
    title: bi(
      "Ordenanzas y copilación de leyes de Antonio de Mendoza",
      "Antonio de Mendoza's ordinances and compilation of laws",
    ),
    form: bi(
      "Ordenanzas territoriales + compilación impresa",
      "Territorial ordinances + printed compilation",
    ),
    authority: "Virrey Antonio de Mendoza",
    scope: bi("Nueva España", "New Spain"),
    sanction: bi(
      "Pieza híbrida: normativa territorial y repertorio",
      "Hybrid object: territorial legislation and repertory",
    ),
    evidence: "B",
    summary: bi(
      "El impreso mexicano de 1548 combina ordenanzas de gobierno con una labor recopiladora. Su valor jurídico no puede deducirse del volumen como un todo: hay que distinguir la autoridad propia de los mandatos territoriales de la mera reproducción u ordenación de derecho previo.",
      "The Mexican printing of 1548 combines governing ordinances with compilation. Its legal value cannot be inferred from the volume as a whole: the authority of territorial commands must be distinguished from the reproduction or ordering of earlier law.",
    ),
    interpretation: bi(
      "Es un buen ejemplo de por qué la categoría compilación no determina por sí sola fuerza normativa: el mismo objeto puede contener disposiciones con estatutos jurídicos diferentes.",
      "It is a useful example of why the category compilation does not by itself determine legal force: the same object can contain provisions with different legal statuses.",
    ),
    sources: ["mendoza_ministerio", "mendoza_cdiex", "instituciones_boe"],
  },
  {
    year: "1549",
    start: 1549,
    cat: "R1",
    theme: "Trabajo indígena",
    title: bi(
      "Reforma de servicios personales y cargas",
      "Reform of personal services and burdens",
    ),
    form: bi("Reales cédulas", "Royal cédulas"),
    authority: "Carlos V",
    scope: bi(
      "Indias y Nueva España según cada despacho",
      "Indies and New Spain, depending on each instrument",
    ),
    sanction: bi("Normas regias", "Royal norms"),
    evidence: "B",
    summary: bi(
      "En 1549 se reforzó la separación entre tributo de encomienda y servicios personales, y se dictaron prohibiciones contra determinadas formas de carga y trabajo. La aplicación fue desigual y dio paso a otras formas administradas de movilización laboral.",
      "In 1549 the distinction between encomienda tribute and personal services was reinforced, and prohibitions were issued against certain forms of burden and labour. Application was uneven and other administered forms of labour mobilisation continued.",
    ),
    interpretation: bi(
      "No debe confundirse la prohibición de servicios personales vinculados a la encomienda con la desaparición del trabajo obligatorio indígena. El repartimiento laboral y la mita siguieron trayectorias propias.",
      "The prohibition of personal services attached to encomienda should not be confused with the disappearance of compulsory Indigenous labour. Labour repartimiento and mita followed their own trajectories.",
    ),
    sources: ["servicio_1549_somoza", "servicio_zavala", "garcia_gallo"],
  },
  {
    year: "1 abr. 1556",
    start: 1556.25,
    cat: "R1",
    theme: "Compilación y administración",
    title: bi(
      "Orden de recopilar las cédulas de las Audiencias",
      "Order to compile the cédulas of the Audiencias",
    ),
    form: bi(
      "Orden regia documentada por la historiografía",
      "Royal order documented in the historiography",
    ),
    authority: "Corona",
    scope: bi("Audiencias de Indias", "Audiencias of the Indies"),
    sanction: bi(
      "Mandato de recopilación, no recopilación promulgada",
      "Compilation mandate, not an enacted compilation",
    ),
    evidence: "C",
    summary: bi(
      "Se ordenó a las Audiencias reunir las cédulas recibidas y remitirlas al Consejo. El mandato no convierte el resultado eventual en un código: es una medida metanormativa destinada a conocer y controlar la legislación dispersa.",
      "The Audiencias were ordered to gather the cédulas they had received and send them to the Council. The mandate did not turn the eventual result into a code: it was a meta-normative measure intended to identify and control dispersed legislation.",
    ),
    interpretation: bi(
      "Este hito marca el paso del problema de producir normas al problema de localizar, depurar y sistematizar miles de disposiciones acumuladas.",
      "This milestone marks a shift from the problem of producing norms to the problem of locating, filtering, and systematising thousands of accumulated provisions.",
    ),
    sources: ["cruz_barney", "garcia_gallo"],
    archivalNote: bi(
      "En esta revisión no se localizó un enlace público directo al despacho de 1 de abril de 1556; Cruz Barney lo documenta y remite a la tradición recopiladora.",
      "This review did not locate a direct public link to the dispatch of 1 April 1556; Cruz Barney documents it within the history of compilation.",
    ),
  },
  {
    year: "1560–1563",
    start: 1560,
    cat: "C1",
    theme: "Compilación y administración",
    title: bi(
      "Encargo a Luis de Velasco y Cedulario de Vasco de Puga",
      "Commission to Luis de Velasco and Vasco de Puga's Cedulario",
    ),
    form: bi("Compilación oficial impresa", "Official printed compilation"),
    authority: "Encargo regio; elaboración por Vasco de Puga",
    scope: bi("Nueva España", "New Spain"),
    sanction: bi(
      "Oficial en su encargo y uso; no nueva promulgación general de las normas reunidas",
      "Official in commission and use; not a new general enactment of the gathered norms",
    ),
    evidence: "A",
    summary: bi(
      "Felipe II ordenó en 1560 formar una recopilación de las disposiciones conservadas en el archivo virreinal; Puga concluyó e imprimió el repertorio en 1563. Las cédulas y provisiones reproducidas conservan su autoridad por su origen, no porque el libro las vuelva a promulgar.",
      "In 1560 Philip II ordered a compilation of provisions preserved in the viceregal archive; Puga completed and printed the repertory in 1563. The cédulas and provisions reproduced retained authority from their original enactment, not because the book enacted them again.",
    ),
    interpretation: bi(
      "Ésta es una distinción central para todo el recurso: compilación oficial y recopilación promulgada no son equivalentes.",
      "This is a central distinction for the entire resource: an official compilation is not the same thing as an enacted compilation.",
    ),
    sources: ["puga_original", "cruz_barney", "puga_muro"],
  },
  {
    year: "4 oct. 1563",
    start: 1563.76,
    cat: "R1",
    theme: "Audiencias y justicia",
    title: bi(
      "Ordenanzas generales de Audiencias de Monzón",
      "General Ordinances of the Audiencias of Monzón",
    ),
    form: bi(
      "Ordenanzas generales / reales provisiones de aplicación a Audiencias",
      "General ordinances / royal provisions applied to the Audiencias",
    ),
    authority: "Felipe II",
    scope: bi("Audiencias indianas", "Indian Audiencias"),
    sanction: bi(
      "Normativa regia institucional",
      "Institutional royal legislation",
    ),
    evidence: "B",
    summary: bi(
      "Las ordenanzas generales de 1563 sistematizaron jurisdicción, gobierno, hacienda, oficiales, indios y procedimiento de las Audiencias. Una gran parte de su contenido fue reutilizada posteriormente en la Recopilación de 1680.",
      "The general ordinances of 1563 systematised jurisdiction, government, finance, officers, Indigenous affairs, and Audiencia procedure. A substantial portion was later reused in the Recopilación of 1680.",
    ),
    interpretation: bi(
      "Su peso en 1680 no debe hacernos leerlas sólo retrospectivamente: fueron un instrumento normativo de enorme vigencia propia en el siglo XVI.",
      "Their later weight in 1680 should not lead us to read them only retrospectively: they were a major normative instrument in their own sixteenth-century context.",
    ),
    sources: ["audiencias_unam", "instituciones_boe", "garcia_gallo"],
  },
  {
    year: "14 mar. 1567",
    start: 1567.2,
    cat: "RC",
    theme: "Compilación y administración",
    title: bi(
      "Nueva Recopilación de las leyes de Castilla",
      "Nueva Recopilación of the laws of Castile",
    ),
    form: bi(
      "Recopilación sancionada por pragmática",
      "Compilation sanctioned by pragmática",
    ),
    authority: "Felipe II",
    scope: bi(
      "Corona de Castilla; derecho supletorio en Indias",
      "Crown of Castile; subsidiary law in the Indies",
    ),
    sanction: bi(
      "Recopilación promulgada como cuerpo normativo",
      "Compilation enacted as a normative body",
    ),
    evidence: "A",
    summary: bi(
      "La Nueva Recopilación ofrece el contraste técnico fundamental: aquí el trabajo recopilador recibe sanción y fuerza como corpus. En Indias, el derecho castellano operó además con carácter supletorio.",
      "The Nueva Recopilación provides the crucial technical contrast: here the work of compilation received sanction and force as a corpus. Castilian law also operated subsidiarily in the Indies.",
    ),
    interpretation: bi(
      "Sirve como control comparativo para no atribuir a Puga, Copulata o Encinas una promulgación que no tuvieron como conjunto.",
      "It serves as a comparative control against attributing to Puga, the Copulata, or Encinas a general enactment they did not possess.",
    ),
    sources: ["nueva_recop_boe", "cruz_barney", "dougnac_manual"],
  },
  {
    year: "1568",
    start: 1568,
    cat: "P1",
    theme: "Reforma ovandina",
    title: bi("Visita de Ovando y Junta Magna", "Ovando's visita and the Junta Magna"),
    form: bi(
      "Proceso de visita y deliberación política",
      "Visita process and political deliberation",
    ),
    authority: "Felipe II / Consejo de Indias",
    scope: bi("Gobierno general de las Indias", "General government of the Indies"),
    sanction: bi(
      "Proceso oficial preparatorio; no una ley única",
      "Official preparatory process; not a single law",
    ),
    evidence: "A",
    summary: bi(
      "La visita de Juan de Ovando y la Junta Magna de 1568 impulsaron una revisión general de gobierno, Iglesia, fiscalidad, información y administración. Son un contexto de producción normativa, no un cuerpo legislativo promulgado.",
      "Juan de Ovando's visita and the Junta Magna of 1568 drove a broad review of government, Church affairs, fiscal policy, information, and administration. They form a context for normative production rather than an enacted legislative body.",
    ),
    interpretation: bi(
      "El programa ovandino debe seguirse en dos niveles: proyectos y balances internos, por un lado, y piezas concretas que sí fueron sancionadas entre 1571 y 1574, por otro.",
      "The Ovando programme must be followed at two levels: projects and internal assessments on one hand, and specific instruments actually enacted between 1571 and 1574 on the other.",
    ),
    sources: ["ovando_pares", "junta_uned", "perez_copulata", "perez_iglesia"],
  },
  {
    year: "ca. 1570",
    start: 1570,
    cat: "P1",
    theme: "Compilación y administración",
    title: bi(
      "Copulata de las leyes y provisiones de Indias",
      "Copulata of the laws and provisions of the Indies",
    ),
    form: bi(
      "Balance / repertorio preparatorio manuscrito",
      "Manuscript assessment / preparatory repertory",
    ),
    authority: "Consejo de Indias",
    scope: bi(
      "Normativa indiana de 1508–1570",
      "Indian legislation from 1508 to 1570",
    ),
    sanction: bi(
      "Instrumento oficial de trabajo; no promulgado como código",
      "Official working instrument; not enacted as a code",
    ),
    evidence: "C",
    summary: bi(
      "La Copulata resume y organiza alrededor de 1.100 registros y funciona, según la revisión de Pérez Puente, como balance o estado de la cuestión indiana para apoyar la reforma de Felipe II.",
      "The Copulata summarises and organises roughly 1,100 records and, in Pérez Puente's reassessment, functions as a review of the state of Indian law in support of Philip II's reform programme.",
    ),
    interpretation: bi(
      "La autoridad de una cédula resumida en la Copulata proviene de la cédula, no del manuscrito recopilador. La oficialidad de la génesis no equivale a fuerza normativa autónoma del conjunto.",
      "The authority of a cédula summarised in the Copulata comes from the cédula itself, not from the compiling manuscript. Official origin does not amount to autonomous normative force for the compilation as a whole.",
    ),
    sources: ["perez_copulata", "encinas_estudio"],
    archivalNote: bi(
      "No se incorpora aquí un enlace a imágenes del manuscrito de la Copulata: en esta revisión no se localizó una reproducción pública estable equivalente a PARES o Real Biblioteca.",
      "No link to images of the Copulata manuscript is supplied here: this review did not locate a stable public reproduction comparable to PARES or the Real Biblioteca.",
    ),
  },
  {
    year: "24 sep. 1571",
    start: 1571.73,
    cat: "R1",
    theme: "Reforma ovandina",
    title: bi("Ordenanzas del Consejo de Indias", "Ordinances of the Council of the Indies"),
    form: bi("Ordenanzas reales", "Royal ordinances"),
    authority: "Felipe II",
    scope: bi("Consejo Real y Supremo de Indias", "Royal and Supreme Council of the Indies"),
    sanction: bi(
      "Parte del programa ovandino que sí fue promulgada",
      "Part of the Ovando programme that was actually enacted",
    ),
    evidence: "A",
    summary: bi(
      "Las 122 ordenanzas de 1571 reorganizaron el Consejo y consolidaron su autonomía institucional. Son un caso clave de un fragmento del proyecto ovandino que sí adquirió fuerza normativa propia.",
      "The 122 ordinances of 1571 reorganised the Council and consolidated its institutional autonomy. They are a key case of one part of the Ovando project acquiring its own normative force.",
    ),
    interpretation: bi(
      "No debe extrapolarse esta sanción al llamado Código Ovandino entero: el hecho de que un título fuese promulgado no convirtió en ley el proyecto completo.",
      "This enactment should not be extrapolated to the entire so-called Ovando Code: the fact that one title was enacted did not turn the whole project into law.",
    ),
    sources: ["ordenanzas_1571_open", "ordenanzas_1571_csic", "encinas_estudio", "garcia_gallo"],
  },
  {
    year: "3 jul. 1573",
    start: 1573.5,
    cat: "R1",
    theme: "Información y territorio",
    title: bi(
      "Ordenanzas para la descripción de las Indias",
      "Ordinances for the description of the Indies",
    ),
    form: bi("Real Provisión / ordenanzas", "Royal Provision / ordinances"),
    authority: "Felipe II",
    scope: bi("Indias", "Indies"),
    sanction: bi("Norma regia promulgada", "Enacted royal norm"),
    evidence: "A",
    summary: bi(
      "En 135 capítulos, ordenaron averiguar, describir y relacionar territorios, población, recursos e instituciones para mejorar el conocimiento del espacio gobernado.",
      "Across 135 chapters, they ordered the investigation and description of territories, population, resources, and institutions in order to improve knowledge of governed space.",
    ),
    interpretation: bi(
      "Estas ordenanzas muestran que la producción de información fue parte del gobierno normativo: descripción y administración no son ámbitos separados en el programa ovandino.",
      "These ordinances show that producing information was itself part of normative government: description and administration were not separate spheres within the Ovando programme.",
    ),
    sources: ["descripciones_cvc", "encinas_estudio", "perez_copulata"],
  },
  {
    year: "13 jul. 1573",
    start: 1573.53,
    cat: "R1",
    theme: "Conquista y población",
    title: bi(
      "Ordenanzas de descubrimiento, nueva población y pacificación",
      "Ordinances of discovery, new settlement, and pacification",
    ),
    form: bi("Ordenanzas regias", "Royal ordinances"),
    authority: "Felipe II",
    scope: bi(
      "Nuevos descubrimientos y fundaciones",
      "New discoveries and foundations",
    ),
    sanction: bi("Norma regia promulgada", "Enacted royal norm"),
    evidence: "A",
    summary: bi(
      "Regulan autorizaciones, exploración, fundación de poblaciones, trazado urbano, relaciones con los indígenas y el lenguaje político de la pacificación. Son el gran punto de llegada de la regulación iniciada en 1526.",
      "They regulate authorisation, exploration, the foundation of settlements, urban layout, relations with Indigenous peoples, and the political language of pacification. They are the major culmination of a regulatory trajectory begun in 1526.",
    ),
    interpretation: bi(
      "La historiografía ha destacado su dimensión urbanística, pero su alcance es más amplio: forman parte de una política de control sobre la expansión, la información y la violencia de conquista.",
      "Historiography has emphasised their urban dimension, but their scope is broader: they formed part of a policy to control expansion, information, and the violence of conquest.",
    ),
    sources: ["poblacion_bne", "encinas_estudio", "ovando_scielo"],
  },
  {
    year: "1 jun. 1574",
    start: 1574.42,
    cat: "R1",
    theme: "Iglesia y Patronato",
    title: bi("Ordenanza del Patronazgo", "Ordinance of Royal Patronage"),
    form: bi(
      "Ordenanza regia / título del programa ovandino promulgado separadamente",
      "Royal ordinance / title of the Ovando programme enacted separately",
    ),
    authority: "Felipe II",
    scope: bi("Iglesia indiana", "Church in the Indies"),
    sanction: bi("Norma regia promulgada", "Enacted royal norm"),
    evidence: "B",
    summary: bi(
      "Regula la intervención regia en beneficios, presentaciones, doctrinas y organización eclesiástica. Es otra porción del programa ovandino que adquirió fuerza normativa independiente.",
      "It regulates royal intervention in benefices, presentations, doctrinas, and ecclesiastical organisation. It is another portion of the Ovando programme that acquired independent normative force.",
    ),
    interpretation: bi(
      "Su estudio reciente permite situarla no sólo como prerrogativa eclesiástica, sino como parte de la construcción administrativa de una Iglesia fuertemente integrada en el gobierno regio.",
      "Recent scholarship places it not merely as an ecclesiastical prerogative, but as part of the administrative construction of a Church deeply integrated into royal government.",
    ),
    sources: ["encinas_boe", "perez_iglesia", "encinas_estudio"],
  },
  {
    year: "1574",
    start: 1574.6,
    cat: "P2",
    theme: "Compilación y administración",
    title: bi(
      "Alonso de Zorita, Leyes y ordenanças reales de las Indias del mar océano",
      "Alonso de Zorita, Leyes y ordenanças reales de las Indias del mar océano",
    ),
    form: bi(
      "Recopilación manuscrita / proyecto de jurista",
      "Manuscript compilation / jurist's project",
    ),
    authority: "Alonso de Zorita",
    scope: bi("Derecho indiano", "Indian law"),
    sanction: bi("No promulgado como corpus", "Not enacted as a corpus"),
    evidence: "A",
    summary: bi(
      "El manuscrito de 1574 reúne y organiza derecho indiano y formula expresamente la relación subsidiaria con las leyes de Castilla. Su importancia documental no implica que el volumen se convirtiera por sí mismo en legislación.",
      "The 1574 manuscript gathers and organises Indian law and explicitly formulates its subsidiary relationship with Castilian law. Its documentary importance does not mean that the volume itself became legislation.",
    ),
    interpretation: bi(
      "Zorita es especialmente útil para distinguir autoridad de los textos copiados y autoridad del acto recopilador: las normas pueden ser regias aunque la compilación no sea sancionada como código.",
      "Zorita is especially useful for separating the authority of copied texts from the authority of the act of compilation: the norms may be royal even when the compilation was not sanctioned as a code.",
    ),
    sources: ["zorita_rb", "zorita_contexto", "encinas_estudio"],
  },
  {
    year: "1581–1596",
    start: 1581,
    cat: "C1",
    theme: "Compilación y administración",
    title: bi(
      "Encargo y Cedulario de Diego de Encinas",
      "Commission and Cedulario of Diego de Encinas",
    ),
    form: bi(
      "Compilación oficial de uso administrativo",
      "Official compilation for administrative use",
    ),
    authority: "Consejo de Indias; trabajo de Diego de Encinas",
    scope: bi(
      "Consejo de Indias; legislación hasta 1596",
      "Council of the Indies; legislation through 1596",
    ),
    sanction: bi(
      "Encargado, aceptado e impreso para uso del Consejo; no promulgado como corpus general",
      "Commissioned, accepted, and printed for Council use; not enacted as a general corpus",
    ),
    evidence: "A",
    summary: bi(
      "El Consejo encargó la compilación a Encinas; tras años de trabajo se imprimió en 1596 en cuatro libros y con circulación muy limitada. Reunió disposiciones consideradas útiles para el Consejo.",
      "The Council commissioned Encinas to compile the material; after years of work it was printed in 1596 in four books and with very limited circulation. It gathered provisions considered useful for Council business.",
    ),
    interpretation: bi(
      "García-Gallo permite precisar la fórmula: el alto grado de oficialidad administrativa no equivale a una nueva promulgación. La fuerza jurídica reside en las provisiones, cédulas y ordenanzas reproducidas, no en el volumen como código sancionado.",
      "García-Gallo makes the distinction precise: a high degree of administrative officiality does not amount to a new enactment. Legal force resides in the provisions, cédulas, and ordinances reproduced, not in the volume as a sanctioned code.",
    ),
    sources: ["encinas_boe", "encinas_estudio", "cruz_barney"],
  },
  {
    year: "1584",
    start: 1584,
    cat: "R1",
    theme: "Minería",
    title: bi("Ordenanzas del Nuevo Cuaderno", "Ordinances of the Nuevo Cuaderno"),
    form: bi("Ordenanzas regias de minas", "Royal mining ordinances"),
    authority: "Felipe II",
    scope: bi(
      "Monarquía con aplicación indiana",
      "Monarchy-wide legislation with application in the Indies",
    ),
    sanction: bi("Normativa regia", "Royal legislation"),
    evidence: "A",
    summary: bi(
      "Regulan descubrimiento, registro, labor y beneficio de minas, derechos de descubridores y beneficiadores y participación fiscal de la Corona. Tuvieron una prolongada proyección en el derecho minero americano.",
      "They regulate discovery, registration, working and processing of mines, the rights of discoverers and operators, and the Crown's fiscal share. They had a long afterlife in American mining law.",
    ),
    interpretation: bi(
      "Para esta versión se conserva sólo el año 1584, porque las fuentes secundarias consultadas presentan discrepancias sobre el día exacto de expedición. El impreso de 1585 permite consultar el texto.",
      "This version retains only the year 1584 because the secondary sources consulted disagree on the exact day of issue. The 1585 printing provides access to the text.",
    ),
    sources: ["nuevo_cuaderno_cervantes", "nuevo_cuaderno_hist", "dougnac_manual"],
  },
  {
    year: "1 nov. 1591",
    start: 1591.83,
    cat: "R1",
    theme: "Tierra y fiscalidad",
    title: bi(
      "Reales cédulas de composición de tierras y venta de baldíos",
      "Royal cédulas on land composition and sale of vacant lands",
    ),
    form: bi("Conjunto de reales cédulas", "Set of royal cédulas"),
    authority: "Felipe II",
    scope: bi("Indias", "Indies"),
    sanction: bi("Normas regias", "Royal norms"),
    evidence: "B",
    summary: bi(
      "Las cédulas de El Pardo reforzaron el examen de títulos, la recuperación o regularización de ocupaciones, la venta de baldíos y la composición mediante pago. Forman un punto de inflexión fiscal y jurídico en el régimen de tierras.",
      "The El Pardo cédulas strengthened scrutiny of titles, recovery or regularisation of occupations, sale of vacant lands, and composition through payment. They mark a fiscal and legal turning point in land tenure.",
    ),
    interpretation: bi(
      "La ejecución fue territorialmente desigual. Conviene estudiar la recepción local y no deducir de la promulgación una aplicación inmediata y uniforme en todos los virreinatos.",
      "Implementation varied territorially. Local reception must be studied rather than assuming immediate and uniform application across all viceroyalties.",
    ),
    sources: ["tierras_solano", "tierras_scielo", "tierras_jurado"],
  },
  {
    year: "1595",
    start: 1595,
    cat: "R1",
    theme: "Tierra y fiscalidad",
    title: bi(
      "Corrección sobre tierras necesarias para los pueblos indígenas",
      "Correction concerning lands necessary for Indigenous communities",
    ),
    form: bi("Orden regia posterior", "Subsequent royal order"),
    authority: "Corona",
    scope: bi(
      "Tierras indígenas en el contexto de las composiciones",
      "Indigenous lands in the context of compositions",
    ),
    sanction: bi(
      "Norma regia documentada por la historiografía y cedularios",
      "Royal norm documented through historiography and cedularies",
    ),
    evidence: "C",
    summary: bi(
      "La insuficiencia de las cédulas de 1591 respecto de la reserva de tierras indígenas motivó una nueva orden que insistió en restituir o asegurar las tierras útiles para sus sementeras.",
      "The insufficiency of the 1591 cédulas regarding reserved Indigenous lands led to a further order insisting on the restitution or securing of lands needed for cultivation.",
    ),
    interpretation: bi(
      "La secuencia 1591–1595 muestra nuevamente un patrón de promulgación, problemas de aplicación y corrección posterior.",
      "The 1591–1595 sequence again shows a pattern of enactment, implementation problems, and subsequent correction.",
    ),
    sources: ["tierras_solano", "tierras_scielo"],
    archivalNote: bi(
      "No se enlaza aquí un registro archivístico directo de la orden de 1595; la medida está reconstruida en el Cedulario de tierras y en la historiografía citada.",
      "No direct archival record of the 1595 order is linked here; the measure is reconstructed through the Cedulario de tierras and the cited historiography.",
    ),
  },
  {
    year: "1680–1681",
    start: 1680,
    cat: "RC",
    theme: "Compilación y administración",
    title: bi(
      "Recopilación de leyes de los reinos de las Indias",
      "Recopilación de leyes de los reinos de las Indias",
    ),
    form: bi(
      "Recopilación general promulgada",
      "General enacted compilation",
    ),
    authority: "Carlos II",
    scope: bi("Indias", "Indies"),
    sanction: bi(
      "Promulgada en 1680; primera edición oficial impresa en 1681",
      "Enacted in 1680; first official printed edition in 1681",
    ),
    evidence: "A",
    summary: bi(
      "Fuera del siglo XVI, pero indispensable como contraste: aquí el corpus recopilado recibe sanción y mandato de observancia general. Es cualitativamente distinto de Puga, Copulata, Zorita y Encinas.",
      "Outside the sixteenth century but indispensable as a contrast: here the compiled corpus received sanction and a general command of observance. It is qualitatively different from Puga, the Copulata, Zorita, and Encinas.",
    ),
    interpretation: bi(
      "La Recopilación es una fuente retrospectiva imprescindible, pero no debe utilizarse sin control para reconstruir automáticamente qué estaba vigente y con qué formulación en 1530, 1570 o 1590.",
      "The Recopilación is an indispensable retrospective source, but it should not be used uncritically to reconstruct automatically what was in force, and in what wording, in 1530, 1570, or 1590.",
    ),
    sources: ["recop1680_loc", "recop1680_boe", "recop1680_hist", "garcia_gallo"],
  },
];
