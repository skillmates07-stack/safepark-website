'use client';

export default function HomePage() {
  return (
    <main className="pt-[56px] bg-gradient-to-br from-black via-[#0a1a0f] to-[#0d2818] min-h-screen">
      {/* HERO SECTION - Clean & Premium */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN - Content */}
          <div className="space-y-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-black/40 border border-green-600/50 px-4 py-2 text-sm backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white font-medium">Made in India • Premium Quality</span>
            </div>

            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                Protect Your Vehicle
                <br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  Without Building a Garage
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Premium retractable carport that installs in minutes, protects for years. No construction, no permits—just <span className="text-white font-semibold">complete peace of mind</span>.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {[
                "⚡ 15-Second Setup",
                "🛡️ 100% Weather Protection", 
                "🏆 2-Year Warranty"
              ].map((feature, idx) => (
                <div key={idx} className="px-4 py-2 bg-green-500/10 border border-green-400/30 rounded-full text-green-300 text-sm font-medium backdrop-blur-sm">
                  {feature}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="tel:+919600840058" 
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-green-600/30 hover:shadow-green-500/40 hover:scale-[1.02] transition-all duration-300 text-center"
              >
                🛡️ Protect My Car Now
              </a>
              <a 
                href="#gallery" 
                className="border-2 border-green-400/60 text-green-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-400 hover:text-black transition-all duration-300 backdrop-blur-sm text-center"
              >
                View Gallery
              </a>
            </div>

            {/* Trust Signals */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <span className="text-gray-300 font-semibold">2,000+ Protected Cars</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <span className="text-green-400 font-semibold">Installed Across India</span>
            </div>
          </div>

          {/* RIGHT COLUMN - Visual with Premium Card */}
          <div className="relative">
            {/* Hero Image Background */}
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder for car image */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                    <span className="text-4xl">🚗</span>
                  </div>
                  <p className="text-gray-400">Premium Car Protection</p>
                </div>
              </div>
            </div>

            {/* FLOATING PREMIUM CARD */}
            <div className="absolute bottom-6 right-6 w-80 max-w-[calc(100%-3rem)]">
              <div className="relative">
                {/* Premium Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl z-10">
                  100% UV Protected
                </div>

                {/* Card */}
                <div className="bg-black/60 backdrop-blur-2xl border border-green-400/30 rounded-3xl p-6 shadow-2xl">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mb-4 shadow-xl mx-auto">
                    <span className="text-2xl">🚗</span>
                  </div>
                  
                  {/* Title */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">SafePark Premium Protection</h3>
                    <p className="text-green-400 text-sm font-semibold">Complete Vehicle Care System</p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {[
                      { icon: "✨", text: "Strong & Durable Frame", color: "from-amber-500 to-orange-400" },
                      { icon: "🔵", text: "Premium Weather-Resistant Fabric", color: "from-blue-500 to-cyan-400" },
                      { icon: "⚡", text: "Hassle-Free Quick Setup", color: "from-purple-500 to-pink-400" }
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 hover:scale-[1.02] transition-all duration-300">
                        <div className={`w-10 h-10 bg-gradient-to-tr ${feature.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <span className="text-sm">{feature.icon}</span>
                        </div>
                        <span className="text-white font-medium text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <a href="/gallery" className="block w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white py-3 text-center font-bold rounded-2xl shadow-xl hover:scale-[1.02] transition-all duration-300 mb-3">
                    Explore Gallery →
                  </a>

                  {/* Trust */}
                  <div className="flex items-center justify-center gap-3 text-green-400/80 text-xs">
                    <span>2-Year Warranty</span>
                    <div className="w-px h-3 bg-gray-600"></div>
                    <span>Free Consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 lg:px-12 py-20 bg-gradient-to-br from-black/80 to-gray-900/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose SafePark?</h2>
            <p className="text-xl text-gray-300">Premium protection engineered for modern vehicles</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Premium Protection",
                desc: "Advanced weather-resistant fabric with 100% UV protection and waterproof coating"
              },
              {
                icon: "⚡",
                title: "Instant Setup",
                desc: "Revolutionary retractable design installs in under 15 seconds"
              },
              {
                icon: "🏆",
                title: "Guaranteed Quality",
                desc: "2-year comprehensive warranty with professional support"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-black/40 to-gray-900/60 border border-green-400/20 p-8 rounded-2xl text-center shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:border-green-400/40 transition-all duration-300">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 lg:px-12 py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Protect Your Vehicle?</h2>
          <p className="text-xl text-gray-300 mb-12">Join thousands of satisfied customers who chose SafePark</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <a href="tel:+919600840058" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:scale-[1.02] transition-all duration-300">
              Call for Free Quote
            </a>
            <a href="https://wa.me/919600840058" className="border-2 border-green-400 text-green-400 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-green-400 hover:text-black transition-all duration-300">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-green-400/20 px-6 lg:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-xl flex items-center justify-center text-black font-bold text-xl">
                  S
                </div>
                <span className="text-white font-bold text-3xl">SafePark</span>
              </div>
              <p className="text-gray-300 mb-4">
                Premium retractable carport solutions designed for elegance, built for durability.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex text-green-400">⭐⭐⭐⭐⭐</div>
                <span className="text-gray-400">2,000+ Happy Customers</span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
              <div className="space-y-3">
                <a href="tel:+919600840058" className="flex items-center text-gray-300 hover:text-green-400 transition">
                  <span className="mr-3">📞</span>
                  +91 9600840058
                </a>
                <a href="https://wa.me/919600840058" className="flex items-center text-gray-300 hover:text-green-400 transition">
                  <span className="mr-3">💬</span>
                  WhatsApp
                </a>
                <div className="flex items-center text-gray-300">
                  <span className="mr-3">📍</span>
                  Coimbatore, Tamil Nadu
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-400/20 pt-6 text-center">
            <p className="text-gray-400">
              © 2025 SafePark. Made with excellence in Coimbatore, Tamil Nadu
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
