import { useEffect, useState } from "react";
import { useRouter } from "../lib/router";
import { Navbar } from "../components/layout/Navbar";
import { consultationTypes } from "../lib/data";
import { supabase } from "../lib/supabase";
import {
  ArrowLeft,
  CheckCircle2,
  Crown,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Globe,
  MessageSquare,
  Compass,
  BadgeDollarSign,
} from "lucide-react";

// Topics available for the premium "One Hour with Billal Mahmud" session.
// Sourced from Billal's consultation topic breakdown: Higher Study, Career,
// Investment, Long Term Settlement, Set Up Business (incl. Business Visa),
// and the Financial track (Horbach / Finanz4women / Finanz4beginners /
// Halal Investment).
const billalTopics = [
  "Higher Study",
  "Career",
  "Investment",
  "Long Term Settlement",
  "Set Up Business",
  "Business Visa",
  "Financial Planning (Horbach / Finanz4women / Finanz4beginners / Halal Investment)",
] as const;

const BILLAL_FEE_BDT = 2900;

interface FormState {
  full_name: string;
  country: string;
  email: string;
  phone: string;
  consultation_type: string;
  topic: string;
  preferred_date: string;
  preferred_time: string;
  message: string;
}
interface Errors {
  [k: string]: string;
}

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.full_name.trim() || f.full_name.trim().length < 2)
    e.full_name = "Please enter your name";
  if (!f.country.trim()) e.country = "Please enter your country";
  if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Valid email required";
  if (!f.phone.trim() || f.phone.trim().length < 6)
    e.phone = "Valid phone required";
  if (!f.preferred_date) e.preferred_date = "Please pick a date";
  if (!f.preferred_time) e.preferred_time = "Please pick a time";
  if (f.consultation_type === "One Hour with Billal Mahmud" && !f.topic)
    e.topic = "Please choose a topic for your session";
  return e;
}

