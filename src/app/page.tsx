// src/app/page.tsx

export default function HomePage() {
  return (
    <main className="pt-[120px] bg-gradient-to-br from-[#191825] to-[#21155c] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-12">
        <div className="flex-1 max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full glass border border-white/20 text-xs text-white/90 mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Made in India • Premium Quality
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-4">
            <span className="bg-gradient-to-tr from-purple-400 to-blue-400 bg-clip-text text-transparent">Smart Shelters.</span><br/>
            <span className="text-white">Lasting</span><br/>
            <span className="text-white">Protection.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-white/80 mb-4 max-w-2xl">
            Because your car deserves more than just a cover. <span className="font-medium text-white">Stylish, portable & weatherproof protection</span> for your luxury, classic, and everyday cars.
          </p>
          
          <p className="text-base text-white/60 mb-6 max-w-xl">
            Designed for elegance, built for durability in Coimbatore.
          </p>
          
          {/* Glassy Feature Pills */}
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "Retractable & Movable",
              "Rust-resistant GI Frame", 
              "Oxford 600D Fabric",
              "UV & Heat Protection"
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-sm shadow-lg">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Glowing Gradient Buttons */}
          <div className="flex gap-4 mb-8">
            <a href="tel:+919600840058" 
               className="bg-gradient-to-tr from-purple-400 to-blue-400 px-8 py-4 rounded-xl text-lg font-semibold text-white shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
              Book Your Carport Now
            </a>
            <a href="#get-quote" 
               className="bg-white/10 backdrop-blur-md border border-white/30 px-8 py-4 rounded-xl text-lg font-semibold text-white shadow-xl hover:scale-105 hover:shadow-2xl hover:bg-white/20 transition-all duration-300">
              Get a Free Quote
            </a>
          </div>
        </div>
        
        {/* Product Card */}
        <div className="flex-1 max-w-md ml-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl relative shadow-2xl">
            <div className="absolute -top-4 -right-4 bg-gradient-to-tr from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
              100% UV Protected
              <br/>
              <span className="font-normal">Waterproof & Fadeproof</span>
            </div>
            
            <div className="w-20 h-20 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
              <span className="text-3xl">🚗</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">SafePark Retractable Carport</h3>
            <p className="text-white/70 mb-6">Premium Protection for Your Vehicle</p>
            
            <div className="space-y-3 mb-8">
              {[
                "✨ Galvanized Iron Frame",
                "🔵 Oxford 600D Fabric", 
                "⚡ Quick Installation"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center text-white/80">
                  <span className="mr-3">{feature.split(' ')[0]}</span>
                  <span>{feature.split(' ').slice(1).join(' ')}</span>
                </div>
              ))}
            </div>
            
            <a href="#gallery" 
               className="w-full bg-gradient-to-tr from-pink-400 to-violet-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center shadow-lg">
              See Gallery
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="scroll-mt-32 px-8 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose SafePark?</h2>
          <div className="grid md:grid-cols-3 gap-8">
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
              <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION - FIXED */}
      <section id="gallery" className="scroll-mt-32 px-8 lg:px-16 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">See SafePark in Action</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Luxury car protection setup",
              "Bike shelter installation", 
              "Retractable carport demo",
              "Weather protection test",
              "Quick setup process",
              "Customer satisfaction"
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:border-purple-400/50 transition-all duration-300 group">
                <div className="bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-xl h-48 flex items-center justify-center mb-4 group-hover:from-purple-400/30 group-hover:to-blue-400/30 transition-all duration-300">
                  <div className="text-center">
                    <span className="text-4xl mb-2 block">🚗</span>
                    <p className="text-white/60 text-sm">{item}</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm font-medium">Installation #{idx + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="px-8 lg:px-16 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                location: "Coimbatore",
                text: "SafePark saved my car from the harsh sun. Quality is excellent and installation was super quick!",
                rating: 5
              },
              {
                name: "Priya Sharma", 
                location: "Tamil Nadu",
                text: "Easy installation and looks great. Highly recommend SafePark for anyone wanting premium protection!",
                rating: 5
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-white/80 mb-6 text-lg">"{review.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
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
      <section id="contact" className="scroll-mt-32 px-8 lg:px-16 py-20 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Protect Your Car?</h2>
          <p className="text-xl text-white/80 mb-12">Get your premium SafePark carport installed today</p>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl mb-12 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-bold text-white mb-2">Call Us</h3>
                <a href="tel:+919600840058" className="text-white/80 hover:text-white transition">+91 9600840058</a>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-bold text-white mb-2">WhatsApp</h3>
                <a href="https://wa.me/919600840058" className="text-white/80 hover:text-white transition">Message Us</a>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-bold text-white mb-2">Location</h3>
                <p className="text-white/80">Coimbatore, Tamil Nadu</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:+919600840058" 
               className="bg-gradient-to-tr from-purple-400 to-blue-400 px-10 py-4 rounded-xl text-lg font-semibold text-white shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
              Call for Free Quote
            </a>
            <a href="https://wa.me/919600840058" 
               className="bg-white/10 backdrop-blur-md border border-white/30 px-10 py-4 rounded-xl text-lg font-semibold text-white shadow-xl hover:scale-105 hover:shadow-2xl hover:bg-white/20 transition-all duration-300">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-tr from-purple-400/20 to-blue-400/20 backdrop-blur-md border-t border-white/20 px-8 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="w-10 h-10 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              S
            </span>
            <span className="text-white font-bold text-2xl">SafePark</span>
          </div>
          <p className="text-white/70 mb-4 text-lg">Premium Retractable Carport Solutions</p>
          <p className="text-white/50">© 2025 SafePark. Made in Coimbatore, Tamil Nadu</p>
        </div>
      </footer>
    </main>
  );
}
