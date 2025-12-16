import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Le Groupe | ID GROUP',
  description: 'Mission, valeurs, histoire et sites industriels ID GROUP.'
};

export default function GroupPage() {
  return (
    <div className="container-page mt-10 space-y-8">
      <header>
        <p className="text-xs uppercase tracking-wide text-gray-500">ID GROUP</p>
        <h1 className="text-3xl font-bold text-brand.ink">Mission & valeurs</h1>
        <p className="mt-2 text-gray-700">
          Industrie humaniste, orientée solution, qui protège le vivant et accélère les projets de nos clients.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-5 shadow-card">
          <h3 className="text-lg font-semibold text-brand.ink">Histoire</h3>
          <p className="mt-2 text-gray-700">40 ans d\'innovation matériaux, un ancrage à Wormhout et un réseau européen.</p>
        </div>
        <div className="rounded-2xl border bg-white p-5 shadow-card">
          <h3 className="text-lg font-semibold text-brand.ink">Savoir-faire</h3>
          <p className="mt-2 text-gray-700">Découpe, vulcanisation, assemblage et contrôle qualité intégrés.</p>
        </div>
        <div className="rounded-2xl border bg-white p-5 shadow-card">
          <h3 className="text-lg font-semibold text-brand.ink">Sites</h3>
          <p className="mt-2 text-gray-700">Alpespace (siège) et Wormhout (industrie) en synergie.</p>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-6 shadow-card">
        <h3 className="text-xl font-semibold text-brand.ink">Équipe</h3>
        <p className="mt-2 text-gray-700">Des profils complémentaires : designers, ingénieurs, experts terrain.</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
          <li>Culture du croquis pour matérialiser vite les idées.</li>
          <li>Visites site clients et co-conception.</li>
          <li>Accompagnement de la prise en main jusqu\'au support.</li>
        </ul>
      </section>
    </div>
  );
}
