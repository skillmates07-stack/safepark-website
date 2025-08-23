'use client';

import { Shield, Zap, Award, Phone, MessageCircle, MapPin, Star, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="scroll-smooth bg-gradient-to-br from-[#0f172a] via-[#0f2d2a] to-[#052e16] min-h-screen">
      
      {/* HERO SECTION - BALANCED HEIGHT */}
      <section className="min-h-[85vh] flex items-center pt-8 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
            
            <div className="text-center md:text-left space-y-8">
              
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100/10 border border-emerald-400/20 text-emerald-300 font-medium text-sm backdrop-blur-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                Made in India • Premium Quality
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-2xl mx-auto md:mx-0">
                Everyday Risks.
                <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent mt-3">
                  Lasting Protection.
                </span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0 mt-6">
                Your car faces <span className="font-semibold text-white">hidden threats every day</span>. From unexpected weather to kids playing nearby, give yourself <span className="text-emerald-400 font-medium">complete peace of mind</span>.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-8 mt-8">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-300 font-medium">2,000+ Protected Cars</span>
                </div>
                <div className="w-px h-6 bg-gray-600"></div>
                <span className="text-emerald-400 font-medium">2-Year Warranty</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
                <a 
                  href="tel:+919600840058"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2 h-14"
                >
                  <Shield className="w-5 h-5" />
                  Protect My Car Now
                </a>
                
                <a 
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2 h-14"
                >
                  View Gallery
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end order-first md:order-last">
              <div className="relative w-full max-w-[650px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 via-teal-400/20 to-cyan-300/30 rounded-3xl blur-3xl scale-110 opacity-60"></div>
                
                <img 
                  src="/gallery/hero-car.jpeg" 
                  alt="Premium BMW protected by SafePark" 
                  className="relative w-full h-[360px] md:h-[400px] object-cover rounded-3xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL SEPARATOR 1 */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent my-16"></div>

      {/* FEATURES SECTION */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Complete Protection for Every Risk
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Four layers of premium defense engineered for your vehicle's safety
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Shield className="w-12 h-12 mb-6 text-emerald-400" />, 
                title: "Fire Protection", 
                desc: "Heat & flame resistant materials with advanced coating technology"
              },
              { 
                icon: <div className="w-12 h-12 mb-6 bg-blue-500/20 rounded-2xl flex items-center justify-center"><div className="w-6 h-6 bg-blue-400 rounded-full"></div></div>, 
                title: "Rain Protection", 
                desc: "100% waterproof coating ensures complete weather resistance"
              },
              { 
                icon: <Shield className="w-12 h-12 mb-6 text-gray-400" />, 
                title: "Scratch-Proof", 
                desc: "Durable fabric protection prevents surface damage"
              },
              { 
                icon: <div className="w-12 h-12 mb-6 bg-green-500/20 rounded-2xl flex items-center justify-center"><div className="w-6 h-6 bg-green-400 rounded-full"></div></div>, 
                title: "Safe for Kids", 
                desc: "Rounded edges and stable design prioritize safety"
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl shadow-lg bg-gray-900/50 backdrop-blur border border-gray-800/50 text-center hover:bg-gray-800/50 hover:scale-105 transition-all duration-300 h-full min-h-[260px] flex flex-col justify-between"
              >
                <div>
                  {feature.icon}
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL SEPARATOR 2 */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent my-16"></div>

      {/* WHY CHOOSE SAFEPARK SECTION */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Why Choose SafePark?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Premium protection engineered for modern vehicles
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 mb-6 text-emerald-400" />,
                title: "Weather Protection",
                desc: "Advanced weather-resistant fabric with 100% UV protection and waterproof coating technology"
              },
              {
                icon: <Zap className="w-12 h-12 mb-6 text-emerald-400" />,
                title: "Scratch & Damage Cover",
                desc: "Revolutionary retractable design prevents scratches, dings, and surface damage from daily hazards"
              },
              {
                icon: <Award className="w-12 h-12 mb-6 text-emerald-400" />,
                title: "Peace of Mind Warranty",
                desc: "2-year comprehensive warranty with ongoing maintenance and premium customer support guarantee"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-2xl shadow-lg bg-gray-900/50 backdrop-blur border border-gray-800/50 text-center h-full hover:bg-gray-800/50 hover:scale-105 transition-all duration-300"
              >
                {item.icon}
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL SEPARATOR 3 - ENHANCED */}
      <div className="relative my-16">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent h-20 blur-2xl"></div>
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"></div>
      </div>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-16 px-6 md:px-12 lg:px-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              See SafePark in Action
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Real installations, real protection, real results
            </p>
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
                alt: "All-weather installation",
                caption: "All-Weather Installation"
              },
              {
                src: "/gallery/gallery3.jpg",
                alt: "Quick setup demo",
                caption: "Quick Setup Demo"
              },
              {
                src: "/gallery/gallery4.jpg",
                alt: "Urban protection",
                caption: "Urban Protection"
              },
              {
                src: "/gallery/gallery5.jpg",
                alt: "Family vehicle care",
                caption: "Family Vehicle Care"
              },
              {
                src: "/gallery/gallery-video.mp4",
                alt: "Installation process",
                caption: "Installation Process",
                type: "video"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl shadow-lg bg-gray-900/50 backdrop-blur border border-gray-800/50 hover:bg-gray-800/50 hover:scale-105 transition-all duration-300"
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    controls
                    className="w-full h-48 object-cover rounded-xl mb-4"
                    poster="/gallery/gallery1.jpg"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                    loading="lazy"
                  />
                )}
                <h3 className="text-white font-bold text-lg mb-2">{item.caption}</h3>
                <p className="text-emerald-400/70 text-sm">Professional Installation</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL SEPARATOR 4 */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent my-16"></div>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              What our customers say about SafePark
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                location: "Coimbatore",
                text: "SafePark completely transformed how I protect my BMW. The installation was incredibly quick and the quality exceeds all expectations.",
                rating: 5
              },
              {
                name: "Priya Sharma", 
                location: "Tamil Nadu",
                text: "Amazing product with world-class service. The retractable design is genius - no more worrying about weather damage ever again.",
                rating: 5
              },
              {
                name: "Arjun Patel", 
                location: "Gujarat",
                text: "Professional installation and premium quality materials. SafePark has exceeded my expectations in every way.",
                rating: 5
              }
            ].map((review, idx) => (
              <div 
                key={idx} 
                className="h-full p-8 rounded-2xl shadow-lg bg-gray-900/50 backdrop-blur border border-gray-800/50 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="leading-relaxed text-gray-300 mb-6">
                  "{review.text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL SEPARATOR 5 - FINAL TRANSITION */}
      <div className="relative my-16">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-emerald-400/20 to-emerald-400/5 h-32 blur-3xl"></div>
        <div className="h-0.5 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
      </div>

      {/* CONTACT SECTION */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-800/40 to-gray-900/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Ready to Protect Your Vehicle?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
              Join thousands who chose SafePark for premium protection
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur rounded-3xl p-12 shadow-2xl border border-gray-700/50">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <Phone className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">Phone</h3>
                <a href="tel:+919600840058" className="text-emerald-400 hover:text-emerald-300 font-medium">
                  +91 9600840058
                </a>
              </div>
              
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <MessageCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">WhatsApp</h3>
                <a href="https://wa.me/919600840058" className="text-emerald-400 hover:text-emerald-300 font-medium">
                  Message Us
                </a>
              </div>
              
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <MapPin className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">Location</h3>
                <p className="text-emerald-400">Coimbatore, Tamil Nadu</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="tel:+919600840058" 
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-5 rounded-xl font-bold text-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center min-w-[280px] shadow-lg"
              >
                Call for Free Quote
              </a>
              <a 
                href="https://wa.me/919600840058" 
                className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-12 py-5 rounded-xl font-bold text-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center min-w-[280px]"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-14 px-6 md:px-12 lg:px-20 bg-black/30 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                  S
                </div>
                <span className="text-white font-bold text-3xl">SafePark</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Premium retractable carport solutions designed for elegance, engineered for durability, trusted across India.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-400">2,000+ Happy Customers</span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold text-2xl mb-8">Contact</h4>
              <div className="space-y-6">
                <a href="tel:+919600840058" className="flex items-center text-gray-400 hover:text-emerald-400 transition text-lg">
                  <Phone className="w-5 h-5 mr-4" />
                  +91 9600840058
                </a>
                <a href="https://wa.me/919600840058" className="flex items-center text-gray-400 hover:text-emerald-400 transition text-lg">
                  <MessageCircle className="w-5 h-5 mr-4" />
                  WhatsApp
                </a>
                <div className="flex items-center text-gray-400 text-lg">
                  <MapPin className="w-5 h-5 mr-4" />
                  Coimbatore, Tamil Nadu
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400">© 2025 SafePark. Crafted with excellence in Coimbatore, Tamil Nadu</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
