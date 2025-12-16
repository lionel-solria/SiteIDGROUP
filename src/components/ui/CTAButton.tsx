import Link from 'next/link';
import {clsx} from 'clsx';

type Props = {
  href: string;
  label: string;
  tone?: 'light' | 'dark' | 'outline';
};

export function CTAButton({href, label, tone = 'light'}: Props) {
  const base = 'rounded-full px-4 py-2 text-sm font-semibold focus-ring transition border sketch-border';
  const tones = {
    light: 'bg-white text-slate-900 hover:-translate-y-0.5',
    dark: 'bg-slate-900 text-white hover:-translate-y-0.5',
    outline: 'bg-transparent border-dashed hover:-translate-y-0.5'
  };

  return (
    <Link href={href} className={clsx(base, tones[tone])}>
      {label}
    </Link>
  );
}
