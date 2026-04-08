'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { useGSAPOnMount } from '@/hooks/useScrollAnimation';
import gsap from 'gsap';
import HeroImage from '@/components/ui/HeroImage';
import { CAR_IMAGES } from '@/lib/images';
import { MEDIUM_BLUR } from '@/lib/blurPlaceholders';

export default function CarDetailPage() {
  // Demo data for the Swift (defaulting for [id] in this visual overhaul)
  const carData = {
    name: 'Swift ZXI Plus',
    brand: 'Maruti Arena',
    price: '8.99',
    specs: [
      { label: 'Power', val: '89 BHP' },
      { label: 'Torque', val: '113 NM' },
      { label: 'Engine', val: '1.2L DualJet' },
      { label: 'Economy', val: '22.4 KMPL' }
    ],
    colors: [
      { name: 'Oxford Blue', hex: '#1B2A4A' },
      { name: 'Pearl White', hex: '#F5F4F0', border: true },
      { name: 'Magma Grey', hex: '#3C3C3C' },
      { name: 'Lucent Orange', hex: '#C4531A' },
      { name: 'Midnight Black', hex: '#0D0D0D' }
    ],
    gallery: [
      CAR_IMAGES.swift.front,
      CAR_IMAGES.swift.side,
      CAR_IMAGES.swift.rear,
      CAR_IMAGES.swift.interior,
      CAR_IMAGES.swift.seat
    ]
  };

  const [activeImage, setActiveImage] = useState(0);

  useGSAPOnMount((ctx) => {
    if (!ctx.selector) return;
    gsap.from(ctx.selector('.main-image-container'), {
      clipPath: 'inset(0% 100% 0% 0%)',
      duration: 1.2,
      ease: 'circ.inOut'
    });
  });

  return (
    <div className="min-h-screen bg-bg-primary pb-32">
      {/* SECTION 1 — SUBTLE HERO HERO */}
      <section className="relative h-[60vh] overflow-hidden bg-metal-900 font-display">
        <HeroImage 
          src={carData.gallery[0]} 
          alt={`${carData.name} Hero`}
          overlay="dark-full"
          objectPosition="center 50%"
          priority
        >
          <div className="container-custom relative z-20 h-full flex flex-col justify-end pb-12">
             <motion.div initial="hidden" animate="visible" variants={fadeUp}>
               <div className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold mb-4 font-body">
                  <Link href="/" className="hover:text-amber-cta transition-colors">Main</Link> / <Link href="/inventory" className="hover:text-amber-cta transition-colors">Inventory</Link> / {carData.brand}
               </div>
               <h1 className="text-display-xl text-white leading-tight">{carData.name}</h1>
             </motion.div>
          </div>
        </HeroImage>
      </section>

      <div className="container-custom mt-16">
        <div className="flex flex-col gap-20 max-w-5xl mx-auto w-full">
          {/* Main Content Component */}
          <div className="w-full">
            {/* Gallery — Clip Wipe Interaction */}
            <div className="main-image-container relative aspect-[16/10] bg-[#1A1E14] overflow-hidden rounded-sm border border-white/5">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeImage}
                  initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
                  animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                  exit={{ clipPath: 'inset(0% 0% 0% 100%)' }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={carData.gallery[activeImage]} 
                    alt={`${carData.name} Perspective`} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    placeholder="blur"
                    blurDataURL={MEDIUM_BLUR}
                    className="object-cover" 
                    style={{ 
                      objectPosition: 'center 50%',
                      filter: 'brightness(1.02) contrast(1.08) saturate(0.95)'
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-6 left-6 flex items-center gap-4 z-20">
                 <div className="bg-metal-900/90 backdrop-blur-md text-amber-cta text-[10px] uppercase tracking-widest px-4 py-2 font-bold rounded border border-white/10">
                    {activeImage + 1} / {carData.gallery.length}
                 </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              {carData.gallery.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImage(i)}
                  className={`relative w-24 h-16 rounded-sm overflow-hidden border-2 transition-all duration-300 ${activeImage === i ? 'border-amber-cta scale-105 z-10' : 'border-white/5 grayscale opacity-60 hover:opacity-100 hover:grayscale-0'}`}
                >
                  <Image src={img} alt="Thumbnail View" fill sizes="96px" className="object-cover" />
                </button>
              ))}
            </div>

            {/* Specifications Suite */}
            <div className="mt-20">
               <h2 className="font-display text-4xl text-metal-900 mb-12 flex items-center gap-6">
                  Technical Specifications
                  <span className="h-px flex-1 bg-metal-100" />
               </h2>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
                {carData.specs.map((spec, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="text-[10px] uppercase font-bold text-metal-400 tracking-widest mb-4 group-hover:text-amber-cta transition-colors">{spec.label}</div>
                    <div className="font-display text-2xl text-metal-900 border-l-2 border-amber-cta pl-6 py-1">{spec.val}</div>
                  </motion.div>
                ))}
               </div>
            </div>

            <div className="mt-24 p-12 bg-bg-section border-l-4 border-olive-700">
               <h2 className="font-display text-3xl text-metal-900 mb-8">Vehicle Overview</h2>
               <p className="text-metal-500 text-lg leading-relaxed font-body font-light max-w-2xl">
                 The {carData.name} remains the benchmark for the urban navigation experience in Salem. Beyond the sportier silhouette, the dual-jet architecture provides a precise power-to-weight ratio tailored for efficient city commutes and highway stability.
               </p>
            </div>

            {/* Static Conversion Suite */}
            <div className="mt-12 bg-white flex flex-col md:flex-row justify-between items-end border border-metal-100 p-10 shadow-sm">
               <div className="w-full md:w-auto">
                  <span className="text-olive-700 font-bold text-[10px] uppercase tracking-widest block mb-4">DRIVE-AWAY PRICE</span>
                  <div className="font-display text-6xl text-metal-900 flex items-baseline gap-2 mb-2">
                     ₹{carData.price} 
                     <span className="text-xl font-body font-normal text-metal-400 uppercase tracking-widest">Lakh</span>
                  </div>
                  <p className="text-[10px] text-metal-400 uppercase tracking-widest font-bold">Standard Spec • Salem On-Road</p>
               </div>
               
               <div className="mt-8 md:mt-0 w-full md:w-auto">
                 <span className="text-metal-900 text-[10px] uppercase tracking-widest font-black block mb-4">COLOR PALETTE</span>
                 <div className="flex flex-wrap gap-4 mb-8">
                   {carData.colors.map((color, i) => (
                     <div key={i} className="group relative">
                       <div className={`w-8 h-8 rounded-full cursor-pointer transition-all hover:scale-110 shadow-inner ${color.border ? 'ring-1 ring-metal-200' : ''}`} style={{ backgroundColor: color.hex }} />
                     </div>
                   ))}
                 </div>
                 <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 btn-primary py-4 px-8 whitespace-nowrap">Reserve This Car</button>
                    <Link href="/contact" className="flex-1 flex items-center justify-center border border-metal-200 px-8 py-4 font-bold text-[10px] uppercase tracking-widest text-metal-600 hover:bg-metal-900 hover:text-white transition-all whitespace-nowrap">Test Drive</Link>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
