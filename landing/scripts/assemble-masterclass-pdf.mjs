import { readFileSync, readdirSync, mkdirSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
const source = new URL("../data/presentation-pdf/masterclass-2026/", import.meta.url);
const target = new URL("../public/presentations/", import.meta.url);
const chunks = readdirSync(source).filter(name => /^\d{3}\.b64$/.test(name)).sort();
const pdf = Buffer.from(chunks.map(name => readFileSync(new URL(name, source), "utf8")).join(""), "base64");
if (createHash("sha256").update(pdf).digest("hex") !== "4d47e8dc68b873cadd61168ffb105236570e1c83138526f7ecab68edb09ddf0d") throw new Error("Masterclass PDF checksum mismatch");
mkdirSync(target, { recursive: true });
writeFileSync(new URL("humanidades-digitales-e-inteligencia-artificial-2026.pdf", target), pdf);
