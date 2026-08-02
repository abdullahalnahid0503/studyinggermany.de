import { useEffect, useState } from "react";
import { MapPin, Star, Search, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "../components/ui/Reveal";
import { universities } from "../lib/data";
import { germanPublicUniversities } from "../lib/universities";
import { UniversityTicker } from "../components/layout/UniversityTicker";
import { useRouter } from "../lib/router";

const allTypes = ["All", "TU / Technical", "Classic", "Applied Sciences"];

function typeOf(name: string) {
  if (/^TU |Technical University|^KIT|^TH /.test(name)) return "TU / Technical";
  if (/University of Applied|HAW|HTW|HS |Hochschule/.test(name))
    return "Applied Sciences";
  return "Classic";
}

export default function UniversitiesPage() {
  const { navigate } = useRouter();
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState("All");

  useEffect(() => {
    document.title = "German Universities - StudyingGermany.de";
  }, []);

  const filtered = germanPublicUniversities.filter((u) => {
    const matchQ = !query || u.name.toLowerCase().includes(query.toLowerCase());
    const matchT = activeType === "All" || typeOf(u.name) === activeType;
    return matchQ && matchT;
  });

  return (
    <main className="min-h-screen bg-canvas pt-28 pb-24 dark:bg-primary-950">
      <UniversityTicker />

      <div className="container-page mt-16">
        <SectionHeading
          eyebrow="German Universities"
          title={
            <>
              All public universities,{" "}
              <span className="heading-gradient">tuition-free</span>
            </>
          }
          subtitle="Germany has over 80 state-funded universities. Browse them all and apply with our expert guidance."
        />

        {/* Search and filter */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <div className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-soft dark:border-white/10 dark:bg-primary-900/40">
              <Search className="h-4 w-4 shrink-0 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search universities..."
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-slate-400 dark:text-white"
              />
            </div>
            {allTypes.map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-all ${
                  activeType === t
                    ? "bg-primary-700 text-white shadow-soft"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Count */}
        <Reveal delay={0.15}>
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
            Showing{" "}
            <strong className="text-ink dark:text-white">
              {filtered.length}
            </strong>{" "}
            universities
          </p>
        </Reveal>

        {/* Grid from full list */}
        <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((u, i) => (
            <Reveal key={u.name} delay={Math.min(i * 0.015, 0.3)}>
              <a
                href={u.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-4 py-3.5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/30 dark:border-white/5 dark:bg-primary-900/40"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-50 dark:bg-white/5">
                    <GraduationCapIcon />
                  </span>
                  <span className="text-[13px] font-medium leading-snug text-ink dark:text-white">
                    {u.name}
                  </span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-500 dark:text-slate-600" />
              </a>
            </Reveal>
          ))}
        </div>

        {/* Featured cards */}
        <div className="mt-20">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-ink dark:text-white">
              Top Partner Universities
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Our most popular placement destinations with curated programs.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {universities.map((u, i) => (
              <Reveal key={u.name} delay={(i % 3) * 0.08}>
                <article className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 dark:border-white/5 dark:bg-primary-900/40">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={u.image}
                      alt={u.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/10 to-transparent" />
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-primary-800 backdrop-blur">
                      <Star className="h-3 w-3 fill-accent-500 text-accent-500" />{" "}
                      {u.ranking}
                    </span>
                    <p className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 text-xs font-medium text-white">
                      <MapPin className="h-3.5 w-3.5 text-accent-300" />{" "}
                      {u.city}, Germany
                    </p>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-base font-semibold leading-snug text-ink dark:text-white">
                      {u.name}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {u.programs.map((p) => (
                        <span
                          key={p}
                          className="rounded-full bg-primary-50 px-2.5 py-1 text-[11px] font-medium text-primary-700 dark:bg-white/5 dark:text-slate-300"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => navigate("/booking")}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-700 transition-colors hover:text-accent-600 dark:text-accent-400"
                    >
                      Apply{" "}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function GraduationCapIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 fill-none stroke-current stroke-2 text-primary-600 dark:text-accent-400"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
