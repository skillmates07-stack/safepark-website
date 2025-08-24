'use client';

import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Send, CheckCircle, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 min-h-screen">
      
      {/* Hero Section - Professional & Clean */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-1/4 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            Get in touch
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to protect your investment with SafePark? Get your personalized quote and join thousands of satisfied customers.
          </p>
        </div>
      </section>

      {/* Main Contact Section - Enterprise Layout */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Form - 2/3 width */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl">
                {!isSubmitted ? (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                        Get Your Free Quote
                      </h2>
                      <p className="text-gray-400 text-lg">
                        Tell us about your needs and we'll create the perfect protection plan.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name & Phone Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 group-hover:border-white/20"
                            placeholder="John Smith"
                          />
                        </div>
                        
                        <div className="group">
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 group-hover:border-white/20"
                            placeholder="+91 9876543210"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 group-hover:border-white/20"
                          placeholder="john@company.com"
                        />
                      </div>

                      {/* Message */}
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Project Details
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 resize-none group-hover:border-white/20"
                          placeholder="Tell us about your car, preferred installation date, and any specific requirements..."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="group relative w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/25"
                      >
                        <div className="flex items-center justify-center gap-3">
                          {isLoading ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Processing...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                              Send Message
                            </>
                          )}
                        </div>
                      </button>
                    </form>
                  </>
                ) : (
                  // Success State
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                    <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="tel:+919600840058"
                        className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                      <a 
                        href="https://wa.me/919600840058"
                        className="inline-flex items-center justify-center gap-2 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar - 1/3 width */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Contact Methods */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <a 
                    href="tel:+919600840058"
                    className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                      <Phone className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        Call Us
                      </h4>
                      <p className="text-sm text-gray-400">+91 9600840058</p>
                      <p className="text-xs text-gray-500 mt-1">Mon-Sat 9AM-6PM</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-all duration-300 group-hover:translate-x-1" />
                  </a>

                  <a 
                    href="https://wa.me/919600840058"
                    className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <MessageCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors">
                        WhatsApp
                      </h4>
                      <p className="text-sm text-gray-400">Instant messaging</p>
                      <p className="text-xs text-gray-500 mt-1">Available 24/7</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-green-400 transition-all duration-300 group-hover:translate-x-1" />
                  </a>

                  <div className="flex items-start gap-4 p-3">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-sm text-gray-400">safepark.india@gmail.com</p>
                      <p className="text-xs text-gray-500 mt-1">We reply within 24hrs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Location</h4>
                      <p className="text-sm text-gray-400">Coimbatore</p>
                      <p className="text-xs text-gray-500 mt-1">Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Promise */}
              <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl p-6 border border-emerald-500/20 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4">Our Commitment</h3>
                <div className="space-y-3">
                  {[
                    'Free consultation & site visit',
                    '24-hour response guarantee', 
                    '2-year comprehensive warranty',
                    'Professional installation team'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
