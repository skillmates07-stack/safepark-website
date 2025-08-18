import "./globals.css";```port { Inter } from "next/font/google";```onst inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saf```rk",
  description: "Premium```tractable Car```t Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;``` {
  return (
    <html lang="en">```    <body className={inter.className}>
        <header className="sticky```p-0 z-50 w-full h-20">```        <nav className="glass```full backdrop-blur-md bg-white/10 dark```-black/20 border```rder-white/10 flex items-center">
            <div className="flex```stify-between items-center w-full px-8">
              <div className="flex items-center space```2">
                <span className="w``` h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  S
                </span>
                <span className="text-white font-bold text-xl">SafePark```pan>
              </div>
              <nav```assName="flex space-x-6">
                <a href="#features```lassName="text-white/80 hover:text-white transition-colors">Features```>
                <a href="#gallery```lassName="text-white/80 hover:text-white transition-colors">Gallery</a>
                <a href="#sizes```lassName="text-white/80 hover:text-white transition-colors">Sizes</a>
                <a href="#contact```lassName="text-white/80 hover:text-white transition-colors">Contact</a>
              </nav>
              <div className="flex```ems-center space-x-4">
                <a href="```:+919600840058" className="glass```tton text-white px-4 py-2 rounded-lg font-medium">```                Call Now
                </a>
                <a href="#```-quote" className="bg```adient-primary text-white px-6 py-2 rounded-lg font-medium hover:scale-105 transition-transform">
                  Get Quote
                </a>
              </div>
            </div>
          </nav>
        </header>
        
        <main className="pt```">
          {children}
        </main>
      </body>
    </html>
  );
}
