'use client';

import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    vehicleType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="scroll-smooth bg-gradient-to-br from-[#0f172a] via-[#0f2d2a] to-[#052e16] min-h-screen pt-20">
      
      {/* HERO SECTION */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
            Let's Talk About
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Protecting Your Car
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
            Get in touch for quotes, installation, and any questions about SafePark carports in Coimbatore
          </p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* LEFT COLUMN - Contact Form */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/60 backdrop-blur rounded-3xl p-8 shadow-2xl border border-gray-700/50">
              <h2 className="text-3xl font-bold text-white mb-6">Get Your Free Quote</h2>
              <p className="text-gray-300 mb-8">Fill out the form and we'll get back to you within 24 hours with a personalized quote.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="vehicleType" className="block text-sm font-medium text-white mb-2">
                    Vehicle Type
                  </label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select your vehicle type</option>
                    <option value="hatchback">Hatchback (Swift, i20, etc.)</option>
                    <option value="sedan">Sedan (City, Verna, etc.)</option>
                    <option value="suv">SUV (Creta, XUV500, etc.)</option>
                    <option value="luxury">Luxury Car (BMW, Audi, etc.)</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your specific needs, timeline, or any questions..."
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg"
                >
                  Send My Quote Request
                </button>
              </form>
            </div>

            {/* RIGHT COLUMN - Contact Info & Quick Contact */}
            <div className="space-y-8">
              
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/60 backdrop-blur rounded-3xl p-8 shadow-2xl border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Phone</h4>
                      <a href="tel:+919600840058" className="text-emerald-400 hover:text-emerald-300 transition font-medium">
                        +91 9600840058
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">WhatsApp</h4>
                      <a href="https://wa.me/919600840058" className="text-emerald-400 hover:text-emerald-300 transition font-medium">
                        Message Us Instantly
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Email</h4>
                      <a href="mailto:safepark.india@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition font-medium">
                        safepark.india@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700/50">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="tel:+919600840058" 
                      className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold transition-colors duration-300 text-center"
                    >
                      Call Now
                    </a>
                    <a 
                      href="https://wa.me/919600840058" 
                      className="flex-1 border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-6 py-3 rounded-xl font-bold transition-colors duration-300 text-center"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Location & Service Area */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/60 backdrop-blur rounded-3xl p-8 shadow-2xl border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Location & Service Area</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-emerald-400 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Our Location</h4>
                      <p className="text-gray-300">Coimbatore, Tamil Nadu</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-emerald-400 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Service Hours</h4>
                      <p className="text-gray-300">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-300">Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-400/20 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="font-medium text-emerald-400">Free Installation Quote</span>
                  </div>
                  <p className="text-sm text-emerald-200">
                    We provide free on-site consultation and installation quotes across Coimbatore and surrounding areas.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 md:px-12 lg:px-20 bg-black/30 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                  S
                </div>
                <span className="text-white font-bold text-3xl">SafePark</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Premium retractable carport solutions designed for elegance, engineered for durability, trusted across India.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-2xl mb-8">Contact</h4>
              <div className="space-y-6">
                <a href="tel:+919600840058" className="flex items-center text-gray-400 hover:text-emerald-400 transition text-lg">
                  <Phone className="w-5 h-5 mr-4" />
                  +91 9600840058
                </a>
                <a href="https://wa.me/919600840058" className="flex items-center text-gray-400 hover:text-emerald-400 transition text-lg">
                  <MessageCircle className="w-5 h-5 mr-4" />
                  WhatsApp
                </a>
                <div className="flex items-center text-gray-400 text-lg">
                  <MapPin className="w-5 h-5 mr-4" />
                  Coimbatore, Tamil Nadu
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400">© 2025 SafePark. Crafted with excellence in Coimbatore, Tamil Nadu</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
