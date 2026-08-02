import billalMahmud from "../../assets/images/billalMahmud.png";
import { Crown, Check, CalendarCheck, Star } from 'lucide-react';
import { useRouter } from '../../lib/router';
import { Reveal } from '../ui/Reveal';

const features = [
  '1-on-1 Personal Consultation',
  'University Selection',
  'SOP & CV Guidance',
  'Career Planning',
  'Visa Strategy',
  'Living in Germany',
  'Financial Planning',
  'Personal Q&A',
];

export function BillalMahmud() {
  const { navigate } = useRouter();
  return (
    <section id="billal" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 p-1 shadow-2xl">
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-accent-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent-400/15 blur-[100px]" />

          <div className="relative overflow-hidden rounded-[2.3rem] p-7 sm:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
              <div>
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                    <Crown className="h-3.5 w-3.5" /> Premium Session
                  </span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-white text-balance sm:text-5xl">
                    One Hour with{' '}
                    <span className="shimmer-text">Billal Mahmud</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 text-balance sm:text-lg">
                    A dedicated, in-depth strategy session with our lead consultant. Walk away with a personalized roadmap covering every dimension of your Germany journey.
                  </p>
                </Reveal>

                <Reveal delay={0.24}>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-slate-200">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-300">
                          <Check className="h-3 w-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={0.32}>
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <button onClick={() => navigate('/premium')} className="btn-gold group">
                      <CalendarCheck className="h-4 w-4" />
                      Learn More
                    </button>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />
                        ))}
                      </div>
                      <p className="text-xs text-slate-400">4.9 / 5 from 480+ sessions</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.2}>
                <div
                  className="relative mx-auto w-full max-w-sm transition-all duration-500 hover:-translate-y-1.5 hover:rotate-0"
                  style={{ transform: 'rotate(-2deg)' }}
                >
                  <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-accent-400/40 to-accent-600/20 blur-2xl" />
                  <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-primary-950 shadow-gold">
                    <div className="aspect-[4/5] w-full bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950">
                      <img
                        src={billalMahmud}
                        alt="Billal Mahmud, Lead Consultant"
                        loading="lazy"
                        className="h-full w-full object-cover opacity-95 mix-blend-luminosity"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-950 via-primary-950/80 to-transparent p-6">
                      <p className="font-heading text-lg font-bold text-white">Billal Mahmud</p>
                      <p className="text-xs font-medium uppercase tracking-wider text-accent-300">Lead Consultant & Strategist</p>
                      <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-300">
                        <span className="rounded-full bg-white/10 px-2 py-0.5">10+ yrs</span>
                        <span className="rounded-full bg-white/10 px-2 py-0.5">1000+ mentored</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
