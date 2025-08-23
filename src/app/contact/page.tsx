'use client';

import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="scroll-smooth bg-gradient-to-br from-[#0f172a] via-[#0f2d2a] to-[#052e16] min-h-screen pt-24">
      <section className="py-12 px-4 md:px-0">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Get In Touch With SafePark
          </h1>
          <p className="text-lg text-emerald-200 mb-4">
            Let's make your mornings peaceful and your car happy. Let us know what you need—no question is too small!
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form
            className="bg-slate-900/60 rounded-2xl shadow-xl p-8 flex flex-col gap-5 border border-emerald-800/30"
            onSubmit={e => {
              e.preventDefault();
              alert('Thank you! We will reach out soon.');
            }}
          >
            <h2 className="font-bold text-lg text-emerald-200 mb-4">Free Quote Request</h2>
            <input
              required
              placeholder="Your Name"
              className="px-4 py-3 rounded-md bg-slate-800/80 border border-slate-600/30 text-white focus:ring-emerald-400 outline-none"
            />
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="px-4 py-3 rounded-md bg-slate-800/80 border border-slate-600/30 text-white focus:ring-emerald-400 outline-none"
            />
            <input
              required
              placeholder="Phone Number"
              className="px-4 py-3 rounded-md bg-slate-800/80 border border-slate-600/30 text-white focus:ring-emerald-400 outline-none"
            />
            <textarea
              rows={4}
              placeholder="What's on your mind?"
              className="px-4 py-3 rounded-md bg-slate-800/80 border border-slate-600/30 text-white focus:ring-emerald-400 outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-emerald-500 to-teal-400 font-bold px-8 py-3 rounded-lg text-white shadow hover:scale-[1.03] transition"
            >
              Send Message
            </button>
          </form>
          {/* Info */}
          <div className="rounded-2xl bg-slate-900/60 shadow-xl p-8 flex flex-col justify-center border border-emerald-800/30 gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <Phone className="w-6 h-6 text-emerald-400" />
                <a href="tel:+919600840058" className="font-medium text-emerald-300 hover:underline">+91 9600840058</a>
              </div>
              <div className="flex gap-3 items-center">
                <MessageCircle className="w-6 h-6 text-emerald-400" />
                <a href="https://wa.me/919600840058" className="font-medium text-emerald-300 hover:underline">WhatsApp Now</a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-6 h-6 text-emerald-400" />
                <a href="mailto:safepark.india@gmail.com" className="font-medium text-emerald-300 hover:underline">safepark.india@gmail.com</a>
              </div>
              <div className="flex gap-3 items-center pt-4">
                <MapPin className="w-6 h-6 text-emerald-400" />
                <span className="font-medium text-emerald-200">Coimbatore, Tamil Nadu</span>
              </div>
            </div>
            <div className="mt-8 text-center text-emerald-300 italic">
              We reply on the same day, always.  
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
