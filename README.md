# schafkopf-tracker-legal

Website zu **schafkopf-tracker.de** (GitHub Pages) – Landingpage plus die
rechtlich notwendigen Seiten der iOS-App „Schafkopf Tracker“.

## Dateien

| Datei | Zweck |
| --- | --- |
| `index.html` | Onepage-Landingpage (Hero, Nutzen, Features, Screenshots, Ablauf, CTA, Footer) |
| `assets/css/landing.css` | Styles der Landingpage – kein Framework, kein JavaScript |
| `assets/screenshots/*.svg` | App-Ansichten der Screenshot-Sektion (Treffen, Spiel eintragen, Spielerprofil) |
| `assets/badges/*.svg` | App-Store-Abzeichen von Apple, unverändert – dunkle Variante im Hero, helle im Abschluss-CTA |
| `assets/og/og-image.jpg` | Social-Vorschaubild (1200 × 630) für Open Graph und Twitter Card |
| `assets/og/og-vorlage.html` | Quelle des Vorschaubilds – wird nicht verlinkt |
| `assets/og/render-og.mjs` | Rendert die Vorlage zu `og-image.jpg` |
| `datenschutz.html`, `impressum.html`, `support.html` | Bestehende Seiten, unverändert |
| `robots.txt`, `sitemap.xml` | Suchmaschinen-Basics |
| `logo.svg`, `logo.png`, `apple-touch-icon.png` | App-Icon, Favicon, Social-Preview |

App-Store-Link: <https://apps.apple.com/de/app/schafkopf-tracker/id6790808695>

Inhalte, die bei Änderungen an der App mitgepflegt werden müssen: die
Spielarten-Zeile und die Statistik-Sektion in `index.html`, der Abschnitt
„Kostenlos & Premium“ samt Preis (Karten-Badge, Einleitungstext und `offers`
im JSON-LD) sowie die drei Screenshots.

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
