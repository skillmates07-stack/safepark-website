// src/app/page.tsx

export default function HomePage() {
  return (
    <main className="pt-16 bg-gradient-to-br from-[#191825] to-[#1f2657] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 pb-4">
        <div className="flex-1 max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full glass border border-white/20 text-xs text-white/90 mb-3">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Made in India • Premium Quality
          </div>
          <h1 className="text-5xl lg:text-6xl font-black leading-snug mb-3">
            <span className="gradient-text">Smart Shelters.</span><br/>
            <span className="text-white">Lasting</span><br/>
            <span className="text-white">Protection.</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mb-3 max-w-2xl">
            Because your car deserves more than just a cover. <span className="font-medium text-white">Stylish, portable &amp; weatherproof protection</span> for your luxury, classic, and everyday cars.
          </p>
          <p className="text-base text-white/60 mb-4 max-w-xl">
            Designed for elegance, built for durability in Coimbatore.
          </p>
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
          <div className="flex gap-3 mb-6">
            <a href="tel:+919600840058" className="btn-primary px-6 py-3 rounded-xl text-base font-semibold">
              Book Your Carport Now
            </a>
            <a href="#get-quote" className="glass-button px-6 py-3 rounded-xl text-base font-semibold border border-white/30">
              Get a Free Quote
            </a>
          </div>
        </div>
        <div className="flex-1 max-w-md ml-8">
          <div className="card-glass p-6 rounded-2xl relative">
            <div className="absolute -top-3 -right-3 bg-gradient-accent text-white px-4 py-1 rounded-full text-xs font-bold">
              100% UV Protected
              <br/>
              <span className="text-xs font-normal">Waterproof &amp; Fadeproof</span>
            </div>
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
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
            <a href="#gallery" className="w-full bg-gradient-secondary text-white py-2 rounded-xl font-semibold">
              See Gallery
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="scroll-mt-24 px-8 lg:px-16 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Why Choose SafePark?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {icon: "🛡️", title: "Premium Protection", desc: "Oxford 600D fabric with full UV and waterproof coating."},
              {icon: "⚡", title: "Quick Setup", desc: "Easy retractable design and galvanized frame."},
              {icon: "🏠", title: "Perfect Fit", desc: "Designed for Indian homes and weather conditions."}
            ].map((item, idx) => (
              <div key={idx} className="card-glass p-6 rounded-xl text-center">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="scroll-mt-24 px-8 lg:px-16 py-10 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">See SafePark in Action</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map((item) => (
              <div key={item} className="glass rounded-xl p-4">
                <div className="bg-gradient-primary rounded-lg h-32 flex items-center justify-center">
                  <span className="text-white text-2xl">🚗</span>
                </div>
                <p className="text-white/80 text-sm mt-2">CarPort Installation #{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-8 lg:px-16 py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {name: "Rajesh Kumar", location: "Coimbatore", text: "SafePark saved my car from the harsh sun. Quality is excellent!"},
              {name: "Priya Sharma", location: "Tamil Nadu", text: "Easy installation and looks great. Highly recommend SafePark!"}
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

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 px-8 lg:px-16 py-10 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Protect Your Car?</h2>
          <p className="text-xl text-white/80 mb-6">Get your premium SafePark carport installed today</p>
          <div className="glass p-8 rounded-2xl mb-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <div className="text-2xl mb-1">📞</div>
                <h3 className="font-bold text-white mb-1">Call Us</h3>
                <a href="tel:+919600840058" className="text-white/80 hover:text-white">+91 9600840058</a>
              </div>
              <div>
                <div className="text-2xl mb-1">💬</div>
                <h3 className="font-bold text-white mb-1">WhatsApp</h3>
                <a href="https://wa.me/919600840058" className="text-white/80 hover:text-white">Message Us</a>
              </div>
              <div>
                <div className="text-2xl mb-1">📍</div>
                <h3 className="font-bold text-white mb-1">Location</h3>
                <p className="text-white/80">Coimbatore, Tamil Nadu</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 justify-center">
            <a href="tel:+919600840058" className="btn-primary px-8 py-3 rounded-xl text-lg font-semibold">
              Call for Free Quote
            </a>
            <a href="https://wa.me/919600840058" className="glass-button px-8 py-3 rounded-xl text-lg font-semibold border border-white/30">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/40 px-8 py-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold">
              S
            </span>
            <span className="text-white font-bold text-xl">SafePark</span>
          </div>
          <p className="text-white/60 mb-2">Premium Retractable Carport Solutions</p>
          <p className="text-white/40 text-sm">© 2025 SafePark. Made in Coimbatore, Tamil Nadu</p>
        </div>
      </footer>
    </main>
  );
}
