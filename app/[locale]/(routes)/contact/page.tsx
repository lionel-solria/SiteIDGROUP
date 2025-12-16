import SectionTitle from '@/components/SectionTitle';
import {useTranslations} from 'next-intl';

export default function ContactPage({params}: {params: {locale: string}}) {
  const t = useTranslations('contact');
  return (
    <div className="section">
      <div className="container max-w-3xl">
        <SectionTitle title={t('title')} subtitle={t('intro')} />
        <form className="card p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="text-sm text-slate-700">
              {t('profile')}
              <input className="mt-2 w-full rounded-lg border border-slate-200 p-2" placeholder="Exploitant, industriel..." />
            </label>
            <label className="text-sm text-slate-700">
              {t('universe')}
              <select className="mt-2 w-full rounded-lg border border-slate-200 p-2">
                <option>ID Home</option>
                <option>ID Pro</option>
                <option>ID Agri</option>
              </select>
            </label>
          </div>
          <label className="text-sm text-slate-700">
            {t('need')}
            <textarea className="mt-2 w-full rounded-lg border border-slate-200 p-3" rows={4} placeholder="Décrivez votre besoin" />
          </label>
          <button type="submit" className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold">
            {t('submit')}
          </button>
        </form>
      </div>
    </div>
  );
}
