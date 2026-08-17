import { useState } from "react";
import {
  MapPin,
  GraduationCap,
  BadgeCheck,
  Briefcase,
  Trophy,
  Users,
  User,
  Check,
} from "lucide-react";
import najrulIslam from "../../assets/images/najrulislam.png";
import { useRouter } from "../../lib/router";
import { Reveal } from "../ui/Reveal";

const academicBackground = [
  "Post Graduate in Data Science & Machine Learning - University of Texas at Austin",
  "MA in International & Development Economics - HTW Berlin",
  "MBA - Dhaka University",
  "BBA - Dhaka University",
];

const certificates = ["Telc C1", "IELTS- Band 7.5"];

const teachingExperience = [
  "Full-Time Faculty, IBAIS University",
  "Adjunct Faculty, Sher-e-Bangla Agricultural University, Sonargaon University, Royal University",
  "External Examiner, Jagannath University",
];

const achievements = [
  "19th Place, Dhaka Board (2001)",
  "80%+ marks across PG, Master & Bachelor",
];

const pricing: Record<
  "individual" | "group",
  { level: string; price: string; duration: string }[]
> = {
  individual: [
    { level: "A1", price: "€180", duration: "6 weeks" },
    { level: "A2", price: "€200", duration: "6 weeks" },
    { level: "B1", price: "€230", duration: "8 weeks" },
    { level: "B2", price: "€250", duration: "8 weeks" },
    { level: "C1", price: "€300", duration: "10 weeks" },
    { level: "C2", price: "€350", duration: "10 weeks" },
  ],
  group: [
    { level: "A1", price: "€90", duration: "6 weeks" },
    { level: "A2", price: "€100", duration: "6 weeks" },
    { level: "B1", price: "€120", duration: "8 weeks" },
    { level: "B2", price: "€130", duration: "8 weeks" },
    { level: "C1", price: "€150", duration: "10 weeks" },
    { level: "C2", price: "€175", duration: "10 weeks" },
  ],
};

