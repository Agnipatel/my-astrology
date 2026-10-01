export default function Services({ onOpenModal }: { onOpenModal?: () => void }) {
  const services = [
    {
      title: "Google Ads",
      desc: "Reach potential customers actively searching for astrology consultations, astrologers, kundli services, marriage guidance, career astrology, and other relevant services.",
      icon: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
      )
    },
    {
      title: "Meta Ads",
      desc: "Build awareness and generate leads through targeted campaigns across Facebook and Instagram using audience segmentation, compelling creatives, and conversion-focused messaging.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-[#E1306C]">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: "Lead Generation",
      desc: "Create campaigns designed to attract relevant enquiries rather than simply maximizing traffic.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-white">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18" cy="8" r="4" stroke="#5eff00" strokeWidth="2"/>
          <circle cx="18" cy="8" r="1" fill="#5eff00"/>
        </svg>
      )
    },
    {
      title: "Landing Page Optimization",
      desc: "Align your landing page with your ads, audience intent, and offer to create a smoother path from visitor to lead.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-white">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 14L15 14" stroke="#5eff00" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 11L12 17" stroke="#5eff00" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Conversion Optimization",
      desc: "Continuously analyze campaign performance and identify opportunities to improve clicks, leads, conversion rates, and acquisition costs.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-4 text-white">
          <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 9L14 14L10 10L4 16" stroke="#5eff00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 9H19V14" stroke="#5eff00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-transparent pt-12 pb-12 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Blobs for modern tech feel */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#5eff00]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-900/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-block bg-black/50 border border-pink-200 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase shadow-sm">
            ✨ Our Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.15]">
            Performance Marketing Built for <span className="text-[#5eff00]">Astrology Businesses</span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            PANDAeCe combines strategy, advertising, creative messaging, audience targeting, and conversion optimization to build campaigns around your business goals. We focus on the complete customer journey.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div 
              key={i} 
              className={`group bg-black/50/70 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-[#5eff00]/20 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden ${
                i === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Subtle green glow on hover inside the card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5eff00]/0 to-[#5eff00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-transparent border border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {s.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                <p className="text-slate-300 leading-relaxed flex-grow">{s.desc}</p>
                
                {/* Arrow indicator */}
                <div className="mt-8 flex items-center text-slate-400 group-hover:text-[#4bdb00] transition-colors font-semibold text-sm">
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button 
            onClick={onOpenModal}
            className="bg-[#5eff00] hover:bg-[#4bdb00] text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 flex items-center justify-center mx-auto gap-3 shadow-xl shadow-[#5eff00]/20 hover:shadow-[#5eff00]/40 transform hover:scale-105"
          >
            Build a Better Performing Campaign
            <span className="bg-slate-900 text-[#5eff00] rounded-full p-1.5 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
