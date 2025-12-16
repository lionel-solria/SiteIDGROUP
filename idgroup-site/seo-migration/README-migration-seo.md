# Migration SEO

Ce dossier contient les éléments nécessaires pour gérer la migration SEO vers le nouveau site.

## Redirect Map (301)

Le fichier `redirect-map.csv` doit être complété avec les anciennes URLs et leur correspondance sur le nouveau site.

Format :
`Old URL, New URL`

Exemple :
`/ancien-site/nous-connaitre, /le-groupe.html`
`/ancien-site/agriculture-durable, /id-agri.html`

## Instructions

1. Lister toutes les URLs de l'ancien site (via Screaming Frog ou Search Console).
2. Mapper chaque URL vers la page la plus pertinente de la V1.
3. Configurer les redirections 301 sur le serveur (fichier .htaccess pour Apache ou config Nginx).
