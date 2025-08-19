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
        {/* Header with Dark Green Theme */}
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[98vw] max-w-6xl rounded-2xl shadow-xl shadow-green-900/20">
          <nav className="flex items-center justify-between w-full px-8 py-2 bg-black/90 backdrop-blur-md border border-green-600/30 rounded-2xl">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-tr from-green-500 to-green-400 rounded-lg flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-green-500/30">
                S
              </span>
              <span className="text-white font-extrabold text-lg tracking-tight">SafePark</span>
            </a>

            {/* Navigation */}
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
                  className="relative text-gray-300 hover:text-white font-medium px-2 py-1 transition before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-green-500 before:rounded-full before:transition-all hover:before:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+919600840058"
                className="border border-green-600 text-white text-sm px-4 py-2 rounded-md font-semibold shadow-md hover:bg-green-900/50 transition"
              >
                Call Now
              </a>
              <button
                onClick={() => setShowFeedback(true)}
                className="bg-green-600 hover:bg-green-700 text-white text-sm px-6 py-2 rounded-md font-semibold shadow-md shadow-green-500/20 hover:shadow-lg transition"
              >
                💬 Feedback
              </button>
            </div>
          </nav>
        </header>
        
        {/* Main Content with Dark Green Background */}
        <main className="pt-6 bg-gradient-to-br from-black via-[#081c15] to-[#084d3d] min-h-screen">
          {children}
        </main>

        {/* Feedback Modal with Dark Green Theme */}
        {showFeedback && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-[#03241e] to-[#042c27] backdrop-blur-md border border-green-600/30 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-green-900/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Share Your Feedback</h3>
                <button
                  onClick={() => setShowFeedback(false)}
                  className="text-gray-400 hover:text-white text-2xl transition"
                >
                  ×
                </button>
              </div>
              
              <p className="text-green-400 text-center mb-6 text-sm">
                Your thoughts help us improve SafePark! Share questions, suggestions, or any feedback.
              </p>
              
              <textarea
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="What's on your mind? Write anything here..."
                className="w-full h-32 bg-black/50 border border-green-600/30 rounded-xl p-4 text-white placeholder-green-400/50 resize-none outline-none mb-6 focus:border-green-500 transition"
                autoFocus
              />
              
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowFeedback(false);
                    setFeedbackText('');
                  }}
                  className="flex-1 bg-black/50 text-white py-3 rounded-xl border border-green-600/30 hover:bg-green-900/30 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitFeedback}
                  disabled={!feedbackText.trim()}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-50"
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
