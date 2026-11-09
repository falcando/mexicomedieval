"use client";

import PageContainer from "@/components/layout/PageContainer";
import { ItalicEthnonyms } from "@/components/ui/ItalicEthnonyms";
import { useTranslations } from "@/components/i18n/LocaleProvider";
import EVENTS from "@/public/recursos/invitations-to-empire/events.json";
import Link from "next/link";
import { useMemo, useState } from "react";

type Locale = "en" | "es";
type Bilingual = { en: string; es: string };
type Status = "attested" | "contested" | "allegation";
type ResearchEvent = {
  id: string; year: number; title: string; roman_actor: string; foreign_party: string;
  place: string; mechanism: string; status: string; primary_source: string;
  date_label_en?: string; date_label_es?: string;
  source_url: string; source_critical_note: string; editorial_stage: string;
};

const CONTENT: Record<Locale, {
  kicker: string; title: string; subtitleBefore: string; subtitleAfter: string;
  introTitle: string; intro: string; initialQualification: string;
  methodTitle: string; method: string; methodSecond: string; historiographicalFrame: string; bibliography: string;
  historiographyIntro: string; historiographyTransformation: string; historiographySettlement: string; historiographyAgency: string;
  historiographyNote: string; relevantStudies: string;
  search: string; searchPlaceholder: string; status: string; type: string;
  allStatus: string; allMechanisms: string; shown: string; of: string;
  source: string; actor: string; party: string; place: string; note: string;
  version: string; author: string; affiliation: string; evidence: string;
  attested: string; contested: string; allegation: string; selected: string;
  dateBce: string; dateCe: string; caution: string; none: string;
  returnResources: string; dataLink: string; documentTitle: string;
}> = {
  en: {
    kicker: "Documentary and historiographical research resource",
    title: "Invaders or Invitees?",
    subtitleBefore: "Roman Agency and the Movement of Foreign Peoples, ‘Barbarian’ Armies and ",
    subtitleAfter: " into and within the Roman Empire",
    introTitle: "When the Empire opened its frontiers",
    intro: "The movement of foreign peoples and armies into Roman territory is frequently narrated in terms of invasion. Yet Roman emperors, magistrates and commanders also authorised entry, recruited foreign troops, negotiated settlements and commissioned interventions in imperial conflicts. This chronology investigates those decisions without assuming that all foreign arrivals were either peaceful or invited.",
    initialQualification: "The 20 selected records constitute a source-critical preview rather than a comprehensive census. An ancient allegation of invitation is not equivalent to an established act of Roman government.",
    methodTitle: "Evidence, categories and historiography",
    method: "Each entry identifies the Roman actor, the foreign party, the location, the mechanism of entry or intervention and an ancient testimony. The labels distinguish an explicitly attested arrangement, a contested interpretation and an unproven allegation. They do not measure the reliability of every detail in the narrative.",
    methodSecond: "Military service, a foedus, land allocation and the continuing presence of foreign armies were not interchangeable arrangements. Nor should a usurper's request, a local urban agreement and an emperor's authorisation be treated as equivalent exercises of authority. The chronology brings these situations into comparison while preserving their differences.",
    historiographicalFrame: "Peter Brown’s account of Late Antiquity places institutional change, social relations and the reconfiguration of Roman society within a history of transformation, not simply political collapse. His work provides the period’s interpretative context, while the specific claims about invitations, armed groups and settlement must still be examined against the military and documentary evidence.",
    bibliography: "Cited and comparative historiography",
    historiographyIntro: "The works below serve distinct interpretative purposes; they do not all document particular invitations. These links identify pertinent scholarship, not a claim to have read every page of each volume.",
    historiographyTransformation: "Brown frames Late Antiquity as a period of social, religious and institutional transformation, with particular attention to authority and wealth. His work contextualises the period but does not itself corroborate a particular Roman summons to a foreign army.",
    historiographySettlement: "Goffart puts forward a fiscal interpretation of accommodation; Halsall considers Roman political agency and migration mechanisms; Heather reconstructs Gothic group formation and interaction with Roman authorities. Their approaches offer competing questions for the settlement and admission cases.",
    historiographyAgency: "Mathisen asks whether some Gothic interventions should be read through Roman auxiliary service and civil wars. Rendina examines the political function of invitation allegations. Wijnendaele reconstructs Bonifatius’ political and military circumstances, which does not by itself establish that he summoned the Vandals.",
    historiographyNote: "Bibliographical data and relevance are verified, and works are linked from the argument and pertinent records. Full critical reading of some subscription-only books remains pending. No precise passage or page is attributed without consultation.",
    relevantStudies: "Related scholarship for further verification",
    search: "Search the chronology", searchPlaceholder: "Aetius, Vandals, Thrace…",
    status: "Evidential status", type: "Arrangement", allStatus: "All evidence",
    allMechanisms: "All arrangements", shown: "Showing", of: "of",
    source: "Ancient testimony", actor: "Roman authority", party: "Foreign party",
    place: "Location", note: "Source-critical note", version: "Working version",
    author: "Research editor", affiliation: "Affiliation", evidence: "Evidential classification",
    attested: "Explicit testimony", contested: "Disputed interpretation", allegation: "Uncorroborated allegation",
    selected: "Selected records", dateBce: "BCE", dateCe: "CE",
    caution: "Editorial status: this is a versioned selection under review, not an exhaustive inventory. Each source reference identifies an ancient testimony; passage-level comparison against critical editions and historiographical disagreements is still being completed. Evidence labels record the kind of testimony, not a statistical measure of historical certainty.",
    none: "No matching cases.", returnResources: "Papers & resources",
    dataLink: "Download the structured source data (JSON)", documentTitle: "Research chronology"
  },
  es: {
    kicker: "Recurso documental e historiográfico",
    title: "¿Invasores o invitados?",
    subtitleBefore: "La agencia romana y el desplazamiento de pueblos extranjeros, ejércitos “bárbaros” y ",
    subtitleAfter: " dentro del Imperio Romano",
    introTitle: "Cuando Roma abrió sus fronteras",
    intro: "La llegada de pueblos y ejércitos extranjeros a los territorios romanos suele explicarse mediante el relato de las invasiones. Sin embargo, los emperadores, magistrados y mandos militares también autorizaron entradas, reclutaron tropas extranjeras, negociaron asentamientos y solicitaron intervenciones en conflictos del propio Imperio. Esta cronología examina esas decisiones sin presuponer que todas las llegadas fueron pacíficas ni que todas respondieron a una invitación.",
    initialQualification: "Los veinte casos seleccionados constituyen una primera muestra de trabajo, no un inventario exhaustivo. La atribución de una invitación en una fuente antigua no demuestra, por sí sola, que haya ocurrido.",
    methodTitle: "Evidencia, categorías e historiografía",
    method: "Cada registro identifica a la autoridad romana, la contraparte extranjera, el espacio implicado, el mecanismo de entrada o intervención y los testimonios antiguos. Las categorías permiten distinguir entre acuerdos expresamente documentados, interpretaciones discutidas e invitaciones referidas por las fuentes cuya historicidad no está corroborada. No califican por sí mismas la fiabilidad de todos los detalles de cada relato.",
    methodSecond: "El servicio militar, un foedus, la asignación de tierras y la permanencia de contingentes armados no fueron arreglos equivalentes. Tampoco puede equipararse la petición de un usurpador, la negociación emprendida por una comunidad urbana o la autorización de un emperador. La cronología permite comparar estas situaciones sin borrar sus diferencias.",
    historiographicalFrame: "La obra de Peter Brown sitúa los cambios institucionales, las relaciones sociales y la reorganización del mundo romano en una historia de transformaciones que no puede reducirse al colapso político. Su aportación proporciona un marco para comprender la Antigüedad tardía, pero las invitaciones, los contingentes militares y los asentamientos deben demostrarse mediante sus propios testimonios y la historiografía especializada.",
    bibliography: "Bibliografía citada y de contraste",
    historiographyIntro: "Las obras cumplen funciones interpretativas diferentes y no constituyen, todas ellas, pruebas directas de invitaciones concretas. Los enlaces permiten identificar los estudios pertinentes, sin presuponer que se han cotejado íntegramente.",
    historiographyTransformation: "Brown sitúa la Antigüedad tardía en el contexto de transformaciones sociales, religiosas e institucionales, atendiendo a la autoridad y la riqueza. Estas obras permiten comprender el periodo, pero no corroboran por sí mismas la solicitud romana de un contingente extranjero.",
    historiographySettlement: "Goffart plantea una interpretación fiscal de la acomodación; Halsall examina la agencia política romana y los mecanismos migratorios; Heather reconstruye la formación de los grupos godos y sus relaciones con las autoridades imperiales. Sus enfoques plantean problemas distintos que deben contrastarse en los casos de asentamiento y admisión.",
    historiographyAgency: "Mathisen pregunta si determinadas intervenciones godas pueden interpretarse a partir del servicio auxiliar y las guerras civiles romanas. Rendina estudia la función política de los relatos sobre invitaciones. Wijnendaele reconstruye la situación política y militar de Bonifacio, sin que ello demuestre que convocara a los vándalos.",
    historiographyNote: "Se han verificado los datos bibliográficos y la pertinencia de los estudios. Cada obra está vinculada al argumento y a los casos correspondientes. Sigue pendiente el cotejo íntegro de ciertas monografías de acceso restringido; no se atribuyen páginas o pasajes que no hayamos consultado.",
    relevantStudies: "Estudios relacionados para cotejo historiográfico",
    search: "Buscar en la cronología", searchPlaceholder: "Aecio, vándalos, Tracia…",
    status: "Estado de la evidencia", type: "Tipo de arreglo", allStatus: "Todas las categorías",
    allMechanisms: "Todos los arreglos", shown: "Se muestran", of: "de",
    source: "Testimonio antiguo", actor: "Autoridad romana", party: "Contraparte extranjera",
    place: "Espacio", note: "Observación crítica sobre las fuentes", version: "Versión de trabajo",
    author: "Responsable de la investigación", affiliation: "Adscripción", evidence: "Clasificación de la evidencia",
    attested: "Testimonio explícito", contested: "Interpretación discutida", allegation: "Invitación no corroborada",
    selected: "Casos seleccionados", dateBce: "a. C.", dateCe: "d. C.",
    caution: "Estado editorial: selección documentada y versionada, no inventario exhaustivo. Las referencias identifican testimonios antiguos, mientras continúa el cotejo de pasajes con ediciones críticas y el contraste historiográfico. Las categorías describen la naturaleza de los testimonios, no constituyen una medida estadística de certeza histórica.",
    none: "No hay casos que correspondan a los filtros.", returnResources: "Papers y recursos",
    dataLink: "Descargar datos documentales estructurados (JSON)", documentTitle: "Cronología de investigación"
  }
};

