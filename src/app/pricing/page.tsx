export default function PricingPage() {
  return (
    <main className="pt-[56px] bg-gradient-to-br from-black via-[#0a1a0f] to-[#0d2818] min-h-screen">
      {/* HERO PRICING SECTION */}
      <section className="px-8 lg:px-16 py-12 -mt-8 z-10 relative">
        <div className="max-w-7xl mx-auto text-center">
          {/* Premium Typography */}
          <h1 className="text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-none">
            Choose Your <span className="bg-gradient-to-tr from-green-400 to-green-300 bg-clip-text text-transparent drop-shadow-[0_6px_25px_rgba(0,255,132,0.14)]">SafePark</span> Pricing
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 mb-16 max-w-4xl mx-auto font-light">
            Find the perfect plan for your vehicle. All models use a <span className="font-semibold text-white">premium GI frame and Oxford 600D fabric.</span>
          </p>

          {/* Pricing Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8 relative">
            
            {/* Model 1 - Compact */}
            <div className="bg-gradient-to-br from-[#0a1a0f]/65 to-[#0d2818]/85 border border-green-600/40 p-10 rounded-3xl shadow-2xl shadow-green-800/15 backdrop-blur-2xl hover:shadow-green-600/25 hover:scale-[1.02] transition-all duration-300 group">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-tr from-blue-500 to-blue-400 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6 shadow-xl shadow-blue-500/20">
                  1
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Model 1 - Compact</h3>
                <div className="relative">
                  <div className="text-5xl lg:text-6xl font-black text-green-400 mb-3 drop-shadow-lg">₹16,500</div>
                  <div className="absolute -top-2 -right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60"></div>
                </div>
                <p className="text-gray-400 text-base font-medium">One-time payment + Installation</p>
              </div>

              {/* Features List */}
              <div className="space-y-6 mb-10">
                <div className="border-t border-green-600/20 pt-6">
                  <h4 className="text-white font-bold mb-4 flex items-center text-lg">
                    <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">📏</span>
                    Dimensions
                  </h4>
                  <p className="text-gray-200 font-medium">5.5m (L) × 2.5m (W) × 2.3m (H)</p>
                </div>

                <div className="border-t border-green-600/20 pt-6">
                  <h4 className="text-white font-bold mb-4 flex items-center text-lg">
                    <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">🚗</span>
                    Suitable For
                  </h4>
                  <p className="text-gray-200 font-medium">Most cars & Compact/Mid SUVs</p>
                </div>

                <div className="border-t border-green-600/20 pt-6">
                  <h4 className="text-white font-bold mb-4 flex items-center text-lg">
                    <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">🔧</span>
                    Example Vehicles
                  </h4>
                  <ul className="text-gray-200 font-medium space-y-2">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>Maruti Swift, Hyundai i20</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>Honda City, Maruti Dzire</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>Hyundai Creta, Kia Seltos</li>
                  </ul>
                </div>
              </div>

              <button className="w-full bg-gradient-to-tr from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white py-4 rounded-xl text-lg font-bold shadow-xl shadow-green-600/20 hover:shadow-green-500/30 hover:scale-[1.02] transition-all duration-300">
                Choose Compact
              </button>
            </div>

            {/* Model 2 - Standard (Most Popular) */}
            <div className="bg-gradient-to-br from-[#0a1a0f]/65 to-[#0d2818]/85 border-2 border-green-400/60 p-10 rounded-3xl shadow-2xl shadow-green-600/25 backdrop-blur-2xl hover:shadow-green-400/35 hover:scale-[1.02] transition-all duration-300 group relative transform lg:scale-105 lg:z-10">
              
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-purple-500/30 animate-pulse">
                  ⭐ Most Popular
                </div>
              </div>

              <div className="text-center mb-8 mt-4">
                <div className="w-20 h-20 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6 shadow-xl shadow-purple-500/30">
                  2
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Model 2 - Standard</h3>
                <div className="relative">
                  <div className="text-5xl lg:text-6xl font-black text-green-400 mb-3 drop-shadow-lg">₹18,500</div>
                  <div className="absolute -top-2 -right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60"></div>
                </div>
                <p className="text-gray-400 text-base font-medium">One-time payment + Installation</p>
              </div>

              {/* Features List */}
              <div className="space-y-6 mb-10">
                <div className="border-t border-green-600/20 pt-6">
                  <h4 className="text-white font-bold mb-4 flex items-center text-lg">
                    <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">📏</span>
                    Dimensions
                  </h4>
                  <p className="text-gray-200 font-medium">6.0m (L) × 2.6m (W) × 2.5m (H)</p>
                </div>

                <div className="border-t border-green-600/20 pt-6">
                  <h4 className="text-white font-bold mb-4 flex items-center text-lg">
                    <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">🚗</span>
                    Suitable For
                  </h4>
                  <p className="text-gray-200 font-medium">Most Sedans & Mid-size SUVs</p>
                </div>

                <div className="border-t border-green-600/20 pt-6">
                  <h4 className="text-white font-bold mb-4 flex items-center text-lg">
                    <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3">🔧</span>
                    Example Vehicles
                  </h4>
                  <ul className="text-gray-200 font-medium space-y-2">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>Toyota Camry, Honda Accord</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>Hyundai Tucson, Kia Sportage</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>Mahindra XUV500, Tata Harrier</li>
                  </ul>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white py-4 rounded-xl text-lg font-bold shadow-xl shadow-purple-500/30 hover:shadow-purple-400/40 hover:scale-[1.02] transition-all duration-300">
                Choose Standard
              </button>
            </div>

            {/* Model 3 - Large */}
            <div className="bg-gradient-to-br from-[#0a1a0f]/65 to-[#0d2818]/85 border border-green-600/40 p-10 rounded-3xl shadow-2xl shadow-green-800/15 backdrop-blur-2xl hover:shadow-green-600/25 hover:scale-[1.02] transition-all duration-300 group">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-tr from-red-500 to-red-400 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6 shadow-xl shadow-red-500/20">
                  3
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Model 3 - Large</h3>
                <div className="relative">
                  <div className="text-5xl lg:text-6xl font-black text-green-400 mb-3 drop-shadow-lg">₹21,500</div>
                  <div className="absolute -top-2 -right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60"></div>
                </div>
                <p className="text-gray-400 text-base font-medium">One-time payment + Installation</p>
              </div>

              {/* Features List */}
              <div className="space-y-6 mb-10">
                <div className="border-t border-green-600/20 pt-6">
                  <h4 className="text-white font-bold mb-4 flex items-center text-lg">
                    <span className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-3">📏</span>
                    Dimensions
                  </h4>
                  <p className="text-gray-200 font-medium">6.5m (L) × 2.8m (W) × 2.5m (H)</p>
                </div>

                <div className="border-t border-green-600/20 pt-6">
                  <h4 className="text-white font-bold mb-4 flex items-center text-lg">
                    <span className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-3">🚗</span>
                    Suitable For
                  </h4>
                  <p className="text-gray-200 font-medium">Large SUVs & Premium Vehicles</p>
                </div>

                <div className="border-t border-green-600/20 pt-6">
                  <h4 className="text-white font-bold mb-4 flex items-center text-lg">
                    <span className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mr-3">🔧</span>
                    Example Vehicles
                  </h4>
                  <ul className="text-gray-200 font-medium space-y-2">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span>Toyota Fortuner, Ford Endeavour</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span>BMW X5, Audi Q7</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3"></span>Mercedes GLS, Range Rover</li>
                  </ul>
                </div>
              </div>

              <button className="w-full bg-gradient-to-tr from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white py-4 rounded-xl text-lg font-bold shadow-xl shadow-green-600/20 hover:shadow-green-500/30 hover:scale-[1.02] transition-all duration-300">
                Choose Large
              </button>
            </div>
          </div>

          {/* Premium Features Section */}
          <div className="mt-20 bg-gradient-to-br from-[#0a1a0f]/40 to-[#0d2818]/60 border border-green-600/20 p-12 rounded-3xl backdrop-blur-xl shadow-2xl shadow-green-900/10">
            <h3 className="text-4xl font-bold text-white mb-10 tracking-tight">What's Included with Every SafePark Model</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: "🛡️", title: "Premium Materials", desc: "Galvanized Iron Frame + Oxford 600D Fabric", color: "from-blue-500 to-cyan-400" },
                { icon: "⚡", title: "Quick Installation", desc: "Professional setup in 2-3 hours", color: "from-yellow-500 to-orange-400" },
                { icon: "🌧️", title: "All-Weather Protection", desc: "100% UV & Rain Protection", color: "from-green-500 to-emerald-400" },
                { icon: "🔧", title: "2-Year Warranty", desc: "Full parts & service warranty", color: "from-purple-500 to-pink-400" }
              ].map((item, idx) => (
                <div key={idx} className="text-center group cursor-default hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-tr ${item.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold mb-3 text-xl">{item.title}</h4>
                  <p className="text-gray-300 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="mt-20">
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">Ready to Protect Your Vehicle?</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <a href="tel:+919600840058" 
                 className="bg-gradient-to-tr from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 px-10 py-5 rounded-xl text-xl font-bold text-white shadow-2xl shadow-green-600/20 hover:shadow-green-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center">
                📞 Call for Custom Quote
              </a>
              <a href="https://wa.me/919600840058?text=Hi! I'm interested in SafePark pricing. Can you help me choose the right model?" 
                 className="bg-black/65 border-2 border-green-600 hover:border-green-400 px-10 py-5 rounded-xl text-xl font-bold text-white hover:bg-green-900/30 shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
