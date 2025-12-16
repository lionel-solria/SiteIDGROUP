import KpiGauge from '@/components/KpiGauge';
import SectionTitle from '@/components/SectionTitle';
import {gauges} from '@/content/site';
import {useTranslations} from 'next-intl';

export default function RsePage({params}: {params: {locale: string}}) {
  const t = useTranslations('rsePage');
  const locale = params.locale;
  return (
    <div className="section">
      <div className="container space-y-8">
        <SectionTitle title={t('title')} subtitle={t('intro')} />
        <div className="grid gap-4 sm:grid-cols-3">
          {gauges.map((gauge) => (
            <KpiGauge key={gauge.label.fr} label={gauge.label[locale as 'fr']} value={gauge.value} />
          ))}
        </div>
        <div className="card p-6 space-y-3">
          <div className="text-sm font-semibold text-slate-900">{t('downloads')}</div>
          <ul className="text-sm text-slate-700 list-disc pl-5">
            <li>ISO 14001 (mock)</li>
            <li>FDS matériaux recyclés (mock)</li>
            <li>Guide Positiv’ID (mock)</li>
          </ul>
          <button className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold">
            {t('cta')}
          </button>
        </div>
      </div>
    </div>
  );
}
