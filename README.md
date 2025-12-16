# ID GROUP - Prototype site corporate (Phase 1)

Prototype Next.js (App Router) + TypeScript + Tailwind + next-intl pour un site vitrine corporate trilingue (FR/EN/DE) orienté solutions.

## Démarrage rapide

> Le registre npm n’est pas accessible dans l’environnement actuel. Les dépendances sont listées dans `package.json` et peuvent être installées dans un environnement connecté :
>
> ```bash
> npm install
> npm run dev
> ```
>
> L’application expose les locales sous `/fr`, `/en`, `/de` (redirection automatique depuis `/`).

## Arborescence fonctionnelle

- `/[locale]/` : homepage avec slider 3 volets, preuves, Wormhout, Positiv’ID, actualités, équipe.
- `/[locale]/solutions` : accès aux 3 univers.
- `/[locale]/solutions/[home|pro|agri]` : hero croquis + hotspots interactifs + cas clients.
- `/[locale]/le-groupe` : mission, histoire, savoir-faire, équipe.
- `/[locale]/rse` : Positiv’ID, jauges, téléchargements.
- `/[locale]/actualites` + `/[locale]/actualites/[slug]` : mock blog / cas clients (MDX-ready).
- `/[locale]/contact` : formulaire qualifiant.
- `/[locale]/espace-client` : passerelle Phase 2 (login/SSO placeholder).
- `/robots.txt`, `/sitemap.xml` : SEO technique (hreflang préparé via next-intl).
- `/seo-migration/` : inventaire d’URLs et guide pour redirections 301.

## Internationalisation
- `next-intl` + middleware pour forcer les préfixes de langue.
- Messages FR/EN/DE dans `src/messages` (mock), faciles à brancher sur un CMS headless.

## Contenu mock & composants clés
- Données structurées dans `src/content` (univers, articles, équipe, RSE…).
- Composants : `HeroSlider`, `SketchHotspots`, `ProofPoints`, `KpiGauge` (jauges RSE), `ArticleCard` (simplifié dans `ArticlesPreview`), `TeamFunFacts`, `CTAButton`, `Header`/`Footer`.
- Direction artistique “croquis/trait” : bordures sketch, aplats colorés par univers (orange/bleu/vert).

## Tests & accessibilité
- Composants focusable (`focus-ring`), CTA Espace Client visible dans le header.
- Hotspots navigables au clavier (boutons). Alt text prévu pour images croquis (mock pour l’instant).

## SEO / migration
- Métadonnées de base dans `src/content/seo.ts` (OpenGraph, canonical, hreflang).
- Dossier `seo-migration` pour préparer le mapping 301 (Phase migration SEO).

## Prochaines itérations possibles
- Brancher un CMS headless (ex. directus, prismic) ou fichiers MDX pour les actualités.
- Ajouter des visuels croquis réels et animations pour le slider/hotspots.
- Intégrer l’authentification SSO pour l’espace client (Phase 2) et la plateforme marchande (Phase 3).
