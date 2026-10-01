import Link from 'next/link';

export default function Navbar({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <nav className="fixed w-full z-50 bg-transparent/80 backdrop-blur-md border-b border-pink-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <div className="flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          {/* <div>
            <span className="text-2xl font-black text-white tracking-tight leading-none block">PANDA<span className="text-[#4bdb00]">eCe</span></span>
            <span className="text-[0.45rem] uppercase text-[#4bdb00] tracking-[0.25em] block leading-none mt-1">Grow • Advertise • Convert</span>
          </div> */}
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
          <Link href="#home" className="hover:text-white transition">Home</Link>
          <Link href="#services" className="hover:text-white transition">Services</Link>
          <Link href="#contact" className="hover:text-white transition">Case Studies</Link>
          <Link href="#about" className="hover:text-white transition">About</Link>
          <Link href="#case-studies" className="hover:text-white transition">Contact</Link>
        </div>

        <div>
          <button
            onClick={onOpenModal}
            className="bg-[#5eff00] hover:bg-[#4bdb00] text-white font-bold py-2.5 px-6 rounded-full text-sm transition duration-300 flex items-center gap-2"
          >
            Get a Free Strategy
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
