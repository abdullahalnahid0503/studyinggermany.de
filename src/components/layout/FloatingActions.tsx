import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setShow(scrolled > 600);
      setProgress(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/+4915214849665"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 left-5 z-40 flex h-14 w-14 items-center justify-center lg:bottom-5"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/40" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-lg transition-transform hover:scale-105">
          <MessageCircle className="h-6 w-6" />
        </span>
      </a>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed bottom-36 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full glass-strong text-primary-700 shadow-soft dark:text-white transition-all duration-300 lg:bottom-20"
        style={{
          opacity: show ? 1 : 0,
          pointerEvents: show ? "auto" : "none",
          transform: show ? "scale(1)" : "scale(0.6)",
        }}
      >
        <ArrowUp className="h-4 w-4" />
      </button>

      <div
        className="fixed left-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary-700 via-accent-500 to-accent-300 transition-none"
        style={{ width: `${progress * 100}%` }}
      />
    </>
  );
}
