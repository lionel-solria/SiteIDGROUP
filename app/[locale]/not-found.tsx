import Link from 'next-intl/link';

export default function NotFound() {
  return (
    <div className="section">
      <div className="mx-auto max-w-3xl space-y-4 px-4 text-center">
        <h1 className="text-4xl font-bold text-brand-charcoal">Page introuvable</h1>
        <p className="text-sm text-slate-700">Le contenu demandé n'existe pas encore dans cette version prototype.</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-blue"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
