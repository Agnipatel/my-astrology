export default function Hero({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <section
      className="relative text-white pt-32 pb-8 lg:pt-40 lg:pb-12 px-6 sm:px-12 lg:px-24 bg-transparent overflow-hidden"
    >
      {/* Optional decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#5eff00]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#5eff00]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6 space-y-6">
          <p>Performance Marketing for Astrology Businesses</p>
          <h5 className="text-2xl text-green-600">Turn Astrology Searches Into Qualified Leads Paying Customer</h5>



          <div className="space-y-4 pt-2">
            <p className="text-lg text-slate-200 max-w-3xl leading-relaxed">
              Your astrology business may have experienced astrologers, valuable services, and a strong reputation—but reaching the right audience at the right time is what drives consistent growth.
            </p>

            <p className="text-lg text-slate-200 max-w-3xl leading-relaxed">
              PANDAeCe provides performance marketing services for astrologers and astrology businesses, helping you generate measurable results through paid advertising, lead generation, audience targeting, and conversion-focused campaigns.
            </p>

            <p className="text-lg text-slate-200 max-w-3xl leading-relaxed">
              As a Performance Marketing Agency for Astrology Businesses, we help you connect with people actively searching for astrology consultations, kundli readings, tarot, numerology, relationship guidance, and other spiritual services.
            </p>
          </div>

          <div className="pt-6 flex flex-wrap items-center gap-6">
            <button
              onClick={onOpenModal}
              className="bg-[#5eff00] hover:bg-[#4bdb00] text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 flex items-center gap-2 shadow-[0_4px_14px_0_rgba(94,255,0,0.39)]"
            >
              Get Your Free Marketing Strategy
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[0.65rem] font-bold text-slate-300 uppercase tracking-widest pt-6">
            <span>Performance Marketing</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span>Lead Generation</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span>Google Ads</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span>Meta Ads</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span>Conversion Optimization</span>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center lg:justify-end items-center lg:items-end relative">
          {/* Right side image */}
          <div className="w-full max-w-sm md:max-w-md aspect-[4/5] rounded-3xl overflow-hidden border-2 border-slate-700/50 shadow-[0_0_40px_rgba(94,255,0,0.15)] relative z-10 mb-6 lg:mb-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://jyotishapoorv.com/wp-content/uploads/2026/08/intro-image-1.png"
              alt="Astrology Marketing Growth"
              className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
