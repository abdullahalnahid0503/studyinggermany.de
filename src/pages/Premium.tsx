import { useState } from "react";
import { useEffect, useRef } from "react";
import premiumImage from "../assets/images/premium.png";
import { useRouter } from "../lib/router";
import horbachImage from "../assets/images/horbach.jpeg";
import herFinanzImage from "../assets/images/HerFinanz.png";
import finanz4BeginnersImage from "../assets/images/Finanz4Beginners.png";
import { Reveal } from "../components/ui/Reveal";

import {
  GraduationCap,
  Briefcase,
  TrendingUp,
  Home,
  Building2,
  Plus,
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  ShieldCheck,
  Award,
} from "lucide-react";

// ---------------------------------------------------------------------------
// DATA
// ---------------------------------------------------------------------------

const stats = [
  { value: "500+", label: "Sessions Delivered", icon: Users },
  { value: "95%", label: "Client Satisfaction", icon: ShieldCheck },
  { value: "5", label: "Core Focus Areas", icon: Award },
  { value: "1-on-1", label: "With Billal", icon: Star },
];

const services = [
  {
    icon: GraduationCap,
    title: "Higher Study",
    description:
      "Guidance on choosing the right country, university, and program for your academic goals abroad.",
    items: [
      "Country selection",
      "Program guidance",
      "University applications",
      "Admission strategy",
    ],
  },
  {
    icon: Briefcase,
    title: "Career",
    description:
      "Tailored career coaching to help you navigate job markets and build a thriving professional life.",
    items: [
      "Career path planning",
      "Job market insights",
      "CV & interview prep",
      "Professional networking",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment",
    description:
      "Smart financial planning and investment strategies tailored for Probashi Bangladeshis worldwide.",
    items: [
      "Short, mid & long-term plans",
      "Halal investment options",
      "Private pension planning",
      "Real estate financing",
    ],
  },
  {
    icon: Home,
    title: "Long Term Settlement",
    description:
      "Comprehensive support for building a stable, fulfilling life in your adopted country.",
    items: [
      "Residence planning",
      "Insurance & protection",
      "Community integration",
      "Asset building",
    ],
  },
  {
    icon: Building2,
    title: "Set Up Business",
    description:
      "Expert consulting for entrepreneurs from founder visas to freelance and self-employment routes.",
    items: [
      "Founder consulting",
      "Business visa guidance",
      "Self-employment visa",
      "Freelance visa support",
    ],
  },
];

// Bento layout — item 0 is featured (2x2), the rest fill single cells.
// grid-cols-4 grid-rows-2 = 8 cells: 4 (featured) + 4 (singles) = 8. Clean fit.
const layout = [
  { col: "lg:col-span-2", row: "lg:row-span-2", featured: true },
  { col: "lg:col-span-1", row: "", featured: false },
  { col: "lg:col-span-1", row: "", featured: false },
  { col: "lg:col-span-1", row: "", featured: false },
  { col: "lg:col-span-1", row: "", featured: false },
];

const accents = [
  "bg-accent-500/15 text-accent-600 dark:bg-accent-500/20 dark:text-accent-400",
  "bg-blue-500/15 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
  "bg-emerald-500/15 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
  "bg-violet-500/15 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400",
  "bg-rose-500/15 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400",
];

const investmentPartners = [
  {
    name: "Horbach",
    description: "Global financial consulting for individuals and families.",
    image: horbachImage,
  },
  {
    name: "Finanz4women",
    description:
      "Financial planning designed for women's independence and wealth.",
    image: herFinanzImage,
  },
  {
    name: "Finanz4beginners",
    description: "Simple financial guidance for beginners.",
    image: finanz4BeginnersImage,
  },
];

const investmentTypes = [
  "Short-term investment",
  "Mid-term investment",
  "Long-term investment",
  "Private Pension Planning",
  "All Insurance",
  "Business Launch",
  "Real Estate Financing",
  "Halal Investment",
];

const faqs = [
  {
    q: "Who is this consultation for?",
    a: "This service is designed for Bangladeshis living abroad who need guidance on study, career, investment, settlement, or business.",
  },
  {
    q: "What is the consultation fee?",
    a: "The consultation fee is 2,900 BDT for a one-hour session with Billal.",
  },
  {
    q: "Can I get investment guidance?",
    a: "Yes. Investment planning, insurance, pension, real estate, and halal investment options are covered.",
  },
];

// ---------------------------------------------------------------------------
// SMALL UTILITIES (mirrors the FadeIn used in Hero.tsx)
// ---------------------------------------------------------------------------

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVis(true), delay * 1000 + 200);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease, transform 0.7s cubic-bezier(0.21,0.5,0.26,0.95)`,
      }}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// PAGE
// ---------------------------------------------------------------------------

export default function Premium() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-canvas text-ink dark:bg-primary-950 dark:text-white">
      {/* ------------------------------------------------------------- */}
      {/* HERO — text and portrait live in separate columns/cards so    */}
      {/* the copy can NEVER overlap the face, on any breakpoint/theme. */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:flex lg:min-h-[100svh] lg:items-center lg:pt-32 lg:pb-20">
        {/* Ambient background — decorative only, no photo, so it never competes with text */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-canvas dark:bg-primary-950" />
          <div className="absolute inset-0 bg-grid-light bg-[size:48px_48px] opacity-10 dark:opacity-20" />
          <div
            className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent-500/15 blur-[120px] dark:bg-accent-500/20"
            style={{ animation: "pulse1 8s ease-in-out infinite" }}
          />
          <div
            className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-primary-300/25 blur-[120px] dark:bg-primary-400/30"
            style={{ animation: "pulse1 10s ease-in-out infinite 2s" }}
          />
        </div>

        <style>{`
          @keyframes kenBurns { from { transform: scale(1); } to { transform: scale(1.08); } }
          @keyframes pulse1 { 0%,100% { opacity: 0.3; } 50% { opacity: 0.6; } }
          @keyframes float0 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
          @keyframes float1 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
          @keyframes float2 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
          @keyframes float3 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        `}</style>

        <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-10">
          {/* ---------------- Text column ---------------- */}
          <div className="max-w-xl">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-1.5 dark:border-white/20 dark:bg-white/10">
                <Star className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-700 dark:text-slate-200">
                  1-Hour Life Coaching Session with Billal
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl dark:text-white">
                Do you have{" "}
                <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-200 bg-clip-text text-transparent">
                  confusion
                </span>{" "}
                about your future?
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg text-balance dark:text-slate-300">
                Expert guidance on higher education, careers, investment,
                settlement, and business for everyone, one conversation at a
                time.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate("/booking")}
                  className="btn-gold group"
                >
                  Book Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <button
                  onClick={() => navigate("/services")}
                  className="btn-outline"
                >
                  Explore Services
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-primary-200 bg-white p-4 sm:p-5 dark:border-white/15 dark:bg-white/10"
                    style={{
                      animation: `float${i} ${4 + i}s ease-in-out infinite`,
                    }}
                  >
                    <s.icon className="h-4 w-4 text-accent-600 dark:text-accent-400" />
                    <p className="mt-2 font-heading text-2xl font-bold text-ink sm:text-3xl dark:text-white">
                      {s.value}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* ---------------- Portrait column ---------------- */}
          <FadeIn
            delay={0.2}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-primary-200 shadow-card dark:border-white/10">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${premiumImage})`,
                  animation: "kenBurns 20s ease-in-out infinite alternate",
                }}
              />
              {/* Subtle bottom scrim, purely decorative — sits below the frame edge, never behind headline text */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Decorative accent blob behind the frame */}
            <div className="pointer-events-none absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-accent-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 -z-10 h-48 w-48 rounded-full bg-primary-400/20 blur-3xl" />
          </FadeIn>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SERVICES — bento grid, matching WhyGermany.tsx exactly */}
      {/* ------------------------------------------------------------- */}
      <section
        id="services"
        className="relative overflow-hidden bg-canvas py-24 sm:py-32 dark:bg-primary-950"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(45,116,176,0.10),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(45,116,176,0.18),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-grid-light bg-[size:48px_48px] opacity-[0.03] dark:opacity-[0.04]" />

        <div className="container-page relative">
          <Reveal>
            <div className="max-w-2xl">
              <span className="section-eyebrow dark:!bg-white/5 dark:!border-white/10 !text-accent-600 dark:!text-accent-400">
                What We Offer
              </span>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-ink text-balance sm:text-5xl md:text-6xl dark:text-white">
                Five ways we help you{" "}
                <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-200 bg-clip-text text-transparent">
                  move forward
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg dark:text-primary-300">
                One consultant, five areas of expertise. Tap any card to see
                exactly what's covered.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
              {services.map((service, i) => {
                const Icon = service.icon;
                const l = layout[i];
                const isFeatured = l.featured;
                const isOpen = activeService === i;

                return (
                  <div
                    key={service.title}
                    className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${l.col} ${l.row} ${
                      isFeatured
                        ? "border-primary-200 bg-gradient-to-br from-primary-50 to-primary-100/60 hover:border-accent-500/30 hover:shadow-soft dark:border-white/10 dark:from-primary-800/80 dark:to-primary-900/60 dark:hover:shadow-glow"
                        : "border-primary-100 bg-white hover:border-primary-200 hover:bg-primary-50/60 dark:border-white/5 dark:bg-white/[0.03] dark:hover:border-white/10 dark:hover:bg-white/[0.06]"
                    }`}
                  >
                    {isFeatured && (
                      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-150" />
                    )}

                    <div
                      className={`flex h-full flex-col ${isFeatured ? "p-7" : "p-5"}`}
                    >
                      <div
                        className={`flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                          isFeatured ? "h-12 w-12" : "h-9 w-9"
                        } ${accents[i % accents.length]}`}
                      >
                        <Icon className={isFeatured ? "h-6 w-6" : "h-4 w-4"} />
                      </div>

                      <h3
                        className={`mt-4 font-heading font-bold text-ink dark:text-white ${
                          isFeatured
                            ? "text-xl sm:text-2xl"
                            : "text-sm sm:text-base"
                        }`}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={`mt-2 leading-relaxed text-slate-500 dark:text-primary-300 ${
                          isFeatured ? "text-sm sm:text-base" : "text-xs"
                        }`}
                      >
                        {service.description}
                      </p>

                      <button
                        onClick={() => setActiveService(isOpen ? null : i)}
                        className="mt-auto pt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent-600 transition-all duration-200 hover:gap-2.5 hover:text-accent-500 dark:text-accent-400 dark:hover:text-accent-300"
                      >
                        {isOpen ? "Hide details" : "View details"}
                        <ArrowRight
                          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-90" : ""}`}
                        />
                      </button>

                      {isOpen && (
                        <ul className="mt-4 space-y-2 border-t border-primary-100 pt-4 dark:border-white/10">
                          {service.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-slate-500 dark:text-primary-300"
                            >
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent-600 dark:text-accent-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary-100 bg-primary-50/60 px-6 py-4 sm:flex-row dark:border-white/5 dark:bg-white/[0.03]">
              <p className="text-center text-sm text-slate-500 sm:text-left dark:text-primary-300">
                Not sure where to start?{" "}
                <span className="font-semibold text-ink dark:text-white">
                  Billal
                </span>{" "}
                will help you figure out the right path in your first session.
              </p>
              <button
                onClick={() => navigate("/booking")}
                className="btn-gold shrink-0"
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* INVESTMENT PARTNERS */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-canvas dark:bg-primary-950">
        <div className="container-page">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <span className="section-eyebrow dark:!bg-white/5 dark:!border-white/10 !text-accent-600 dark:!text-accent-400">
                Trusted Network
              </span>
              <h2 className="mt-5 font-heading text-4xl font-bold text-ink sm:text-5xl dark:text-white">
                Investment Partners
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {investmentPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="rounded-3xl border border-primary-100 bg-white p-6 shadow-card transition hover:border-accent-400/30 hover:bg-primary-50/60 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
                >
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white/90 border border-primary-100 dark:border-none">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                  <h3 className="mt-4 font-heading font-bold text-ink dark:text-white">
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-primary-300">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Investment areas — was orphaned outside the component before; fixed */}
          <Reveal delay={0.2}>
            <div className="mt-16">
              <h3 className="text-center font-heading text-2xl font-bold text-ink sm:text-3xl dark:text-white">
                Investment Areas We Cover
              </h3>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {investmentTypes.map((type) => (
                  <div
                    key={type}
                    className="flex items-center gap-3 rounded-xl border border-primary-100 bg-white p-5 shadow-sm transition hover:border-accent-400/30 dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0 text-accent-600 dark:text-accent-400" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      {type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* FAQ */}
      {/* ------------------------------------------------------------- */}
      <section
        id="faq"
        className="relative overflow-hidden bg-slate-50 py-24 dark:bg-primary-950/50 sm:py-32"
      >
        <div className="container-page">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <span className="section-eyebrow dark:!bg-white/5 dark:!border-white/10 !text-accent-600 dark:!text-accent-400">
                FAQ
              </span>
              <h2 className="mt-5 font-heading text-4xl font-bold text-ink sm:text-5xl dark:text-white">
                Questions,{" "}
                <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-200 bg-clip-text text-transparent">
                  answered
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg dark:text-primary-300">
                Everything you need to know before booking your session with
                Billal.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 max-w-3xl space-y-3">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={f.q} delay={i * 0.05}>
                  <div
                    className={`overflow-hidden rounded-2xl border bg-white transition-colors dark:bg-primary-900/40 ${
                      isOpen
                        ? "border-accent-500/40"
                        : "border-slate-100 dark:border-white/5"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading text-sm font-semibold text-ink dark:text-white sm:text-base">
                        {f.q}
                      </span>
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "bg-accent-500 text-primary-900 rotate-45"
                            : "bg-primary-50 text-primary-700 dark:bg-white/5 dark:text-white"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: isOpen ? "400px" : "0",
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
