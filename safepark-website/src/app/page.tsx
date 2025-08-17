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
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#gallery" className="text-white/80 hover:text-white transition-colors">Gallery</a>
            <a href="#sizes" className="text-white/80 hover:text-white transition-colors">Sizes</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="tel:+919600840058" className="glass-button text-white px-4 py-2 rounded-lg font-medium">
              Call Now
            </a>
            <a href="#quote" className="bg-gradient-primary text-white px-6 py-2 rounded-lg font-medium hover:scale-105 transition-transform">
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
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg text-center">
                Book Your Carport Now
              </a>
              <a href="tel:+919600840058" className="glass-button text-white px-8 py-4 rounded-xl font-semibold text-lg text-center">
                Get a Free Quote
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="glass p-4 rounded-xl">
              <div className="flex items-center space-x-4 text-white/80">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-xs">📍</span>
                </div>
                <div>
                  <p className="font-medium">Coimbatore, Tamil Nadu</p>
                  <p className="text-sm">+91 9600840058</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Hero Image/Video */}
          <div className="relative">
            <div className="glass p-8 rounded-3xl animate-float">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-primary rounded-2xl mx-auto flex items-center justify-center">
                    <span className="text-white text-3xl">🚗</span>
                  </div>
                  <p className="text-white/80 text-lg font-medium">SafePark Retractable Carport</p>
                  <p className="text-white/60">Premium Protection for Your Vehicle</p>
                  <div className="glass-button px-6 py-2 rounded-lg text-white/80 text-sm inline-block">
                    ▶ Watch Demo Video
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 glass p-4 rounded-xl">
              <p className="text-white/90 font-bold text-lg">UV Protected</p>
              <p className="text-white/60 text-sm">100% Waterproof</p>
            </div>
            
            <div className="absolute -bottom-4 -left-4 glass p-4 rounded-xl">
              <p className="text-white/90 font-bold text-lg">Made in India</p>
              <p className="text-white/60 text-sm">Coimbatore</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
