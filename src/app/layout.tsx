// src/app/layout.tsx

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SafePark",
  description: "Premium Retractable Carport Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 w-full h-20">
          <nav className="glass h-full backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/10 flex items-center">
            <div className="flex justify-between items-center w-full px-8">
              {/* Left: Logo */}
              <div className="flex items-center space-x-2">
                <span className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  S
                </span>
                <span className="text-white font-bold text-xl">SafePark</span>
              </div>
              {/* Middle: Nav Links */}
              <nav className="flex space-x-6">
                <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
                <a href="#gallery" className="text-white/80 hover:text-white transition-colors">Gallery</a>
                <a href="#sizes" className="text-white/80 hover:text-white transition-colors">Sizes</a>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              </nav>
              {/* Right: Buttons */}
              <div className="flex items-center space-x-4">
                <a href="tel:+919600840058" className="glass-button text-white px-4 py-2 rounded-lg font-medium">
                  Call Now
                </a>
                <a href="#get-quote" className="bg-gradient-primary text-white px-6 py-2 rounded-lg font-medium hover:scale-105 transition-transform">
                  Get Quote
                </a>
              </div>
            </div>
          </nav>
        </header>
        
        {/* Main Content with top padding */}
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
