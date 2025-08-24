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
    <div className="bg-gradient-to-br from-neutral-900 via-slate-900 to-neutral-800 min-h-screen pb-24">
      
      {/* HERO */}
      <section className="pt-32 pb-10 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Trusted by 2,000+ car owners
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-3 tracking-tight">
            Pick Your <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">SafePark Plan</span>
          </h1>
          <p className="text-lg text-gray-300 font-normal mb-6">
            All plans include professional installation, warranty & lifetime support.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-2 mt-6">
            <span className={`text-base transition-colors ${!isAnnual ? 'text-white font-semibold' : 'text-gray-400'}`}>
              One-time
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none ${isAnnual ? 'bg-emerald-500' : 'bg-slate-700'}`}
            >
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-5' : 'translate-x-1'}`} />
            </button>
            <span className={`text-base ${isAnnual ? 'text-white font-semibold' : 'text-gray-400'}`}>
              Annual <span className="text-emerald-400 text-xs font-bold ml-2">Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-4 sm:px-6 md:px-16 mt-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={plan.id}
              className={`
                flex flex-col rounded-2xl ${plan.border} bg-gradient-to-br from-white/5 via-white/0 to-white/0
                shadow-xl relative transition-all duration-400
                ${plan.popular ? "ring-2 ring-emerald-400/60 scale-105 z-10 md:-translate-y-5" : "border-opacity-60"}
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 text-white px-5 py-2 rounded-full text-xs shadow-xl font-semibold tracking-wide">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              <div className="flex-1 px-7 pt-10 pb-7 flex flex-col">
                <div className="mb-1 text-xl font-bold text-white tracking-tight">{plan.name}</div>
                <div className="font-normal text-sm text-gray-300 mb-1">{plan.subtitle}</div>
                <div className="flex items-baseline justify-center gap-1 mb-2 mt-4">
                  <span className="text-base text-gray-400 line-through pr-2">{plan.originalPrice.toLocaleString('en-IN', {style:'currency',currency:'INR', maximumFractionDigits: 0})}</span>
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-lg">
                    Save ₹{plan.save.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-end justify-start mb-1 gap-1">
                  <span className="text-lg text-emerald-400 font-extrabold">₹</span>
                  <span className={`font-bold ${plan.popular ? 'text-5xl text-emerald-400' : 'text-4xl text-white'}`}>
                    {(isAnnual ? plan.price * 0.8 : plan.price).toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="text-xs text-gray-400 mb-3">One-time payment • Free installation</div>
                <div className="font-normal text-sm text-gray-300 mb-5">{plan.description}</div>
                <a
                  href="tel:+919600840058"
                  className={`
                    w-full mt-auto py-2.5 rounded-xl text-base transition text-center mb-2 flex items-center justify-center gap-2
                    ${plan.popular ? "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold shadow" : plan.buttonClass}
                  `}
                >
                  {plan.popular ? <Phone className="w-5 h-5" /> : null}
                  Get Started
                </a>

                <div className="mt-5 mb-2 text-sm text-gray-400 font-semibold">Everything included:</div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 mb-0 px-3">
        <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-br from-emerald-700/10 to-cyan-700/10 border border-emerald-500/20 px-6 sm:px-12 py-10 text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Ready to Protect Your Investment?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Join thousands who trust SafePark for premium car safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919600840058"
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-600 text-white px-7 py-3 rounded-xl font-semibold text-base shadow transition-all"
            >
              <Phone className="w-5 h-5 inline-block mr-2" />
              Get Free Quote Now
            </a>
            <a 
              href="https://wa.me/919600840058"
              className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-7 py-3 rounded-xl font-semibold text-base transition-all"
            >
              <ArrowRight className="w-5 h-5 inline-block mr-2" />
              WhatsApp Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
