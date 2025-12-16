import Image from 'next/image';
import Link from 'next-intl/link';
import {useTranslations} from 'next-intl';
import {UniverseId, universes} from '@/data/content';

type Props = {
  universeId: UniverseId;
};

export default function UniverseCard({universeId}: Props) {
  const universe = universes.find((item) => item.id === universeId)!;
  const t = useTranslations('universes');

  return (
    <article className="card relative overflow-hidden">
      <Image
        src={universe.image}
        alt={universe.name}
        fill
        className="object-cover opacity-40"
        sizes="33vw"
      />
      <div className="relative p-6">
        <span className={`badge ${universe.id === 'home' ? 'bg-brand-orange/15 text-brand-orange' : universe.id === 'pro' ? 'bg-brand-blue/15 text-brand-blue' : 'bg-brand-green/15 text-brand-green'}`}>
          {t(`${universe.id}.title`)}
        </span>
        <h3 className="mt-2 text-xl font-semibold text-brand-charcoal">{universe.name}</h3>
        <p className="mt-2 text-sm text-slate-700">{t(`${universe.id}.description`)}</p>
        <div className="mt-4 flex gap-3">
          <Link
            href={`/solutions/id-${universe.id}`}
            className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-soft"
          >
            Découvrir →
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-brand-orange">
            Parler à un expert
          </Link>
        </div>
      </div>
    </article>
  );
}
