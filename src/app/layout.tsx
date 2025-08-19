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
      // Here you can add email sending, database saving, or API calls
      // For now, we'll use WhatsApp as the fallback
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
        {/* Premium Frosted Glass Header */}
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[98vw] max-w-6xl rounded-2xl shadow-xl">
          <nav className="flex items-center justify-between w-full px-8 py-2 bg-white/10 backdrop-blur-md border-b border-white/20 rounded-2xl">
            {/* Logo Left */}
            <a href="/" className="flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow">
                S
              </span>
              <span className="text-white font-extrabold text-lg tracking-tight">SafePark</span>
            </a>

            {/* Centered Nav */}
            <nav className="hidden md:flex gap-10 flex-1 justify-center">
              {[
                { name: "Features", href: "/#features" },
                { name: "Gallery", href: "/#gallery" },
                { name: "Pricing", href: "/pricing" },
                { name: "Contact", href: "/#contact" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-white/90 hover:text-white font-medium px-2 py-1 transition before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-tr before:from-purple-400 before:to-blue-400 before:rounded-full before:transition-all hover:before:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions Right */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+919600840058"
                className="glass-button border border-white/30 text-white text-sm px-4 py-2 rounded-md font-semibold shadow-md hover:shadow-xl hover:brightness-110 transition"
              >
                Call Now
              </a>
              <button
                onClick={() => setShowFeedback(true)}
                className="bg-gradient-to-tr from-purple-400 to-blue-400 text-white text-sm px-6 py-2 rounded-md font-semibold shadow-md hover:scale-105 hover:shadow-xl transition"
              >
                💬 Feedback
              </button>
            </div>
          </nav>
        </header>
        
        {/* Main content */}
        <main className="pt-6 bg-gradient-to-br from-[#191825] to-[#21155c] min-h-screen">
          {children}
        </main>

        {/* Feedback Modal */}
        {showFeedback && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md w-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Share Your Feedback</h3>
                <button
                  onClick={() => setShowFeedback(false)}
                  className="text-white/60 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <p className="text-white/60 text-center mb-6 text-sm">
                Your thoughts help us improve SafePark! Share questions, suggestions, or any feedback.
              </p>
              
              <textarea
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="What's on your mind? Write anything here..."
                className="w-full h-32 bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-white/50 resize-none outline-none mb-6"
                autoFocus
              />
              
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowFeedback(false);
                    setFeedbackText('');
                  }}
                  className="flex-1 bg-white/10 text-white py-3 rounded-xl hover:bg-white/20 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitFeedback}
                  disabled={!feedbackText.trim()}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition disabled:opacity-50 disabled:hover:scale-100"
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
