# IAhora qué — Espacios para decidir

Landing pública del espacio **IAhora qué**: para CEOs y Founders que enfrentan la pregunta "IA, ¿ahora qué?".

🌐 **Live:** https://0rgan1co.github.io/iahoraque/

---

## Stack

- Next.js 16 (App Router) — export estático
- React 19
- Tailwind CSS v4
- Deploy: GitHub Pages vía GitHub Actions
- Booking: TidyCal (https://tidycal.com/roldanjorgex)

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Genera el sitio estático en `out/`.

## Deploy

Cada `git push` a `main` dispara el workflow `.github/workflows/deploy.yml` que buildea y publica a GitHub Pages.

Para configurar Pages en GitHub: **Settings → Pages → Source: GitHub Actions**.

## Estructura

```
src/
  app/
    layout.tsx          # Metadata + structured data
    page.tsx            # Composición de las 6 secciones + CTA
    sitemap.ts
    llms.txt/route.ts
  components/
    sections/           # Hero, Problem, WhatIs, Learnings, Process, Metrics, LeadForm
    structured-data/    # JSON-LD: Organization, Service, FAQ, HowTo
  lib/
    constants.ts        # SITE_CONFIG (incluye URL de TidyCal)
```

## Las 6 secciones

1. **Hero** — IAhora, ¿qué? + índice de las tres partes
2. **Problem** — La soledad del que decide (3 dolores)
3. **WhatIs** — Compartir para mejorar (3 dimensiones: adentro / el qué / afuera)
4. **Learnings** — La hipótesis H1
5. **Process** — Tres formas de empezar (1:1, grupos, viajes)
6. **Metrics** — Tres impactos
7. **LeadForm** — CTA con TidyCal
