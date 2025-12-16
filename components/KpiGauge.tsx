import {gauges} from '@/data/mock/content';

export default function KpiGauge() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {gauges.map((gauge) => (
        <div key={gauge.label} className="rounded-2xl border bg-white p-5 shadow-card">
          <div className="mb-2 flex items-center justify-between text-sm font-semibold text-gray-600">
            <span>{gauge.label}</span>
            <span>{gauge.value}%</span>
          </div>
          <div className="h-2 rounded-full bg-gray-100">
            <div className={`h-2 rounded-full ${gauge.color}`} style={{ width: `${gauge.value}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
