import {rseTeaser} from '../../content/home';

export function RseTeaser() {
  return (
    <section className="mt-12 rounded-2xl bg-gradient-to-br from-primary-home/10 via-white to-primary-pro/10 border border-slate-200 p-6 shadow-sketch">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="md:w-1/2">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-600">RSE</p>
          <h3 className="text-2xl font-semibold text-slate-900">{rseTeaser.title}</h3>
          <p className="text-slate-700">{rseTeaser.description}</p>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3">
          {rseTeaser.gauges.map((gauge) => (
            <div key={gauge.label} className="rounded-xl bg-white p-4 text-center border border-slate-200">
              <div className="relative mx-auto mb-2 h-20 w-20">
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-slate-200" />
                <div
                  className="absolute inset-2 rounded-full bg-gradient-to-br from-primary-home/60 to-primary-pro/60 flex items-center justify-center"
                  aria-valuenow={gauge.value}
                  role="img"
                  aria-label={`${gauge.label} ${gauge.value}%`}
                >
                  <span className="text-lg font-bold text-white">{gauge.value}%</span>
                </div>
              </div>
              <p className="text-xs text-slate-600">{gauge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
