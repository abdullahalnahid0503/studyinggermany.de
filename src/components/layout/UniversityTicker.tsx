import { germanPublicUniversities } from '../../lib/universities';

const doubled = [...germanPublicUniversities, ...germanPublicUniversities];

export function UniversityTicker() {
  return (
    <div className="relative overflow-hidden border-y border-slate-100 bg-white py-4 dark:border-white/5 dark:bg-primary-900/30">

      {/* Smooth edge blur using mask (PRO LEVEL trick) */}
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 220s linear infinite;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }

        /* LEFT + RIGHT BLUR EDGE */
        .ticker-mask {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>

      {/* Edge blur wrapper */}
      <div className="ticker-mask">

        <div className="ticker-track">
          {doubled.map((uni, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-3 px-6 text-[13px] font-medium text-slate-600 dark:text-slate-400"
            >
              {/* Logo */}
              <img
                src={uni.logo}
                alt={uni.name}
                className="h-5 w-5 rounded-sm object-contain bg-white"
                loading="lazy"
              />

              {/* Name */}
              {uni.name}

              {/* Separator dot */}
              <span className="ml-4 h-1 w-1 shrink-0 rounded-full bg-slate-300 dark:bg-white/20" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}