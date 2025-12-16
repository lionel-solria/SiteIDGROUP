import {teamFacts} from '@/data/mock/content';

export default function TeamFunFacts() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {teamFacts.map((member) => (
        <div key={member.name} className="flex items-start gap-3 rounded-2xl border bg-white p-4 shadow-card">
          <div className={`h-12 w-12 rounded-full border-2 ${member.color} bg-gray-50`} aria-hidden />
          <div>
            <p className="text-sm font-semibold text-brand.ink">{member.name}</p>
            <p className="text-xs uppercase tracking-wide text-gray-500">{member.role}</p>
            <p className="mt-2 text-gray-700">{member.fact}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
