export default function Challenges({ onOpenModal }: { onOpenModal?: () => void }) {
  const challenges = [
    {
      title: "High Advertising Costs",
      desc: "Your campaigns spend continuously without delivering enough qualified enquiries.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 mx-auto mb-4 text-red-500" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Unqualified Leads",
      desc: "You receive enquiries from people who aren't genuinely interested or ready to book your services.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 mx-auto mb-4 text-red-500" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5c-1.2 0-2.1.9-2.3 2.1l-.7 4.9a1 1 0 0 0 1 1.1h14.5a1.8 1.8 0 0 0 .5-.1" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="8.5" cy="7" r="4"/>
          <line x1="20" y1="8" x2="20" y2="14" strokeLinecap="round"/>
          <line x1="23" y1="11" x2="17" y2="11" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Low Conversion Rates",
      desc: "Your ads generate traffic, but visitors don't take the next step.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 mx-auto mb-4 text-red-500" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Poor Campaign Targeting",
      desc: "Your message reaches a broad audience instead of people actively interested in astrology services.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 mx-auto mb-4 text-red-500" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Inconsistent Growth",
      desc: "Leads fluctuate from week to week, making it difficult to predict and scale your business.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 mx-auto mb-4 text-red-500" stroke="currentColor" strokeWidth="2">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="16 7 22 7 22 13" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-transparent pt-8 pb-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[#4bdb00] font-bold tracking-wider text-sm uppercase mb-4">The Challenge</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Getting Visibility Is Easy.<br/>
            Getting <span className="text-[#4bdb00]">Quality Leads Is Not.</span>
          </h2>
          
          <p className="text-lg text-slate-300 mt-6 max-w-3xl mx-auto leading-relaxed">
            Running ads doesn't automatically mean generating customers.<br/>
            Many astrology businesses spend money on advertising but struggle with inconsistent leads, high acquisition costs, poor-quality enquiries, or campaigns that generate clicks without conversions.
          </p>
          <p className="text-lg text-slate-300 mt-2 mb-8">
            You may be facing challenges such as:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {challenges.map((c, i) => (
            <div key={i} className="bg-black/50 p-6 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.05)] border border-slate-100 text-center">
              {c.icon}
              <h4 className="text-lg font-bold text-white mb-3">{c.title}</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button 
            onClick={onOpenModal}
            className="bg-[#5eff00] hover:bg-[#4bdb00] text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 shadow-[0_4px_14px_0_rgba(94,255,0,0.39)]"
          >
            Get Free Strategy
          </button>
        </div>
      </div>
    </section>
  );
}
