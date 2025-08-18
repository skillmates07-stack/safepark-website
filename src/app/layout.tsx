// src/app/layout.tsx

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SafePark",
  description: "Premium Retractable Carport Solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Sticky, clean, professional header */}
        <header className="sticky top-0 z-50 bg-black/40 backdrop-blur flex items-center justify-center h-16 border-b border-white/10">
          <div className="w-full max-w-7xl flex items-center justify-between px-4 md:px-8">
            {/* Brand/Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                S
              </span>
              <span className="text-white font-bold text-lg tracking-tight">SafePark</span>
            </a>
            {/* Center Navigation */}
            <nav className="hidden md:flex gap-6">
              <a href="#features" className="text-white/80 hover:text-white text-sm font-medium transition">Features</a>
              <a href="#gallery" className="text-white/80 hover:text-white text-sm font-medium transition">Gallery</a>
              <a href="#sizes" className="text-white/80 hover:text-white text-sm font-medium transition">Sizes</a>
              <a href="#contact" className="text-white/80 hover:text-white text-sm font-medium transition">Contact</a>
            </nav>
            {/* Action Buttons */}
            <div className="flex gap-2">
              <a href="tel:+919600840058" className="glass-button border border-white/20 text-white text-sm px-4 py-1.5 rounded-lg font-semibold hover:scale-105 transition">Call Now</a>
              <a href="#get-quote" className="bg-gradient-primary text-white text-sm px-5 py-1.5 rounded-lg font-semibold shadow-md hover:scale-105 transition">Get Quote</a>
            </div>
          </div>
        </header>
        {/* Main content area with tighter top padding */}
        <main className="pt-16 min-h-screen bg-gradient-to-br from-[#191825] to-[#1f2657]">
          {children}
        </main>
      </body>
    </html>
  );
}
