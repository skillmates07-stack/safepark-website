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
        {/* Super Compact Glassy Header */}
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[98vw] max-w-6xl rounded-2xl shadow-xl">
          <nav
            className="flex items-center justify-between w-full px-8 py-1
            bg-white/10 backdrop-blur-md border-b border-white/20
            rounded-2xl h-12"
          >
            {/* Logo Left */}
            <a href="/" className="flex items-center gap-2">
              <span className="w-6 h-6 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-lg flex items-center justify-center text-white font-bold text-[14px] shadow">
                S
              </span>
              <span className="text-white font-extrabold text-sm tracking-tight">SafePark</span>
            </a>

            {/* Centered Nav */}
            <nav className="hidden md:flex gap-7 flex-1 justify-center">
              {[
                { name: "Features", href: "/#features" },
                { name: "Gallery", href: "/#gallery" },
                { name: "Sizes", href: "/sizes" },
                { name: "Contact", href: "/#contact" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-white/90 hover:text-white font-medium px-2 py-1 text-xs transition
                  before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-tr before:from-purple-400 before:to-blue-400 before:rounded-full before:transition-all hover:before:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions Right */}
            <div className="flex items-center gap-2">
              <a
                href="tel:+919600840058"
                className="glass-button border border-white/30 text-white text-xs px-3 py-1 rounded-md font-semibold shadow-md hover:shadow-xl hover:brightness-110 transition"
              >
                Call Now
              </a>
              <a
                href="#get-quote"
                className="bg-gradient-to-tr from-purple-400 to-blue-400 text-white text-xs px-4 py-1 rounded-md font-semibold shadow-md hover:scale-105 hover:shadow-xl transition"
              >
                Get Quote
              </a>
            </div>
          </nav>
        </header>
        
        {/* Main content with TIGHTEST spacing */}
        <main className="pt-8 bg-gradient-to-br from-[#191825] to-[#21155c] min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
