'use client';

import { Shield, Umbrella, Zap, UserCheck, CheckCircle2, Star, ArrowRight, Phone } from 'lucide-react';

export default function FeaturesPage() {
  return (
    <div className="bg-gradient-to-br from-neutral-900 via-slate-900 to-neutral-800 min-h-screen">
      
      {/* HERO SECTION - FEATURES */}
      <section className="pt-32 pb-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4" />
            Premium Protection Technology
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
            Advanced Protection Features for 
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Modern Vehicles</span>
          </h1>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            SafePark combines cutting-edge materials with innovative design to deliver unmatched protection 
            for your valuable investment. Every feature is engineered for durability and peace of mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919600840058"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Free Quote
            </a>
            
            <a 
              href="/pricing"
              className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ENHANCED FEATURES SECTION - ENTERPRISE GRADE */}
      <section className="py-12 px-6 md:px-12 lg:px-20 relative">
        {/* Background Glass Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-emerald-500/5 to-purple-500/5 backdrop-blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium backdrop-blur-sm">
              ⚡ Premium Protection Technology
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-6">
              Complete Protection for Every Risk
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Four layers of premium defense engineered for your vehicle's safety
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Shield className="w-12 h-12 mb-6 text-red-400" />, 
                title: "Fire Protection", 
                desc: "Heat & flame resistant materials with advanced coating technology that withstands extreme temperatures",
                highlight: "2000°F Resistant",
                features: ["Heat resistant fabric", "Flame retardant coating", "Emergency protection"]
              },
              { 
                icon: <Umbrella className="w-12 h-12 mb-6 text-blue-400" />, 
                title: "Rain Protection", 
                desc: "100% waterproof coating ensures complete weather resistance in all conditions",
                highlight: "100% Waterproof",
                features: ["Waterproof coating", "Quick water drainage", "UV resistant"]
              },
              { 
                icon: <Zap className="w-12 h-12 mb-6 text-yellow-400" />, 
                title: "Scratch-Proof", 
                desc: "Durable fabric protection prevents surface damage, dings, and scratches from daily hazards",
                highlight: "Military Grade",
                features: ["Scratch resistant", "Impact protection", "Tear resistant fabric"]
              },
              { 
                icon: <UserCheck className="w-12 h-12 mb-6 text-green-400" />, 
                title: "Family Safe", 
                desc: "Rounded edges and stable design prioritize child safety with no sharp corners",
                highlight: "Child Safe Design",
                features: ["Rounded corners", "Stable structure", "Non-toxic materials"]
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="group relative"
              >
                {/* Enhanced Glass Card */}
                <div className="relative bg-white/[0.08] backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl text-center transition-all duration-500 hover:scale-105 hover:bg-white/[0.12] hover:shadow-emerald-500/20 min-h-[400px] flex flex-col justify-between">
                  
                  {/* Highlight Badge */}
                  <div className="absolute -top-3 right-4">
                    <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold">
                      {feature.highlight}
                    </div>
                  </div>
                  
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm mb-6">{feature.desc}</p>
                    
                    {/* Feature List */}
                    <div className="text-left">
                      <ul className="space-y-2">
                        {feature.features.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-gray-200">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Bottom Trust Signal */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>2-Year Warranty</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Trust Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span>4.9/5 Customer Rating</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <span>2,000+ Installations</span>
              <div className="w-px h-4 bg-gray-600"></div>
              <span>Made in India</span>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED FEATURES BREAKDOWN */}
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-6">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Every SafePark installation comes with premium materials and professional-grade components
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Premium Materials",
                items: [
                  { label: "Fabric Type", value: "Oxford 600D Waterproof" },
                  { label: "Frame Material", value: "Galvanized Steel" },
                  { label: "UV Protection", value: "100% UV Resistant" },
                  { label: "Temperature Range", value: "-20°C to +80°C" },
                  { label: "Wind Resistance", value: "Up to 120 km/h" },
                  { label: "Water Rating", value: "IPX7 Waterproof" }
                ]
              },
              {
                title: "Installation & Warranty",
                items: [
                  { label: "Installation Time", value: "2-4 Hours" },
                  { label: "Professional Team", value: "Certified Installers" },
                  { label: "Warranty Period", value: "2-Year Comprehensive" },
                  { label: "Maintenance", value: "Annual Check-up" },
                  { label: "Support", value: "24/7 Customer Care" },
                  { label: "Guarantee", value: "100% Satisfaction" }
                ]
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-white/[0.06] backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">{section.title}</h3>
                <div className="space-y-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                      <span className="text-gray-300 font-medium">{item.label}</span>
                      <span className="text-emerald-400 font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPACT CTA SECTION - MUCH SMALLER */}
      <section className="py-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-white/[0.06] backdrop-blur-2xl rounded-2xl border border-white/20 p-6 text-center shadow-2xl">
            <h2 className="text-xl font-bold text-white mb-2">
              Ready to Experience Premium Protection?
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Get your personalized quote and join thousands of satisfied customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="tel:+919600840058"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Get Free Quote Now
              </a>
              <a 
                href="/pricing"
                className="bg-white/10 border border-white/30 text-white hover:bg-white/20 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <ArrowRight className="w-4 h-4" />
                View Pricing Plans
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
