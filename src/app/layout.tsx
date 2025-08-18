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
        {/* Glassy Frosted Header */}
        <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[98vw] max-w-6xl rounded-xl">
          <nav
            className="flex items-center justify-between w-full px-6 py-2
            bg-white/20 backdrop-blur-md border border-white/20
            rounded-xl shadow-xl"
            style={{ boxShadow: "0 8px 32px 0 rgba(31,38,135,0.10)" }}
          >
            {/* Logo Left */}
            <a href="#" className="flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
                S
              </span>
              <span className="text-white font-extrabold text-lg tracking-tight">SafePark</span>
            </a>

            {/* Centered Nav */}
            <nav className="hidden md:flex gap-8 flex-1 justify-center">
              <a href="#features" className="text-white/90 hover:text-white font-medium transition">Features</a>
              <a href="#gallery" className="text-white/90 hover:text-white font-medium transition">Gallery</a>
              <a href="#sizes" className="text-white/90 hover:text-white font-medium transition">Sizes</a>
              <a href="#contact" className="text-white/90 hover:text-white font-medium transition">Contact</a>
            </nav>

            {/* Actions Right */}
            <div className="flex items-center gap-2">
              <a
                href="tel:+919600840058"
                className="glass-button border border-white/30 text-white text-sm px-4 py-1.5 rounded-md font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition"
              >
                Call Now
              </a>
              <a
                href="#get-quote"
                className="bg-gradient-primary text-white text-sm px-5 py-1.5 rounded-md font-semibold shadow-md hover:shadow-xl hover:brightness-110 transition"
              >
                Get Quote
              </a>
            </div>
          </nav>
        </header>

        {/* Main with TIGHT spacing under header */}
        <main className="pt-[84px] pb-6 bg-gradient-to-br from-[#191825] to-[#1f2657] min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
