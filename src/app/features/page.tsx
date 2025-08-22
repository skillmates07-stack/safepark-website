'use client';

import { useState } from 'react';

export default function Features() {
  const features = [
    { 
      icon: '✨', 
      title: 'Strong & Durable Frame', 
      desc: 'Premium reinforced structure built to last for years of reliable protection',
      gradient: 'from-amber-500/10 to-yellow-500/5',
      border: 'border-amber-400/20',
      iconBg: 'from-amber-500 to-amber-400',
      hoverShadow: 'hover:shadow-amber-500/20'
    },
    { 
      icon: '🔵', 
      title: 'Premium Weather-Resistant Fabric', 
      desc: 'Advanced waterproof coating protects your vehicle from rain, UV, and harsh weather',
      gradient: 'from-blue-500/10 to-cyan-500/5',
      border: 'border-blue-400/20',
      iconBg: 'from-blue-500 to-blue-400',
      hoverShadow: 'hover:shadow-blue-500/20'
    },
    { 
      icon: '⚡', 
      title: 'Hassle-Free Quick Setup', 
      desc: 'Professional installation completed efficiently with minimal disruption to your day',
      gradient: 'from-purple-500/10 to-pink-500/5',
      border: 'border-purple-400/20',
      iconBg: 'from-purple-500 to-purple-400',
      hoverShadow: 'hover:shadow-purple-500/20'
    },
    { 
      icon: '👶', 
      title: 'Family-Safe Design', 
      desc: 'Thoughtfully designed with rounded edges and stable construction for complete safety',
      gradient: 'from-green-500/10 to-emerald-500/5',
      border: 'border-green-400/20',
      iconBg: 'from-green-500 to-green-400',
      hoverShadow: 'hover:shadow-green-500/20'
    }
  ];

  return (
    <main className="pt-[56px] bg-gradient-to-br from-[#0a0f0a] via-[#0f1411] to-[#141a14] min-h-screen">
      {/* PREMIUM HERO SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* MAIN CONTENT - REFINED COPY */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/20 px-4 py-2 text-sm font-semibold text-green-300 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Made in India • Premium Quality
              </span>

              <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Everyday Risks.{' '}
                <span className="bg-gradient-to-r from-green-400 via-green-300 to-emerald-300 bg-clip-text text-transparent">
                  Lasting Protection.
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                Your vehicle faces daily challenges — from unpredictable weather to everyday wear. SafePark delivers 
                <span className="text-green-400 font-semibold"> complete peace of mind</span> with premium protection designed for modern life.
              </p>
            </div>

            {/* PREMIUM FEATURE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map(({ icon, title, desc, gradient, border, iconBg, hoverShadow }) => (
                <div
                  key={title}
                  className={`group flex items-start gap-5 rounded-2xl bg-gradient-to-br ${gradient} backdrop-blur-md border ${border} p-6 transition-all duration-500 hover:scale-[1.02] ${hoverShadow} hover:border-opacity-40`}
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${iconBg} shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl filter drop-shadow-sm" role="img" aria-label={title}>
                      {icon}
                    </span>
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-bold text-white tracking-normal group-hover:text-gray-100 transition-colors duration-300">{title}</h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ENHANCED SOCIAL PROOF */}
            <div className="flex items-center gap-8 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">⭐</span>
                  ))}
                </div>
                <span className="font-semibold text-white">Trusted by 2,000+ vehicle owners</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <span className="text-green-400 font-semibold">Comprehensive 2-Year Protection</span>
            </div>

            {/* PREMIUM SPECIAL OFFER */}
            <div className="rounded-2xl bg-gradient-to-r from-amber-600/15 via-orange-600/10 to-red-600/10 border border-amber-500/30 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔥</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-amber-200 text-lg">Limited Time: August Special Offer</h3>
                    <span className="px-3 py-1 bg-red-500/20 border border-red-400/30 rounded-full text-red-300 text-sm font-medium">
                      Only 50 spots left
                    </span>
                  </div>
                  <p className="text-amber-300 leading-relaxed">
                    Complete professional installation + expert consultation at no extra cost. 
                    <span className="font-semibold text-amber-200"> Save ₹3,000</span> on your SafePark protection system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* REDESIGNED SIDEBAR CARD - PREMIUM STYLE WITH UPDATED COPY */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative">
                <span className="absolute -top-3 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg z-10">
                  100% UV Protected
                </span>
                
                <div className="rounded-3xl border border-slate-600/30 bg-gradient-to-b from-slate-800/50 via-slate-800/40 to-slate-900/60 p-8 backdrop-blur-md shadow-2xl shadow-black/20">
                  <div className="text-center space-y-6">
                    {/* PREMIUM ICON */}
                    <div className="w-24 h-24 bg-gradient-to-tr from-green-500 via-green-400 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-green-500/30">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0V8.25a1.5 1.5 0 013 0v10.5zM12 18.75a1.5 1.5 0 01-3 0V8.25a1.5 1.5 0 013 0v10.5zM15.75 18.75a1.5 1.5 0 01-3 0V8.25a1.5 1.5 0 013 0v10.5z" />
                      </svg>
                    </div>

                    {/* PREMIUM TYPOGRAPHY */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-black text-white tracking-tight">SafePark Premium Protection</h3>
                      <p className="text-green-400 font-semibold text-lg">Complete Vehicle Care System</p>
                    </div>

                    {/* REFINED FEATURE LIST - UPDATED WITH LIFESTYLE-FRIENDLY COPY */}
                    <div className="space-y-4 text-left">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <span className="text-lg">✨</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">Strong & Durable Frame</div>
                          <div className="text-gray-400 text-sm">Premium reinforced structure</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <span className="text-lg">🔵</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">Premium Weather-Resistant Fabric</div>
                          <div className="text-gray-400 text-sm">Advanced protection coating</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <span className="text-lg">⚡</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">Hassle-Free Quick Setup</div>
                          <div className="text-gray-400 text-sm">Professional installation</div>
                        </div>
                      </div>
                    </div>

                    {/* PREMIUM CTA BUTTON */}
                    <a
                      href="/gallery"
                      className="block w-full rounded-2xl bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 hover:from-green-500 hover:via-green-400 hover:to-emerald-400 py-4 text-center font-bold text-white text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-green-600/30 hover:shadow-green-500/40"
                    >
                      Explore Our Gallery →
                    </a>

                    <div className="flex items-center justify-center gap-4 text-sm">
                      <span className="text-green-400 font-medium">✓ 2-Year Warranty</span>
                      <div className="w-px h-4 bg-gray-600"></div>
                      <span className="text-green-400 font-medium">✓ Free Consultation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ENHANCED CTA SECTION */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Protect Your Investment?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who chose SafePark for premium vehicle protection
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <a 
              href="tel:+919600840058" 
              className="group flex items-center justify-center gap-3 w-full sm:flex-1 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 shadow-2xl shadow-green-600/20 hover:shadow-green-500/30 hover:scale-[1.02]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Get Your Free Quote
            </a>

            <a 
              href="https://wa.me/919600840058" 
              className="group flex items-center justify-center gap-3 w-full sm:flex-1 bg-slate-700/60 backdrop-blur-sm border border-slate-500/50 hover:border-slate-400/70 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] hover:bg-slate-600/70"
            >
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
