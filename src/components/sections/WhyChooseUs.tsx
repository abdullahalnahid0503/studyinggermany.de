import { useEffect, useRef, useState } from 'react';
import { Reveal } from '../ui/Reveal';
import { ShieldCheck, Building2, Clock, Globe2, Users, Headset } from 'lucide-react';

interface Stat { value: number; suffix: string; label: string; icon: typeof Users; }

const stats: Stat[] = [
  { value: 1000, suffix: '+', label: 'Students Guided', icon: Users },
  { value: 50, suffix: '+', label: 'Partner Institutions', icon: Building2 },
  { value: 95, suffix: '%', label: 'Visa Success Rate', icon: ShieldCheck },
  { value: 30, suffix: '+', label: 'Countries Served', icon: Globe2 },
  { value: 24, suffix: '/7', label: 'Student Support', icon: Headset },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1600;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(value * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{n}{suffix}</span>;
}

export function WhyChooseUs() {
  return (
    <section id="about" className="relative overflow-hidden bg-canvas py-24 text-ink sm:py-32 dark:bg-primary-950 dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-light bg-[size:56px_56px] opacity-[0.04] dark:opacity-10" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-accent-500/5 blur-[100px] dark:bg-accent-500/10" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary-400/5 blur-[100px] dark:bg-primary-400/10" />

      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600 dark:text-accent-300">
              Why Choose Us
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
              Numbers that <span className="shimmer-text">build trust</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg text-balance dark:text-slate-300">
              We measure our success in lives transformed. Here's what a decade of dedication has built.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="group h-full rounded-3xl border border-primary-100 bg-white p-6 shadow-soft transition-colors hover:border-accent-400/40 hover:bg-primary-50/60 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:backdrop-blur-sm dark:hover:bg-white/10">
                <s.icon className="h-5 w-5 text-accent-600 dark:text-accent-400" />
                <p className="mt-4 font-heading text-3xl font-bold text-ink sm:text-4xl dark:text-white">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-primary-100 bg-gradient-to-r from-primary-50 to-accent-500/5 p-8 text-center sm:flex-row sm:text-left dark:border-white/10 dark:from-white/5 dark:to-accent-500/5">
            <Clock className="h-8 w-8 shrink-0 text-accent-600 dark:text-accent-400" />
            <div className="flex-1">
              <h3 className="font-heading text-lg font-semibold text-ink dark:text-white">A mission-driven team, not a transactional agency</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                We invest in each student's long-term future in Germany, from admission to permanent residency.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}