# Plan van aanpak

Volgorde zoals goedgekeurd:

```
FASE 0 — Data en beslissingen
FASE 0.5 — Visual Direction + navigeerbaar prototype        ✅ afgerond, goedgekeurd
FASE 1 — Technisch fundament                                ✅ afgerond, goedgekeurd
FASE 2 — Home + Diensten (volledig ontworpen)                ✅ afgerond, goedgekeurd
FASE 3 — Projecten + Over ons + Apparatuur + FAQ             ✅ afgerond, goedgekeurd
FASE 4 — Contact + Formulieren + Privacyverklaring            ✅ afgerond, goedgekeurd
FASE 5 — SEO + Performance                                    ✅ afgerond, goedgekeurd
FASE 6 — QA + lancering                                       🔵 dit werk
```

Tussendoor (na Fase 4-goedkeuring): de echte logo is aangeleverd en
vervangt nu het abstracte kompas-icoon in header/footer/favicon —
zie header/footer/favicon hieronder.

## Fase 1 — wat dit oplevert

- Astro-project, geen framework-overkill — statische HTML, componenten
  waar herbruikbaarheid loont.
- `src/styles/tokens.css` — het enige bestand waar merkkleuren als
  hex-waarde mogen staan. Alle andere bestanden lezen via `var(--...)`.
- Basiscomponenten: `Header`, `Footer`, `Button`, `Card`, `IconBadge`,
  `Icon`/`IconSprite`.
- Routing-skelet voor de volledige sitemap (zie hieronder) — inclusief
  een dynamische route per dienst (`/diensten/[slug]`).
- Nog GEEN eindtekst, geen echte foto's, geen formulierlogica — dat is
  latere fases.

## Sitemap

- `/` — homepage ✅ (Fase 2)
- `/diensten` — overzicht ✅ (Fase 2)
- `/diensten/[slug]` × 6 — één per dienst ✅ (Fase 2)
- `/projecten` — overzicht ✅ (Fase 3)
- `/projecten/[slug]` × 4 — case study per project ✅ (Fase 3)
- `/apparatuur` ✅ (Fase 3)
- `/over-ons` ✅ (Fase 3)
- `/faq` ✅ (Fase 3)
- `/contact` ✅ (Fase 4)
- `/privacyverklaring` ✅ (Fase 4)
- `/404`

## Fase 3 — wat dit oplevert

