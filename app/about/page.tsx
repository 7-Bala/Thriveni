'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { fadeUp, EASING } from '@/lib/animations';
import HeroImage from '@/components/ui/HeroImage';
import { HERO_IMAGES, PEOPLE_IMAGES, EVENT_IMAGES } from '@/lib/images';
import { LIGHT_BLUR } from '@/lib/blurPlaceholders';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Timeline SVG Drawing Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-bg-primary overflow-hidden">
      
      {/* SECTION 1 — PREMIUM HERO */}
      <section className="relative min-h-[80vh] flex items-center bg-metal-900 overflow-hidden">
        <HeroImage 
          src={HERO_IMAGES.aboutPage} 
          alt="Thriveni Cars Premium Showroom" 
          overlay="dark-left"
          priority={true}
          objectPosition="center 30%"
        >
          <div className="container-custom relative z-20 py-32">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASING.expoOut }}
              className="max-w-3xl"
            >
              <span className="text-amber-cta text-[11px] uppercase tracking-[0.4em] font-bold block mb-6">SINCE 2009</span>
              <h1 className="font-display text-display-2xl text-white leading-tight mb-8">
                Legacy of <span className="text-amber-cta italic underline decoration-1 underline-offset-8">Trust</span>.
              </h1>
              <p className="text-metal-300 text-xl font-body font-light leading-relaxed max-w-xl">
                Thriveni Cars is Chennai&apos;s answer to the need for transparent, premium multi-brand vehicle retail.
              </p>
            </motion.div>
          </div>
        </HeroImage>
      </section>

      {/* SECTION 2 — THE STORY (SVG DRAWING TIMELINE) */}
      <section className="relative py-32 bg-bg-primary overflow-hidden">
        {/* Winding SVG Path - Desktop Only Indicator */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px hidden lg:block bg-metal-100 z-0 overflow-hidden">
           <motion.div 
             style={{ scaleY: pathLength }}
             className="w-full h-full bg-olive-700 origin-top"
           />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-24">
            <motion.span 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="text-olive-600 text-[11px] uppercase tracking-[0.4em] font-bold block mb-4"
            >
              MILESTONES
            </motion.span>
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="font-display text-5xl text-metal-900"
            >
              The Thriveni Journey
            </motion.h2>
          </div>

          <div className="flex flex-col gap-32">
            {[
              { year: '2009', title: 'The T.Nagar Genesis', text: 'Started with a single focus: Radical transparency in Maruti retail.' },
              { year: '2015', title: 'Premium Expansion', text: 'Introduction of NEXA & Honda Cars. Redefined the showroom experience.' },
              { year: '2019', title: 'Diversification', text: 'Launched Royal Enfield division and Commercial segment.' },
              { year: '2025', title: '8 Branches & Growing', text: 'Serving 10,000+ families with a stock of 200+ vehicles.' }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20`}>
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: EASING.expoOut }}
                  className="lg:w-1/2"
                >
                  <div className="font-display text-8xl text-bg-section absolute -z-10 -mt-12 select-none">{item.year}</div>
                  <div className="bg-white p-12 shadow-2xl border border-metal-100 relative">
                     <span className="text-olive-600 font-bold block mb-4 uppercase tracking-[0.2em] text-[10px]">{item.year} Milestone</span>
                     <h3 className="font-display text-3xl text-metal-900 mb-6">{item.title}</h3>
                     <p className="text-metal-500 leading-relaxed text-lg">{item.text}</p>
                  </div>
                </motion.div>
                <div className="lg:w-1/2">
                   <div className="aspect-video bg-bg-section overflow-hidden rounded-sm relative group">
                      <Image 
                        src={`https://images.unsplash.com/photo-15${50 + i}519819-016930ada31c?auto=format&fit=crop&q=80&w=800`} 
                        alt={item.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
                      />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — LEADERSHIP (MD FEATURE CARD) */}
      <section className="bg-metal-900 py-32 overflow-hidden">
        <div className="container-custom">
            <div className="bg-metal-800 border border-white/5 flex flex-col md:flex-row items-center overflow-hidden rounded-2xl">
              <div className="md:w-2/5 aspect-[3/4] relative overflow-hidden rounded-l-2xl">
                 <Image 
                   src={PEOPLE_IMAGES.md} 
                   alt="S. Thriveni, Managing Director" 
                   fill 
                   sizes="(max-width: 1024px) 100vw, 40vw"
                   placeholder="blur"
                   blurDataURL={LIGHT_BLUR}
                   className="object-cover transition-all duration-700" 
                   style={{ 
                     objectPosition: 'center 15%',
                     filter: 'brightness(1.0) contrast(1.04) saturate(0.90)',
                     boxShadow: 'inset -40px 0 40px rgba(15,14,12,0.4)'
                   }}
                 />
              </div>
              <div className="md:w-3/5 p-16 md:p-24 relative">
                 {/* Decorative Accent */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-olive-700/10 blur-3xl" />
                 
                 <motion.div 
                   initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                 >
                   <span className="text-amber-cta text-[11px] uppercase tracking-[0.4em] font-bold block mb-4">LEADERSHIP PROFILE</span>
                   <h2 className="font-display text-4xl text-white mb-10">S. Thriveni</h2>
                   <p className="font-display text-2xl text-metal-300 italic mb-12 leading-relaxed border-l-4 border-amber-cta pl-8">
                     &quot;Trust is the engine that drives us. Every vehicle sold carries the weight of a family&apos;s dream, and we handle that with absolute reverence.&quot;
                   </p>
                   <div className="flex items-center gap-6">
                      <div className="h-px w-12 bg-white/20" />
                      <span className="text-metal-500 uppercase tracking-widest text-[10px] font-bold">Managing Director & Founder</span>
                   </div>
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 4 — CSR (SCAN LINE REVEAL) */}
      <section className="py-32 bg-bg-section">
        <div className="container-custom">
          <div className="max-w-2xl mb-20">
             <span className="text-olive-700 font-bold text-[11px] uppercase tracking-[0.4em] block mb-4">GIVING BACK</span>
             <h2 className="font-display text-5xl text-metal-900">Our Chennai Commitment</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Road Safety', stat: '5k+', desc: 'Young drivers trained in our defensive driving initiatives.', image: EVENT_IMAGES.roadSafety },
              { title: 'Education', stat: '200', desc: 'Annual scholarships for underprivileged engineering students.', image: EVENT_IMAGES.scholarship },
              { title: 'Sustainability', stat: '10k', desc: 'Managed plantation drive across dealership network zones.', image: EVENT_IMAGES.greenPledge }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="bg-white group shadow-xl border border-metal-100 overflow-hidden"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                   <Image 
                     src={item.image} 
                     alt={item.title} 
                     fill 
                     sizes="(max-width: 768px) 100vw, 33vw"
                     className="object-cover group-hover:scale-105 transition-transform duration-1000"
                     style={{ filter: 'saturate(0.82) brightness(0.94)' }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="p-12 relative z-10">
                   {/* Visual Scan Line Effect */}
                   <motion.div 
                     initial={{ top: '-100%' }}
                     whileHover={{ top: '100%' }}
                     transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                     className="absolute left-0 right-0 h-[2px] bg-olive-600/20 z-0 pointer-events-none"
                   />
                   
                   <div className="font-display text-6xl text-amber-cta mb-6">
                      <Counter value={parseInt(item.stat)} />
                      <span className="text-2xl ml-1">{item.stat.includes('k') ? 'k+' : '+'}</span>
                   </div>
                   <h3 className="font-display text-xl text-metal-900 mb-4">{item.title}</h3>
                   <p className="text-metal-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Stats Counter Component with Scramble Effect
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const chars = '0123456789%&?#';
    const targetStr = value.toString();
    
    gsap.to({ val: 0 }, {
      val: value,
      duration: 2.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 92%'
      },
      onUpdate: function() {
        if (!ref.current) return;
        
        const currentVal = Math.floor(this.targets()[0].val);
        const progress = currentVal / value;
        
        let displayStr = '';
        for (let i = 0; i < targetStr.length; i++) {
          if (progress > (i / targetStr.length) * 0.85) {
            displayStr += targetStr[i];
          } else {
            displayStr += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        
        ref.current.innerText = displayStr;
      },
      onComplete: () => {
        if (ref.current) ref.current.innerText = value.toString();
      }
    });
  }, [value]);
  
  return <span ref={ref as React.RefObject<HTMLSpanElement>} className="font-mono tabular-nums">0</span>;
}
