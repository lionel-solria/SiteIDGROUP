export default function ContactPage() {
  return (
    <div className="container-page mt-10">
      <header className="mb-6">
        <p className="text-xs uppercase tracking-wide text-gray-500">Contact</p>
        <h1 className="text-3xl font-bold text-brand.ink">Discutons de votre environnement</h1>
        <p className="mt-2 text-gray-700">Profil, besoin, domaine : un formulaire pensé pour qualifier vite.</p>
      </header>
      <form className="grid gap-4 rounded-3xl bg-white p-6 shadow-card md:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm font-semibold text-brand.ink">
          Profil
          <select className="rounded-lg border px-3 py-2 text-gray-700">
            <option>Exploitant agricole</option>
            <option>Responsable maintenance</option>
            <option>Architecte / MOE</option>
            <option>Collectivité</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm font-semibold text-brand.ink">
          Domaine
          <select className="rounded-lg border px-3 py-2 text-gray-700">
            <option>Home</option>
            <option>Pro</option>
            <option>Agri</option>
          </select>
        </label>
        <label className="flex flex-col gap-1 text-sm font-semibold text-brand.ink md:col-span-2">
          Besoin
          <textarea className="min-h-[120px] rounded-lg border px-3 py-2 text-gray-700" placeholder="Décrivez votre projet" />
        </label>
        <div className="md:col-span-2">
          <button type="submit" className="rounded-full bg-brand.orange px-4 py-2 text-sm font-semibold text-white shadow-card">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
