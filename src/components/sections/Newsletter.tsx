import { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { supabase } from '../../lib/supabase';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');
    const { error } = await supabase.from('newsletter_subscribers').insert({ email });
    if (error && !error.message.toLowerCase().includes('duplicate')) {
      setStatus('error');
      return;
    }
    setStatus('done');
    setEmail('');
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-800 to-primary-950 p-8 sm:p-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-500/15 blur-[80px]" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              <Mail className="h-3.5 w-3.5" /> Newsletter
            </span>
            <h3 className="mt-4 font-heading text-2xl font-bold text-white text-balance sm:text-3xl">
              Germany insights, in your inbox
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Visa updates, scholarship deadlines, and admission tips. Once a week, no spam.
            </p>
          </div>

          <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white outline-none backdrop-blur placeholder:text-slate-400 focus:border-accent-400"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-gold shrink-0 disabled:opacity-60"
            >
              {status === 'sending' ? 'Subscribing...' : (
                <><Send className="h-4 w-4" /> Subscribe</>
              )}
            </button>
          </form>
        </div>

        {status === 'done' && (
          <div
            className="relative mt-5 flex items-center gap-2 text-sm text-accent-300"
            style={{ animation: 'fadeUp 0.4s ease-out' }}
          >
            <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
            <CheckCircle2 className="h-4 w-4" /> You're subscribed! Check your inbox.
          </div>
        )}
        {status === 'error' && (
          <p className="relative mt-5 text-sm text-red-300">Something went wrong. Please try again.</p>
        )}
      </div>
    </Reveal>
  );
}
