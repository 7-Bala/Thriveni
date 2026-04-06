'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');
  const [activeBranch, setActiveBranch] = useState(0);

  const branches = [
    { name: 'T.Nagar (H.O)', type: 'Maruti Suzuki Arena', address: '12, G.N. Chetty Road, T.Nagar, Chennai - 600017' },
    { name: 'Anna Nagar', type: 'NEXA', address: '45, 2nd Avenue, Anna Nagar, Chennai - 600102' },
    { name: 'Adyar', type: 'Honda Premium', address: '8, Sardar Patel Road, Adyar, Chennai - 600020' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-bg-primary pt-32 pb-32">
      
      {/* SECTION 1 — HEADER */}
      <section className="mb-20">
        <div className="container-custom">
           <motion.div initial="hidden" animate="visible" variants={fadeUp}>
             <span className="text-amber-cta text-[11px] uppercase tracking-[0.4em] font-bold block mb-4">CONNECT</span>
             <h1 className="font-display text-display-xl text-metal-900 leading-tight mb-8">
               Direct Assistance. <br/> <span className="text-olive-700">Zero Intermediaries.</span>
             </h1>
             <p className="text-metal-500 text-lg max-w-xl font-body font-light">
               Your enquiry stays internal. No shared leads. No spam. Just professional automotive consultation.
             </p>
           </motion.div>
        </div>
      </section>

      <div className="container-custom sm:grid sm:grid-cols-12 gap-16">
        
        {/* SECTION 2 — BRANCH SELECTOR & MAP PULSE */}
        <div className="sm:col-span-5 space-y-12">
           <div>
              <h2 className="font-display text-2xl text-metal-900 mb-8 flex items-center gap-4">
                 Our Branches
                 <span className="h-px flex-1 bg-metal-100" />
              </h2>
              <div className="space-y-4">
                 {branches.map((br, i) => (
                    <motion.button 
                      key={i}
                      onClick={() => setActiveBranch(i)}
                      className={`w-full text-left p-8 border transition-all relative overflow-hidden group ${activeBranch === i ? 'bg-white border-amber-cta shadow-2xl' : 'bg-transparent border-metal-100 hover:border-metal-200'}`}
                    >
                       <div className="relative z-10">
                          <div className={`text-[9px] font-bold uppercase tracking-widest mb-2 ${activeBranch === i ? 'text-amber-cta' : 'text-metal-400'}`}>{br.type}</div>
                          <h3 className="font-display text-xl text-metal-900 mb-3">{br.name}</h3>
                          <p className={`text-sm leading-relaxed ${activeBranch === i ? 'text-metal-600' : 'text-metal-400'}`}>{br.address}</p>
                       </div>
                       {/* Animated Background Indicator */}
                       {activeBranch === i && (
                          <motion.div 
                            layoutId="branch-indicator"
                            className="absolute left-0 top-0 bottom-0 w-1 bg-amber-cta"
                          />
                       )}
                    </motion.button>
                 ))}
              </div>
           </div>

           {/* Map Representative Pulse */}
           <div className="aspect-square bg-bg-section relative overflow-hidden border border-metal-100 rounded-sm group">
              <div className="absolute inset-0 bg-metal-900/5 z-0" />
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.4, 0.1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-cta rounded-full"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-amber-cta border-2 border-white shadow-xl z-10" />
              <div className="absolute bottom-8 left-8 right-8 bg-white p-6 shadow-2xl border border-metal-100">
                 <div className="text-[10px] font-bold text-metal-400 uppercase tracking-widest mb-1">Active View</div>
                 <div className="font-display text-lg text-metal-900">{branches[activeBranch].name} Position</div>
              </div>
           </div>
        </div>

        {/* SECTION 3 — INTERACTIVE FORM */}
        <div className="sm:col-span-7">
           <div className="bg-white border border-metal-100 p-12 sm:p-20 shadow-2xl relative">
              <AnimatePresence mode='wait'>
                {formStatus === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                     <div className="w-20 h-20 bg-olive-50 text-olive-600 flex items-center justify-center mx-auto mb-8">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                     </div>
                     <h2 className="font-display text-3xl text-metal-900 mb-4">Transmission Received.</h2>
                     <p className="text-metal-500 mb-10">Our sales executive for {branches[activeBranch].name} will reach out shortly.</p>
                     <button onClick={() => setFormStatus('idle')} className="text-amber-cta font-bold text-xs uppercase tracking-widest border-b border-amber-cta">Restart Enquiry →</button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                     <h2 className="font-display text-4xl text-metal-900 mb-12">Submit Enquiry</h2>
                     
                     <form onSubmit={(e) => { e.preventDefault(); setFormStatus('success'); }} className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                           <div className="relative group/field">
                              <input required type="text" className="w-full bg-bg-section px-6 py-5 outline-none text-sm group-focus-within/field:ring-1 ring-amber-cta transition-all" placeholder="Full Name" />
                              <div className="absolute bottom-0 left-0 h-[1px] bg-amber-cta w-0 group-focus-within/field:w-full transition-all duration-700" />
                           </div>
                           <div className="relative group/field">
                              <input required type="tel" className="w-full bg-bg-section px-6 py-5 outline-none text-sm group-focus-within/field:ring-1 ring-amber-cta transition-all" placeholder="Mobile (+91)" />
                              <div className="absolute bottom-0 left-0 h-[1px] bg-amber-cta w-0 group-focus-within/field:w-full transition-all duration-700" />
                           </div>
                        </div>

                        <div className="relative group/field">
                            <select required className="w-full bg-bg-section px-6 py-5 outline-none text-sm appearance-none cursor-pointer">
                               <option value="">Nature of Interest</option>
                               <option>New Car Purchase</option>
                               <option>Used Car Exchange</option>
                               <option>Finance Consultation</option>
                               <option>Corporate Fleet</option>
                            </select>
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-metal-400">
                               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"></path></svg>
                            </div>
                        </div>

                        <div className="relative group/field">
                           <textarea required rows={4} className="w-full bg-bg-section px-6 py-5 outline-none text-sm group-focus-within/field:ring-1 ring-amber-cta transition-all resize-none" placeholder="Your Message / Preferences" />
                           <div className="absolute bottom-0 left-0 h-[1px] bg-amber-cta w-0 group-focus-within/field:w-full transition-all duration-700" />
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
                           <button type="submit" className="w-full sm:w-auto btn-primary px-12 py-5">Initiate Contact</button>
                           <div className="flex items-center gap-3 text-metal-400 text-[10px] uppercase tracking-widest leading-tight">
                              <svg width="12" height="12" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                              Secured Internal <br/> Data Processing
                           </div>
                        </div>
                     </form>
                  </motion.div>
                )}
              </AnimatePresence>
           </div>
        </div>

      </div>
    </div>
  );
}
