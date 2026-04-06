'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUp, EASING } from '@/lib/animations';
import HeroImage from '@/components/ui/HeroImage';
import { HERO_IMAGES, CAR_IMAGES, SECTION_BG_IMAGES } from '@/lib/images';

export default function VenturesPage() {
  const ventures = [
    { title: 'New Car Sales', brand: 'Multi-Brand Excellence', desc: 'Authorized retail for NEXA, Maruti Arena, and Honda with radical transparency.', img: CAR_IMAGES.grandVitara.front, overlay: 'rgba(15, 14, 12, 0.75)', size: 'large' },
    { title: 'Bespoke Service', brand: 'Factory Standards', desc: 'State-of-the-art diagnostic bays with genuine spare parts and certified technicians.', img: SECTION_BG_IMAGES.serviceCenter, overlay: 'rgba(15, 14, 12, 0.80)', size: 'small' },
    { title: 'Driving Suite', brand: 'Safety First', desc: 'Certified instructors and simulator-based training for the next generation of drivers.', img: SECTION_BG_IMAGES.drivingSchool, overlay: 'rgba(15, 14, 12, 0.78)', size: 'small' },
    { title: 'Finance & Insurance', brand: 'Instant Approval', desc: '10+ banking partners providing the most competitive interest rates in Chennai.', img: SECTION_BG_IMAGES.showroomInterior, overlay: 'rgba(15, 14, 12, 0.76)', size: 'small' },
    { title: 'Used Car Exchange', brand: 'Best Value', desc: 'Transparent evaluation and best-in-market price for your existing vehicle exchange.', img: CAR_IMAGES.city.side, overlay: 'rgba(15, 14, 12, 0.76)', size: 'small' }
  ];

  return (
    <div className="min-h-screen bg-bg-primary pb-32">
      
      {/* SECTION 1 — HEADER HERO */}
      <section className="bg-metal-900 overflow-hidden">
        <HeroImage 
          src={HERO_IMAGES.venturesPage} 
          alt="Thriveni Cars Service Center" 
          overlay="dark-left"
          objectPosition="center 35%"
          priority
        >
          <div className="container-custom py-32">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <span className="text-amber-cta text-[11px] uppercase tracking-[0.4em] font-bold block mb-4">ECOSYSTEM</span>
              <h1 className="font-display text-display-xl text-white leading-tight mb-8">
                Beyond the <span className="text-amber-cta underline decoration-1 underline-offset-8">Showroom.</span>
              </h1>
              <p className="text-metal-300 text-lg max-w-xl font-body font-light">
                Thriveni is a complete automotive lifecycle partner. We manage everything from your first lesson to your 100,000km service.
              </p>
            </motion.div>
          </div>
        </HeroImage>
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
                  className={`${v.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'} group overflow-hidden relative min-h-[420px] flex flex-col justify-end border border-metal-100`}
                >
                    {v.img && (
                      <>
                        <Image 
                          src={v.img} 
                          alt={v.title} 
                          fill 
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-all duration-1000" 
                        />
                        <div className="absolute inset-0 z-10" style={{ background: v.overlay || 'rgba(15, 14, 12, 0.7)' }} />
                      </>
                    )}
                    
                    <div className="p-12 relative z-20">
                       <div className={`${v.img ? 'text-olive-200' : 'text-olive-300'} font-bold text-[9px] uppercase tracking-widest mb-3`}>{v.brand}</div>
                       <h3 className={`font-display text-3xl ${v.img ? 'text-white' : 'text-metal-900'} mb-4`}>{v.title}</h3>
                       <p className={`${v.img ? 'text-metal-300' : 'text-metal-500'} text-sm mb-10 leading-relaxed max-w-sm`}>{v.desc}</p>
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
