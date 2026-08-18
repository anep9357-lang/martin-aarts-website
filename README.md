# Martin Aarts — website

Nieuwe website voor Martin Aarts GWW, Agrarisch & Transport Service.
Gebouwd met [Astro](https://astro.build).

## Status

**Fase 1 — technisch fundament.** Zie `PLAN.md` voor de volledige fasering.

Wat werkt al:
- Projectstructuur, design tokens (`src/styles/tokens.css`), basiscomponenten
  (`Header`, `Footer`, `Button`, `Card`, `IconBadge`, iconenset).
- Routing-skelet voor de hele sitemap — elke pagina bestaat en rendert,
  maar de meeste zijn nog een korte stub met een "Fase X"-markering.
- De homepage (`/`) toont de werkende basis (typografie, knoppen,
  dienstenkaarten) — dit is nog niet de volledig ontworpen homepage uit
  de goedgekeurde Visual Direction; die volgt in Fase 2.

Wat nog moet gebeuren, per fase, staat in `PLAN.md`.

## Ontwikkelen

```bash
npm install
npm run dev
```

## Bouwen

```bash
npm run build
npm run preview
```
