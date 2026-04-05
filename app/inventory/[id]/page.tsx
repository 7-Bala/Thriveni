'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  fadeUp, 
  EASING 
} from '@/lib/animations';
import { useGSAPOnMount } from '@/hooks/useScrollAnimation';
import gsap from 'gsap';

export default function CarDetailPage() {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1542362567-b055002b97f4?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200'
  ];

  const galleryRef = useRef(null);

  useGSAPOnMount((ctx) => {
    if (!ctx.selector) return;
    // Clip Reveal for the main image on first load
    gsap.from(ctx.selector('.main-image-container'), {
      clipPath: 'inset(0% 100% 0% 0%)',
      duration: 1.2,
      ease: 'circ.inOut'
    });
  });

  return (
    <div className="min-h-screen bg-bg-primary pb-32">
      {/* SECTION 1 — SUBTLE HERO HERO */}
      <section className="relative h-[60vh] overflow-hidden bg-metal-900 pt-20">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-metal-900/60 z-10" />
          <Image src={images[0]} alt="Car Detail Hero" fill priority className="object-cover grayscale opacity-60" />
        </motion.div>
        
        <div className="container-custom relative z-20 h-full flex flex-col justify-end pb-12">
           <motion.div initial="hidden" animate="visible" variants={fadeUp}>
             <div className="text-metal-400 text-[10px] uppercase tracking-[0.4em] font-bold mb-4">
                <Link href="/" className="hover:text-amber-cta">Main</Link> / <Link href="/inventory" className="hover:text-amber-cta">Inventory</Link> / Maruti Arena
             </div>
             <h1 className="font-display text-display-xl text-white">Swift ZXI Plus</h1>
           </motion.div>
        </div>
      </section>

      <div className="container-custom mt-16">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Main Content Component */}
          <div className="lg:w-2/3">
            {/* Gallery — Clip Wipe Interaction */}
            <div className="main-image-container relative aspect-[16/9] bg-bg-section overflow-hidden rounded-sm border border-metal-100 shadow-2xl">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeImage}
                  initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
                  animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                  exit={{ clipPath: 'inset(0% 0% 0% 100%)' }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image src={images[activeImage]} alt="Car" fill className="object-cover" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-6 right-6 bg-metal-900 text-white text-[10px] uppercase tracking-[0.3em] px-4 py-2 font-bold z-20">
                 Image 0{activeImage + 1} / 0{images.length}
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              {images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImage(i)}
                  className={`relative w-24 h-16 rounded-sm overflow-hidden border-2 transition-all ${activeImage === i ? 'border-amber-cta' : 'border-transparent grayscale opacity-50 hover:opacity-100'}`}
                >
                  <Image src={img} alt="Thumb" fill className="object-cover" />
                </button>
              ))}
            </div>

            {/* Specifications Suite */}
            <div className="mt-20">
               <h2 className="font-display text-3xl text-metal-900 mb-12 flex items-center gap-4">
                  Engineering Specs
                  <span className="h-px flex-1 bg-metal-100" />
               </h2>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
                {[
                  { label: 'Power', val: '89 BHP' },
                  { label: 'Torque', val: '113 NM' },
                  { label: 'Engine', val: '1.2L DualJet' },
                  { label: 'Economy', val: '22.4 KMPL' }
                ].map((spec, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-[10px] uppercase font-bold text-metal-400 tracking-[0.2em] mb-3">{spec.label}</div>
                    <div className="font-display text-2xl text-metal-900 border-l-2 border-olive-600 pl-4">{spec.val}</div>
                  </motion.div>
                ))}
               </div>
            </div>

            <div className="mt-20">
               <h2 className="font-display text-3xl text-metal-900 mb-8">Performance Heritage</h2>
               <p className="text-metal-500 text-lg leading-relaxed font-body font-light">
                 The Maruti Suzuki Swift has been India&apos;s favorite hatchback for over a decade. The new generation brings sportier looks, enhanced fuel efficiency with the dual-jet engine, and premium features like a 7-inch SmartPlay Studio infotainment system. Crafted for the urban navigator.
               </p>
            </div>
          </div>

          {/* Sticky Conversion Suite */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32">
               <div className="bg-white border border-metal-100 p-10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[6px] bg-amber-cta" />
                  
                  <div className="mb-10">
                     <span className="text-olive-700 font-bold text-[10px] uppercase tracking-[0.4em] block mb-4">PRICE ESTIMATE</span>
                     <div className="font-display text-5xl text-metal-900">₹8.99 <span className="text-xl font-body font-normal text-metal-400">Lakh</span></div>
                     <p className="text-[10px] text-metal-400 uppercase tracking-widest mt-2">On-Road Chennai (Excl. VAT)</p>
                  </div>

                  <form className="space-y-6">
                    <div className="relative group/field">
                      <input type="text" placeholder="Full Name" className="w-full bg-bg-section px-6 py-4 rounded-sm text-sm outline-none focus:ring-1 focus:ring-amber-cta transition-all" />
                      <div className="absolute bottom-0 left-0 h-[1px] bg-amber-cta w-0 group-focus-within/field:w-full transition-all duration-500" />
                    </div>
                    <div className="relative group/field">
                      <input type="tel" placeholder="Mobile Number" className="w-full bg-bg-section px-6 py-4 rounded-sm text-sm outline-none focus:ring-1 focus:ring-amber-cta transition-all" />
                      <div className="absolute bottom-0 left-0 h-[1px] bg-amber-cta w-0 group-focus-within/field:w-full transition-all duration-500" />
                    </div>
                    <button className="w-full btn-primary py-5">Request Preferred Quote</button>
                  </form>

                  <div className="mt-10 pt-8 border-t border-metal-50 flex flex-col gap-4">
                     <a href="https://wa.me/919876543210" className="w-full flex items-center justify-center gap-3 bg-[#25D366]/10 text-[#25D366] py-3 rounded-sm font-bold text-[10px] uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                        Instant WhatsApp Quote
                     </a>
                     <div className="flex items-center gap-3 text-metal-400 text-[9px] uppercase tracking-widest leading-none justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        Your data is never shared.
                     </div>
                  </div>
               </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
