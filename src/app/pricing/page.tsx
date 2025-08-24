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
      
      {/* HERO SECTION */}
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4" />
            Trusted by 2,000+ car owners
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 tracking-tight">
            Choose Your 
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"> SafePark Plan</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Professional installation, comprehensive warranty & lifetime support included.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-base font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              One-time Payment
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none ${isAnnual ? 'bg-emerald-500' : 'bg-slate-700'}`}
            >
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-5' : 'translate-x-1'}`} />
            </button>
            <div className="text-left">
              <span className={`text-base font-medium transition-colors ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Annual Plan
              </span>
              <div className="text-xs text-emerald-400 font-semibold">Save 20%</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CARDS - PERFECT BALANCE */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative rounded-2xl ${plan.border} bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm
                shadow-xl transition-all duration-300 hover:scale-[1.01]
                ${plan.popular ? "ring-2 ring-emerald-400/50 scale-[1.02] md:-translate-y-4" : ""}
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{plan.subtitle}</p>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-base text-gray-400 line-through">₹{plan.originalPrice.toLocaleString()}</span>
                    <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded font-medium">
                      Save ₹{plan.save.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex items-end justify-center mb-3">
                    <span className="text-lg text-emerald-400 font-bold">₹</span>
                    <span className={`font-bold ${plan.popular ? 'text-4xl text-emerald-400' : 'text-3xl text-white'}`}>
                      {(isAnnual ? plan.price * 0.8 : plan.price).toLocaleString()}
                    </span>
                  </div>
                  
                  <p className="text-xs text-gray-400 mb-3">One-time payment • Free installation</p>
                  <p className="text-sm text-gray-300 mb-5">{plan.description}</p>
                  
                  {/* CTA Button */}
                  <a
                    href="tel:+919600840058"
                    className={`w-full py-3 rounded-lg text-base font-medium transition-all duration-300 text-center flex items-center justify-center gap-2 ${plan.buttonClass}`}
                  >
                    {plan.popular && <Phone className="w-4 h-4" />}
                    Get Started
                  </a>
                </div>

                {/* Features */}
                <div className="border-t border-white/10 pt-5">
                  <h4 className="text-sm font-semibold text-gray-300 mb-4">Everything included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
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

      {/* CTA SECTION */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-emerald-500/8 to-cyan-500/8 border border-emerald-500/20 p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Protect Your Investment?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Join thousands who trust SafePark for premium protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919600840058"
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Get Free Quote Now
            </a>
            <a 
              href="https://wa.me/919600840058"
              className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
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
