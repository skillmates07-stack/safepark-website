// src/app/page.tsx - TOP 1% PROFESSIONAL DESIGN

export default function HomePage() {
  return (
    <main className="pt-20 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="floating-shapes"></div>
      
      {/* HERO SECTION - Ultra Premium */}
      <section className="relative min-h-screen flex items-center justify-between px-8 lg:px-16">
        <div className="flex-1 max-w-3xl animate-slide-up">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 text-sm text-white/90 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Made in India • Premium Quality
          </div>
          
          {/* Hero Title - Ultra Typography */}
          <h1 className="text-7xl lg:text-8xl font-black leading-none mb-6">
            <span className="gradient-text">Smart Shelters.</span><br/>
            <span className="text-white">Lasting</span><br/>
            <span className="text-white">Protection.</span>
          </h1>
          
          {/* Premium Subtitle */}
          <p className="text-xl lg:text-2xl text-white/80 leading-relaxed mb-8 max-w-2xl">
            Because your car deserves more than just a cover. 
            <span className="text-white font-medium"> Stylish, portable & weatherproof protection</span> 
            for your luxury, classic, and everyday cars.
          </p>
          
          <p className="text-lg text-white/60 mb-12 max-w-xl">
            Designed for elegance, built for durability in Coimbatore.
          </p>
          
          {/* Premium Feature Pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              "Retractable & Movable",
              "Rust-resistant GI Frame", 
              "Oxford 600D Fabric",
              "UV & Heat Protection"
            ].map((feature, idx) => (
              <div key={idx} className="glass px-6 py-3 rounded-full border border-white/20 backdrop-blur-xl">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="tel:+919600840058" 
               className="btn-primary px-8 py-4 rounded-2xl text-lg font-semibold inline-flex items-center justify-center group relative overflow-hidden">
              <span className="relative z-10">Book Your Carport Now</span>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            
            <a href="#get-quote" 
               className="glass-button px-8 py-4 rounded-2xl text-lg font-semibold inline-flex items-center justify-center border border-white/30">
              Get a Free Quote
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Premium Product Card */}
        <div className="flex-1 max-w-md ml-8 animate-fade-in">
          <div className="card-glass p-8 rounded-3xl relative">
            {/* Quality Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              100% UV Protected
              <br/>
              <span className="text-xs font-normal">Waterproof & Fadeproof</span>
            </div>
            
            {/* Product Icon */}
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-xl">
              <span className="text-3xl">🚗</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">SafePark Retractable Carport</h3>
            <p className="text-white/70 mb-6">Premium Protection for Your Vehicle</p>
            
            <div className="space-y-3 mb-8">
              {[
                "✨ Galvanized Iron Frame",
                "🔵 Oxford 600D Fabric", 
                "⚡ Quick Installation"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center text-white/80">
                  <span className="mr-3">{feature.split(' ')[0]}</span>
                  <span>{feature.split(' ').slice(1).join(' ')}</span>
                </div>
              ))}
            </div>
            
            <a href="#gallery" 
               className="w-full bg-gradient-secondary text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              See Gallery
            </a>
          </div>
        </div>
      </section>
      
      {/* Premium Location Card */}
      <section className="px-8 lg:px-16 -mt-20 relative z-10">
        <div className="glass p-8 rounded-3xl max-w-2xl border border-white/20 backdrop-blur-xl">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-white font-bold text-lg">Made in Coimbatore, Tamil Nadu</span>
          </div>
          
          <div className="flex flex-wrap gap-6 text-white/80">
            <a href="tel:+919600840058" className="flex items-center hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +91 9600840058
            </a>
            
            <a href="https://wa.me/919600840058" className="flex items-center hover:text-white transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                <path d="M11.893 8.334c-.144-.307-.298-.314-.454-.314-.121-.01-.26-.009-.398-.009-.406 0-.967.145-1.473.725-.506.579-.967 1.388-.967 3.377 0 1.99 1.145 3.598 1.305 3.846.159.248 2.246 3.777 5.604 5.028 2.789 1.04 3.359.833 3.966.78.607-.052 1.946-.8 2.219-1.571.273-.771.273-1.434.191-1.571-.083-.138-.303-.22-.633-.386-.33-.165-1.955-.964-2.258-1.075-.303-.111-.525-.166-.746.166-.22.33-.853 1.075-1.048 1.297-.194.22-.387.248-.718.083-.33-.166-1.398-.515-2.662-1.642-.985-.877-1.65-1.962-1.844-2.292-.195-.33-.021-.508.145-.672.148-.148.33-.386.495-.58.165-.193.22-.33.33-.55.111-.22.056-.414-.027-.58-.083-.165-.746-1.797-1.023-2.462z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
