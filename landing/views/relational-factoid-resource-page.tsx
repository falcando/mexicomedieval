"use client";

import PageContainer from "@/components/layout/PageContainer";
import { useTranslations } from "@/components/i18n/LocaleProvider";
import Link from "next/link";

const REPOSITORY = "https://github.com/falcando/relational-factoid-ontology";
const BRADLEY = "https://github.com/johnBradley501/FPO";
const EPOCH = "https://www.epoch-magazine.com/post/what-can-we-learn-from-the-semantic-web-to-revamp-our-historical-research";
const SCRIPTA = "https://scripta.up.edu.mx/handle/20.500.12552/13222";
const DISSINET = "https://www.dissinet.cz/news/events-calendar/616919u-online-lecture-an-adapted-ontology-for-a-prosopography-of-medieval-sardinia-rdf-schemes-owl-and-an-open-linked-database";
const PRESENTATION = "https://www.academia.edu/24429003/The_Uncharted_Networks_of_a_Chartered_Territory_Diplomatic_Evidence_and_Relational_Sociology_for_the_Norman_Kingdom_of_Sicily";
const DATA = {
  es: {
    kicker: "Recurso de investigación · Humanidades digitales",
    title: "Ontología de Prosopografía Relacional basada en Factoids (RFPO)",
    subtitle: "Prosopografía, relaciones documentadas y representación semántica de fuentes históricas",
    edition: "Versión de trabajo 0.1",
    author: "Investigador responsable",
    licence: "Licencia",
    access: "Consultar el proyecto en GitHub",
    accessNote: "Repositorio público de la RFPO con el modelo RDF/OWL, documentación técnica, ejemplos y consultas.",
    openingTitle: "Del testimonio documental a la relación histórica",
    opening: "La prosopografía histórica no consiste únicamente en reunir los atributos de personas identificadas en las fuentes. También requiere examinar las relaciones que los documentos registran entre ellas, distinguir sus modalidades y precisar las condiciones de cada testimonio. La RFPO formaliza un modelo de factoids relacionales que permite representar esas conexiones sin convertir automáticamente una afirmación documental en un hecho histórico establecido.",
    methodTitle: "El modelo y su procedencia",
    methodOne: "El modelo de prosopografía relacional fue desarrollado por Hervin Fernández Aceves a partir de su investigación sobre la documentación del reino normando de Sicilia y de su trabajo posterior con las fuentes de la Cerdeña medieval. Parte de la prosopografía basada en factoids y extiende la Factoid Prosopography Ontology (FPO) de John Bradley, conservando la distinción entre fuentes, referencias documentales, actores y relaciones.",
    methodTwo: "En lugar de atribuir una relación directamente a dos individuos sin mayor especificación, el modelo registra la afirmación contenida en una fuente, el lugar en que aparece y los papeles de sus participantes. Separa así la evidencia transmitida, su formalización y las interpretaciones que podamos proponer a partir de ella.",
    techTitle: "RDF, OWL y formas de representación",
    techOne: "El Resource Description Framework (RDF) representa información mediante afirmaciones explícitas formadas por sujeto, predicado y objeto, denominadas triples. RDF Schema (RDFS) y el Web Ontology Language (OWL) permiten definir las clases, propiedades y conexiones que dan un significado más preciso a esos datos. Turtle es una sintaxis compacta para escribir RDF; RDF/XML expresa el mismo grafo mediante XML.",
    techTwo: "El repositorio contiene dos serializaciones equivalentes de la ontología: un documento RDF/XML (.rdf) y otro en Turtle (.ttl). Incluye, además, reglas SHACL, una consulta SPARQL y datos ficticios para probar su estructura. No constituye todavía una base de datos prosopográfica poblada con testimonios sardos auténticos.",
    contentsTitle: "Acceso a los archivos",
    rdf: "Ontología en RDF/XML",
    turtle: "Ontología en Turtle",
    readme: "Documentación del proyecto",
    repository: "Repositorio completo",
    relatedTitle: "Antecedentes y referencias",
    bradley: "Ontología FPO de John Bradley",
    epoch: "Artículo sobre RDF, ontologías y la web semántica en EPOCH",
    presentation: "Presentación académica del modelo relacional",
    lecture: "Conferencia sobre la ontología para la Cerdeña medieval (2022)",
    scripta: "Registro institucional del artículo de EPOCH en Scripta",
    statusTitle: "Estado del proyecto",
    status: "Esta es una versión inicial de trabajo. La estructura y los ejemplos están disponibles para consulta y revisión, pero todavía requieren contrastarse sistemáticamente con documentos históricos y someterse a validación formal de la ontología combinada. Los cambios posteriores quedarán registrados en GitHub.",
    back: "Volver a Papers y recursos",
    external: "Se abre en otra pestaña",
  },
  en: {
    kicker: "Research resource · Digital humanities",
    title: "Relational Factoid Prosopography Ontology (RFPO)",
    subtitle: "Prosopography, documentary relationships and the semantic representation of historical sources",
    edition: "Working version 0.1",
    author: "Research author",
    licence: "Licence",
    access: "Explore the project on GitHub",
    accessNote: "Public RFPO repository containing the RDF/OWL model, technical documentation, examples and queries.",
    openingTitle: "From documentary testimony to historical relationships",
    opening: "Historical prosopography involves more than assembling the attributes of individuals identified in documentary sources. It also requires us to examine the relationships recorded between them, distinguish their different forms and establish the evidential circumstances of each statement. RFPO formalises a relational factoid model that makes such connections explicit without automatically treating a documentary assertion as an established historical fact.",
    methodTitle: "The model and its origins",
    methodOne: "The relational prosopographical model was developed by Hervin Fernández Aceves through research on the documentary evidence of the Norman kingdom of Sicily and subsequently on medieval Sardinian sources. It draws on factoid-based prosopography and extends John Bradley's Factoid Prosopography Ontology (FPO), preserving the distinction between sources, documentary references, actors and relationships.",
    methodTwo: "Rather than assigning an unqualified relationship directly between two individuals, the model represents the assertion recorded by a source, its textual location and the roles of its participants. Documentary evidence, its formal representation and the historian's interpretation therefore remain distinct.",
    techTitle: "RDF, OWL and ways of representing data",
    techOne: "The Resource Description Framework (RDF) represents information through explicit subject–predicate–object statements, or triples. RDF Schema (RDFS) and the Web Ontology Language (OWL) define classes, properties and relationships that give those statements a more precise meaning. Turtle is a compact syntax for writing RDF, while RDF/XML expresses the same graph using XML.",
    techTwo: "The repository provides two equivalent serialisations of the ontology: an RDF/XML document (.rdf) and a Turtle document (.ttl). It also includes SHACL validation shapes, a SPARQL query and fictitious test data. It is not yet a populated prosopographical database of authentic Sardinian documentary evidence.",
    contentsTitle: "Access the files",
    rdf: "Ontology in RDF/XML",
    turtle: "Ontology in Turtle",
    readme: "Project documentation",
    repository: "Complete repository",
    relatedTitle: "Background and references",
    bradley: "John Bradley's FPO ontology",
    epoch: "EPOCH article on RDF, ontologies and the Semantic Web",
    presentation: "Academic presentation of the relational model",
    lecture: "Lecture on the ontology for medieval Sardinia (2022)",
    scripta: "Institutional record of the EPOCH article in Scripta",
    statusTitle: "Current status",
    status: "This is an initial working version. Its structure and examples are available for consultation and review, but the model has yet to be tested systematically against historical documents and validated through full reasoning over the combined ontology. Subsequent changes will be documented on GitHub.",
    back: "Back to Papers & resources",
    external: "Opens in a new tab",
  },
} as const;

