'use client';

import { useState } from 'react';

export default function Features() {
  const features = [
    { icon: '🔥', title: 'Fire Protection', desc: 'Shields your car from heat and flames' },
    { icon: '💧', title: 'Rain Protection', desc: '100% waterproof coating keeps you dry' },
    { icon: '🛡️', title: 'Scratch-Proof', desc: 'Durable fabric keeps your car looking new' },
    { icon: '👶', title: 'Safe for Kids', desc: 'Rounded edges prevent accidents' },
  ];

  return (
    <main className="pt-[56px] bg-gradient-to-br from-[#0a0f0a] via-[#0f1411] to-[#141a14] min-h-screen font-['Inter',system-ui,sans-serif]">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* IMPROVED MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <span className="inline-block rounded-full bg-green-600 px-4 py-2 text-sm font-medium uppercase tracking-wide text-white">
                Made in India • Premium Quality
              </span>

              <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Everyday Risks.{' '}
                <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  Lasting Protection.
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                Every car faces everyday risks — unexpected weather, scratches, and more. Protect your vehicle with SafePark — strong, reliable, and built to last.
              </p>
            </div>

            {/* IMPROVED FEATURE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="group flex items-start gap-4 rounded-2xl border border-slate-600/30 bg-gradient-to-br from-slate-800/50 to-slate-900/70 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-slate-500/50"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl" role="img" aria-label={title}>
                      {icon}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white tracking-normal">{title}</h3>
                    <p className="text-gray-300 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* IMPROVED SOCIAL PROOF */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
                <span className="font-semibold text-white">Trusted by 2,000+ drivers</span>
              </div>
              <span className="text-green-400 font-semibold">• 2-Year Warranty</span>
            </div>

            {/* ENHANCED SPECIAL OFFER */}
            <div className="rounded-xl bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/40 p-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔥</span>
                <div>
                  <div className="font-bold text-yellow-200 text-lg">Limited Time: August Special</div>
                  <div className="text-yellow-300">Free installation + consultation (Save ₹3,000) • Only 50 spots left!</div>
                </div>
              </div>
            </div>
          </div>

          {/* COMPLETELY REDESIGNED SIDEBAR CARD */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative">
                <span className="absolute -top-3 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  100% UV Protected
                </span>
                
                <div className="rounded-2xl border border-slate-600/40 bg-gradient-to-b from-slate-800/60 to-slate-900/80 p-8 backdrop-blur-sm shadow-2xl">
                  <div className="text-center space-y-6">
                    {/* IMPROVED ICON */}
                    <div className="w-20 h-20 bg-gradient-to-tr from-green-500 to-green-400 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                      <span className="text-3xl">🚗</span>
                    </div>

                    {/* BETTER TYPOGRAPHY */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-white tracking-normal">SafePark Retractable Carport</h3>
                      <p className="text-green-400 font-medium text-lg">Premium Protection for Your Vehicle</p>
                    </div>

                    {/* CLEANER FEATURE LIST */}
                    <div className="space-y-4 text-left">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">🔧</span>
                        </div>
                        <span className="text-white font-medium">Galvanized Iron Frame</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">🧵</span>
                        </div>
                        <span className="text-white font-medium">Oxford 600D Fabric</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-pink-400 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">⚡</span>
                        </div>
                        <span className="text-white font-medium">Quick Installation</span>
                      </div>
                    </div>

                    {/* IMPROVED CTA BUTTON */}
                    <a
                      href="/gallery"
                      className="block w-full rounded-xl bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 py-4 text-center font-bold text-white text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-green-600/30"
                    >
                      See Gallery →
                    </a>

                    <p className="text-center text-green-400 font-medium">
                      Warranty • Free Consultation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
