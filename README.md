# ID GROUP – Prototype site corporate (Next.js)

## Prérequis
- Node.js 18+
- npm (ou pnpm/yarn) avec accès au registry

## Installation
```bash
npm install
npm run dev
```

Le site est disponible en `/fr`, `/en`, `/de` grâce à `next-intl` et la middleware qui préfixe les locales.

## Scripts
- `npm run dev` : lancement local
- `npm run build` : build de production
- `npm start` : lancement du build
- `npm run lint` : lint Next.js

## Contenus mock
- Données structurées dans `content/site.ts` (univers, hotspots, actualités, équipe, jauges RSE).
- Traductions dans `messages/*.json`.
- Section SEO migration : `seo-migration/` avec inventaire et mapping de redirections.

## Structure clés
- `app/[locale]/layout.tsx` : layout localisé, header/footer, hreflang.
- `app/[locale]/(routes)/page.tsx` : homepage avec hero slider 3 volets.
- `app/[locale]/(routes)/univers/[id]/page.tsx` : page univers avec croquis hotspots.
- `app/[locale]/(routes)/rse/page.tsx` : page RSE + jauges.
- `app/[locale]/(routes)/actualites/` : listing + détail article.
- `app/[locale]/(routes)/espace-client/page.tsx` : passerelle vers portail Phase 2.

## Accessibilité et SEO
- Balises aria pour hotspots, navigation clavier sur menus/boutons.
- `app/sitemap.ts` et `app/robots.ts` fournissent le socle SEO.
- Hero slider responsive (volets desktop, pile mobile) et CTA "Espace Client" présent.

## Limitations connues
- Les dépendances ne sont pas installées dans cet environnement (403 registry). Lancez `npm install` en local avec accès au registry.
- Le portail client (Phase 2) est un placeholder : à raccorder à l’authentification/SSO ultérieurement.
