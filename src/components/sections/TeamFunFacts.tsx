import {team} from '../../content/team';

export function TeamFunFacts() {
  return (
    <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sketch">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-slate-900">L’équipe</h3>
        <p className="text-sm text-slate-600">Sketch avatars & fun facts</p>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {team.map((member) => (
          <div key={member.name} className="rounded-xl border border-dashed border-slate-200 p-4 bg-white">
            <div className="h-16 w-16 rounded-full bg-slate-100 mb-2 border border-slate-300" aria-hidden />
            <h4 className="font-semibold text-slate-900">{member.name}</h4>
            <p className="text-sm text-slate-600">{member.role}</p>
            <p className="mt-2 text-sm text-slate-500">{member.funFact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
