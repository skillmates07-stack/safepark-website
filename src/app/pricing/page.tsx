'use client';

import { useState } from 'react';
import { CheckCircle2, Phone, ArrowRight, Shield, Umbrella, Zap, Star, Users, Award, Clock, Sparkles, Crown } from 'lucide-react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      id: 'essential',
      name: "Essential",
      subtitle: "Perfect for compact cars",
      monthlyPrice: 18500,
      annualPrice: 14800,
      originalPrice: 20000,
      save: 5200,
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      popular: false,
      features: [
        "5.5m × 2.5m × 2.3m coverage",
        "Premium galvanized steel frame", 
        "Oxford 600D waterproof fabric",
        "Professional installation (2 hours)",
        "Perfect for Swift, i20, City",
        "2-year comprehensive warranty"
      ],
      highlights: ["Basic Protection", "Quick Setup", "2-Year Warranty"]
    },
    {
      id: 'professional',
      name: "Professional",
      subtitle: "Most popular choice",
      monthlyPrice: 22000,
      annualPrice: 17600,
      originalPrice: 25000,
      save: 7400,
      icon: <Umbrella className="w-8 h-8 text-emerald-400" />,
      popular: true,
      features: [
        "6.0m × 2.6m × 2.5m coverage",
        "Heavy-duty galvanized frame",
        "Premium Oxford fabric with UV coating",
        "Expert installation with site prep",
        "Ideal for Camry, Creta, XUV500",
        "3-year warranty + VIP support"
      ],
      highlights: ["Advanced Protection", "VIP Support", "3-Year Warranty"]
    },
    {
      id: 'premium',
      name: "Premium",
      subtitle: "For luxury vehicles",
      monthlyPrice: 25000,
      annualPrice: 20000,
      originalPrice: 28000,
      save: 8000,
      icon: <Crown className="w-8 h-8 text-yellow-400" />,
      popular: false,
      features: [
        "6.5m × 2.8m × 2.5m coverage",
        "Ultra-strong galvanized frame",
        "Military-grade fabric protection",
        "White-glove installation",
        "Designed for Fortuner, X5, Range Rover",
        "Lifetime structural warranty"
      ],
      highlights: ["Ultimate Protection", "White-Glove Service", "Lifetime Warranty"]
    }
  ];

  const getPrice = (plan: any) => isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const getSavings = (plan: any) => isAnnual ? plan.save : Math.floor(plan.save * 0.6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Trusted by 2,000+ car owners across India
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Choose Your 
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"> SafePark Plan</span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            Professional installation and comprehensive warranty included. 
            <span className="text-emerald-400 font-semibold"> No hidden fees, no surprises.</span>
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-lg font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              One-time Payment
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none ${isAnnual ? 'bg-emerald-500' : 'bg-slate-600'}`}
            >
              <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-9' : 'translate-x-1'}`} />
            </button>
            <div className="text-left">
              <span className={`text-lg font-medium transition-colors ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Annual Plan
              </span>
              <div className="text-sm text-emerald-400 font-semibold">Save up to 30%</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="pb-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl border backdrop-blur-xl shadow-2xl transition-all duration-500 hover:scale-[1.02] ${
                  plan.popular 
                    ? "bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent border-emerald-400/50 ring-2 ring-emerald-400/30 scale-[1.05] lg:-translate-y-4" 
                    : "bg-white/[0.03] border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.subtitle}</p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-lg text-gray-500 line-through">Rs.{plan.originalPrice.toLocaleString()}</span>
                        <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold">
                          Save Rs.{getSavings(plan).toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="flex items-end justify-center gap-1 mb-2">
                        <span className="text-2xl font-bold text-emerald-400">Rs.</span>
                        <span className={`text-5xl font-bold ${plan.popular ? 'text-emerald-400' : 'text-white'}`}>
                          {getPrice(plan).toLocaleString()}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-400">One-time payment • Free installation</p>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="tel:+919600840058"
                      className={`w-full py-4 px-6 rounded-xl text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 ${
                        plan.popular
                          ? "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white shadow-lg hover:shadow-emerald-500/30"
                          : "bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:border-white/50"
                      }`}
                    >
                      <Phone className="w-5 h-5" />
                      Get Started
                    </a>
                  </div>

                  {/* Features */}
                  <div className="border-t border-white/20 pt-6">
                    <h4 className="text-sm font-bold text-white mb-4 text-center">Everything included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Highlights */}
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {plan.highlights.map((highlight, i) => (
                          <span key={i} className="bg-white/10 text-emerald-300 px-2 py-1 rounded-full text-xs font-medium">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="pb-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/20 p-8 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center text-center lg:text-left">
              
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div>
                  <div className="text-white font-bold text-lg">4.9/5 Rating</div>
                  <div className="text-gray-400 text-sm">2,000+ Reviews</div>
                </div>
              </div>
              
              <div className="text-center">
                <Users className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-emerald-400 font-bold text-2xl">2,000+</div>
                <div className="text-gray-400 text-sm">Cars Protected</div>
              </div>
              
              <div className="text-center">
                <Award className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-white font-bold text-lg">Made in India</div>
                <div className="text-gray-400 text-sm">Premium Quality</div>
              </div>
              
              <div className="text-center">
                <Clock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-emerald-400 font-bold text-lg">24/7 Support</div>
                <div className="text-gray-400 text-sm">Customer Care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-20 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10 rounded-3xl border border-white/20 p-8 lg:p-12 backdrop-blur-xl shadow-2xl">
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Protect Your Investment?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who chose SafePark for premium protection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919600840058"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/30 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Get Free Quote Now
              </a>
              <a 
                href="https://wa.me/919600840058"
                className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                WhatsApp Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
