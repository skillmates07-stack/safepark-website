import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20 animate-pulse"></div>
      
      {/* 404 Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="glass p-12 rounded-3xl">
          {/* Large 404 */}
          <div className="text-8xl font-bold gradient-text mb-6">404</div>
          
          {/* SafePark Logo */}
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <span className="text-white font-bold text-2xl">S</span>
          </div>
          
          {/* Error Message */}
          <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-white/70 mb-8 text-lg">
            Oops! The page you're looking for seems to have moved or doesn't exist. 
            Let's get you back to our premium carport solutions.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
              🏠 Back to Home
            </Link>
            <Link href="/contact" className="glass-button text-white px-8 py-3 rounded-xl font-semibold">
              📞 Contact Us
            </Link>
          </div>
          
          {/* Quick Links */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/60 mb-4">Quick Links:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/features" className="text-white/70 hover:text-white transition-colors">Features</Link>
              <Link href="/gallery" className="text-white/70 hover:text-white transition-colors">Gallery</Link>
              <Link href="/sizes" className="text-white/70 hover:text-white transition-colors">Sizes & Pricing</Link>
              <a href="tel:+919600840058" className="text-white/70 hover:text-white transition-colors">Call: +91 9600840058</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
