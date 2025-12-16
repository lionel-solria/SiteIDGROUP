import {rseTeaser} from '../../../../content/home';

export default function RsePage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sketch">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-600">RSE</p>
        <h1 className="text-3xl font-semibold text-slate-900">Positiv’ID</h1>
        <p className="text-slate-700">
          Programme RSE piloté par les preuves : circularité des matières, énergie maîtrisée, sécurité terrain et impact
          social. Préparé pour l’audit et la publication d’indicateurs.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {rseTeaser.gauges.map((gauge) => (
          <div key={gauge.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sketch text-center">
            <div className="text-3xl font-bold text-slate-900">{gauge.value}%</div>
            <p className="text-sm text-slate-600">{gauge.label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-4 shadow-sketch">
        <h3 className="font-semibold text-slate-900">Certifications et documents</h3>
        <ul className="list-disc pl-5 text-sm text-slate-700">
          <li>ISO 14001 (placeholder)</li>
          <li>Charte Positiv’ID (placeholder)</li>
          <li>Rapport d’impact (mock)</li>
        </ul>
      </div>
    </div>
  );
}
