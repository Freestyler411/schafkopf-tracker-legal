/**
 * Rendert assets/og/og-vorlage.html zu assets/og/og-image.jpg (1200 × 630 px).
 *
 * Voraussetzungen:
 *   npm install playwright        (einmalig)
 *   python3 -m http.server 8000   (im Repo-Wurzelverzeichnis, in zweitem Terminal)
 *
 * Aufruf:
 *   node assets/og/render-og.mjs
 *
 * Gerendert wird mit doppelter Pixeldichte und anschließend auf die
 * empfohlenen 1200 × 630 px heruntergerechnet – das ergibt sauber geglättete
 * Kanten und Schrift. Ausgabe als JPEG: der Verlaufshintergrund komprimiert
 * darin rund viermal besser als in PNG, ohne sichtbare Artefakte.
 */
import { chromium } from 'playwright';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HIER = dirname(fileURLToPath(import.meta.url));
const URL_VORLAGE = process.env.OG_URL ?? 'http://localhost:8000/assets/og/og-vorlage.html';
const ZIEL = join(HIER, 'og-image.jpg');
const TEMP = join(HIER, 'og-image@2x.png');

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PFAD || undefined,
  args: ['--no-sandbox'],
});

const seite = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});

await seite.goto(URL_VORLAGE, { waitUntil: 'networkidle' });

const fehlend = await seite.evaluate(() =>
  [...document.images].filter((i) => !i.complete || !i.naturalWidth).map((i) => i.src)
);
if (fehlend.length) {
  throw new Error('Bilder konnten nicht geladen werden: ' + fehlend.join(', '));
}

await seite.screenshot({ path: TEMP, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();

// Herunterrechnen auf exakt 1200 × 630 px
execFileSync('python3', [
  '-c',
  `from PIL import Image
bild = Image.open(${JSON.stringify(TEMP)}).convert('RGB')
bild.resize((1200, 630), Image.LANCZOS).save(
    ${JSON.stringify(ZIEL)}, quality=92, optimize=True, progressive=True)`,
]);

execFileSync('rm', ['-f', TEMP]);
console.log('Fertig:', ZIEL);
