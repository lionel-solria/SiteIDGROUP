import {ReactNode} from 'react';

type Props = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
};

export default function SectionTitle({title, subtitle, eyebrow}: Props) {
  return (
    <div className="mb-8 flex flex-col gap-2">
      {eyebrow && <span className="text-xs uppercase tracking-wide text-slate-500">{eyebrow}</span>}
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">{title}</h2>
      {subtitle && <p className="text-slate-600 max-w-3xl">{subtitle}</p>}
    </div>
  );
}
