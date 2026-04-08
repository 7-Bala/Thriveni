'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { 
  fadeUp, 
  EASING 
} from '@/lib/animations';
import { useGSAPOnMount } from '@/hooks/useScrollAnimation';

export default function TestimonialsPage() {
  const ratingSectionRef = useRef(null);

  useGSAPOnMount((ctx) => {
    if (!ctx.selector) return;
    // Rating bar growth animation
    const bars = ctx.selector('.rating-bar-fill');
    bars.forEach((bar: Element) => {
      const targetWidth = bar.getAttribute('data-width');
      if (!targetWidth) return;
      
      gsap.fromTo(bar, 
        { width: '0%' },
        { 
          width: targetWidth, 
          duration: 1.5, 
          ease: 'expo.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 92%'
          }
        }
      );
    });
  });

  return (
    <div className="flex flex-col min-h-screen bg-bg-primary pt-32 pb-32">
      
      {/* SECTION 1 — HEADER & GLOBAL STATS */}
      <section className="mb-24">
        <div className="container-custom">
           <motion.div initial="hidden" animate="visible" variants={fadeUp}>
             <span className="text-amber-cta text-[11px] uppercase tracking-[0.4em] font-bold block mb-4">REPUTATION</span>
             <h1 className="font-display text-display-xl text-metal-900 leading-tight mb-8">
               Verified Trust. <br/> <span className="text-olive-700">Family Approved.</span>
             </h1>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">
              {[
                { label: 'Overall Rating', val: '4.9', sub: 'from 10k+ reviews' },
                { label: 'Recommendation', val: '98%', sub: 'would buy again' },
                { label: 'Callback Time', val: '15m', sub: 'average response' },
                { label: 'Branches', val: '08', sub: 'across Salem' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: EASING.expoOut }}
                  className="bg-white border border-metal-100 p-10 relative overflow-hidden group"
                >
                   <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-olive-700 transition-all duration-500" />
                   <div className="text-[10px] font-bold text-metal-400 uppercase tracking-widest mb-4">{stat.label}</div>
                   <div className="font-display text-5xl text-metal-900 mb-2">{stat.val}</div>
                   <div className="text-metal-400 text-xs font-body">{stat.sub}</div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 2 — MASONRY REVIEWS */}
      <section className="py-24 bg-bg-section overflow-hidden">
        <div className="container-custom">
           <div className="columns-1 md:columns-2 lg:columns-3 gap-10">
             {[
               { name: 'Vikram K.', branch: 'Anna Nagar', body: "Radical transparency at its best. Thriveni Cars didn't hide any charges. The Maruti Swift delivery was a celebration for my family.", car: 'Maruti Swift ZXI' },
               { name: 'Anitha R.', branch: 'T.Nagar', body: "I've been a customer since 2012. Their NEXA service standards are better than corporate showrooms. Highly recommended for premium SUVs.", car: 'NEXA Grand Vitara' },
               { name: 'Sameer G.', branch: 'Adyar', body: "The best exchange value in Salem. They valued my old Honda much higher than the competitors and delivered my new City in 4 days.", car: 'Honda City ZX' },
               { name: 'Priya S.', branch: 'Velachery', body: "Professional, polite, and punctual. Their doorstep test-drive service saved me so much time during the monsoon.", car: 'Maruti Grand Vitara' },
               { name: 'Rajesh M.', branch: 'OMR', body: "Bought my Royal Enfield from their bespoke showroom. The custom accessories fitment was perfect. Professional staff who know their bikes.", car: 'RE Classic 350' },
               { name: 'Karthik N.', branch: 'Mogappair', body: "Smooth finance processing. I got my loan approved in 24 hours through their internal tie-ups. Stress-free vehicle ownership.", car: 'Maruti Baleno' }
             ].map((rev, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, ease: EASING.expoOut }}
                 className="break-inside-avoid mb-10 bg-white border border-metal-100 p-10 relative overflow-hidden"
               >
                  <div className="relative">
                    <div className="absolute -top-6 -left-4 font-display font-black text-metal-100 leading-none pointer-events-none select-none transition-colors group-hover:text-amber-cta/10" style={{ fontSize: '140px', lineHeight: 1 }}>&quot;</div>
                    <p className="font-body font-medium text-metal-800 text-lg leading-relaxed pt-8 relative z-10">&quot;{rev.body}&quot;</p>
                  </div>
                  <div className="mt-10 flex flex-col gap-2 relative z-10">
                    <span className="font-mono text-[11px] font-bold text-metal-900 tracking-widest uppercase">{rev.name}</span>
                    <span className="font-mono text-[10px] text-metal-400 uppercase tracking-widest">{rev.car}</span>
                  </div>
                  <div className="absolute top-0 right-0 p-6 z-10">
                     <span className="text-[9px] font-bold text-olive-600 bg-olive-50 px-2 py-1 uppercase tracking-widest">{rev.branch}</span>
                  </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* SECTION 3 — METRIC BREAKDOWN */}
      <section className="py-32 bg-white">
        <div className="container-custom">
           <div className="flex flex-col lg:flex-row items-center gap-24">
              <div className="lg:w-1/2">
                 <span className="text-olive-700 font-bold text-[11px] uppercase tracking-[0.4em] block mb-4">GRANULAR STATS</span>
                 <h2 className="font-display text-5xl text-metal-900 mb-8">Performance Indices</h2>
                 <p className="text-metal-500 text-lg font-body font-light max-w-md">We aggregate data from over 10,000 verified sales to measure our service quality across strict parameters.</p>
              </div>

              <div className="lg:w-1/2 w-full space-y-8" ref={ratingSectionRef}>
                 {[
                   { label: 'Service Quality', score: 4.9 },
                   { label: 'Staff Expertise', score: 4.9 },
                   { label: 'Transparency', score: 4.8 },
                   { label: 'Vehicle Condition', score: 4.9 },
                   { label: 'After-Sales Support', score: 4.7 }
                 ].map((cat, i) => (
                   <div key={i}>
                      <div className="flex justify-between items-end mb-3">
                         <span className="text-[10px] font-bold uppercase tracking-widest text-metal-400">{cat.label}</span>
                         <span className="font-display text-xl text-metal-900">{cat.score}</span>
                      </div>
                      <div className="h-1 w-full bg-bg-section overflow-hidden">
                         <div 
                           className="rating-bar-fill h-full bg-olive-700" 
                           data-width={`${(cat.score / 5) * 100}%`}
                         />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
