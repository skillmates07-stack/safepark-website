"use client";
import { useState } from 'react';

export default function Sizes() {
  const [selectedSize, setSelectedSize] = useState(2);

  const sizes = [
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

  const selectedModel = sizes.find(size => size.id === selectedSize);

  return (
    <main className="min-h-screen pt-24 px-4">
      {/* Navigation */}
      <nav className="glass fixed top-0 left-0 right-0 z-50 p-4 m-4 rounded-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <a href="/" className="text-white font-bold text-xl">SafePark</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="/gallery" className="text-white/80 hover:text-white transition-colors">Gallery</a>
            <a href="/sizes" className="text-white transition-colors">Sizes</a>
            <a href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="tel:+919600840058" className="glass-button text-white px-4 py-2 rounded-lg font-medium">
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">
          Choose Your <span className="gradient-text">SafePark</span> Size
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Find the perfect carport size for your vehicle. All models feature premium GI frame and Oxford 600D fabric.
        </p>
      </div>

      {/* Size Selector Cards */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mb-16">
        {sizes.map((size) => (
          <div 
            key={size.id}
            className={`glass p-8 rounded-2xl cursor-pointer transition-all hover:scale-105 ${
              selectedSize === size.id ? 'ring-2 ring-purple-500 scale-105' : ''
            } ${size.popular ? 'relative' : ''}`}
            onClick={() => setSelectedSize(size.id)}
          >
            {size.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  ⭐ Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${size.color} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-white text-2xl font-bold">{size.id}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{size.name}</h3>
              <p className="text-3xl font-bold gradient-text mb-2">{size.price}</p>
              <p className="text-white/60">One-time payment + installation</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="glass-dark p-4 rounded-xl">
                <h4 className="text-white font-semibold mb-2">📏 Dimensions</h4>
                <p className="text-white/80 font-mono text-sm">{size.dimensions}</p>
              </div>
              
              <div className="glass-dark p-4 rounded-xl">
                <h4 className="text-white font-semibold mb-2">🚗 Suitable For</h4>
                <p className="text-white/80">{size.suitable}</p>
              </div>
              
              <div className="glass-dark p-4 rounded-xl">
                <h4 className="text-white font-semibold mb-2">🔧 Example Vehicles</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  {size.vehicles.map((vehicle, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-gradient-primary rounded-full"></span>
                      <span>{vehicle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button 
              className={`w-full py-3 rounded-xl font-semibold transition-all ${
                selectedSize === size.id 
                  ? 'bg-gradient-primary text-white shadow-lg' 
                  : 'glass-button text-white/80 hover:text-white'
              }`}
            >
              {selectedSize === size.id ? '✓ Selected' : 'Select This Size'}
            </button>
          </div>
        ))}
      </div>

      {/* Selected Model Details */}
      {selectedModel && (
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              {selectedModel.name} - Specifications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                    <span className="text-2xl">🏗️</span>
                    <span>Frame Materials</span>
                  </h3>
                  <ul className="text-white/70 space-y-2">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Galvanized Iron (GI) frame</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Rust-resistant coating</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Industrial-grade strength</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>10-year warranty on frame</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                    <span className="text-2xl">⚓</span>
                    <span>Anchoring System</span>
                  </h3>
                  <ul className="text-white/70 space-y-2">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Ground-level anchoring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Wind-resistant up to 60 kmph</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                    <span className="text-2xl">🛡️</span>
                    <span>Fabric Protection</span>
                  </h3>
                  <ul className="text-white/70 space-y-2">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>Oxford 600D material</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>100% waterproof</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>UV-resistant</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>5-year fade-proof guarantee</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                    <span className="text-2xl">📍</span>
                    <span>Installation</span>
                  </h3>
                  <ul className="text-white/70 space-y-2">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span>Free installation in Coimbatore</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span>Setup completed in 2-4 hours</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Now Section */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Order Your SafePark?</h2>
          <p className="text-white/70 mb-6">
            Selected: <span className="font-semibold text-white">{selectedModel?.name}</span> - {selectedModel?.price}
          </p>
          <p className="text-white/60 mb-8">Free delivery and installation in Coimbatore • 1-year complete warranty</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="tel:+919600840058" className="bg-gradient-primary text-white px-12 py-4 rounded-xl text-xl font-semibold hover:scale-105 transition-transform">
              📞 Call +91 9600840058
            </a>
            <a href="https://wa.me/919600840058?text=Hi! I'm interested in SafePark Model 2 - Standard for ₹18,500. Please send me more details." 
               target="_blank" rel="noopener noreferrer"
               className="glass-button text-white px-12 py-4 rounded-xl text-xl font-semibold flex items-center justify-center space-x-2">
              <span>💬</span>
              <span>WhatsApp Quote</span>
            </a>
          </div>
          
          <p className="text-white/60 text-sm">
            📍 Gandhi Nagar, Urumandapalayam, Coimbatore, Tamil Nadu - 641030
          </p>
        </div>
      </div>
    </main>
  );
}

