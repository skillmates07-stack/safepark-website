"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { useState, createContext, useContext } from "react";

const inter = Inter({ subsets: ["latin"] });

// Create context for feedback
const FeedbackContext = createContext();

export const metadata = {
  title: "SafePark",
  description: "Premium Retractable Carport Solutions",
};

export default function RootLayout({ children }) {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  return (
    <html lang="en">
      <body className={inter.className}>
        <FeedbackContext.Provider value={{ showFeedback, setShowFeedback, feedbackText, setFeedbackText }}>
          {/* Header */}
          <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[98vw] max-w-6xl rounded-2xl shadow-xl">
            <nav className="flex items-center justify-between w-full px-8 py-2 bg-white/10 backdrop-blur-md border-b border-white/20 rounded-2xl">
              {/* Logo */}
              <a href="/" className="flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow">
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
                  <a key={link.name} href={link.href}
                     className="relative text-white/90 hover:text-white font-medium px-2 py-1 transition before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-tr before:from-purple-400 before:to-blue-400 before:rounded-full before:transition-all hover:before:w-full">
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <a href="tel:+919600840058"
                   className="glass-button border border-white/30 text-white text-sm px-4 py-2 rounded-md font-semibold shadow-md hover:shadow-xl hover:brightness-110 transition">
                  Call Now
                </a>
                <button 
                   onClick={() => setShowFeedback(true)}
                   className="bg-gradient-to-tr from-purple-400 to-blue-400 text-white text-sm px-6 py-2 rounded-md font-semibold shadow-md hover:scale-105 hover:shadow-xl transition">
                  💬 Feedback
                </button>
              </div>
            </nav>
          </header>
          
          {/* Main Content */}
          <main className="pt-6 bg-gradient-to-br from-[#191825] to-[#21155c] min-h-screen">
            {children}
          </main>

          {/* Feedback Modal */}
          {showFeedback && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md w-full">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Share Your Feedback</h3>
                <p className="text-white/60 text-center mb-4 text-sm">Questions, suggestions, or any feedback - we're listening!</p>
                <textarea
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="What's on your mind? Write anything here..."
                  className="w-full h-32 bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-white/50 resize-none outline-none mb-4"
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setShowFeedback(false);
                      setFeedbackText('');
                    }}
                    className="flex-1 bg-white/10 text-white py-3 rounded-xl hover:bg-white/20 transition">
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      if (feedbackText.trim()) {
                        alert('Thank you for your feedback! We appreciate it.');
                        setShowFeedback(false);
                        setFeedbackText('');
                      }
                    }}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
        </FeedbackContext.Provider>
      </body>
    </html>
  );
}

export const useFeedback = () => useContext(FeedbackContext);
