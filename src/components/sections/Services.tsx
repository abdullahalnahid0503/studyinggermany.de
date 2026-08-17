import { useState } from "react";
import {
  ArrowUpRight,
  Crown,
  GraduationCap,
  Plane,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { services } from "../../lib/data";
import { useRouter } from "../../lib/router";

const tabs = [
  {
    id: "admission",
    label: "Admission",
    icon: GraduationCap,
    keys: ["University Admission", "CV Review", "German Language Guidance"],
  },
  {
    id: "visa",
    label: "Visa & Finance",
    icon: Plane,
    keys: [
      "Visa Services",
      "Health Insurance",
      "Travel Insurance",
      "Blocked Account Assistance",
    ],
  },
  {
    id: "settlement",
    label: "Settlement",
    icon: Sparkles,
    keys: ["Accommodation Support", "Airport Pickup", "Settlement Support"],
  },
  {
    id: "career",
    label: "Career",
    icon: Briefcase,
    keys: [
      "Career Preparation",
      "Internship Guidance",
      "Student Job Assistance",
      "Investment Guidance",
    ],
  },
  {
    id: "premium",
    label: "Premium",
    icon: Crown,
    keys: ["One Hour with Billal Mahmud"],
  },
];

export function Services() {
  const [activeTab, setActiveTab] = useState("admission");
  const { navigate } = useRouter();

  const tab = tabs.find((t) => t.id === activeTab)!;
  const tabServices = tab.keys
    .map((k) => services.find((s) => s.title === k))
    .filter(Boolean) as typeof services;

  const isPremiumTab = activeTab === "premium";

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-20 dark:bg-primary-950/50 sm:py-28"
    >
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <span className="section-eyebrow">Our Services</span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-balance text-ink dark:text-white sm:text-4xl md:text-5xl">
              Everything for your journey,{" "}
              <span className="heading-gradient">under one roof</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">
              From your first consultation to landing a job in Germany, we
              handle every milestone with expert precision.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Tab strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {tabs.map((t) => {
              const isActive = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                    isActive
                      ? t.id === "premium"
                        ? "border-accent-400/40 bg-gradient-to-r from-accent-400 to-accent-600 text-primary-900 shadow-gold"
                        : "border-primary-700 bg-primary-700 text-white shadow-soft"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-800 dark:border-white/10 dark:bg-primary-900/30 dark:text-slate-400 dark:hover:border-white/20 dark:hover:text-white"
                  }`}
                >
                  <t.icon className="h-3.5 w-3.5" />
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Tab panel */}
          <div
            key={activeTab}
            className="mt-6"
            style={{ animation: "tabIn 0.25s ease-out" }}
          >
            <style>{`@keyframes tabIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>

            {isPremiumTab ? (
              /* Premium — full-width spotlight */
              <div className="relative overflow-hidden rounded-3xl border border-accent-400/30 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 p-8 sm:p-12">
                <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-500/15 blur-[80px]" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent-500/10 blur-[80px]" />
                <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-400/30 bg-accent-500/15 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-300">
                      <Crown className="h-3 w-3" /> Premium Session
                    </span>
                    <h3 className="mt-4 font-heading text-2xl font-bold text-white sm:text-3xl">
                      One Hour with Billal Mahmud
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-primary-200">
                      {tabServices[0]?.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {[
                        "Personal Germany roadmap tailored to your profile",
                        "University shortlist strategy and program fit",
                        "Visa timeline and document prep walkthrough",
                        "Career path and job market insights",
                      ].map((pt) => (
                        <li
                          key={pt}
                          className="flex items-center gap-2.5 text-sm text-primary-100"
                        >
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-400">
                            <ArrowUpRight className="h-2.5 w-2.5" />
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => navigate("/premium")}
                    className="btn-gold shrink-0 !px-8 !py-4 text-base"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ) : (
              /* Regular tabs — 2-col list */
              <div className="grid gap-3 sm:grid-cols-2">
                {tabServices.map((service, i) => (
                  <a
                    key={service.title}
                    href={
                      service.title === "German Language Guidance"
                        ? "/german-language"
                        : "/booking"
                    }
                    onClick={(e) => {
                      e.preventDefault();

                      if (service.title === "German Language Guidance") {
                        navigate("/germanlanguage");
                      } else {
                        navigate("/booking");
                      }
                    }}
                    className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-all duration-200 hover:border-primary-100 hover:shadow-card dark:border-white/5 dark:bg-primary-900/30 dark:hover:border-white/10"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors duration-200 group-hover:bg-primary-700 group-hover:text-accent-400 dark:bg-white/5 dark:text-slate-300">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-ink dark:text-white">
                        {service.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                        {service.description}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-600 dark:text-slate-600 dark:group-hover:text-accent-400" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate("/booking")}
              className="btn-primary"
            >
              Get Started
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
