# ID GROUP - Site Corporate V1

Ce projet est une version statique (HTML/CSS/JS) du site corporate ID GROUP.

## Structure

*   `index.html` : Page d'accueil avec slider 3 volets.
*   `le-groupe.html`, `rse.html`, `solutions.html` : Pages institutionnelles.
*   `id-home.html`, `id-pro.html`, `id-agri.html` : Pages univers.
*   `actus.html` et `article.html` : Blog/Actualités (contenu dynamique via JSON).
*   `contact.html`, `espace-client.html`.
*   `data/` : Contient les fichiers de traduction et de contenu (`content.fr.json`, etc.).
*   `css/` : Styles (variables, layout).
*   `js/` : Logique (i18n, slider, menu mobile).

## Installation & Lancement

Ce site ne nécessite **aucune installation** (pas de `npm install`).

### Option A : Serveur local (Recommandé)
Les navigateurs modernes (Chrome, Edge) bloquent parfois le chargement de fichiers JSON (`fetch`) via le protocole `file://` pour des raisons de sécurité (CORS).
Il est recommandé d'utiliser un petit serveur statique.

Si vous avez Python installé :
```bash
python3 -m http.server
# Puis ouvrir http://localhost:8000
```

Si vous utilisez VS Code :
Utilisez l'extension **Live Server**.

### Option B : Firefox
Firefox est généralement plus permissif avec les requêtes locales. Vous pouvez essayer d'ouvrir `index.html` directement.

### Option C : Hébergement
Déposez simplement tout le dossier sur un hébergement statique (Apache, Nginx, Netlify, Vercel, GitHub Pages).

## Internationalisation (i18n)

Le site gère FR, EN, DE.
*   Le contenu est chargé depuis `/data/content.xx.json`.
*   La langue est détectée via l'URL (`?lang=en`), le localStorage, ou le navigateur.
*   Le sélecteur de langue recharge la page avec le paramètre GET approprié pour assurer un référencement propre (si indexé).

## SEO
*   `sitemap.xml` et `robots.txt` inclus.
*   Dossier `/seo-migration/` contient les documents pour la migration (redirect map).
