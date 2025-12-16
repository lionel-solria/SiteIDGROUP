import UniverseCard from '@/components/common/UniverseCard';
import {universes} from '@/data/content';
import {useTranslations} from 'next-intl';

export default function SolutionsPage() {
  const t = useTranslations('nav');
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-4 space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-slate-500">{t('solutions')}</p>
          <h1 className="text-3xl font-bold text-brand-charcoal md:text-4xl">Trinité des univers</h1>
          <p className="mt-2 text-sm text-slate-700">
            Trois environnements pour orienter nos solutions : habitat, milieux professionnels et exploitation agricole.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {universes.map((universe) => (
            <UniverseCard key={universe.id} universeId={universe.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
