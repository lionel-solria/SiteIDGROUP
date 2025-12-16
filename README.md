# ID GROUP – Prototype Next.js (Phase 1)

Prototype corporate trilingue (FR/EN/DE) pour ID GROUP. Stack Next.js App Router + TypeScript + Tailwind + next-intl. Contenus mock et structure pensée pour itérations rapides.

## Prérequis
- Node.js 20+
- npm (ou pnpm/yarn si vous préférez)

## Installation
```
npm install
npm run dev
```
Puis ouvrir http://localhost:3000/fr (redirect locale automatique via middleware).

## Scripts
- `npm run dev` : serveur de dev
- `npm run build` : build de prod
- `npm run start` : démarrage du build
- `npm run lint` : lint Next/Eslint

## I18n
- next-intl avec middleware : routes `/fr`, `/en`, `/de`.
- Messages localisés dans `messages/*.json`.
- `next.config.mjs` applique le plugin next-intl.

## Contenus & données mock
- Données structurées dans `data/content.ts` (univers, hotspots, actus, RSE…).
- Assets dans `public/images` et `public/logos`.

## Arborescence principale
- `app/[locale]/page.tsx` : homepage avec slider volets, preuves, teaser RSE, actualités, équipe.
- `app/[locale]/solutions/*` : landing et pages univers avec hotspots.
- `app/[locale]/rse` : page engagements + jauges.
- `app/[locale]/actualites` : listing + page article mock.
- `app/[locale]/le-groupe` : mission, histoire, sites, équipe.
- `app/[locale]/contact` : formulaire qualifiant.
- `app/[locale]/espace-client` : passerelle Phase 2.

## SEO
- `app/sitemap.ts` et `app/robots.ts` configurés.
- metadata/hreflang générés dans `app/[locale]/layout.tsx`.
- Dossier `seo-migration/` pour préparer inventaire et mapping 301.

## Accès rapide
- CTA Espace Client dans le header + hero + univers.
- Slider desktop (3 lames) et carrousel mobile pour la home.
- Hotspots interactifs sur une page univers.

## Limitations connues
- Contenu EN/DE provisoire.
- Portail client non fonctionnel (placeholder Phase 2).
- Aucune connexion à un CMS pour l'instant, prévu pour itérations futures.
