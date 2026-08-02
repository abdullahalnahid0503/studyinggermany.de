import { useState } from "react";
import { Play, Quote, X } from "lucide-react";
import { Reveal, SectionHeading } from "../ui/Reveal";
import { successStories } from "../../lib/data";

export function SuccessStories() {
  const [active, setActive] = useState<number | null>(null);

  const getStoryFlag = (story: (typeof successStories)[number]) => {
    const storyWithFlag = story as typeof story & { flag?: string };
    return storyWithFlag.flag ?? "🌍";
  };

  return (
    <section id="stories" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Success Stories"
          title={
            <>
              Real students,{" "}
              <span className="heading-gradient">real journeys</span>
            </>
          }
          subtitle="Every story starts with a single conversation. Here's what our students achieved."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {successStories.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 dark:border-white/5 dark:bg-primary-900/40">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/30 to-transparent" />
                  <button
                    onClick={() => setActive(i)}
                    aria-label={`View ${s.name}'s testimonial`}
                    className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary-700 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 hover:scale-110"
                  >
                    <Play className="h-5 w-5 fill-current" />
                  </button>
                  <span className="absolute right-3 top-3 text-2xl">
                    {getStoryFlag(s)}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-heading text-base font-bold text-white">
                      {s.name}
                    </p>
                    <p className="text-xs text-slate-300">{s.country}</p>
                    <p className="mt-2 text-xs font-medium text-accent-300">
                      {s.university}
                    </p>
                    <p className="text-[11px] text-slate-300">{s.program}</p>
                  </div>
                </div>
                <div className="p-5">
                  <Quote className="h-4 w-4 text-accent-500" />
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {s.quote.length > 120
                      ? `${s.quote.slice(0, 120)}...`
                      : s.quote}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-primary-950/80 p-5 backdrop-blur-md"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-primary-900"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "modalIn 0.3s ease-out" }}
          >
            <style>{`@keyframes modalIn { from { transform: scale(0.92); opacity: 0; } to { transform: scale(1); opacity: 1; } }`}</style>
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 hover:bg-white"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid gap-0 sm:grid-cols-[0.8fr_1fr]">
              <div className="relative aspect-square sm:aspect-auto">
                <img
                  src={successStories[active].image}
                  alt={successStories[active].name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-7">
                <Quote className="h-7 w-7 text-accent-500" />
                <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  "{successStories[active].quote}"
                </p>
                <div className="mt-6 border-t border-slate-100 pt-4 dark:border-white/10">
                  <p className="font-heading text-base font-bold text-ink dark:text-white">
                    {getStoryFlag(successStories[active])}{" "}
                    {successStories[active].name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {successStories[active].university},{" "}
                    {successStories[active].program}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
