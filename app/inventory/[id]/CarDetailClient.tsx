'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, EASING } from '@/lib/animations';
import { useGSAPOnMount } from '@/hooks/useScrollAnimation';
import gsap from 'gsap';
import HeroImage from '@/components/ui/HeroImage';
import ColorSwitcher from '@/components/sections/ColorSwitcher';
import CarViewer360 from '@/components/sections/CarViewer360';
import ExplodingView from '@/components/sections/ExplodingView';
import { MEDIUM_BLUR } from '@/lib/blurPlaceholders';

interface CarDetailClientProps {
  car: {
    id: string;
    brand: string;
    model: string;
    variant: string;
    price: number;
    fuel: string;
    transmission: string;
    year: number;
    images: string; // JSON
    features: string; // JSON
    specs: string; // JSON
  };
}

interface CarSpecs {
  power?: string;
  engine?: string;
  [key: string]: string | undefined;
}

interface CarFeatures {
  items?: string[];
}

export default function CarDetailClient({ car }: CarDetailClientProps) {
  let gallery: string[] = [];
  let specs: CarSpecs = {};
  let features: CarFeatures = {};

  try {
    gallery = car.images ? JSON.parse(car.images) : [];
  } catch (e) {
    console.error('Failed to parse gallery for car:', car.id, e);
  }

  try {
    specs = car.specs ? JSON.parse(car.specs) : {};
  } catch (e) {
    console.error('Failed to parse specs for car:', car.id, e);
  }

  try {
    features = car.features ? JSON.parse(car.features) : {};
  } catch (e) {
    console.error('Failed to parse features for car:', car.id, e);
  }

  const displayPrice = (car.price / 100000).toFixed(2);

  const [activeImage, setActiveImage] = useState(0);
  const mainImageRef = useRef<HTMLImageElement>(null);

  const detailSpecs = [
    { label: 'Power', val: specs.power || 'N/A' },
    { label: 'Engine', val: specs.engine || 'N/A' },
    { label: 'Fuel', val: car.fuel },
    { label: 'Trans', val: car.transmission }
  ];

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
      <section className="relative h-[60vh] overflow-hidden bg-metal-900 font-display">
        <HeroImage 
          src={gallery[0]} 
          alt={`${car.model} Hero`}
          overlay="dark-full"
          objectPosition="center 50%"
          priority
        >
          <div className="container-custom relative z-20 h-full flex flex-col justify-end pb-12">
             <motion.div initial="hidden" animate="visible" variants={fadeUp}>
               <div className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold mb-4 font-body">
                  <Link href="/" className="hover:text-amber-cta transition-colors">Main</Link> / <Link href="/inventory" className="hover:text-amber-cta transition-colors">Inventory</Link> / {car.brand}
               </div>
               <h1 className="text-display-xl text-white leading-tight">{car.model} {car.variant}</h1>
             </motion.div>
          </div>
        </HeroImage>
      </section>

      <div className="container-custom mt-16">
        <div className="flex flex-col gap-20 max-w-5xl mx-auto w-full">
          <div className="w-full">
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
                    src={gallery[activeImage]} 
                    alt={`${car.model} Perspective`} 
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
                    {activeImage + 1} / {gallery.length}
                 </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              {gallery.map((img: string, i: number) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImage(i)}
                  className={`relative w-24 h-16 rounded-sm overflow-hidden border-2 transition-all duration-300 ${activeImage === i ? 'border-amber-cta scale-105 z-10' : 'border-white/5 grayscale opacity-60 hover:opacity-100 hover:grayscale-0'}`}
                >
                  <Image src={img} alt="Thumbnail View" fill sizes="96px" className="object-cover" />
                </button>
              ))}
            </div>

            {/* Color Switcher Section */}
            <motion.div
              className="mt-20 p-12 bg-gradient-to-br from-white to-metal-50 border border-metal-200 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASING.expoOut }}
            >
              <ColorSwitcher imageRef={mainImageRef} />
            </motion.div>

            {/* 360 Degree Viewer Section */}
            <motion.div
              className="mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASING.expoOut, delay: 0.1 }}
            >
              <CarViewer360 images={gallery} carName={car.model} />
            </motion.div>

            {/* Exploding View Section */}
            <motion.div
              className="mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASING.expoOut, delay: 0.2 }}
            >
              <ExplodingView carImage={gallery[0]} carName={car.model} />
            </motion.div>

            <div className="mt-20">
               <h2 className="font-display text-4xl text-metal-900 mb-12 flex items-center gap-6">
                  Technical Specifications
                  <span className="h-px flex-1 bg-metal-100" />
               </h2>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
                {detailSpecs.map((spec, i) => (
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
               <h2 className="font-display text-3xl text-metal-900 mb-8">Features & Highlights</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {features.items && features.items.map((item: string, i: number) => (
                   <div key={i} className="flex items-center gap-3 text-metal-500 font-body">
                     <span className="w-1.5 h-1.5 bg-amber-cta rounded-full" />
                     {item}
                   </div>
                 ))}
               </div>
            </div>

            <div className="mt-12 bg-white flex flex-col md:flex-row justify-between items-end border border-metal-100 p-10 shadow-sm">
               <div className="w-full md:w-auto">
                  <span className="text-olive-700 font-bold text-[10px] uppercase tracking-widest block mb-4">DRIVE-AWAY PRICE</span>
                  <div className="font-display text-6xl text-metal-900 flex items-baseline gap-2 mb-2">
                     ₹{displayPrice} 
                     <span className="text-xl font-body font-normal text-metal-400 uppercase tracking-widest">Lakh</span>
                  </div>
                  <p className="text-[10px] text-metal-400 uppercase tracking-widest font-bold">Standard Spec • Salem On-Road</p>
               </div>
               
               <div className="mt-8 md:mt-0 w-full md:w-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                     <button className="flex-1 btn-primary py-4 px-8 whitespace-nowrap">Reserve This Car</button>
                     <Link href="/contact" className="flex-1 flex items-center justify-center border border-metal-200 px-8 py-4 font-bold text-[10px] uppercase tracking-widest text-metal-600 hover:bg-metal-900 hover:text-white transition-all whitespace-nowrap">Test Drive Enquire</Link>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
