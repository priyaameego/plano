

export default function InsuranceMarquee() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6 mb-6">
        <p className="text-center text-slate-500 font-semibold uppercase tracking-wider text-sm">
          We accept most major insurance plans
        </p>
      </div>
      
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <div key={`first-${i}`} className="mx-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="text-xl font-bold text-slate-400 flex items-center gap-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                <span>InsuranceCo {i+1}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap absolute top-0" style={{ transform: 'translateX(100%)' }}>
          {[...Array(8)].map((_, i) => (
            <div key={`second-${i}`} className="mx-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="text-xl font-bold text-slate-400 flex items-center gap-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                <span>InsuranceCo {i+1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
