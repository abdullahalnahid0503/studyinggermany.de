import { useEffect } from "react";
import { ArrowUpRight, Crown } from "lucide-react";
import { Reveal, SectionHeading } from "../components/ui/Reveal";
import { services } from "../lib/data";
import { useRouter } from "../lib/router";

export default function ServicesPage() {
  const { navigate } = useRouter();
  useEffect(() => {
    document.title = "Services - StudyingGermany.de";
  }, []);

  return (
    <main className="min-h-screen bg-canvas pt-28 pb-24 dark:bg-primary-950">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Everything for your journey,{" "}
              <span className="heading-gradient">under one roof</span>
            </>
          }
          subtitle="From your first consultation to landing a job in Germany, we handle every milestone with expert precision."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.07}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow ${
                  service.premium
                    ? "border-accent-500/30 bg-gradient-to-br from-accent-50 via-white to-accent-50/50 dark:from-accent-500/10 dark:via-primary-900/40 dark:to-accent-500/5"
                    : "border-slate-100 bg-white shadow-card dark:border-white/5 dark:bg-primary-900/40"
                }`}
              >
                {service.premium && (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-accent-400 to-accent-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-900">
                    <Crown className="h-3 w-3" /> Premium
                  </span>
                )}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${
                    service.premium
                      ? "bg-gradient-to-br from-accent-400 to-accent-600 text-primary-900"
                      : "bg-primary-50 text-primary-700 group-hover:bg-primary-700 group-hover:text-accent-400 dark:bg-white/5 dark:text-white"
                  }`}
                >
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading text-base font-semibold text-ink dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {service.description}
                </p>
                <button
                  onClick={() =>
                    service.title === "German Language Guidance"
                      ? navigate("/germanlanguage")
                      : navigate("/booking")
                  }
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-700 transition-colors hover:text-accent-600 dark:text-accent-400"
                >
                  {service.title === "German Language Guidance"
                    ? "Learn More"
                    : "Book Now"}{" "}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-primary-800 to-primary-950 p-8 text-center sm:p-12">
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Not sure which service you need?
            </h2>
            <p className="mt-3 text-slate-300">
              Book a free 30-minute call and we will guide you.
            </p>
            <button
              onClick={() => navigate("/booking")}
              className="btn-gold mt-7"
            >
              Book Free Consultation
            </button>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
