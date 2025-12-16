'use client';

import Link from 'next-intl/link';
import {usePathname} from 'next/navigation';
import {useLocale, useTranslations} from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const navItems = [
  { href: '/le-groupe', key: 'nav.group' },
  { href: '/rse', key: 'nav.commitments' },
  { href: '/solutions', key: 'nav.solutions' },
  { href: '/actualites', key: 'nav.news' },
  { href: '/contact', key: 'nav.contact' }
];

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const isActive = (href: string) => pathname?.includes(href);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="container-page flex items-center justify-between py-3">
        <Link href="/" locale={locale} className="flex items-center gap-2 font-semibold">
          <div className="h-10 w-10 rounded-full border-2 border-brand.orange bg-white shadow-card" aria-hidden />
          <span>ID GROUP</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              locale={locale}
              className={`pb-1 transition hover:text-brand.orange ${isActive(item.href) ? 'border-b-2 border-brand.orange text-brand.orange' : ''}`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/espace-client"
            locale={locale}
            className="rounded-full bg-brand.orange px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:opacity-90"
          >
            {t('site.ctaClient')}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
