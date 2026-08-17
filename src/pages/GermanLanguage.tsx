import { useState } from "react";
import {
  BadgeCheck,
  Briefcase,
  Check,
  ChevronDown,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Send,
  Trophy,
  User,
  Users,
} from "lucide-react";

import najrulIslam from "../assets/images/najrulislam.png";
import premiumImage from "../assets/images/premium.png";
import sadiarahman from "../assets/images/sadiarahman.png";

import { useRouter } from "../lib/router";

type Instructor = {
  id: string;
  name: string;
  location: string;
  title: string;
  image: string;
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
    certificates: ["Telc C1", "IELTS - Band 7.5"],
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
    location: "Based in Berlin, Germany",
    title: "Financial Consultant",
    image: premiumImage,
    certificates: [
      "SAP FI - S/4HANA",
      "Project Management",
      "SAP SuccessFactors",
      "Microsoft Excel",
    ],
    academicBackground: [
      "Master's in IMIS - Fachhochschule Südwestfalen",
      "BBA - University of Chittagong",
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
      "BSc in Computer Science - BUET",
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

const courseFees = {
  individual: {
    A1: "€180",
    A2: "€200",
    B1: "€230",
    B2: "€250",
    C1: "€300",
    C2: "€350",
  },
  group: {
    A1: "€90",
    A2: "€100",
    B1: "€120",
    B2: "€130",
    C1: "€150",
    C2: "€175",
  },
};

function InstructorProfile({
  instructor,
  selected,
  onSelect,
}: {
  instructor: Instructor;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left transition-all duration-300 ${
        selected ? "scale-[1.01]" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
          selected
            ? "border-indigo-400/60 bg-indigo-50/70 shadow-md shadow-indigo-500/10 dark:border-indigo-400/40 dark:bg-indigo-500/[0.08]"
            : "border-slate-200 bg-white hover:border-indigo-300 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-indigo-400/30"
        }`}
      >
        {/* Top profile area */}
        <div className="relative overflow-hidden">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/15" />

          <div className="relative flex gap-4 p-4 sm:p-5">
            {/* Image */}
            <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100 shadow-md dark:bg-primary-800">
              <img
                src={instructor.image}
                alt={instructor.name}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />

              <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 shadow-sm backdrop-blur-sm dark:bg-primary-950/85">
                <BadgeCheck className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                <span className="text-[9px] font-semibold text-slate-700 dark:text-slate-200">
                  Verified
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                    {instructor.name}
                  </p>

                  <p className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    {instructor.location}
                  </p>
                </div>

                {/* Selection indicator */}
                <div
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all ${
                    selected
                      ? "border-indigo-500 bg-indigo-600 text-white"
                      : "border-slate-300 dark:border-white/20"
                  }`}
                >
                  {selected && <Check className="h-3.5 w-3.5" />}
                </div>
              </div>

              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-2.5 py-1 text-[10px] font-semibold text-indigo-600 dark:text-indigo-300">
                <GraduationCap className="h-3 w-3" />
                {instructor.title}
              </div>

              {/* Certificates */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {instructor.certificates.map((certificate) => (
                  <span
                    key={certificate}
                    className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-[9px] font-medium text-slate-600 dark:bg-white/[0.06] dark:text-slate-300"
                  >
                    <BadgeCheck className="h-2.5 w-2.5 text-indigo-500" />
                    {certificate}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick highlights */}
        <div className="grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 dark:divide-white/10 dark:border-white/10">
          <div className="px-3 py-3 text-center">
            <GraduationCap className="mx-auto h-4 w-4 text-indigo-500" />
            <p className="mt-1 text-[9px] font-medium uppercase tracking-wide text-slate-400">
              Academic
            </p>
            <p className="mt-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-200">
              Strong
            </p>
          </div>

          <div className="px-3 py-3 text-center">
            <Briefcase className="mx-auto h-4 w-4 text-indigo-500" />
            <p className="mt-1 text-[9px] font-medium uppercase tracking-wide text-slate-400">
              Experience
            </p>
            <p className="mt-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-200">
              University
            </p>
          </div>

          <div className="px-3 py-3 text-center">
            <Trophy className="mx-auto h-4 w-4 text-indigo-500" />
            <p className="mt-1 text-[9px] font-medium uppercase tracking-wide text-slate-400">
              Credentials
            </p>
            <p className="mt-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-200">
              Certified
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

function InstructorDetails({ instructor }: { instructor: Instructor }) {
  return (
    <div className="mt-5 grid gap-4 sm:grid-cols-3">
      {/* Academic */}
      <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.025]">
        <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
          <GraduationCap className="h-3.5 w-3.5 text-indigo-500" />
          Academic
        </p>

        <ul className="mt-3 space-y-2">
          {instructor.academicBackground.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-[10px] leading-relaxed text-slate-600 dark:text-slate-300"
            >
              <Check className="mt-0.5 h-3 w-3 shrink-0 text-indigo-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Teaching */}
      <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.025]">
        <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
          <Briefcase className="h-3.5 w-3.5 text-indigo-500" />
          Teaching
        </p>

        <ul className="mt-3 space-y-2">
          {instructor.teachingExperience.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-[10px] leading-relaxed text-slate-600 dark:text-slate-300"
            >
              <Check className="mt-0.5 h-3 w-3 shrink-0 text-indigo-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Achievements */}
      <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.025]">
        <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
          <Trophy className="h-3.5 w-3.5 text-indigo-500" />
          Achievements
        </p>

        <ul className="mt-3 space-y-2">
          {instructor.achievements.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-[10px] leading-relaxed text-slate-600 dark:text-slate-300"
            >
              <Check className="mt-0.5 h-3 w-3 shrink-0 text-indigo-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function GermanLanguage() {
  const { navigate } = useRouter();

  const [batchType, setBatchType] = useState<"individual" | "group">(
    "individual",
  );

  const [selectedInstructor, setSelectedInstructor] = useState<Instructor>(
    instructors[0],
  );

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    level: "",
    preferredDate: "",
    preferredTime: "",
    previousExperience: "",
    goals: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      ...formData,
      batchType,
      instructor: selectedInstructor.name,
    });

    setSubmitted(true);
  };

  return (
    <main className="relative overflow-hidden py-12 sm:py-16">
      <div className="container-page">
        {/* =========================================================
            HEADER
        ========================================================= */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">
            <GraduationCap className="h-3.5 w-3.5" />
            German Language Program
          </span>

          <h1 className="mt-7 font-heading text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Learn German from Experienced Instructors
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Choose your preferred instructor and join structured German language
            classes from A1 to C2 with individual and small-group learning
            options.
          </p>
        </div>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          {/* =======================================================
              LEFT - INSTRUCTORS
          ======================================================= */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none">
            {/* Header */}
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">
                <GraduationCap className="h-3.5 w-3.5" />
                Meet Your Instructors
              </p>

              <h2 className="mt-2 font-heading text-xl font-bold text-slate-900 dark:text-white">
                Choose your instructor
              </h2>

              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Select the instructor you would prefer to learn with. You can
                review their background and credentials before submitting your
                booking request.
              </p>
            </div>

            {/* Instructor List */}
            <div className="mt-5 space-y-3">
              {instructors.map((instructor) => (
                <InstructorProfile
                  key={instructor.id}
                  instructor={instructor}
                  selected={selectedInstructor.id === instructor.id}
                  onSelect={() => setSelectedInstructor(instructor)}
                />
              ))}
            </div>

            {/* Selected Instructor Details */}
            <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/10">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-300">
                    Selected Instructor
                  </p>

                  <p className="mt-1 font-heading text-lg font-bold text-slate-900 dark:text-white">
                    {selectedInstructor.name}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-2.5 py-1.5 text-[10px] font-semibold text-indigo-600 dark:text-indigo-300">
                  <Check className="h-3 w-3" />
                  Selected
                </div>
              </div>

              <InstructorDetails instructor={selectedInstructor} />
            </div>
          </div>

          {/* =======================================================
              RIGHT - BOOKING FORM
          ======================================================= */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none">
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/10">
                  <Check className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>

                <h2 className="mt-5 font-heading text-2xl font-bold text-slate-900 dark:text-white">
                  Booking Request Received
                </h2>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Thank you for your interest in the German Language Program.
                  Our team will review your request and contact you with the
                  next steps.
                </p>

                <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 dark:border-indigo-400/20 dark:bg-indigo-500/10">
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Preferred Instructor
                  </p>

                  <p className="mt-1 text-sm font-semibold text-indigo-600 dark:text-indigo-300">
                    {selectedInstructor.name}
                  </p>
                </div>

                <button onClick={() => navigate("/")} className="btn-gold mt-6">
                  Back to Home
                </button>
              </div>
            ) : (
              <>
                <div>
                  <p className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                    Book Your German Class
                  </p>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    Fill in the details below and our team will contact you to
                    confirm your class.
                  </p>
                </div>

                {/* Selected instructor summary */}
                <div className="mt-5 flex items-center gap-3 rounded-xl border border-indigo-200 bg-indigo-50/70 p-3 dark:border-indigo-400/20 dark:bg-indigo-500/[0.08]">
                  <img
                    src={selectedInstructor.image}
                    alt={selectedInstructor.name}
                    className="h-11 w-11 rounded-lg object-cover object-top"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
                      Selected Instructor
                    </p>

                    <p className="mt-0.5 truncate text-sm font-semibold text-slate-900 dark:text-white">
                      {selectedInstructor.name}
                    </p>
                  </div>

                  <BadgeCheck className="h-5 w-5 shrink-0 text-indigo-500" />
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  {/* =================================================
                      PERSONAL INFORMATION
                  ================================================= */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Personal Information
                    </h3>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label className="mb-2 block text-xs font-medium text-slate-600 dark:text-slate-400">
                          Full Name *
                        </label>

                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                          <input
                            required
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white dark:border-white/10 dark:bg-primary-950/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-indigo-400/50"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="mb-2 block text-xs font-medium text-slate-600 dark:text-slate-400">
                          Email Address *
                        </label>

                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white dark:border-white/10 dark:bg-primary-950/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-indigo-400/50"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="mb-2 block text-xs font-medium text-slate-600 dark:text-slate-400">
                          Phone / WhatsApp *
                        </label>

                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                          <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+49 ..."
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white dark:border-white/10 dark:bg-primary-950/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-indigo-400/50"
                          />
                        </div>
                      </div>

                      {/* Country */}
                      <div>
                        <label className="mb-2 block text-xs font-medium text-slate-600 dark:text-slate-400">
                          Country *
                        </label>

                        <input
                          required
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="Country of residence"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white dark:border-white/10 dark:bg-primary-950/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-indigo-400/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      COURSE SELECTION
                  ================================================= */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Course Selection
                    </h3>

                    {/* Batch */}
                    <div className="mt-4">
                      <label className="mb-2 block text-xs font-medium text-slate-600 dark:text-slate-400">
                        Batch Type *
                      </label>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <button
                          type="button"
                          onClick={() => setBatchType("individual")}
                          className={`rounded-xl border p-4 text-left transition ${
                            batchType === "individual"
                              ? "border-indigo-400/60 bg-indigo-50 dark:border-indigo-400/50 dark:bg-indigo-500/10"
                              : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-primary-950/40 dark:hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />

                            <span className="text-sm font-semibold text-slate-900 dark:text-white">
                              Individual
                            </span>
                          </div>

                          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            One-on-one personalized classes
                          </p>
                        </button>

                        <button
                          type="button"
                          onClick={() => setBatchType("group")}
                          className={`rounded-xl border p-4 text-left transition ${
                            batchType === "group"
                              ? "border-indigo-400/60 bg-indigo-50 dark:border-indigo-400/50 dark:bg-indigo-500/10"
                              : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-primary-950/40 dark:hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />

                            <span className="text-sm font-semibold text-slate-900 dark:text-white">
                              Group (5-10)
                            </span>
                          </div>

                          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            Learn together in a small cohort
                          </p>
                        </button>
                      </div>
                    </div>

                    {/* Level + Experience */}
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-medium text-slate-600 dark:text-slate-400">
                          German Level *
                        </label>

                        <div className="relative">
                          <select
                            required
                            name="level"
                            value={formData.level}
                            onChange={handleChange}
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-11 text-sm text-slate-900 outline-none focus:border-indigo-400 dark:border-white/10 dark:bg-primary-950/60 dark:text-white dark:focus:border-indigo-400/50"
                          >
                            <option value="">Select your level</option>

                            {Object.entries(courseFees[batchType]).map(
                              ([level, price]) => (
                                <option key={level} value={level}>
                                  {level} : {price}
                                </option>
                              ),
                            )}
                          </select>

                          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-medium text-slate-600 dark:text-slate-400">
                          Previous German Experience
                        </label>

                        <div className="relative">
                          <select
                            name="previousExperience"
                            value={formData.previousExperience}
                            onChange={handleChange}
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-11 text-sm text-slate-900 outline-none focus:border-indigo-400 dark:border-white/10 dark:bg-primary-950/60 dark:text-white dark:focus:border-indigo-400/50"
                          >
                            <option value="">Select an option</option>
                            <option value="none">No previous experience</option>
                            <option value="self-study">Self-study</option>
                            <option value="course">
                              Previously attended a course
                            </option>
                            <option value="certificate">
                              Already have a German certificate
                            </option>
                          </select>

                          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      SCHEDULE
                  ================================================= */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Preferred Schedule
                    </h3>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-medium text-slate-600 dark:text-slate-400">
                          Preferred Date *
                        </label>

                        <input
                          required
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-400 dark:border-white/10 dark:bg-primary-950/60 dark:text-white dark:focus:border-indigo-400/50"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-medium text-slate-600 dark:text-slate-400">
                          Preferred Time *
                        </label>

                        <input
                          required
                          type="time"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-400 dark:border-white/10 dark:bg-primary-950/60 dark:text-white dark:focus:border-indigo-400/50"
                        />
                      </div>
                    </div>

                    <p className="mt-2 text-[11px] text-slate-500">
                      Final class time will be confirmed based on instructor
                      availability.
                    </p>
                  </div>

                  {/* Goals */}
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-600 dark:text-slate-400">
                      Learning Goals
                    </label>

                    <textarea
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us what you want to achieve with German..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white dark:border-white/10 dark:bg-primary-950/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-indigo-400/50"
                    />
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-600 dark:text-slate-400">
                      Additional Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Anything else we should know?"
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white dark:border-white/10 dark:bg-primary-950/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-indigo-400/50"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-gold flex w-full items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Submit Booking Request
                  </button>

                  <p className="text-center text-[11px] leading-relaxed text-slate-500">
                    By submitting this form, you are requesting enrollment. Your
                    place is not confirmed until our team contacts you.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
