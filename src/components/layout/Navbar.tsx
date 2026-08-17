import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../lib/theme";
import { useRouter, Link, type Page } from "../../lib/router";
import {
  Menu,
  X,
  Moon,
  Sun,
  CalendarCheck,
  GraduationCap,
  ChevronDown,
  BookOpen,
  Building2,
  Users,
  Phone,
  FileText,
  HeartPulse,
  Plane,
  Landmark,
  Home as HomeIcon,
  TrendingUp,
  Briefcase,
  Globe2,
  Crown,
  ArrowUpRight,
} from "lucide-react";

interface DropdownItem {
  label: string;
  to: Page;
  icon: typeof BookOpen;
  desc: string;
}

const navGroups = [
  {
    label: "Study in Germany",
    items: [
      {
        label: "Why Germany",
        to: "/#why-germany",
        icon: Globe2,
        desc: "Tuition-free education and career paths",
      },
      {
        label: "Universities",
        to: "/universities",
        icon: Building2,
        desc: "Explore 80+ public institutions",
      },
      {
        label: "Process",
        to: "/#process",
        icon: FileText,
        desc: "Step-by-step admission guide",
      },
    ] as DropdownItem[],
  },

  {
    label: "Services",
    items: [
      {
        label: "University Admission",
        to: "/services",
        icon: GraduationCap,
        desc: "Application and shortlisting",
      },
      {
        label: "Visa Services",
        to: "/services",
        icon: Plane,
        desc: "End-to-end visa support",
      },
      {
        label: "Health Insurance",
        to: "/services",
        icon: HeartPulse,
        desc: "Compliant coverage from day one",
      },
      {
        label: "Blocked Account",
        to: "/services",
        icon: Landmark,
        desc: "Sperrkonto with trusted providers",
      },
      {
        label: "Career Preparation",
        to: "/services",
        icon: Briefcase,
        desc: "CV, internships, Werkstudent",
      },
      {
        label: "Investment Guidance",
        to: "/services",
        icon: TrendingUp,
        desc: "Financial planning for Germany",
      },
      {
        label: "Settlement Support",
        to: "/services",
        icon: HomeIcon,
        desc: "Anmeldung, housing, SIM card",
      },
      {
        label: "German Language",
        to: "/germanlanguage",
        icon: Globe2,
        desc: "Learn German from A1 to C2",
      },
    ] as DropdownItem[],
  },

  {
    label: "Resources",
    items: [
      {
        label: "Blog and Guides",
        to: "/blog",
        icon: BookOpen,
        desc: "Visa, scholarships, campus life",
      },
      {
        label: "Success Stories",
        to: "/successstories",
        icon: Users,
        desc: "Students who made it",
      },
      {
        label: "FAQ",
        to: "/faq",
        icon: FileText,
        desc: "Common questions answered",
      },
    ] as DropdownItem[],
  },

  {
    label: "About",
    items: [
      {
        label: "Our Story",
        to: "/about",
        icon: Users,
        desc: "Who we are and our mission",
      },
      {
        label: "Contact Us",
        to: "/contact",
        icon: Phone,
        desc: "Talk to a specialist",
      },
    ] as DropdownItem[],
  },
];

// Pages that have a dark hero image behind the navbar at the top
const heroPages: Page[] = ["/"];

