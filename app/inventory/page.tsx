'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, EASING } from '@/lib/animations';
import { useGSAPOnMount } from '@/hooks/useScrollAnimation';
import gsap from 'gsap';
import HeroImage from '@/components/ui/HeroImage';
import BrandLogo from '@/components/ui/BrandLogo';
import CarImagePlaceholder from '@/components/ui/CarImagePlaceholder';
import { HERO_IMAGES, CAR_IMAGES } from '@/lib/images';
import { MEDIUM_BLUR } from '@/lib/blurPlaceholders';

export default function InventoryPage() {
  const [activeBrand, setActiveBrand] = useState('All');
  
  const cars = [
    { id: '1', brand: 'Maruti Arena', model: 'Swift', variant: 'ZXI Plus', price: '8.99', fuel: 'Petrol', trans: 'Manual', year: 2024, img: CAR_IMAGES.swift.side },
    { id: '2', brand: 'NEXA', model: 'Baleno', variant: 'Alpha', price: '9.88', fuel: 'Petrol', trans: 'Automatic', year: 2024, img: CAR_IMAGES.baleno.side },
    { id: '3', brand: 'Honda', model: 'City', variant: 'ZX CVT', price: '16.05', fuel: 'Petrol', trans: 'Automatic', year: 2023, img: CAR_IMAGES.city.side },
    { id: '4', brand: 'Royal Enfield', model: 'Classic 350', variant: 'Dark Stealth', price: '2.20', fuel: 'Petrol', trans: 'Manual', year: 2024, img: CAR_IMAGES.classic350.side },
  ];

  const filteredCars = activeBrand === 'All' ? cars : cars.filter(c => c.brand === activeBrand);

  useGSAPOnMount((ctx) => {
    if (!ctx.selector) return;
    gsap.from(ctx.selector('.inventory-card'), {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.8,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: ctx.selector('.inventory-grid'),
        start: 'top 85%'
      }
    });
  });

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header — Hero Section */}
      <section className="bg-metal-900 overflow-hidden">
        <HeroImage 
          src={HERO_IMAGES.inventoryPage} 
          alt="Thriveni Cars Inventory" 
          overlay="dark-full"
          objectPosition="center 60%"
          priority
        >
          <div className="container-custom py-32">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <span className="text-amber-cta text-[11px] uppercase tracking-widest font-bold block mb-4">THRIVENI STOCK</span>
              <h1 className="font-display text-5xl md:text-6xl text-white mb-6">Discovery Suite.</h1>
              <p className="text-metal-400 text-lg max-w-xl">Explore our current inventory across 8 premium branches in Salem.</p>
            </motion.div>
          </div>
        </HeroImage>
      </section>

      <div className="container-custom py-16 flex flex-col lg:flex-row gap-12">
        {/* Sidebar — Animated Entry */}
        <motion.aside 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASING.expoOut }}
          className="w-full lg:w-72 shrink-0"
        >
          <div className="bg-white border border-metal-100 p-10 sticky top-32">
            <h2 className="font-display text-2xl text-metal-900 mb-8">Refine Search</h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-[10px] uppercase tracking-widest font-bold text-metal-400 mb-6">Filter by Brand</h3>
                <div className="flex flex-col gap-4">
                  {['All', 'Maruti Arena', 'NEXA', 'Honda', 'Royal Enfield', 'Commercial'].map(brand => (
                    <button 
                      key={brand} 
                      onClick={() => setActiveBrand(brand)}
                      className={`text-left text-sm transition-all flex items-center gap-4 group ${activeBrand === brand ? 'text-amber-cta font-bold' : 'text-metal-600 hover:text-metal-900'}`}
                    >
                      <span className={`shrink-0 w-2 h-2 rounded-full ring-1 ring-offset-2 ring-offset-bg-section transition-all ${activeBrand === brand ? 'bg-amber-cta ring-amber-cta' : 'bg-transparent ring-metal-300 group-hover:ring-metal-400'}`} />
                      {brand !== 'All' ? (
                        <div className="flex items-center gap-2">
                           <BrandLogo 
                             brand={brand === 'Maruti Arena' ? 'arena' : brand === 'Royal Enfield' ? 're' : brand.toLowerCase() as 'arena' | 'nexa' | 'honda' | 're' | 'commercial'} 
                             size="sm" 
                             variant="light" 
                           />
                        </div>
                      ) : (
                        <span>All Brands</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                 <h3 className="text-[10px] uppercase tracking-widest font-bold text-metal-400 mb-6">Price Range</h3>
                 <input type="range" className="w-full h-1 bg-bg-section appearance-none accent-olive-700" />
                 <div className="flex justify-between mt-4 text-[11px] uppercase font-bold text-metal-500">
                    <span>₹2L</span>
                    <span>₹25L+</span>
                 </div>
              </div>
            </div>
            
            <button className="w-full btn-primary mt-12 py-3 !text-[10px]">Update Results</button>
          </div>
        </motion.aside>

        {/* Results — Layout Shuffle */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-10 pb-6 border-b border-metal-100">
            <span className="text-metal-500 text-xs uppercase tracking-widest font-bold">
               {filteredCars.length} Handpicked Results
            </span>
            <select className="bg-transparent border-none text-metal-900 text-xs font-bold uppercase tracking-widest outline-none cursor-pointer">
               <option>Sort by: Newest</option>
               <option>Price: Low to High</option>
               <option>Price: High to Low</option>
            </select>
          </div>
          
          <motion.div 
            layout 
            className="inventory-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredCars.map(car => (
                <motion.div 
                  key={car.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: EASING.expoOut }}
                  className="inventory-card bg-white border border-metal-100 overflow-hidden group cursor-pointer"
                >
                  <Link href={`/inventory/${car.id}`}>
                    <div className="aspect-[16/9] relative overflow-hidden bg-[#1A1E14]">
                      {car.img ? (
                        <Image 
                          src={car.img} 
                          alt={`${car.brand} ${car.model}`} 
                          fill 
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          placeholder="blur"
                          blurDataURL={MEDIUM_BLUR}
                          className="object-cover group-hover:scale-[1.06] transition-transform duration-700" 
                          style={{ 
                            objectPosition: 'center 55%',
                            filter: 'brightness(0.96) contrast(1.04)' 
                          }}
                        />
                      ) : (
                        <CarImagePlaceholder />
                      )}
                      
                      {/* Subtle Bottom Gradient */}
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                      
                      {/* Price Tag Overlay Removed */}

                      <div className="absolute top-4 right-4 bg-olive-700 text-white text-[9px] uppercase tracking-widest font-bold px-3 py-1">Featured Stock</div>
                    </div>
                    <div className="p-8">
                      <div className="text-[10px] font-bold text-olive-600 uppercase tracking-widest mb-3">{car.brand}</div>
                      <h3 className="font-display text-2xl text-metal-900 mb-2">{car.model}</h3>
                      <div className="font-display text-xl text-metal-700 mb-6">₹{car.price} <span className="text-sm font-body font-normal text-metal-400 uppercase tracking-widest">Lakh</span></div>
                      
                      <div className="flex gap-4 text-[10px] uppercase font-bold text-metal-400 mb-8 border-y border-metal-50 py-3">
                        <span>{car.fuel}</span>
                        <span className="w-1 h-1 bg-metal-100 rounded-full my-auto" />
                        <span>{car.trans}</span>
                        <span className="w-1 h-1 bg-metal-100 rounded-full my-auto" />
                        <span>{car.year}</span>
                      </div>
                      
                      <div className="flex items-end justify-between">
                        <div>
                           <div className="text-metal-400 text-[10px] uppercase tracking-widest font-bold mb-1">Variant</div>
                           <div className="font-body font-semibold text-metal-900 text-sm">{car.variant}</div>
                        </div>
                        <div className="text-olive-700 font-bold text-[11px] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                           View Specs →
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
