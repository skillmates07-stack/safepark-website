'use client';

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-emerald-900/20 min-h-screen scroll-smooth">
      
      {/* PREMIUM HERO SECTION - Perfectly Balanced */}
      <section className="pt-20 pb-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN - Balanced Text Block */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-emerald-400/40 text-sm text-white font-medium shadow-lg w-fit">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
                Made in India • Premium Quality
              </div>

              {/* Refined Typography with Perfect Hierarchy */}
              <div className="space-y-8">
                <h1 className="text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                  <span className="text-white">Everyday Risks.</span><br/>
                  <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                    Lasting Protection.
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-[1.7] font-light max-w-xl">
                  Your car faces <span className="font-medium text-white">hidden threats every day</span>. From unexpected weather to kids playing nearby, give yourself <span className="text-emerald-400 font-medium">complete peace of mind</span>.
                </p>
              </div>

              {/* Trust Signals with Enhanced Spacing */}
              <div className="flex items-center gap-8 py-2">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-emerald-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <span className="text-gray-200 font-medium">2,000+ Protected Cars</span>
                </div>
                <div className="w-px h-6 bg-gray-600"></div>
                <span className="text-emerald-400 font-medium">2-Year Warranty</span>
              </div>

              {/* Premium Animated Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <a 
                  href="tel:+919600840058" 
                  className="group bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-500/60 hover:scale-[1.03] transition-all duration-300 text-center"
                >
                  <span className="flex items-center justify-center gap-3">
                    🛡️ Protect My Car Now
                  </span>
                </a>
                
                <a 
                  href="#gallery" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-2 border-emerald-400/70 text-emerald-400 px-12 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-400 hover:text-black hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 backdrop-blur-sm text-center"
                >
                  View Gallery
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN - Car Image with Depth & Glow */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 via-green-400/20 to-teal-300/30 rounded-3xl blur-3xl scale-110 opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-3xl"></div>
                
                <img 
                  src="/gallery/hero-car.jpeg" 
                  alt="Premium BMW protected by SafePark" 
                  className="relative w-full max-w-lg h-[420px] lg:h-[480px] object-cover rounded-3xl shadow-2xl shadow-black/60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REFINED FEATURES SECTION */}
      <section className="py-24 bg-gradient-to-br from-black/90 to-gray-900/70">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Enhanced Section Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 relative">
              Complete Protection for Every Risk
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-emerald-400 to-green-300 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-300 font-light leading-[1.6] mt-8">Four layers of premium defense for your vehicle</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: "🔥", 
                title: "Fire Protection", 
                desc: "Heat & flame resistant materials with advanced coating technology"
              },
              { 
                icon: "🌧️", 
                title: "Rain Protection", 
                desc: "100% waterproof coating ensures complete weather resistance"
              },
              { 
                icon: "🛡️", 
                title: "Scratch-Proof", 
                desc: "Durable fabric protection prevents surface damage and wear"
              },
              { 
                icon: "👶", 
                title: "Safe for Kids", 
                desc: "Rounded edges and stable design prioritize family safety"
              }
            ].map((benefit, idx) => (
              <div 
                key={idx} 
                className="group bg-gradient-to-br from-black/60 to-gray-900/80 border border-emerald-600/20 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 hover:border-emerald-400/50"
              >
                <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500/30 to-green-400/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-4 leading-[1.4]">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-[1.6] font-light">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFINED WHY CHOOSE SECTION */}
      <section className="py-24 bg-gradient-to-br from-gray-900/80 to-black/90">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Why Choose SafePark?</h2>
            <p className="text-xl text-gray-300 font-light leading-[1.6]">Premium protection engineered for modern vehicles</p>
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
              <div key={idx} className="group bg-gradient-to-br from-black/60 to-gray-900/80 border border-emerald-600/20 rounded-3xl p-10 text-center shadow-xl hover:shadow-2xl hover:scale-[1.03] hover:border-emerald-400/40 transition-all duration-500">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-6 leading-[1.3] group-hover:text-emerald-300 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-400 leading-[1.6] font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM GALLERY SECTION */}
      <section id="gallery" className="py-24 bg-gradient-to-br from-black/80 to-gray-900/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 relative">
              See SafePark in Action
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-emerald-400 to-green-300 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-300 font-light leading-[1.6] mt-8">Real installations, real protection, real results</p>
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
                alt: "SafePark carport in greenery",
                caption: "All-Weather Protection"
              },
              {
                src: "/gallery/gallery3.jpg",
                alt: "Car and bike protected",
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
                alt: "Installation demo",
                caption: "Installation Demo",
                type: "video"
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-black/60 to-gray-900/80 border border-emerald-600/20 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.03] hover:border-emerald-400/50 transition-all duration-500">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    controls
                    className="w-full h-64 object-cover rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300"
                    poster="/gallery/gallery1.jpg"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                )}
                <div className="px-2">
                  <h3 className="text-white font-bold text-xl mb-3 leading-[1.4] group-hover:text-emerald-300 transition-colors duration-300">{item.caption}</h3>
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
      <section className="py-24 bg-gradient-to-br from-gray-900/90 to-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Trusted Across India</h2>
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
              <div key={idx} className="bg-gradient-to-br from-black/60 to-gray-900/80 border border-emerald-600/20 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:border-emerald-400/40 transition-all duration-500">
                <div className="flex mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-emerald-400 text-2xl">⭐</span>
                  ))}
                </div>
                <blockquote className="text-gray-200 mb-8 text-lg leading-[1.7] font-light italic">
                  "{review.text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-green-400 rounded-full mr-6 flex items-center justify-center text-black font-bold text-xl shadow-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl leading-[1.4]">{review.name}</div>
                    <div className="text-emerald-400">{review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Protect Your Vehicle?</h2>
          <p className="text-xl text-gray-300 font-light mb-16 leading-[1.6]">Join thousands who chose SafePark for premium protection</p>
          
          <div className="bg-gradient-to-br from-black/80 to-gray-900/90 border border-emerald-600/30 rounded-3xl p-12 mb-16 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-10">
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
            <a href="tel:+919600840058" className="bg-gradient-to-r from-emerald-600 to-green-500 text-white px-12 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:scale-[1.03] transition-all duration-300">
              Call for Free Quote
            </a>
            <a href="https://wa.me/919600840058" className="border-2 border-emerald-400 text-emerald-400 px-12 py-5 rounded-2xl text-xl font-bold hover:bg-emerald-400 hover:text-black transition-all duration-300">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-emerald-400/20 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-green-400 rounded-2xl flex items-center justify-center text-black font-bold text-2xl shadow-xl">
                  S
                </div>
                <span className="text-white font-bold text-3xl">SafePark</span>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-[1.6] font-light">Premium retractable carport solutions designed for elegance, engineered for durability, trusted across India.</p>
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
          
          <div className="border-t border-emerald-400/20 pt-8 text-center">
            <p className="text-gray-400 text-lg">© 2025 SafePark. Crafted with excellence in Coimbatore, Tamil Nadu</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
