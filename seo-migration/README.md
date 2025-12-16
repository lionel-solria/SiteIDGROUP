# Mécanique de migration SEO (301)

1. Exporter l’inventaire des anciennes URLs (analytics, Search Console, logs) dans `url-inventory.csv`.
2. Pour chaque ancienne URL, trouver la page la plus pertinente dans la nouvelle arborescence (éviter les redirections vers la home).
3. Renseigner `redirect-map.csv` avec `from` (ancienne URL absolue) et `to` (nouvelle URL absolue). Utiliser un statut 301 permanent.
4. Déployer les redirections via le serveur (nginx, CDN) ou middleware edge. Vérifier qu’aucune boucle n’est créée.
5. Tester l’échantillon critique (pages à forte valeur SEO, ex. “tapis logette”) et contrôler le budget de crawl après mise en production.
