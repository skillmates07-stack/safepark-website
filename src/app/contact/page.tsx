"use client";
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message with form data
    const whatsappMessage = `Hi SafePark! 
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Vehicle Type: ${formData.vehicleType}
Message: ${formData.message}

I'm interested in getting a quote for SafePark carport.`;
    
    const whatsappUrl = `https://wa.me/919600840058?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <a href="/sizes" className="text-white/80 hover:text-white transition-colors">Sizes</a>
            <a href="/contact" className="text-white transition-colors">Contact</a>
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
          Contact <span className="gradient-text">SafePark</span>
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Get in touch for quotes, installation, and any questions about SafePark carports in Coimbatore
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="glass p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Get Your Free Quote</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white/80 mb-2" htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full glass-dark border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2" htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full glass-dark border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2" htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full glass-dark border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="+91 9876543210"
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2" htmlFor="vehicleType">Vehicle Type</label>
              <select
                id="vehicleType"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full glass-dark border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select your vehicle type</option>
                <option value="Compact Car">Compact Car (Swift, i20)</option>
                <option value="Sedan">Sedan (City, Verna)</option>
                <option value="Mid SUV">Mid SUV (Creta, Seltos)</option>
                <option value="Large SUV">Large SUV (Fortuner, Scorpio)</option>
                <option value="Luxury Car">Luxury Car (BMW, Audi)</option>
                <option value="Motorcycle">Motorcycle/Bike</option>
              </select>
            </div>

            <div>
              <label className="block text-white/80 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full glass-dark border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Tell us about your requirements, location in Coimbatore, preferred installation time, etc."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-primary text-white py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform flex items-center justify-center space-x-2"
            >
              <span>💬</span>
              <span>Send via WhatsApp</span>
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Quick Contact */}
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <a href="tel:+919600840058" className="text-white/70 hover:text-white transition-colors">
                    +91 9600840058
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">💬</span>
                </div>
                <div>
                  <p className="text-white font-semibold">WhatsApp</p>
                  <a href="https://wa.me/919600840058" target="_blank" rel="noopener noreferrer" 
                     className="text-white/70 hover:text-white transition-colors">
                    +91 9600840058
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a href="mailto:safepark.india@gmail.com" 
                     className="text-white/70 hover:text-white transition-colors">
                    safepark.india@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Location & Service Area</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mt-1">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-white/70">
                    Gandhi Nagar, Urumandapalayam<br />
                    Coimbatore, Tamil Nadu - 641030
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mt-1">
                  <span className="text-white text-xl">🚚</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Service Area</p>
                  <p className="text-white/70">
                    Free delivery & installation in Coimbatore<br />
                    Extended delivery available across Tamil Nadu
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-white/70">Monday - Saturday</span>
                <span className="text-white">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Sunday</span>
                <span className="text-white">10:00 AM - 6:00 PM</span>
              </div>
              <div className="mt-4 p-3 glass-dark rounded-lg">
                <p className="text-white/60 text-sm">
                  💡 Emergency calls accepted 24/7 for existing customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="glass p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-white text-center mb-6">Find Us in Coimbatore</h3>
          <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">🗺️</span>
              </div>
              <p className="text-white text-xl font-semibold mb-2">Interactive Map</p>
              <p className="text-white/60">Gandhi Nagar, Urumandapalayam, Coimbatore</p>
              <a href="https://maps.google.com/?q=Gandhi+Nagar+Urumandapalayam+Coimbatore" 
                 target="_blank" rel="noopener noreferrer"
                 className="glass-button text-white px-6 py-3 rounded-lg inline-block mt-4 hover:scale-105 transition-transform">
                📍 Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
