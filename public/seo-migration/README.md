# Préparation migration SEO

1. Compléter `url-inventory.csv` avec toutes les URLs existantes (crawl + logs).
2. Associer chaque ancienne URL à la page la plus pertinente dans `redirect-map.csv` (éviter les redirections vers la home sauf si nécessaire).
3. Mettre en place les 301 au niveau reverse-proxy / CDN lors du basculement de domaine.
4. Tester les chaînes de redirection et surveiller Search Console post-migration.
