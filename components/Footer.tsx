import TelegramJoinButton from "./TelegramJoinButton";

export default function Footer() {
  return (
    <footer className="bg-black text-slate-200 py-16 md:py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 border-b border-pink-200 pb-12 md:pb-16 mb-8">

        {/* Brand / Logo */}
        <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
          <div className="flex items-center justify-center sm:justify-start mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image.png"
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-3 flex flex-col items-center sm:items-start">
          <h4 className="text-white font-bold mb-6 text-sm tracking-wide">Quick Links</h4>
          <ul className="space-y-3 text-sm text-center sm:text-left">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="upi://pay?pa=patelagni239@oksbi&pn=Agni%20Patel&am=2&cu=INR" className="hover:text-white transition text-[#5eff00] font-medium">Join for ₹2 (Pay via UPI)</a></li>
          </ul>
        </div>

        {/* About / Social */}
        <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
          <h4 className="text-white font-bold mb-6 text-sm tracking-wide">Performance Marketing That Drives Business Growth</h4>
          <p className="text-sm leading-relaxed mb-8">
            We help businesses build measurable customer acquisition campaigns through performance marketing, paid advertising, lead generation, and conversion optimization.
          </p>
          <div className="flex gap-4 justify-center sm:justify-start">
            <a href="#" className="w-10 h-10 rounded-full bg-transparent border border-pink-200 flex items-center justify-center hover:bg-[#4bdb00] hover:text-white hover:border-[#4bdb00] transition-colors text-slate-400">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-transparent border border-pink-200 flex items-center justify-center hover:bg-[#4bdb00] hover:text-white hover:border-[#4bdb00] transition-colors text-slate-400">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-transparent border border-pink-200 flex items-center justify-center hover:bg-[#4bdb00] hover:text-white hover:border-[#4bdb00] transition-colors text-slate-400">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            {/* Telegram Join Modal Button */}
            <TelegramJoinButton />
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
        <p className="text-[10px] md:text-xs text-slate-400 whitespace-nowrap text-center">
          &copy; {new Date().getFullYear()} PANDAeCe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
