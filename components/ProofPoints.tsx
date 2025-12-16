import {ProofPoint} from '@/content/site';

export default function ProofPoints({items, locale}: {items: ProofPoint[]; locale: string}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((point) => (
        <article key={point.title.fr} className="card p-4 flex flex-col gap-3" aria-label={point.title[locale as 'fr']}>
          <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-sm">
            {point.icon}
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{point.title[locale as 'fr']}</h3>
          <p className="text-sm text-slate-600">{point.detail[locale as 'fr']}</p>
        </article>
      ))}
    </div>
  );
}
