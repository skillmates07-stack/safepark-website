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
      
      {/* HERO SECTION */}
      <section className="pt-16 pb-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
            Let's Protect Your
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent mt-2">
              Precious Car
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Ready to experience peace of mind? Get your custom SafePark quote in minutes.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* LEFT COLUMN - Contact Form (2/3) */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50">
                {!isSubmitted ? (
                  <>
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-white mb-4">Get Your Free Quote</h2>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Tell us about your car and we'll create a perfect protection plan for you.
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-base font-semibold text-white mb-2">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                            placeholder="Enter your full name"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-base font-semibold text-white mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                            placeholder="+91 9876543210"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-base font-semibold text-white mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-base font-semibold text-white mb-2">
                          Tell Us About Your Car & Needs
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                          placeholder="What car do you drive? When would you like installation? Any specific concerns?"
                        />
                      </div>

                      {/* FIXED BUTTON SIZE */}
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                        Get My Free Quote
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="w-20 h-20 text-emerald-400 mx-auto mb-6" />
                    <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                      We'll call you within 24 hours with your personalized SafePark quote.
                    </p>
                    <div className="flex gap-4 justify-center">
                      <a 
                        href="tel:+919600840058" 
                        className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105"
                      >
                        Call Us Now
                      </a>
                      <a 
                        href="https://wa.me/919600840058" 
                        className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN - Contact Info (1/3) */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-6">Quick Contact</h3>
                
                <div className="space-y-4">
                  <a href="tel:+919600840058" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                      <Phone className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Call Now</h4>
                      <p className="text-emerald-400 font-medium text-sm">+91 9600840058</p>
                    </div>
                  </a>

                  <a href="https://wa.me/919600840058" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <MessageCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">WhatsApp</h4>
                      <p className="text-green-400 font-medium text-sm">Instant Response</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Email</h4>
                      <p className="text-blue-400 font-medium text-sm">safepark.india@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Location</h4>
                      <p className="text-purple-400 font-medium text-sm">Coimbatore, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Promise */}
              <div className="bg-gradient-to-br from-emerald-900/50 to-emerald-800/60 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-emerald-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Our Promise</h3>
                <ul className="space-y-3 text-emerald-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>24-hour response guarantee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Free on-site consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>2-year warranty included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Professional installation</span>
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
