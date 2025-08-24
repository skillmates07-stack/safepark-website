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
      buttonClass: "bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40",
      popular: false,
      cardClass: "bg-white/[0.03] border-white/10"
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
      cardClass: "bg-emerald-500/[0.08] border-emerald-400/30"
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
      buttonClass: "bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40",
      popular: false,
      cardClass: "bg-white/[0.03] border-white/10"
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

      {/* PRICING CARDS - ENHANCED GLASSY THEME */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative rounded-3xl border backdrop-blur-xl
                shadow-2xl transition-all duration-500 hover:scale-[1.02]
                ${plan.popular 
                  ? "ring-2 ring-emerald-400/40 scale-[1.03] md:-translate-y-6 shadow-emerald-500/20" 
                  : "shadow-black/20"
                }
                ${plan.cardClass}
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-base text-gray-300 mb-5">{plan.subtitle}</p>
                  
                  {/* Pricing Display */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-lg text-gray-400 line-through">₹{plan.originalPrice.toLocaleString()}</span>
                    <span className="text-sm bg-red-500/20 text-red-400 px-3 py-1.5 rounded-full font-semibold backdrop-blur-sm">
                      Save ₹{plan.save.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex items-end justify-center mb-4">
                    <span className="text-xl text-emerald-400 font-bold">₹</span>
                    <span className={`font-bold ${plan.popular ? 'text-5xl text-emerald-400' : 'text-4xl text-white'}`}>
                      {(isAnnual ? plan.price * 0.8 : plan.price).toLocaleString()}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-400 mb-4">One-time payment • Free installation</p>
                  <p className="text-base text-gray-200 mb-8 leading-relaxed">{plan.description}</p>
                  
                  {/* Enhanced CTA Button */}
                  <a
                    href="tel:+919600840058"
                    className={`w-full py-4 rounded-xl text-lg font-semibold transition-all duration-300 text-center flex items-center justify-center gap-3 backdrop-blur-sm hover:scale-105 ${plan.buttonClass}`}
                  >
                    <Phone className="w-5 h-5" />
                    Get Started
                  </a>
                </div>

                {/* Enhanced Features Section */}
                <div className="border-t border-white/20 pt-6">
                  <h4 className="text-base font-bold text-white mb-5">Everything included:</h4>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-base text-gray-200 leading-relaxed">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        </div>
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

      {/* GLASSY CTA SECTION */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto relative">
          {/* Background Glow Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
          <div className="absolute top-4 left-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
          
          {/* Main Glass Card */}
          <div className="relative bg-white/[0.08] backdrop-blur-2xl rounded-3xl border border-white/20 p-12 text-center shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to Protect Your Investment?
              </h2>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands who trust SafePark for premium protection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a 
                  href="tel:+919600840058"
                  className="group bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/30 backdrop-blur-sm inline-flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5 transition-transform group-hover:scale-110" />
                  Get Free Quote Now
                </a>
                <a 
                  href="https://wa.me/919600840058"
                  className="group bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm inline-flex items-center justify-center gap-3"
                >
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  WhatsApp Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
