'use client';

import {team} from '@/data/content';
import {useTranslations} from 'next-intl';

export default function TeamFunFacts() {
  const t = useTranslations('team');
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500">{t('funFact')}</p>
            <h2 className="text-2xl font-bold text-brand-charcoal md:text-3xl">{t('title')}</h2>
            <p className="text-sm text-slate-600">{t('subtitle')}</p>
          </div>
        </div>
        <div className="mt-6 flex snap-x gap-4 overflow-x-auto pb-4">
          {team.map((member) => (
            <div key={member.name} className="card min-w-[260px] snap-center p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-brand-orange text-lg font-bold text-brand-orange">
                  {member.name.slice(0, 1)}
                </div>
                <div>
                  <p className="text-base font-semibold text-brand-charcoal">{member.name}</p>
                  <p className="text-sm text-slate-600">{member.role}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-brand-blue">{member.fun}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
