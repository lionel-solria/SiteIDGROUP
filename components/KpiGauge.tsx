'use client';

import {useEffect, useState} from 'react';

export default function KpiGauge({label, value}: {label: string; value: number}) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => setProgress(value), 200);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="card p-4 flex flex-col gap-2">
      <div className="text-sm font-semibold text-slate-900">{label}</div>
      <div className="h-2 rounded-full bg-slate-100 overflow-hidden" aria-label={label}>
        <div
          className="h-full bg-gradient-to-r from-slate-900 to-slate-600 transition-all duration-700"
          style={{width: `${progress}%`}}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        />
      </div>
      <div className="text-sm text-slate-600">{value}%</div>
    </div>
  );
}