- `/projecten`: overzicht van alle projecten (nu 4, inclusief een nieuw
  toegevoegde case "Inmeten en uitzetten sportveld" — gebaseerd op
  echte foto's die na Fase 2 zijn aangeleverd).
- `/projecten/[slug]`: volledige case-study-pagina per project, exact
  volgens het goedgekeurde Project-prototype uit Fase 0.5 — hero met
  tags/opdrachtgever/locatie/dienst/duur, coverfoto, verhaalrail
  (Uitdaging → Meting → Technologie → Resultaat) met foto's,
  specificatietabel, resultaatcijfers en leverbare bestanden,
  gerelateerde projecten, CTA-band.
- `/apparatuur`: volledige instrumentenpagina — elk instrument met
  echte foto, beschrijving en toepassingen (`src/data/equipment.ts`,
  gedeeld met de homepage-strip).
- `/over-ons`: bedrijfsverhaal, kernwaarden, sectoren.
- `/faq`: uitgebreide FAQ in drie categorieën (herbruikt
  `FaqAccordion`).
- Nieuwe gedeelde utility-klasse `.tbc` verplaatst naar `base.css`
  (was gedupliceerd per pagina).
- `public/images/gallery/`: 11 nieuwe, geoptimaliseerde foto's
  geselecteerd uit de 48 die na Fase 2 zijn aangeleverd — nu verwerkt
  in projectfoto's en de Over-ons-hero.

## Fase 4 — wat dit oplevert

- `/contact`: volledig offerteformulier (naam, bedrijf, e-mail,
  telefoon, type dienst, locatie, periode, omschrijving) +
  contactgegevens-zijbalk + kaartinbedding (Google Maps, geen API-key
  nodig) + mini-FAQ. Formulier is client-side gevalideerd (verplichte
  velden, privacy-akkoord verplicht) en verstuurt via `fetch()` naar
  Formspree, met inline succes-/foutmelding — geen redirect naar een
  externe pagina.
  **ACTIE VOOR LANCERING:** `FORMSPREE_ENDPOINT` in
  `src/pages/contact.astro` bevat nu een placeholder
  (`https://formspree.io/f/TBC`). Maak gratis een Formspree-account aan
  met info@martinaarts.xyz, maak een formulier aan, en vervang de
  placeholder door de echte formulier-URL — dan werkt het formulier.
- `/privacyverklaring`: volledige AVG/GDPR-privacyverklaring — welke
  gegevens, waarvoor, Formspree als verwerker, bewaartermijn,
  cookiebeleid (momenteel geen tracking), rechten van betrokkenen.
  KVK-nummer en BTW-nummer staan als GEGEVEN NOG TE BEVESTIGEN.
- Footer linkt nu naar de privacyverklaring.
- Nieuw `clock`-icoon toegevoegd aan de icon-sprite.

## Fase 5 — wat dit oplevert

- `@astrojs/sitemap` toegevoegd — genereert automatisch
  `sitemap-index.xml` / `sitemap-0.xml` bij elke build, met alle 18
  echte pagina's (404 automatisch uitgesloten).
- `public/robots.txt` — staat alle crawlers toe, verwijst naar de
  sitemap.
- Echte, merk-consistente Open Graph-afbeelding (`og-default.jpg`,
  1200×630) — verving een dode verwijzing naar een niet-bestaand
  bestand. Gebruikt de echte logo, hero-foto en het kleursysteem.
- `ProfessionalService`-structured data (JSON-LD) op elke pagina —
  alleen bevestigde gegevens: naam, adres, telefoon, e-mail, LinkedIn.
  Geen openingstijden/prijsklasse/beoordelingen (nog niet bevestigd).
- `/404` krijgt nu `noindex` (mag niet in zoekresultaten verschijnen).
- **Echte performance-bugfix:** `PhotoFrame` zette élke foto op
  `loading="lazy"`, ook de hero-afbeelding die meteen zichtbaar is bij
  het laden van de pagina — dat vertraagt de Largest Contentful Paint
  onnodig. Nieuwe `priority`-prop toegevoegd en gezet op de vier
  above-the-fold hero's (Home, Diensten-detail, Project-detail,
  Over ons); alle overige foto's blijven lazy (correct voor
  onder-de-vouw content).
- `@astrojs/sitemap` v3.7.x (laatste) is gebouwd tegen Astro 6 en
  crashte op deze Astro 4.16-basis; v3.2.1 is wel compatibel en
  gebruikt.
- Bekende, niet-urgente technische schuld: `npm audit` toont CVE's in
  de gepinde Astro 4.16-lijn, maar die zitten allemaal in
  dev-server/SSR/middleware/adapter-functionaliteit die deze site niet
  gebruikt (volledig statische build, geen server). Een upgrade naar
  Astro 7 is een breaking change en wordt bewust niet nu gedaan —
  overweeg dit bij een toekomstig onderhoudsmoment.

## Fase 6 — wat dit oplevert

**QA-controle uitgevoerd op alle 19 pagina's:**
- Alle 25 interne links (nav, footer, CTA's, kruisverwijzingen) geven
  200 OK — geen dode links.
- Elke pagina heeft precies één `<h1>` (correcte kopstructuur voor
  toegankelijkheid en SEO).
- Elke `<img>` heeft een `alt`-attribuut (leeg `alt=""` waar decoratief,
  beschrijvend waar relevant).
- Alle `<meta name="description">` zijn uniek en volledig ingevuld,
  geen duplicaten.
- Geen restanten van `undefined`/`[object Object]`/`NaN` of andere
  render-artefacten in de pagina's.
- Ongebruikt `PhaseNotice`-component verwijderd (geen enkele pagina
  toont nog een "volgt in Fase X"-melding — alles is af).

**Live gezet + eerste ronde livefeedback verwerkt:**
- Site staat live op `martin-aarts-website.netlify.app`, gekoppeld aan
  de GitHub-repo — elke upload naar `main` bouwt automatisch opnieuw.
- Merktagline "Precisie, betrouwbaarheid en vakmanschap in elk
  project." toegevoegd aan de footer (bestaande zin van de klant,
  overgenomen van de huidige live site).