function Dropdown({
  group,
  onClose,
}: {
  group: (typeof navGroups)[0];
  onClose: () => void;
}) {
  const isServices = group.label === "Services";

  return (
    <div
      className="absolute left-1/2 top-full z-50 mt-3 w-[520px] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card dark:border-white/10 dark:bg-primary-900"
      style={{ animation: "dropIn 0.18s ease-out" }}
    >
      <style>{`
        @keyframes dropIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>

      {/* Main dropdown items */}
      <div
        className={`grid gap-0.5 p-2 ${
          group.items.length > 4 ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {group.items.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            onClick={onClose}
            className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50 dark:hover:bg-white/5"
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-700 transition-colors group-hover/item:bg-primary-700 group-hover/item:text-accent-400 dark:bg-white/5 dark:text-slate-300">
              <item.icon className="h-4 w-4" />
            </span>

            <div>
              <p className="text-[13px] font-semibold text-slate-900 dark:text-white">
                {item.label}
              </p>

              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Premium CTA */}
      {isServices && (
        <div className="px-2 pb-2">
          <Link
            to="/premium"
            onClick={onClose}
            className="group flex w-full items-center gap-3 rounded-xl border border-accent-400/25 bg-gradient-to-r from-accent-400/90 via-accent-500/90 to-accent-500/90 px-4 py-2.5 text-primary-950 shadow-[0_0_12px_rgba(234,179,8,0.14)] transition-all duration-300 hover:shadow-[0_0_18px_rgba(234,179,8,0.22)]"
          >
            {/* Crown */}
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-950/10">
              <Crown className="h-3.5 w-3.5" />
            </span>

            {/* Text */}
            <span className="min-w-0 text-left">
              <span className="block text-[12px] font-bold">
                Premium: 1 Hour with Billal Mahmud
              </span>

              <span className="mt-0.5 block text-[10px] font-medium text-primary-900/65">
                Personal strategy session for your Germany journey
              </span>
            </span>

            {/* Arrow */}
            <ArrowUpRight className="ml-auto h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const { theme, toggle } = useTheme();
  const { navigate, page } = useRouter();

  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHeroPage = heroPages.includes(page);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const openDropdown = (label: string) => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
    }

    setActiveDropdown(label);
  };

  const scheduleClose = () => {
    leaveTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // On homepage hero:
  // white text before scrolling.
  //
  // On other pages or after scrolling:
  // normal light/dark navbar colors.
  const isOverDark = isHeroPage && !scrolled;

  const navLinkBase = isOverDark
    ? "text-white/90 hover:bg-white/10 hover:text-white"
    : "text-slate-800 hover:bg-primary-50 hover:text-primary-700 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-white";

  const navLinkActive = isOverDark
    ? "bg-white/10 text-white"
    : "bg-primary-50 text-primary-700 dark:bg-white/5 dark:text-white";

  const iconBtnClass = isOverDark
    ? "border-white/20 bg-white/10 text-white hover:bg-white/20 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{ animation: "slideDown 0.5s ease-out" }}
    >
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-72px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>

      <div className="container-page">
        {/* Navbar container */}
        <div
          className={`mt-3 flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "border border-slate-200/60 bg-white/90 shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-primary-950/85"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="StudyingGermany.de"
          >
            <img
              src="/studyinggermany.png"
              alt="StudyingGermany.de Logo"
              className="h-10 w-10 shrink-0 object-contain"
            />

            <span className="font-heading text-[15px] font-bold leading-tight">
              <span
                className={
                  isOverDark ? "text-white" : "text-ink dark:text-white"
                }
              >
                Studying
              </span>

              <span className="text-accent-500">Germany</span>

              <span
                className={`block text-[10px] font-medium uppercase tracking-[0.18em] ${
                  isOverDark
                    ? "text-slate-300"
                    : "text-slate-500 dark:text-slate-400"
                }`}
              >
                .de
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => openDropdown(group.label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                    activeDropdown === group.label ? navLinkActive : navLinkBase
                  }`}
                >
                  {group.label}

                  <ChevronDown
                    className="h-3.5 w-3.5 transition-transform duration-200"
                    style={{
                      transform:
                        activeDropdown === group.label
                          ? "rotate(-180deg)"
                          : "rotate(0deg)",
                    }}
                  />
                </button>

                {activeDropdown === group.label && (
                  <div
                    onMouseEnter={() => openDropdown(group.label)}
                    onMouseLeave={scheduleClose}
                  >
                    <Dropdown
                      group={group}
                      onClose={() => setActiveDropdown(null)}
                    />
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Dark mode */}
            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle dark mode"
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${iconBtnClass}`}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            {/* Desktop booking */}
            <button
              type="button"
              onClick={() => navigate("/booking")}
              className="btn-gold hidden !px-5 !py-2.5 sm:inline-flex"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Consultation
            </button>

            {/* Mobile menu */}
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Open menu"
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors lg:hidden ${iconBtnClass}`}
            >
              {mobileOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="overflow-hidden transition-all duration-300 lg:hidden"
          style={{
            maxHeight: mobileOpen ? "1000px" : "0",
            opacity: mobileOpen ? 1 : 0,
          }}
        >
          <div className="mt-2 rounded-2xl border border-slate-200/60 bg-white/95 p-2 shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-primary-950/90">
            {navGroups.map((group) => (
              <div key={group.label}>
                {/* Group heading */}
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === group.label ? null : group.label,
                    )
                  }
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 dark:text-white dark:hover:bg-white/5"
                >
                  {group.label}

                  <ChevronDown
                    className="h-4 w-4 text-slate-400 transition-transform duration-200"
                    style={{
                      transform:
                        mobileExpanded === group.label
                          ? "rotate(-180deg)"
                          : "rotate(0deg)",
                    }}
                  />
                </button>

                {/* Group items */}
                <div
                  className="overflow-hidden transition-all duration-200"
                  style={{
                    maxHeight: mobileExpanded === group.label ? "700px" : "0",
                  }}
                >
                  <div className="pb-1 pl-4 pr-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
                      >
                        <item.icon className="h-4 w-4 shrink-0 text-slate-400" />
                        {item.label}
                      </Link>
                    ))}

                    {/* Mobile Premium CTA */}
                    {group.label === "Services" && (
                      <Link
                        to="/premium"
                        onClick={() => setMobileOpen(false)}
                        className="group relative mt-2 flex w-full items-center gap-3 overflow-hidden rounded-xl border border-accent-300/40 bg-gradient-to-r from-accent-400 via-accent-500 to-accent-600 px-3 py-1.5 text-primary-950 shadow-[0_0_20px_rgba(234,179,8,0.25)] transition-all duration-300"
                      >
                        <span className="pointer-events-none absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary-950/10">
                          <Crown className="h-3 w-3" />
                        </span>

                        <span className="relative min-w-0 text-left">
                          <span className="block text-sm font-bold">
                            Premium: 1 Hour with Billal Mahmud
                          </span>

                          <span className="mt-0.5 block text-[11px] font-medium text-primary-900/70">
                            Personal strategy session
                          </span>
                        </span>

                        <ArrowUpRight className="relative ml-auto h-3 w-3 shrink-0" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Mobile booking button */}
            <div className="mt-1 border-t border-slate-100 p-2 dark:border-white/10">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  navigate("/booking");
                }}
                className="btn-gold w-full"
              >
                <CalendarCheck className="h-4 w-4" />
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