const MECHANISMS: Record<string, Bilingual> = {
  "military assistance": { en: "Military assistance", es: "Auxilio militar" },
  "settlement": { en: "Settlement", es: "Asentamiento" },
  "authorised admission": { en: "Authorised admission", es: "Entrada autorizada" },
  "court reception": { en: "Court reception", es: "Recepción en la corte" },
  "treaty": { en: "Treaty and accommodation", es: "Tratado y acomodación" },
  "local intervention": { en: "Local military intervention", es: "Intervención militar local" },
  "assistance and settlement": { en: "Assistance and settlement", es: "Auxilio y asentamiento" },
  "alleged invitation": { en: "Alleged invitation", es: "Invitación atribuida" },
  "commissioned intervention": { en: "Commissioned intervention", es: "Intervención solicitada" }
};

const ES: Record<string, { title: string; actor: string; party: string; place: string; note: string }> = {
  R001: { title: "César solicita caballería germana para sus campañas en la Galia", actor: "Julio César", party: "Caballería e infantería germana", place: "Galia", note: "César refiere expresamente la solicitud de tropas al otro lado del Rin. Es un caso de reclutamiento, no de asentamiento territorial." },
  R002: { title: "Agripa y el traslado de los ubios", actor: "Agripa", party: "Ubios", place: "Bajo Rin", note: "Estrabón (Geografía 4.3.4) refiere el traslado de los ubios, con su consentimiento. El pasaje no precisa el año 20 a. C. ni acredita por sí solo un acuerdo de servicio militar." },
  R003: { title: "Plaucio Silvano y las poblaciones transdanubianas", actor: "Plaucio Silvano Eliano", party: "Poblaciones transdanubianas", place: "Mesia", note: "La inscripción CIL XIV 3608 = ILS 986 emplea transduxit y alude a obligaciones tributarias. Se discute si describe el traslado físico a Mesia o alguna forma de subordinación de poblaciones transdanubianas." },
  R004: { title: "Caballería yacigia enviada a Britania", actor: "Marco Aurelio", party: "Yacigios y sármatas", place: "Britania", note: "Dión Casio atribuye al acuerdo con los yacigios la entrega de 8,000 jinetes, 5,500 destinados a Britania. La obligación impuesta no prueba una invitación voluntaria ni el asentamiento de todo un pueblo." },
  R005: { title: "Probo asienta a los bastarnos en Tracia", actor: "Probo", party: "Bastarnos", place: "Tracia", note: "Zósimo (Historia nueva 1.71.1) relata el asentamiento de los bastarnos en Tracia, pero no fija su año exacto ni conserva las condiciones jurídicas de la concesión." },
  R006: { title: "Probo concede tierras a los francos", actor: "Probo", party: "Francos", place: "Provincia romana no identificada", note: "Zósimo (Historia nueva 1.71.2) refiere la admisión de francos y su posterior salida violenta. No identifica de manera inequívoca la región ni establece la fecha exacta del asentamiento." },
  R007: { title: "El usurpador Procopio recibe apoyo godo", actor: "Procopio (usurpador)", party: "Contingentes godos", place: "Tracia", note: "Amiano menciona unos 3,000 godos (26.10.3) y una carta atribuida a Procopio (27.5.1); Zósimo refiere 10,000 (4.7.2). La divergencia numérica debe conservarse." },
  R008: { title: "Valente autoriza la entrada de los tervingi", actor: "Valente", party: "Tervingi", place: "Tracia", note: "Los tervingi solicitaron y obtuvieron permiso para cruzar. No debe extenderse la misma autorización a los greutungos." },
  R009: { title: "Teodosio recibe a Atanarico", actor: "Teodosio I", party: "Atanarico y su séquito", place: "Constantinopla", note: "Zósimo documenta la recepción de Atanarico en Constantinopla, pero no una entrada general de un ejército ni un asentamiento colectivo permanente." },
  R010: { title: "La paz entre romanos y godos de 382", actor: "Teodosio I", party: "Comunidades militares godas", place: "Tracia", note: "Temistio, oración 16, celebra la paz. No conservamos el texto de un foedus con cláusulas explícitas sobre tierras, autonomía y servicio; esas condiciones siguen siendo reconstrucciones historiográficas." },
  R011: { title: "Un contingente alano interviene en la defensa de Bazas", actor: "Paulino y las élites de Bazas", party: "Rey alano y sus fuerzas", place: "Bazas", note: "Paulino de Pella relata su negociación con un rey alano durante el asedio. La intervención no constituyó necesariamente un cruce fronterizo y la identificación precisa de ese monarca sigue discutida." },
  R012: { title: "Los godos combaten por Roma y se establecen en Aquitania", actor: "Constancio y Honorio", party: "Valia y sus visigodos", place: "Hispania y Aquitania", note: "Orosio 7.43 refiere las campañas y arreglos bajo Valia. El servicio militar y el posterior asentamiento en Aquitania son fases diferentes; el régimen de distribución de tierras y recursos continúa siendo discutido." },
  R013: { title: "La invitación atribuida a Bonifacio a los vándalos", actor: "Bonifacio (según una tradición posterior)", party: "Genserico y los vándalos", place: "África romana", note: "La travesía vándala de 429 está documentada. Procopio atribuye a Bonifacio una solicitud de auxilio, pero la atribución personal no cuenta con corroboración directa en testimonios próximos e independientes." },
  R014: { title: "Asignación de tierras a los alanos en Valence", actor: "Autoridad romana no identificada", party: "Alanos de Sambida", place: "Región de Valence", note: "La crónica testimonia una asignación territorial, sin identificar al oficial romano que la dispuso." },
  R015: { title: "Aecio asigna tierras a los alanos", actor: "Aecio", party: "Alanos", place: "Galia ulterior", note: "La Crónica gala de 452 (127) atribuye a Aecio una concesión de tierras a los alanos; también refiere el despojo violento de propietarios resistentes. Autorización romana no equivale a consentimiento de las poblaciones afectadas." },
  R016: { title: "Los burgundios reciben tierras en Sapaudia", actor: "Autoridad romana no identificada", party: "Burgundios supervivientes", place: "Sapaudia", note: "La Crónica gala de 452 (128) registra la asignación de Sapaudia para compartirla con los habitantes, sin nombrar al otorgante ni documentar un tratado con cláusulas precisas." },
  R017: { title: "La invitación atribuida a Eudoxia a Genserico", actor: "Licinia Eudoxia (según una tradición)", party: "Genserico y los vándalos", place: "Roma", note: "Hidacio introduce como rumor el supuesto llamamiento de Eudoxia (Chronicon 167 en la numeración de Mommsen; 160 en Burgess). La llegada vándala a Roma es un acontecimiento distinto y documentado." },
  R018: { title: "Zenón encomienda a Teodorico una expedición contra Odoacro", actor: "Zenón", party: "Teodorico y los ostrogodos", place: "Italia", note: "Procopio atribuye a Zenón la iniciativa contra Odoacro. La tradición, escrita bajo Justiniano, requiere crítica respecto de su representación de la legitimidad del poder en Italia." },
  R019: { title: "Justiniano incorpora lombardos y hérulos al ejército de Narsés", actor: "Justiniano I y Narsés", party: "Lombardos y hérulos", place: "Italia", note: "Procopio distingue el apoyo lombardo negociado con Audoin de la participación de fuerzas hérulas con sus propios jefes. No hay base para atribuir ambos contingentes a un único acuerdo." },
  R020: { title: "Mauricio financia una intervención franca en Italia", actor: "Mauricio", party: "Childeberto II y los ejércitos francos", place: "Italia", note: "Gregorio de Tours (Historias 6.42) menciona una transferencia de 50,000 sólidos y la intervención de Childeberto. Es necesario distinguir el pago, las negociaciones y las campañas al fechar el episodio." }
};

