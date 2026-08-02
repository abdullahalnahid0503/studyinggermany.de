import { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Reveal, SectionHeading } from "../ui/Reveal";
import { supabase } from "../../lib/supabase";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
interface Errors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "service@miaacademyglobal.com",
    href: "mailto:service@miaacademyglobal.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+49 151 1234 5678",
    href: "tel:+4915112345678",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/+4915214849665",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon–Fri, 9:00–18:00 CET",
    href: undefined,
  },
];

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.name.trim() || f.name.trim().length < 2)
    e.name = "Please enter your name";
  if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Valid email required";
  if (!f.subject.trim()) e.subject = "Subject is required";
  if (!f.message.trim() || f.message.trim().length < 10)
    e.message = "Please add more detail";
  return e;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const set =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    const { error } = await supabase.from("consultations").insert({
      full_name: form.name,
      email: form.email,
      phone: "N/A",
      consultation_type: "General Consultation",
      message: `Subject: ${form.subject}\n\n${form.message}`,
    });
    if (error) {
      setStatus("error");
      return;
    }
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary-500 focus:bg-white dark:border-white/10 dark:bg-primary-950/50 dark:text-white dark:focus:bg-primary-950/80";

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's start your{" "}
              <span className="heading-gradient">Germany journey</span>
            </>
          }
          subtitle="Reach out with any question. We typically respond within one business day."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-slate-100 bg-white p-7 shadow-card dark:border-white/5 dark:bg-primary-900/40 sm:p-9"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                    Full Name
                  </label>
                  <input
                    value={form.name}
                    onChange={set("name")}
                    className={inputClass}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-danger">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    className={inputClass}
                    placeholder="you@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Subject
                </label>
                <input
                  value={form.subject}
                  onChange={set("subject")}
                  className={inputClass}
                  placeholder="How can we help?"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-danger">{errors.subject}</p>
                )}
              </div>
              <div className="mt-4">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={set("message")}
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about your goals, timeline, and questions..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-danger">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary mt-6 w-full disabled:opacity-60"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>

              {status === "sent" && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-success/10 px-4 py-3 text-sm text-success">
                  <CheckCircle2 className="h-4 w-4" /> Thanks! We'll be in touch
                  shortly.
                </div>
              )}
              {status === "error" && (
                <p className="mt-4 text-sm text-danger">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex h-full flex-col gap-5">
              <div className="grid gap-3 sm:grid-cols-2">
                {details.map((d) => (
                  <a
                    key={d.label}
                    href={d.href ?? "#"}
                    className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-colors hover:border-accent-500/30 dark:border-white/5 dark:bg-primary-900/40"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-700 group-hover:text-accent-400 dark:bg-white/5 dark:text-white">
                      <d.icon className="h-4 w-4" />
                    </span>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {d.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-ink dark:text-white">
                      {d.value}
                    </p>
                  </a>
                ))}
              </div>

              <div className="relative flex-1 overflow-hidden rounded-3xl border border-slate-100 shadow-soft dark:border-white/5">
                <iframe
                  title="Office location, Berlin, Germany"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1165.917547564751!2d13.345029331348606!3d52.54572643816646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8514b8d1575fb%3A0x38cc3884ef03f01c!2sThomas-Michael-H%C3%B6hn-Haus!5e1!3m2!1sen!2smy!4v1782469340823!5m2!1sen!2smy"
                  className="h-full min-h-[260px] w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
                <div className="pointer-events-none absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur">
                  <MapPin className="h-3.5 w-3.5 text-accent-500" />
                  <span className="text-xs font-semibold text-primary-800">
                    Berlin, Germany
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
