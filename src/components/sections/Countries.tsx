import { useMemo, useState } from "react";
import { Search, Users } from "lucide-react";
import { Reveal, SectionHeading } from "../ui/Reveal";
import { servedCountries } from "../../lib/data";

export function Countries() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return servedCountries;
    return servedCountries.filter((c) => c.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <section id="countries" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Global Reach"
          title={
            <>
              Students from{" "}
              <span className="heading-gradient">30+ countries</span> trust us
            </>
          }
          subtitle="Wherever you are in the world, we have experience guiding students from your region to Germany."
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-md">
            <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-soft dark:border-white/10 dark:bg-primary-900/40">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search your country..."
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-slate-400 dark:text-white"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.02}>
              <div
                className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                  c.name === "Germany"
                    ? "border-accent-500/40 bg-gradient-to-br from-accent-50 to-white dark:from-accent-500/10 dark:to-primary-900/40"
                    : "border-slate-100 bg-white dark:border-white/5 dark:bg-primary-900/40"
                } shadow-soft`}
              >
<div className="flex items-center gap-2">
  <img
    src={`https://flagcdn.com/w40/${c.code}.png`}
    srcSet={`https://flagcdn.com/w80/${c.code}.png 2x`}
    alt={`${c.name} flag`}
    className="h-4 w-6 rounded-[2px] object-cover shadow-sm"
    loading="lazy"
  />
  <span className="font-heading text-sm font-semibold text-ink dark:text-white">
    {c.name}
  </span>
</div>
<p className="mt-1 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
  <Users className="h-3 w-3" />
  {c.students}
</p>
              </div>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-slate-500">
            No matches found, but we serve students worldwide.{" "}
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-semibold text-primary-700 dark:text-accent-400"
            >
              Contact us
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}
