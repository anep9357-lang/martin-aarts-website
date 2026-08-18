# Plan van aanpak

Volgorde zoals goedgekeurd:

```
FASE 0 — Data en beslissingen
FASE 0.5 — Visual Direction + navigeerbaar prototype        ✅ afgerond, goedgekeurd
FASE 1 — Technisch fundament                                🔵 dit werk
FASE 2 — Home + Diensten (volledig ontworpen)
FASE 3 — Projecten + Over ons + Apparatuur + FAQ
FASE 4 — Contact + Formulieren + Privacyverklaring
FASE 5 — SEO + Performance
FASE 6 — QA + lancering
```

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

## Sitemap (Fase 1 — routes bestaan, inhoud volgt)

- `/` — homepage (basis werkt, volledig ontwerp in Fase 2)
- `/diensten` — overzicht (Fase 2)
- `/diensten/[slug]` × 6 — één per dienst (Fase 2)
- `/projecten` — overzicht (Fase 3)
- `/apparatuur` (Fase 3)
- `/over-ons` (Fase 3)
- `/faq` (Fase 3)
- `/contact` — basis werkt, formulier in Fase 4
- `/privacyverklaring` (Fase 4, verplicht voor lancering)
- `/404`

## Open datapunten (uit Fase 0 — nog steeds openstaand)

Zie de gepubliceerde fotolijst voor de volledige tabel. Kort:
jaren ervaring, aantal projecten, werkgebied, reactietermijn,
openingstijden, telefoon (indien anders dan WhatsApp), certificeringen,
klantgegevens per projectcase, hosting van het huidige domein.

## Bekende technische keuzes, nog te bevestigen

- Formulierverwerking (Fase 4): een serverloze oplossing (bijv. Netlify
  Forms/Formspree of een kleine functie) — vereist te weten waar het
  domein gehost wordt.
- Hosting/deploy van de nieuwe site: nog open, hangt af van het
  antwoord op de hosting-vraag hierboven.
