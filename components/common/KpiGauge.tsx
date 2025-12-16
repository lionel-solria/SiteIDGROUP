'use client';

import {useEffect, useState} from 'react';

type Props = {
  value: number;
  label: string;
  unit?: string;
  caption?: string;
  color?: string;
};

export default function KpiGauge({value, label, unit = '%', caption, color = 'bg-brand-blue'}: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 200);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="card p-4">
      <div className="mb-3 h-2 w-full rounded-full bg-slate-100" aria-hidden>
        <div
          className={`${color} h-2 rounded-full transition-all duration-700 ease-out`}
          style={{width: `${progress}%`}}
          role="presentation"
        />
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-brand-charcoal">{value}</span>
        {unit && <span className="text-sm font-semibold text-slate-500">{unit}</span>}
      </div>
      <p className="mt-1 text-sm font-semibold text-brand-charcoal">{label}</p>
      {caption && <p className="text-xs text-slate-500">{caption}</p>}
    </div>
  );
}
