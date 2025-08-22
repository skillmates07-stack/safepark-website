'use client';

import { Shield, Zap, Award, Phone, MessageCircle, MapPin, Star, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="scroll-smooth bg-gradient-to-br from-slate-900 via-navy-900 to-slate-800 min-h-screen">
      
      {/* WORLD-CLASS HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto w-full text-center">
          <div className="space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100/10 border border-emerald-400/20 text-emerald-300 font-medium text-sm backdrop-blur-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              Made in India • Premium Quality
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-3xl mx-auto">
              Everyday Risks.
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Lasting Protection.
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="text-lg text-gray-400 leading-relaxed mt-6 max-w-xl mx-auto">
              Your car faces <span className="font-semibold text-white">hidden threats every day</span>. From unexpected weather to kids playing nearby, give yourself <span className="text-emerald-400 font-medium">complete peace of mind</span>.
            </p>

            {/* Trust Signals */}
            <div className="flex justify-center items-center gap-6 mt-8">
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

            {/* CTA Buttons */}
            <div className="flex justify-center gap-4 mt-8 flex-wrap">
              <a 
                href="tel:+919600840058"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
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
                className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-xl font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                View Gallery
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Hero Image */}
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-teal-400/20 rounded-3xl blur-3xl scale-110"></div>
              <img 
                src="/gallery/hero-car.jpeg" 
                alt="Premium BMW protected by SafePark" 
                className="relative w-full max-w-2xl mx-auto h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETE PROTECTION SECTION */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Complete Protection for Every Risk
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Four layers of premium defense engineered for your vehicle's safety
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Shield className="w-12 h-12 text-emerald-400" />, 
                title: "Fire Protection", 
                desc: "Heat & flame resistant materials with advanced coating technology"
              },
              { 
                icon: <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center"><div className="w-6 h-6 bg-blue-400 rounded-full"></div></div>, 
                title: "Rain Protection", 
                desc: "100% waterproof coating ensures complete weather resistance"
              },
              { 
                icon: <Shield className="w-12 h-12 text-gray-400" />, 
                title: "Scratch-Proof", 
                desc: "Durable fabric protection prevents surface damage and wear"
              },
              { 
                icon: <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center"><div className="w-6 h-6 bg-green-400 rounded-full"></div></div>, 
                title: "Safe for Kids", 
                desc: "Rounded edges and stable design prioritize family safety"
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="p-8 shadow-lg rounded-2xl flex flex-col items-center text-center bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SAFEPARK SECTION */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose SafePark?
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Premium protection engineered for modern vehicles
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-emerald-400" />,
                title: "Premium Protection",
                desc: "Advanced weather-resistant fabric with 100% UV protection and waterproof coating technology engineered for maximum durability"
              },
              {
                icon: <Zap className="w-12 h-12 text-emerald-400" />,
                title: "Instant Setup",
                desc: "Revolutionary retractable design installs in under 15 seconds with professional support and comprehensive training"
              },
              {
                icon: <Award className="w-12 h-12 text-emerald-400" />,
                title: "Guaranteed Quality",
                desc: "2-year comprehensive warranty with ongoing maintenance, 24/7 customer support, and premium replacement guarantee"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="p-8 shadow-lg rounded-2xl flex flex-col items-center text-center h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-20 px-6 md:px-12 lg:px-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              See SafePark in Action
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Real installations, real protection, real results
            </p>
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
              <div 
                key={idx} 
                className="p-6 shadow-lg rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <div className="w-8 h-8 bg-emerald-400 rounded-lg"></div>
                    </div>
                    <p className="text-gray-400 text-sm">Gallery #{idx + 1}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{caption}</h3>
                <p className="text-emerald-400/70 text-sm">Professional Installation</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What our customers say about SafePark
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                text: "Amazing product with world-class service. The retractable design is genius - no more worrying about weather damage ever again.",
                rating: 5
              },
              {
                name: "Arjun Patel", 
                location: "Gujarat",
                text: "Professional installation and premium quality materials. SafePark has exceeded my expectations in every way. Highly recommended!",
                rating: 5
              }
            ].map((review, idx) => (
              <div 
                key={idx} 
                className="h-full flex flex-col justify-between p-6 rounded-2xl shadow-md bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="leading-relaxed text-gray-300 mb-6 italic">
                    "{review.text}"
                  </blockquote>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* READY TO PROTECT SECTION */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Protect Your Vehicle?
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              Join thousands who chose SafePark for premium protection
            </p>
            
            {/* Contact Options */}
            <div className="flex justify-center gap-6 mb-12 flex-wrap">
              <div className="p-8 shadow-lg rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center hover:bg-white/10 hover:scale-105 hover:shadow-xl transition-all duration-300">
                <Phone className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+919600840058" className="text-emerald-400 hover:text-emerald-300 font-medium">
                  +91 9600840058
                </a>
              </div>
              
              <div className="p-8 shadow-lg rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center hover:bg-white/10 hover:scale-105 hover:shadow-xl transition-all duration-300">
                <MessageCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
                <a href="https://wa.me/919600840058" className="text-emerald-400 hover:text-emerald-300 font-medium">
                  Message Us
                </a>
              </div>
              
              <div className="p-8 shadow-lg rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center hover:bg-white/10 hover:scale-105 hover:shadow-xl transition-all duration-300">
                <MapPin className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Location</h3>
                <p className="text-emerald-400">Coimbatore, Tamil Nadu</p>
              </div>
            </div>
            
            {/* Final CTA Buttons */}
            <div className="flex justify-center gap-4 flex-wrap">
              <a 
                href="tel:+919600840058" 
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Call for Free Quote
              </a>
              <a 
                href="https://wa.me/919600840058" 
                className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-xl font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 md:px-12 lg:px-20 bg-black/50 border-t border-white/10">
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
