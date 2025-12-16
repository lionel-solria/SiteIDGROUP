import {wormhout} from '../../content/home';

export function WormhoutStory() {
  return (
    <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sketch">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Wormhout</p>
          <h3 className="text-2xl font-semibold text-slate-900">{wormhout.title}</h3>
          <p className="mt-3 text-slate-700">{wormhout.story}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-center">
          {wormhout.markers.map((marker) => (
            <div key={marker.label} className="rounded-xl border border-dashed border-slate-200 p-3">
              <div className="text-2xl font-bold text-slate-900">{marker.value}</div>
              <p className="text-xs text-slate-500">{marker.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
