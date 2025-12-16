'use client';

import Link from 'next-intl/link';
import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {universes} from '@/content/site';

export default function HeroSlider({locale}: {locale: string}) {
  const t = useTranslations('hero');
  const [active, setActive] = useState<string>('home');

  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">ID GROUP</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mt-3 leading-tight">
              {t('title')}
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">{t('subtitle')}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/univers/id-home"
                locale={locale}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold shadow-soft"
              >
                {t('cta')}
              </Link>
              <Link
                href="/espace-client"
                locale={locale}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 text-slate-800 px-4 py-2 text-sm font-semibold"
              >
                Espace client
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-soft border border-slate-100 overflow-hidden">
            <div className="hidden md:flex">
              {universes.map((universe) => {
                const isActive = active === universe.id;
                return (
                  <div
                    key={universe.id}
                    className={`relative flex-1 transition-[flex-basis] duration-300 ease-in-out cursor-pointer`}                    style={{flexBasis: isActive ? '60%' : '20%'}}
                    onMouseEnter={() => setActive(universe.id)}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-b from-white/60 to-slate-50 border-r last:border-r-0 flex flex-col justify-between p-6`}
                    >
                      <div>
                        <div
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-slate-100 text-slate-700 border`}
                        >
                          {universe.name[locale as keyof typeof universe.name]}
                        </div>
                        <p className="mt-3 text-sm text-slate-600">{t(`panels.${universe.id}`)}</p>
                      </div>
                      <Link
                        href={`/univers/id-${universe.id}`}
                        locale={locale}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
                      >
                        Découvrir →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="md:hidden flex flex-col">
              {universes.map((universe) => (
                <div key={universe.id} className="border-b last:border-b-0 border-slate-100 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        {universe.name[locale as keyof typeof universe.name]}
                      </div>
                      <p className="text-sm text-slate-600">{t(`panels.${universe.id}`)}</p>
                    </div>
                    <Link
                      href={`/univers/id-${universe.id}`}
                      locale={locale}
                      className="text-sm font-semibold text-slate-900"
                    >
                      →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
