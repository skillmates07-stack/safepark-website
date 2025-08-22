export default function HomePage() {
  return (
    <main className="pt-[56px] bg-gradient-to-br from-black via-[#0a1a0f] to-[#0d2818] min-h-screen">
      
      {/* HERO SECTION - Clean Layout without Overlaps */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN - Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-green-400/30 text-sm text-white font-medium shadow-lg">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                Made in India • Premium Quality
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
                  <span className="text-white">Everyday Risks.</span><br/>
                  <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                    Lasting Protection.
                  </span>
                </h1>
                
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Your car faces <span className="font-semibold text-white">hidden threats every day</span>. From unexpected weather to kids playing nearby, give yourself <span className="text-green-400 font-medium">complete peace of mind</span>.
                </p>
              </div>

              {/* Trust Signals */}
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-green-400 text-lg">⭐</span>
                    ))}
                  </div>
                  <span className="text-gray-300 font-semibold text-sm">2,000+ Protected Cars</span>
                </div>
                <div className="w-px h-5 bg-gray-600"></div>
                <span className="text-green-400 font-semibold text-sm">2-Year Warranty</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="tel:+919600840058" className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-green-600/30 hover:scale-[1.02] transition-all duration-300 text-center">
                  🛡️ Protect My Car Now
                </a>
                <a href="#gallery" className="border-2 border-green-400/60 text-green-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-400 hover:text-black transition-all duration-300 backdrop-blur-sm text-center">
                  View Gallery
                </a>
              </div>

              {/* Special Offer */}
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-400/30 rounded-xl px-6 py-4 backdrop-blur-sm">
                <p className="text-orange-300 font-medium flex items-center">
                  🔥 <span className="font-bold ml-2">August Special:</span> 
                  <span className="ml-2">Free installation + consultation (Save ₹3,000)</span>
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN - Car Image */}
            <div className="lg:col-span-5">
              <div className="relative">
                <img 
                  src="/gallery/hero-car.jpeg" 
                  alt="Premium car protected by SafePark" 
                  className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE SECTION - Separate, No Overlap */}
      <section className="py-16 bg-gradient-to-br from-[#0a1a0f]/50 via-black/30 to-[#0d2818]/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="bg-black/60 backdrop-blur-2xl border border-green-500/30 rounded-3xl p-8 shadow-2xl">
            
            {/* Premium Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              100% UV Protected
            </div>

            {/* Product Title */}
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-3xl">🚗</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">SafePark Premium Protection</h2>
              <p className="text-green-400 font-semibold text-lg">Complete Vehicle Care System</p>
            </div>

            {/* Features Grid - Clean, No Overlap */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: "✨", text: "Strong & Durable Frame", color: "from-amber-500 to-orange-400" },
                { icon: "🔵", text: "Premium Weather-Resistant Fabric", color: "from-blue-500 to-cyan-400" },
                { icon: "⚡", text: "Hassle-Free Quick Setup", color: "from-purple-500 to-pink-400" }
              ].map((feature, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 hover:border-green-400/50">
                  <div className={`w-16 h-16 bg-gradient-to-tr ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-white font-semibold text-center">{feature.text}</h3>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#gallery" className="inline-block bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-[1.02] transition-all duration-300 mb-4">
              Explore Gallery →
            </a>

            <div className="flex items-center justify-center gap-4 text-green-400/80 text-sm">
              <span>2-Year Warranty</span>
              <div className="w-px h-4 bg-gray-600"></div>
              <span>Free Consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFIT FEATURES SECTION - Clean Cards */}
      <section className="py-20 bg-gradient-to-br from-black/80 to-gray-900/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Complete Protection for Every Risk</h2>
            <p className="text-xl text-gray-300">Four layers of defense for your vehicle</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔥", title: "Fire Protection", desc: "Heat & flame resistant materials" },
              { icon: "🌧️", title: "Rain Protection", desc: "100% waterproof coating" },
              { icon: "🛡️", title: "Scratch-Proof", desc: "Durable fabric protection" },
              { icon: "👶", title: "Safe for Kids", desc: "Rounded edges, stable design" }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-black/40 to-gray-900/60 backdrop-blur-sm border border-green-600/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:scale-[1.02] hover:border-green-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-tr from-green-500/20 to-green-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SAFEPARK SECTION */}
      <section className="py-20 bg-gradient-to-br from-[#0a1a0f]/80 via-black/60 to-[#0d2818]/70">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose SafePark?</h2>
            <p className="text-xl text-gray-300">Premium protection engineered for modern vehicles</p>
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
              <div key={idx} className="bg-gradient-to-br from-[#0a1a0f]/60 to-[#0d2818]/80 border border-green-600/30 p-8 rounded-2xl text-center shadow-lg hover:shadow-xl hover:scale-[1.02] hover:border-green-400/40 transition-all duration-300">
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-black/70 via-[#0a1a0f]/50 to-[#0d2818]/70">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">See SafePark in Action</h2>
            <p className="text-xl text-gray-300">Real installations, real protection</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div
                key={item.src}
                className="bg-gradient-to-br from-[#0a1a0f]/60 to-[#0d2818]/80 border border-green-600/30 rounded-2xl p-4 shadow-lg hover:shadow-xl hover:scale-[1.02] hover:border-green-400/40 transition-all duration-300"
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    controls
                    className="w-full h-48 object-cover rounded-xl mb-3"
                    poster="/gallery/gallery1.jpg"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-48 object-cover rounded-xl mb-3 hover:scale-105 transition"
                    loading="lazy"
                  />
                )}
                <div className="px-2">
                  <h3 className="text-white text-lg font-semibold mb-1">{item.caption}</h3>
                  <p className="text-green-400/70 text-xs">
                    {item.type === "video" ? "Video Demo" : `Installation #${idx + 1}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-gradient-to-br from-black via-[#051008] to-[#081c0f]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Vehicle Owners Across India</h2>
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
              <div key={idx} className="bg-gradient-to-br from-[#0a1a0f]/40 to-[#0d2818]/60 border border-green-600/30 p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:border-green-400/50 transition-all duration-300">
                <div className="flex mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-green-400 text-xl">⭐</span>
                  ))}
                </div>
                <blockquote className="text-gray-100 mb-8 text-lg leading-relaxed font-medium">
                  "{review.text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-full mr-4 flex items-center justify-center text-black font-bold text-xl shadow-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{review.name}</div>
                    <div className="text-green-400">{review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-green-400/80 text-lg mb-6">Join 2,000+ satisfied customers in Coimbatore</p>
            <a href="tel:+919600840058" className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-green-600/30 hover:shadow-green-500/40 transition-all duration-300">
              Get Your Quote Today
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Protect Your Vehicle?</h2>
          <p className="text-xl text-gray-300 mb-12">Join thousands who chose SafePark for premium protection</p>
          
          <div className="bg-gradient-to-br from-[#0a1a0f]/60 to-[#0d2818]/80 border border-green-600/30 p-10 rounded-3xl mb-12 shadow-2xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="font-bold text-white mb-3 text-xl">Call Us</h3>
                <a href="tel:+919600840058" className="text-green-400 hover:text-green-300 transition text-lg font-semibold">+91 9600840058</a>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="font-bold text-white mb-3 text-xl">WhatsApp</h3>
                <a href="https://wa.me/919600840058" className="text-green-400 hover:text-green-300 transition text-lg font-semibold">Message Us</a>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="font-bold text-white mb-3 text-xl">Location</h3>
                <p className="text-green-400 text-lg">Coimbatore, Tamil Nadu</p>
              </div>
            </div>
          </div>
          
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
      <footer className="bg-black border-t border-green-400/20 py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-xl flex items-center justify-center text-black font-bold text-xl">
                  S
                </div>
                <span className="text-white font-bold text-3xl">SafePark</span>
              </div>
              <p className="text-gray-300 mb-4">Premium retractable carport solutions designed for elegance, built for durability.</p>
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
            <p className="text-gray-400">© 2025 SafePark. Made with excellence in Coimbatore, Tamil Nadu</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
