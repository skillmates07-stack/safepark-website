export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="glass fixed top-0 left-0 right-0 z-50 p-4 m-4 rounded-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-white font-bold text-xl">SafePark</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="/gallery" className="text-white/80 hover:text-white transition-colors">Gallery</a>
            <a href="/sizes" className="text-white/80 hover:text-white transition-colors">Sizes</a>
            <a href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="tel:+919600840058" className="glass-button text-white px-4 py-2 rounded-lg font-medium">
              Call Now
            </a>
            <a href="/sizes" className="bg-gradient-primary text-white px-6 py-2 rounded-lg font-medium hover:scale-105 transition-transform">
              Get Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="gradient-text">SafePark</span>
                <br />
                Smart Shelters.
                <br />
                <span className="text-white/90">Lasting Protection.</span>
              </h1>
              
              <p className="text-xl text-white/70 max-w-lg leading-relaxed">
                Because your car deserves more than just a cover. Stylish, portable & weatherproof protection for your luxury, classic, and everyday cars.
              </p>
              
              <p className="text-lg text-white/60">
                Designed for elegance, built for durability in Coimbatore.
              </p>
            </div>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="glass px-4 py-2 rounded-full">
                <span className="text-white/90 text-sm">✅ Retractable & Movable</span>
              </div>
              <div className="glass px-4 py-2 rounded-full">
                <span className="text-white/90 text-sm">✅ Rust-resistant GI Frame</span>
              </div>
              <div className="glass px-4 py-2 rounded-full">
                <span className="text-white/90 text-sm">✅ Oxford 600D Fabric</span>
              </div>
              <div className="glass px-4 py-2 rounded-full">
                <span className="text-white/90 text-sm">✅ UV & Heat Protection</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/sizes" className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg text-center">
                Book Your Carport Now
              </a>
              <a href="tel:+919600840058" className="glass-button text-white px-8 py-4 rounded-xl font-semibold text-lg text-center">
                Get a Free Quote
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="glass p-6 rounded-xl">
              <div className="flex items-center space-x-4 text-white/80">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Made in Coimbatore, Tamil Nadu</p>
                  <div className="flex flex-col sm:flex-row sm:space-x-6 mt-2">
                    <a href="tel:+919600840058" className="text-white/70 hover:text-white transition-colors">
                      📞 +91 9600840058
                    </a>
                    <a href="https://wa.me/919600840058" target="_blank" rel="noopener noreferrer" 
                       className="text-green-400 hover:text-green-300 transition-colors">
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Hero Visual */}
          <div className="relative">
            <div className="glass p-8 rounded-3xl animate-float">
              <div className="aspect-video bg-gradient-to-br from-slate-700/50 to-slate-900/50 rounded-2xl flex items-center justify-center border border-white/10">
                <div className="text-center space-y-6 p-8">
                  <div className="w-24 h-24 bg-gradient-primary rounded-3xl mx-auto flex items-center justify-center shadow-2xl">
                    <span className="text-white text-4xl">🚗</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-white font-bold text-xl">SafePark Retractable Carport</h3>
                    <p className="text-white/70 text-lg">Premium Protection for Your Vehicle</p>
                    <div className="space-y-2">
                      <p className="text-white/60 text-sm">✨ Galvanized Iron Frame</p>
                      <p className="text-white/60 text-sm">🛡️ Oxford 600D Fabric</p>
                      <p className="text-white/60 text-sm">⚡ Quick Installation</p>
                    </div>
                  </div>
                  <div className="glass-button px-8 py-3 rounded-xl text-white/80 hover:text-white transition-colors inline-flex items-center space-x-2">
                    <span>▶</span>
                    <span>See Gallery</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Feature Cards */}
            <div className="absolute -top-6 -right-6 glass p-4 rounded-xl shadow-2xl">
              <p className="text-white font-bold text-lg">100% UV Protected</p>
              <p className="text-white/60 text-sm">Waterproof & Fadeproof</p>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl shadow-2xl">
              <p className="text-white font-bold text-lg">Made in India</p>
              <p className="text-white/60 text-sm">Coimbatore, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is SafePark Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              What is <span className="gradient-text">SafePark</span>?
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto">
              SafePark is a premium retractable carport system designed to protect your vehicle from dust, heat, UV rays, bird droppings, rain, and minor impacts — all while enhancing the aesthetic appeal of your home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-2xl text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Foldable & Movable</h3>
              <p className="text-white/70">Unlike traditional car sheds, SafePark is retractable and installation-friendly, perfect for modern homeowners.</p>
            </div>

            <div className="glass p-8 rounded-2xl text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">All-Weather Protection</h3>
              <p className="text-white/70">Premium GI frame with Oxford 600D fabric provides superior protection against all weather conditions.</p>
            </div>

            <div className="glass p-8 rounded-2xl text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Stylish & Modern</h3>
              <p className="text-white/70">Elegant design that enhances your property value while providing functional vehicle protection.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


