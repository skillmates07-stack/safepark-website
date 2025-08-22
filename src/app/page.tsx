export default function HomePage() {
  return (
    <main className="pt-[56px] bg-gradient-to-br from-black via-[#0a1a0f] to-[#0d2818] min-h-screen">
      {/* HERO SECTION - Optimized Spacing */}
      <section className="relative min-h-[calc(100vh-56px)] flex items-start pt-1 pb-6">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN - Content (7/12 = 58%) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-green-400/20 text-xs text-white font-medium shadow-lg">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Made in India • Premium Quality
              </div>

              {/* Headline - Better Line Height */}
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-2">
                <span className="text-white">Everyday Risks.</span><br/>
                <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(0,255,132,0.25)]">Lasting Protection.</span>
              </h1>

              {/* Supporting Text - Better Line Spacing */}
              <p className="text-lg lg:text-xl text-gray-200 font-light leading-relaxed max-w-2xl mb-4">
                Your car faces <span className="font-semibold text-white">hidden threats every day</span>. From unexpected weather to kids playing nearby, give yourself <span className="text-green-400 font-medium">complete peace of mind</span>.
              </p>

              {/* Benefit Icons Grid - Better Spacing */}
              <div className="grid grid-cols-2 gap-3 max-w-xl mb-4">
                {[
                  { icon: "🔥", title: "Fire Protection", desc: "Heat & flame resistant" },
                  { icon: "🌧️", title: "Rain Protection", desc: "100% waterproof coating" },
                  { icon: "🛡️", title: "Scratch-Proof", desc: "Durable Oxford fabric" },
                  { icon: "👶", title: "Safe for Kids", desc: "Rounded edges, stable" }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-black/30 backdrop-blur-sm rounded-lg border border-green-600/20 hover:border-green-500/40 transition-all duration-300">
                    <div className="w-7 h-7 bg-gradient-to-tr from-green-500/20 to-green-400/20 rounded-lg flex items-center justify-center text-base flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-white font-semibold text-sm leading-relaxed">{benefit.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Signals - Proper Context Spacing */}
              <div className="flex items-center gap-3 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-green-400 text-base">⭐</span>
                    ))}
                  </div>
                  <span className="text-gray-300 font-semibold text-sm">2,000+ Protected Cars</span>
                </div>
                <div className="text-gray-500 text-sm">•</div>
                <span className="text-green-400 font-semibold text-sm">2-Year Warranty</span>
              </div>

              {/* Urgency Message - Context Spacing */}
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-400/20 rounded-lg px-4 py-3 backdrop-blur-sm mb-4">
                <p className="text-orange-300 text-sm font-medium flex items-center">
                  🔥 <span className="font-bold ml-1">August Special:</span> 
                  <span className="ml-1">Free installation + consultation (Save ₹3,000)</span>
                </p>
              </div>

              {/* Side-by-Side CTA Buttons - Context Spacing */}
              <div className="flex gap-4 max-w-xl pt-2">
                <a href="tel:+919600840058" className="flex-1 px-6 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white text-base font-bold rounded-xl shadow-2xl shadow-green-600/25 hover:shadow-green-400/35 hover:scale-[1.02] transition-all duration-300 text-center">
                  🛡️ Protect My Car Now
                </a>
                <a href="#gallery" className="flex-1 px-6 py-4 bg-black/60 border border-green-500/40 hover:border-green-400 hover:bg-green-900/20 text-white text-base font-semibold rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300 text-center">
                  View Gallery
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN - Product Card (5/12 = 42%) - UPDATED WITH PREMIUM LANGUAGE */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start mt-8 lg:mt-2">
              <div className="bg-black/40 backdrop-blur-2xl border border-green-500/30 shadow-2xl rounded-3xl px-7 py-8 hover:shadow-green-600/20 hover:scale-[1.01] transition-all duration-500 relative w-full max-w-sm">
                
                {/* Premium Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg border border-green-400/20 z-10">
                  100% UV Protected
                </div>

                {/* Product Icon - Context Spacing */}
                <div className="w-16 h-16 bg-gradient-to-tr from-green-500 to-green-400 rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-green-500/30 mx-auto">
                  <span className="text-2xl">🚗</span>
                </div>
                
                {/* Product Title - Context Spacing */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-black text-white mb-3 tracking-tight leading-tight">SafePark Retractable Carport</h3>
                  <p className="text-green-400 text-sm font-semibold leading-relaxed">Premium Protection for Your Vehicle</p>
                </div>
                
                {/* Feature List - UPDATED WITH LIFESTYLE-FRIENDLY LANGUAGE */}
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: "✨", text: "Strong & Durable Frame", color: "from-yellow-400 to-orange-400" },
                    { icon: "🔵", text: "Premium Weather-Resistant Fabric", color: "from-blue-400 to-cyan-400" },
                    { icon: "⚡", text: "Hassle-Free Quick Setup", color: "from-purple-400 to-pink-400" }
                  ].map((feature, idx) => (
                    <li key={idx} className="group hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 bg-gradient-to-tr ${feature.color} rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0`}>
                          <span className="text-base">{feature.icon}</span>
                        </div>
                        <span className="text-white font-semibold text-base">{feature.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                
                {/* Card CTA - Context Spacing */}
                <a href="#gallery" className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-400 text-white text-base font-bold rounded-xl shadow-xl shadow-green-600/30 hover:shadow-green-500/40 hover:scale-[1.02] transition-all duration-300 mb-4 text-center block">
                  See Gallery →
                </a>

                {/* Trust Elements - Context Spacing */}
                <div className="flex items-center justify-center gap-3 text-green-400/80 text-xs pt-2">
                  <span>Warranty</span>
                  <span className="text-gray-600">•</span>
                  <span>Free Consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION - Proper Spacing */}
      <section id="features" className="scroll-mt-32 px-8 lg:px-16 py-16 bg-gradient-to-br from-[#0a1a0f]/80 via-black/60 to-[#0d2818]/70">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose SafePark?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Premium Protection",
                desc: "Premium weather-resistant fabric with 100% UV protection and waterproof coating"
              },
              {
                icon: "⚡",
                title: "Quick Setup",
                desc: "Hassle-free installation with our retractable design and strong durable frame"
              },
              {
                icon: "🏠",
                title: "Perfect Fit",
                desc: "From sun to storm — always safe."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#0a1a0f]/60 to-[#0d2818]/80 border border-green-600/30 p-8 rounded-2xl text-center shadow-lg hover:shadow-xl hover:shadow-green-900/20 hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-green-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="scroll-mt-32 px-8 lg:px-16 py-20 bg-gradient-to-br from-black/70 via-[#0a1a0f]/50 to-[#0d2818]/70">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">See SafePark in Action</h2>
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
                className="bg-gradient-to-br from-[#0a1a0f]/60 to-[#0d2818]/80 border border-green-600/30 rounded-2xl p-4 shadow-lg hover:shadow-xl hover:shadow-green-900/20 hover:scale-105 hover:border-green-500/50 transition-all duration-300 group"
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
                    className="w-full h-48 object-cover rounded-xl mb-3 group-hover:scale-105 transition"
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
      <section className="px-8 lg:px-16 py-20 bg-gradient-to-br from-black via-[#051008] to-[#081c0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">What Our Customers Say</h2>
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
              <div key={idx} className="bg-gradient-to-br from-[#0a1a0f]/40 to-[#0d2818]/60 border border-green-600/30 p-8 rounded-2xl shadow-2xl shadow-green-900/20 hover:shadow-green-900/40 hover:border-green-500/50 transition-all duration-300">
                <div className="flex mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-green-400 text-xl">⭐</span>
                  ))}
                </div>
                <blockquote className="text-gray-100 mb-8 text-lg italic leading-relaxed font-medium">
                  "{review.text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-tr from-green-500 to-green-400 rounded-full mr-4 flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-green-500/30">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">{review.name}</div>
                    <div className="text-green-400 text-sm">{review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-green-400/80 text-lg mb-6">Join 2,000+ satisfied customers in Coimbatore</p>
            <a href="tel:+919600840058"
               className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-green-600/30 hover:shadow-green-500/40 transition-all duration-300">
              Get Your Quote Today
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="scroll-mt-32 px-8 lg:px-16 py-20 bg-gradient-to-br from-black/80 via-[#0a1a0f]/60 to-[#0d2818]/80">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Protect Your Car?</h2>
          <p className="text-xl text-green-400/90 mb-12 max-w-2xl mx-auto">Get your premium SafePark carport installed today</p>
          <div className="bg-gradient-to-br from-[#0a1a0f]/60 to-[#0d2818]/80 border border-green-600/30 p-10 rounded-3xl mb-12 shadow-2xl shadow-green-900/20 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="font-bold text-white mb-3 text-lg">Call Us</h3>
                <a href="tel:+919600840058" className="text-green-400 hover:text-green-300 transition text-base">+91 9600840058</a>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-bold text-white mb-3 text-lg">WhatsApp</h3>
                <a href="https://wa.me/919600840058" className="text-green-400 hover:text-green-300 transition text-base">Message Us</a>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="font-bold text-white mb-3 text-lg">Location</h3>
                <p className="text-green-400 text-base">Coimbatore, Tamil Nadu</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
            <a href="tel:+919600840058"
               className="bg-green-600 hover:bg-green-700 px-10 py-4 rounded-xl text-lg font-semibold text-white shadow-xl shadow-green-600/20 hover:shadow-2xl transition-all duration-300">
              Call for Free Quote
            </a>
            <a href="https://wa.me/919600840058"
               className="bg-black/50 border border-green-600 px-10 py-4 rounded-xl text-lg font-semibold text-white hover:bg-green-900/30 transition-all duration-300">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-black via-[#040b06] to-[#071410] border-t border-green-600/10 px-8 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <span className="w-12 h-12 bg-gradient-to-tr from-green-500 to-green-400 rounded-lg flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-green-500/20">
                  S
                </span>
                <span className="text-white font-bold text-3xl">SafePark</span>
              </div>
              <p className="text-green-400/80 text-lg mb-4 leading-relaxed">
                Premium Retractable Carport Solutions designed for elegance, built for durability in Coimbatore.
              </p>
              <div className="flex space-x-4">
                <div className="text-green-500 text-sm">⭐⭐⭐⭐⭐</div>
                <span className="text-gray-400 text-sm">2,000+ Happy Customers</span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>
              <div className="space-y-4">
                <a href="tel:+919600840058" className="flex items-center text-green-400 hover:text-green-300 transition">
                  <span className="mr-3">📞</span>
                  +91 9600840058
                </a>
                <a href="https://wa.me/919600840058" className="flex items-center text-green-400 hover:text-green-300 transition">
                  <span className="mr-3">💬</span>
                  WhatsApp
                </a>
                <div className="flex items-center text-gray-400">
                  <span className="mr-3">📍</span>
                  Coimbatore, Tamil Nadu
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
              <div className="space-y-3">
                <a href="#features" className="block text-gray-400 hover:text-green-400 transition">Premium Carports</a>
                <a href="#gallery" className="block text-gray-400 hover:text-green-400 transition">Installation</a>
                <a href="#contact" className="block text-gray-400 hover:text-green-400 transition">Consultation</a>
                <a href="/pricing" className="block text-gray-400 hover:text-green-400 transition">Custom Sizes</a>
              </div>
            </div>
          </div>
          <div className="border-t border-green-600/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 SafePark. Made with ❤️ in Coimbatore, Tamil Nadu
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-green-400 text-sm transition">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-green-400 text-sm transition">Terms of Service</a>
              <a href="#contact" className="text-gray-500 hover:text-green-400 text-sm transition">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
