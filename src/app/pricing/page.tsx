'use client';

import { useState } from 'react';
import { Shield, Check, Phone, ArrowRight, Star, Users, Award, Zap } from 'lucide-react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      id: 1,
      name: "Essential",
      subtitle: "Perfect for compact cars",
      price: 16500,
      originalPrice: 18500,
      description: "Ideal for city cars and compact vehicles",
      features: [
        "5.5m × 2.5m × 2.3m coverage",
        "Premium galvanized steel frame",
        "Oxford 600D waterproof fabric",
        "Professional installation (2 hours)",
        "Perfect for Swift, i20, City, Polo",
        "2-year comprehensive warranty",
        "Free maintenance inspection"
      ],
      popular: false,
      gradient: "from-slate-600/20 to-slate-800/40",
      borderColor: "border-slate-500/30",
      buttonStyle: "border-2 border-slate-400 text-slate-300 hover:bg-slate-400 hover:text-slate-900"
    },
    {
      id: 2,
      name: "Professional",
      subtitle: "Most popular choice",
      price: 18500,
      originalPrice: 22000,
      description: "Perfect for sedans and mid-size SUVs",
      features: [
        "6.0m × 2.6m × 2.5m coverage",
        "Heavy-duty galvanized frame",
        "Premium Oxford fabric with UV coating",
        "Expert installation with site prep",
        "Ideal for Camry, Creta, XUV500, Innova",
        "Extended 3-year warranty",
        "Priority customer support",
        "Free annual maintenance"
      ],
      popular: true,
      gradient: "from-emerald-600/30 to-cyan-600/50",
      borderColor: "border-emerald-400/60",
      buttonStyle: "bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white"
    },
    {
      id: 3,
      name: "Premium",
      subtitle: "For luxury vehicles",
      price: 21500,
      originalPrice: 25000,
      description: "Premium protection for large SUVs",
      features: [
        "6.5m × 2.8m × 2.5m coverage",
        "Ultra-strong galvanized frame",
        "Military-grade fabric protection",
        "White-glove installation service",
        "Perfect for Fortuner, X5, Range Rover",
        "Lifetime structural warranty",
        "24/7 premium support hotline",
        "Quarterly maintenance included"
      ],
      popular: false,
      gradient: "from-purple-600/20 to-indigo-800/40",
      borderColor: "border-purple-500/30",
      buttonStyle: "border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-purple-900"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-1/4 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8 backdrop-blur-sm">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </div>
            <span>Trusted by 2,000+ customers</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Choose Your
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Protection Plan
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            Premium carport solutions engineered for every vehicle. All plans include professional installation, comprehensive warranty, and lifetime support.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-lg font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              One-time Payment
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none ${
                isAnnual ? 'bg-emerald-500' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-9' : 'translate-x-1'
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

      {/* Pricing Cards */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-end">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 hover:scale-[1.02] ${
                  plan.popular 
                    ? `${plan.borderColor} shadow-2xl shadow-emerald-500/20 lg:-translate-y-8 ring-1 ring-emerald-400/20` 
                    : `${plan.borderColor} shadow-xl hover:shadow-2xl`
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">{plan.subtitle}</p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-sm text-gray-500 line-through">₹{plan.originalPrice.toLocaleString()}</span>
                      <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">
                        Save ₹{(plan.originalPrice - plan.price).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl text-emerald-400">₹</span>
                      <span className={`font-bold ${plan.popular ? 'text-5xl text-emerald-400' : 'text-4xl text-white'}`}>
                        {(isAnnual ? plan.price * 0.8 : plan.price).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      {isAnnual ? 'Annual payment' : 'One-time payment'} • Free installation
                    </p>
                  </div>

                  <p className="text-gray-300 text-sm mb-8">{plan.description}</p>

                  {/* CTA Button */}
                  <a
                    href="tel:+919600840058"
                    className={`w-full block py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 text-center shadow-lg ${plan.buttonStyle}`}
                  >
                    Get Started
                  </a>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  <h4 className="text-white font-semibold mb-4">Everything included:</h4>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span className="text-sm text-gray-300 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, number: "2,000+", label: "Happy Customers" },
              { icon: <Award className="w-8 h-8" />, number: "15+", label: "Cities Served" },
              { icon: <Shield className="w-8 h-8" />, number: "99.8%", label: "Satisfaction Rate" },
              { icon: <Zap className="w-8 h-8" />, number: "24/7", label: "Support Available" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-400">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-12 border border-white/10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Protect Your Investment?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust SafePark with their precious vehicles. Get started today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+919600840058" 
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/25"
              >
                <Phone className="w-5 h-5 transition-transform group-hover:scale-110" />
                Get Free Quote Now
              </a>
              <a 
                href="https://wa.me/919600840058" 
                className="group inline-flex items-center justify-center gap-3 border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                WhatsApp Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
