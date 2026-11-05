# Diccionario de datos

## Archivo CSV

| Campo | Tipo | Descripción |
|---|---|---|
| `year` | texto | Fecha, año, intervalo o indicación cronológica visible. |
| `category` | código | R1, R2, I1, C1, P1, P2, RC o INST. |
| `theme` | texto controlado | Materia principal asignada al hito. |
| `title_es` | texto | Título normalizado en español. |
| `title_en` | texto | Título normalizado en inglés. |
| `form_es` | texto | Forma diplomática o documental en español. |
| `form_en` | texto | Forma diplomática o documental en inglés. |
| `authority` | texto | Autoridad emisora, responsable o institucional. |
| `scope_es` | texto | Ámbito territorial o institucional en español. |
| `scope_en` | texto | Ámbito territorial o institucional en inglés. |
| `sanction_es` | texto | Estatus jurídico o sanción en español. |
| `sanction_en` | texto | Estatus jurídico o sanción en inglés. |
| `evidence` | código | A, B o C según trazabilidad documental. |
| `summary_es` | texto | Síntesis histórica en español. |
| `summary_en` | texto | Síntesis histórica en inglés. |
| `interpretation_es` | texto | Lectura historiográfica en español. |
| `interpretation_en` | texto | Lectura historiográfica en inglés. |
| `sources` | lista separada por ; | Identificadores que remiten al registro de fuentes del JSON. |
| `archival_note_es` | texto opcional | Nota documental o archivística en español. |
| `archival_note_en` | texto opcional | Nota documental o archivística en inglés. |

## Archivo JSON

El JSON contiene tres objetos principales:

### `categories`

Diccionario de categorías jurídicas y documentales. Cada clave corresponde a uno de los códigos R1, R2, I1, C1, P1, P2, RC e INST.

### `sources`

Registro de 50 fuentes. Cada elemento incluye:

- `kind`: `primary`, `edition`, `hist` o `reference`;
- `label`: descripción bibliográfica o archivística;
- `url`: enlace público utilizado en la versión 1.0.0.

### `events`

Matriz de 31 hitos. Además de los campos del CSV, contiene:

- `start`: valor numérico utilizado para orden cronológico;
- objetos bilingües `{ es, en }`;
- `sources`: arreglo de identificadores de fuente;
- `archivalNote`: objeto bilingüe opcional.

## Vocabulario de `source.kind`

- `primary`: fuente primaria o registro archivístico.
- `edition`: edición, facsímil o transcripción.
- `hist`: historiografía especializada.
- `reference`: repertorio o referencia institucional.

## Valores nulos

La ausencia de una nota archivística no significa ausencia de control documental. Indica únicamente que la entrada no requiere una advertencia específica adicional en esta versión.
