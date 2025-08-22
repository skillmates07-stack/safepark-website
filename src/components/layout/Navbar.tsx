'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#031924]/95 backdrop-blur-md border-b border-gray-800/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-emerald-400 font-bold text-xl">SafePark</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Call Now Button - Desktop */}
          <div className="hidden md:flex md:items-center">
            <a
              href="tel:+919600840058"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
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
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-screen opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#031924]/98 backdrop-blur-md rounded-lg mt-2 border border-gray-800/50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-emerald-400 hover:bg-gray-800/50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Call Button */}
            <div className="pt-4 pb-2">
              <a
                href="tel:+919600840058"
                onClick={() => setIsMenuOpen(false)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center gap-2 w-full justify-center"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