export function GermanLanguageProgram() {
  const { navigate } = useRouter();

  const [batchType, setBatchType] = useState<"individual" | "group">(
    "individual",
  );

  return (
    <section
      id="german-language"
      className="relative overflow-hidden py-16 sm:py-20"
    >
      <div className="container-page">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span
              className="
                inline-flex items-center gap-2 rounded-full
                border border-indigo-400/30
                bg-indigo-500/10
                px-3.5 py-1
                text-xs font-semibold uppercase tracking-[0.18em]
                text-indigo-600
                dark:text-indigo-300
              "
            >
              <GraduationCap className="h-3.5 w-3.5" />
              Language Program
            </span>

            <h2
              className="
                mt-4 font-heading text-2xl font-bold
                text-slate-900
                sm:text-3xl
                dark:text-white
              "
            >
              Learn German from a Certified Educator
            </h2>

            <p
              className="
                mt-3 text-sm leading-relaxed
                text-slate-600
                dark:text-slate-300
              "
            >
              Structured A1–B2 classes led by an experienced faculty member,
              with individual and small-group batches to fit your schedule.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Instructor profile card */}
          <Reveal delay={0.08}>
            <div
              className="
                h-full rounded-2xl
                border border-slate-200
                bg-white
                p-6 shadow-sm
                dark:border-white/10
                dark:bg-white/[0.03]
                dark:shadow-none
              "
            >
              {/* Instructor Profile */}
              <div
                className="
    relative overflow-hidden rounded-2xl
    border border-slate-200
    bg-gradient-to-br from-indigo-50 via-white to-slate-50
    p-5
    dark:border-white/10
    dark:from-indigo-500/10
    dark:via-white/[0.03]
    dark:to-primary-950/40
  "
              >
                {/* Decorative glow */}
                <div
                  className="
      absolute -right-12 -top-12
      h-32 w-32 rounded-full
      bg-indigo-400/20 blur-3xl
      dark:bg-indigo-500/20
    "
                />

                <div className="relative flex items-center gap-5">
                  {/* Instructor Image */}
                  <div
                    className="
        relative h-28 w-28 shrink-0
        rounded-2xl
        bg-gradient-to-br from-indigo-500/30 to-purple-500/20
        p-1
        shadow-lg shadow-indigo-500/10
      "
                  >
                    <div
                      className="
          h-full w-full overflow-hidden rounded-[14px]
          bg-slate-100
          dark:bg-primary-800
        "
                    >
                      <img
                        src={najrulIslam}
                        alt="Md Najrul Islam"
                        loading="lazy"
                        className="
            h-full w-full object-cover
            object-top
            transition-transform duration-500
            hover:scale-105
          "
                      />
                    </div>

                    {/* Verified Badge */}
                    <div
                      className="
          absolute -bottom-2 -right-2
          flex h-7 w-7 items-center justify-center
          rounded-full
          border-2 border-white
          bg-indigo-600
          shadow-md
          dark:border-primary-950
        "
                      title="Certified Educator"
                    >
                      <BadgeCheck className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Instructor Details */}
                  <div className="min-w-0">
                    <p
                      className="
          font-heading text-xl font-bold
          text-slate-900
          dark:text-white
        "
                    >
                      Md Najrul Islam
                    </p>

                    <p
                      className="
          mt-1 flex items-center gap-1.5
          text-xs
          text-slate-500
          dark:text-slate-400
        "
                    >
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      Based in Berlin, Germany
                    </p>

                    <div
                      className="
          mt-3 inline-flex items-center gap-1.5
          rounded-full
          bg-indigo-500/10
          px-2.5 py-1
          text-[10px] font-semibold
          text-indigo-600
          dark:text-indigo-300
        "
                    >
                      <GraduationCap className="h-3 w-3" />
                      German Language Instructor
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificates */}
              <div className="mt-5 flex flex-wrap gap-2">
                {certificates.map((c) => (
                  <span
                    key={c}
                    className="
                      inline-flex items-center gap-1.5 rounded-full
                      bg-indigo-500/10
                      px-3 py-1
                      text-[11px] font-medium
                      text-indigo-600
                      dark:text-indigo-300
                    "
                  >
                    <BadgeCheck className="h-3 w-3" />
                    {c}
                  </span>
                ))}
              </div>

              {/* Academic Background */}
              <div className="mt-6">
                <p
                  className="
                    flex items-center gap-2
                    text-xs font-semibold uppercase tracking-wider
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  <GraduationCap className="h-3.5 w-3.5" />
                  Academic Background
                </p>

                <ul className="mt-2 space-y-1.5">
                  {academicBackground.map((item) => (
                    <li
                      key={item}
                      className="
                        flex gap-2 text-xs leading-relaxed
                        text-slate-600
                        dark:text-slate-300
                      "
                    >
                      <Check
                        className="
                          mt-0.5 h-3 w-3 shrink-0
                          text-indigo-500
                          dark:text-indigo-400
                        "
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Teaching Experience */}
              <div className="mt-6">
                <p
                  className="
                    flex items-center gap-2
                    text-xs font-semibold uppercase tracking-wider
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  <Briefcase className="h-3.5 w-3.5" />
                  Teaching Experience
                </p>

                <ul className="mt-2 space-y-1.5">
                  {teachingExperience.map((item) => (
                    <li
                      key={item}
                      className="
                        flex gap-2 text-xs leading-relaxed
                        text-slate-600
                        dark:text-slate-300
                      "
                    >
                      <Check
                        className="
                          mt-0.5 h-3 w-3 shrink-0
                          text-indigo-500
                          dark:text-indigo-400
                        "
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="mt-6">
                <p
                  className="
                    flex items-center gap-2
                    text-xs font-semibold uppercase tracking-wider
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  <Trophy className="h-3.5 w-3.5" />
                  Achievements
                </p>

                <ul className="mt-2 space-y-1.5">
                  {achievements.map((item) => (
                    <li
                      key={item}
                      className="
                        flex gap-2 text-xs leading-relaxed
                        text-slate-600
                        dark:text-slate-300
                      "
                    >
                      <Check
                        className="
                          mt-0.5 h-3 w-3 shrink-0
                          text-indigo-500
                          dark:text-indigo-400
                        "
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Pricing card */}
          <Reveal delay={0.16}>
            <div
              className="
                flex h-full flex-col rounded-2xl
                border border-slate-200
                bg-white
                p-6 shadow-sm
                dark:border-white/10
                dark:bg-white/[0.03]
                dark:shadow-none
              "
            >
              {/* Pricing Header */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p
                  className="
                    font-heading text-lg font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  Course Fees
                </p>

                {/* Batch Toggle */}
                <div
                  className="
                    inline-flex rounded-full
                    border border-slate-200
                    bg-slate-100
                    p-1
                    dark:border-white/10
                    dark:bg-primary-950
                  "
                >
                  <button
                    onClick={() => setBatchType("individual")}
                    className={`
                      flex items-center gap-1.5
                      rounded-full px-3.5 py-1.5
                      text-xs font-semibold
                      transition-colors
                      ${
                        batchType === "individual"
                          ? `
                            bg-indigo-100
                            text-indigo-700
                            dark:bg-indigo-500/20
                            dark:text-indigo-300
                          `
                          : `
                            text-slate-500
                            hover:text-slate-800
                            dark:text-slate-400
                            dark:hover:text-slate-200
                          `
                      }
                    `}
                  >
                    <User className="h-3.5 w-3.5" />
                    Individual
                  </button>

                  <button
                    onClick={() => setBatchType("group")}
                    className={`
                      flex items-center gap-1.5
                      rounded-full px-3.5 py-1.5
                      text-xs font-semibold
                      transition-colors
                      ${
                        batchType === "group"
                          ? `
                            bg-indigo-100
                            text-indigo-700
                            dark:bg-indigo-500/20
                            dark:text-indigo-300
                          `
                          : `
                            text-slate-500
                            hover:text-slate-800
                            dark:text-slate-400
                            dark:hover:text-slate-200
                          `
                      }
                    `}
                  >
                    <Users className="h-3.5 w-3.5" />
                    Group (5–10)
                  </button>
                </div>
              </div>

              {/* Pricing List */}
              <div
                className="
                  mt-5 divide-y
                  divide-slate-200
                  overflow-hidden rounded-xl
                  border border-slate-200
                  dark:divide-white/10
                  dark:border-white/10
                "
              >
                {pricing[batchType].map((row) => (
                  <div
                    key={row.level}
                    className="
                      flex items-center justify-between
                      bg-slate-50
                      px-4 py-3.5
                      transition-colors
                      hover:bg-slate-100
                      dark:bg-primary-950/40
                      dark:hover:bg-primary-950/60
                    "
                  >
                    <div>
                      <p
                        className="
                          text-sm font-semibold
                          text-slate-900
                          dark:text-white
                        "
                      >
                        Level {row.level}
                      </p>

                      <p
                        className="
                          text-xs
                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        {row.duration}
                      </p>
                    </div>

                    <p
                      className="
                        font-heading text-lg font-bold
                        text-indigo-600
                        dark:text-indigo-300
                      "
                    >
                      {row.price}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pricing Note */}
              <p
                className="
                  mt-3 text-[11px]
                  text-slate-500
                  dark:text-slate-500
                "
              >
                {batchType === "group"
                  ? "Group batches run with 5–10 learners per cohort."
                  : "One-on-one sessions, scheduled around your availability."}
              </p>

              {/* Enroll Button */}
              <button
                onClick={() => navigate("/germanlanguage")}
                className="btn-gold mt-6 w-full justify-center"
              >
                Enroll Now
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
