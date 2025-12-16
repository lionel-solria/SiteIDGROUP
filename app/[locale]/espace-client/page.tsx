import {useTranslations} from 'next-intl';

export default function ClientSpacePage() {
  const t = useTranslations('clientSpace');
  return (
    <section className="section">
      <div className="mx-auto max-w-3xl space-y-6 px-4">
        <div className="card space-y-3 p-6">
          <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Phase 2</p>
          <h1 className="text-3xl font-bold text-brand-charcoal md:text-4xl">{t('title')}</h1>
          <p className="text-sm text-slate-700">{t('description')}</p>
          <div className="space-y-3 rounded-xl bg-white p-4 shadow-soft">
            <label className="block text-sm font-semibold text-brand-charcoal">Email / SSO</label>
            <input className="w-full rounded-lg border border-slate-200 px-3 py-2" placeholder="prenom.nom@entreprise.com" />
            <button className="w-full rounded-full bg-brand-blue px-4 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-orange">
              {t('cta')}
            </button>
          </div>
          <p className="text-sm text-slate-700">{t('support')}</p>
        </div>
      </div>
    </section>
  );
}
