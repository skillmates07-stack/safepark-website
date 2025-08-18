// src/app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#191825] to-[#21155c] text-white p-6">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-12 rounded-2xl text-center shadow-2xl">
        <div className="w-20 h-20 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6">
          S
        </div>
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-tr from-purple-400 to-blue-400 bg-clip-text text-transparent">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-white/70 mb-8 max-w-md">
          Oops! The page you are looking for seems to have moved or does not exist. 
          Let us get you back to our premium carport solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link 
            href="/" 
            className="bg-gradient-to-tr from-purple-400 to-blue-400 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            🏠 Back to Home
          </Link>
          <a 
            href="tel:+919600840058" 
            className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition"
          >
            📞 Contact Us
          </a>
        </div>
        
        <div className="text-white/60 text-sm space-y-2">
          <p>Quick Links:</p>
          <div className="flex justify-center gap-4 text-xs">
            <Link href="/#features" className="hover:text-white">Features</Link>
            <Link href="/#gallery" className="hover:text-white">Gallery</Link>
            <Link href="/sizes" className="hover:text-white">Sizes & Pricing</Link>
            <span>Call: +91 9600840058</span>
          </div>
          <p className="mt-4">📍 Gandhi Nagar, Coimbatore, Tamil Nadu - 641030</p>
        </div>
      </div>
    </main>
  );
}
