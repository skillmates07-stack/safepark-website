'use client';

import { useState } from 'react';

export default function HomePage() {
  return (
    <main className="pt-[56px] bg-gradient-to-br from-gray-900 via-black to-emerald-900/10 min-h-screen overflow-x-hidden">
      
      {/* WORLD-CLASS HERO SECTION */}
      <section className="relative min-h-[calc(100vh-56px)] flex items-center py-8">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* CONTENT AREA - Tesla/Apple Style Typography */}
            <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
              {/* Premium Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-green-400/30 text-sm text-white font-medium shadow-2xl">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                Made in India • Premium Quality
              </div>

              {/* World-Class Headlines */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight">
                  <span className="text-white">Protect Your Vehicle</span>
                  <br />
                  <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    Without Building a Garage
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl">
                  Premium retractable carport that installs in minutes, protects for years. No construction, no permits—just <span className="text-white font-medium">complete peace of mind</span>.
                </p>
              </div>

              {/* Premium Feature Pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  "⚡ 15-Second Setup",
                  "🛡️ 100% Weather Protection", 
                  "🏆 2-Year Warranty"
                ].map((feature, idx) => (
                  <div key={idx} className="px-4 py-2 bg-green-500/10 border border-green-400/30 rounded-full text-green-300 text-sm font-medium backdrop-blur-sm">
                    {feature}
                  </div>
                ))}
              </div>

              {/* World-Class CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="tel:+919600840058" className="group relative overflow-hidden bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-green-500/30 hover:shadow-green-400/40 hover:scale-[1.02] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    Get Your Free Quote
                  </span>
                </a>
                
                <a href="#demo" className="group border-2 border-green-400/60 text-green-400 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-400 hover:text-black transition-all duration-300 backdrop-blur-sm">
                  <span className="flex items-center justify-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5V13a1.5 1.5 0 01-1.5 1.5H9z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11V9a3 3 0 00-3-3v3"/>
                    </svg>
                    Watch Demo Video
                  </span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <span className="text-gray-300 font-semibold">2,000+ Protected Cars</span>
                </div>
                <div className="w-px h-6 bg-gray-600"></div>
                <span className="text-green-400 font-semibold">Installed Across India</span>
              </div>
            </div>

            {/* PREMIUM VISUAL AREA */}
            <div className="lg:col-span-7 relative order-1 lg:order-2">
              {/* Hero Car Image Background */}
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
                  {/* Placeholder for premium car image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
                    <div className="text-center space-y-4">
                      <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-400 rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-green-500/30">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l4-4 4 4m0 6l-4 4-4-4"/>
                        </svg>
                      </div>
                      <p className="text-gray-400 text-lg">Premium Car Protection Visualization</p>
                      <p className="text-gray-500 text-sm">Replace with professional automotive photography</p>
                    </div>
                  </div>
                </div>

                {/* FLOATING PREMIUM PRODUCT CARD */}
                <div className="absolute bottom-6 right-6 w-80 max-w-[calc(100%-3rem)]">
                  <div className="relative">
                    {/* Premium Badge */}
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl border border-green-400/30 z-20">
                      100% UV Protected
                    </div>

                    {/* Glass Morphism Card */}
                    <div className="bg-black/40 backdrop-blur-2xl border border-green-400/30 rounded-3xl p-6 shadow-2xl shadow-black/60">
                      {/* Product Icon */}
                      <div className="w-16 h-16 bg-gradient-to-tr from-green-500 via-green-400 to-emerald-400 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-green-500/40 mx-auto">
                        <span className="text-2xl">🚗</span>
                      </div>
                      
                      {/* Product Title */}
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-black text-white mb-2 tracking-tight">SafePark Premium Protection</h3>
                        <p className="text-green-400 text-sm font-semibold">Complete Vehicle Care System</p>
                      </div>
                      
                      {/* Premium Features */}
                      <div className="space-y-3 mb-6">
                        {[
                          { icon: "✨", text: "Strong & Durable Frame", color: "from-amber-500 to-orange-400" },
                          { icon: "🔵", text: "Premium Weather-Resistant Fabric", color: "from-blue-500 to-cyan-400" },
                          { icon: "⚡", text: "Hassle-Free Quick Setup", color: "from-purple-500 to-pink-400" }
                        ].map((feature, idx) => (
                          <div key={idx} className="group flex items-center gap-3 hover:scale-[1.02] transition-all duration-300">
                            <div className={`w-10 h-10 bg-gradient-to-tr ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0`}>
                              <span className="text-sm">{feature.icon}</span>
                            </div>
                            <span className="text-white font-medium text-sm">{feature.text}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Premium CTA */}
                      <a href="/gallery" className="block w-full bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 hover:from-green-500 hover:via-emerald-400 hover:to-teal-400 text-white py-3 text-center font-bold rounded-2xl shadow-xl shadow-green-600/30 hover:shadow-green-500/40 hover:scale-[1.02] transition-all duration-300 mb-3">
                        Explore Gallery →
                      </a>

                      {/* Trust Elements */}
                      <div className="flex items-center justify-center gap-3 text-green-400/80 text-xs">
                        <span>2-Year Warranty</span>
                        <div className="w-px h-3 bg-gray-600"></div>
                        <span>Free Consultation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM FEATURES SECTION */}
      <section className="px-6 lg:px-12 py-20 bg-gradient-to-br from-black/80 via-gray-900/60 to-emerald-900/10 border-t border-green-400/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
              Why Choose <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">SafePark</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Premium protection engineered for the modern vehicle owner</p>
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
                desc: "Revolutionary retractable design with strong, durable frame installs in under 15 seconds"
              },
              {
                icon: "🏆",
                title: "Guaranteed Quality",
                desc: "2-year comprehensive warranty with professional installation and ongoing support"
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-black/40 to-gray-900/60 backdrop-blur-sm border border-green-400/20 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl hover:shadow-green-900/30 hover:scale-[1.02] hover:border-green-400/40 transition-all duration-500">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM GALLERY SECTION */}
      <section id="gallery" className="px-6 lg:px-12 py-20 bg-gradient-to-br from-gray-900/70 via-black/50 to-emerald-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">See SafePark in Action</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Real installations, real protection, real peace of mind</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Premium Car Protection",
              "All-Weather Installation", 
              "Quick Setup Demo",
              "Urban Protection",
              "Family Vehicle Care",
              "Installation Process"
            ].map((caption, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-black/40 to-gray-900/60 backdrop-blur-sm border border-green-400/20 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:shadow-green-900/30 hover:scale-[1.02] hover:border-green-400/40 transition-all duration-500">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-4 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <span className="text-2xl">📸</span>
                    </div>
                    <p className="text-gray-400 text-sm">Gallery Image #{idx + 1}</p>
                  </div>
                </div>
                <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-green-300 transition-colors duration-300">{caption}</h3>
                <p className="text-green-400/70 text-sm">Professional Installation</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM TESTIMONIALS */}
      <section className="px-6 lg:px-12 py-20 bg-gradient-to-br from-black via-gray-900/80 to-emerald-900/10 border-t border-green-400/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Trusted by Vehicle Owners Across India</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                location: "Coimbatore", 
                text: "SafePark transformed how I protect my vehicle. The installation was incredibly quick and the quality exceeds expectations. Best investment for any car owner!",
                rating: 5
              },
              {
                name: "Priya Sharma",
                location: "Tamil Nadu",
                text: "Amazing product with professional service. The retractable design is genius - no more worrying about weather damage. Highly recommend SafePark!",
                rating: 5
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-gradient-to-br from-black/40 to-gray-900/60 backdrop-blur-sm border border-green-400/30 p-8 rounded-3xl shadow-2xl hover:shadow-green-900/40 hover:border-green-400/50 transition-all duration-500">
                <div className="flex mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-green-400 text-xl">⭐</span>
                  ))}
                </div>
                <blockquote className="text-gray-100 mb-8 text-lg leading-relaxed font-medium">
                  "{review.text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-full mr-4 flex items-center justify-center text-black font-bold text-xl shadow-xl shadow-green-500/30">
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
        </div>
      </section>

      {/* PREMIUM CONTACT SECTION */}
      <section id="contact" className="px-6 lg:px-12 py-20 bg-gradient-to-br from-gray-900 via-black to-emerald-900/20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Ready to Protect Your Vehicle?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">Join thousands of satisfied customers who chose SafePark for premium protection</p>
          
          <div className="bg-gradient-to-br from-black/40 to-gray-900/60 backdrop-blur-xl border border-green-400/30 rounded-3xl p-10 mb-12 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="font-bold text-white mb-3 text-xl">Call Us</h3>
                <a href="tel:+919600840058" className="text-green-400 hover:text-green-300 transition text-lg font-semibold">+91 9600840058</a>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="font-bold text-white mb-3 text-xl">WhatsApp</h3>
                <a href="https://wa.me/919600840058" className="text-green-400 hover:text-green-300 transition text-lg font-semibold">Message Us</a>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="font-bold text-white mb-3 text-xl">Location</h3>
                <p className="text-green-400 text-lg">Coimbatore, Tamil Nadu</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <a href="tel:+919600840058" className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-500 text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-2xl shadow-green-600/30 hover:shadow-green-500/40 hover:scale-[1.02] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Call for Free Quote</span>
            </a>
            <a href="https://wa.me/919600840058" className="border-2 border-green-400 text-green-400 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-green-400 hover:text-black transition-all duration-300 backdrop-blur-sm">
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* PREMIUM FOOTER */}
      <footer className="bg-gradient-to-br from-black via-gray-900/90 to-emerald-900/10 border-t border-green-400/20 px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center text-black font-black text-2xl shadow-xl shadow-green-500/30">
                  S
                </div>
                <span className="text-white font-black text-4xl">SafePark</span>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed max-w-md">
                Premium retractable carport solutions designed for elegance, engineered for durability, trusted across India.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex text-green-400 text-lg">⭐⭐⭐⭐⭐</div>
                <span className="text-gray-400">2,000+ Happy Customers</span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-6">Contact</h4>
              <div className="space-y-4">
                <a href="tel:+919600840058" className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300">
                  <span className="mr-3 text-lg">📞</span>
                  +91 9600840058
                </a>
                <a href="https://wa.me/919600840058" className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300">
                  <span className="mr-3 text-lg">💬</span>
                  WhatsApp
                </a>
                <div className="flex items-center text-gray-300">
                  <span className="mr-3 text-lg">📍</span>
                  Coimbatore, Tamil Nadu
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-6">Services</h4>
              <div className="space-y-3">
                <a href="#features" className="block text-gray-300 hover:text-green-400 transition-colors duration-300">Premium Protection</a>
                <a href="#gallery" className="block text-gray-300 hover:text-green-400 transition-colors duration-300">Installation</a>
                <a href="#contact" className="block text-gray-300 hover:text-green-400 transition-colors duration-300">Consultation</a>
                <a href="/pricing" className="block text-gray-300 hover:text-green-400 transition-colors duration-300">Custom Solutions</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-400/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 SafePark. Crafted with excellence in Coimbatore, Tamil Nadu
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Terms of Service</a>
              <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
