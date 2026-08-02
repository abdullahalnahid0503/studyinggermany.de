import { useRouter } from "../../lib/router";
import {
  GraduationCap,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Success Stories", href: "/successstories" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "University Admission", href: "/services" },
      { label: "Visa Services", href: "/services" },
      { label: "Blocked Account", href: "/services" },
      { label: "Health Insurance", href: "/services" },
      { label: "Career Preparation", href: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "German Universities", href: "/universities" },
      { label: "Blog & Guides", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Book Consultation", href: "/booking" },
      { label: "One Hour with Billal", href: "/premium" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Imprint", href: "/imprint" },
    ],
  },
];

const socials = [
  {
    Icon: Facebook,
    href: "https://www.facebook.com/miaacademyofficial",
    label: "Facebook",
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/miaacademy07/",
    label: "Instagram",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/mia-academy-07/",
    label: "LinkedIn",
  },
  {
    Icon: Youtube,
    href: "https://www.youtube.com/@BillalMahmud07",
    label: "YouTube",
  },
  {
    Icon: MessageCircle,
    href: "https://wa.me/+4915214849665",
    label: "WhatsApp",
  },
];

export function Footer() {
  const { navigate } = useRouter();

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/")) return;
    e.preventDefault();
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (path && path !== "/" && path !== window.location.pathname) {
        navigate(path as "/");
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href as "/booking" | "/privacy" | "/terms" | "/imprint" | "/");
    }
  };

  return (
    <footer className="relative overflow-hidden bg-primary-950 text-slate-300">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="container-page relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
              className="flex items-center gap-2.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm">
                <GraduationCap className="h-5 w-5 text-accent-400" />
              </span>
              <span className="font-heading text-base font-bold text-white">
                Studying<span className="text-accent-400">Germany</span>.de
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              International education consultancy. We help students from around
              the world study, live, and build a future in Germany.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-accent-400/40 hover:text-accent-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={(e) => handleLink(e, l.href)}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} studyinggermany.de. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-success" />
            Developed by
            <a
              href="https://www.abdullahalnahid.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-400 transition-colors hover:text-accent-300"
            >
              Abdullah Al Nahid
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
