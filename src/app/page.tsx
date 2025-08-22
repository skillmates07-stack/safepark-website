'use client';

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen scroll-smooth">
      
      {/* HERO SECTION - Modern & Balanced */}
      <section className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            
            {/* LEFT COLUMN - Text Content */}
            <div className="flex flex-col justify-center space-y-6 max-w-xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-emerald-400/40 text-sm text-white font-medium shadow-lg w-fit">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
                Made in India • Premium Quality
              </div>

              {/* Refined Typography */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-lg">
                  <span className="text-white">Everyday Risks.</span><br/>
                  <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                    Lasting Protection.
                  </span>
                </h1>
                
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  Your car faces <span className="font-medium text-white">hidden threats every day</span>. From unexpected weather to kids playing nearby, give yourself <span className="text-emerald-400 font-medium">complete peace of mind</span>.
                </p>
              </div>

              {/* Trust Signals */}
              <div className="flex items-center gap-6 py-2">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-emerald-400 text-lg">⭐</span>
                    ))}
                  </div>
                  <span className="text-gray-300 font-medium text-sm">2,000+ Protected Cars</span>
                </div>
                <div className="w-px h-5 bg-gray-600"></div>
                <span className="text-emerald-400 font-medium text-sm">2-Year Warranty</span>
              </div>

              {/* Medium-sized CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="tel:+919600840058" className="bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white px-8 py-3 rounded-xl font-semibold shadow-xl shadow-emerald-600/30 hover:scale-[1.02] transition-all duration-300 text-center">
                  🛡️ Protect My Car Now
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-2 border-emerald-400/60 text-emerald-400 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-400 hover:text-black transition-all duration-300 backdrop-blur-sm text-center"
                >
                  View Gallery
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN - Car Image */}
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/gallery/hero-car.jpeg" 
                alt="Premium BMW protected by SafePark" 
                className="w-full max-w-md h-[350px] lg:h-[400px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMPACT FEATURES SECTION */}
      <section className="py-16 bg-gradient-to-br from-black/90 to-gray-900/70">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Complete Protection for Every Risk</h2>
            <p className="text-lg text-gray-300 font-light">Four layers of premium defense</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: "🔥", 
                title: "Fire Protection", 
                desc: "Heat & flame resistant materials with advanced coating"
              },
              { 
                icon: "🌧️", 
                title: "Rain Protection", 
                desc: "100% waterproof coating ensures complete weather resistance"
              },
              { 
                icon: "🛡️", 
                title: "Scratch-Proof", 
                desc: "Durable fabric protection prevents surface damage"
              },
              { 
                icon: "👶", 
                title: "Safe for Kids", 
                desc: "Rounded edges and stable design prioritize family safety"
              }
            ].map((benefit, idx) => (
              <div 
                key={idx} 
                className="group bg-gradient-to-br from-black/60 to-gray-900/80 border border-emerald-600/20 rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-emerald-400/40"
              >
                <div className="w-10 h-10 bg-gradient-to-tr from-emerald-500/30 to-green-400/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-2">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPACT WHY CHOOSE SECTION */}
      <section className="py-16 bg-gradient-to-br from-gray-900/80 to-black/90">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Choose SafePark?</h2>
            <p className="text-lg text-gray-300 font-light">Premium protection engineered for modern vehicles</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Premium Protection",
                desc: "Advanced weather-resistant fabric with 100% UV protection and waterproof coating technology"
              },
              {
                icon: "⚡",
                title: "Instant Setup",
                desc: "Revolutionary retractable design installs in under 15 seconds with professional support"
              },
              {
                icon: "🏆",
                title: "Guaranteed Quality",
                desc: "2-year comprehensive warranty with ongoing maintenance and customer support"
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-black/60 to-gray-900/80 border border-emerald-600/20 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:scale-[1.02] hover:border-emerald-400/30 transition-all duration-300 max-w-sm mx-auto">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-16 bg-gradient-to-br from-black/80 to-gray-900/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">See SafePark in Action</h2>
            <p className="text-lg text-gray-300 font-light">Real installations, real protection</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Luxury Car Protection",
              "All-Weather Installation", 
              "Quick Setup Demo",
              "Urban Protection",
              "Family Vehicle Care",
              "Installation Process"
            ].map((caption, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-black/60 to-gray-900/80 border border-emerald-600/20 rounded-xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] hover:border-emerald-400/30 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-400 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">📸</span>
                    </div>
                    <p className="text-gray-400 text-sm">Gallery #{idx + 1}</p>
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-1">{caption}</h3>
                <p className="text-emerald-400/70 text-xs">Professional Installation</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-gradient-to-br from-gray-900/90 to-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Trusted Across India</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                location: "Coimbatore",
                text: "SafePark transformed how I protect my vehicle. Installation was quick and quality exceeds expectations!",
                rating: 5
              },
              {
                name: "Priya Sharma", 
                location: "Tamil Nadu",
                text: "Amazing product with professional service. No more worrying about weather damage. Highly recommend!",
                rating: 5
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-gradient-to-br from-black/60 to-gray-900/80 border border-emerald-600/20 p-6 rounded-xl shadow-lg hover:shadow-xl hover:border-emerald-400/30 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-emerald-400 text-lg">⭐</span>
                  ))}
                </div>
                <blockquote className="text-gray-200 mb-6 leading-relaxed font-light">
                  "{review.text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-tr from-emerald-500 to-green-400 rounded-full mr-4 flex items-center justify-center text-black font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{review.name}</div>
                    <div className="text-emerald-400 text-sm">{review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Protect Your Vehicle?</h2>
          <p className="text-lg text-gray-300 font-light mb-12">Join thousands who chose SafePark for premium protection</p>
          
          <div className="bg-gradient-to-br from-black/80 to-gray-900/90 border border-emerald-600/30 rounded-2xl p-10 mb-12 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="font-bold text-white mb-3">Call Us</h3>
                <a href="tel:+919600840058" className="text-emerald-400 hover:text-emerald-300 transition font-semibold">+91 9600840058</a>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-bold text-white mb-3">WhatsApp</h3>
                <a href="https://wa.me/919600840058" className="text-emerald-400 hover:text-emerald-300 transition font-semibold">Message Us</a>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="font-bold text-white mb-3">Location</h3>
                <p className="text-emerald-400">Coimbatore, Tamil Nadu</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <a href="tel:+919600840058" className="bg-gradient-to-r from-emerald-600 to-green-500 text-white px-10 py-4 rounded-xl font-semibold shadow-xl hover:scale-[1.02] transition-all duration-300">
              Call for Free Quote
            </a>
            <a href="https://wa.me/919600840058" className="border-2 border-emerald-400 text-emerald-400 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-400 hover:text-black transition-all duration-300">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-emerald-400/20 py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-tr from-emerald-500 to-green-400 rounded-xl flex items-center justify-center text-black font-bold text-xl">
                  S
                </div>
                <span className="text-white font-bold text-2xl">SafePark</span>
              </div>
              <p className="text-gray-300 mb-4 font-light">Premium retractable carport solutions designed for elegance, built for durability.</p>
              <div className="flex items-center space-x-4">
                <div className="flex text-emerald-400">⭐⭐⭐⭐⭐</div>
                <span className="text-gray-400">2,000+ Happy Customers</span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
              <div className="space-y-3">
                <a href="tel:+919600840058" className="flex items-center text-gray-300 hover:text-emerald-400 transition">
                  <span className="mr-3">📞</span>
                  +91 9600840058
                </a>
                <a href="https://wa.me/919600840058" className="flex items-center text-gray-300 hover:text-emerald-400 transition">
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
          
          <div className="border-t border-emerald-400/20 pt-6 text-center">
            <p className="text-gray-400">© 2025 SafePark. Made with excellence in Coimbatore, Tamil Nadu</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
