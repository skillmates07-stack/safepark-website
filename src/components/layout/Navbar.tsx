'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGalleryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === '/') {
      document.getElementById('gallery')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    } else {
      window.location.href = '/#gallery';
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-emerald-400 font-bold text-2xl">SafePark</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/features"
              className={`text-base font-medium transition-colors duration-300 ${
                pathname === '/features' ? 'text-emerald-400' : 'text-white hover:text-emerald-400'
              }`}
            >
              Features
            </Link>
            <a
              href="/#gallery"
              onClick={handleGalleryClick}
              className="text-base font-medium text-white hover:text-emerald-400 transition-colors duration-300"
            >
              Gallery
            </a>
            <Link
              href="/pricing"
              className={`text-base font-medium transition-colors duration-300 ${
                pathname === '/pricing' ? 'text-emerald-400' : 'text-white hover:text-emerald-400'
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className={`text-base font-medium transition-colors duration-300 ${
                pathname === '/contact' ? 'text-emerald-400' : 'text-white hover:text-emerald-400'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Call Now Button */}
          <div className="flex items-center">
            <a 
              href="tel:+919600840058" 
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-lg font-bold transition-colors duration-300 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-emerald-400 p-2 rounded-md transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md rounded-lg mt-2 p-4 border border-gray-800/50">
            <Link
              href="/features"
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 px-3 rounded-md text-base font-medium transition-colors duration-300 ${
                pathname === '/features' ? 'text-emerald-400 bg-emerald-400/10' : 'text-white hover:text-emerald-400 hover:bg-gray-800/50'
              }`}
            >
              Features
            </Link>
            <a
              href="/#gallery"
              onClick={(e) => {
                handleGalleryClick(e);
                setIsMenuOpen(false);
              }}
              className="block py-2 px-3 rounded-md text-base font-medium text-white hover:text-emerald-400 hover:bg-gray-800/50 transition-colors duration-300"
            >
              Gallery
            </a>
            <Link
              href="/pricing"
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 px-3 rounded-md text-base font-medium transition-colors duration-300 ${
                pathname === '/pricing' ? 'text-emerald-400 bg-emerald-400/10' : 'text-white hover:text-emerald-400 hover:bg-gray-800/50'
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 px-3 rounded-md text-base font-medium transition-colors duration-300 ${
                pathname === '/contact' ? 'text-emerald-400 bg-emerald-400/10' : 'text-white hover:text-emerald-400 hover:bg-gray-800/50'
              }`}
            >
              Contact
            </Link>
            <div className="pt-4">
              <a 
                href="tel:+919600840058" 
                className="block w-full bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-300 text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
