import { Fragment } from "react";

/**
 * Research-resource typographic convention:
 * Italicise uncommon ethnonyms retained in the ancient-source form.
 * Established English and Spanish ethnonyms (Goths / godos,
 * Vandals / vándalos, Franks / francos, Lombards / lombardos,
 * Heruls / hérulos, etc.) remain in roman type.
 *
 * The distinction is lexical, not a claim of common ethnic or
 * linguistic affiliation: Iazyges were Sarmatian, and the
 * classification of groups such as the Bastarnae is contested.
 */
const SOURCE_FORM_PATTERN =
  /(?<![\p{L}\p{M}])(Thervingi|Tervingi|Greuthungi|Greutungi|Ubii|Bastarnae|Bastarni|Iazyges|Heruli|Rugii|Suebi|Suevi|Langobardi|Sciri)(?![\p{L}\p{M}])/giu;

export function ItalicEthnonyms({ text }: { text: string }) {
  return (
    <>
      {text.split(SOURCE_FORM_PATTERN).map((part, index) =>
        index % 2 === 1 ? (
          <em key={index}>{part}</em>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
