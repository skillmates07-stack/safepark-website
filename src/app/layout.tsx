"use client";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Compact Glassy Header */}
        <header className="fixed top-3 left-1/2 -translate-x-1/2 z-40 w-[95vw] max-w-6xl">
          <nav className="flex items-center justify-between w-full px-8 py-2.5 bg-black/30 backdrop-blur-xl border border-green-400/20 rounded-2xl shadow-lg shadow-green-900/10 transition-all duration-300 hover:bg-black/40 hover:shadow-green-900/20">
            {/* Smaller Logo */}
            <a href="/" className="flex items-center gap-2.5 hover:scale-105 transition-transform duration-300">
              <span className="w-8 h-8 bg-gradient-to-tr from-green-500 to-green-400 rounded-lg flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-green-500/30">
                S
              </span>
              <span className="text-white font-extrabold text-lg tracking-tight">SafePark</span>
            </a>

            {/* Compact Navigation Links */}
            <nav className="hidden md:flex gap-6 flex-1 justify-center">
              {[
                { name: "Features", href: "/#features" },
                { name: "Gallery", href: "/#gallery" },
                { name: "Pricing", href: "/pricing" },
                { name: "Contact", href: "/#contact" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-gray-200 hover:text-white font-semibold px-3 py-1.5 rounded-lg transition-all duration-300 hover:bg-green-500/10 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-green-400 before:rounded-full before:transition-all hover:before:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Compact Action Buttons */}
            <div className="flex items-center gap-2.5">
              <a
                href="tel:+919600840058"
                className="border border-green-400/40 bg-green-500/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-green-500/20 hover:border-green-400/60 transition-all duration-300"
              >
                Call Now
              </a>
              {/* REPLACED: Feedback button with Community link */}
              <a
                href="/community"
                className="bg-green-600/90 backdrop-blur-sm hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg font-semibold shadow-lg shadow-green-600/20 hover:scale-105 hover:shadow-green-600/30 transition-all duration-300"
              >
                👥 Community
              </a>
            </div>
          </nav>
        </header>
        
        {/* Main Content with Reduced Top Padding */}
        <main className="pt-20 bg-gradient-to-br from-black via-[#0a1a0f] to-[#0d2818] min-h-screen">
          {children}
        </main>

        {/* REMOVED: Feedback modal completely */}
      </body>
    </html>
  );
}