function ExternalResourceLink({
  href,
  title,
  externalLabel,
}: {
  href: string;
  title: string;
  externalLabel: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 border-b border-outline-variant/30 py-4 text-sm leading-6 text-primary underline-offset-4 hover:underline"
      aria-label={title + ". " + externalLabel}
    >
      <span>{title}</span>
      <span className="material-symbols-outlined shrink-0 text-lg" aria-hidden="true">
        open_in_new
      </span>
    </a>
  );
}

export function RelationalFactoidResourcePage() {
  const { locale } = useTranslations();
  const c = DATA[locale];

  return (
    <PageContainer
      pretitle={c.kicker}
      title={c.title}
      subtitle={c.subtitle}
    >
      <section className="mb-12 border border-outline-variant/30 bg-white p-7 shadow-sm md:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-label text-xs font-bold tracking-widest text-tertiary-fixed-dim uppercase">
              {c.edition}
            </p>
            <dl className="mt-5 grid gap-x-10 gap-y-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">{c.author}</dt>
                <dd className="mt-1 text-on-surface">Hervin Fernández Aceves</dd>
              </div>
              <div>
                <dt className="font-label text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">{c.licence}</dt>
                <dd className="mt-1">
                  <a className="text-primary underline underline-offset-4" href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC 4.0</a>
                </dd>
              </div>
            </dl>
            <p className="mt-6 max-w-2xl text-sm leading-6 text-on-surface-variant">{c.accessNote}</p>
          </div>
          <a
            href={REPOSITORY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-container"
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">code</span>
            {c.access}
            <span className="material-symbols-outlined text-base" aria-hidden="true">open_in_new</span>
          </a>
        </div>
      </section>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(16rem,1fr)] lg:gap-14">
        <div className="space-y-12">
          <section>
            <h2 className="font-headline mb-5 text-2xl font-bold text-primary md:text-3xl">{c.openingTitle}</h2>
            <p className="text-base leading-8 text-on-surface">{c.opening}</p>
          </section>

          <section>
            <h2 className="font-headline mb-5 text-2xl font-bold text-primary md:text-3xl">{c.methodTitle}</h2>
            <div className="space-y-4 text-base leading-8 text-on-surface">
              <p>{c.methodOne}</p>
              <p>{c.methodTwo}</p>
            </div>
          </section>

          <section>
            <h2 className="font-headline mb-5 text-2xl font-bold text-primary md:text-3xl">{c.techTitle}</h2>
            <div className="space-y-4 text-base leading-8 text-on-surface">
              <p>{c.techOne}</p>
              <p>{c.techTwo}</p>
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <section className="border border-outline-variant/30 bg-white p-6 shadow-sm">
            <h2 className="font-headline text-xl font-bold text-primary">{c.contentsTitle}</h2>
            <div className="mt-3">
              <ExternalResourceLink href={REPOSITORY} title={c.repository} externalLabel={c.external} />
              <ExternalResourceLink href={REPOSITORY + "/blob/main/relational-factoid-ontology.rdf"} title={c.rdf} externalLabel={c.external} />
              <ExternalResourceLink href={REPOSITORY + "/blob/main/relational-factoid-ontology.ttl"} title={c.turtle} externalLabel={c.external} />
              <ExternalResourceLink href={REPOSITORY + "/blob/main/README.md"} title={c.readme} externalLabel={c.external} />
            </div>
          </section>
          <section className="border border-outline-variant/30 bg-white p-6 shadow-sm">
            <h2 className="font-headline text-xl font-bold text-primary">{c.relatedTitle}</h2>
            <div className="mt-3">
              <ExternalResourceLink href={PRESENTATION} title={c.presentation} externalLabel={c.external} />
              <ExternalResourceLink href={BRADLEY} title={c.bradley} externalLabel={c.external} />
              <ExternalResourceLink href={EPOCH} title={c.epoch} externalLabel={c.external} />
              <ExternalResourceLink href={SCRIPTA} title={c.scripta} externalLabel={c.external} />
              <ExternalResourceLink href={DISSINET} title={c.lecture} externalLabel={c.external} />
            </div>
          </section>
        </aside>
      </div>

      <section className="mt-12 border-l-4 border-primary bg-surface-container-low p-6 md:p-8">
        <h2 className="font-headline text-xl font-bold text-primary">{c.statusTitle}</h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-on-surface-variant">{c.status}</p>
      </section>

      <div className="mt-10">
        <Link href="/papers#research-resources" className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline">
          <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_back</span>
          {c.back}
        </Link>
      </div>
    </PageContainer>
  );
}
