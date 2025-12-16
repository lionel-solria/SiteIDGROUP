# ID GROUP – Prototype Next.js (Phase 1)

Prototype mobile-first du site corporate ID GROUP (Phase 1), avec App Router, i18n trilingue et données mock pour itérations rapides.

## Stack
- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS pour le design system
- next-intl pour l'i18n (FR/EN/DE) et les routes localisées

## Démarrage
```
npm install
npm run dev
```
L'application démarre sur http://localhost:3000 (redirection automatique vers /fr par défaut).

## Arborescence clé
- `app/[locale]/` : pages localisées (home, univers, RSE, actualités, contact, espace client)
- `components/` : composants réutilisables (HeroSlider, SketchHotspots, etc.)
- `data/mock/` : contenus mock (univers, hotspots, actus, KPI)
- `messages/` : fichiers de traduction JSON
- `public/seo-migration/` : inventaire & mapping SEO placeholders

## I18n
- Locales : fr (défaut), en, de
- Middleware next-intl pour la détection et les hreflang via `generateMetadata`

## SEO & accessibilité
- Metadata de base (OG, canonical, hreflang)
- Sitemap et robots statiques
- Balises aria sur hotspots, navigation clavier, contrastes renforcés

## Contenu mock & évolutivité CMS
- Données structurées dans `data/mock/content.ts`
- Pages actualités et articles prêtes pour intégration MDX/CMS headless

## Scripts
- `npm run dev` : dev server
- `npm run build` : build de production
- `npm run start` : start en production
- `npm run lint` : lint Next.js

## SEO migration (préparation)
Dans `public/seo-migration/` :
- `url-inventory.csv` : inventaire des URLs existantes
- `redirect-map.csv` : mapping 301 vers les nouvelles pages
- `README.md` : instructions pour dérouler la migration
