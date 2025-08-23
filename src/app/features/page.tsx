'use client';

import { Shield, Droplets, Zap, Users, Award, Phone, ArrowRight } from 'lucide-react';

export default function FeaturesPage() {
  return (
    <div className="scroll-smooth bg-gradient-to-br from-[#0f172a] via-[#0f2d2a] to-[#052e16] min-h-screen pt-20">
      
      {/* HERO SECTION */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white mb-6">
            Engineering
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Peace of Mind
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Every SafePark is crafted with precision engineering and premium materials. Here's why over 2,000 families trust us to protect their most precious investment.
          </p>
        </div>
      </section>

      {/* MAIN FEATURES GRID */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            
            {/* Feature 1 - Weather Protection */}
            <div className="group">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/50 backdrop-blur-xl rounded-3xl p-12 border border-blue-700/30 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02]">
                <div className="w-20 h-20 bg-blue-500/20 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-blue-500/30 transition-all">
                  <Droplets className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-3xl font-black text-white mb-6">All-Weather Champion</h3>
                <p className="text-lg text-blue-100 leading-relaxed mb-8">
                  From Kerala's monsoons to Rajasthan's dust storms, SafePark handles it all. Our Oxford 600D fabric with advanced coating technology keeps your car pristine through every season.
                </p>
                <div className="space-y-3">
                  {[
                    "100% UV & Rain Protection",
                    "Dust & Sand Resistance", 
                    "Wind Load Tested to 120 km/h",
                    "Temperature Range: -20°C to +80°C"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-blue-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-cyan-400/20 to-teal-300/20 rounded-3xl blur-3xl scale-110 opacity-40"></div>
              <img 
                src="/gallery/weather-protection.jpg" 
                alt="SafePark protecting car in heavy rain"
                className="relative w-full h-[400px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/30 via-emerald-400/20 to-teal-300/20 rounded-3xl blur-3xl scale-110 opacity-40"></div>
              <img 
                src="/gallery/family-safe.jpg" 
                alt="Family with children safely near SafePark"
                className="relative w-full h-[400px] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* Feature 2 - Family Safe */}
            <div className="group order-1 md:order-2">
              <div className="bg-gradient-to-br from-green-900/30 to-green-800/50 backdrop-blur-xl rounded-3xl p-12 border border-green-700/30 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-[1.02]">
                <div className="w-20 h-20 bg-green-500/20 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-green-500/30 transition-all">
                  <Users className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-3xl font-black text-white mb-6">Family-First Design</h3>
                <p className="text-lg text-green-100 leading-relaxed mb-8">
                  Designed by parents, for parents. Every edge is rounded, every component is stable, and every material is non-toxic. Your kids can play freely while your car stays protected.
                </p>
                <div className="space-y-3">
                  {[
                    "Rounded Safety Edges",
                    "Stable Base Design (No Tip Risk)",
                    "Non-Toxic Materials Only",
                    "Child-Safe Locking Mechanisms"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Feature 3 - Professional Service */}
            <div className="group">
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/50 backdrop-blur-xl rounded-3xl p-12 border border-purple-700/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02]">
                <div className="w-20 h-20 bg-purple-500/20 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-purple-500/30 transition-all">
                  <Award className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-3xl font-black text-white mb-6">Professional Excellence</h3>
                <p className="text-lg text-purple-100 leading-relaxed mb-8">
                  From Tamil Nadu's workshops to your driveway, every SafePark represents years of engineering expertise and local craftsmanship. We stand behind our work with industry-leading warranties.
                </p>
                <div className="space-y-3">
                  {[
                    "2-3 Hour Expert Installation",
                    "2-Year Comprehensive Warranty",
                    "Premium Galvanized Frame",
                    "Free Annual Maintenance Check"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-purple-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 via-pink-400/20 to-rose-300/20 rounded-3xl blur-3xl scale-110 opacity-40"></div>
              <img 
                src="/gallery/professional-installation.jpg" 
                alt="Professional SafePark installation team at work"
                className="relative w-full h-[400px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real numbers from real families who chose SafePark for their peace of mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "2,000+", label: "Protected Vehicles", color: "text-emerald-400" },
              { number: "15+", label: "Cities Covered", color: "text-blue-400" },
              { number: "99.8%", label: "Customer Satisfaction", color: "text-green-400" },
              { number: "2 Year", label: "Warranty Promise", color: "text-purple-400" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center bg-gray-900/50 backdrop-blur rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                <div className={`text-4xl md:text-5xl font-black mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-800/40 to-gray-900/60">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience SafePark Today
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to join the SafePark family? Let's protect what matters most to you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:+919600840058" 
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Get Your Free Quote
            </a>
            <a 
              href="https://wa.me/919600840058" 
              className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              <ArrowRight className="w-6 h-6" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
