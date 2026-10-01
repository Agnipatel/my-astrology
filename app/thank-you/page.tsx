import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-12 text-center bg-slate-950 text-white">
      <div className="w-24 h-24 bg-[#eefae8] rounded-full flex items-center justify-center mb-8 shadow-[0_0_25px_rgba(94,255,0,0.4)]">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#4bdb00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
        Request <span className="text-[#5eff00]">Received!</span>
      </h1>
      <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
        Thank you for reaching out. One of our performance marketing experts will review your details and contact you shortly with your free strategy.
      </p>
      <Link 
        href="/"
        className="px-8 py-3 bg-[#5eff00] text-slate-900 font-bold rounded hover:bg-[#4bdb00] transition duration-300 shadow-[0_4px_14px_0_rgba(94,255,0,0.39)]"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
