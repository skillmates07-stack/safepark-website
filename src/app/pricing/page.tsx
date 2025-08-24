'use client';

import { useState } from 'react';
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: 1,
      name: "Essential",
      subtitle: "Perfect for compact cars",
      originalPrice: 18500,
      price: 16500,
      save: 2000,
      description: "Ideal for city cars and compact vehicles",
      features: [
        "5.5m × 2.5m × 2.3m coverage",
        "Premium galvanized steel frame",
        "Oxford 600D waterproof fabric",
        "Professional installation (2 hours)",
        "Perfect for Swift, i20, City, Polo",
        "2-year comprehensive warranty",
      ],
      buttonClass: "border border-slate-400 text-slate-300 hover:bg-slate-700 hover:text-white",
      popular: false,
      border: "border-slate-700"
    },
    {
      id: 2,
      name: "Professional",
      subtitle: "Most popular choice",
      originalPrice: 22000,
      price: 18500,
      save: 3500,
      description: "Ideal for sedans and mid-size SUVs",
      features: [
        "6.0m × 2.6m × 2.5m coverage",
        "Heavy-duty galvanized frame",
        "Premium Oxford fabric with UV coating",
        "Expert installation with site prep",
        "Ideal for Camry, Creta, XUV500",
        "3-year warranty + VIP support",
      ],
      buttonClass: "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold shadow-lg",
      popular: true,
      border: "border-emerald-500"
    },
    {
      id: 3,
      name: "Premium",
      subtitle: "For luxury vehicles",
      originalPrice: 25000,
      price: 21500,
      save: 3500,
      description: "Premium protection for large SUVs",
      features: [
        "6.5m × 2.8m × 2.5m coverage",
        "Ultra-strong galvanized frame",
        "Military-grade fabric protection",
        "White-glove installation",
        "Designed for Fortuner, X5, Range Rover",
        "Lifetime structural warranty",
      ],
      buttonClass: "border border-purple-400 text-purple-300 hover:bg-purple-700 hover:text-white",
      popular: false,
      border: "border-purple-800"
    },
  ];

  return (
    <div className="bg-gradient-to-br from-neutral-900 via-slate-900 to-neutral-800 min-h-screen">
      
      {/* HERO SECTION - SMALLER */}
      <section className="pt-26 pb-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4" />
            Trusted by 2,000+ car owners
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3 tracking-tight">
            Choose Your 
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"> SafePark Plan</span>
          </h1>
          
          <p className="text-base text-gray-300 mb-6 max-w-xl mx-auto">
            Professional installation, comprehensive warranty & lifetime support included.
          </p>

          {/* Pricing Toggle - SMALLER */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              One-time Payment
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${isAnnual ? 'bg-emerald-500' : 'bg-slate-700'}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-5' : 'translate-x-1'}`} />
            </button>
            <div className="text-left">
              <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Annual Plan
              </span>
              <div className="text-xs text-emerald-400 font-semibold">Save 20%</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CARDS - SMALLER SIZE */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative rounded-2xl ${plan.border} bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm
                shadow-xl transition-all duration-300 hover:scale-[1.01]
                ${plan.popular ? "ring-2 ring-emerald-400/50 scale-[1.02] md:-translate-y-3" : ""}
              `}
            >
              {/* Popular Badge - SMALLER */}
              {plan.popular && (
                <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              <div className="p-5">
                {/* Header - SMALLER */}
                <div className="text-center mb-5">
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{plan.subtitle}</p>
                  
                  {/* Pricing - SMALLER */}
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-sm text-gray-400 line-through">₹{plan.originalPrice.toLocaleString()}</span>
                    <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-medium">
                      Save ₹{plan.save.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex items-end justify-center mb-2">
                    <span className="text-base text-emerald-400 font-bold">₹</span>
                    <span className={`font-bold ${plan.popular ? 'text-3xl text-emerald-400' : 'text-2xl text-white'}`}>
                      {(isAnnual ? plan.price * 0.8 : plan.price).toLocaleString()}
                    </span>
                  </div>
                  
                  <p className="text-xs text-gray-400 mb-2">One-time payment • Free installation</p>
                  <p className="text-sm text-gray-300 mb-4">{plan.description}</p>
                  
                  {/* CTA Button - SMALLER */}
                  <a
                    href="tel:+919600840058"
                    className={`w-full py-2.5 rounded-lg text-sm font-medium transition-all duration-300 text-center flex items-center justify-center gap-2 ${plan.buttonClass}`}
                  >
                    {plan.popular && <Phone className="w-4 h-4" />}
                    Get Started
                  </a>
                </div>

                {/* Features - SMALLER */}
                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-xs font-semibold text-gray-300 mb-3">Everything included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION - SMALLER */}
      <section className="px-6 pb-12">
        <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-br from-emerald-500/8 to-cyan-500/8 border border-emerald-500/20 p-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Ready to Protect Your Investment?
          </h2>
          <p className="text-base text-gray-300 mb-6 max-w-lg mx-auto">
            Join thousands who trust SafePark for premium protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="tel:+919600840058"
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Get Free Quote Now
            </a>
            <a 
              href="https://wa.me/919600840058"
              className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-4 h-4" />
              WhatsApp Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
