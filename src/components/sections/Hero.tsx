import germany from "../../assets/images/germany.png";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "../../lib/router";
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Globe2,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

const stats = [
  { value: "1000+", label: "Students Guided", icon: Users },
  { value: "95%", label: "Visa Success Rate", icon: ShieldCheck },
  { value: "30+", label: "Countries Served", icon: Globe2 },
  { value: "50+", label: "Partner Institutions", icon: GraduationCap },
];

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

export function Hero() {
  const { navigate } = useRouter();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${germany})`,
            animation: "kenBurns 20s ease-in-out infinite alternate",
          }}
        />
        {/* Light mode: soft frosted-white blur over the photo. Dark mode: original navy gradient, untouched. */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/15 to-white/50 dark:bg-gradient-to-b dark:from-primary-950/75 dark:via-primary-950/60 dark:to-primary-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/5 to-transparent dark:hidden" />
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
        @keyframes starPop { from { opacity: 0; transform: scale(0.4); } to { opacity: 1; transform: scale(1); } }
        @keyframes underlineIn { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>

      <div className="container-page relative flex min-h-[100svh] flex-col justify-center pt-28 pb-20">
        <div className="max-w-3xl">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/60 px-4 py-1.5 backdrop-blur-md dark:border-white/20 dark:bg-white/10">
              <span className="flex h-1.5 w-1.5 rounded-full bg-accent-400" />
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600 dark:text-slate-200">
                Germany Education Consultancy
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-ink text-balance sm:text-6xl lg:text-7xl dark:text-white">
              Study in Germany{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-200 bg-clip-text text-transparent">
                  with Confidence
                </span>
                <span
                  className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-accent-400/60"
                  style={{
                    animation:
                      "underlineIn 0.8s cubic-bezier(0.21,0.5,0.26,0.95) 0.9s both",
                  }}
                />
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-white sm:text-lg text-balance dark:text-slate-200"
              style={{
                textShadow: `
        0 1px 2px rgba(0,0,0,0.9),
        0 2px 8px rgba(0,0,0,0.55),
        0 4px 24px rgba(0,0,0,0.35)
      `,
              }}
            >
              From University Admission to Visa, Insurance, Investment and
              Career Success: everything you need for your Germany journey in
              one place.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate("/booking")}
                className="btn-gold group"
              >
                Apply Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent-400 text-accent-400"
                    style={{
                      animation: `starPop 0.4s ease ${0.6 + i * 0.08}s both`,
                    }}
                  />
                ))}
              </div>
              <p
                className="text-sm text-white dark:text-slate-300"
                style={{
                  textShadow: `
      0 1px 2px rgba(0,0,0,0.9),
      0 2px 6px rgba(0,0,0,0.5),
      0 3px 16px rgba(0,0,0,0.3)
    `,
                }}
              >
                Trusted by students from around the world.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="rounded-2xl border border-primary-200 bg-white/60 p-4 backdrop-blur-md sm:p-5 dark:border-white/15 dark:bg-white/10"
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

      <a
        href="https://www.youtube.com/watch?v=QHwtZsO5Q1o"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-8 right-8 hidden items-center gap-2 rounded-full border border-primary-200 bg-white/60 px-4 py-2 backdrop-blur-md xl:flex
             shadow-[0_0_20px_rgba(255,215,0,0.35)]
             transition-all duration-300 ease-out
             hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.55)]
             dark:border-white/15 dark:bg-white/10"
        style={{ animation: "starPop 0.7s ease 1s both" }}
      >
        <Play className="h-3.5 w-3.5 fill-accent-400 text-accent-400" />
        <span className="text-xs text-slate-600 dark:text-slate-200">
          Watch the journey
        </span>
      </a>
    </section>
  );
}
