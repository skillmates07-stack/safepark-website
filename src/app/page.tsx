'use client';

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-black via-[#0a1a0f] to-[#102d1b] min-h-screen scroll-smooth">
      
      {/* HERO SECTION - Balanced and Premium */}
      <section className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[75vh]">
            
            {/* LEFT COLUMN - Text Content (5/12) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-emerald-400/40 text-sm text-white font-semibold shadow-xl">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
                Made in India • Premium Quality
              </div>

              {/* Improved Typography */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tight">
                  <span className="text-white">Everyday Risks.</span><br/>
                  <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300 bg-clip-text text-transparent">
                    Lasting Protection.
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-xl">
                  Your car faces <span className="font-semibold text-white">hidden threats every day</span>. From unexpected weather to kids playing nearby, give yourself <span className="text-emerald-400 font-medium">complete peace of mind</span>.
                </p>
              </div>

              {/* Trust Signals */}
              <div className="flex items-center gap-8 py-2">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-emerald-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <span className="text-gray-200 font-semibold">2,000+ Protected Cars</span>
                </div>
                <div className="w-px h-6 bg-gray-600"></div>
                <span className="text-emerald-400 font-semibold">2-Year Warranty</span>
              </div>

              {/* Prominent CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <a 
                  href="tel:+919600840058" 
                  className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-500 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-400/50 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    🛡️ Protect My Car Now
                  </span>
                </a>
                
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-2 border-emerald-400/70 text-emerald-400 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-400 hover:text-black transition-all duration-300 backdrop-blur-sm text-center"
                >
                  View Gallery
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN - Car Image (7/12) */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/gallery/hero-car.jpeg" 
                  alt="Premium BMW protected by SafePark" 
                  className="w-full max-w-2xl h-[450px] lg:h-[550px] object-cover rounded-3xl shadow-2xl shadow-black/60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REDESIGNED FEATURES SECTION - Modern & Premium */}
      <section className="py-20 bg-gradient-to-br from-black/90 to-gray-900/70">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Complete Protection for Every Risk</h2>
            <p className="text-xl text-gray-300 font-light">Four layers of premium defense for your vehicle</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: "🔥", 
                title: "Fire Protection", 
                desc: "Heat & flame resistant materials with advanced coating technology",
                gradient: "from-orange-500/20 to-red-500/20",
                border: "border-orange-400/30"
              },
              { 
                icon: "🌧️", 
                title: "Rain Protection", 
                desc: "100% waterproof coating ensures complete weather resistance",
                gradient: "from-blue-500/20 to-cyan-500/20",
                border: "border-blue-400/30"
              },
              { 
                icon: "🛡️", 
                title: "Scratch-Proof", 
                desc: "Durable fabric protection prevents surface damage and wear",
                gradient: "from-gray-500/20 to-slate-500/20",
                border: "border-gray-400/30"
              },
              { 
                icon: "👶", 
                title: "Safe for Kids", 
                desc: "Rounded edges and stable design prioritize family safety",
                gradient: "from-emerald-500/20 to-green-500/20",
                border: "border-emerald-400/30"
              }
            ].map((benefit, idx) => (
              <div 
                key={idx} 
                className={`group relative bg-gradient-to-br ${benefit.gradient} backdrop-blur-xl border ${benefit.border} rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 hover:border-emerald-400/50`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500/30 to-green-400/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-3xl">{benefit.icon}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4 group-hover:text-emerald-300 transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed font-light">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION - Refined */}
      <section className="py-20 bg-gradient-to-br from-[#0a1a0f]/90 via-black/70 to-[#102d1b]/80">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Why Choose SafePark?</h2>
            <p className="text-xl text-gray-300 font-light">Premium protection engineered for modern vehicles</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: "🛡️",
                title: "Premium Protection",
                desc: "Advanced weather-resistant fabric with 100% UV protection and waterproof coating technology engineered for maximum durability"
              },
              {
                icon: "⚡",
                title: "Instant Setup",
                desc: "Revolutionary retractable design installs in under 15 seconds with professional support and comprehensive training"
              },
              {
                icon: "🏆",
                title: "Guaranteed Quality",
                desc: "2-year comprehensive warranty with ongoing maintenance, 24/7 customer support, and premium replacement guarantee"
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-black/60 to-gray-900/80 border border-emerald-600/30 p-10 rounded-3xl text-center shadow-2xl hover:shadow-emerald-900/30 hover:scale-[1.02] hover:border-emerald-400/50 transition-all duration-500">
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-emerald-300 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-black/80 via-[#0a1a0f]/60 to-[#102d1b]/70">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">See SafePark in Action</h2>
            <p className="text-xl text-gray-300 font-light">Real installations, real protection, real results</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: "/gallery/gallery1.jpg",
                alt: "Luxury car protection setup",
                caption: "Luxury Car Protection"
              },
              {
                src: "/gallery/gallery2.jpg",
                alt: "SafePark carport covered in greenery",
                caption: "All-Weather Protection"
              },
              {
                src: "/gallery/gallery3.jpg",
                alt: "Car and bike protected together",
                caption: "Car & Bike Protected"
              },
              {
                src: "/gallery/gallery4.jpg",
                alt: "Multiple vehicles protected",
                caption: "Multiple Vehicle Coverage"
              },
              {
                src: "/gallery/gallery5.jpg",
                alt: "Compact urban installation",
                caption: "Compact Urban Use"
              },
              {
                src: "/gallery/gallery-video.mp4",
                alt: "SafePark installation demo",
                caption: "Installation Demo",
                type: "video"
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-black/60 to-gray-900/80 border border-emerald-600/30 rounded-2xl p-4 shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:border-emerald-400/50 transition-all duration-500">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    controls
                    className="w-full h-64 object-cover rounded-xl mb-4"
                    poster="/gallery/gallery1.jpg"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                )}
                <div className="px-2">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-emerald-300 transition-colors duration-300">{item.caption}</h3>
                  <p className="text-emerald-400/70 text-sm">
                    {item.type === "video" ? "Video Demo" : `Installation #${idx + 1}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-br from-black via-[#051008] to-[#081c0f]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Trusted Across India</h2>
            <p className="text-xl text-gray-300 font-light">What our customers say about SafePark</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: "Rajesh Kumar",
                location: "Coimbatore",
                text: "SafePark completely transformed how I protect my BMW. The installation was incredibly quick and the quality exceeds all expectations. Best investment any car owner can make!",
                rating: 5
              },
              {
                name: "Priya Sharma", 
                location: "Tamil Nadu",
                text: "Amazing product with world-class service. The retractable design is genius - no more worrying about weather damage ever again. I recommend SafePark to every vehicle owner!",
                rating: 5
              }
            ].map((review, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-black/60 to-gray-900/80 border border-emerald-600/30 p-8 rounded-3xl shadow-2xl hover:shadow-emerald-900/40 hover:border-emerald-400/50 transition-all duration-500">
                <div className="flex mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-emerald-400 text-2xl">⭐</span>
                  ))}
                </div>
                <blockquote className="text-gray-100 mb-8 text-lg leading-relaxed font-light italic">
                  "{review.text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-green-400 rounded-full mr-6 flex items-center justify-center text-black font-bold text-xl shadow-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl">{review.name}</div>
                    <div className="text-emerald-400">{review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">Ready to Protect Your Vehicle?</h2>
          <p className="text-xl text-gray-300 font-light mb-16">Join thousands who chose SafePark for premium protection</p>
          
          <div className="bg-gradient-to-br from-black/80 to-gray-900/90 border border-emerald-600/40 rounded-3xl p-12 mb-16 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-6">📞</div>
                <h3 className="font-bold text-white mb-4 text-xl">Call Us</h3>
                <a href="tel:+919600840058" className="text-emerald-400 hover:text-emerald-300 transition font-bold text-lg">+91 9600840058</a>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-6">💬</div>
                <h3 className="font-bold text-white mb-4 text-xl">WhatsApp</h3>
                <a href="https://wa.me/919600840058" className="text-emerald-400 hover:text-emerald-300 transition font-bold text-lg">Message Us</a>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-6">📍</div>
                <h3 className="font-bold text-white mb-4 text-xl">Location</h3>
                <p className="text-emerald-400 text-lg">Coimbatore, Tamil Nadu</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center max-w-3xl mx-auto">
            <a href="tel:+919600840058" className="bg-gradient-to-r from-emerald-600 to-green-500 text-white px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:scale-[1.02] transition-all duration-300">
              Call for Free Quote
            </a>
            <a href="https://wa.me/919600840058" className="border-2 border-emerald-400 text-emerald-400 px-12 py-6 rounded-2xl text-xl font-bold hover:bg-emerald-400 hover:text-black transition-all duration-300">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-emerald-400/30 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-green-400 rounded-2xl flex items-center justify-center text-black font-bold text-2xl shadow-xl">
                  S
                </div>
                <span className="text-white font-bold text-3xl">SafePark</span>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed font-light">Premium retractable carport solutions designed for elegance, engineered for durability, trusted across India.</p>
              <div className="flex items-center space-x-6">
                <div className="flex text-emerald-400 text-xl">⭐⭐⭐⭐⭐</div>
                <span className="text-gray-400 text-lg">2,000+ Happy Customers</span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold text-2xl mb-8">Contact</h4>
              <div className="space-y-6">
                <a href="tel:+919600840058" className="flex items-center text-gray-300 hover:text-emerald-400 transition text-lg">
                  <span className="mr-4 text-xl">📞</span>
                  +91 9600840058
                </a>
                <a href="https://wa.me/919600840058" className="flex items-center text-gray-300 hover:text-emerald-400 transition text-lg">
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
          
          <div className="border-t border-emerald-400/30 pt-8 text-center">
            <p className="text-gray-400 text-lg">© 2025 SafePark. Crafted with excellence in Coimbatore, Tamil Nadu</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
