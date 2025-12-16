'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useTranslations} from 'next-intl';
import {navigation} from '../../content/navigation';
import LocaleSwitcher from './LocaleSwitcher';
import {CTAButton} from '../ui/CTAButton';
import {clsx} from 'clsx';

export default function Header() {
  const pathname = usePathname();
  const t = useTranslations();

  const isActive = (href: string) => pathname?.includes(href);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4 gap-4">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <div className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold shadow-sketch">
            ID
          </div>
          <span className="sketch-underline">ID GROUP</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx('transition hover:text-slate-900', isActive(item.href) ? 'text-slate-900' : 'text-slate-500')}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <CTAButton href="/espace-client" label={t('nav.client')} tone="dark" />
        </div>
      </div>
    </header>
  );
}
