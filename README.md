# schafkopf-tracker-legal

Website zu **schafkopf-tracker.de** (GitHub Pages) – Landingpage plus die
rechtlich notwendigen Seiten der iOS-App „Schafkopf Tracker“.

## Dateien

| Datei | Zweck |
| --- | --- |
| `index.html` | Onepage-Landingpage (Hero, Nutzen, Features, Screenshots, Ablauf, CTA, Footer) |
| `assets/css/landing.css` | Styles der Landingpage – kein Framework, kein JavaScript |
| `assets/screenshots/*.svg` | **Platzhalter**-Screenshots, siehe „Noch offen“ |
| `assets/og/og-image.jpg` | Social-Vorschaubild (1200 × 630) für Open Graph und Twitter Card |
| `assets/og/og-vorlage.html` | Quelle des Vorschaubilds – wird nicht verlinkt |
| `assets/og/render-og.mjs` | Rendert die Vorlage zu `og-image.jpg` |
| `datenschutz.html`, `impressum.html`, `support.html` | Bestehende Seiten, unverändert |
| `robots.txt`, `sitemap.xml` | Suchmaschinen-Basics |
| `logo.svg`, `logo.png`, `apple-touch-icon.png` | App-Icon, Favicon, Social-Preview |

## Noch offen (TODOs im Code markiert)

1. **Echte Screenshots.** Die drei SVGs unter `assets/screenshots/` sind
   nachgebaute Platzhalter. Ersetzen durch echte Aufnahmen (empfohlen
   1170 × 2532 px, WebP oder PNG), danach Dateinamen, `width`/`height` und die
   Alt-Texte in `index.html` anpassen sowie die Pfade im JSON-LD
   (`screenshot`) aktualisieren.
2. **JSON-LD ergänzen**, sobald verfügbar: `aggregateRating` (nach den ersten
   Bewertungen), `softwareVersion` und `datePublished`.

Der App-Store-Link ist eingetragen:
<https://apps.apple.com/de/app/schafkopf-tracker/id6790808695>

## Lokale Vorschau

```sh
python3 -m http.server 8000
# http://localhost:8000
```

Die Seite muss über den Server aufgerufen werden – CSS und Bilder sind mit
absoluten Pfaden eingebunden und laden per `file://` nicht.

## Social-Vorschaubild neu erzeugen

Nötig, wenn sich Claim, Logo oder Screenshot ändern:

```sh
npm install playwright        # einmalig
pip install Pillow            # einmalig
python3 -m http.server 8000   # in einem zweiten Terminal
node assets/og/render-og.mjs
```

Das Skript rendert `assets/og/og-vorlage.html` mit doppelter Pixeldichte,
rechnet auf exakt 1200 × 630 px herunter und speichert als JPEG (~100 KB).
Nach einer Änderung des Bildes den Cache der Plattformen erneuern lassen –
etwa über den [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
oder den [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).
