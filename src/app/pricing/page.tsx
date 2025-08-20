'use client';

import { useState } from 'react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const pricingPlans = [
    {
      id: 1,
      name: "Compact",
      title: "Model 1 - Compact",
      monthlyPrice: "₹16,500",
      subtitle: "Perfect for small cars and compact SUVs",
      color: "from-blue-500 to-blue-400",
      borderColor: "border-blue-500/30",
      buttonColor: "bg-blue-600 hover:bg-blue-500",
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
      title: "Model 2 - Standard",
      monthlyPrice: "₹18,500",
      subtitle: "Ideal for sedans and mid-size SUVs",
      color: "from-purple-500 to-purple-400",
      borderColor: "border-purple-500/30",
      buttonColor: "bg-purple-600 hover:bg-purple-500",
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
      title: "Model 3 - Large", 
      monthlyPrice: "₹21,500",
      subtitle: "Perfect for large SUVs and premium vehicles",
      color: "from-red-500 to-red-400",
      borderColor: "border-red-500/30",
      buttonColor: "bg-red-600 hover:bg-red-500",
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
    <main className="pt-[56px] bg-gradient-to-br from-[#0B1426] via-[#162033] to-[#1a1f3a] min-h-screen">
      {/* HERO SECTION */}
      <section className="py-8 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            <span className="text-white">Get the</span>{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              perfect fit
            </span>{' '}
            <span className="text-white">at your price point</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Consolidate your vehicle protection into a centralized control center. No credit card required.
          </p>

          {/* PRICING TOGGLE */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              One-time
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-colors focus:outline-none"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
              <span className="ml-1 text-xs bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-bold">
                20% off
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="px-4 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20 ring-2 ring-purple-500/30' 
                    : `${plan.borderColor} shadow-lg hover:shadow-xl`
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Get Started
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{plan.subtitle}</p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-4xl font-black text-white mb-1">
                      {isAnnual 
                        ? `₹${(parseInt(plan.monthlyPrice.replace('₹', '').replace(',', '')) * 0.8).toLocaleString()}`
                        : plan.monthlyPrice
                      }
                    </div>
                    <p className="text-sm text-gray-400">
                      + {isAnnual ? 'annual' : 'one-time'} installation
                    </p>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="tel:+919600840058"
                    className={`w-full block py-3 px-6 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500' 
                        : plan.buttonColor
                    } text-white font-bold text-sm rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-center`}
                  >
                    {plan.popular ? 'Get Started' : `Schedule a demo`}
                  </a>
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-4 lg:px-8 py-16 bg-gradient-to-br from-slate-900/50 to-slate-800/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">What's Included with Every SafePark Model</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "🛡️", title: "Premium Materials", desc: "Galvanized Iron + Oxford 600D", color: "from-blue-400 to-cyan-400" },
              { icon: "⚡", title: "Quick Installation", desc: "Professional setup in 2-3 hours", color: "from-orange-400 to-yellow-400" },
              { icon: "🌧️", title: "Weather Protection", desc: "100% UV & Rain Protection", color: "from-green-400 to-emerald-400" },
              { icon: "🛠️", title: "2-Year Warranty", desc: "Full parts & service warranty", color: "from-purple-400 to-pink-400" }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className={`w-14 h-14 bg-gradient-to-tr ${feature.color} rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Protect Your Vehicle?</h2>
          <p className="text-gray-300 text-lg mb-10">Get your custom quote today with free consultation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <a href="tel:+919600840058" className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 text-center hover:scale-105 shadow-lg">
              📞 Call for Custom Quote
            </a>
            <a href="https://wa.me/919600840058" className="flex-1 bg-slate-800 border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 text-center hover:scale-105">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
