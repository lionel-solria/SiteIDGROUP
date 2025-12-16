import Link from 'next/link';
import {articles} from '../../../../content/articles';

export default function ActualitesPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sketch">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-600">Actualités</p>
        <h1 className="text-3xl font-semibold text-slate-900">Blog & cas clients</h1>
        <p className="text-slate-700">Articles RSE, salons, cas clients et conseils pratiques.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/actualites/${article.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sketch hover:-translate-y-1 transition"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{article.category}</p>
            <h3 className="text-lg font-semibold text-slate-900">{article.title}</h3>
            <p className="text-sm text-slate-600">{article.excerpt}</p>
            <p className="mt-2 text-xs text-slate-500">{article.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
