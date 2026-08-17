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
import najrulIslam from "../assets/images/najrulislam.jpeg";
import { useRouter } from "../lib/router";

const academicBackground = [
  "Post Graduate in Data Science & Machine Learning: University of Texas at Austin",
  "MA in International & Development Economics: HTW Berlin",
  "MBA: Dhaka University",
  "BBA: Dhaka University",
];

const certificates = ["Telc C1", "IELTS: Band 7.5"];

const teachingExperience = [
  "Full-Time Faculty, IBAIS University",
  "Adjunct Faculty, Sher-e-Bangla Agricultural University, Sonargaon University, Royal University",
  "External Examiner, Jagannath University",
];

const achievements = [
  "19th Place, Dhaka Board (2001)",
  "80%+ marks across PG, Master & Bachelor",
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

export function GermanLanguage() {
  const { navigate } = useRouter();

  const [batchType, setBatchType] = useState<"individual" | "group">(
    "individual",
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
    });

    setSubmitted(true);
  };

  return (
    <main className="relative overflow-hidden py-12 sm:py-16">
      <div className="container-page">
        {/* Header */}
        <div className="mx-auto mt-6 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
            <GraduationCap className="h-3.5 w-3.5" />
            German Language Program
          </span>

          <h1 className="mt-5 font-heading text-3xl font-bold text-white sm:text-4xl">
            Learn German from a Certified Educator
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
            Join structured German language classes from A1 to C2 with
            individual and small-group learning options.
          </p>
        </div>

        {/* Course summary */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Instructor */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
            {/* Instructor Introduction */}
            <div className="mb-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">
                <GraduationCap className="h-3.5 w-3.5" />
                Meet Your Course Instructor
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Learn German under the guidance of{" "}
                <span className="font-semibold text-slate-200">
                  Md Najrul Islam
                </span>
                , an experienced educator and academic professional based in
                Berlin, Germany. With extensive teaching experience across
                universities and strong academic credentials, he brings both
                classroom expertise and international academic experience to the
                program.
              </p>
            </div>

            {/* Instructor Profile */}
            <div className="rounded-xl border border-white/10 bg-primary-950/40 p-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/10 bg-primary-800">
                  <img
                    src={najrulIslam}
                    alt="Md Najrul Islam"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="font-heading text-lg font-bold text-white">
                    Md Najrul Islam
                  </p>

                  <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                    <MapPin className="h-3 w-3" />
                    Based in Berlin, Germany
                  </p>

                  <p className="mt-2 text-xs font-medium text-indigo-300">
                    German Language Course Instructor
                  </p>
                </div>
              </div>
            </div>

            {/* Certificates */}
            <div className="mt-5 flex flex-wrap gap-2">
              {certificates.map((certificate) => (
                <span
                  key={certificate}
                  className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-[11px] font-medium text-indigo-300"
                >
                  <BadgeCheck className="h-3 w-3" />
                  {certificate}
                </span>
              ))}
            </div>

            {/* Academic Background */}
            <div className="mt-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <GraduationCap className="h-3.5 w-3.5" />
                Academic Background
              </p>

              <ul className="mt-3 space-y-2">
                {academicBackground.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-xs leading-relaxed text-slate-300"
                  >
                    <Check className="mt-0.5 h-3 w-3 shrink-0 text-indigo-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Teaching Experience */}
            <div className="mt-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <Briefcase className="h-3.5 w-3.5" />
                Teaching Experience
              </p>

              <ul className="mt-3 space-y-2">
                {teachingExperience.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-xs leading-relaxed text-slate-300"
                  >
                    <Check className="mt-0.5 h-3 w-3 shrink-0 text-indigo-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div className="mt-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <Trophy className="h-3.5 w-3.5" />
                Achievements
              </p>

              <ul className="mt-3 space-y-2">
                {achievements.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-xs leading-relaxed text-slate-300"
                  >
                    <Check className="mt-0.5 h-3 w-3 shrink-0 text-indigo-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/10">
                  <Check className="h-8 w-8 text-indigo-400" />
                </div>

                <h2 className="mt-5 font-heading text-2xl font-bold text-white">
                  Booking Request Received
                </h2>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
                  Thank you for your interest in the German Language Program.
                  Our team will review your request and contact you with the
                  next steps.
                </p>

                <button onClick={() => navigate("/")} className="btn-gold mt-6">
                  Back to Home
                </button>
              </div>
            ) : (
              <>
                <div>
                  <p className="font-heading text-xl font-bold text-white">
                    Book Your German Class
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    Fill in the details below and our team will contact you to
                    confirm your class.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-7 space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                      Personal Information
                    </h3>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-medium text-slate-400">
                          Full Name *
                        </label>

                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                          <input
                            required
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full rounded-xl border border-white/10 bg-primary-950/60 py-3 pl-10 pr-4 text-sm text-white outline-none transition focus:border-indigo-400/50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-medium text-slate-400">
                          Email Address *
                        </label>

                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-white/10 bg-primary-950/60 py-3 pl-10 pr-4 text-sm text-white outline-none transition focus:border-indigo-400/50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-medium text-slate-400">
                          Phone / WhatsApp *
                        </label>

                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                          <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+49 ..."
                            className="w-full rounded-xl border border-white/10 bg-primary-950/60 py-3 pl-10 pr-4 text-sm text-white outline-none transition focus:border-indigo-400/50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-medium text-slate-400">
                          Country *
                        </label>

                        <input
                          required
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="Country of residence"
                          className="w-full rounded-xl border border-white/10 bg-primary-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-400/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                      Course Selection
                    </h3>

                    {/* Batch */}
                    <div className="mt-4">
                      <label className="mb-2 block text-xs font-medium text-slate-400">
                        Batch Type *
                      </label>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <button
                          type="button"
                          onClick={() => setBatchType("individual")}
                          className={`rounded-xl border p-4 text-left transition ${
                            batchType === "individual"
                              ? "border-indigo-400/50 bg-indigo-500/10"
                              : "border-white/10 bg-primary-950/40 hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-indigo-400" />

                            <span className="text-sm font-semibold text-white">
                              Individual
                            </span>
                          </div>

                          <p className="mt-1 text-xs text-slate-400">
                            One-on-one personalized classes
                          </p>
                        </button>

                        <button
                          type="button"
                          onClick={() => setBatchType("group")}
                          className={`rounded-xl border p-4 text-left transition ${
                            batchType === "group"
                              ? "border-indigo-400/50 bg-indigo-500/10"
                              : "border-white/10 bg-primary-950/40 hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-indigo-400" />

                            <span className="text-sm font-semibold text-white">
                              Group (5–10)
                            </span>
                          </div>

                          <p className="mt-1 text-xs text-slate-400">
                            Learn together in a small cohort
                          </p>
                        </button>
                      </div>
                    </div>

                    {/* Level */}
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-medium text-slate-400">
                          German Level *
                        </label>

                        <div className="relative">
                          <select
                            required
                            name="level"
                            value={formData.level}
                            onChange={handleChange}
                            className="w-full appearance-none rounded-xl border border-white/10 bg-primary-950/60 px-4 py-3 pr-11 text-sm text-white outline-none focus:border-indigo-400/50"
                          >
                            <option value="">Select your level</option>
                            <option value="A1">
                              A1 : {courseFees[batchType].A1}
                            </option>
                            <option value="A2">
                              A2 : {courseFees[batchType].A2}
                            </option>
                            <option value="B1">
                              B1 : {courseFees[batchType].B1}
                            </option>
                            <option value="B2">
                              B2 : {courseFees[batchType].B2}
                            </option>
                            <option value="C1">
                              C1 : {courseFees[batchType].C1}
                            </option>
                            <option value="C2">
                              C2 : {courseFees[batchType].C2}
                            </option>
                          </select>

                          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-medium text-slate-400">
                          Previous German Experience
                        </label>

                        <div className="relative">
                          <select
                            name="previousExperience"
                            value={formData.previousExperience}
                            onChange={handleChange}
                            className="w-full appearance-none rounded-xl border border-white/10 bg-primary-950/60 px-4 py-3 pr-11 text-sm text-white outline-none focus:border-indigo-400/50"
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

                  {/* Schedule */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                      Preferred Schedule
                    </h3>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-medium text-slate-400">
                          Preferred Date *
                        </label>

                        <input
                          required
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-primary-950/60 px-4 py-3 text-sm text-white outline-none focus:border-indigo-400/50"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-medium text-slate-400">
                          Preferred Time *
                        </label>

                        <input
                          required
                          type="time"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-primary-950/60 px-4 py-3 text-sm text-white outline-none focus:border-indigo-400/50"
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
                    <label className="mb-2 block text-xs font-medium text-slate-400">
                      Learning Goals
                    </label>

                    <textarea
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us what you want to achieve with German..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-primary-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-400/50"
                    />
                  </div>

                  {/* Additional message */}
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-400">
                      Additional Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Anything else we should know?"
                      className="w-full resize-none rounded-xl border border-white/10 bg-primary-950/60 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-400/50"
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
