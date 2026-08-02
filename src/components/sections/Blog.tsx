import { useState } from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Reveal, SectionHeading } from '../ui/Reveal';
import { blogPosts } from '../../lib/data';

const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export function Blog() {
  const [active, setActive] = useState('All');
  const posts = active === 'All' ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <section id="blog" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Blog & Guides"
          title={<>Insights for your <span className="heading-gradient">Germany journey</span></>}
          subtitle="Practical, up-to-date guides on visas, universities, funding, and life as an international student in Germany."
        />

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  active === c
                    ? 'bg-primary-700 text-white shadow-soft'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={(i % 3) * 0.08}>
              <article className="group h-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 dark:border-white/5 dark:bg-primary-900/40">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-primary-800 backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span>{post.date}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-base font-semibold leading-snug text-ink transition-colors group-hover:text-primary-700 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-700 dark:text-accent-400">
                    Read more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
