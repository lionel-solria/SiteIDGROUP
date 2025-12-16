import SectionTitle from '@/components/SectionTitle';
import {articles} from '@/content/site';
import {notFound} from 'next/navigation';

export default function ArticlePage({params}: {params: {locale: string; slug: string}}) {
  const article = articles.find((item) => item.slug === params.slug);
  const locale = params.locale;
  if (!article) return notFound();

  return (
    <div className="section">
      <div className="container max-w-3xl space-y-6">
        <SectionTitle title={article.title[locale as 'fr']} subtitle={article.excerpt[locale as 'fr']} />
        <p className="text-sm text-slate-500">
          {new Date(article.date).toLocaleDateString(locale)} · {article.category[locale as 'fr']}
        </p>
        <article className="prose prose-slate max-w-none">
          <p>
            {article.excerpt[locale as 'fr']} Cette page est prête pour du contenu MDX ou un branchement CMS headless.
          </p>
          <p>
            Nous valorisons les solutions sur-mesure, les tests terrains et le soin du vivant. Contactez-nous pour connecter vos
            contenus dynamiques.
          </p>
        </article>
      </div>
    </div>
  );
}
