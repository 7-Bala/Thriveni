'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { EASING, fadeUp } from '@/lib/animations';
import { useGSAPOnMount, useParallax } from '@/hooks/useScrollAnimation';
import HeroImage from '@/components/ui/HeroImage';
import CarImagePlaceholder from '@/components/ui/CarImagePlaceholder';
import { HERO_IMAGES, CAR_IMAGES, SECTION_BG_IMAGES } from '@/lib/images';
import { MEDIUM_BLUR } from '@/lib/blurPlaceholders';

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

    // Removed floating brand logos
  });

  const heroLine1 = ["Salem's", "Most", "Trusted"];
  const heroLine2 = ["Auto", "Dealership."];

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-metal-900">
      <HeroImage
        src={HERO_IMAGES.homepage}
        videoSrc="/videos/blacksedan.mp4"
        alt="Thriveni Premium Dealership Showroom"
        priority={true}
        objectPosition="center 45%"
        isAbsolute={false}
      >

        <div className="container-custom relative z-20 w-full min-h-screen flex flex-col justify-center pt-20">
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

            <h1 className="font-display font-extrabold text-display-2xl text-white leading-[1.05] mb-10">
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

        {/* Brand Ticker */}
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

// --- BRAND SHOWCASE ---
export function BrandShowcase() {
  const brands = [
    { name: 'Maruti Arena', count: '18 Models', desc: 'Entry to mid-segment' },
    { name: 'NEXA', count: '8 Models', desc: 'Premium Maruti range' },
    { name: 'Honda', count: '6 Models', desc: 'Sedans & SUVs' },
    { name: 'Royal Enfield', count: '12 Models', desc: 'Heritage motorcycles' },
    { name: 'Commercial', count: '4 Models', desc: 'Small commercial vehicles' },
  ];

  return (
    <section className="py-24 bg-bg-section">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASING.expoOut }}
            className="lg:w-2/5"
          >
            <h2 className="font-display font-bold text-display-lg text-metal-900 leading-tight">
              5 Premium Brands.<br />One Address.
            </h2>
            <p className="font-body font-light text-metal-500 mt-6 text-lg leading-relaxed max-w-sm">
              Every brand we carry is authorized, serviced, and supported exclusively at Thriveni — no third parties.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASING.expoOut }}
            className="lg:w-3/5"
          >
            {brands.map((brand, i) => (
              <Link
                key={i}
                href={`/inventory?brand=${encodeURIComponent(brand.name)}`}
                className="flex items-center justify-between py-5 border-b border-metal-100 group hover:bg-olive-50 hover:px-4 transition-all duration-300 -mx-4 px-4"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display font-semibold text-xl text-metal-900 group-hover:text-olive-700 transition-colors">{brand.name}</span>
                  <span className="font-body font-light text-metal-400 text-sm hidden sm:block">{brand.desc}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-metal-400 group-hover:text-olive-600 transition-colors">{brand.count}</span>
                  <svg className="w-4 h-4 text-metal-300 group-hover:text-olive-600 group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- WHY CHOOSE US (UPDATED) ---
// --- FEATURED INVENTORY (NEW) ---
interface Car {
  id: string;
  brand: string;
  model: string;
  variant: string;
  price: number;
  fuel: string;
  transmission: string;
  year: number;
  images: string; // JSON
}

export function FeaturedInventory({ initialCars = [] }: { initialCars?: Car[] }) {
  const cars = initialCars.map(car => ({
    name: car.model,
    brand: car.brand,
    price: `₹${(car.price / 100000).toFixed(1)}L`,
    image: JSON.parse(car.images)[0],
    fuel: car.fuel,
    trans: car.transmission,
    year: car.year
  }));

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
    <section className="py-32 bg-bg-primary">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-display font-bold text-display-xl text-metal-900">Our Inventory.</h2>
            <p className="text-metal-500 mt-6">Hand-curated selection of the most sought-after models in Salem.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group bg-white border border-metal-100 overflow-hidden cursor-pointer transition-all duration-300 hover:border-l-[3px] hover:border-l-amber-cta"
            >
              <Link href={`/inventory/${car.name.toLowerCase().replace(' ', '-')}`}>
                <div className="aspect-[4/3] relative overflow-hidden bg-metal-900">
                  {car.image ? (
                    <Image
                      src={car.image}
                      alt={`${car.brand} ${car.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL={MEDIUM_BLUR}
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
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
                      <h3 className="font-display font-semibold text-xl text-metal-900 leading-none mt-1">{car.name}</h3>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-mono font-bold text-lg text-metal-900 leading-none">{car.price}</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-metal-50 flex gap-4 text-[11px] font-body text-metal-400">
                    <span>{car.fuel}</span>
                    <span className="text-metal-200">·</span>
                    <span>{car.trans}</span>
                    <span className="text-metal-200">·</span>
                    <span className="font-mono">{car.year}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <Link href="/inventory" className="inline-flex items-center gap-3 text-sm font-body font-semibold text-metal-900 hover:text-olive-700 transition-colors mt-12 border-b border-metal-900 pb-1 hover:border-olive-700">View full inventory</Link>
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
      {/* Background Image Texture */}
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

export function BrandAuthority() {
  return (
    <section className="py-32 bg-metal-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">

          {/* Column 1 — The Big Number */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASING.expoOut }}
          >
            <div className="font-display font-extrabold text-white leading-none" style={{ fontSize: 'clamp(5rem, 12vw, 9rem)' }}>15</div>
            <div className="font-body font-light text-metal-400 text-lg mt-3">Years of automotive excellence in Salem.</div>
            <div className="h-px bg-white/10 mt-10 mb-10" />
            <p className="font-body font-light text-metal-500 text-sm leading-relaxed">Founded in 2009, Thriveni Cars has built a reputation on one principle: the customer decides when they&apos;re ready, not the salesperson.</p>
          </motion.div>

          {/* Column 2 — Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASING.expoOut }}
            className="flex flex-col gap-10"
          >
            {[
              { val: '10,000+', label: 'Families served since 2009' },
              { val: '200+', label: 'Vehicles in live inventory' },
              { val: '5', label: 'Authorized brand franchises' },
              { val: '8', label: 'Branches across Salem' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-mono text-3xl font-bold text-white">{stat.val}</div>
                <div className="font-body font-light text-metal-500 text-sm mt-1">{stat.label}</div>
                {i < 3 && <div className="h-px bg-white/5 mt-10" />}
              </div>
            ))}
          </motion.div>

          {/* Column 3 — Differentiators */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASING.expoOut }}
            className="flex flex-col gap-8"
          >
            <div className="font-body text-[11px] font-medium text-metal-600 uppercase tracking-[0.2em] mb-2">Why Thriveni</div>
            {[
              'Exclusive stock not listed on CarDekho or CarWale.',
              '15-minute callback guarantee, no exceptions.',
              '10+ banking partners for the lowest EMI in Salem.',
              'Factory-certified technicians only. No outsourcing.',
              'Price transparency — no hidden charges, ever.',
            ].map((fact, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-4 h-px bg-olive-600 mt-3 shrink-0" />
                <p className="font-body font-light text-metal-400 text-base leading-relaxed">{fact}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// --- EMI CALCULATOR SECTION (NEW) ---
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
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">

          {/* Left — Sliders */}
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
                <input type="range" className="w-full h-1 bg-metal-100 rounded-lg appearance-none cursor-pointer accent-amber-cta" min={0} max={Math.floor(carPrice * 0.5)} step={10000} value={Math.min(downPayment, Math.floor(carPrice * 0.5))} onChange={e => setDownPayment(Number(e.target.value))} />
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
                <input type="range" className="w-full h-1 bg-metal-100 rounded-lg appearance-none cursor-pointer accent-amber-cta" min={12} max={84} step={6} value={tenure} onChange={e => setTenure(Number(e.target.value))} />
                <div className="flex justify-between mt-2">
                  <span className="font-mono text-[10px] text-metal-400">12 mo</span>
                  <span className="font-mono text-[10px] text-metal-400">84 mo</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Result */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASING.expoOut }}
            className="lg:w-1/2 w-full"
          >
            <div className="border-t-2 border-metal-900 pt-10">
              <div className="font-body font-light text-metal-500 text-sm uppercase tracking-[0.2em] mb-3">Monthly EMI</div>
              <motion.div key={emi} initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }} className="font-mono font-bold text-metal-900 leading-none mb-10" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                ₹{fmt(emi)}
              </motion.div>

              <div className="space-y-0 border border-metal-100">
                {[
                  { label: 'Loan Amount', val: `₹${fmt(principal)}` },
                  { label: 'Total Interest', val: `₹${fmt(totalInterest)}` },
                  { label: 'Total Payable', val: `₹${fmt(totalAmount)}` },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center px-6 py-5 border-b border-metal-50 last:border-b-0">
                    <span className="font-body font-light text-metal-500 text-sm">{row.label}</span>
                    <span className="font-mono text-metal-900 font-bold text-sm">{row.val}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary mt-10 w-full text-center block">Get Bank Quotes</Link>
            </div>
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
                {/* Ribbon removed */}
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
