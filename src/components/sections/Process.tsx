import { Reveal, SectionHeading } from '../ui/Reveal';
import { processSteps } from '../../lib/data';

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="The Process"
          title={<>Your path to Germany, <span className="heading-gradient">step by step</span></>}
          subtitle="A proven 8-step framework that takes you from first conversation to a career in Germany."
        />

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary-200 to-transparent lg:block dark:via-white/10" />
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary-200 to-transparent lg:hidden dark:via-white/10" />

          <div className="space-y-8 lg:space-y-0">
            {processSteps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={s.step} delay={0.04 * i}>
                  <div className={`relative flex items-start gap-6 lg:items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="absolute left-5 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-canvas bg-primary-700 text-white shadow-soft lg:left-1/2 dark:border-primary-950">
                      <s.icon className="h-4 w-4" />
                    </div>

                    <div className={`ml-12 w-full lg:ml-0 lg:w-1/2 ${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                      <div className="card p-6 transition-all duration-300 hover:-translate-y-1">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent-500/10 font-heading text-xs font-bold text-accent-600">
                          {s.step}
                        </span>
                        <h3 className="mt-3 font-heading text-lg font-semibold text-ink dark:text-white">{s.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{s.description}</p>
                      </div>
                    </div>

                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
