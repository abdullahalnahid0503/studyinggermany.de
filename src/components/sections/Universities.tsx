import { MapPin, ArrowUpRight, Star } from 'lucide-react';
import { Reveal, SectionHeading } from '../ui/Reveal';
import { universities } from '../../lib/data';

export function Universities() {
  return (
    <section id="universities" className="relative overflow-hidden bg-slate-50 py-24 dark:bg-primary-950/50 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="German Universities"
          title={<>Study at <span className="heading-gradient">world-class</span> institutions</>}
          subtitle="We partner with top-ranked public and technical universities across Germany, tuition-free for international students."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {universities.map((u, i) => (
            <Reveal key={u.name} delay={(i % 3) * 0.08}>
              <article className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 dark:border-white/5 dark:bg-primary-900/40">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={u.image} alt={u.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/10 to-transparent" />
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-primary-800 backdrop-blur">
                    <Star className="h-3 w-3 fill-accent-500 text-accent-500" />
                    {u.ranking}
                  </span>
                  <p className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 text-xs font-medium text-white">
                    <MapPin className="h-3.5 w-3.5 text-accent-300" />
                    {u.city}, Germany
                  </p>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-base font-semibold leading-snug text-ink dark:text-white">{u.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {u.programs.map((p) => (
                      <span key={p} className="rounded-full bg-primary-50 px-2.5 py-1 text-[11px] font-medium text-primary-700 dark:bg-white/5 dark:text-slate-300">
                        {p}
                      </span>
                    ))}
                  </div>
                  <a
                    href="/booking"
                    onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/booking'); window.dispatchEvent(new PopStateEvent('popstate')); }}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-700 transition-colors hover:text-accent-600 dark:text-accent-400"
                  >
                    Apply
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
