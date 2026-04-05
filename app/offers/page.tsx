'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  fadeUp, 
  staggerContainer, 
  EASING 
} from '@/lib/animations';

export default function OffersPage() {
  const [activeTab, setActiveTab] = useState('All Offers');

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-32">
      
      {/* SECTION 1 — HEADER & COUNTDOWN */}
      <section className="mb-20">
        <div className="container-custom">
           <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
              <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
                 <span className="text-amber-cta text-[11px] uppercase tracking-[0.4em] font-bold block mb-4">OPPORTUNITY</span>
                 <h1 className="font-display text-display-xl text-metal-900 leading-tight">
                   The Monsoon <br/> <span className="text-olive-700">Privilege Suite.</span>
                 </h1>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: EASING.expoOut }}
                className="bg-metal-900 p-8 sm:p-10 border-l-4 border-amber-cta shadow-2xl shrink-0"
              >
                 <div className="text-metal-400 text-[10px] uppercase tracking-[0.4em] font-bold mb-6">OFFER EXPIRY TRACKER</div>
                 <div className="flex gap-6 sm:gap-10">
                    <CountdownUnit value={12} label="DAYS" />
                    <CountdownUnit value={4} label="HRS" />
                    <CountdownUnit value={45} label="MIN" />
                    <CountdownUnit value={30} label="SEC" />
                 </div>
              </motion.div>
           </div>

           <div className="flex flex-wrap gap-4 mt-16 border-b border-metal-100 pb-8">
            {['All Offers', 'Maruti Arena', 'NEXA', 'Honda', 'Royal Enfield'].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-all px-6 py-2 ${activeTab === tab ? 'text-amber-cta border-b border-amber-cta' : 'text-metal-400 hover:text-metal-900'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — MAIN OFFERS GRID */}
      <section>
        <div className="container-custom">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {[
               { brand: 'NEXA', title: 'Grand Vitara Hybrid', disc: 'Up to ₹75,000 Off on top variants', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },
               { brand: 'Maruti Arena', title: 'The New Swift', disc: 'Zero down payment + Accessory kit worth ₹10k', img: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800' },
               { brand: 'Honda', title: 'City 5th Gen', disc: 'Exclusive exchange bonus of ₹50,000', img: 'https://images.unsplash.com/photo-1527247043589-98e6ac08f56c?auto=format&fit=crop&q=80&w=800' },
             ].map((offer, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="bg-white border border-metal-100 group cursor-pointer relative overflow-hidden"
                >
                   {/* Ribbon Unfurl Effect */}
                   <div className="absolute top-0 right-0 z-10 w-32 h-32 overflow-hidden">
                      <div className="absolute top-0 right-0 bg-olive-700 text-white text-[9px] font-bold uppercase tracking-widest px-10 py-1 rotate-45 translate-x-8 translate-y-2 shadow-xl">Exclusive</div>
                   </div>

                   <div className="aspect-[4/3] relative overflow-hidden bg-bg-section">
                      <Image src={offer.img} alt={offer.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                   </div>
                   
                   <div className="p-10">
                      <div className="text-olive-700 font-bold text-[9px] uppercase tracking-widest mb-3">{offer.brand}</div>
                      <h3 className="font-display text-2xl text-metal-900 mb-4">{offer.title}</h3>
                      <p className="text-metal-500 text-sm mb-10 leading-relaxed font-body font-light">{offer.disc}</p>
                      
                      <Link href="/contact" className="flex items-center justify-between group/link">
                         <span className="text-amber-cta text-[10px] font-bold uppercase tracking-[0.3em]">Claim Offer</span>
                         <div className="w-8 h-8 flex items-center justify-center border border-metal-200 group-hover/link:bg-metal-900 group-hover/link:text-white transition-all">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                         </div>
                      </Link>
                   </div>
                </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* SECTION 3 — URGENCY CTA */}
      <section className="mt-32">
         <div className="container-custom">
            <div className="bg-amber-cta p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
               {/* Asymmetric Decor */}
               <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
               
               <div className="relative z-10">
                  <h2 className="font-display text-4xl text-metal-900 mb-4">Stock Clearing Initiative</h2>
                  <p className="text-metal-800 text-lg max-w-xl font-body font-medium">Enquire today for additional dealer-level discounts on 2024 models not available on brand portals.</p>
               </div>
               
               <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                  <Link href="/contact" className="bg-metal-900 text-white px-10 py-5 font-bold text-[10px] uppercase tracking-widest hover:bg-olive-800 transition-all">Book Consultation</Link>
                  <Link href="/inventory" className="bg-white text-metal-900 px-10 py-5 font-bold text-[10px] uppercase tracking-widest hover:bg-bg-section transition-all">Browse Inventory</Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

function CountdownUnit({ value, label }: { value: number, label: string }) {
  return (
    <div className="text-center group">
       <div className="font-display text-4xl sm:text-5xl text-white mb-2 group-hover:text-amber-cta transition-colors">
          {value.toString().padStart(2, '0')}
       </div>
       <div className="text-metal-500 text-[9px] uppercase tracking-widest font-bold">{label}</div>
    </div>
  );
}
