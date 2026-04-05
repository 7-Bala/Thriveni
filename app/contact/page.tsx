'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg-primary pt-20">
      
      {/* SECTION 1 — HERO */}
      <section className="bg-metal-900 py-20 text-center">
        <div className="container-custom">
          <h1 className="font-display text-5xl text-metal-50">We&apos;re Here to Help</h1>
          <p className="text-metal-400 mt-4 max-w-xl mx-auto">Visit us, call us, WhatsApp us — whatever works best for you.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto text-left">
            <div className="bg-metal-800 border border-metal-700 rounded-xl px-8 py-6 hover:border-olive-500 transition-all">
              <div className="w-10 h-10 rounded-full bg-olive-900/50 flex items-center justify-center text-olive-400 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div className="text-metal-400 text-xs font-semibold tracking-wider uppercase mb-1">Call Us</div>
              <a href="tel:+919876543210" className="text-amber-cta font-mono text-lg font-medium">+91 98765 43210</a>
              <div className="text-metal-500 text-xs mt-2">Mon–Sat 9AM–7PM</div>
            </div>
            
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-metal-800 border border-metal-700 rounded-xl px-8 py-6 hover:border-[#25D366] transition-all group block">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-4 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </div>
              <div className="text-metal-400 text-xs font-semibold tracking-wider uppercase mb-1">WhatsApp Us</div>
              <div className="text-white font-medium text-lg">Chat Now</div>
              <div className="text-metal-500 text-xs mt-2">Instant replies</div>
            </a>
            
            <a href="mailto:info@thrivenicars.com" className="bg-metal-800 border border-metal-700 rounded-xl px-8 py-6 hover:border-amber-cta transition-all group block">
              <div className="w-10 h-10 rounded-full bg-amber-cta/10 flex items-center justify-center text-amber-cta mb-4 group-hover:bg-amber-cta group-hover:text-metal-900 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div className="text-metal-400 text-xs font-semibold tracking-wider uppercase mb-1">Email Us</div>
              <div className="text-white font-medium text-lg truncate">info@thrivenicars.com</div>
              <div className="text-metal-500 text-xs mt-2">For official queries</div>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ENQUIRY FORM */}
      <section className="bg-bg-section py-24">
        <div className="container-custom flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-automotive p-8 md:p-10 border border-metal-100">
              {formStatus === 'success' ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h2 className="font-display text-3xl text-metal-800">Thank you!</h2>
                  <p className="text-metal-500 mt-4 mb-8">We&apos;ve received your message and will call you within 2 business hours.</p>
                  <button onClick={() => setFormStatus('idle')} className="text-olive-700 font-semibold hover:underline">Send another message</button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-3xl text-metal-800">Send Us a Message</h2>
                  <p className="text-metal-500 mt-2 mb-8">We respond to every enquiry within 2 business hours.</p>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-metal-700">Full Name *</label>
                        <input required type="text" className="border border-metal-200 rounded-lg px-4 py-3 outline-none focus:border-olive-600 focus:ring-1 focus:ring-olive-600" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-metal-700">Phone Number *</label>
                        <div className="flex">
                          <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-metal-200 bg-metal-50 text-metal-500 text-sm">+91</span>
                          <input required type="tel" className="flex-1 border border-metal-200 rounded-r-lg px-4 py-3 outline-none focus:border-olive-600 focus:ring-1 focus:ring-olive-600" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-metal-700">Email Address</label>
                        <input type="email" className="border border-metal-200 rounded-lg px-4 py-3 outline-none focus:border-olive-600 focus:ring-1 focus:ring-olive-600" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-metal-700">Subject *</label>
                        <select required className="border border-metal-200 rounded-lg px-4 py-3 outline-none focus:border-olive-600 focus:ring-1 focus:ring-olive-600 bg-white">
                          <option value="">Select subject...</option>
                          <option value="General Enquiry">General Enquiry</option>
                          <option value="Test Drive Booking">Test Drive Booking</option>
                          <option value="Service Appointment">Service Appointment</option>
                          <option value="Finance Query">Finance Query</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-metal-700">Message *</label>
                      <textarea required rows={5} className="border border-metal-200 rounded-lg px-4 py-3 outline-none focus:border-olive-600 focus:ring-1 focus:ring-olive-600 resize-none"></textarea>
                    </div>
                    
                    <label className="flex items-start gap-3 mt-2 cursor-pointer group">
                      <div className="relative flex items-start pt-1">
                        <input required type="checkbox" className="w-5 h-5 rounded border-metal-300 text-olive-600 focus:ring-olive-600" />
                      </div>
                      <span className="text-sm text-metal-600 leading-relaxed group-hover:text-metal-800 transition-colors">
                        I agree to be contacted by Thriveni Cars sales team only (not shared with other dealers).
                      </span>
                    </label>
                    
                    <button type="submit" className="mt-4 bg-olive-700 text-white w-full py-4 rounded-lg font-semibold hover:bg-olive-800 transition-colors shadow-md">
                      Send Message →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <h3 className="font-display text-2xl text-metal-800 mb-6">Why Reach Out to Us Directly?</h3>
            <ul className="flex flex-col gap-6">
              {[
                "Your enquiry is exclusive — not shared with other dealers",
                "Dedicated sales manager assigned to you",
                "Best price guarantee",
                "Test drive at your doorstep available"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-olive-100 text-olive-700 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-metal-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 bg-olive-50 p-6 rounded-xl border border-olive-100">
              <h4 className="font-semibold text-olive-800 mb-4">Quick Stats</h4>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-olive-200 pb-2">
                  <span className="text-olive-700 text-sm">Avg. callback time</span>
                  <span className="font-display text-xl text-olive-900">15 min</span>
                </div>
                <div className="flex justify-between items-center border-b border-olive-200 pb-2">
                  <span className="text-olive-700 text-sm">Satisfaction</span>
                  <span className="font-display text-xl text-olive-900">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-olive-700 text-sm">Queries answered</span>
                  <span className="font-display text-xl text-olive-900">10,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
