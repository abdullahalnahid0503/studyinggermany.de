import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Reveal, SectionHeading } from '../ui/Reveal';
import { faqs } from '../../lib/data';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-slate-50 py-24 dark:bg-primary-950/50 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Questions, <span className="heading-gradient">answered</span></>}
          subtitle="The essentials every international student needs to know before studying in Germany."
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-colors dark:bg-primary-900/40 ${
                    isOpen ? 'border-accent-500/40' : 'border-slate-100 dark:border-white/5'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-sm font-semibold text-ink dark:text-white sm:text-base">{f.q}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen ? 'bg-accent-500 text-primary-900 rotate-45' : 'bg-primary-50 text-primary-700 dark:bg-white/5 dark:text-white'
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? '400px' : '0', opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{f.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
