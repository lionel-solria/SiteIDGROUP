import Link from 'next-intl/link';

type Props = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readMoreLabel: string;
};

export default function ArticleCard({slug, title, category, excerpt, date, readMoreLabel}: Props) {
  return (
    <article className="card flex flex-col justify-between p-5">
      <div className="space-y-2">
        <span className="badge bg-brand-orange/10 text-brand-orange">{category}</span>
        <h3 className="text-lg font-semibold text-brand-charcoal">{title}</h3>
        <p className="text-sm text-slate-700">{excerpt}</p>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
        <span>{new Date(date).toLocaleDateString()}</span>
        <Link href={`/actualites/${slug}`} className="font-semibold text-brand-blue">
          {readMoreLabel} →
        </Link>
      </div>
    </article>
  );
}
