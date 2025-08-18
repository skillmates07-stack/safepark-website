// src/app/page.tsx - COMPLETE PROFESSIONAL HOMEPAGE

export default function HomePage() {
  return (
    <main className="pt-16 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="floating-shapes"></div>
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-between px-8 lg:px-16 py-4">
        <div className="flex-1 max-w-3xl animate-slide-up">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full glass border border-white/20 text-xs text-white/90 mb-3">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Made in India • Premium Quality
          </div>
          
          {/* Hero Title */}
          <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-3">
            <span className="gradient-text">Smart Shelters.</span><br/>
            <span className="text-white">Lasting</span><br/>
            <span className="text-white">Protection.</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-3 max-w-2xl">
            Because your car deserves more than just a cover. 
            <span className="text-white font-medium"> Stylish, portable & weatherproof protection</span> 
            for your luxury, classic, and everyday cars.
          </p>
          
          <p className="text-base text-white/60 mb-4 max-w-xl">
            Designed for elegance, built for durability in Coimbatore.
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "Retractable & Movable",
              "Rust-resistant GI Frame", 
              "Oxford 600D Fabric",
              "UV & Heat Protection"
            ].map((feature, idx) => (
              <div key={idx} className="glass px-3 py-1 rounded-full border border-white/20 backdrop-blur-xl text-sm">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a href="tel:+919600840058" 
               className="btn-primary px-6 py-3 rounded-xl text-base font-semibold inline-flex items-center justify-center group relative overflow-hidden">
              <span className="relative z-10">Book Your Carport Now</span>
            </a>
            
            <a href="#get-quote" 
               className="glass-button px-6 py-3 rounded-xl text-base font-semibold inline-flex items-center justify-center border border-white/30">
              Get a Free Quote
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Product Card */}
        <div className="flex-1 max-w-md ml-8 animate-fade-in">
          <div className="card-glass p-6 rounded-2xl relative">
            {/* Quality Badge */}
            <div className="absolute -top-3 -right-3 bg-gradient-accent text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
              100% UV Protected
              <br/>
              <span className="text-xs font-normal">Waterproof & Fadeproof</span>
            </div>
            
            {/* Product Icon */}
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-xl">
              <span className="text-2xl">🚗</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">SafePark Retractable Carport</h3>
            <p className="text-white/70 mb-4 text-sm">Premium Protection for Your Vehicle</p>
            
            <div className="space-y-2 mb-4">
              {[
                "✨ Galvanized Iron Frame",
                "🔵 Oxford 600D Fabric", 
                "⚡ Quick Installation"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center text-white/80 text-sm">
                  <span className="mr-3">{feature.split(' ')[0]}</span>
                  <span>{feature.split(' ').slice(1).join(' ')}</span>
                </div>
              ))}
            </div>
            
            <a href="#gallery" 
               className="w-full bg-gradient-secondary text-white py-2 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center text-sm">
              See Gallery
            </a>
          </div>
        </div>
      </section>
      
      {/* FEATURES SECTION */}
      <section id="features" className="scroll-mt-24 px-8 lg:px-16 py-16 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Why Choose SafePark?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🛡️",
                title: "Premium Protection",
                desc: "Oxford 600D fabric with 100% UV protection and waterproof coating"
              },
              {
                icon: "⚡",
                title: "Quick Setup",
                desc: "Install in minutes with our retractable design and galvanized iron frame"
              },
              {
                icon: "🏠",
                title: "Perfect Fit",
                desc: "Designed for Indian homes and weather conditions in Coimbatore"
              }
            ].map((item, idx) => (
              <div key={idx} className="card-glass p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="scroll-mt-24 px-8 lg:px-16 py-16 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">See SafePark in Action</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((item) => (
              <div key={item} className="glass rounded-xl p-4">
                <div className="bg-gradient-primary rounded-lg h-48 flex items-center justify-center">
                  <span className="text-white text-2xl">🚗</span>
                </div>
                <p className="text-white/80 text-sm mt-2">CarPort Installation #{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="px-8 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Rajesh Kumar",
                location: "Coimbatore",
                text: "SafePark saved my car from the harsh sun. Quality is excellent!"
              },
              {
                name: "Priya Sharma", 
                location: "Tamil Nadu",
                text: "Easy installation and looks great. Highly recommend SafePark!"
              }
            ].map((review, idx) => (
              <div key={idx} className="glass p-6 rounded-xl">
                <p className="text-white/80 mb-4">"{review.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full mr-3"></div>
                  <div>
                    <div className="text-white font-semibold">{review.name}</div>
                    <div className="text-white/60 text-sm">{review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="scroll-mt-24 px-8 lg:px-16 py-16 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Protect Your Car?</h2>
          <p className="text-xl text-white/80 mb-8">Get your premium SafePark carport installed today</p>
          
          <div className="glass p-8 rounded-2xl mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">📞</div>
                <h3 className="font-bold text-white mb-1">Call Us</h3>
                <a href="tel:+919600840058" className="text-white/80 hover:text-white">+91 9600840058</a>
              </div>
              <div>
                <div className="text-2xl mb-2">💬</div>
                <h3 className="font-bold text-white mb-1">WhatsApp</h3>
                <a href="https://wa.me/919600840058" className="text-white/80 hover:text-white">Message Us</a>
              </div>
              <div>
                <div className="text-2xl mb-2">📍</div>
                <h3 className="font-bold text-white mb-1">Location</h3>
                <p className="text-white/80">Coimbatore, Tamil Nadu</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919600840058" 
               className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold">
              Call for Free Quote
            </a>
            <a href="https://wa.me/919600840058" 
               className="glass-button px-8 py-4 rounded-xl text-lg font-semibold border border-white/30">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/40 px-8 lg:px-16 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold">
              S
            </span>
            <span className="text-white font-bold text-xl">SafePark</span>
          </div>
          <p className="text-white/60 mb-4">Premium Retractable Carport Solutions</p>
          <p className="text-white/40 text-sm">© 2025 SafePark. Made in Coimbatore, Tamil Nadu</p>
        </div>
      </footer>
    </main>
  );
}
