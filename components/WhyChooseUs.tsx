export default function WhyChooseUs({ onOpenModal }: { onOpenModal?: () => void }) {
  const factors = [
    "Services and offers",
    "Target audience",
    "Business goals",
    "Advertising budget",
    "Customer acquisition targets",
    "Lead quality requirements",
    "Growth objectives"
  ];

  const differentiators = [
    {
      title: "Audience-Focused Strategy",
      desc: "We identify the audiences most relevant to your services and build campaigns around their intent, interests, and behaviour.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 text-[#4bdb00]" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5c-1.2 0-2.1.9-2.3 2.1l-.7 4.9a1 1 0 0 0 1 1.1h14.5a1.8 1.8 0 0 0 .5-.1" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M18 11l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Conversion-Focused Messaging",
      desc: "Your ads need to do more than attract attention. We create messaging designed to encourage the next step.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 text-[#4bdb00]" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Data-Driven Optimization",
      desc: "Campaign performance is continuously reviewed to identify opportunities to improve efficiency and lead quality.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 text-[#4bdb00]" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
          <path d="M14 13l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Full-Funnel Approach",
      desc: "We consider the complete journey from ad impression to landing-page visit, enquiry, consultation, and conversion.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 text-[#4bdb00]" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-transparent pt-12 pb-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side */}
        <div>
          <div className="text-[#4bdb00] font-bold tracking-wider text-sm uppercase mb-4">Why Choose PANDAeCe?</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Looking for the Best Astrology Marketing Agency in Bangalore?
          </h2>
          <p className="text-lg text-slate-300 mb-4 leading-relaxed">
            Choosing the right marketing partner can make a significant difference to your campaign performance. PANDAeCe focuses on creating marketing systems that connect your advertising budget with measurable business outcomes.
          </p>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed">
            As one of the Performance Marketing Companies for Astrologers, our approach is centered around understanding your business, audience, offers, and growth objectives rather than using a one-size-fits-all strategy.
          </p>
          
          <h3 className="text-xl font-bold text-white mb-6">We Build Campaigns Around Your:</h3>
          <div className="relative flex overflow-hidden w-full py-2 [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)]">
             <style>{`
               @keyframes scroll-left {
                 0% { transform: translateX(0); }
                 100% { transform: translateX(-50%); }
               }
               .animate-marquee {
                 animation: scroll-left 25s linear infinite;
               }
               .animate-marquee:hover {
                 animation-play-state: paused;
               }
             `}</style>
             <div className="flex w-max animate-marquee gap-4">
                {[...factors, ...factors, ...factors].map((f, i) => (
                  <div key={i} className="shrink-0 bg-black/50 border border-pink-200 shadow-sm hover:shadow-md transition-shadow rounded-full px-6 py-3 flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4bdb00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 bg-transparent p-1 rounded-full">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-white font-semibold whitespace-nowrap">{f}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">What Makes Our Approach Different?</h3>
          <div className="space-y-8">
            {differentiators.map((d, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                <div className="shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-[#d3ffaa] flex items-center justify-center bg-black/50 shadow-sm">
                    {d.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{d.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <button 
              onClick={onOpenModal}
              className="bg-[#5eff00] hover:bg-[#4bdb00] text-white font-bold py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition duration-300 flex flex-wrap justify-center items-center gap-2 shadow-lg shadow-[#5eff00]/20 w-full md:w-auto text-center"
            >
              Talk to a Performance Marketing Expert
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
