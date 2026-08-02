import { useEffect, useState } from 'react';
import { Cookie, X } from 'lucide-react';

const KEY = 'sg-cookie-consent';

export function CookieConsent() {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    if (!stored) {
      const t = setTimeout(() => { setShow(true); setTimeout(() => setVisible(true), 50); }, 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const decide = (choice: 'accept' | 'decline') => {
    setVisible(false);
    setTimeout(() => { localStorage.setItem(KEY, choice); setShow(false); }, 400);
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl transition-all duration-400"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(60px)' }}
    >
      <div className="glass-strong flex flex-col gap-4 rounded-2xl p-5 shadow-card sm:flex-row sm:items-center">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-500/10">
          <Cookie className="h-5 w-5" />
        </span>
        <p className="flex-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
          We use cookies to enhance your experience and analyze site traffic. See our{' '}
          <a href="/privacy" className="font-semibold text-primary-700 underline-offset-2 hover:underline dark:text-accent-400">Privacy Policy</a>.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => decide('decline')}
            className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
          >
            Decline
          </button>
          <button onClick={() => decide('accept')} className="btn-primary !py-2 !px-4 !text-xs">
            Accept all
          </button>
          <button onClick={() => decide('decline')} aria-label="Close" className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 lg:hidden">
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
