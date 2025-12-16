import Link from 'next-intl/link';
import {Universe} from '@/content/site';

export default function UniverseCard({universe, locale}: {universe: Universe; locale: string}) {
  const accent = universe.id === 'home' ? '#f97316' : universe.id === 'pro' ? '#2563eb' : '#16a34a';
  return (
    <Link
      href={`/univers/id-${universe.id}`}
      locale={locale}
      className="card p-5 flex flex-col gap-3 border-l-4"
      style={{borderColor: accent}}
    >
      <div className="text-sm font-semibold text-slate-900">{universe.name[locale as 'fr']}</div>
      <p className="text-sm text-slate-600">{universe.baseline[locale as 'fr']}</p>
      <span className="text-sm font-semibold text-slate-900">→</span>
    </Link>
  );
}