export default function Booking() {
  const { navigate } = useRouter();
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    full_name: "",
    country: "",
    email: "",
    phone: "",
    consultation_type: "General Consultation",
    topic: "",
    preferred_date: "",
    preferred_time: "",
    message: "",
  });

  useEffect(() => {
    document.title = "Book a Consultation - StudyingGermany.de";
  }, []);

  const set =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setServerError(null);
    const { error } = await supabase.from("consultations").insert({
      full_name: form.full_name,
      country: form.country,
      email: form.email,
      phone: form.phone,
      consultation_type: form.consultation_type,
      topic: form.topic || null,
      preferred_date: form.preferred_date || null,
      preferred_time: form.preferred_time || null,
      message: form.message || null,
    });
    setSubmitting(false);
    if (error) {
      setServerError("Something went wrong. Please try again.");
      return;
    }
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isPremium = form.consultation_type === "One Hour with Billal Mahmud";
  const inputClass =
    "mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary-500 focus:bg-white dark:border-white/10 dark:bg-primary-950/60 dark:text-white";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-primary-950">
      <Navbar />

      <div className="container-page pt-32 pb-20 sm:pt-36">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-primary-700 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </button>

        <div className="mx-auto mt-8 max-w-3xl">
          {sent ? (
            <div
              className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-10 text-center shadow-card dark:border-white/5 dark:bg-primary-900/40"
              style={{ animation: "modalIn 0.4s ease-out" }}
            >
              <style>{`@keyframes modalIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }`}</style>
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
                <CheckCircle2 className="h-8 w-8" />
              </span>
              <h1 className="mt-6 font-heading text-2xl font-bold text-ink dark:text-white">
                Consultation Requested!
              </h1>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                We've received your booking. A Germany specialist will email you
                within one business day to confirm your time slot.
              </p>
              <button
                onClick={() => navigate("/")}
                className="btn-primary mt-7"
              >
                Back to Home
              </button>
            </div>
          ) : (
            <>
              <div className="text-center">
                <span className="section-eyebrow">Book Consultation</span>
                <h1 className="mt-5 font-heading text-3xl font-bold tracking-tight text-ink dark:text-white sm:text-5xl text-balance">
                  Take the <span className="heading-gradient">first step</span>
                </h1>
                <p className="mt-4 text-base text-slate-600 dark:text-slate-400 text-balance">
                  Tell us about you and your goals. We'll match you with the
                  right specialist.
                </p>
              </div>

              <form onSubmit={onSubmit} noValidate className="mt-10 space-y-6">
                <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card dark:border-white/5 dark:bg-primary-900/40 sm:p-8">
                  <h2 className="font-heading text-base font-semibold text-ink dark:text-white">
                    Choose your consultation
                  </h2>
                  <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {consultationTypes.map((t) => (
                      <label
                        key={t}
                        className={`relative flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition-all ${
                          form.consultation_type === t
                            ? t === "One Hour with Billal Mahmud"
                              ? "border-accent-500 bg-gradient-to-br from-accent-50 to-accent-50/40 dark:from-accent-500/10 dark:to-accent-500/5"
                              : "border-primary-500 bg-primary-50 dark:bg-primary-700/20"
                            : "border-slate-200 hover:border-slate-300 dark:border-white/10 dark:hover:border-white/20"
                        }`}
                      >
                        <input
                          type="radio"
                          name="consultation_type"
                          value={t}
                          checked={form.consultation_type === t}
                          onChange={(e) => {
                            set("consultation_type")(e);
                            if (t !== "One Hour with Billal Mahmud") {
                              setForm((prev) => ({ ...prev, topic: "" }));
                            }
                          }}
                          className="sr-only"
                        />
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${form.consultation_type === t ? "border-accent-500" : "border-slate-300 dark:border-white/30"}`}
                        >
                          {form.consultation_type === t && (
                            <span className="h-2 w-2 rounded-full bg-accent-500" />
                          )}
                        </span>
                        <span className="flex items-center gap-2 text-sm font-medium text-ink dark:text-white">
                          {t === "One Hour with Billal Mahmud" && (
                            <Crown className="h-3.5 w-3.5 text-accent-500" />
                          )}
                          {t}
                        </span>
                      </label>
                    ))}
                  </div>
                  {isPremium && (
                    <div className="mt-3 flex flex-col gap-2 rounded-xl bg-accent-500/10 px-4 py-3 text-xs text-accent-700 dark:text-accent-300">
                      <span className="flex items-center gap-2">
                        <Crown className="h-3.5 w-3.5" /> Premium session: a
                        dedicated 60-minute strategy call with our lead
                        consultant, Billal Mahmud.
                      </span>
                      <span className="flex items-center gap-2 font-semibold">
                        <BadgeDollarSign className="h-3.5 w-3.5" />
                        Consultation fee: {BILLAL_FEE_BDT.toLocaleString()} BDT
                      </span>
                    </div>
                  )}

                  {isPremium && (
                    <div className="mt-4">
                      <Field
                        label="Area of Interest"
                        icon={Compass}
                        error={errors.topic}
                      >
                        <select
                          value={form.topic}
                          onChange={set("topic")}
                          className={inputClass}
                        >
                          <option value="">
                            Select a topic for your session
                          </option>
                          {billalTopics.map((topic) => (
                            <option key={topic} value={topic}>
                              {topic}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>
                  )}
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card dark:border-white/5 dark:bg-primary-900/40 sm:p-8">
                  <h2 className="font-heading text-base font-semibold text-ink dark:text-white">
                    Your details
                  </h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Full Name"
                      icon={User}
                      error={errors.full_name}
                    >
                      <input
                        value={form.full_name}
                        onChange={set("full_name")}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Country" icon={Globe} error={errors.country}>
                      <input
                        value={form.country}
                        onChange={set("country")}
                        placeholder="e.g. Bangladesh"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Email" icon={Mail} error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={set("email")}
                        placeholder="you@email.com"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Phone" icon={Phone} error={errors.phone}>
                      <input
                        value={form.phone}
                        onChange={set("phone")}
                        placeholder="+880 1XXX-XXXXXX"
                        className={inputClass}
                      />
                    </Field>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card dark:border-white/5 dark:bg-primary-900/40 sm:p-8">
                  <h2 className="font-heading text-base font-semibold text-ink dark:text-white">
                    Preferred time
                  </h2>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Preferred Date"
                      icon={Calendar}
                      error={errors.preferred_date}
                    >
                      <input
                        type="date"
                        value={form.preferred_date}
                        onChange={set("preferred_date")}
                        className={inputClass}
                      />
                    </Field>

                    <Field
                      label="Preferred Time"
                      icon={Clock}
                      error={errors.preferred_time}
                    >
                      <input
                        type="time"
                        value={form.preferred_time}
                        onChange={set("preferred_time")}
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <div className="mt-4">
                    <Field label="Message (optional)" icon={MessageSquare}>
                      <textarea
                        value={form.message}
                        onChange={set("message")}
                        rows={4}
                        placeholder="Anything we should know before the call?"
                        className={`${inputClass} resize-none`}
                      />
                    </Field>
                  </div>

                  <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-500/20 dark:bg-blue-500/10">
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                      <strong>Important:</strong> Please select your preferred{" "}
                      <strong>date</strong> and <strong>time</strong> before
                      submitting your booking request. Once your request has
                      been reviewed, our team will contact you via email with
                      your booking confirmation and meeting link. Please keep an
                      eye on your inbox (and spam/junk folder) for updates.
                    </p>
                  </div>
                </div>

                {serverError && (
                  <p className="text-sm text-danger">{serverError}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold w-full !py-4 text-base disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Confirm Booking Request"}
                </button>
                <p className="text-center text-xs text-slate-400">
                  We'll confirm your slot by email within one business day.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  icon: Icon,
  error,
  children,
}: {
  label: string;
  icon: typeof User;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
        <Icon className="h-3.5 w-3.5 text-slate-400" />
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-danger">{error}</p>}
    </div>
  );
}
