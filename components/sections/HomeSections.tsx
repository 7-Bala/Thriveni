'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  fadeUp, 
  fadeLeft,
  fadeRight,
  staggerContainer, 
  clipReveal, 
  EASING 
} from '@/lib/animations';
import { useGSAPOnMount, useParallax } from '@/hooks/useScrollAnimation';

// --- HERO SECTION ---
export function Hero() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  
  // Parallax background
  useParallax(bgRef, 0.4);

  useGSAPOnMount((ctx) => {
    // Word Rolling Animation
    if (!ctx.selector) return;
    const words = ctx.selector('.word-roll');
    gsap.from(words, {
      y: '100%',
      duration: 1,
      stagger: 0.1,
      ease: 'expo.out',
      delay: 0.5
    });

    // Floating brand logos sine wave
    if (!ctx.selector) return;
    const logos = ctx.selector('.floating-logo');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logos.forEach((logo: any, i: number) => {
      gsap.to(logo, {
        y: 20,
        duration: 3 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });
  });

  const headline = ["Drive", "Your", "Dream", "Car"];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center bg-metal-900 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-metal-900/95 via-metal-900/70 to-transparent z-10" />
        <div ref={bgRef} className="absolute inset-0 scale-110">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920"
            alt="Thriveni Premium Hero"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      <div className="container-custom relative z-20 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASING.expoOut }}
            className="inline-flex items-center gap-4 mb-8"
          >
            <span className="w-12 h-[1px] bg-amber-cta"></span>
            <span className="text-olive-200 text-[11px] uppercase tracking-[0.3em] font-bold">
              Chennai&apos;s No.1 Multi-Brand Dealership
            </span>
          </motion.div>

          <h1 className="font-display text-display-2xl text-white leading-[1.1] mb-8">
            {headline.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-4 last:mr-0">
                <span className="word-roll inline-block">{word}</span>
              </span>
            ))}
            <br />
            <span className="inline-block overflow-hidden">
              <span className="word-roll inline-block text-amber-cta italic underline decoration-1 underline-offset-[12px] decoration-white/20">Home Today.</span>
            </span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: EASING.expoOut }}
            className="text-metal-300 text-lg md:text-xl font-body font-light mb-12 max-w-xl leading-relaxed"
          >
            Explore 200+ handpicked vehicles across Maruti, NEXA, Honda, and Royal Enfield. Experience the Thriveni advantage.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: EASING.expoOut }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link href="/inventory" className="btn-primary">
              Explore Inventory
            </Link>
            <Link href="/contact" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-metal-900">
              Book Test Drive
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <motion.div 
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-amber-cta origin-top" 
        />
        <span className="text-metal-500 text-[10px] uppercase tracking-[0.4em] font-bold">Scroll</span>
      </div>
    </section>
  );
}

