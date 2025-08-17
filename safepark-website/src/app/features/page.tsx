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

      {/* Comparison Table */}
      <div className="max-w-6xl mx-auto glass p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          SafePark vs Traditional Sheds
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-4">Feature</th>
                <th className="text-center py-4">Traditional Shed</th>
                <th className="text-center py-4">SafePark Carport</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-4">Portability</td>
                <td className="text-center py-4">❌ Fixed</td>
                <td className="text-center py-4">✅ Retractable & Movable</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4">Installation</td>
                <td className="text-center py-4">❌ Complex</td>
                <td className="text-center py-4">✅ Quick Installation</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-4">Material</td>
                <td className="text-center py-4">❌ Low-grade Steel</td>
                <td className="text-center py-4">✅ Rust-resistant GI Frame</td>
              </tr>
              <tr>
                <td className="py-4">Space Efficiency</td>
                <td className="text-center py-4">❌ Occupies Fixed Space</td>
                <td className="text-center py-4">✅ Collapsible When Not in Use</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