type HistoriographyId = "brown-1971" | "brown-1978" | "brown-2012" | "goffart-1980" | "halsall-2007" | "heather-1991" | "mathisen-2020" | "rendina-2020" | "wijnendaele-2015";
type HistoriographyEntry = {id:HistoriographyId;author:string;year:number;title:string;publication:string;kind:"book"|"chapter"|"article";href:string};
const HISTORIOGRAPHY: HistoriographyEntry[] = [
{id:"brown-1971",author:"Brown, Peter",year:1971,title:"The World of Late Antiquity: From Marcus Aurelius to Muhammad",publication:"London: Thames and Hudson, 1971",kind:"book",href:"https://obnb.uk/p9038952-the-world-of-late-antiquity-from-marcus-aurelius-to-muhammad"},
{id:"brown-1978",author:"Brown, Peter",year:1978,title:"The Making of Late Antiquity",publication:"Cambridge, MA: Harvard University Press, 1978",kind:"book",href:"https://obnb.uk/p11970805-the-making-of-late-antiquity"},
{id:"brown-2012",author:"Brown, Peter",year:2012,title:"Through the Eye of a Needle: Wealth, the Fall of Rome, and the Making of Christianity in the West, 350–550 AD",publication:"Princeton, NJ: Princeton University Press, 2012",kind:"book",href:"https://history.princeton.edu/about/publications/through-eye-needle-wealth-fall-rome-and-making-christianity-west-350-550-ad"},
{id:"goffart-1980",author:"Goffart, Walter",year:1980,title:"Barbarians and Romans, A.D. 418–584: The Techniques of Accommodation",publication:"Princeton, NJ: Princeton University Press, 1980",kind:"book",href:"https://doi.org/10.2307/j.ctv131bttm"},
{id:"halsall-2007",author:"Halsall, Guy",year:2007,title:"Barbarian Migrations and the Roman West, 376–568",publication:"Cambridge: Cambridge University Press, 2007",kind:"book",href:"https://doi.org/10.1017/CBO9780511802393"},
{id:"heather-1991",author:"Heather, Peter",year:1991,title:"Goths and Romans, 332–489",publication:"Oxford: Clarendon Press, 1991",kind:"book",href:"https://doi.org/10.1093/acprof:oso/9780198205357.001.0001"},
{id:"mathisen-2020",author:"Mathisen, Ralph W.",year:2020,title:"Barbarian Invasions or Civil Wars? Goths as Auxiliary Forces in the Roman Army",publication:"In *Empire in Crisis: Gothic Invasions and Roman Historiography*, edited by Fritz Mitthof, Gunther Martin, and Jana Grusková, 263–86. Vienna: Verlag Holzhausen, 2020",kind:"chapter",href:"https://experts.illinois.edu/en/publications/barbarian-invasions-or-civil-wars-goths-as-auxiliary-forces-in-th/"},
{id:"rendina-2020",author:"Rendina, Simone",year:2020,title:"Inviting the Barbarians: Some Episodes of Treason",publication:"*Latomus* 79, no. 1 (2020): 158–83",kind:"article",href:"https://doi.org/10.2143/LAT.79.1.3287980"},
{id:"wijnendaele-2015",author:"Wijnendaele, Jeroen W. P.",year:2015,title:"The Last of the Romans: Bonifatius, Warlord and Comes Africae",publication:"London: Bloomsbury Academic, 2015",kind:"book",href:"https://biblio.ugent.be/publication/8507164"}
];
const CASE_HISTORIOGRAPHY: Partial<Record<string,HistoriographyId[]>> = {
 R007:["mathisen-2020","halsall-2007"],R008:["heather-1991","halsall-2007","mathisen-2020"],
 R010:["halsall-2007","heather-1991","mathisen-2020"],R011:["halsall-2007"],
 R012:["goffart-1980","halsall-2007","heather-1991"],R013:["wijnendaele-2015","rendina-2020"],
 R014:["goffart-1980","halsall-2007"],R015:["goffart-1980","halsall-2007"],
 R016:["goffart-1980","halsall-2007"],R017:["rendina-2020"],
 R018:["heather-1991","halsall-2007"],R019:["halsall-2007","mathisen-2020"],R020:["halsall-2007"]
};
function BibliographyRef({id}:{id:HistoriographyId}) {
 const item=HISTORIOGRAPHY.find(e=>e.id===id);
 if(!item)return null;
 return <a href={"#hist-"+id} className="font-semibold text-primary underline decoration-tertiary-fixed/70 underline-offset-4 hover:decoration-primary">{item.author.split(",")[0]} ({item.year})</a>;
}
function BibliographyEntry({item}:{item:HistoriographyEntry}) {
 return <li id={"hist-"+item.id} className="scroll-mt-28 pl-7 -indent-7 leading-7">
  {item.author}. {item.kind==="book"?<em>{item.title}</em>:<>‘{item.title}’</>}.{" "}
  {item.publication.split(/(\*[^*]+\*)/g).map((part,i)=>part.startsWith("*")&&part.endsWith("*")?<em key={i}>{part.slice(1,-1)}</em>:<span key={i}>{part}</span>)}.{" "}
  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-tertiary-fixed/70 underline-offset-4 hover:decoration-primary">{item.href.startsWith("https://doi.org/")?item.href:"Editorial / catalogue"}</a>
 </li>;
}

