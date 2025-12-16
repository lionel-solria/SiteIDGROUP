import SectionTitle from '@/components/SectionTitle';
import {useTranslations} from 'next-intl';

export default function GroupPage({params}: {params: {locale: string}}) {
  const t = useTranslations('groupPage');
  return (
    <div className="section">
      <div className="container grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <SectionTitle title={t('title')} subtitle={t('mission')} />
          <ul className="list-disc pl-5 text-slate-700 space-y-2">
            {t.raw('values').map((value: string) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
        <div className="card p-6 space-y-4">
          <div>
            <div className="text-sm font-semibold text-slate-900">Sites</div>
            <p className="text-sm text-slate-600">{t('sites')}</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">Marques</div>
            <p className="text-sm text-slate-600">{t('brands')}</p>
          </div>
          <div className="text-sm text-slate-500">Phase 2 : portail client et boîte à outils digitale.</div>
        </div>
      </div>
    </div>
  );
}
