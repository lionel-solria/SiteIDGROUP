'use client';

import Link from 'next-intl/link';
import {useTranslations} from 'next-intl';
import {useState} from 'react';
import LocaleSwitcher from './LocaleSwitcher';

const navItems = [
  {href: '/groupe', key: 'group'},
  {href: '/rse', key: 'commitments'},
  {href: '/univers/id-home', key: 'solutions', labelKey: 'univers.home'},
  {href: '/actualites', key: 'news'},
  {href: '/contact', key: 'contact'},
];

export default function Header({locale}: {locale: string}) {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur shadow-sm">
      <div className="container flex items-center justify-between py-4 gap-4">
        <Link href="/" locale={locale} className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <div className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">ID</div>
          <div className="hidden sm:block leading-tight">
            <div>ID GROUP</div>
            <div className="text-xs text-slate-500">Solutions responsables</div>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <LocaleSwitcher locale={locale} />
          <button
            className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-200 px-3 py-2 text-sm"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>
      <nav
        className={`${open ? 'max-h-96' : 'max-h-0 md:max-h-none'} overflow-hidden md:overflow-visible transition-all md:transition-none`}
      >
        <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 md:pb-0">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  locale={locale}
                  className="hover:text-slate-900 text-slate-600 transition"
                  onClick={() => setOpen(false)}
                >
                  {item.labelKey ? t(item.labelKey) : t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/espace-client"
            locale={locale}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold shadow-soft hover:-translate-y-0.5 transition"
          >
            {t('clientArea')}
          </Link>
        </div>
      </nav>
    </header>
  );
}
