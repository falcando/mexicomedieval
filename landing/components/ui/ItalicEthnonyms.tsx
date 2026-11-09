import { Fragment } from "react";

/**
 * Italicise named Germanic groups in English and Spanish, not general
 * adjectives or peoples of other linguistic traditions (Alans, Sarmatians).
 * This is an editorial distinction, not a claim of uniform ethnic identity:
 * the affiliation of groups such as the Bastarnae is disputed.
 */
const ETHNONYM_PATTERN =
  /(?<![\p{L}\p{M}])(Thervingi|Greuthungi|Tervingi|Greutungos|Greutungi|Visigoths|Visigoth|Ostrogoths|Ostrogoth|Burgundians|Burgundian|Langobards|Langobard|Lombards|Lombard|Bastarnae|Bastarni|Vandals|Vandalic|Vandal|Heruli|Heruls|Herul|Suebians|Suebian|Suebi|Suevi|Franks|Frankish|Frank|Goths|Gothic|Goth|Ubii|Rugii|Rugians|Saxons|tervingios|tervingio|tervingias|tervingia|tervingi|greutungos|greutungo|greutungas|greutunga|visigodos|visigodo|visigodas|visigoda|ostrogodos|ostrogodo|ostrogodas|ostrogoda|burgundios|burgundio|burgundias|burgundia|lombardos|lombardo|lombardas|lombarda|bastarnos|bastarna|bastarnas|vándalos|vándalo|vándalas|vándala|hérulos|hérulo|hérulas|hérula|francos|franco|francas|franca|godos|godo|godas|goda|ubios|ubio|ubias|ubia|suevos|suevo|suevas|sueva|rugios|sajones)(?![\p{L}\p{M}])/giu;

export function ItalicEthnonyms({ text }: { text: string }) {
  return (
    <>
      {text.split(ETHNONYM_PATTERN).map((part, index) =>
        index % 2 === 1 ? (
          <em key={index}>{part}</em>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
