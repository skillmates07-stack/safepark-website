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
    <main className="pt-[56px] bg-gradient-to-br from-[#0a0f0a] via-[#0f1411] to-[#141a14] min-h-screen">
      {/* BALANCED HERO SECTION */}
      <section className="py-10 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight">
            <span className="text-white">Find Your Perfect</span>{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
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
                  isAnnual ? 'translate-x-6 bg-gradient-to-r from-green-400 to-green-500' : 'translate-x-1 bg-white'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
              <span className="ml-1 text-xs bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent font-bold">
                20% off
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* BALANCED PRICING CARDS */}
      <section className="px-4 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-slate-700/50 to-slate-800/70 border-green-400/40 shadow-2xl shadow-green-500/15 ring-1 ring-green-400/25 scale-105 translate-y-[-2rem]' 
                    : 'bg-gradient-to-b from-slate-700/40 to-slate-800/60 border-slate-500/40 shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:border-slate-400/60'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
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
                    <div className={`font-black mb-2 ${plan.popular ? 'text-5xl text-green-400' : 'text-4xl text-white'}`}>
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
                    className="w-full block py-3 px-6 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 shadow-2xl shadow-green-500/20 text-white font-bold text-sm rounded-xl transition-all duration-300 hover:scale-105 text-center"
                  >
                    Get Started
                  </a>
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
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
      <section className="px-4 lg:px-8 py-16 bg-gradient-to-br from-slate-800/30 to-slate-700/20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">What's Included with Every SafePark Model</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "🛡️", title: "Premium Materials", desc: "Galvanized Iron + Oxford 600D" },
              { icon: "⚡", title: "Quick Installation", desc: "Professional setup in 2-3 hours" },
              { icon: "🌧️", title: "Weather Protection", desc: "100% UV & Rain Protection" },
              { icon: "🛠️", title: "2-Year Warranty", desc: "Full parts & service warranty" }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-tr from-green-500 to-green-400 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-xl">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
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
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <a 
              href="tel:+919600840058" 
              className="group flex items-center justify-center gap-3 w-full sm:flex-1 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-green-600/20 hover:shadow-green-500/30 hover:scale-[1.02] min-h-[60px]"
            >
              <div className="flex items-center justify-center w-6 h-6">
                <svg 
                  className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <span className="leading-none">Call for Custom Quote</span>
            </a>

            <a 
              href="https://wa.me/919600840058" 
              className="group flex items-center justify-center gap-3 w-full sm:flex-1 bg-slate-700/60 backdrop-blur-sm border border-slate-500/50 hover:border-slate-400/70 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:bg-slate-600/70 min-h-[60px]"
            >
              <div className="flex items-center justify-center w-6 h-6">
                <svg 
                  className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-200" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                </svg>
              </div>
              <span className="leading-none">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
