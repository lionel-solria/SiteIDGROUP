import {notFound} from 'next/navigation';
import {universes} from '../../../../content/universes';
import {SketchHotspots} from '../../../../components/sections/SketchHotspots';
import {CTAButton} from '../../../../components/ui/CTAButton';

export function generateStaticParams() {
  const locales = ['fr', 'en', 'de'];
  return locales.flatMap((locale) =>
    universes.map((universe) => ({
      locale,
      universe: universe.key
    }))
  );
}

export default function UniversePage({params}: {params: {universe: string}}) {
  const universe = universes.find((u) => u.key === params.universe);
  if (!universe) return notFound();

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sketch">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-600">{universe.title}</p>
        <h1 className="text-3xl font-semibold text-slate-900 leading-tight">{universe.hero.title}</h1>
        <p className="text-slate-700">{universe.hero.description}</p>
        <div className="mt-4 flex gap-3 flex-wrap">
          <CTAButton href="/contact" label="Parler à un expert" tone="dark" />
          <CTAButton href="/espace-client" label="Espace client" tone="outline" />
        </div>
      </div>
      <SketchHotspots universe={universe} />
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sketch">
        <h3 className="text-xl font-semibold text-slate-900">Cas clients</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {universe.stories.map((story) => (
            <article key={story.title} className="rounded-xl border border-dashed border-slate-200 p-4 bg-white">
              <h4 className="font-semibold text-slate-900">{story.title}</h4>
              <p className="text-sm text-slate-600">{story.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
