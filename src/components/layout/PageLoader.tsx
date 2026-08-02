export function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas dark:bg-primary-950">
      <div className="flex flex-col items-center">
        <span
          className="flex h-16 w-16 items-center justify-center"
          style={{ animation: "loaderPop 0.5s ease-out forwards" }}
        >
          <img
            src="/studyinggermany.png"
            alt="StudyingGermany.de logo"
            className="h-16 w-16 object-contain"
          />
        </span>
        <div className="mt-5 text-center">
          <p className="font-heading text-sm font-bold text-ink dark:text-white">
            Studying<span className="text-accent-500">Germany</span>.de
          </p>
          <div className="mx-auto mt-3 h-0.5 w-32 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
            <div
              className="h-full w-1/2 bg-gradient-to-r from-primary-700 to-accent-500"
              style={{ animation: "loaderSlide 1.2s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes loaderPop { from { transform: scale(0.7); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes loaderSlide { 0% { transform: translateX(-100%); } 100% { transform: translateX(300%); } }
      `}</style>
    </div>
  );
}
