export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sketch">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-600">Contact</p>
        <h1 className="text-3xl font-semibold text-slate-900">Parlons de votre besoin</h1>
        <p className="text-slate-700">Profil, besoin, univers : ce formulaire qualifie pour orienter vers la bonne équipe.</p>
      </div>
      <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sketch grid gap-4 md:grid-cols-2">
        <label className="flex flex-col text-sm text-slate-700">
          Nom et prénom
          <input className="mt-1 rounded-md border border-slate-300 p-2 focus-ring" placeholder="Vous" />
        </label>
        <label className="flex flex-col text-sm text-slate-700">
          Email
          <input className="mt-1 rounded-md border border-slate-300 p-2 focus-ring" placeholder="vous@email.com" />
        </label>
        <label className="flex flex-col text-sm text-slate-700">
          Type de profil
          <select className="mt-1 rounded-md border border-slate-300 p-2 focus-ring">
            <option>Exploitant agricole</option>
            <option>Responsable HSE / Facility</option>
            <option>Particulier</option>
            <option>Autre</option>
          </select>
        </label>
        <label className="flex flex-col text-sm text-slate-700">
          Univers ciblé
          <select className="mt-1 rounded-md border border-slate-300 p-2 focus-ring">
            <option>ID Home</option>
            <option>ID Pro</option>
            <option>ID Agri</option>
          </select>
        </label>
        <label className="md:col-span-2 flex flex-col text-sm text-slate-700">
          Besoin
          <textarea className="mt-1 rounded-md border border-slate-300 p-2 focus-ring" rows={4} placeholder="Décrivez votre projet" />
        </label>
        <button
          type="submit"
          className="md:col-span-2 rounded-full bg-slate-900 px-4 py-2 text-white font-semibold focus-ring sketch-border"
        >
          Envoyer la demande
        </button>
      </form>
    </div>
  );
}
