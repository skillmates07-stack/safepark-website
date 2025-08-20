export default function PricingPage() {
  return (
    <main className="pt-[56px] bg-gradient-to-br from-black via-[#0a1a0f] to-[#0d2818] min-h-screen">
      {/* BALANCED PRICING HERO */}
      <section className="py-12 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Choose Your <span className="text-green-400">SafePark</span> Pricing
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Find the perfect plan for your vehicle. All models use a <span className="font-semibold text-white">premium GI frame and Oxford 600D fabric.</span>
          </p>
        </div>
      </section>

      {/* BALANCED PRICING CARDS */}
      <section className="px-4 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Model 1 - Compact",
                price: "₹16,500",
                subtitle: "One-time payment + Installation",
                popular: false,
                color: "from-blue-500 to-blue-400",
                dimensions: "5.5m (L) × 2.5m (W) × 2.3m (H)",
                suitable: "Most cars & Compact/Mid SUVs",
                examples: ["Maruti Swift, Hyundai i20", "Honda City, Maruti Dzire", "Hyundai Creta, Kia Seltos"]
              },
              {
                id: 2,
                title: "Model 2 - Standard",
                price: "₹18,500",
                subtitle: "One-time payment + Installation",
                popular: true,
                color: "from-purple-500 to-purple-400",
                dimensions: "6.0m (L) × 2.6m (W) × 2.5m (H)",
                suitable: "Most Sedans & Mid-size SUVs",
                examples: ["Toyota Camry, Honda Accord", "Hyundai Tucson, Kia Sportage", "Mahindra XUV500, Tata Harrier"]
              },
              {
                id: 3,
                title: "Model 3 - Large",
                price: "₹21,500",
                subtitle: "One-time payment + Installation",
                popular: false,
                color: "from-red-500 to-red-400",
                dimensions: "6.5m (L) × 2.8m (W) × 2.5m (H)",
                suitable: "Large SUVs & Premium Vehicles",
                examples: ["Toyota Fortuner, Ford Endeavour", "BMW X5, Audi Q7", "Mercedes GLS, Range Rover"]
              }
            ].map((plan) => (
              <div key={plan.id} className="relative bg-black/40 backdrop-blur-sm border border-green-600/30 rounded-2xl p-8 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 shadow-lg">
                
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Most Popular
                  </div>
                )}

                {/* Plan Number */}
                <div className={`w-16 h-16 bg-gradient-to-tr ${plan.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl`}>
                  <span className="text-white font-black text-2xl">{plan.id}</span>
                </div>

                {/* Title & Price */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-3">{plan.title}</h3>
                  <div className="text-4xl lg:text-5xl font-black text-green-400 mb-2">{plan.price}</div>
                  <p className="text-sm text-gray-400">{plan.subtitle}</p>
                </div>

                {/* Dimensions */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-7 h-7 bg-gradient-to-tr ${plan.color} rounded-lg flex items-center justify-center`}>
                      <span className="text-white text-sm">📏</span>
                    </div>
                    <span className="text-white font-bold text-lg">Dimensions</span>
                  </div>
                  <p className="text-gray-300 text-base pl-10">{plan.dimensions}</p>
                </div>

                {/* Suitable For */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-7 h-7 bg-gradient-to-tr ${plan.color} rounded-lg flex items-center justify-center`}>
                      <span className="text-white text-sm">🚗</span>
                    </div>
                    <span className="text-white font-bold text-lg">Suitable For</span>
                  </div>
                  <p className="text-gray-300 text-base pl-10">{plan.suitable}</p>
                </div>

                {/* Example Vehicles */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-7 h-7 bg-gradient-to-tr ${plan.color} rounded-lg flex items-center justify-center`}>
                      <span className="text-white text-sm">🔧</span>
                    </div>
                    <span className="text-white font-bold text-lg">Example Vehicles</span>
                  </div>
                  <ul className="text-sm text-gray-300 pl-10 space-y-2">
                    {plan.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-400 mr-3 font-bold">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 px-6 bg-gradient-to-r ${plan.color} hover:scale-105 text-white font-bold text-lg rounded-xl shadow-xl transition-all duration-300`}>
                  Choose {plan.title.split(' - ')[1]}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BALANCED WHAT'S INCLUDED */}
      <section className="px-4 lg:px-8 py-16 bg-gradient-to-br from-[#0a1a0f]/60 to-black/80">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">What's Included with Every SafePark Model</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Premium Materials",
                desc: "Galvanized Iron Frame + Oxford 600D Fabric",
                color: "from-blue-400 to-cyan-400"
              },
              {
                icon: "⚡",
                title: "Quick Installation",
                desc: "Professional setup in 2-3 hours",
                color: "from-orange-400 to-yellow-400"
              },
              {
                icon: "🌧️",
                title: "All-Weather Protection",
                desc: "100% UV & Rain Protection",
                color: "from-green-400 to-emerald-400"
              },
              {
                icon: "🛠️",
                title: "2-Year Warranty",
                desc: "Full parts & service warranty",
                color: "from-purple-400 to-pink-400"
              }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-tr ${feature.color} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-xl`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BALANCED CTA SECTION */}
      <section className="px-4 lg:px-8 py-16 bg-gradient-to-br from-black/80 to-[#0a1a0f]/60">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Protect Your Vehicle?</h2>
          <p className="text-gray-300 text-lg mb-10">Get your custom quote today with free consultation</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <a href="tel:+919600840058" className="flex-1 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 text-center hover:scale-105">
              📞 Call for Custom Quote
            </a>
            <a href="https://wa.me/919600840058" className="flex-1 bg-black/60 border border-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-900/20 transition-all duration-300 text-center hover:scale-105">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
