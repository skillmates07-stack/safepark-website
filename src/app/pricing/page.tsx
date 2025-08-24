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
      buttonClass: "border border-slate-400 text-slate-300 hover:bg-slate-700",
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
      buttonClass: "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold shadow",
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
      buttonClass: "border border-purple-400 text-purple-300 hover:bg-purple-700",
      popular: false,
      border: "border-purple-800"
    },
  ];

  return (
    <div className="bg-gradient-to-br from-neutral-900 via-slate-900 to-neutral-800 min-h-screen pb-32">
      
      {/* HERO - MORE BREATHING ROOM */}
      <section className="pt-32 pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Trusted by 2,000+ car owners
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Pick Your <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">SafePark Plan</span>
          </h1>
          <p className="text-xl text-gray-300 font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
            All plans include professional installation, warranty & lifetime support.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-6 mb-4 mt-8">
            <span className={`text-lg transition-colors ${!isAnnual ? 'text-white font-semibold' : 'text-gray-400'}`}>
              One-time
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none ${isAnnual ? 'bg-emerald-500' : 'bg-slate-700'}`}
            >
              <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-white font-semibold' : 'text-gray-400'}`}>
              Annual <span className="text-emerald-400 text-sm font-bold ml-2">Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* PRICING CARDS - BALANCED SPACING */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <div
              key={plan.id}
              className={`
                flex flex-col rounded-3xl ${plan.border} bg-gradient-to-br from-white/5 via-white/0 to-white/0
                shadow-2xl relative transition-all duration-400 hover:scale-[1.02]
                ${plan.popular ? "ring-2 ring-emerald-400/60 scale-105 z-10 md:-translate-y-6" : "border-opacity-60"}
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 text-white px-6 py-2 rounded-full text-sm shadow-xl font-semibold tracking-wide">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              <div className="flex-1 px-8 pt-12 pb-8 flex flex-col">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="text-2xl font-bold text-white tracking-tight mb-2">{plan.name}</div>
                  <div className="font-normal text-base text-gray-300 mb-6">{plan.subtitle}</div>
                  
                  {/* Pricing Display */}
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-lg text-gray-400 line-through">₹{plan.originalPrice.toLocaleString()}</span>
                    <span className="text-sm bg-red-500/20 text-red-400 px-3 py-1 rounded-full font-semibold">
                      Save ₹{plan.save.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex items-end justify-center mb-3 gap-1">
                    <span className="text-xl text-emerald-400 font-extrabold">₹</span>
                    <span className={`font-bold ${plan.popular ? 'text-5xl text-emerald-400' : 'text-4xl text-white'}`}>
                      {(isAnnual ? plan.price * 0.8 : plan.price).toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="text-sm text-gray-400 mb-6">One-time payment • Free installation</div>
                  <div className="font-normal text-base text-gray-300 mb-8">{plan.description}</div>
                  
                  {/* CTA Button */}
                  <a
                    href="tel:+919600840058"
                    className={`
                      w-full py-4 rounded-xl text-lg transition text-center mb-8 flex items-center justify-center gap-3 font-semibold
                      ${plan.popular ? "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white shadow-lg" : plan.buttonClass}
                    `}
                  >
                    {plan.popular ? <Phone className="w-5 h-5" /> : null}
                    Get Started
                  </a>
                </div>

                {/* Features List */}
                <div className="mt-auto">
                  <div className="text-lg text-gray-300 font-semibold mb-6">Everything included:</div>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-base text-gray-200">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION - BALANCED */}
      <section className="mt-24 px-6">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-emerald-700/10 to-cyan-700/10 border border-emerald-500/20 px-8 sm:px-12 py-12 text-center shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Protect Your Investment?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands who trust SafePark for premium car protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:+919600840058"
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Get Free Quote Now
            </a>
            <a 
              href="https://wa.me/919600840058"
              className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              <ArrowRight className="w-5 h-5" />
              WhatsApp Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
