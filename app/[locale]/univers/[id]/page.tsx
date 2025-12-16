import SketchHotspots from '@/components/SketchHotspots';
import {universes} from '@/data/mock/content';
import {notFound} from 'next/navigation';
import Link from 'next-intl/link';
import {getTranslations} from 'next-intl/server';

interface Params {
  params: {locale: string; id: string};
}

export default async function UniversePage({params}: Params) {
  const universe = universes.find((item) => item.id === params.id);
  const t = await getTranslations('universes');

  if (!universe) return notFound();

  return (
    <div className="container-page mt-10 space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">Univers</p>
          <h1 className="text-3xl font-bold text-brand.ink">{universe.title}</h1>
          <p className="mt-2 text-gray-700">{universe.description}</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/contact"
            locale={params.locale}
            className="rounded-full bg-brand.blue px-4 py-2 text-sm font-semibold text-white shadow-card"
          >
            {t('ctaExpert')}
          </Link>
          <Link
            href="/espace-client"
            locale={params.locale}
            className="rounded-full border-2 border-brand.orange px-4 py-2 text-sm font-semibold text-brand.orange"
          >
            {t('ctaClient')}
          </Link>
        </div>
      </div>

      <SketchHotspots universeId={universe.id} />
    </div>
  );
}
