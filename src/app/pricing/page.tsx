'use client';

import { useState } from 'react';
import { Shield, Check, Phone, ArrowRight } from 'lucide-react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      id: 1,
      name: "Compact",
      price: 16500,
      description: "Perfect for small cars and compact SUVs",
      features: [
        "5.5m × 2.5m × 2.3m coverage",
        "Premium galvanized frame",
        "Oxford 600D waterproof fabric",
        "Professional 2-hour installation",
        "Ideal for Swift, i20, City",
        "2-year comprehensive warranty"
      ],
      popular: false,
      gradient: "from-blue-600/20 to-blue-800/40",
      borderColor: "border-blue-500/30"
    },
    {
      id: 2,
      name: "Standard",
      price: 18500,
      description: "Most popular for sedans and mid-size SUVs",
      features: [
        "6.0m × 2.6m × 2.5m coverage",
        "Heavy-duty galvanized frame",
        "Premium Oxford fabric",
        "Expert installation service",
        "Perfect for Camry, Creta, XUV500",
        "Extended warranty + maintenance"
      ],
      popular: true,
      gradient: "from-emerald-600/30 to-emerald-800/50",
      borderColor: "border-emerald-400/50"
    },
    {
      id: 3,
      name: "Large",
      price: 21500,
      description: "Premium protection for large SUVs",
      features: [
        "6.5m × 2.8m × 2.5m coverage",
        "Ultra-strong galvanized frame",
        "Military-grade fabric protection",
        "White-glove installation",
        "Designed for Fortuner, X5, Range Rover",
        "Premium support package"
      ],
      popular: false,
      gradient: "from-purple-600/20 to-purple-800/40",
      borderColor: "border-purple-500/30"
    }
  ];

  return (
    <div className="scroll-smooth bg-gradient-to-br from-[#0f172a] via-[#0f2d2a] to-[#052e16] min-h-screen pt-20">

      {/* HERO SECTION */}
      <section className="pt-16 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black leading-tight text-white mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              SafePark Plan
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
            Premium protection engineered for every vehicle. All plans include professional installation and 2-year warranty.
          </p>

          {/* PRICING TOGGLE */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-lg font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              One-time Payment
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none ${
                isAnnual ? 'bg-emerald-500' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <div className="text-left">
              <span className={`text-lg font-medium transition-colors ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Annual Plan
              </span>
              <div className="text-sm text-emerald-400 font-semibold">Save 20%</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CARDS - PERFECT SPACING */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 ${
                  plan.popular 
                    ? `bg-gradient-to-br ${plan.gradient} border-2 ${plan.borderColor} shadow-2xl shadow-emerald-500/20 md:-translate-y-8 scale-105 z-10` 
                    : `bg-gradient-to-br ${plan.gradient} border ${plan.borderColor} shadow-xl hover:shadow-2xl hover:scale-[1.02]`
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      🏆 Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  {/* Price Display */}
                  <div className="mb-8">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-2xl text-emerald-400">₹</span>
                      <span className={`font-black ${plan.popular ? 'text-5xl text-emerald-400' : 'text-4xl text-white'}`}>
                        {(isAnnual ? plan.price * 0.8 : plan.price).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300">
                      {isAnnual ? 'Annual payment' : 'One-time payment'} + installation
                    </p>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="tel:+919600840058"
                    className={`w-full block py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 text-center ${
                      plan.popular
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl'
                        : 'bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40'
                    }`}
                  >
                    Get Started
                  </a>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-200 leading-relaxed">{feature}</span>
                    </div>
                  ))}
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
            Ready to Protect Your Investment?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust SafePark with their precious vehicles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:+919600840058" 
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Get Free Quote Now
            </a>
            <a 
              href="https://wa.me/919600840058" 
              className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              <ArrowRight className="w-6 h-6" />
              WhatsApp Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
