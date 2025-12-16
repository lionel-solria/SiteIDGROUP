import KpiGauge from '@/components/KpiGauge';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'RSE / Positiv\'ID | ID GROUP',
  description: 'Engagements RSE, indicateurs Positiv\'ID et téléchargements.'
};

export default function RsePage() {
  return (
    <div className="container-page mt-10 space-y-8">
      <header>
        <p className="text-xs uppercase tracking-wide text-gray-500">Positiv'ID</p>
        <h1 className="text-3xl font-bold text-brand.ink">Nos engagements RSE</h1>
        <p className="mt-2 text-gray-700">Une approche mesurable, ancrée dans les usages et les territoires.</p>
      </header>

      <section className="space-y-4 rounded-3xl bg-white p-6 shadow-card">
        <h3 className="text-xl font-semibold text-brand.ink">Indicateurs clés</h3>
        <KpiGauge />
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-5 shadow-card">
          <h3 className="text-lg font-semibold text-brand.ink">Climat</h3>
          <p className="mt-2 text-gray-700">Bilan carbone annuel, mobilité douce, achat énergie verte.</p>
        </div>
        <div className="rounded-2xl border bg-white p-5 shadow-card">
          <h3 className="text-lg font-semibold text-brand.ink">Ressources</h3>
          <p className="mt-2 text-gray-700">Recyclage des chutes, sourcing matières responsables.</p>
        </div>
        <div className="rounded-2xl border bg-white p-5 shadow-card">
          <h3 className="text-lg font-semibold text-brand.ink">Sociétal</h3>
          <p className="mt-2 text-gray-700">Formation sécurité, inclusion et achats locaux.</p>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-6 shadow-card">
        <h3 className="text-xl font-semibold text-brand.ink">Certificats & ressources</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
          <li>Fiches techniques et certificats à télécharger (placeholders).</li>
          <li>Prochaines publications : rapport RSE, plan d'action Positiv'ID.</li>
        </ul>
      </section>
    </div>
  );
}
