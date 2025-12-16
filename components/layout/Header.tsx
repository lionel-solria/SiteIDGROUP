'use client';

import {usePathname} from 'next/navigation';
import Link from 'next-intl/link';
import {useLocale, useTranslations} from 'next-intl';
import {useState} from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks = [
  {href: '/le-groupe', key: 'group'},
  {href: '/rse', key: 'commitments'},
  {href: '/solutions', key: 'solutions'},
  {href: '/actualites', key: 'news'},
  {href: '/contact', key: 'contact'}
];

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2" aria-label="ID GROUP">
            <div className="h-10 w-10 rounded-full bg-brand-orange/10 border border-brand-orange flex items-center justify-center font-bold text-brand-orange">
              ID
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm uppercase tracking-wide text-slate-500">ID GROUP</span>
              <span className="text-base font-semibold">Corporate</span>
            </div>
          </Link>
        </div>

        <button
          className="md:hidden rounded-lg border border-slate-200 px-3 py-2 text-sm"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav
          className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full bg-white md:static md:flex md:bg-transparent`}
        >
          <ul className="flex flex-col gap-2 border-t border-slate-100 px-4 py-3 md:flex-row md:items-center md:gap-6 md:border-none md:p-0">
            {navLinks.map((link) => {
              const active = pathname?.startsWith(`/${locale}${link.href}`) || pathname === `/${locale}${link.href}/`;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${active ? 'text-brand-orange' : 'text-slate-700 hover:text-brand-blue'}`}
                    onClick={() => setOpen(false)}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2 md:mt-0">
              <Link
                href="/espace-client"
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-brand-orange"
                onClick={() => setOpen(false)}
              >
                {t('clientSpace')}
              </Link>
            </li>
            <li className="md:ml-4">
              <LanguageSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
