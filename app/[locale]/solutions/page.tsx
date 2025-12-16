import UniverseCard from '@/components/UniverseCard';

export default function SolutionsPage() {
  return (
    <div className="container-page mt-10 space-y-6">
      <header>
        <p className="text-xs uppercase tracking-wide text-gray-500">Solutions</p>
        <h1 className="text-3xl font-bold text-brand.ink">Nos univers</h1>
        <p className="mt-2 text-gray-700">Trois portes d\'entrée adaptées aux contextes Home, Pro et Agri.</p>
      </header>
      <UniverseCard />
    </div>
  );
}
