import Link from 'next-intl/link';
import {useTranslations} from 'next-intl';
import SketchHotspots from '@/components/common/SketchHotspots';
import {hotspots, successStories, universes, UniverseId} from '@/data/content';
import {notFound} from 'next/navigation';

export default function UniversePage({params}: {params: {universe: string}}) {
  const id = params.universe.replace('id-', '') as UniverseId;
  const universe = universes.find((item) => item.id === id);
  const t = useTranslations('universes');

  if (!universe) {
    notFound();
  }

  return (
    <div className="section">
      <div className="mx-auto max-w-6xl space-y-8 px-4">
        <header className="card overflow-hidden p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-slate-500">{t(`${id}.title`)}</p>
              <h1 className="text-3xl font-bold text-brand-charcoal">{universe.name}</h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-700">{t(`${id}.description`)}</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-brand-orange px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-brand-blue"
              >
                Parler à un expert
              </Link>
              <Link href="/espace-client" className="rounded-full border border-brand-blue px-4 py-2 text-sm font-semibold text-brand-blue">
                Espace client
              </Link>
            </div>
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-brand-charcoal">Navigation par environnement</h2>
          <p className="text-sm text-slate-700">Hotspots interactifs pour identifier les zones clés et ouvrir une fiche solution.</p>
          <SketchHotspots hotspots={hotspots[id]} />
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-brand-charcoal">Cas clients</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {successStories
              .filter((story) => story.universe === id)
              .map((story) => (
                <article key={story.title} className="card p-5">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Success story</p>
                  <h4 className="mt-2 text-lg font-semibold text-brand-charcoal">{story.title}</h4>
                  <p className="mt-2 text-sm text-brand-blue">{story.impact}</p>
                </article>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
