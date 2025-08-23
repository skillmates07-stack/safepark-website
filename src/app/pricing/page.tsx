'use client';

import { useState } from 'react';
import { Shield, Star, CheckCircle } from 'lucide-react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const pricingPlans = [
    {
      id: 1,
      name: "Compact",
      monthlyPrice: 16500,
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
      monthlyPrice: 18500,
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
      monthlyPrice: 21500,
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
    <div className="scroll-smooth bg-gradient-to-br from-[#0f172a] via-[#0f2d2a] to-[#052e16] min-h-screen pt-20">

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
            {pricingPlans.map((plan) => (
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
                      ₹{isAnnual 
                        ? (plan.monthlyPrice * 0.8).toLocaleString()
                        : plan.monthlyPrice.toLocaleString()
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
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-200 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SAFEPARK - SIMPLIFIED */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-800/40 to-gray-900/60">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
            Why SafePark?
          </h2>
          <p className="text-lg text-emerald-200 max-w-2xl mx-auto">
            Trusted by thousands across India. SafePark is engineered for our unpredictable weather and happy families. No more worries—just smooth mornings, every day.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {[
            {
              icon: <span className="block w-9 h-9 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-xl font-bold mb-3">☀️</span>,
              title: "Handles Every Season",
              desc: "UV, rain, storms, and dust—your car's safe no matter what nature throws."
            },
            {
              icon: <span className="block w-9 h-9 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-xl font-bold mb-3">🧡</span>,
              title: "Families First",
              desc: "Smooth, safe edges and a stable build. Kid- and pet-friendly always."
            },
            {
              icon: <span className="block w-9 h-9 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-xl font-bold mb-3">🔒</span>,
              title: "2-Year Promise",
              desc: "We support you from installation and beyond. Call, WhatsApp, anytime."
            }
          ].map((f, i) => (
            <div key={i} className="bg-slate-900/70 p-8 rounded-2xl shadow flex flex-col items-center hover:scale-105 transition">
              {f.icon}
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-emerald-100 text-center">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
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

      {/* CTA SECTION */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-800/40 to-gray-900/60">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Protect Your Vehicle?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join the SafePark family and discover what real protection feels like.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="tel:+919600840058" 
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 inline-flex items-center gap-3"
            >
              <Shield className="w-6 h-6" />
              Get Your Free Quote
            </a>
            <a 
              href="https://wa.me/919600840058" 
              className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              WhatsApp Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
