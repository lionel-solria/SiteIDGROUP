export default function LeGroupePage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sketch">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-600">Le Groupe</p>
        <h1 className="text-3xl font-semibold text-slate-900">Mission & valeurs</h1>
        <p className="text-slate-700">
          ID GROUP conçoit des solutions industrielles qui prennent soin du vivant, avec un équilibre entre performance,
          hygiène et confort. Notre histoire industrielle s’écrit à Wormhout avec des équipes engagées.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sketch">
          <h3 className="font-semibold text-slate-900">Histoire</h3>
          <p className="text-sm text-slate-600">45 ans d’innovation au service de la sécurité et du bien-être.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sketch">
          <h3 className="font-semibold text-slate-900">Savoir-faire Wormhout</h3>
          <p className="text-sm text-slate-600">Production intégrée, prototypage rapide, lab tests.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sketch">
          <h3 className="font-semibold text-slate-900">Equipe</h3>
          <p className="text-sm text-slate-600">Expertise terrain, R&D et expérience client réunies.</p>
        </div>
      </div>
    </div>
  );
}
