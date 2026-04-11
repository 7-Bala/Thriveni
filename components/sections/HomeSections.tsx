'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { EASING, fadeUp, createParticleField } from '@/lib/animations';
import { useGSAPOnMount, useParallax, use3DParallax, useNumberFlip } from '@/hooks/useScrollAnimation';
import HeroImage from '@/components/ui/HeroImage';
import CarImagePlaceholder from '@/components/ui/CarImagePlaceholder';
import DonutChart from '@/components/ui/DonutChart';
import Carousel3D from '@/components/sections/Carousel3D';
import { HERO_IMAGES, CAR_IMAGES, SECTION_BG_IMAGES } from '@/lib/images';
import { MEDIUM_BLUR } from '@/lib/blurPlaceholders';

export function Hero() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const particlesRef = useRef(null);

  useParallax(bgRef, 0.4);
  use3DParallax(contentRef, 8);

  useEffect(() => {
    if (particlesRef.current) {
      createParticleField(particlesRef.current, 40);
    }
  }, []);

  useGSAPOnMount((ctx) => {
    if (!ctx.selector) return;
    const words = ctx.selector('.word-roll');
    gsap.from(words, {
      y: '100%',
      duration: 1,
      stagger: 0.1,
      ease: 'expo.out',
      delay: 0.5
    });
  });

  const heroLine1 = ["Salem's", "Most", "Trusted"];
  const heroLine2 = ["Auto", "Dealership."];

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-metal-900">
      {/* Particle Field Background */}
      <div 
        ref={particlesRef}
        className="absolute inset-0 z-10 pointer-events-none opacity-40"
        style={{ overflow: 'hidden' }}
      />
      
      <HeroImage
        src={HERO_IMAGES.homepage}
        videoSrc="/videos/blacksedan.mp4"
        alt="Thriveni Premium Dealership Showroom"
        priority={true}
        objectPosition="center 45%"
        overlay="dark-left"
        isAbsolute={false}
      >
        <div ref={contentRef} className="container-custom relative z-20 w-full min-h-screen flex flex-col justify-center pt-20">
          <div className="w-full sm:max-w-[80%] lg:max-w-[55%] pt-10 sm:pt-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: EASING.expoOut }}
              className="inline-flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-[1px] bg-amber-cta"></span>
              <span className="text-olive-200 text-[11px] uppercase tracking-[0.3em] font-bold">
                Salem&apos;s No.1 Multi-Brand Dealership
              </span>
            </motion.div>

            <h1 className="font-display font-bold text-display-2xl text-white leading-[1.1] mb-10">
              <div>
                {heroLine1.map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden mr-4">
                    <span className="word-roll inline-block">{word}</span>
                  </span>
                ))}
              </div>
              <div>
                {heroLine2.map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden mr-4">
                    <span className="word-roll inline-block">{word}</span>
                  </span>
                ))}
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: EASING.expoOut }}
              className="text-metal-400 text-lg font-body font-light mb-10 max-w-lg leading-relaxed"
            >
              Authorized for Maruti Arena, NEXA, Honda, and Royal Enfield across 8 branches in Salem. Est. 2009.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1, ease: EASING.expoOut }}
              className="grid grid-cols-2 sm:flex sm:items-center gap-y-6 sm:gap-0 mb-10 sm:divide-x divide-white/10"
            >
              {[
                { val: '15', label: 'Years' },
                { val: '5', label: 'Brands' },
                { val: '10,000+', label: 'Families' },
                { val: '8', label: 'Branches' },
              ].map((s, i) => (
                <div key={i} className="pr-4 sm:px-6 sm:first:pl-0">
                  <div className="font-mono text-white font-bold text-base">{s.val}</div>
                  <div className="font-body text-[10px] text-metal-500 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4">
              <Link href="/inventory" className="btn-primary">Explore Inventory</Link>
              <a href="tel:+919876543210" className="inline-flex items-center gap-3 border border-white/30 text-white font-body font-semibold text-xs uppercase tracking-[0.15em] px-8 py-4 hover:bg-white hover:text-metal-900 transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +91 98765 43210
              </a>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/5 overflow-hidden">
          <div className="flex ticker-track whitespace-nowrap py-4">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-0 shrink-0">
                {['MARUTI ARENA', 'NEXA', 'HONDA', 'ROYAL ENFIELD', 'COMMERCIAL VEHICLES'].map((brand, i) => (
                  <span key={i} className="font-body font-light text-[11px] text-metal-600 tracking-[0.3em] uppercase px-10">
                    {brand}
                    <span className="ml-10 text-metal-700">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </HeroImage>
    </section>
  );
}

export function BrandShowcase() {
  const brands = [
    { name: 'Maruti Arena', count: '18 Models', desc: 'Entry to mid-segment', color: 'from-red-500 to-orange-500' },
    { name: 'NEXA', count: '8 Models', desc: 'Premium Maruti range', color: 'from-blue-600 to-blue-700' },
    { name: 'Honda', count: '6 Models', desc: 'Sedans & SUVs', color: 'from-blue-500 to-purple-500' },
    { name: 'Royal Enfield', count: '12 Models', desc: 'Heritage motorcycles', color: 'from-amber-700 to-orange-600' },
    { name: 'Commercial', count: '4 Models', desc: 'Small commercial vehicles', color: 'from-gray-600 to-gray-700' },
  ];

  return (
    <section className="py-32 bg-bg-section relative">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASING.expoOut }}
            className="lg:w-2/5 sticky top-20"
          >
            <h2 className="font-display font-bold text-display-lg text-metal-900 leading-tight mb-4">
              5 Premium Brands.
            </h2>
            <h2 className="font-display font-bold text-display-lg text-amber-cta leading-tight mb-8">
              One Address.
            </h2>
            <p className="font-body font-light text-metal-500 text-lg leading-relaxed max-w-sm">
              Every brand we carry is authorized, serviced, and supported exclusively at Thriveni — no third parties, no compromises on quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASING.expoOut }}
            className="lg:w-3/5 w-full space-y-4"
          >
            {brands.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASING.expoOut }}
              >
                <Link
                  href={`/inventory?brand=${encodeURIComponent(brand.name)}`}
                  className="group flex items-center justify-between p-6 border border-metal-200 hover:border-amber-cta rounded-lg bg-white transition-all duration-300 hover:shadow-lg hover:shadow-amber-cta/10"
                >
                  <div className="flex items-baseline gap-6 flex-1">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${brand.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                    <div>
                      <span className="font-display font-bold text-2xl text-metal-900 group-hover:text-amber-cta transition-colors">{brand.name}</span>
                      <span className="font-body font-light text-metal-400 text-sm block mt-1 hidden sm:block">{brand.desc}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-mono text-sm font-semibold text-metal-600 group-hover:text-amber-cta transition-colors">{brand.count}</span>
                    <svg className="w-5 h-5 text-metal-400 group-hover:text-amber-cta group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface Car {
  id: string;
  brand: string;
  model: string;
  variant: string;
  price: number;
  fuel: string;
  transmission: string;
  year: number;
  images: string;
}

export function FeaturedInventory({ initialCars = [] }: { initialCars?: Car[] }) {
  const cars = initialCars.map(car => {
    let image = null;
    try {
      if (car.images) {
        const parsed = JSON.parse(car.images);
        image = Array.isArray(parsed) ? parsed[0] : null;
      }
    } catch (e) {
      console.error('Failed to parse images for featured car:', car.model, e);
    }

    return {
      id: car.id,
      name: car.model,
      brand: car.brand,
      price: `₹${(car.price / 100000).toFixed(1)}L`,
      image: image || '',
      fuel: car.fuel,
      transmission: car.transmission,
      year: car.year
    };
  });

  return (
    <section className="py-32 bg-bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASING.expoOut }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div className="max-w-xl">
            <h2 className="font-display font-bold text-display-xl text-metal-900">Featured Models.</h2>
            <p className="text-metal-500 mt-6">Explore our curated selection with 3D interactive carousel. Drag, swipe, or click to navigate.</p>
          </div>
        </motion.div>

        {/* 3D Carousel for Featured Cars */}
        {cars.length > 0 ? (
          <div className="mb-16">
            <Carousel3D items={cars} autoRotate={true} autoRotateDelay={5000} />
          </div>
        ) : (
          <div className="text-center py-12 text-metal-400">No featured cars available</div>
        )}

        {/* Grid view for additional inventory */}
        <div className="mt-20 pt-16 border-t border-metal-200">
          <h3 className="font-display font-bold text-2xl text-metal-900 mb-8">More From Our Inventory</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cars.slice(0, 4).map((car, i) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASING.expoOut }}
                className="group bg-white border border-metal-100 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-l-[3px] hover:border-l-amber-cta"
              >
                <Link href={`/inventory/${car.name.toLowerCase().replace(' ', '-')}`}>
                  <div className="aspect-[4/3] relative overflow-hidden bg-metal-900">
                    {car.image ? (
                      <Image
                        src={car.image}
                        alt={`${car.brand} ${car.name}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        placeholder="blur"
                        blurDataURL={MEDIUM_BLUR}
                        className="object-cover group-hover:scale-[1.08] transition-transform duration-700"
                        style={{ filter: 'brightness(0.97) contrast(1.03)' }}
                      />
                    ) : (
                      <CarImagePlaceholder />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div className="flex flex-col">
                        <div className="font-body text-[10px] uppercase font-bold tracking-widest text-olive-600 mb-1 leading-none">{car.brand}</div>
                        <h3 className="font-display font-semibold text-lg text-metal-900 leading-none mt-1">{car.name}</h3>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-mono font-bold text-base text-metal-900 leading-none">{car.price}</div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-metal-50 flex gap-3 text-[10px] font-body text-metal-500">
                      {car.fuel && <span>{car.fuel}</span>}
                      {car.fuel && <span className="text-metal-300">·</span>}
                      {car.transmission && <span>{car.transmission}</span>}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <Link href="/inventory" className="inline-flex items-center gap-3 text-sm font-body font-semibold text-metal-900 hover:text-olive-700 transition-colors mt-12 border-b border-metal-900 pb-1 hover:border-olive-700">View full inventory</Link>
      </div>
    </section>
  );
}

export function TestimonialCarousel() {
  const testimonials = [
    { name: 'Vikram K.', body: "Thriveni Cars made my buying experience effortless. No hidden fees, just true service." },
    { name: 'Anitha R.', body: "The range of models available under one roof is incredible. Saved me so much time!" },
    { name: 'Sameer G.', body: "Transparent pricing and quick delivery. Highly recommended for premium cars." },
  ];

  return (
    <section className="py-32 bg-metal-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={SECTION_BG_IMAGES.cityRoad}
          alt="Salem City Road"
          fill
          sizes="100vw"
          className="object-cover opacity-10"
          style={{ filter: 'grayscale(100%) brightness(0.5)' }}
        />
        <div className="absolute inset-0 bg-metal-900/90" />
      </div>

      <div className="container-custom text-center relative z-10">
        <span className="text-amber-cta text-[11px] uppercase tracking-[0.4em] font-bold block mb-6">STORY OF TRUST</span>
        <div className="max-w-4xl mx-auto overflow-x-auto touch-pan-x snap-x snap-mandatory flex gap-8 md:gap-12 pb-4 px-4" style={{ scrollbarWidth: 'none' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-[85%] md:min-w-full snap-center py-8">
                <p className="font-body text-2xl md:text-3xl text-metal-300 italic mb-10 leading-relaxed font-light">
                  &quot;{t.body}&quot;
                </p>
                <div className="text-white font-display text-xl">— {t.name}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export function WhyThriveni() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const features = [
    {
      num: "01",
      title: "Exclusive Leads",
      desc: "Verified enquiries reach only our team, ensuring absolute privacy and zero spam. Your data never leaves our encrypted ecosystem."
    },
    {
      num: "02",
      title: "Velocity Response",
      desc: "Engineered for speed. Our dedicated concierge team is mandated to respond within 15 minutes of your initial inquiry."
    },
    {
      num: "03",
      title: "Integrated Hub",
      desc: "Sales, finance, insurance, and RTO services seamlessly coordinated under a single architectural roof."
    },
    {
      num: "04",
      title: "Certified Scale",
      desc: "Salem's largest multi-brand inventory, maintained exclusively by factory-certified technicians for every specific model."
    }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-metal-900 relative">
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-metal-800 pb-16 mb-8 gap-10">
          <div className="max-w-3xl">
            <div className="mb-10">
              <span className="font-body text-[13px] text-metal-400 uppercase tracking-[0.4em] font-bold">Why Thriveni</span>
            </div>
            <h2 className="font-display font-extrabold text-white leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}>
              Engineering <span className="text-amber-cta">Trust</span> <br />Since 2009.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-body font-light text-metal-400 text-lg leading-relaxed mb-10">
              We dismantle the traditional dealership experience, replacing generic sales tactics with technical precision and radical transparency.
            </p>
            <div className="flex items-center gap-12">
              <div>
                <div className="font-display text-4xl text-white mb-1">28<span className="text-amber-cta">+</span></div>
                <div className="font-body text-[9px] text-metal-500 uppercase tracking-widest font-bold">Strategic Branches</div>
              </div>
              <div>
                <div className="font-display text-4xl text-white mb-1">10<span className="text-amber-cta">k</span></div>
                <div className="font-body text-[9px] text-metal-500 uppercase tracking-widest font-bold">Technical Team</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {features.map((feat, i) => (
            <motion.div
              key={feat.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group flex flex-col md:flex-row items-start md:items-center py-12 border-b border-metal-800 hover:border-metal-600 transition-colors cursor-default"
            >
              <div className="md:w-1/5 mb-4 md:mb-0">
                <span className="font-mono text-5xl font-light text-metal-800 group-hover:text-amber-cta transition-colors duration-500">{feat.num}</span>
              </div>
              <div className="md:w-2/5 mb-4 md:mb-0 pr-8">
                <h3 className="font-display text-3xl text-metal-100 group-hover:translate-x-4 transition-transform duration-500">{feat.title}</h3>
              </div>
              <div className="md:w-2/5">
                <p className="font-body font-light text-metal-400 text-base leading-relaxed group-hover:text-metal-100 transition-colors duration-500">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EMICalculator() {
  const [carPrice, setCarPrice] = useState(850000);
  const [downPayment, setDownPayment] = useState(150000);
  const [tenure, setTenure] = useState(60);

  const principal = carPrice - downPayment;
  const r = 9.5 / 12 / 100;
  const n = tenure;
  const emi = principal > 0 ? Math.round((principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)) : 0;
  const totalAmount = Math.round(emi * n);
  const totalInterest = Math.round(totalAmount - principal);

  const fmt = (v: number) => v.toLocaleString('en-IN');

  return (
    <section className="py-32 bg-bg-section">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASING.expoOut }}
            className="lg:w-1/2 w-full"
          >
            <h2 className="font-display font-bold text-display-lg text-metal-900 mb-4">Finance Calculator</h2>
            <p className="font-body font-light text-metal-500 text-base mb-16">Estimate your monthly payment at 9.5% per annum.</p>

            <div className="space-y-14">
              <div>
                <div className="flex justify-between items-baseline mb-5">
                  <label className="font-body text-[11px] font-medium text-metal-600 uppercase tracking-[0.15em]">Car Price</label>
                  <span className="font-mono text-metal-900 font-bold">₹{fmt(carPrice)}</span>
                </div>
                <input type="range" className="premium-slider" min={300000} max={3000000} step={50000} value={carPrice} onChange={e => setCarPrice(Number(e.target.value))} />
                <div className="flex justify-between mt-2">
                  <span className="font-mono text-[10px] text-metal-400">₹3 L</span>
                  <span className="font-mono text-[10px] text-metal-400">₹30 L</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-5">
                  <label className="font-body text-[11px] font-medium text-metal-600 uppercase tracking-[0.15em]">Down Payment</label>
                  <span className="font-mono text-metal-900 font-bold">₹{fmt(downPayment)}</span>
                </div>
                <input type="range" className="premium-slider" min={0} max={Math.floor(carPrice * 0.5)} step={10000} value={Math.min(downPayment, Math.floor(carPrice * 0.5))} onChange={e => setDownPayment(Number(e.target.value))} />
                <div className="flex justify-between mt-2">
                  <span className="font-mono text-[10px] text-metal-400">₹0</span>
                  <span className="font-mono text-[10px] text-metal-400">₹{fmt(Math.floor(carPrice * 0.5))}</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-5">
                  <label className="font-body text-[11px] font-medium text-metal-600 uppercase tracking-[0.15em]">Tenure</label>
                  <span className="font-mono text-metal-900 font-bold">{tenure} months</span>
                </div>
                <input type="range" className="premium-slider" min={12} max={84} step={6} value={tenure} onChange={e => setTenure(Number(e.target.value))} />
                <div className="flex justify-between mt-2">
                  <span className="font-mono text-[10px] text-metal-400">12 mo</span>
                  <span className="font-mono text-[10px] text-metal-400">84 mo</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASING.expoOut }}
            className="lg:w-1/2 w-full"
          >
            {/* EMI Amount Display */}
            <div className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-cta/30 rounded-lg p-8 mb-10">
              <div className="font-body font-light text-metal-500 text-sm uppercase tracking-[0.2em] mb-3">Monthly EMI</div>
              <motion.div 
                key={emi} 
                initial={{ scale: 1.05, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                transition={{ duration: 0.4, ease: 'backOut' }} 
                className="font-mono font-bold text-metal-900 leading-none mb-6" 
                style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}
              >
                ₹{fmt(emi)}
              </motion.div>
              <div className="h-1 bg-gradient-to-r from-amber-cta to-yellow-500 rounded-full mb-6" />
              <p className="font-body text-sm text-metal-600">For {tenure} months at 9.5% per annum</p>
            </div>

            {/* Donut Chart */}
            <div className="mb-10">
              <DonutChart principal={principal} interest={totalInterest} total={totalAmount} animated={true} />
            </div>

            {/* Breakdown Table */}
            <div className="space-y-3 mb-8">
              {[
                { label: 'Loan Amount', val: `₹${fmt(principal)}`, icon: '💰' },
                { label: 'Total Interest', val: `₹${fmt(totalInterest)}`, icon: '📊' },
                { label: 'Total Payable', val: `₹${fmt(totalAmount)}`, icon: '✓' },
              ].map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex justify-between items-center px-6 py-4 border border-metal-100 bg-white hover:border-amber-cta/50 transition-colors rounded-lg"
                >
                  <span className="font-body font-light text-metal-600 text-sm">{row.label}</span>
                  <span className="font-mono text-metal-900 font-bold text-sm">{row.val}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary mt-6 w-full text-center block hover:shadow-lg transition-shadow">Get Approved In Minutes</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
              className="relative min-h-[300px] flex flex-col justify-end p-10 group overflow-hidden"
            >
              <Image
                src={i === 0 ? SECTION_BG_IMAGES.testDrive : CAR_IMAGES.city.side}
                alt={offer.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                style={{ filter: 'brightness(0.4)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-0 right-0 p-6 z-20">
              </div>

              <div className="relative z-10">
                <h3 className="font-display text-3xl text-white mb-4 group-hover:text-amber-cta transition-colors">{offer.title}</h3>
                <p className="text-metal-300 mb-8 max-w-sm">{offer.disc}</p>
                <Link href="/offers" className="inline-flex items-center gap-2 text-amber-cta text-sm font-body font-semibold hover:gap-4 transition-all">
                  View offer
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CallToAction() {
  return (
    <section className="py-32 bg-metal-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASING.expoOut }}
          className="max-w-4xl"
        >
          <h2 className="font-display font-extrabold text-white leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            The right car.<br />
            The right price.<br />
            <span className="text-metal-500">Right here in Salem.</span>
          </h2>
          <p className="font-body font-light text-metal-500 text-lg mt-8 mb-12 max-w-lg leading-relaxed">
            Walk in, call, or message us. No pressure, no hidden charges. Just the car you want at a price you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919876543210?text=Hi, I'm interested in a car at Thriveni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-body font-semibold text-sm px-8 py-4 hover:bg-[#1EBE5D] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-body font-semibold text-sm px-8 py-4 hover:bg-white/10 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Call Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
