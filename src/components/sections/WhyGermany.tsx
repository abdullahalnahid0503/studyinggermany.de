import { Reveal } from '../ui/Reveal';
import { whyGermany } from '../../lib/data';
import { useRouter } from '../../lib/router';
import { ArrowRight } from 'lucide-react';

// Assign visual size/prominence to each reason in the bento grid
const layout = [
  { col: 'lg:col-span-2', row: 'lg:row-span-2', featured: true },  // No/Low Tuition
  { col: 'lg:col-span-1', row: '', featured: false },               // World-Ranked
  { col: 'lg:col-span-1', row: '', featured: false },               // Strong Economy
  { col: 'lg:col-span-1', row: '', featured: false },               // Part-time Work
  { col: 'lg:col-span-1', row: '', featured: false },               // Post-Study
  { col: 'lg:col-span-1', row: '', featured: false },               // Pathway to PR
  { col: 'lg:col-span-1', row: '', featured: false },               // Safe Environment
  { col: 'lg:col-span-1', row: '', featured: false },               // Quality of Life
  { col: 'lg:col-span-1', row: '', featured: false },               // Innovation
];

// Accent colors cycling for icon backgrounds
const accents = [
  'bg-accent-500/15 text-accent-600 dark:bg-accent-500/20 dark:text-accent-400',
  'bg-blue-500/15 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400',
  'bg-emerald-500/15 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400',
  'bg-violet-500/15 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400',
  'bg-rose-500/15 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400',
  'bg-amber-500/15 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400',
  'bg-cyan-500/15 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400',
  'bg-teal-500/15 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400',
  'bg-indigo-500/15 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400',
];

export function WhyGermany() {
  const { navigate } = useRouter();

  return (
    <section
      id="why-germany"
      className="relative overflow-hidden bg-canvas py-24 sm:py-32 dark:bg-primary-950"
    >
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(45,116,176,0.10),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(45,116,176,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-light bg-[size:48px_48px] opacity-[0.03] dark:opacity-[0.04]" />
      <div className="pointer-events-none absolute -left-48 top-1/4 h-96 w-96 rounded-full bg-accent-500/5 blur-[120px] dark:bg-accent-500/8" />
      <div className="pointer-events-none absolute -right-48 bottom-1/4 h-96 w-96 rounded-full bg-primary-400/5 blur-[120px] dark:bg-primary-400/10" />

      <div className="container-page relative">

        {/* Header */}
        <Reveal>
          <div className="max-w-2xl">
            <span className="section-eyebrow dark:!bg-white/5 dark:!border-white/10 !text-accent-600 dark:!text-accent-400">
              Why Germany
            </span>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-ink text-balance sm:text-5xl md:text-6xl dark:text-white">
              9 reasons to make{' '}
              <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-200 bg-clip-text text-transparent">
                Germany your home
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg max-w-xl dark:text-primary-300">
              Germany is built for international talent with world-class education, zero tuition, and a clear path to permanent residency.
            </p>
          </div>
        </Reveal>

        {/* Bento grid */}
        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3">
            {whyGermany.map((item, i) => {
              const l = layout[i];
              const isFeatured = l.featured;

              return (
                <div
                  key={item.title}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${l.col} ${l.row} ${
                    isFeatured
                      ? 'border-primary-200 bg-gradient-to-br from-primary-50 to-primary-100/60 hover:border-accent-500/30 hover:shadow-soft dark:border-white/10 dark:from-primary-800/80 dark:to-primary-900/60 dark:hover:shadow-glow'
                      : 'border-primary-100 bg-white hover:border-primary-200 hover:bg-primary-50/60 dark:border-white/5 dark:bg-white/[0.03] dark:hover:border-white/10 dark:hover:bg-white/[0.06]'
                  }`}
                  style={{
                    animationDelay: `${i * 0.04}s`,
                  }}
                >
                  {/* Subtle glow for featured */}
                  {isFeatured && (
                    <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-150" />
                  )}

                  <div className={`flex h-full flex-col ${isFeatured ? 'p-7' : 'p-5'}`}>
                    {/* Icon */}
                    <div
                      className={`flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                        isFeatured ? 'h-12 w-12' : 'h-9 w-9'
                      } ${accents[i % accents.length]}`}
                    >
                      <item.icon className={isFeatured ? 'h-6 w-6' : 'h-4 w-4'} />
                    </div>

                    {/* Number */}
                    <span className="mt-3 text-[10px] font-bold tabular-nums tracking-[0.15em] text-slate-300 dark:text-white/20">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Title */}
                    <h3
                      className={`mt-1 font-heading font-bold text-ink dark:text-white ${
                        isFeatured ? 'text-xl sm:text-2xl' : 'text-sm sm:text-base'
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`mt-2 leading-relaxed text-slate-500 dark:text-primary-300 ${
                        isFeatured ? 'text-sm sm:text-base' : 'text-xs'
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* Featured CTA — only item 1 (No Tuition) */}
                    {i === 0 && (
                      <div className="mt-auto pt-5">
                        <button
                          onClick={() => navigate('/booking')}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-all duration-200 hover:gap-2.5 hover:text-accent-500 dark:text-accent-400 dark:hover:text-accent-300"
                        >
                          Start your journey
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Bottom bar */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary-100 bg-primary-50/60 px-6 py-4 sm:flex-row dark:border-white/5 dark:bg-white/[0.03]">
            <p className="text-sm text-slate-500 text-center sm:text-left dark:text-primary-300">
              Ready to make the move? Our specialists have guided <span className="font-semibold text-ink dark:text-white">1,000+ students</span> from 30 countries to Germany.
            </p>
            <button
              onClick={() => navigate('/booking')}
              className="btn-gold shrink-0"
            >
              Book Free Consultation
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}