'use client';

import { useState } from 'react';
import { Shield, Zap, Award, Phone, MessageCircle, MapPin, Star, ArrowRight } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const pricingPlans = [
    {
      id: 1,
      name: "Compact",
      monthlyPrice: "₹16,500",
      subtitle: "Perfect for small cars and compact SUVs",
      features: [
        "5.5m × 2.5m × 2.3m dimensions",
        "Galvanized iron frame",
        "Oxford 600D waterproof fabric",
        "2-3 hour installation",
        "Suitable for Swift, i20, City",
        "2-year warranty included"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Standard",
      monthlyPrice: "₹18,500",
      subtitle: "Ideal for sedans and mid-size SUVs",
      features: [
        "6.0m × 2.6m × 2.5m dimensions",
        "Premium galvanized frame",
        "Oxford 600D waterproof fabric",
        "Professional installation",
        "Suitable for Camry, Tucson, XUV500",
        "2-year warranty + free consultation"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Large",
      monthlyPrice: "₹21,500",
      subtitle: "Perfect for large SUVs and premium vehicles",
      features: [
        "6.5m × 2.8m × 2.5m dimensions",
        "Heavy-duty galvanized frame",
        "Premium Oxford 600D fabric",
        "Expert installation service",
        "Suitable for Fortuner, X5, Range Rover",
        "Extended 2-year warranty"
      ],
      popular: false
    }
  ];

  return (
    <div className="scroll-smooth bg-gradient-to-br from-[#0f172a] via-[#0f2d2a] to-[#052e16] min-h-screen">
      <Navbar />

      <main className="pt-16">
        {/* HERO SECTION */}
        <section className="pt-8 pb-10 px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight">
              <span className="text-white">Find Your Perfect</span>{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                SafePark
              </span>{' '}
              <span className="text-white">Protection Plan</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Every SafePark includes a strong metal frame and weatherproof fabric for lasting protection.
            </p>

            {/* PRICING TOGGLE */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
                One-time
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gradient-to-r from-gray-700 to-gray-800 transition-colors focus:outline-none"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full transition-transform ${
                    isAnnual ? 'translate-x-6 bg-gradient-to-r from-emerald-400 to-emerald-500' : 'translate-x-1 bg-white'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Annual
                <span className="ml-1 text-xs bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent font-bold">
                  20% off
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* PRICING CARDS */}
        <section className="px-4 lg:px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`relative backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-b from-slate-700/50 to-slate-800/70 border-emerald-400/40 shadow-2xl shadow-emerald-500/15 ring-1 ring-emerald-400/25 scale-105 translate-y-[-2rem]' 
                      : 'bg-gradient-to-b from-slate-700/40 to-slate-800/60 border-slate-500/40 shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:border-slate-400/60'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        ⭐ Most Popular
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className={`font-bold text-white mb-3 ${plan.popular ? 'text-2xl' : 'text-xl'}`}>{plan.name}</h3>
                    <p className="text-sm text-gray-300 mb-4">{plan.subtitle}</p>
                    
                    {/* Price */}
                    <div className="mb-6">
                      <div className={`font-black mb-2 ${plan.popular ? 'text-5xl text-emerald-400' : 'text-4xl text-white'}`}>
                        {isAnnual 
                          ? `₹${(parseInt(plan.monthlyPrice.replace('₹', '').replace(',', '')) * 0.8).toLocaleString()}`
                          : plan.monthlyPrice
                        }
                      </div>
                      <p className="text-sm text-gray-300">
                        + {isAnnual ? 'annual' : 'one-time'} installation
                      </p>
                    </div>

                    {/* CTA BUTTON */}
                    <a
                      href="tel:+919600840058"
                      className="w-full block py-3 px-6 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 shadow-2xl shadow-emerald-500/20 text-white font-bold text-sm rounded-xl transition-all duration-300 hover:scale-105 text-center"
                    >
                      Get Started
                    </a>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-200 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="px-4 lg:px-8 py-20 bg-slate-800/30 relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 text-center tracking-tight">
              What's Included with Every 
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent"> SafePark</span> Model
            </h2>
            <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
              Premium features designed to provide maximum protection and peace of mind for your vehicle
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Premium Materials */}
              <div className="h-[280px] p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg text-center transition-all duration-300 hover:bg-white/8 hover:border-emerald-400/30 hover:shadow-emerald-400/10">
                <div className="flex flex-col items-center justify-center h-full">
                  <Shield className="w-12 h-12 mb-6 text-emerald-400" />
                  <h3 className="text-xl font-bold text-white mb-4">Premium Materials</h3>
                  <p className="text-gray-300 leading-relaxed">Galvanized Iron + Oxford 600D waterproof fabric for maximum durability and longevity</p>
                </div>
              </div>

              {/* Quick Installation */}
              <div className="h-[280px] p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg text-center transition-all duration-300 hover:bg-white/8 hover:border-emerald-400/30 hover:shadow-emerald-400/10">
                <div className="flex flex-col items-center justify-center h-full">
                  <Zap className="w-12 h-12 mb-6 text-emerald-400" />
                  <h3 className="text-xl font-bold text-white mb-4">Quick Installation</h3>
                  <p className="text-gray-300 leading-relaxed">Professional setup completed in just 2-3 hours by our certified installation technicians</p>
                </div>
              </div>

              {/* Weather Protection */}
              <div className="h-[280px] p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg text-center transition-all duration-300 hover:bg-white/8 hover:border-emerald-400/30 hover:shadow-emerald-400/10">
                <div className="flex flex-col items-center justify-center h-full">
                  <Shield className="w-12 h-12 mb-6 text-emerald-400" />
                  <h3 className="text-xl font-bold text-white mb-4">Weather Protection</h3>
                  <p className="text-gray-300 leading-relaxed">100% UV & Rain Protection with advanced weatherproof coating technology</p>
                </div>
              </div>

              {/* 2-Year Warranty */}
              <div className="h-[280px] p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg text-center transition-all duration-300 hover:bg-white/8 hover:border-emerald-400/30 hover:shadow-emerald-400/10">
                <div className="flex flex-col items-center justify-center h-full">
                  <Award className="w-12 h-12 mb-6 text-emerald-400" />
                  <h3 className="text-xl font-bold text-white mb-4">2-Year Warranty</h3>
                  <p className="text-gray-300 leading-relaxed">Complete parts & service warranty with free maintenance and customer support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-20 px-6 md:px-12 lg:px-20">
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

        {/* CONTACT SECTION */}
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-800/40 to-gray-900/60">
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
        <footer className="py-16 px-6 md:px-12 lg:px-20 bg-black/30 border-t border-white/10">
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
      </main>
    </div>
  );
}
