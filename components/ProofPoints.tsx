import {proofPoints} from '@/data/mock/content';

export default function ProofPoints() {
  return (
    <section className="container-page mt-12">
      <div className="grid gap-4 md:grid-cols-3">
        {proofPoints.map((proof) => (
          <div key={proof.title} className="rounded-2xl border bg-white p-5 shadow-card">
            <h3 className="text-lg font-semibold text-brand.ink">{proof.title}</h3>
            <p className="mt-2 text-gray-700">{proof.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
