import Link from 'next/link';
import {universes} from '../../../content/universes';

export default function SolutionsIndex() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sketch">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-600">Solutions</p>
        <h1 className="text-3xl font-semibold text-slate-900 leading-tight">La trilogie ID Group</h1>
        <p className="text-slate-700">
          Trois univers complémentaires pour adresser maison, environnements professionnels et agriculture, avec le même ADN
          de soin du vivant.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {universes.map((universe) => (
          <Link
            key={universe.key}
            href={`/solutions/${universe.key}`}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sketch transition hover:-translate-y-1"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{universe.title}</p>
            <h3 className="text-lg font-semibold text-slate-900">{universe.hero.title}</h3>
            <p className="text-sm text-slate-600">{universe.hero.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
