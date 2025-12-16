import {proofPoints} from '../../content/home';

export function ProofPoints() {
  return (
    <section className="mt-12 grid gap-4 rounded-2xl bg-white/80 p-6 shadow-sketch border border-slate-200 md:grid-cols-2">
      {proofPoints.map((point) => (
        <div key={point.title} className="rounded-xl border border-dashed border-slate-200 p-4 bg-white">
          <h3 className="font-semibold text-slate-900">{point.title}</h3>
          <p className="text-sm text-slate-600">{point.detail}</p>
        </div>
      ))}
    </section>
  );
}
