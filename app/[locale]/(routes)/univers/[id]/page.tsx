import SketchHotspots from '@/components/SketchHotspots';
import SectionTitle from '@/components/SectionTitle';
import {universes} from '@/content/site';
import Link from 'next-intl/link';
import {notFound} from 'next/navigation';
import {useTranslations} from 'next-intl';

export default function UniversePage({params}: {params: {locale: string; id: string}}) {
  const universe = universes.find((u) => `id-${u.id}` === params.id);
  const t = useTranslations('univers');
  const locale = params.locale;

  if (!universe) {
    notFound();
  }

  return (
    <div className="section">
      <div className="container space-y-10">
        <header className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{universe.name[locale as 'fr']}</p>
            <h1 className="text-3xl font-semibold text-slate-900">{universe.baseline[locale as 'fr']}</h1>
            <p className="text-slate-600">
              ID {universe.id.toUpperCase()} : {t('hotspots')}
            </p>
            <div className="flex gap-3">
              <Link
                href="/contact"
                locale={locale}
                className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold"
              >
                {t('heroCta')}
              </Link>
              <Link
                href="/espace-client"
                locale={locale}
                className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold"
              >
                Espace client
              </Link>
            </div>
          </div>
          <SketchHotspots universe={universe} locale={locale} />
        </header>

        <section className="grid md:grid-cols-3 gap-4">
          {universe.stories.map((story) => (
            <article key={story.client} className="card p-5 flex flex-col gap-3">
              <span className="text-xs uppercase tracking-wide text-slate-500">{story.client}</span>
              <h3 className="text-lg font-semibold text-slate-900">{story.title[locale as 'fr']}</h3>
              <p className="text-sm text-slate-700">{story.summary[locale as 'fr']}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
