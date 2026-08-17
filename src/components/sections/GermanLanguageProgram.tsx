import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
import premiumImage from "../../assets/images/premium.png";
import sadiarahman from "../../assets/images/sadiarahman.png";

import { useRouter } from "../../lib/router";
import { Reveal } from "../ui/Reveal";

type Instructor = {
  id: string;
  name: string;
  location: string;
  title: string;
  image?: string;
  certificates: string[];
  academicBackground: string[];
  teachingExperience: string[];
  achievements: string[];
};

const instructors: Instructor[] = [
  {
    id: "najrul-islam",
    name: "Md Najrul Islam",
    location: "Based in Berlin, Germany",
    title: "German Language Instructor",
    image: najrulIslam,
    certificates: ["Telc C1", "IELTS- Band 7.5"],
    academicBackground: [
      "PG in Data Science & Machine Learning - University of Texas at Austin",
      "MA in International & Development Economics - HTW Berlin",
      "MBA - Dhaka University",
      "BBA - Dhaka University",
    ],
    teachingExperience: [
      "Full-Time Faculty, IBAIS University",
      "Adjunct Faculty, Sher-e-Bangla Agricultural University, Sonargaon University, Royal University",
      "External Examiner, Jagannath University",
    ],
    achievements: [
      "19th Place, Dhaka Board (2001)",
      "80%+ marks across PG, Master & Bachelor",
    ],
  },

  {
    id: "md-billal-mia",
    name: "Md Billal Mia",
    location: "Berlin, Germany",
    title: "Financial Consultant",
    image: premiumImage,
    certificates: [
      "SAP FI – S/4HANA",
      "Project Management",
      "SAP SuccessFactors",
      "Microsoft Excel",
    ],
    academicBackground: [
      "Master's in IMIS – Fachhochschule Südwestfalen",
      "BBA – University of Chittagong",
    ],
    teachingExperience: [
      "German Language & Private Tuition",
      "Subject-Based Academic Tutoring",
    ],
    achievements: [
      "5+ years of professional experience",
      "Siemens, Innomotics & Trust Bank",
      "Financial Consultant at HORBACH",
      "Published author",
    ],
  },

  {
    id: "sadia-rahman",
    name: "Sadia Rahman",
    location: "Based in Dhaka, Bangladesh",
    title: "Software Engineer",
    image: sadiarahman,
    certificates: [
      "AWS Cloud Practitioner",
      "Google UX Design",
      "Professional Scrum Master",
    ],
    academicBackground: [
      "BSc in Computer Science – BUET",
      "Diploma in Computer Science",
    ],
    teachingExperience: [
      "Software Development & Programming Tutor",
      "Private Tutor for Computer Science Subjects",
    ],
    achievements: [
      "3+ years of software development experience",
      "Full-Stack Web Development",
      "Experience in Agile & Scrum",
      "Mentored students in programming & software development",
    ],
  },
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

const SHUFFLE_INTERVAL_MS = 6000;
const STACK_HEIGHT_CLASS = "h-[600px] sm:h-[620px]";

function InstructorCard({
  person,
  interactive,
}: {
  person: Instructor;
  interactive: boolean;
}) {
  const initials = person.name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-primary-950 dark:shadow-2xl dark:shadow-black/40 ${
        interactive ? "" : "pointer-events-none select-none"
      }`}
    >
      {/* Instructor Profile */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-slate-50 p-5 dark:border-white/10 dark:from-indigo-500/10 dark:via-white/[0.03] dark:to-primary-950/40">
        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/20" />

        <div className="relative flex items-center gap-5">
          {/* Profile Image */}
          <div className="relative h-28 w-28 shrink-0 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-purple-500/20 p-1 shadow-lg shadow-indigo-500/10">
            <div className="h-full w-full overflow-hidden rounded-[14px] bg-slate-100 dark:bg-primary-800">
              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-indigo-600/10 text-2xl font-bold text-indigo-600 dark:text-indigo-300">
                  {initials}
                </div>
              )}
            </div>

            {/* Certified Badge */}
            <div
              className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-indigo-600 shadow-md dark:border-primary-950"
              title="Certified Educator"
            >
              <BadgeCheck className="h-4 w-4 text-white" />
            </div>
          </div>

          {/* Instructor Info */}
          <div className="min-w-0">
            <p className="font-heading text-xl font-bold text-slate-900 dark:text-white">
              {person.name}
            </p>

            <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              {person.location}
            </p>

            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-2.5 py-1 text-[10px] font-semibold text-indigo-600 dark:text-indigo-300">
              <GraduationCap className="h-3 w-3" />
              {person.title}
            </div>
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div className="mt-5 flex flex-wrap gap-2">
        {person.certificates.map((certificate) => (
          <span
            key={certificate}
            className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-[11px] font-medium text-indigo-600 dark:text-indigo-300"
          >
            <BadgeCheck className="h-3 w-3" />
            {certificate}
          </span>
        ))}
      </div>

      {/* Scrollable Details */}
      <div className="mt-4 flex-1 overflow-y-auto pr-1">
        {/* Academic Background */}
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            <GraduationCap className="h-3.5 w-3.5" />
            Academic Background
          </p>

          <ul className="mt-2 space-y-1.5">
            {person.academicBackground.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300"
              >
                <Check className="mt-0.5 h-3 w-3 shrink-0 text-indigo-500 dark:text-indigo-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Teaching Experience */}
        <div className="mt-6">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            <Briefcase className="h-3.5 w-3.5" />
            Teaching Experience
          </p>

          <ul className="mt-2 space-y-1.5">
            {person.teachingExperience.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300"
              >
                <Check className="mt-0.5 h-3 w-3 shrink-0 text-indigo-500 dark:text-indigo-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div className="mt-6">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            <Trophy className="h-3.5 w-3.5" />
            Achievements
          </p>

          <ul className="mt-2 space-y-1.5">
            {person.achievements.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300"
              >
                <Check className="mt-0.5 h-3 w-3 shrink-0 text-indigo-500 dark:text-indigo-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function InstructorCardStack({ people }: { people: Instructor[] }) {
  const [order, setOrder] = useState<number[]>(() =>
    people.map((_, index) => index),
  );

  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isPaused || prefersReducedMotion || people.length < 2) {
      return;
    }

    const intervalId = setInterval(() => {
      setOrder((previousOrder) => {
        const [first, ...remaining] = previousOrder;

        return [...remaining, first];
      });
    }, SHUFFLE_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, [isPaused, prefersReducedMotion, people.length]);

  const bringToFront = (personIndex: number) => {
    setOrder((previousOrder) => {
      const targetPosition = previousOrder.indexOf(personIndex);

      if (targetPosition <= 0) {
        return previousOrder;
      }

      const reordered = [...previousOrder];

      reordered.splice(targetPosition, 1);
      reordered.unshift(personIndex);

      return reordered;
    });
  };

  return (
    <motion.div
      role="region"
      aria-label="Meet our instructors"
      className="relative flex items-center gap-4 sm:gap-5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
    >
      {/* =========================================================
          INSTRUCTOR NUMBER NAVIGATION
          1 / 2 / 3 - LEFT SIDE
      ========================================================= */}
      <div className="flex shrink-0 flex-col items-center justify-center gap-2">
        {people.map((person, personIndex) => {
          const isActive = order[0] === personIndex;

          return (
            <button
              key={person.id}
              type="button"
              aria-label={`Show ${person.name}`}
              onClick={() => bringToFront(personIndex)}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                  : "border border-slate-300 bg-white text-slate-500 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:bg-primary-950 dark:text-slate-400 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
              }`}
            >
              {personIndex + 1}
            </button>
          );
        })}
      </div>

      {/* =========================================================
          INSTRUCTOR CARD STACK
      ========================================================= */}
      <div className={`relative min-w-0 flex-1 ${STACK_HEIGHT_CLASS}`}>
        {people.map((person, personIndex) => {
          const stackPosition = order.indexOf(personIndex);

          const tiltDirection = personIndex % 2 === 0 ? -1 : 1;

          return (
            <motion.div
              key={person.id}
              className={`absolute inset-0 ${
                stackPosition === 0 ? "" : "cursor-pointer"
              }`}
              style={{
                zIndex: people.length - stackPosition,
              }}
              animate={{
                y: stackPosition * 16,

                scale: 1 - stackPosition * 0.045,

                rotate:
                  stackPosition === 0
                    ? 0
                    : tiltDirection * (2 + stackPosition * 2),

                opacity: stackPosition < 3 ? 1 - stackPosition * 0.12 : 0,
              }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => {
                if (stackPosition !== 0) {
                  bringToFront(personIndex);
                }
              }}
            >
              <InstructorCard
                person={person}
                interactive={stackPosition === 0}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

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
        {/* =========================================================
            HEADER
        ========================================================= */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">
              <GraduationCap className="h-3.5 w-3.5" />
              Language Program
            </span>

            <h2 className="mt-4 font-heading text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
              Learn German from a Certified Educator
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Structured A1–B2 classes led by an experienced faculty member,
              with individual and small-group batches to fit your schedule.
            </p>
          </div>
        </Reveal>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* =======================================================
              INSTRUCTOR SECTION
          ======================================================= */}
          <Reveal delay={0.08}>
            <InstructorCardStack people={instructors} />
          </Reveal>

          {/* =======================================================
              PRICING CARD
          ======================================================= */}
          <Reveal delay={0.16}>
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none">
              {/* Pricing Header */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                  Course Fees
                </p>

                {/* Batch Toggle */}
                <div className="inline-flex rounded-full border border-slate-200 bg-slate-100 p-1 dark:border-white/10 dark:bg-primary-950">
                  <button
                    type="button"
                    onClick={() => setBatchType("individual")}
                    className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                      batchType === "individual"
                        ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300"
                        : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                    }`}
                  >
                    <User className="h-3.5 w-3.5" />
                    Individual
                  </button>

                  <button
                    type="button"
                    onClick={() => setBatchType("group")}
                    className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                      batchType === "group"
                        ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300"
                        : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                    }`}
                  >
                    <Users className="h-3.5 w-3.5" />
                    Group (5–10)
                  </button>
                </div>
              </div>

              {/* Pricing List */}
              <div className="mt-5 divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 dark:divide-white/10 dark:border-white/10">
                {pricing[batchType].map((row) => (
                  <div
                    key={row.level}
                    className="flex items-center justify-between bg-slate-50 px-4 py-3.5 transition-colors hover:bg-slate-100 dark:bg-primary-950/40 dark:hover:bg-primary-950/60"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        Level {row.level}
                      </p>

                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {row.duration}
                      </p>
                    </div>

                    <p className="font-heading text-lg font-bold text-indigo-600 dark:text-indigo-300">
                      {row.price}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pricing Note */}
              <p className="mt-3 text-[11px] text-slate-500 dark:text-slate-500">
                {batchType === "group"
                  ? "Group batches run with 5–10 learners per cohort."
                  : "One-on-one sessions, scheduled around your availability."}
              </p>

              {/* Enroll Button */}
              <button
                type="button"
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
