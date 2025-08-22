'use client';

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-black via-[#0a1a0f] to-[#0d2818] min-h-screen">
      
      {/* WORLD-CLASS HERO SECTION */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[70vh]">
            
            {/* LEFT COLUMN - Premium Content */}
            <div className="lg:col-span-5 space-y-8 animate-fade-in">
              {/* Premium Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-black/70 backdrop-blur-xl border border-green-400/40 text-sm text-white font-semibold shadow-2xl">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                Made in India • Premium Quality
              </div>

              {/* World-Class Headlines */}
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                  <span className="text-white">Everyday Risks.</span>
                  <br />
                  <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent drop-shadow-2xl">
                    Lasting Protection.
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl">
                  Your car faces <span className="font-semibold text-white">hidden threats every day</span>. From unexpected weather to kids playing nearby, give yourself <span className="text-green-400 font-medium">complete peace of mind</span>.
                </p>
              </div>

              {/* Premium Trust Signals */}
              <div className="flex items-center gap-8 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-green-400 text-2xl">⭐</span>
                    ))}
                  </div>
                  <span className="text-gray-200 font-semibold text-lg">2,000+ Protected Cars</span>
                </div>
                <div className="w-px h-8 bg-gray-600"></div>
                <span className="text-green-400 font-semibold text-lg">2-Year Warranty</span>
              </div>

              {/* World-Class CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <a href="tel:+919600840058" className="group relative overflow-hidden bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-green-500/40 hover:shadow-green-400/50 hover:scale-[1.05] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    🛡️ Protect My Car Now
                  </span>
                </a>
                
                <a href="#gallery" className="border-2 border-green-400/70 text-green-400 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-green-400 hover:text-black transition-all duration-300 backdrop-blur-sm text-center">
                  View Gallery
                </a>
              </div>

              {/* Premium Special Offer */}
              <div className="bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-red-500/15 border border-orange-400/40 rounded-2xl px-8 py-6 backdrop-blur-sm">
                <p className="text-orange-200 font-medium flex items-center text-lg">
                  🔥 <span className="font-bold ml-3">August Special:</span> 
                  <span className="ml-3">Free installation + consultation (Save ₹3,000)</span>
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN - Prominent Car Image */}
            <div className="lg:col-span-7">
              <div className="relative">
                <img 
                  src="/gallery/hero-car.jpeg" 
                  alt="Premium BMW protected by SafePark retractable carport" 
                  className="w-full h-[600px] lg:h-[700px] object-cover rounded-3xl shadow-2xl shadow-black/60"
                />
                {/* Subtle overlay for premium effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM PRODUCT SHOWCASE */}
      <section className="py-24 bg-gradient-to-br from-[#0a1a0f]/60 via-black/40 to-[#0d2818]/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="bg-black/70 backdrop-blur-2xl border border-green-500/40 rounded-[2rem] p-12 shadow-2xl shadow-black/60">
            
            {/* Premium Badge */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-3 rounded-full font-bold mb-8 shadow-xl">
                100% UV Protected
              </div>

              {/* Product Icon */}
              <div className="w-28 h-28 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/40">
                <span className="text-5xl">🚗</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">SafePark Premium Protection</h2>
              <p className="text-green-400 font-semibold text-xl">Complete Vehicle Care System</p>
            </div>

            {/* Premium Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: "✨", text: "Strong & Durable Frame", color: "from-amber-500 to-orange-400" },
                { icon: "🔵", text: "Premium Weather-Resistant Fabric", color: "from-blue-500 to-cyan-400" },
                { icon: "⚡", text: "Hassle-Free Quick Setup", color: "from-purple-500 to-pink-400" }
              ].map((feature, idx) => (
                <div key={idx} className="bg-black/50 backdrop-blur-sm border border-gray-600/40 rounded-3xl p-8 hover:scale-[1.02] hover:bg-black/60 transition-all duration-300 hover:border-green-400/60 hover:shadow-xl">
                  <div className={`w-20 h-20 bg-gradient-to-tr ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl text-center leading-tight">{feature.text}</h3>
                </div>
              ))}
            </div>

            {/* Premium CTA */}
            <div className="text-center">
              <a href="#gallery" className="inline-block bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:scale-[1.05] transition-all duration-300 mb-6">
                Explore Gallery →
              </a>
              
              <div className="flex items-center justify-center gap-6 text-green-400/80 text-lg">
                <span>2-Year Warranty</span>
                <div className="w-px h-6 bg-gray-600"></div>
                <span>Free Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM PROTECTION LAYERS */}
      <section className="py-24 bg-gradient-to-br from-black/90 to-gray-900/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">Complete Protection for Every Risk</h2>
            <p className="text-2xl text-gray-300">Four layers of defense for your vehicle</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🔥", title: "Fire Protection", desc: "Heat & flame resistant materials", color: "from-orange-500/20 to-red-500/20" },
              { icon: "🌧️", title: "Rain Protection", desc: "100% waterproof coating", color: "from-blue-500/20 to-cyan-500/20" },
              { icon: "🛡️", title: "Scratch-Proof", desc: "Durable fabric protection", color: "from-gray-500/20 to-slate-500/20" },
              { icon: "👶", title: "Safe for Kids", desc: "Rounded edges, stable design", color: "from-green-500/20 to-emerald-500/20" }
            ].map((benefit, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${benefit.color} backdrop-blur-sm border border-green-600/30 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl hover:scale-[1.05] hover:border-green-400/50 transition-all duration-500`}>
                <div className="w-20 h-20 bg-gradient-to-tr from-green-500/30 to-green-400/30 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <span className="text-4xl">{benefit.icon}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM WHY CHOOSE SECTION */}
      <section className="py-24 bg-gradient-to-br from-[#0a1a0f]/90 via-black/70 to-[#0d2818]/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">Why Choose SafePark?</h2>
            <p className="text-2xl text-gray-300">Premium protection engineered for modern vehicles</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: "🛡️",
                title: "Premium Protection",
                desc: "Advanced weather-resistant fabric with 100% UV protection and waterproof coating technology engineered for durability"
              },
              {
                icon: "⚡",
                title: "Instant Setup",
                desc: "Revolutionary retractable design installs in under 15 seconds with professional support and lifetime maintenance"
              },
              {
                icon: "🏆",
                title: "Guaranteed Quality",
                desc: "2-year comprehensive warranty with ongoing maintenance, customer support, and premium replacement guarantee"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#0a1a0f]/70 to-[#0d2818]/90 border border-green-600/40 p-10 rounded-3xl text-center shadow-2xl hover:shadow-green-900/30 hover:scale-[1.03] hover:border-green-400/50 transition-all duration-500">
                <div className="text-8xl mb-8">{item.icon}</div>
                <h3 className="text-3xl font-bold text-white mb-6">{item.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM GALLERY SECTION */}
      <section id="gallery" className="py-24 bg-gradient-to-br from-black/80 via-[#0a1a0f]/60 to-[#0d2818]/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">See SafePark in Action</h2>
            <p className="text-2xl text-gray-300">Real installations, real protection, real results</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Luxury Car Protection",
              "All-Weather Installation", 
              "Quick Setup Demo",
              "Urban Protection",
              "Family Vehicle Care",
              "Installation Process"
            ].map((caption, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#0a1a0f]/70 to-[#0d2818]/90 border border-green-600/40 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:border-green-400/50 transition-all duration-500">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <span className="text-3xl">📸</span>
                    </div>
                    <p className="text-gray-400">Gallery Image #{idx + 1}</p>
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{caption}</h3>
                <p className="text-green-400/70 text-sm">Professional Installation</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM TESTIMONIALS */}
      <section className="py-24 bg-gradient-to-br from-black via-[#051008] to-[#081c0f]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">Trusted Across India</h2>
            <p className="text-2xl text-gray-300">What our customers say about SafePark</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "Rajesh Kumar",
                location: "Coimbatore",
                text: "SafePark completely transformed how I protect my BMW. The installation was incredibly quick and the quality exceeds all expectations. This is the best investment any car owner can make!",
                rating: 5
              },
              {
                name: "Priya Sharma", 
                location: "Tamil Nadu",
                text: "Amazing product with world-class service. The retractable design is pure genius - no more worrying about weather damage ever again. I recommend SafePark to every vehicle owner!",
                rating: 5
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#0a1a0f]/50 to-[#0d2818]/70 border border-green-600/40 p-10 rounded-3xl shadow-2xl hover:shadow-green-900/40 hover:border-green-400/60 transition-all duration-500">
                <div className="flex mb-8">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-green-400 text-2xl">⭐</span>
                  ))}
                </div>
                <blockquote className="text-gray-100 mb-8 text-xl leading-relaxed font-medium italic">
                  "{review.text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-20 h-20 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-full mr-6 flex items-center justify-center text-black font-bold text-2xl shadow-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">{review.name}</div>
                    <div className="text-green-400 text-lg">{review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM CONTACT SECTION */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">Ready to Protect Your Vehicle?</h2>
          <p className="text-2xl text-gray-300 mb-16">Join thousands who chose SafePark for premium protection</p>
          
          <div className="bg-gradient-to-br from-[#0a1a0f]/70 to-[#0d2818]/90 border border-green-600/40 rounded-3xl p-12 mb-16 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-6">📞</div>
                <h3 className="font-bold text-white mb-4 text-2xl">Call Us</h3>
                <a href="tel:+919600840058" className="text-green-400 hover:text-green-300 transition text-xl font-bold">+91 9600840058</a>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-6">💬</div>
                <h3 className="font-bold text-white mb-4 text-2xl">WhatsApp</h3>
                <a href="https://wa.me/919600840058" className="text-green-400 hover:text-green-300 transition text-xl font-bold">Message Us</a>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-6">📍</div>
                <h3 className="font-bold text-white mb-4 text-2xl">Location</h3>
                <p className="text-green-400 text-xl">Coimbatore, Tamil Nadu</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center max-w-3xl mx-auto">
            <a href="tel:+919600840058" className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:scale-[1.05] transition-all duration-300">
              Call for Free Quote
            </a>
            <a href="https://wa.me/919600840058" className="border-2 border-green-400 text-green-400 px-12 py-6 rounded-2xl text-xl font-bold hover:bg-green-400 hover:text-black transition-all duration-300">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* PREMIUM FOOTER */}
      <footer className="bg-black border-t border-green-400/30 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center text-black font-bold text-2xl shadow-xl">
                  S
                </div>
                <span className="text-white font-bold text-4xl">SafePark</span>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">Premium retractable carport solutions designed for elegance, engineered for durability, trusted across India.</p>
              <div className="flex items-center space-x-6">
                <div className="flex text-green-400 text-xl">⭐⭐⭐⭐⭐</div>
                <span className="text-gray-400 text-lg">2,000+ Happy Customers</span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold text-2xl mb-6">Contact</h4>
              <div className="space-y-4">
                <a href="tel:+919600840058" className="flex items-center text-gray-300 hover:text-green-400 transition text-lg">
                  <span className="mr-4 text-xl">📞</span>
                  +91 9600840058
                </a>
                <a href="https://wa.me/919600840058" className="flex items-center text-gray-300 hover:text-green-400 transition text-lg">
                  <span className="mr-4 text-xl">💬</span>
                  WhatsApp
                </a>
                <div className="flex items-center text-gray-300 text-lg">
                  <span className="mr-4 text-xl">📍</span>
                  Coimbatore, Tamil Nadu
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-400/30 pt-8 text-center">
            <p className="text-gray-400 text-lg">© 2025 SafePark. Crafted with excellence in Coimbatore, Tamil Nadu</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
