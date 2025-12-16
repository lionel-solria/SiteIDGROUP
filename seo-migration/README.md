# Préparer les redirections 301

1. Complétez `url-inventory.csv` avec l’inventaire complet des anciennes URLs (une par ligne).
2. Renseignez `redirect-map.csv` avec la correspondance `old_url`, `new_url` et `type` (généralement 301).
3. Priorisez un mapping page à page : rediriger vers la page la plus pertinente (pas vers la home par défaut).
4. Déployez la table de redirection dans votre CDN/proxy ou via votre serveur (Nginx/Next middleware) lors du go-live.
5. Vérifiez les hreflang et canonical sur le nouveau domaine avant d’activer les redirections définitives.
