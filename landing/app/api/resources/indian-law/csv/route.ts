import { INDIAN_LAW_EVENTS } from "@/lib/data/indian-law-events";

export const dynamic = "force-static";

function csvCell(value: string | number | undefined) {
  const text = value === undefined ? "" : String(value);
  return '"' + text.replaceAll('"', '""') + '"';
}

export async function GET() {
  const header = [
    "year",
    "category",
    "theme",
    "title_es",
    "title_en",
    "form_es",
    "form_en",
    "authority",
    "scope_es",
    "scope_en",
    "sanction_es",
    "sanction_en",
    "evidence",
    "summary_es",
    "summary_en",
    "interpretation_es",
    "interpretation_en",
    "sources",
    "archival_note_es",
    "archival_note_en",
  ];

  const rows = INDIAN_LAW_EVENTS.map((event) => [
    event.year,
    event.cat,
    event.theme,
    event.title.es,
    event.title.en,
    event.form.es,
    event.form.en,
    event.authority,
    event.scope.es,
    event.scope.en,
    event.sanction.es,
    event.sanction.en,
    event.evidence,
    event.summary.es,
    event.summary.en,
    event.interpretation.es,
    event.interpretation.en,
    event.sources.join(";"),
    event.archivalNote?.es,
    event.archivalNote?.en,
  ]);

  const csv = [
    header.map(csvCell).join(","),
    ...rows.map((row) => row.map(csvCell).join(",")),
  ].join("\n");

  return new Response("\uFEFF" + csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="legislacion-indiana-siglo-xvi.csv"',
    },
  });
}
