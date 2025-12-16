'use client';

import {TeamMember} from '@/content/site';
import {useState} from 'react';

export default function TeamFunFacts({members, locale}: {members: TeamMember[]; locale: string}) {
  const [index, setIndex] = useState(0);

  const previous = () => setIndex((prev) => (prev - 1 + members.length) % members.length);
  const next = () => setIndex((prev) => (prev + 1) % members.length);

  const member = members[index];

  return (
    <div className="card p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-lg font-semibold text-slate-900 border border-slate-200">
            {member.name.slice(0, 1)}
          </div>
          <div>
            <div className="font-semibold text-slate-900">{member.name}</div>
            <div className="text-sm text-slate-600">{member.role[locale as 'fr']}</div>
          </div>
        </div>
        <div className="flex gap-2" aria-label="Navigation équipe">
          <button
            onClick={previous}
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center"
            aria-label="Précédent"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center"
            aria-label="Suivant"
          >
            →
          </button>
        </div>
      </div>
      <p className="text-slate-700 text-base">{member.funFact[locale as 'fr']}</p>
    </div>
  );
}
