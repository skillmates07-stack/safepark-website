'use client';

import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Send, CheckCircle } from 'lucide-react';

// Tailwind suggestion: 
// Add "font-normal" to body for lighter base text. 
// Use min-h-screen bg-gradient (as you already are).

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-gradient-to-br from-[#0f172a] via-[#0f2d2a] to-[#052e16] min-h-screen pt-20 px-2 pb-10">
      {/* HEADER COMPACT, BALANCED */}
      <section className="max-w-2xl mx-auto text-center mt-8 mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3 tracking-tight">
          Let&apos;s Protect Your <br />
          <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            Precious Car
          </span>
        </h1>
        <p className="text-base md:text-lg text-gray-300 font-normal">
          Ready to experience peace of mind? Get your custom SafePark quote in minutes.
        </p>
      </section>

      {/* FORM + CONTACT SPLIT CARD */}
      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-7 lg:gap-10 items-start">
        {/* LEFT: FORM CARD */}
        <div className="rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/70 border border-gray-700/40 shadow-xl p-5 md:p-7">
          {!submitted ? (
            <>
              <h2 className="text-lg font-bold text-white mb-2">Get Your Free Quote</h2>
              <p className="text-gray-400 text-[15px] mb-5">Tell us about your car and needs.</p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Your Name</label>
                    <input
                      className="w-full px-3 py-2 rounded-md bg-gray-800/70 border border-gray-600/30 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-emerald-500"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Phone Number</label>
                    <input
                      className="w-full px-3 py-2 rounded-md bg-gray-800/70 border border-gray-600/30 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-emerald-500"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address</label>
                  <input
                    className="w-full px-3 py-2 rounded-md bg-gray-800/70 border border-gray-600/30 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-emerald-500"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Tell Us About Your Car &amp; Needs</label>
                  <textarea
                    className="w-full px-3 py-2 rounded-md bg-gray-800/70 border border-gray-600/30 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Car, date, or any questions"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-400 text-white font-semibold text-base rounded-lg py-2.5 mt-2 shadow-xl transition"
                >
                  <Send className="w-4 h-4" />
                  Get My Free Quote
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="w-14 h-14 text-emerald-400 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-white mb-2">Thank you!</h3>
              <p className="text-base text-gray-300 mb-5">We&apos;ll call you soon with your custom quote.</p>
              <div className="flex gap-2 justify-center mt-3">
                <a 
                  href="tel:+919600840058"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded font-bold transition text-sm"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919600840058"
                  className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-5 py-2 rounded font-bold transition text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT: CONTACT CARD */}
        <div className="rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/70 border border-gray-700/40 shadow-xl p-5 md:p-7 flex flex-col gap-7">
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Quick Contact</h3>
            <div className="space-y-3">
              <ContactItem
                icon={<Phone className="w-4 h-4 text-emerald-400" />}
                label="Call Now"
                text={<a href="tel:+919600840058" className="text-emerald-400 text-sm hover:underline">+91 9600840058</a>}
              />
              <ContactItem
                icon={<MessageCircle className="w-4 h-4 text-green-400" />}
                label="WhatsApp"
                text={<a href="https://wa.me/919600840058" className="text-green-400 text-sm hover:underline">Instant Response</a>}
              />
              <ContactItem
                icon={<Mail className="w-4 h-4 text-blue-400" />}
                label="Email"
                text={
                  <a href="mailto:safepark.india@gmail.com" className="text-blue-400 text-sm hover:underline">
                    safepark.india@gmail.com
                  </a>
                }
              />
              <ContactItem
                icon={<MapPin className="w-4 h-4 text-purple-400" />}
                label="Location"
                text={<span className="text-purple-400 text-sm">Coimbatore, Tamil Nadu</span>}
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Our Promise</h3>
            <ul className="space-y-1 text-emerald-100 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />24-hour response guarantee
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />Free on-site consultation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />2-year warranty included
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />Professional installation
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

// Extracted for clarity
function ContactItem({ icon, label, text }: { icon: React.ReactNode, label: string, text: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 flex items-center justify-center rounded bg-gray-800/60">
        {icon}
      </div>
      <div>
        <div className="font-medium text-white text-xs">{label}</div>
        <div>{text}</div>
      </div>
    </div>
  );
}
