import billalMahmud from "../assets/images/billalMahmud.png";
import abdullahalnahid from "../assets/images/AbdullahAlNahid.png";
import rakibbhuiyan from "../assets/images/RakibBhuiyan.png";
import nobanitaayathree from "../assets/images/NobanitaAyathree.png";
import koushikhasan from "../assets/images/KoushikHasan.png";
import mahmudurrahman from "../assets/images/MahmudurRahman.png";
import samiha from "../assets/images/SamihaSultana.png";
import ahsan from "../assets/images/AhsanAhmad.png";
import nilanjan from "../assets/images/NilanjanArjunKanunjna.png";

import { useEffect } from "react";
import {
  Crown,
  Star,
  Users,
  Building2,
  Globe2,
  ShieldCheck,
} from "lucide-react";
import { Reveal, SectionHeading } from "../components/ui/Reveal";
import { useRouter } from "../lib/router";

const team = [
  {
    name: "Billal Mahmud",
    role: "Founder and CEO",
    bio: "Over 10 years guiding international students through every step of the Germany journey. Mentored more than 1,000 students from 30+ countries.",
    image: billalMahmud,
    badges: ["Leadership", "Vision", "Germany Expert"],
  },
  {
    name: "Abdullah Al Nahid",
    role: "IT Executive",
    bio: "Handles internal systems, automation, and technical infrastructure ensuring smooth digital operations.",
    image: abdullahalnahid,
    badges: ["System Design", "Automation", "Backend Ops"],
  },
  {
    name: "Rakib Bhuiyan",
    role: "Admin Executive",
    bio: "Manages documentation workflows and student coordination for smooth application processing.",
    image: rakibbhuiyan,
    badges: ["Operations", "Student Support", "Execution"],
  },
  {
    name: "Nobanita Ayathree",
    role: "PMO",
    bio: "Oversees project timelines and ensures structured execution across all student cases.",
    image: nobanitaayathree,
    badges: ["Project Management", "Planning", "Coordination"],
  },
  {
    name: "Koushik Hasan",
    role: "Consultant",
    bio: "Specializes in engineering and technical program admissions in Germany.",
    image: koushikhasan,
    badges: ["Engineering", "Admissions", "Strategy"],
  },
  {
    name: "Mahmudur Rahman",
    role: "Consultant",
    bio: "Expert in visa processing and embassy interview preparation.",
    image: mahmudurrahman,
    badges: ["Visa Expert", "Documentation", "Interview Prep"],
  },
  {
    name: "Samiha Sultana",
    role: "Consultant",
    bio: "Supports onboarding and blocked account preparation for students.",
    image: samiha,
    badges: ["Onboarding", "Finance Setup", "Pre-departure"],
  },
  {
    name: "Md Ahsan Ahmad",
    role: "Consultant",
    bio: "Guides career planning and internship pathways in Germany.",
    image: ahsan,
    badges: ["Career", "Internships", "Germany Integration"],
  },
  {
    name: "Nilanjan Arjun Kanunjna",
    role: "Consultant",
    bio: "Supports SOP writing, scholarships, and academic profiling.",
    image: nilanjan,
    badges: ["SOP", "Scholarships", "Profile Building"],
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity First",
    desc: "We give honest assessments, even when the answer is not what you hoped.",
  },
  {
    icon: Users,
    title: "Student-Centered",
    desc: "Every recommendation is shaped by your goals, timeline, and budget.",
  },
  {
    icon: Globe2,
    title: "Global Perspective",
    desc: "Our team spans South Asia, Africa, and Europe.",
  },
  {
    icon: Building2,
    title: "Deep Expertise",
    desc: "Years of real experience with German systems and universities.",
  },
];

export default function AboutPage() {
  const { navigate } = useRouter();
  useEffect(() => {
    document.title = "About Us - StudyingGermany.de";
  }, []);

  // 👉 PYRAMID LAYOUT
  const row1 = team.slice(0, 1);
  const row2 = team.slice(1, 3);
  const row3 = team.slice(3, 6);
  const row4 = team.slice(6, 9);

  return (
    <main className="min-h-screen bg-canvas pt-28 pb-24 dark:bg-primary-950">
      <div className="container-page">
        <SectionHeading
          eyebrow="About Us"
          title={
            <>
              A team built on <span className="heading-gradient">purpose</span>
            </>
          }
          subtitle="We built this platform to guide students into Germany with honesty and clarity."
        />

        {/* VALUES */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.07}>
              <div className="rounded-3xl border bg-white p-6 shadow-card dark:bg-primary-900/40">
                <v.icon className="h-5 w-5 text-primary-600" />
                <h3 className="mt-3 font-bold">{v.title}</h3>
                <p className="text-xs text-slate-500">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* TEAM PYRAMID */}
        <div className="mt-24 space-y-10">
          {/* Row 1 */}
          <div className="flex justify-center">
            {row1.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 justify-items-center">
            {row2.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {row3.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {row4.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal delay={0.2}>
          <div className="mt-20 overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-800 to-primary-950 p-8 sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                  <Crown className="h-3.5 w-3.5" /> One Hour with Billal
                </span>
                <h2 className="mt-4 font-heading text-2xl font-bold text-white sm:text-3xl">
                  Ready to get started?
                </h2>
                <p className="mt-2 text-slate-300">
                  Book a session and walk away with a personalized Germany
                  roadmap.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent-400 text-accent-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-slate-300">
                    4.9 from 480+ sessions
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate("/booking")}
                className="btn-gold shrink-0"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  badges: string[];
};

/* ===== TEAM CARD COMPONENT ===== */
function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="w-full max-w-[320px] overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card dark:border-white/5 dark:bg-primary-900/40 transition-transform duration-300 hover:-translate-y-1">
      {/* IMAGE ONLY */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="p-5">
        {/* NAME + ROLE (NOW OUTSIDE IMAGE) */}
        <div className="mb-3">
          <p className="font-heading text-base font-bold text-ink dark:text-white">
            {member.name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {member.role}
          </p>
        </div>

        {/* BIO */}
        <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
          {member.bio}
        </p>

        {/* BADGES FIXED */}
        <div className="mt-4 flex flex-wrap gap-2">
          {member.badges.map((b: string) => (
            <span
              key={b}
              className="
                inline-flex items-center rounded-full
                bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700
                dark:bg-white/10 dark:text-slate-200
                border border-slate-200 dark:border-white/10
              "
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
