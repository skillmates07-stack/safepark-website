'use client';

import { Shield, Umbrella, Zap, UserCheck, CheckCircle2, Star, ArrowRight, Phone, Award, Clock, MapPin } from 'lucide-react';

export default function FeaturesPage() {
  return (
    <div className="bg-gradient-to-br from-neutral-900 via-slate-900 to-neutral-800 min-h-screen">
      
      {/* HERO SECTION - ENHANCED CREATIVE */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium backdrop-blur-sm">
            <Award className="w-4 h-4" />
            Premium Protection Technology
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Advanced Protection Features for 
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"> Modern Vehicles</span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto">
            SafePark combines cutting-edge materials with innovative design to deliver unmatched protection 
            for your valuable investment. Every feature is engineered for durability and peace of mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:+919600840058"
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-10 py-4 rounded-xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Free Quote
            </a>
            
            <a 
              href="/pricing"
              className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-10 py-4 rounded-xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Enhanced Trust Bar */}
          <div className="flex items-center justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>24/7 Support</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>2-Year Warranty</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Made in India</span>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED FEATURES SECTION - CREATIVE ENTERPRISE GRADE */}
      <section className="py-16 px-6 md:px-12 lg:px-20 relative">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/8 via-emerald-500/8 to-purple-500/8 backdrop-blur-3xl"></div>
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium backdrop-blur-sm">
              ⚡ Four Layers of Premium Defense
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Complete Protection for Every Risk
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Engineered with military-grade materials and cutting-edge technology for ultimate vehicle safety
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { 
                icon: <Shield className="w-14 h-14 mb-6 text-red-400" />, 
                title: "Fire Protection", 
                desc: "Heat & flame resistant materials with advanced coating technology that withstands extreme temperatures up to 2000°F",
                highlight: "2000°F Resistant",
                features: ["Heat resistant fabric", "Flame retardant coating", "Emergency protection"],
                bgGradient: "from-red-500/10 to-orange-500/10"
              },
              { 
                icon: <Umbrella className="w-14 h-14 mb-6 text-blue-400" />, 
                title: "Rain Protection", 
                desc: "100% waterproof coating ensures complete weather resistance in all conditions with IPX7 rating",
                highlight: "100% Waterproof",
                features: ["Waterproof coating", "Quick water drainage", "UV resistant"],
                bgGradient: "from-blue-500/10 to-cyan-500/10"
              },
              { 
                icon: <Zap className="w-14 h-14 mb-6 text-yellow-400" />, 
                title: "Scratch-Proof", 
                desc: "Military-grade fabric protection prevents surface damage, dings, and scratches from daily hazards",
                highlight: "Military Grade",
                features: ["Scratch resistant", "Impact protection", "Tear resistant fabric"],
                bgGradient: "from-yellow-500/10 to-amber-500/10"
              },
              { 
                icon: <UserCheck className="w-14 h-14 mb-6 text-green-400" />, 
                title: "Family Safe", 
                desc: "Child-safe design with rounded edges, stable structure, and non-toxic materials for complete peace of mind",
                highlight: "Child Safe Design",
                features: ["Rounded corners", "Stable structure", "Non-toxic materials"],
                bgGradient: "from-green-500/10 to-emerald-500/10"
              }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="group relative"
              >
                {/* Enhanced Glass Card with Creative Elements */}
                <div className={`relative bg-white/[0.08] backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl text-center transition-all duration-500 hover:scale-105 hover:bg-white/[0.12] hover:shadow-2xl min-h-[480px] flex flex-col justify-between overflow-hidden`}>
                  
                  {/* Creative Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Enhanced Highlight Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl backdrop-blur-sm border border-white/20">
                      {feature.highlight}
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">{feature.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm mb-8">{feature.desc}</p>
                    
                    {/* Enhanced Feature List */}
                    <div className="text-left mb-6">
                      <ul className="space-y-3">
                        {feature.features.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-gray-200">
                            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Enhanced Bottom Trust Signal */}
                  <div className="relative z-10 pt-6 border-t border-white/20">
                    <div className="flex items-center justify-center gap-2 text-emerald-400 text-sm font-semibold">
                      <Award className="w-4 h-4" />
                      <span>2-Year Warranty</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced Trust Section with Creative Elements */}
          <div className="relative">
            <div className="bg-white/[0.06] backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">4.9/5 Rating</div>
                    <div className="text-gray-400 text-sm">Customer Reviews</div>
                  </div>
                </div>
                
                <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                
                <div className="text-center">
                  <div className="text-emerald-400 font-bold text-2xl">2,000+</div>
                  <div className="text-gray-400 text-sm">Installations</div>
                </div>
                
                <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                
                <div className="text-center">
                  <div className="text-white font-bold text-lg">Made in India</div>
                  <div className="text-gray-400 text-sm">Premium Quality</div>
                </div>
                
                <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                
                <div className="text-center">
                  <div className="text-emerald-400 font-bold text-lg">24/7 Support</div>
                  <div className="text-gray-400 text-sm">Customer Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS - CREATIVE ENHANCEMENT */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Technical Excellence
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Every SafePark installation comes with premium materials and professional-grade components
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Materials",
                icon: <Shield className="w-8 h-8 text-emerald-400 mb-4" />,
                items: [
                  { label: "Fabric Type", value: "Oxford 600D Waterproof" },
                  { label: "Frame Material", value: "Galvanized Steel" },
                  { label: "UV Protection", value: "100% UV Resistant" },
                  { label: "Temperature Range", value: "-20°C to +80°C" }
                ]
              },
              {
                title: "Performance Specs",
                icon: <Zap className="w-8 h-8 text-yellow-400 mb-4" />,
                items: [
                  { label: "Wind Resistance", value: "Up to 120 km/h" },
                  { label: "Water Rating", value: "IPX7 Waterproof" },
                  { label: "Fire Resistance", value: "2000°F Rated" },
                  { label: "Impact Rating", value: "Military Grade" }
                ]
              },
              {
                title: "Service & Support",
                icon: <UserCheck className="w-8 h-8 text-blue-400 mb-4" />,
                items: [
                  { label: "Installation Time", value: "2-4 Hours" },
                  { label: "Warranty Period", value: "2-Year Comprehensive" },
                  { label: "Support", value: "24/7 Customer Care" },
                  { label: "Guarantee", value: "100% Satisfaction" }
                ]
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-white/[0.08] backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl hover:scale-105 transition-all duration-300">
                {section.icon}
                <h3 className="text-2xl font-bold text-white mb-6">{section.title}</h3>
                <div className="space-y-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-white/10 last:border-b-0">
                      <span className="text-gray-300 font-medium">{item.label}</span>
                      <span className="text-emerald-400 font-bold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPACT CTA SECTION */}
      <section className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white/[0.06] backdrop-blur-2xl rounded-3xl border border-white/20 p-8 text-center shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to Experience Premium Protection?
            </h2>
            <p className="text-base text-gray-300 mb-6">
              Get your personalized quote and join thousands of satisfied customers who chose SafePark.
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
                href="/pricing"
                className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                View Pricing Plans
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
