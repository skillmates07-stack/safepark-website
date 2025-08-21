'use client';

import { useState } from 'react';

export default function Features() {
  const [isAnnual, setIsAnnual] = useState(false);

  const features = [
    { icon: '🔥', title: 'Fire Protection', desc: 'Shields your car from heat and flames' },
    { icon: '💧', title: 'Rain Protection', desc: '100% waterproof coating keeps you dry' },
    { icon: '🛡️', title: 'Scratch-Proof', desc: 'Durable Oxford fabric keeps your car looking new' },
    { icon: '👶', title: 'Safe for Kids', desc: 'Rounded edges prevent accidents' },
  ];

  return (
    <main className="pt-[56px] bg-gradient-to-br from-[#0a0f0a] via-[#0f1411] to-[#141a14] min-h-screen">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <span className="inline-block rounded-full bg-green-600 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-white">
              Made in India • Premium Quality
            </span>

            <h1 className="mt-4 text-4xl lg:text-5xl font-black tracking-tight text-white">
              Everyday Risks.{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Lasting Protection.
              </span>
            </h1>

            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Every car faces everyday risks — unexpected weather, scratches, and more. Protect your vehicle with SafePark — strong, reliable, and built to last.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-xl border border-slate-600/40 bg-gradient-to-br from-slate-800/40 to-slate-900/60 p-6 transition-all hover:scale-105"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-green-400 flex-shrink-0">
                    <span className="text-2xl" role="img" aria-label={title}>
                      {icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                    <p className="mt-1 text-gray-300 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-6 text-yellow-400">
              <span className="flex items-center gap-1">⭐⭐⭐⭐⭐</span>
              <span className="font-semibold">Trusted by 2,000+ drivers</span>
              <span className="text-green-400 font-bold">• 2-Year Warranty</span>
            </div>

            <div className="mt-6 rounded-lg bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 p-4 text-yellow-200">
              <strong>🔥 Limited Time: August Special - Only 50 spots left!</strong> Free installation + consultation (Save ₹3,000)
            </div>
          </div>

          {/* Product Card Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <span className="absolute -top-2 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                100% UV Protected
              </span>
              
              <div className="rounded-2xl border border-slate-600/40 bg-gradient-to-b from-slate-800/40 to-slate-900/60 p-6 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-tr from-green-500 to-green-400 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🚗</span>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">SafePark Retractable Carport</h3>
                    <p className="text-green-400 mb-6">Premium Protection for Your Vehicle</p>

                    <ul className="space-y-3 text-left text-white mb-6">
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-orange-400 rounded-lg flex items-center justify-center">
                          <span className="text-sm">🔧</span>
                        </div>
                        Galvanized Iron Frame
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-400 rounded-lg flex items-center justify-center">
                          <span className="text-sm">🧵</span>
                        </div>
                        Oxford 600D Fabric
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-pink-400 rounded-lg flex items-center justify-center">
                          <span className="text-sm">⚡</span>
                        </div>
                        Quick Installation
                      </li>
                    </ul>

                    <a
                      href="/gallery"
                      className="block w-full rounded-xl bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 py-3 text-center font-bold text-white transition-all hover:scale-105 mb-3"
                    >
                      See Gallery →
                    </a>

                    <p className="text-center text-green-400 text-sm font-medium">
                      Warranty • Free Consultation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Protect Your Vehicle?</h2>
          <p className="text-gray-300 text-lg mb-8">Get your custom quote today with free consultation</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <a 
              href="tel:+919600840058" 
              className="group flex items-center justify-center gap-3 w-full sm:flex-1 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-xl shadow-green-600/20 hover:shadow-green-500/30 hover:scale-[1.02]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Get Your Free Quote
            </a>

            <a 
              href="https://wa.me/919600840058" 
              className="group flex items-center justify-center gap-3 w-full sm:flex-1 bg-slate-700/60 backdrop-blur-sm border border-slate-500/50 hover:border-slate-400/70 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] hover:bg-slate-600/70"
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
