export default function Gallery() {
  const galleryItems = [
    {
      title: "SafePark in Villa Setting",
      description: "Premium carport protecting luxury vehicles",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    },
    {
      title: "Retractable Mechanism",
      description: "Easy to set up and fold away",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop"
    },
    {
      title: "Weather Protection",
      description: "UV-resistant Oxford 600D fabric",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
      title: "Modern Design",
      description: "Complements contemporary architecture",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop"
    },
    {
      title: "Multiple Vehicle Sizes",
      description: "From compact cars to large SUVs",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop"
    },
    {
      title: "Easy Storage",
      description: "Folds completely when not in use",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&h=400&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen pt-24 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">
          <span className="gradient-text">SafePark</span> Gallery
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          See SafePark in action - protecting vehicles with style and elegance
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <div key={index} className="glass rounded-2xl overflow-hidden hover:scale-105 transition-transform">
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🚗</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        <div className="glass p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Protect Your Vehicle?</h2>
          <p className="text-white/70 mb-6">Get your custom SafePark carport today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919600840058" className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
              Call +91 9600840058
            </a>
            <a href="#contact" className="glass-button text-white px-8 py-3 rounded-xl font-semibold">
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
