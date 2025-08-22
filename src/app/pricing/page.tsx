'use client';

import { useState } from 'react';
import Navbar from '../../components/layout/Navbar';

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
    <>
      <Navbar />
      <main className="pt-[64px] bg-gradient-to-br from-[#0a2419] via-[#15673f] to-[#1f6639] min-h-screen">
        
        {/* HERO SECTION */}
        <section className="pt-8 pb-10 px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight">
              <span className="text-emerald-100">Find Your Perfect</span>{' '}
              <span className="bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
                SafePark
              </span>{' '}
              <span className="text-emerald-100">Protection Plan</span>
            </h1>
            <p className="text-lg text-emerald-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Every SafePark includes a strong metal frame and weatherproof fabric for lasting protection.
            </p>

            {/* PRICING TOGGLE */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-emerald-100' : 'text-emerald-300'}`}>
                One-time
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-emerald-800/50 transition-colors focus:outline-none"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full transition-transform ${
                    isAnnual ? 'translate-x-6 bg-emerald-400' : 'translate-x-1 bg-white'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-emerald-100' : 'text-emerald-300'}`}>
                Annual
                <span className="ml-1 text-xs bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent font-bold">
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
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`relative backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-emerald-900/80 border-emerald-400/60 shadow-2xl shadow-emerald-500/20 ring-1 ring-emerald-400/30 scale-105 translate-y-[-2rem]' 
                      : 'bg-gray-900/60 border-emerald-700/40 shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:border-emerald-600/60'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-emerald-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                        ⭐ Most Popular
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className={`font-bold mb-3 ${plan.popular ? 'text-2xl text-white' : 'text-xl text-emerald-100'}`}>
                      {plan.name}
                    </h3>
                    <p className="text-sm text-emerald-200 mb-4">{plan.subtitle}</p>
                    
                    {/* Price */}
                    <div className="mb-6">
                      <div className={`font-black mb-2 ${plan.popular ? 'text-5xl text-white' : 'text-4xl text-emerald-100'}`}>
                        {isAnnual 
                          ? `₹${(parseInt(plan.monthlyPrice.replace('₹', '').replace(',', '')) * 0.8).toLocaleString()}`
                          : plan.monthlyPrice
                        }
                      </div>
                      <p className="text-sm text-emerald-300">
                        + {isAnnual ? 'annual' : 'one-time'} installation
                      </p>
                    </div>

                    {/* CTA BUTTON */}
                    <a
                      href="tel:+919600840058"
                      className={`w-full block py-3 px-6 font-bold text-sm rounded-xl transition-all duration-300 hover:scale-105 text-center ${
                        plan.popular
                          ? 'bg-white text-emerald-900 hover:bg-gray-100 shadow-xl'
                          : 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-600/30'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-emerald-100 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PREMIUM FEATURES SECTION - 2x2 GRID */}
        <section className="px-4 lg:px-8 py-20 bg-gradient-to-br from-emerald-900/20 via-emerald-800/30 to-teal-800/20 backdrop-blur-sm relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-500/5 to-teal-500/5 pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-3xl lg:text-4xl font-black text-emerald-100 mb-4 text-center tracking-tight">
              What's Included with Every 
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-teal-200 bg-clip-text text-transparent"> SafePark</span> Model
            </h2>
            <p className="text-emerald-200 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
              Premium features designed to provide maximum protection and peace of mind for your vehicle
            </p>
            
            {/* CONSISTENT 2x2 GRID WITH EQUAL SIZING */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Premium Materials Card */}
              <div className="group h-[280px] flex flex-col items-center justify-between p-8 rounded-3xl bg-gradient-to-br from-emerald-900/40 to-emerald-800/30 backdrop-blur-md border border-emerald-700/30 shadow-2xl shadow-emerald-900/20 hover:shadow-emerald-600/30 transition-all duration-500 hover:scale-[1.02] hover:border-emerald-500/40">
                <div className="flex flex-col items-center flex-1 justify-center">
                  <div className="w-20 h-20 bg-gradient-to-tr from-emerald-400 via-emerald-300 to-teal-300 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/40 group-hover:shadow-emerald-400/60 group-hover:scale-110 transition-all duration-500">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-100 mb-3 text-center group-hover:text-emerald-200 transition-colors duration-300">Premium Materials</h3>
                  <p className="text-emerald-200 text-center leading-relaxed text-sm group-hover:text-emerald-100 transition-colors duration-300">Galvanized Iron + Oxford 600D waterproof fabric for maximum durability and longevity</p>
                </div>
              </div>

              {/* Quick Installation Card */}
              <div className="group h-[280px] flex flex-col items-center justify-between p-8 rounded-3xl bg-gradient-to-br from-emerald-900/40 to-emerald-800/30 backdrop-blur-md border border-emerald-700/30 shadow-2xl shadow-emerald-900/20 hover:shadow-emerald-600/30 transition-all duration-500 hover:scale-[1.02] hover:border-emerald-500/40">
                <div className="flex flex-col items-center flex-1 justify-center">
                  <div className="w-20 h-20 bg-gradient-to-tr from-emerald-400 via-emerald-300 to-teal-300 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/40 group-hover:shadow-emerald-400/60 group-hover:scale-110 transition-all duration-500">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-100 mb-3 text-center group-hover:text-emerald-200 transition-colors duration-300">Quick Installation</h3>
                  <p className="text-emerald-200 text-center leading-relaxed text-sm group-hover:text-emerald-100 transition-colors duration-300">Professional setup completed in just 2-3 hours by our certified installation technicians</p>
                </div>
              </div>

              {/* Weather Protection Card - PREMIUM HIGHLIGHT */}
              <div className="group h-[320px] flex flex-col items-center justify-between p-8 rounded-3xl bg-gradient-to-br from-emerald-600/20 via-emerald-500/15 to-teal-500/15 backdrop-blur-md border-2 border-emerald-400/50 shadow-2xl shadow-emerald-500/40 scale-105 hover:scale-110 transition-all duration-500 hover:shadow-emerald-400/60 hover:border-emerald-300/70 relative overflow-hidden">
                {/* Premium glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-3xl blur-xl"></div>
                
                <div className="flex flex-col items-center flex-1 justify-center relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-tr from-emerald-300 via-emerald-200 to-teal-200 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-emerald-400/60 group-hover:shadow-emerald-300/80 group-hover:scale-110 transition-all duration-500">
                    <svg className="w-12 h-12 text-emerald-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-emerald-100 mb-4 text-center group-hover:text-white transition-colors duration-300">Weather Protection</h3>
                  <p className="text-emerald-100 text-center leading-relaxed font-medium mb-4 group-hover:text-white transition-colors duration-300">100% UV & Rain Protection with advanced weatherproof coating technology</p>
                  <div className="px-4 py-2 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full border border-emerald-300/40">
                    <span className="text-emerald-100 text-sm font-bold">⭐ Most Popular Feature</span>
                  </div>
                </div>
              </div>

              {/* 2-Year Warranty Card */}
              <div className="group h-[280px] flex flex-col items-center justify-between p-8 rounded-3xl bg-gradient-to-br from-emerald-900/40 to-emerald-800/30 backdrop-blur-md border border-emerald-700/30 shadow-2xl shadow-emerald-900/20 hover:shadow-emerald-600/30 transition-all duration-500 hover:scale-[1.02] hover:border-emerald-500/40">
                <div className="flex flex-col items-center flex-1 justify-center">
                  <div className="w-20 h-20 bg-gradient-to-tr from-emerald-400 via-emerald-300 to-teal-300 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/40 group-hover:shadow-emerald-400/60 group-hover:scale-110 transition-all duration-500">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-100 mb-3 text-center group-hover:text-emerald-200 transition-colors duration-300">2-Year Warranty</h3>
                  <p className="text-emerald-200 text-center leading-relaxed text-sm group-hover:text-emerald-100 transition-colors duration-300">Complete parts & service warranty with free maintenance and customer support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-emerald-100 mb-4">Ready to Protect Your Vehicle?</h2>
            <p className="text-emerald-200 text-lg mb-10">Get your custom quote today with free consultation</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <a 
                href="tel:+919600840058" 
                className="group flex items-center justify-center gap-3 w-full sm:flex-1 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-emerald-600/30 hover:shadow-emerald-500/40 hover:scale-[1.02] min-h-[60px]"
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
                className="group flex items-center justify-center gap-3 w-full sm:flex-1 bg-emerald-800/60 backdrop-blur-sm border border-emerald-600/50 hover:border-emerald-500/70 text-emerald-100 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:bg-emerald-700/70 min-h-[60px]"
              >
                <div className="flex items-center justify-center w-6 h-6">
                  <svg 
                    className="w-5 h-5 text-emerald-300 group-hover:scale-110 transition-transform duration-200" 
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
    </>
  );
}
