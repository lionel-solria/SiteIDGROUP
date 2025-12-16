export default function EspaceClientPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sketch">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-600">Portail</p>
        <h1 className="text-3xl font-semibold text-slate-900">Espace client sécurisé</h1>
        <p className="text-slate-700">
          Accès privilégié pour nos clients : suivi des déploiements, documentation et support. Disponible en Phase 2 avec
          authentification sécurisée et SSO.
        </p>
      </div>
      <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 shadow-sketch text-center">
        <p className="text-sm text-slate-700">Placeholder login / SSO</p>
        <button className="mt-3 rounded-full bg-slate-900 px-4 py-2 text-white font-semibold sketch-border" disabled>
          Connexion (bientôt)
        </button>
        <p className="mt-2 text-sm text-slate-500">Pour toute question : support@id-group.example</p>
      </div>
    </div>
  );
}
