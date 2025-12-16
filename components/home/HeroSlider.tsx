'use client';

import Image from 'next/image';
import Link from 'next-intl/link';
import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {universes} from '@/data/content';

export default function HeroSlider() {
  const [active, setActive] = useState('home');
  const t = useTranslations('slider');

  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="hidden gap-2 md:flex">
          {universes.map((universe) => {
            const isActive = active === universe.id;
            const width = isActive ? 'md:w-2/3' : 'md:w-1/6';
            const copyKey = universe.id === 'home' ? 'homeCopy' : universe.id === 'pro' ? 'proCopy' : 'agriCopy';
            const color =
              universe.id === 'home'
                ? 'from-brand-orange/20'
                : universe.id === 'pro'
                  ? 'from-brand-blue/20'
                  : 'from-brand-green/20';

            return (
              <article
                key={universe.id}
                className={`relative overflow-hidden rounded-2xl border border-white shadow-soft transition-all duration-300 ease-out ${width}`}
                onMouseEnter={() => setActive(universe.id)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${color} via-white/40 to-white`} />
                <Image
                  src={universe.image}
                  alt={universe.name}
                  fill
                  className="object-cover opacity-40"
                  sizes="33vw"
                  priority
                />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-slate-600">{t(universe.id)}</p>
                    <h3 className="mt-2 text-2xl font-bold text-brand-charcoal">{universe.name}</h3>
                    {isActive && (
                      <p className="mt-3 max-w-sm text-sm text-slate-700">{t(copyKey as any)}</p>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/solutions/id-${universe.id}`}
                      className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-brand-charcoal shadow-sm hover:bg-brand-orange/90 hover:text-white"
                    >
                      {t('cta')} →
                    </Link>
                    {isActive && (
                      <div className="text-xs text-slate-500">Hover pour comparer</div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="md:hidden">
          <div className="flex snap-x gap-4 overflow-x-auto pb-4">
            {universes.map((universe) => {
              const copyKey = universe.id === 'home' ? 'homeCopy' : universe.id === 'pro' ? 'proCopy' : 'agriCopy';
              return (
                <article key={universe.id} className="card relative min-w-[80%] snap-center overflow-hidden">
                  <Image
                    src={universe.image}
                    alt={universe.name}
                    fill
                    className="object-cover opacity-50"
                    sizes="80vw"
                    priority
                  />
                  <div className="relative p-5">
                    <p className="text-xs uppercase tracking-[0.12em] text-slate-600">{t(universe.id)}</p>
                    <h3 className="mt-1 text-xl font-bold text-brand-charcoal">{universe.name}</h3>
                    <p className="mt-2 text-sm text-slate-700">{t(copyKey as any)}</p>
                    <Link
                      href={`/solutions/id-${universe.id}`}
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-soft"
                    >
                      {t('cta')} →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
