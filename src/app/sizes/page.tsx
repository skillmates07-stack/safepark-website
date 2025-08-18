"use client";
import { useState } from "react";

export default function Pricing() {
  const [selectedPrice, setSelectedPrice] = useState(2);
  const models = [
    {
      id: 1,
      name: "Model 1 - Compact",
      dimensions: "5.5m (L) × 2.5m (W) × 2.3m (H)",
      suitable: "Most cars & Compact/Mid SUVs",
      vehicles: ["Maruti Swift", "Hyundai i20", "Honda City", "Maruti Baleno", "Tata Nexon"],
      price: "₹16,500",
      popular: false,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Model 2 - Standard",
      dimensions: "6.0m (L) × 2.6m (W) × 2.5m (H)",
      suitable: "Most Sedans & Mid-size SUVs",
      vehicles: ["Toyota Camry", "Honda Accord", "Hyundai Verna", "Skoda Octavia", "Mahindra XUV500"],
      price: "₹18,500",
      popular: true,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      name: "Model 3 - Large",
      dimensions: "6.5m (L) × 2.8m (W) × 2.5m (H)",
      suitable: "Large SUVs & Premium Vehicles",
      vehicles: ["Toyota Fortuner", "Mahindra Scorpio", "Ford Endeavour", "Audi Q7", "BMW X5"],
      price: "₹21,500",
      popular: false,
      color: "from-pink-500 to-red-600"
    }
  ];
  const selectedModel = models.find((model) => model.id === selectedPrice);

  return (
    <main className="min-h-screen pt-20 px-4 bg-gradient-to-br from-[#191825] to-[#21155c]">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-5xl font-bold text-white mb-4">
          Choose Your <span className="bg-gradient-to-tr from-purple-400 to-blue-400 bg-clip-text text-transparent">SafePark</span> Pricing
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Find the perfect plan for your vehicle. All models use a premium GI frame and Oxford 600D fabric.
        </p>
      </div>

      {/* Pricing Selector Cards */}
      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3 mb-10">
        {models.map((model) => (
          <div
            key={model.id}
            className={`bg-white/10 backdrop-blur-md border ${model.popular ? "border-purple-400/80" : "border-white/20"
              } p-8 rounded-2xl cursor-pointer transition-all hover:scale-105 shadow-xl relative
              ${selectedPrice === model.id ? "ring-2 ring-purple-400 scale-105" : ""}
              `}
            onClick={() => setSelectedPrice(model.id)}
          >
            {model.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">⭐ Most Popular</span>
              </div>
            )}
            <div className="text-center mb-5">
              <div className={`w-16 h-16 bg-gradient-to-r ${model.color} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-white text-2xl font-bold">{model.id}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{model.name}</h3>
              <p className="text-3xl font-bold bg-gradient-to-tr from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">{model.price}</p>
              <p className="text-white/60 text-xs">One-time payment + installation</p>
            </div>
            <div className="space-y-4 mb-6">
              <div className="bg-black/20 p-4 rounded-xl">
                <h4 className="text-white font-semibold mb-1">📏 Dimensions</h4>
                <p className="text-white/80 font-mono text-sm">{model.dimensions}</p>
              </div>
              <div className="bg-black/20 p-4 rounded-xl">
                <h4 className="text-white font-semibold mb-1">🚗 Suitable For</h4>
                <p className="text-white/80">{model.suitable}</p>
              </div>
              <div className="bg-black/20 p-4 rounded-xl">
                <h4 className="text-white font-semibold mb-1">🔧 Example Vehicles</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  {model.vehicles.map((vehicle, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-600 rounded-full"></span>
                      <span>{vehicle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              className={`w-full py-3 rounded-xl font-semibold transition-all
                ${selectedPrice === model.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/80 hover:text-white hover:bg-white/20'}
              `}
            >
              {selectedPrice === model.id ? '✓ Selected' : 'Select This Option'}
            </button>
          </div>
        ))}
      </div>
      {/* Selected Model Details */}
      {selectedModel && (
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              {selectedModel.name} - Specifications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">🏗️</span>Frame Materials
                  </h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span>Galvanized Iron (GI) frame</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span>Rust-resistant coating</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span>Industrial-grade strength</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span>10-year warranty on frame</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">⚓</span>Anchoring System
                  </h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span>Ground-level anchoring</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span>Wind-resistant up to 60 kmph</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">🛡️</span>Fabric Protection
                  </h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>Oxford 600D material</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>100% waterproof</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>UV-resistant</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span>5-year fade-proof guarantee</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">📍</span>Installation
                  </h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span>Free installation in Coimbatore</li>
                    <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span>Setup completed in 2-4 hours</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Now Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Order Your SafePark?</h2>
          <p className="text-white/70 mb-4">
            Selected: <span className="font-semibold text-white">{selectedModel?.name}</span> - {selectedModel?.price}
          </p>
          <p className="text-white/60 mb-6 text-sm">Free delivery and installation in Coimbatore &bull; 1-year warranty</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-3">
            <a
              href="tel:+919600840058"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition"
            >
              📞 Call +91 9600840058 for {selectedModel?.price}
            </a>
            <a
              href={`https://wa.me/919600840058?text=Hi! I'm interested in ${encodeURIComponent(selectedModel?.name || "")} for ${selectedModel?.price}. Please send me more details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition"
            >
              💬 WhatsApp Quote
            </a>
          </div>
          <p className="text-white/60 text-xs mt-2">
            📍 Gandhi Nagar, Coimbatore, Tamil Nadu - 641030
          </p>
        </div>
      </div>
    </main>
  );
}
