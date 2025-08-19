"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  const handleSubmitFeedback = () => {
    if (feedbackText.trim()) {
      const whatsappUrl = `https://wa.me/919600840058?text=Feedback: ${encodeURIComponent(feedbackText)}`;
      window.open(whatsappUrl, '_blank');
      
      setShowFeedback(false);
      setFeedbackText('');
      alert('Thank you for your feedback! We appreciate it.');
    }
  };

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
              <button
                onClick={() => setShowFeedback(true)}
                className="bg-green-600/90 backdrop-blur-sm hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg font-semibold shadow-lg shadow-green-600/20 hover:scale-105 hover:shadow-green-600/30 transition-all duration-300"
              >
                💬 Feedback
              </button>
            </div>
          </nav>
        </header>
        
        {/* Main Content with Reduced Top Padding */}
        <main className="pt-20 bg-gradient-to-br from-black via-[#0a1a0f] to-[#0d2818] min-h-screen">
          {children}
        </main>

        {/* Feedback Modal */}
        {showFeedback && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-black/40 backdrop-blur-xl border border-green-400/20 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-green-900/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Share Your Feedback</h3>
                <button
                  onClick={() => setShowFeedback(false)}
                  className="text-gray-400 hover:text-white text-2xl transition-colors duration-300"
                >
                  ×
                </button>
              </div>
              
              <p className="text-green-400/80 text-center mb-6 text-sm">
                Your thoughts help us improve SafePark! Share questions, suggestions, or any feedback.
              </p>
              
              <textarea
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="What's on your mind? Write anything here..."
                className="w-full h-32 bg-black/30 backdrop-blur-sm border border-green-400/20 rounded-xl p-4 text-white placeholder-green-400/50 resize-none outline-none mb-6 focus:border-green-400/50 focus:bg-black/40 transition-all duration-300"
                autoFocus
              />
              
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowFeedback(false);
                    setFeedbackText('');
                  }}
                  className="flex-1 bg-white/10 backdrop-blur-sm text-white py-3 rounded-xl border border-gray-500/20 hover:bg-white/20 transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitFeedback}
                  disabled={!feedbackText.trim()}
                  className="flex-1 bg-green-600/90 backdrop-blur-sm hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 shadow-lg shadow-green-600/20"
                >
                  Send Feedback
                </button>
              </div>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
