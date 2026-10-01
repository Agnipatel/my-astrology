export default function FinalCTA({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <section className="bg-transparent pt-12 pb-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Abstract dark gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black/40 via-black to-black z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Side - Meditating silhouette */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
              {/* Sun/Glow effect */}
              <div className="absolute w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 bg-[#ffc46b] rounded-full blur-[60px] opacity-40"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/r.png"
                alt="Astrology Growth"
                className="w-48 h-48 md:w-64 md:h-64 lg:w-[450px] lg:h-[450px] relative z-10 rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-6">
            <div className="text-[#5eff00] font-bold tracking-wider text-sm uppercase mb-4">Ready To Grow?</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Ready to Turn Your Marketing<br />Into a <span className="text-[#4bdb00]">Growth Engine?</span>
            </h2>

            <p className="text-xl text-slate-200 mb-6 leading-relaxed max-w-2xl">
              Your astrology business deserves more than random clicks and inconsistent enquiries.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed max-w-2xl">
              Build a performance marketing strategy designed to reach the right audience, generate qualified leads, and turn your marketing investment into measurable business growth.
            </p>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Whether you're searching for performance marketing services for astrologers or a long-term Performance Marketing Agency for Astrology Businesses, PANDAeCe can help you build a strategy around your goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button
                onClick={onOpenModal}
                className="bg-[#5eff00] hover:bg-[#4bdb00] text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-[0_0_20px_rgba(94,255,0,0.3)] flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Get Your Free Marketing Strategy
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              <p className="text-sm text-slate-300 font-medium tracking-wide">
                Right Audience. Better Campaigns.<br />Measurable Growth.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats/Icons row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-pink-200">
          <div className="flex items-center gap-3">
            <div className="text-[#5eff00]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="21.17" y1="8" x2="12" y2="8"></line>
                <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
              </svg>
            </div>
            <span className="text-white text-sm font-medium">More Visibility</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-[#5eff00]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5c-1.2 0-2.1.9-2.3 2.1l-.7 4.9a1 1 0 0 0 1 1.1h14.5a1.8 1.8 0 0 0 .5-.1"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
              </svg>
            </div>
            <span className="text-white text-sm font-medium">More Enquiries</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-[#5eff00]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
            <span className="text-white text-sm font-medium">More Consultations</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-[#5eff00]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <span className="text-white text-sm font-medium">More Revenue</span>
          </div>
        </div>

      </div>
    </section>
  );
}