- Credit "Ontwikkeld door G.Passione" toegevoegd aan de footer, op
  verzoek van de klant (was `door`, niet `por`, na bevestiging).
- Eén foto verwijderd op verzoek: een privélocatie waarvoor nog geen
  toestemming is — zowel uit `projects.ts` als het bestand zelf uit
  `public/images/gallery/` gehaald.
- Coverfoto van "Inmeten ondergrondse infrastructuur" vervangen door
  een sterkere, bredere foto uit dezelfde locatie (haven-/terminalsite)
  die eerder nog niet gebruikt was.
- Nieuw project toegevoegd: "Topografische inmeting bij
  nieuwbouwlocatie" — bij nader onderzoek bleek een deel van de 48
  aangeleverde foto's een echt andere locatie te tonen (woonwijk in
  aanbouw langs een kanaal, geen haventerrein) — verdiende een eigen
  case in plaats van hergebruikte losse foto's.

**Portfolio flink uitgebreid met 6 nieuwe projecten** (klant leverde 45
foto's aan, georganiseerd in 10 mappen per project):
- "Uitzetwerk fundering technische cabine" — funderingspunten en
  hoogtecontrole voor een technische cabine op een havenlocatie.
- "Topografische inmeting bedrijventerrein"
- "Topografische inmeting langs fietspad"
- "Topografische inmeting terreinafzetting"
- "Herinrichting kruispunt" — luchtfoto's beschikbaar gesteld door de
  gemeente (geen eigen dronefoto's van Martin Aarts).
- "Wegverharding — asfaltering en profielcontrole" — inclusief een
  opname op een brug met stadsskyline.

Daarnaast extra foto's toegevoegd aan de bestaande cases
"Inmeten en uitzetten sportveld" en "Topografische inmeting bij
nieuwbouwlocatie" (bleken uit dezelfde fotolevering te komen).

Twee door de klant getoonde projecten (kruispunt met rode
vrachtwagens/gestreepte palen, en een woonstraat met heggen knippen)
zijn niet toegevoegd — de bijbehorende foto's waren niet vindbaar om
te uploaden.

Totaal nu 11 projecten in de portfolio (was 3 bij afronding van Fase 3).

**Twee echte datapunten bevestigd door de klant** (niet uit een
AI-zoekresultaat overgenomen — expliciet nagevraagd en bevestigd):
- Actief sinds **2017** — nu zichtbaar op Home (hero + trustbar) en
  Over ons, en toegevoegd aan de JSON-LD structured data
  (`foundingDate`).
- KVK-nummer **69194963** — nu zichtbaar in de Privacyverklaring.
- BTW-nummer blijft GEGEVEN NOG TE BEVESTIGEN (niet gevraagd/bevestigd).

**Live feedback op de gepubliceerde site verwerkt:**
- Twee icoon-bugs gecorrigeerd: het "total-station"-icoon (dienst
  Uitzetwerk) zag er per ongeluk uit als een lopend persoon, en het
  "scanner"-icoon (3D-laserscanning) zag er per ongeluk uit als een
  hangslot — beide paden in `IconSprite.astro` herzien tot duidelijk
  herkenbare vormen (statief+instrument, en scan-signaal).
- **Nieuwe 7e dienst toegevoegd: "Projectontwerp & tekenwerk"**
  (`/diensten/projectontwerp`) — de klant doet naast het meetwerk ook
  zelf het CAD-tekenwerk, het projectontwerp voor GWW-/bouwprojecten
  en de uitzetplannen; dit stond nog nergens op de site. Toegevoegd
  aan de Diensten-grid, de footer-links en de "aantal diensten"-tellers
  op Home (6 → 7). Nog geen eigen foto beschikbaar — eerlijke
  placeholder in plaats van een gekunstelde/geleende foto.
- Bugfix: het "Dienst X / 06"-label op de dienst-detailpagina's had het
  totaal aantal diensten hardcoded staan; dit brak zodra een dienst
  werd toegevoegd. Nu berekend uit `services.length`, dus toekomstbestendig.
- Footer-onderbalk (copyright + Privacyverklaring-link + social-iconen)
  van links/rechts-verdeeld naar gecentreerd op verzoek van de klant.
- Het WhatsApp-icoon was een lege, abstracte contourvorm — vervangen
  door een herkenbare ballon-met-telefoon-vorm (nu overal consistent:
  header, footer, contactpagina, want alle drie lezen uit dezelfde
  `ic-wa`-sprite-definitie).
- **Echte bugfix achter de "centrering werkt niet"-melding:** de
  centrering van `.footer-tagline` en `.footer-credit` (beide `<p>`-
  tags) werd overschreven door de globale regel `p { max-width: 65ch }`
  in `base.css`. Een `<p>` zonder expliciete breedte krimpt mee tot die
  65ch, en blijft daarbinnen links uitgelijnd tenzij er ook
  `margin: 0 auto` bij staat — `text-align: center` centreert dan alleen
  de tekst binnen die te smalle, niet-gecentreerde doos. Opgelost met
  `max-width: none` op beide klassen.

**Hosting/lancering:**
- `netlify.toml` toegevoegd — kant-en-klare deployconfiguratie
  (buildcommando, publish-map `dist`, beveiligingsheaders, langdurige
  cache voor afbeeldingen).
- **Aanbevolen pad:** Netlify, gratis tier, gekoppeld aan de GitHub-
  repository. Voordeel: elke keer dat nieuwe bestanden naar de
  GitHub-repo geüpload worden (zoals nu al gebeurt), bouwt en
  publiceert Netlify de site automatisch opnieuw — geen aparte
  deploystap nodig.
- Definitieve DNS-koppeling (mijndomein → Netlify) is een handeling die
  de gebruiker zelf moet doen bij mijndomein — buiten bereik van deze
  sessie, maar goed gedocumenteerd in het antwoord aan de gebruiker.

**Nog open vóór echte livegang:**
1. `FORMSPREE_ENDPOINT` in `src/pages/contact.astro` koppelen aan een
   echt Formspree-formulier (zie Fase 4).
2. Netlify-account aanmaken + repo koppelen + domein overzetten
   (zie hierboven).
3. Alle "GEGEVEN NOG TE BEVESTIGEN"-datapunten hieronder invullen
   zodra bekend — dit kan ook ná livegang, stuk voor stuk.

## Open datapunten (uit Fase 0 — nog steeds openstaand)

Zie de gepubliceerde fotolijst voor de volledige tabel. Kort:
aantal projecten afgerond (levenslange teller, niet de portfolio),
werkgebied, reactietermijn, openingstijden, telefoon (indien anders
dan WhatsApp), certificeringen, klantgegevens per projectcase, hosting
van het huidige domein, BTW-nummer.

✅ Bevestigd: actief sinds 2017, KVK-nummer 69194963 (zie hierboven).

## Bekende technische keuzes, nog te bevestigen

- Formulierverwerking: ✅ besloten in Fase 4 — Formspree (werkt
  onafhankelijk van hosting). Formulier-ID nog te koppelen, zie
  Fase 4 hierboven.
- Hosting/deploy van de nieuwe site: nog open — gebruiker host het
  huidige domein bij mijndomein; definitieve hostingkeuze voor de
  nieuwe Astro-site volgt in Fase 6 (QA + lancering).
