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
    <div className="scroll-smooth bg-gradient-to-br from-[#0f172a] via-[#0f2d2a] to-[#052e16] min-h-screen">
      <Navbar />
      
      {/* HERO SECTION - Same structure as homepage */}
      <section className="min-h-screen flex items-center pt-8 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-8">
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-4xl mx-auto">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent mt-3">
                SafePark Protection Plan
              </span>
            </h1>
            
            {/* Subtitle */} 
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Every SafePark includes a strong metal frame and weatherproof fabric for lasting protection.
            </p>

            {/* Pricing Toggle */}
            <div className="flex items-center justify-center gap-4 mt-8">
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

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-b from-slate-700/50 to-slate-800/70 border-emerald-400/40 shadow-2xl shadow-emerald-500/15 ring-1 ring-emerald-400/25 scale-105' 
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
        </div>
      </section>

      {/* Rest of sections follow same logic as homepage... */}
    </div>
  );
}
