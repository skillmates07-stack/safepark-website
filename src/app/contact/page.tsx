'use client';

import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Sen```CheckCircle } from 'lucide-react';

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
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextArea```ment>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="scroll-smooth bg-gradient-to-br from-[#0f172a] via-[#0f2d2a] to-[#052e16] min-h-screen pt-20">
      
      {/* HERO SECTION */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black leading-tight text-white mb-6">
            Let's Protect Your
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Precious Car
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Ready to experience peace of mind? Get```ur custom SafePark quote in```nutes.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* LEFT COLUMN - Contact Form (3/5) */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-700/50">
                {!isSubmitted ? (
                  <>
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-white mb-3">Get Your Free Quote</h2>
                      <p className="text-gray-300">Tell us about your car and we'll create a perfect protection plan for you.</p>```                  </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text``` font-semibold text-white mb-2">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            require```                           value={formData.name}
                            onChange={handleChange}
                            className="w```ll px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-lg"
                            placeholder="Enter your full```me"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-white mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"```                          name="phone"
                            required
                            value={formData.phone}
                            onChange```andleChange}
                            className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-lg"
                            placeholder="+91 9876543210"
                          />
                        </div>
                      </div>

                      <div>
                        <label className```lock text-sm font-semibold text-white mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"```                        name="email"```                        required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-lg"
                          placeholder="your```ail@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">
                          Tell Us About Your Car &```eds
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-gray-800/60 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-lg resize-none"
                          placeholder="```t car do you drive```hen would you like```stallation? Any specific concerns?"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-5 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-3"
                      >
                        <Send className="w```h-6" />
                        Get My Free Quote
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-16">
                    <CheckCircle className```-20 h-20 text-emerald-400 mx-auto mb-6" />
                    <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
                    <p className="text-xl text-gray-300 mb-8">
                      We'll call you within 24 hours with your personalized SafePark quote.
                    </p>
                    <div className="flex gap```justify-center">
                      <a 
                        href="tel:+919600840058" 
                        className="bg```erald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold transition"
                      >
                        Call Us Now
                      </a>
                      <a 
                        href="https```wa.me/919600840058" 
                        className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-6 py-3 rounded-lg font-bold transition"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN - Contact Info & Quick Actions (2/5) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
                
                <div className="space-y-6">
                  <a href="tel:+919600840058" className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                      <Phone className="``` h-7 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Call Now</h4>
                      <p className="text-emerald-400 font-medium">+91 9600840058</p>
                    </div>
                  </a>

                  <a href="https://wa.me/919600840058" className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <MessageCircle className```-7 h-7 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">WhatsApp</h4>
                      <p className="text-green-400 font-medium">Instant Response</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                      <Mail className="w-7 h-7 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Email</h4>
                      <p className="text-blue-400 font-medium">safepark.india@gmail.com</p>```                  </div>
                  </div>

                  <div className="flex items```nter gap-4">
                    <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">Location</h4>
                      <p className="text-purple-400 font-medium">Coimbatore, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Promise */}
              <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-emerald-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Our Promise</h3>
                <ul className="space-y-3 text-emerald-100">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    24-hour response guarantee
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    Free on-site consultation
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    2-year warranty included
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    Professional installation
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
