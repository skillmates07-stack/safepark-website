export default function Gallery() {
  const galleryItems = [
    {
      title: "SafePark Protecting Luxury Car",
      description: "Premium carport in modern villa setting",
      category: "Residential"
    },
    {
      title: "Retractable Mechanism Demo",
      description: "Easy setup and folding process",
      category: "Features"
    },
    {
      title: "Weather Protection Test",
      description: "UV-resistant Oxford 600D fabric in action",
      category: "Durability"
    },
    {
      title: "Modern Design Integration",
      description: "Complements contemporary architecture",
      category: "Design"
    },
    {
      title: "Multiple Vehicle Coverage",
      description: "From compact cars to large SUVs",
      category: "Versatility"
    },
    {
      title: "Space-Saving Storage",
      description: "Completely foldable when not in use",
      category: "Storage"
    },
    {
      title: "GI Frame Durability",
      description: "Rust-resistant galvanized iron construction",
      category: "Materials"
    },
    {
      title: "Quick Installation",
      description: "Professional setup in hours",
      category: "Installation"
    },
    {
      title: "BikePort Variant",
      description: "Special model for motorcycles",
      category: "Variants"
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
            <a href="/features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="/gallery" className="text-white transition-colors">Gallery</a>
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
          <span className="gradient-text">SafePark</span> Gallery
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          See SafePark in action - protecting vehicles with style and elegance in Coimbatore
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {galleryItems.map((item, index) => (
          <div key={index} className="glass rounded-2xl overflow-hidden hover:scale-105 transition-transform group">
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center relative">
              {/* Image Placeholder with SafePark Branding */}
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">
                    {item.category === 'Variants' ? '🏍️' : '🚗'}
                  </span>
                </div>
                <div className="glass-button px-3 py-1 rounded-full text-xs text-white/80 mb-2 inline-block">
                  {item.category}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-4xl">👁️</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Highlights */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
        <div className="glass p-6 rounded-2xl text-center">
          <div className="text-3xl mb-4">🏠</div>
          <h3 className="text-xl font-bold text-white mb-2">Home Installation</h3>
          <p className="text-white/70">Perfect for villas, apartments, and independent houses in Coimbatore</p>
        </div>
        
        <div className="glass p-6 rounded-2xl text-center">
          <div className="text-3xl mb-4">🏢</div>
          <h3 className="text-xl font-bold text-white mb-2">Commercial Use</h3>
          <p className="text-white/70">Ideal for offices, showrooms, and corporate parking areas</p>
        </div>
        
        <div className="glass p-6 rounded-2xl text-center">
          <div className="text-3xl mb-4">🎪</div>
          <h3 className="text-xl font-bold text-white mb-2">Events & Exhibitions</h3>
          <p className="text-white/70">Temporary premium parking solutions for special occasions</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to See SafePark at Your Location?</h2>
          <p className="text-white/70 mb-6">Schedule a free demo and installation quote in Coimbatore</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919600840058" className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
              Call +91 9600840058
            </a>
            <a href="/sizes" className="glass-button text-white px-8 py-3 rounded-xl font-semibold">
              View Sizes & Pricing
            </a>
          </div>
          
          {/* WhatsApp Link */}
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-white/60 mb-3">Or message us directly</p>
            <a href="https://wa.me/919600840058" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors">
              <span className="text-xl">📱</span>
              <span>WhatsApp: +91 9600840058</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