// --- BRAND SHOWCASE ---
export function BrandShowcase() {
  const brands = [
    { name: 'Maruti Arena', models: 42, logo: 'MA' },
    { name: 'NEXA', models: 18, logo: 'NX' },
    { name: 'Honda', models: 15, logo: 'HD' },
    { name: 'Royal Enfield', models: 28, logo: 'RE' },
    { name: 'Commercial', models: 12, logo: 'CV' },
  ];

  return (
    <section className="bg-bg-primary py-24 md:py-32 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="text-olive-600 font-body text-[11px] uppercase tracking-[0.3em] font-bold block mb-4"
            >
              OUR PORTFOLIO
            </motion.span>
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="font-display text-4xl md:text-5xl text-metal-900"
            >
              5 Iconic Brands. <br className="hidden md:block" />One Destination.
            </motion.h2>
          </div>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-metal-500 max-w-sm"
          >
            From budget-friendly hatchbacks to premium motorcycles. Premium scale quality assurance.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {brands.map((brand, i) => (
            <Link href={`/inventory?brand=${brand.name}`} key={i} className="group relative block bg-white border border-metal-100 p-10 overflow-hidden">
              {/* Wipe Reveal Background Overlay */}
              <motion.div 
                variants={clipReveal}
                className="absolute inset-0 bg-olive-700 pointer-events-none z-0"
                style={{ clipPath: 'inset(0% 100% 0% 0%)' }}
              />
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto bg-bg-section flex items-center justify-center font-display text-2xl text-metal-400 group-hover:text-white group-hover:bg-transparent transition-all mb-6">
                  {brand.logo}
                </div>
                <h3 className="font-body font-bold text-[13px] uppercase tracking-wider text-metal-900 group-hover:text-white transition-colors">
                  {brand.name}
                </h3>
                <p className="text-olive-600 text-xs font-semibold mt-2 group-hover:text-olive-200 transition-colors">
                  {brand.models} Models
                </p>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- WHY CHOOSE US (UPDATED) ---
// --- FEATURED INVENTORY (NEW) ---
export function FeaturedInventory() {
  const cars = [
    { name: 'Swift', brand: 'Maruti Arena', price: '₹6.5L', image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800' },
    { name: 'Grand Vitara', brand: 'NEXA', price: '₹14.2L', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },
    { name: 'City', brand: 'Honda', price: '₹12.8L', image: 'https://images.unsplash.com/photo-1527247043589-98e6ac08f56c?auto=format&fit=crop&q=80&w=800' },
    { name: 'Himalayan', brand: 'Royal Enfield', price: '₹2.3L', image: 'https://images.unsplash.com/photo-1558981403-c5f91adaca60?auto=format&fit=crop&q=80&w=800' },
  ];

  useGSAPOnMount((ctx) => {
    if (!ctx.selector) return;
    const cards = ctx.selector('.car-card');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cards.forEach((card: any, i: number) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        delay: (i % 4) * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 92%'
        }
      });
    });
  });

  return (
    <section className="py-32 bg-primary">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl md:text-5xl text-metal-900 mb-6">Trending This Month</h2>
            <p className="text-metal-500">Hand-curated selection of the most sought-after models in Chennai.</p>
          </div>
          <Link href="/inventory" className="text-olive-700 font-bold border-b border-olive-700 pb-1 hover:text-amber-cta hover:border-amber-cta transition-all">
            Explore All 200+ Cars →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car, i) => (
            <div key={i} className="car-card group cursor-pointer">
              <div className="relative h-64 overflow-hidden rounded-sm bg-bg-section mb-6">
                <Image src={car.image} alt={car.name} fill className="object-cover group-hover:scale-105 transition-all duration-700" />
                <div className="absolute top-4 left-4 bg-amber-cta text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1">New Batch</div>
              </div>
              <h3 className="font-display text-xl text-metal-900 group-hover:text-amber-cta transition-colors">{car.name}</h3>
              <p className="text-metal-400 text-xs uppercase tracking-widest mt-1 mb-3">{car.brand}</p>
              <div className="text-lg font-bold text-olive-700">From {car.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- TESTIMONIAL CAROUSEL (NEW) ---
export function TestimonialCarousel() {
  const testimonials = [
    { name: 'Vikram K.', body: "Thriveni Cars made my buying experience effortless. No hidden fees, just true service." },
    { name: 'Anitha R.', body: "The range of models available under one roof is incredible. Saved me so much time!" },
    { name: 'Sameer G.', body: "Transparent pricing and quick delivery. Highly recommended for premium cars." },
  ];

  return (
    <section className="py-32 bg-metal-900 relative overflow-hidden">
      <div className="container-custom text-center relative z-10">
        <span className="text-amber-cta text-[11px] uppercase tracking-[0.4em] font-bold block mb-6">STORY OF TRUST</span>
        <div className="max-w-4xl mx-auto overflow-hidden">
          <div className="flex gap-12 snap-x snap-mandatory">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-full snap-center py-8">
                <p className="font-body text-2xl md:text-3xl text-metal-300 italic mb-10 leading-relaxed font-light">
                   &quot;{t.body}&quot;
                </p>
                <div className="text-white font-display text-xl">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const stats = [
    { label: 'Happy Families', value: 10000, suffix: '+' },
    { label: 'Brands', value: 5, suffix: '' },
    { label: 'Years Trust', value: 15, suffix: '+' },
    { label: 'Branches', value: 8, suffix: '' },
  ];

  return (
    <section className="bg-metal-900 py-32 relative overflow-hidden">
      {/* Particle Background Simulation */}
      <div className="absolute inset-0 opacity-[0.05]">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              x: [0, Math.random() * 100, 0], 
              y: [0, Math.random() * 100, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ duration: 10 + Math.random() * 10, repeat: Infinity }}
            className="absolute w-1 h-1 bg-olive-200 rounded-full"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%` 
            }}
          />
        ))}
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            {/* 90-Degree Vertical Edge Watermark */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap hidden xl:block">
              <span className="text-white/[0.03] font-display text-4xl tracking-[1em] uppercase select-none">
                ESTD. 2009 — THRIVENI CORE
              </span>
            </div>

            <div className="pl-0 lg:pl-12 border-l border-white/5">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="inline-block border border-white/10 px-4 py-1 mb-8"
              >
                <span className="text-amber-cta font-mono text-[9px] uppercase tracking-[0.5em] font-bold">
                  [WHY.THRIVENI]
                </span>
              </motion.div>

              <motion.h2 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-10 leading-[1.1]"
              >
                Engineering <br />
                <span className="text-amber-cta italic">Trust</span> Since 2009.
              </motion.h2>

              <motion.p 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="text-metal-400 text-lg leading-relaxed mb-16 max-w-lg font-light"
              >
                We dismantle the traditional dealership experience, replacing generic sales with technical precision and radical transparency.
              </motion.p>

              <div className="flex flex-col gap-12">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="flex items-center gap-8 group"
                  >
                    <div className="flex flex-col">
                      <span className="text-metal-600 font-mono text-[9px] uppercase tracking-widest mb-1 group-hover:text-amber-cta transition-colors">
                        [{stat.label.toUpperCase().replace(/ /g, '.')}]
                      </span>
                      <div className="font-display text-5xl md:text-6xl text-white flex items-baseline leading-none">
                        <Counter value={stat.value} />
                        <span className="text-amber-cta text-2xl ml-2 font-light">{stat.suffix}</span>
                      </div>
                    </div>
                    {/* Industrial Connector Line */}
                    <div className="h-px flex-grow bg-white/5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { 
                title: "Exclusive Leads", 
                desc: "Verified enquiries reach only our team, ensuring absolute privacy and zero spam.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>,
                num: "01"
              },
              { 
                title: "Velocity Response", 
                desc: "Engineered for speed. Our dedicated concierge team responds within 15 minutes.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/><path d="M16.24 7.76l1.41-1.41"/><path d="M7.76 16.24l-1.41 1.41"/></svg>,
                num: "02"
              },
              { 
                title: "Integrated Hub", 
                desc: "A singular destination for finance, insurance, and RTO—managed with surgical precision.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/></svg>,
                num: "03"
              },
              { 
                title: "Precision Academy", 
                desc: "Master your specific vehicle model with elite training from Thriveni-certified instructors.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 3h5v5"/><path d="M8 21H3v-5"/><path d="M3 3l18 18"/><path d="M21 3L3 21"/></svg>,
                num: "04"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={i % 2 === 0 ? fadeLeft : fadeRight}
                className={`relative bg-metal-800/40 p-10 md:p-14 border border-white/5 group transition-all duration-500 hover:bg-metal-800/60 ${i % 2 !== 0 ? 'md:mt-12' : ''}`}
              >
                {/* Numeral Watermark */}
                <div className="absolute top-8 right-10 font-display text-8xl text-white/[0.03] select-none pointer-events-none group-hover:text-amber-cta/5 transition-colors duration-700">
                  {feature.num}
                </div>

                {/* Industrial Corner Locks */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-cta opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-cta opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-bg-section border border-white/5 flex items-center justify-center text-olive-400 mb-10 group-hover:text-amber-cta group-hover:border-amber-cta/30 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl text-white font-display mb-6 group-hover:translate-x-2 transition-transform duration-500 leading-tight">
                    {feature.title}
                  </h3>
                  <div className="h-px w-12 bg-amber-cta/30 mb-6 group-hover:w-24 transition-all duration-700" />
                  <p className="text-metal-400 leading-relaxed font-body font-light">
                    {feature.desc}
                  </p>
                </div>

                {/* Mechanical Accent Strip */}
                <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-amber-cta/20 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for Animated Counter with Scramble Effect
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const chars = '0123456789X$/#';
    const targetStr = value.toString();
    
    gsap.to({ val: 0 }, {
      val: value,
      duration: 2.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 90%'
      },
      onUpdate: function() {
        if (!ref.current) return;
        
        const currentVal = Math.floor(this.targets()[0].val);
        const progress = currentVal / value;
        
        let displayStr = '';
        for (let i = 0; i < targetStr.length; i++) {
          // Progressively lock in digits based on overall completion
          if (progress > (i / targetStr.length) * 0.85) {
            displayStr += targetStr[i];
          } else {
            // Fast cycle random chars for "decoding" feel
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
  
  return <span ref={ref} className="font-mono tabular-nums">0</span>;
}

// --- EMI CALCULATOR SECTION (NEW) ---
export function EMICalculator() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [emi, _] = useState(12450);
  
  return (
    <section className="py-32 bg-bg-section relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASING.expoOut }}
            className="lg:w-3/5 bg-white p-12 shadow-2xl border border-metal-100"
          >
            <h2 className="font-display text-4xl text-metal-900 mb-8">Personalized Finance Plan</h2>
            <div className="space-y-10">
              {['Car Price', 'Down Payment', 'Tenure (Months)'].map((label, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-4">
                    <label className="text-xs uppercase tracking-widest font-bold text-metal-600">{label}</label>
                    <span className="text-metal-900 font-bold">₹ {i === 2 ? '60' : '8,50,000'}</span>
                  </div>
                  <input type="range" className="w-full h-1 bg-bg-section rounded-full appearance-none accent-olive-700" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASING.expoOut }}
            className="lg:w-2/5 text-center lg:text-left"
          >
            <span className="text-olive-600 font-bold text-[11px] uppercase tracking-widest block mb-4">ESTIMATED EMI</span>
            <motion.div 
              key={emi}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              className="font-display text-7xl md:text-8xl text-metal-900 mb-6"
            >
              ₹{emi.toLocaleString()}
            </motion.div>
            <p className="text-metal-500 mb-10 max-w-sm">Monthly payments calculated at 9.5% interest rate. Exact rates subject to credit profile.</p>
            <Link href="/contact" className="btn-primary">Get Bank Quotes</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- CALL TO ACTION (UPDATED CENTER-OUT) ---
// --- OFFERS PREVIEW (NEW) ---
export function OffersPreview() {
  const offers = [
    { title: 'Festival Bonanza', disc: 'Up to ₹75,000 Off on NEXA Range', code: 'THRIVENI75' },
    { title: 'Zero Down Payment', disc: 'Drive home any Maruti Arena car with ₹0 upfront', code: 'ZEROUP' },
  ];

  return (
    <section className="py-24 bg-bg-primary overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-amber-cta text-[11px] uppercase tracking-[0.4em] font-bold block mb-4">LIMITED TIME</span>
          <h2 className="font-display text-4xl text-metal-900">Current Exclusive Offers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {offers.map((offer, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASING.expoOut }}
              className="bg-white border border-olive-600/10 p-10 relative group"
            >
              <div className="absolute top-0 right-0 p-4">
                 <span className="bg-olive-600 text-white text-[9px] uppercase tracking-widest px-3 py-1 font-bold">Offer Code: {offer.code}</span>
              </div>
              <h3 className="font-display text-2xl text-metal-900 mb-4">{offer.title}</h3>
              <p className="text-metal-500 mb-8">{offer.disc}</p>
              <Link href="/offers" className="text-amber-cta font-bold text-xs uppercase tracking-widest border-b border-transparent hover:border-amber-cta transition-all">
                Claim Offer →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CallToAction() {
  return (
    <section className="bg-olive-800 py-32 relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: -20, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
              Unlock the Best <span className="text-amber-cta underline decoration-1">Price</span> for Your Next Drive.
            </h2>
            <p className="text-olive-200 mt-6 text-lg">
              Authorized dealers for 5 brands. Exclusive stock that doesn&apos;t reach standard portals.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: 20, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full bg-white p-10 md:p-14 shadow-2xl"
          >
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="bg-bg-section border-none px-6 py-4 rounded-sm text-metal-900 text-sm focus:ring-1 focus:ring-amber-cta outline-none" />
                <input type="tel" placeholder="Phone Number" className="bg-bg-section border-none px-6 py-4 rounded-sm text-metal-900 text-sm focus:ring-1 focus:ring-amber-cta outline-none" />
              </div>
              <button type="submit" className="w-full bg-metal-900 text-white font-bold py-5 rounded-sm uppercase tracking-[0.3em] text-xs hover:bg-black transition-all">
                Request VIP Callback
              </button>
            </form>
            <div className="mt-8 flex items-center gap-3 text-metal-400 text-[10px] uppercase tracking-widest">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Encrypted Privacy Shield: Leads reach only us.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