function ResourceEventCard({ item, locale }: { item: ResearchEvent; locale: Locale }) {
  const m = CONTENT[locale];
  const es = ES[item.id];
  const title = locale === "es" ? es?.title ?? item.title : item.title;
  const actor = locale === "es" ? es?.actor ?? item.roman_actor : item.roman_actor;
  const party = locale === "es" ? es?.party ?? item.foreign_party : item.foreign_party;
  const place = locale === "es" ? es?.place ?? item.place : item.place;
  const note = locale === "es" ? es?.note ?? item.source_critical_note : item.source_critical_note;
  const status = item.status as Status;
  const relevant = CASE_HISTORIOGRAPHY[item.id] ?? [];
  const label = status === "attested" ? m.attested : status === "contested" ? m.contested : m.allegation;
  const colour = status === "attested" ? "border-emerald-600" : status === "contested" ? "border-amber-600" : "border-rose-700";
  return (
    <article className="relative grid gap-4 md:grid-cols-[8rem_minmax(0,1fr)]" id={item.id}>
      <div className="relative md:text-right">
        <span className="sticky top-24 inline-flex rounded-full border-2 border-outline-variant bg-background px-3 py-1.5 font-label text-xs font-bold tracking-wide text-primary">
          {locale === "es" ? item.date_label_es ?? (item.year < 0 ? Math.abs(item.year) + " " + m.dateBce : item.year + " " + m.dateCe) : item.date_label_en ?? (item.year < 0 ? Math.abs(item.year) + " " + m.dateBce : item.year + " " + m.dateCe)}
        </span>
      </div>
      <div className={"border-l-4 bg-white p-6 shadow-sm ring-1 ring-outline-variant/20 md:p-7 " + colour}>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-surface-container-low px-2.5 py-1 text-[11px] font-semibold text-primary">
            {MECHANISMS[item.mechanism]?.[locale] ?? item.mechanism}
          </span>
          <span className="rounded-full border border-outline-variant px-2.5 py-1 text-[11px] font-semibold text-on-surface-variant">{label}</span>
        </div>
        <h3 className="mt-4 font-headline text-2xl font-bold leading-snug text-primary"><ItalicEthnonyms text={title}/></h3>
        <dl className="mt-5 grid gap-4 border-y border-outline-variant/25 py-5 text-sm sm:grid-cols-2">
          {([["actor",actor],["party",party],["place",place]] as const).map(([k,v])=>(
            <div key={k}><dt className="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">{m[k]}</dt><dd className="mt-1"><ItalicEthnonyms text={v}/></dd></div>
          ))}
        </dl>
        <div className="mt-5 bg-surface-container-low p-5"><h4 className="font-label mb-2 text-xs font-bold tracking-widest text-primary uppercase">{m.note}</h4><p className="text-sm leading-6 text-on-surface-variant"><ItalicEthnonyms text={note}/></p></div>
        {relevant.length>0?<div className="mt-5 border-t border-outline-variant/25 pt-4"><h4 className="mb-2 font-label text-xs font-bold tracking-widest text-primary uppercase">{m.relevantStudies}</h4><p className="flex flex-wrap gap-x-3 gap-y-1 text-sm">{relevant.map(id=><BibliographyRef key={id} id={id}/>)}</p></div>:null}
        <div className="mt-5"><p className="font-label mb-2 text-xs font-bold tracking-widest text-primary uppercase">{m.source}</p>
          <a href={item.source_url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline decoration-tertiary-fixed/60 underline-offset-4 hover:decoration-primary">
          <ItalicEthnonyms text={item.primary_source} /> <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>
  );
}

export function RomanInvitationsResourcePage() {
  const { locale } = useTranslations();
  const m = CONTENT[locale];
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [mechanism, setMechanism] = useState("");
  const records = EVENTS as ResearchEvent[];
  const mechanisms = useMemo(() => [...new Set(records.map(e=>e.mechanism))].sort(), [records]);
  const filtered = useMemo(() => {
    const q = search.toLocaleLowerCase(locale).trim();
    return records.filter(e => {
      if (status && e.status !== status) return false;
      if (mechanism && e.mechanism !== mechanism) return false;
      if (!q) return true;
      const es = ES[e.id];
      const text = [e.year,e.title,e.roman_actor,e.foreign_party,e.place,e.source_critical_note,e.primary_source,es?.title,es?.actor,es?.party,es?.place,es?.note].join(" ").toLocaleLowerCase(locale);
      return text.includes(q);
    });
  }, [records, locale, search, status, mechanism]);

  return (
    <PageContainer customHeader={
      <header className="relative z-10 mb-16 text-center">
        <div className="mb-4 inline-block bg-surface-container px-3 py-1 font-medium text-xs text-tertiary tracking-[0.2em] uppercase">{m.kicker}</div>
        <h1 className="font-headline mx-auto mb-7 max-w-5xl text-5xl font-bold tracking-tight text-primary md:text-7xl">{m.title}</h1>
        <p className="mx-auto max-w-4xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
          {m.subtitleBefore}<em>foederati</em>{m.subtitleAfter}
        </p>
        <div className="mx-auto mt-8 h-px max-w-36 bg-tertiary-fixed-dim" />
      </header>
    }>
      <div className="mb-10 flex flex-wrap items-center justify-between gap-3 text-xs text-on-surface-variant">
        <Link href="/papers#research-resources" className="font-bold text-primary underline underline-offset-4">← {m.returnResources}</Link>
        <span>{m.version}: 0.2.0 · {m.author}: Hervin Fernández Aceves · {m.affiliation}: El Colegio de Jalisco</span>
      </div>
      <section className="mb-12 max-w-5xl">
        <h2 className="font-headline mb-5 text-3xl font-bold text-primary">{m.introTitle}</h2>
        <p className="leading-8 text-on-surface"><ItalicEthnonyms text={m.intro}/></p>
        <p className="mt-5 leading-7 text-on-surface-variant"><ItalicEthnonyms text={m.initialQualification}/></p>
      </section>

      <section aria-label={m.search} className="mb-14">
        <div className="mb-8 grid gap-4 border border-outline-variant/30 bg-surface-container-low p-5 md:grid-cols-3">
          <label className="block font-label text-xs font-bold text-primary"><span className="mb-2 block">{m.search}</span><input type="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder={m.searchPlaceholder} className="w-full border border-outline-variant bg-white p-3 font-body font-normal text-on-surface" /></label>
          <label className="block font-label text-xs font-bold text-primary"><span className="mb-2 block">{m.status}</span><select value={status} onChange={e=>setStatus(e.target.value)} className="w-full border border-outline-variant bg-white p-3 font-body font-normal text-on-surface"><option value="">{m.allStatus}</option><option value="attested">{m.attested}</option><option value="contested">{m.contested}</option><option value="allegation">{m.allegation}</option></select></label>
          <label className="block font-label text-xs font-bold text-primary"><span className="mb-2 block">{m.type}</span><select value={mechanism} onChange={e=>setMechanism(e.target.value)} className="w-full border border-outline-variant bg-white p-3 font-body font-normal text-on-surface"><option value="">{m.allMechanisms}</option>{mechanisms.map(s=><option key={s} value={s}>{MECHANISMS[s]?.[locale]??s}</option>)}</select></label>
        </div>
        <p className="mb-8 text-sm text-on-surface-variant" role="status">{m.shown} {filtered.length} {m.of} {records.length}.</p>
        <div className="space-y-8">{filtered.length ? filtered.map(e=><ResourceEventCard key={e.id} item={e} locale={locale}/>) : <p>{m.none}</p>}</div>
      </section>

      <section className="my-14 border-t border-outline-variant/30 pt-10">
        <h2 className="font-headline mb-5 text-3xl font-bold text-primary">{m.methodTitle}</h2>
        <p className="max-w-4xl leading-8 text-on-surface">{m.method}</p>
        <p className="mt-5 max-w-4xl leading-8 text-on-surface">{m.methodSecond}</p>
        <p className="mt-5 max-w-4xl leading-8 text-on-surface">{m.historiographicalFrame}</p>
        <p className="mt-5 max-w-4xl leading-8 text-on-surface-variant">{m.historiographyIntro}</p>
        <div className="mt-7 max-w-4xl space-y-6 border-l-2 border-outline-variant/60 pl-5">
         <div><p className="leading-7 text-on-surface">{m.historiographyTransformation}</p><p className="mt-2 flex flex-wrap gap-3 text-sm"><BibliographyRef id="brown-1971"/><BibliographyRef id="brown-1978"/><BibliographyRef id="brown-2012"/></p></div>
         <div><p className="leading-7 text-on-surface">{m.historiographySettlement}</p><p className="mt-2 flex flex-wrap gap-3 text-sm"><BibliographyRef id="goffart-1980"/><BibliographyRef id="halsall-2007"/><BibliographyRef id="heather-1991"/></p></div>
         <div><p className="leading-7 text-on-surface">{m.historiographyAgency}</p><p className="mt-2 flex flex-wrap gap-3 text-sm"><BibliographyRef id="mathisen-2020"/><BibliographyRef id="rendina-2020"/><BibliographyRef id="wijnendaele-2015"/></p></div>
        </div>
        <p className="mt-6 max-w-4xl border-l-2 border-outline-variant/70 pl-4 text-sm leading-6 text-on-surface-variant">{m.caution}</p>
        <a href="/recursos/invitations-to-empire/events.json" download className="mt-6 inline-flex border border-primary px-4 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-on-primary">{m.dataLink}</a>
      </section>
      <section className="mb-20 border-t border-outline-variant/30 pt-10">
        <h2 className="font-headline mb-5 text-3xl font-bold text-primary">{m.bibliography}</h2>
        <p className="mb-6 max-w-4xl text-sm leading-6 text-on-surface-variant">{m.historiographyNote}</p>
        <ul className="space-y-4 text-sm text-on-surface-variant">{HISTORIOGRAPHY.map(item=><BibliographyEntry key={item.id} item={item}/>)}</ul>
      </section>
    </PageContainer>
  );
}
