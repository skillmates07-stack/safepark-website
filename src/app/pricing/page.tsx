export default function PricingPage() {
  return (
    <main className="pt-[80px] bg-gradient-to-br from-black via-[#0a1a0f] to-[#0d2818] min-h-screen">
      {/* PRICING SECTION */}
      <section className="px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-black mb-6">
            Choose Your <span className="bg-gradient-to-tr from-green-400 to-green-300 bg-clip-text text-transparent">SafePark</span> Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Find the perfect plan for your vehicle. All models use a premium GI frame and Oxford 600D fabric.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Model 1 - Compact */}
            <div className="bg-gradient-to-br from-[#0a1a0f]/60 to-[#0d2818]/80 border border-green-600/30 p-8 rounded-3xl shadow-2xl hover:shadow-green-900/30 transition-all duration-300 relative">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-blue-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Model 1 - Compact</h3>
                <div className="text-4xl font-black text-green-400 mb-2">₹16,500</div>
                <p className="text-gray-400 text-sm">One-time payment + Installation</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="border-t border-green-600/20 pt-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    📏 Dimensions
                  </h4>
                  <p className="text-gray-300 text-sm">5.5m (L) x 2.5m (W) x 2.3m (H)</p>
                </div>

                <div className="border-t border-green-600/20 pt-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    🚗 Suitable For
                  </h4>
                  <p className="text-gray-300 text-sm">Most cars & Compact/Mid SUVs</p>
                </div>

                <div className="border-t border-green-600/20 pt-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    🔧 Example Vehicles
                  </h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Maruti Swift, Hyundai i20</li>
                    <li>• Honda City, Maruti Dzire</li>
                    <li>• Hyundai Creta, Kia Seltos</li>
                  </ul>
                </div>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg">
                Choose Compact
              </button>
            </div>

            {/* Model 2 - Standard (Most Popular) */}
            <div className="bg-gradient-to-br from-[#0a1a0f]/60 to-[#0d2818]/80 border border-green-500/50 p-8 rounded-3xl shadow-2xl hover:shadow-green-900/40 transition-all duration-300 relative transform scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  ⭐ Most Popular
                </span>
              </div>

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Model 2 - Standard</h3>
                <div className="text-4xl font-black text-green-400 mb-2">₹18,500</div>
                <p className="text-gray-400 text-sm">One-time payment + Installation</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="border-t border-green-600/20 pt-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    📏 Dimensions
                  </h4>
                  <p className="text-gray-300 text-sm">6.0m (L) x 2.6m (W) x 2.5m (H)</p>
                </div>

                <div className="border-t border-green-600/20 pt-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    🚗 Suitable For
                  </h4>
                  <p className="text-gray-300 text-sm">Most Sedans & Mid-size SUVs</p>
                </div>

                <div className="border-t border-green-600/20 pt-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    🔧 Example Vehicles
                  </h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Toyota Camry, Honda Accord</li>
                    <li>• Hyundai Tucson, Kia Sportage</li>
                    <li>• Mahindra XUV500, Tata Harrier</li>
                  </ul>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg">
                Choose Standard
              </button>
            </div>

            {/* Model 3 - Large */}
            <div className="bg-gradient-to-br from-[#0a1a0f]/60 to-[#0d2818]/80 border border-green-600/30 p-8 rounded-3xl shadow-2xl hover:shadow-green-900/30 transition-all duration-300 relative">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-tr from-red-500 to-red-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Model 3 - Large</h3>
                <div className="text-4xl font-black text-green-400 mb-2">₹21,500</div>
                <p className="text-gray-400 text-sm">One-time payment + Installation</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="border-t border-green-600/20 pt-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    📏 Dimensions
                  </h4>
                  <p className="text-gray-300 text-sm">6.5m (L) x 2.8m (W) x 2.5m (H)</p>
                </div>

                <div className="border-t border-green-600/20 pt-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    🚗 Suitable For
                  </h4>
                  <p className="text-gray-300 text-sm">Large SUVs & Premium Vehicles</p>
                </div>

                <div className="border-t border-green-600/20 pt-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    🔧 Example Vehicles
                  </h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Toyota Fortuner, Ford Endeavour</li>
                    <li>• BMW X5, Audi Q7</li>
                    <li>• Mercedes GLS, Range Rover</li>
                  </ul>
                </div>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg">
                Choose Large
              </button>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-gradient-to-br from-[#0a1a0f]/40 to-[#0d2818]/60 border border-green-600/20 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">What's Included with Every SafePark Model</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🛡️</div>
                <h4 className="text-white font-semibold mb-2">Premium Materials</h4>
                <p className="text-gray-400 text-sm">Galvanized Iron Frame + Oxford 600D Fabric</p>
              </div>
              <div>
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="text-white font-semibold mb-2">Quick Installation</h4>
                <p className="text-gray-400 text-sm">Professional setup in 2-3 hours</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🌧️</div>
                <h4 className="text-white font-semibold mb-2">All-Weather Protection</h4>
                <p className="text-gray-400 text-sm">100% UV & Rain Protection</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔧</div>
                <h4 className="text-white font-semibold mb-2">2-Year Warranty</h4>
                <p className="text-gray-400 text-sm">Full parts & service warranty</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Protect Your Vehicle?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919600840058" 
                 className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-lg font-semibold text-white shadow-xl transition-all duration-300">
                📞 Call for Custom Quote
              </a>
              <a href="https://wa.me/919600840058?text=Hi! I'm interested in SafePark pricing. Can you help me choose the right model?" 
                 className="bg-black/50 border border-green-600 px-8 py-4 rounded-xl text-lg font-semibold text-white hover:bg-green-900/30 transition-all duration-300">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
