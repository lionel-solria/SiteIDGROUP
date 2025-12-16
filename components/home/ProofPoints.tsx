import {proofPoints} from '@/data/content';
import {useTranslations} from 'next-intl';

export default function ProofPoints() {
  const t = useTranslations('proof');
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold text-brand-charcoal md:text-3xl">{t('title')}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {proofPoints.map((proof) => (
            <article key={proof.title} className="card p-5">
              <h3 className="text-lg font-semibold text-brand-charcoal">{proof.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{proof.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
