'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  fadeUp, 
  staggerContainer, 
  EASING 
} from '@/lib/animations';

export default function VenturesPage() {
  const ventures = [
    { title: 'New Car Sales', brand: 'Multi-Brand Excellence', desc: 'Authorized retail for NEXA, Maruti Arena, and Honda with radical transparency.', img: 'https://images.unsplash.com/photo-1562519819-016930ada31c?auto=format&fit=crop&q=80&w=800', size: 'large' },
    { title: 'Bespoke Service', brand: 'Factory Standards', desc: 'State-of-the-art diagnostic bays with genuine spare parts and certified technicians.', img: 'https://images.unsplash.com/photo-1530046339160-ce3e5b097a2f?auto=format&fit=crop&q=80&w=800', size: 'small' },
    { title: 'Driving Suite', brand: 'Safety First', desc: 'Certified instructors and simulator-based training for the next generation of drivers.', img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800', size: 'small' },
    { title: 'Finance Hub', brand: 'Instant Approval', desc: '10+ banking partners providing the most competitive interest rates in Chennai.', img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800', size: 'small' },
    { title: 'Insurance Edge', brand: 'Cashless Claims', desc: 'Comprehensive motor insurance with zero-depreciation covers and instant renewals.', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800', size: 'small' }
  ];

  return (
    <div className="min-h-screen bg-bg-primary pt-32 pb-32">
      
      {/* SECTION 1 — HEADER */}
      <section className="mb-24">
        <div className="container-custom">
           <motion.div initial="hidden" animate="visible" variants={fadeUp}>
             <span className="text-amber-cta text-[11px] uppercase tracking-[0.4em] font-bold block mb-4">ECOSYSTEM</span>
             <h1 className="font-display text-display-xl text-metal-900 leading-tight mb-8">
               Beyond the <span className="text-olive-700">Showroom.</span>
             </h1>
             <p className="text-metal-500 text-lg max-w-xl font-body font-light">
               Thriveni is a complete automotive lifecycle partner. We manage everything from your first lesson to your 100,000km service.
             </p>
           </motion.div>
        </div>
      </section>

      {/* SECTION 2 — ASYMMETRIC GRID */}
      <section>
        <div className="container-custom">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {ventures.map((v, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: EASING.expoOut }}
                  className={`${v.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'} group bg-white border border-metal-100 overflow-hidden relative`}
                >
                   <div className="aspect-[16/10] relative overflow-hidden bg-bg-section">
                      <Image src={v.img} alt={v.title} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                   </div>
                   <div className="p-12">
                      <div className="text-olive-600 font-bold text-[9px] uppercase tracking-widest mb-3">{v.brand}</div>
                      <h3 className="font-display text-3xl text-metal-900 mb-4">{v.title}</h3>
                      <p className="text-metal-500 text-sm mb-10 leading-relaxed max-w-sm">{v.desc}</p>
                      <button className="text-amber-cta font-bold text-[10px] uppercase tracking-[0.3em] border-b-2 border-transparent hover:border-amber-cta transition-all">Explore Service →</button>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 3 — INTEGRATED CALL TO ACTION */}
      <section className="mt-32">
        <div className="container-custom">
           <div className="bg-metal-900 p-16 sm:p-24 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-olive-700/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10">
                 <h2 className="font-display text-4xl sm:text-5xl text-white mb-8">Unified Service Request</h2>
                 <p className="text-metal-400 text-lg max-w-2xl mx-auto mb-16 font-body font-light">Whether it&apos;s a periodic service or a finance query, our central concierge handles all requests with a 15-minute callback guarantee.</p>
                 
                 <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className="relative group/field">
                       <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 px-6 py-5 outline-none text-white text-sm focus:ring-1 focus:ring-amber-cta transition-all" />
                    </div>
                    <div className="relative group/field">
                       <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 px-6 py-5 outline-none text-white text-sm focus:ring-1 focus:ring-amber-cta transition-all" />
                    </div>
                    <button className="btn-primary py-5">Send Request</button>
                 </form>
              </motion.div>
           </div>
        </div>
      </section>

    </div>
  );
}
