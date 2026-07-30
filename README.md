# schafkopf-tracker-legal

Website zu **schafkopf-tracker.de** (GitHub Pages) – Landingpage plus die
rechtlich notwendigen Seiten der iOS-App „Schafkopf Tracker“.

## Dateien

| Datei | Zweck |
| --- | --- |
| `index.html` | Onepage-Landingpage (Hero, Nutzen, Features, Screenshots, Ablauf, CTA, Footer) |
| `assets/css/landing.css` | Styles der Landingpage – kein Framework, kein JavaScript |
| `assets/screenshots/*.svg` | **Platzhalter**-Screenshots, siehe „Noch offen“ |
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
