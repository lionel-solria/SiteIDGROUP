import Link from 'next-intl/link';
import {universes} from '@/data/mock/content';

export default function UniverseCard() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {universes.map((universe) => (
        <div key={universe.id} className="rounded-2xl border bg-white p-5 shadow-card">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: `var(--brand-${universe.color})` }} aria-hidden />
            {universe.title}
          </div>
          <p className="mt-3 text-gray-700">{universe.description}</p>
          <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-gray-600">
            {universe.cases.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
          <Link
            href={`/univers/${universe.id}`}
            className="mt-4 inline-flex items-center rounded-full border-2 px-4 py-2 text-sm font-semibold"
            style={{ borderColor: `var(--brand-${universe.color}, #0b1021)`, color: `var(--brand-${universe.color}, #0b1021)` }}
          >
            Découvrir
          </Link>
        </div>
      ))}
    </div>
  );
}
