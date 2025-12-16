import KpiGauge from '@/components/common/KpiGauge';
import {downloads, kpiGauges, rseActions} from '@/data/content';
import {useTranslations} from 'next-intl';

export default function RsePage() {
  const t = useTranslations('rsePage');
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl space-y-8 px-4">
        <header className="card space-y-3 bg-gradient-to-br from-brand-green/10 via-white to-brand-blue/10 p-6">
          <p className="text-xs uppercase tracking-[0.12em] text-slate-500">RSE</p>
          <h1 className="text-3xl font-bold text-brand-charcoal md:text-4xl">{t('heroTitle')}</h1>
          <p className="max-w-3xl text-sm text-slate-700">{t('heroDesc')}</p>
        </header>

        <section className="space-y-4" id="indicateurs">
          <h2 className="text-2xl font-semibold text-brand-charcoal">{t('gauges')}</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {kpiGauges.map((kpi) => (
              <KpiGauge key={kpi.id} value={kpi.value} label={kpi.label} unit={kpi.unit} caption={kpi.caption} />
            ))}
          </div>
        </section>

        <section className="space-y-4" id="actions">
          <h2 className="text-2xl font-semibold text-brand-charcoal">{t('actions')}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {rseActions.map((action) => (
              <article key={action.title} className="card p-5">
                <h3 className="text-lg font-semibold text-brand-charcoal">{action.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{action.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4" id="ressources">
          <h2 className="text-2xl font-semibold text-brand-charcoal">{t('downloads')}</h2>
          <div className="flex flex-wrap gap-3">
            {downloads.map((doc) => (
              <a
                key={doc.title}
                href={doc.href}
                className="rounded-full border border-brand-blue px-4 py-2 text-sm font-semibold text-brand-blue hover:border-brand-orange hover:text-brand-orange"
              >
                {doc.title}
              </a>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
