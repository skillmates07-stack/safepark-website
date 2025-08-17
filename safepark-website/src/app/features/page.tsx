export default function Features() {
  const features = [
    {
      icon: "🏗️",
      title: "Premium GI Frame",
      description: "Rust-resistant galvanized iron frame for long-lasting durability in all weather conditions."
    },
    {
      icon: "🛡️", 
      title: "Oxford 600D Fabric",
      description: "Strong, waterproof & UV-resistant fabric that protects your vehicle from harsh elements."
    },
    {
      icon: "⚓",
      title: "Ground Level Anchoring",
      description: "Stays stable even in heavy winds with our advanced anchoring system."
    },
    {
      icon: "🌟",
      title: "Elegant Design",
      description: "Enhances the look of your home while providing superior vehicle protection."
    },
    {
      icon: "⚡",
      title: "Quick Setup",
      description: "Install in hours, not days. No complex construction required."
    },
    {
      icon: "📏",
      title: "Custom Fit",
      description: "Available in 3 sizes to suit different vehicles - from compact cars to large SUVs."
    }
  ];

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
            <a href="/features" className="text-white transition-colors">Features</a>
            <a href="/gallery" className="text-white/80 hover:text-white transition-colors">Gallery</a>
            <a href="/sizes" className="text-white/80 hover:text-white transition-colors">Sizes</a>
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
          Why Choose <span className="gradient-text">SafePark</span>?
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Advanced features that make SafePark the smartest choice for vehicle protection
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="glass p-8 rounded-2xl hover:scale-105 transition-transform">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
            <p className="text-white/70">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Protect Your Vehicle?</h2>
          <p className="text-white/70 mb-6">Get your custom SafePark carport today</p>
          <a href="tel:+919600840058" className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform inline-block">
            Call +91 9600840058
          </a>
        </div>
      </div>
    </main>
  );
}
