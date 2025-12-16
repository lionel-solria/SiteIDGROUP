# Préparer les redirections 301

1. Exporter l'inventaire complet des anciennes URLs dans `url-inventory.csv` (une par ligne).
2. Compléter `redirect-map.csv` en choisissant pour chaque ancienne URL la page la plus pertinente (éviter de rediriger vers la home si une page équivalente existe).
3. Vérifier que chaque cible existe bien dans le nouveau site (ex. `/fr/solutions/id-home`).
4. Déployer les règles 301 côté reverse proxy ou CDN, puis tester avec `curl -I`.
5. Conserver l'historique de mapping pour suivre les migrations futures.
