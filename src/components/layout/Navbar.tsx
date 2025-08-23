'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const handleGalleryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === '/') {
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#gallery';
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#111d1a]/70 shadow backdrop-blur-lg border-b border-emerald-800/30">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center shadow-xl">
              <span className="text-white font-black text-lg tracking-widest">S</span>
            </div>
            <span className="font-extrabold tracking-tight text-2xl text-emerald-300">SafePark</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className={`text-base font-semibold transition-colors duration-300 ${pathname === '/features' ? 'text-emerald-300' : 'text-white hover:text-emerald-300'}`}>
              How It Works
            </Link>
            <a
              href="/#gallery"
              onClick={handleGalleryClick}
              className="text-base font-semibold text-white hover:text-emerald-300 transition-colors duration-300"
            >
              Real Stories
            </a>
            <Link href="/pricing" className={`text-base font-semibold transition-colors duration-300 ${pathname === '/pricing' ? 'text-emerald-300' : 'text-white hover:text-emerald-300'}`}>
              Invest
            </Link>
            <Link href="/contact" className={`text-base font-semibold transition-colors duration-300 ${pathname === '/contact' ? 'text-emerald-300' : 'text-white hover:text-emerald-300'}`}>
              Let's Talk
            </Link>
          </div>

          <div className="flex items-center">
            <a 
              href="tel:+919600840058"
              className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-6 py-2 shadow-md rounded-lg font-bold transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
