'use client';

import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="scroll-smooth bg-gradient-to-br from-[#0f172a] via-[#0f2d2a] to-[#052e16] min-h-screen pt-20">
      
      {/* HERO SECTION - MUCH SHORTER */}
      <section className="pt-8 pb-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-3">
            Let's Protect Your
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Precious Car
            </span>
          </h1>
          <p className="text-lg text-gray-300">
            Get your custom SafePark quote in minutes.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION - COMPACT */}
      <section className="pb-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* LEFT COLUMN - Contact Form */}
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-700/50">
              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Get Your Free Quote</h2>
                    <p className="text-gray-300 text-sm">
                      Tell us about your car and we'll create a perfect protection plan for you.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-800/60 border border-gray-600/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-gray-800/60 border border-gray-600/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                          placeholder="+91 9876543210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-gray-800/60 border border-gray-600/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-1">
                        Tell Us About Your Car & Needs
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-gray-800/60 border border-gray-600/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none text-sm"
                        placeholder="What car do you drive? When would you like installation?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Get My Free Quote
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
                  <p className="text-gray-300 mb-6">
                    We'll call you within 24 hours with your personalized quote.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a 
                      href="tel:+919600840058" 
                      className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-medium transition"
                    >
                      Call Us Now
                    </a>
                    <a 
                      href="https://wa.me/919600840058" 
                      className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-4 py-2 rounded-lg font-medium transition"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN - Contact Info */}
            <div className="space-y-6">
              
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Quick Contact</h3>
                
                <div className="space-y-3">
                  <a href="tel:+919600840058" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                      <Phone className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm">Call Now</h4>
                      <p className="text-emerald-400 text-sm">+91 9600840058</p>
                    </div>
                  </a>

                  <a href="https://wa.me/919600840058" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <MessageCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm">WhatsApp</h4>
                      <p className="text-green-400 text-sm">Instant Response</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm">Email</h4>
                      <p className="text-blue-400 text-sm">safepark.india@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm">Location</h4>
                      <p className="text-purple-400 text-sm">Coimbatore, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Promise */}
              <div className="bg-gradient-to-br from-emerald-900/50 to-emerald-800/60 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-emerald-700/50">
                <h3 className="text-xl font-bold text-white mb-3">Our Promise</h3>
                <ul className="space-y-2 text-emerald-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">24-hour response guarantee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">Free on-site consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">2-year warranty included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm">Professional installation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
