'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

export default function Footer() {
  return (
    <footer className="relative z-10">
      {/* Pre-Footer Strip - Action Oriented */}
      <div className="py-12 bg-olive-800">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl font-display text-metal-50 text-center md:text-left leading-tight"
          >
            Ready to find your <span className="text-amber-cta italic underline decoration-1 underline-offset-4">perfect</span> drive?
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
          >
            <Link href="/contact" className="bg-amber-cta text-white font-bold px-10 py-4 rounded-sm text-center hover:bg-amber-light transition-all uppercase tracking-widest text-[11px] shadow-xl">
              Book Test Drive
            </Link>
            <a href="https://wa.me/919876543210" className="border border-white/30 text-white px-10 py-4 rounded-sm text-center hover:bg-white/10 transition-all uppercase tracking-widest text-[11px]">
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer - Solid Dark Background */}
      <div className="bg-metal-900 pt-20 pb-12">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16"
          >
            
            {/* Column 1 — Brand Heritage */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <Link href="/" className="inline-block w-fit">
                <Image src="/images/thriveni-logo.svg" alt="Thriveni Cars Logo" width={160} height={46} className="w-auto h-10" />
              </Link>
              <p className="text-metal-400 text-sm leading-relaxed max-w-xs">
                Chennai&apos;s No.1 Multi-Brand Dealership. Your trusted partner for Maruti Arena, NEXA, Honda, Royal Enfield and Commercial vehicles since 2009.
              </p>
              <div className="flex gap-4">
                {['instagram', 'facebook', 'youtube', 'linkedin'].map((social) => (
                  <a key={social} href={`#${social}`} className="w-10 h-10 rounded-full border border-white/10 text-metal-300 flex items-center justify-center hover:bg-amber-cta hover:text-white hover:border-amber-cta transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 bg-current" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Column 2 — Discovery */}
            <motion.div variants={fadeUp}>
              <h3 className="text-metal-50 font-body font-bold text-[11px] tracking-[0.25em] uppercase mb-8 relative inline-block">
                Discovery
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-amber-cta"></span>
              </h3>
              <ul className="flex flex-col gap-4">
                {['Home', 'About Us', 'Inventory', 'Offers', 'Testimonials', 'Contact Us', 'Careers'].map((link) => (
                  <li key={link}>
                    <Link href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} className="text-metal-400 text-sm hover:text-amber-cta transition-all flex items-center gap-3 group">
                      <span className="w-4 h-[1px] bg-metal-700 group-hover:w-6 group-hover:bg-amber-cta transition-all shrink-0"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3 — Our Portfolio */}
            <motion.div variants={fadeUp}>
              <h3 className="text-metal-50 font-body font-bold text-[11px] tracking-[0.25em] uppercase mb-8 relative inline-block">
                Our Portfolio
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-amber-cta"></span>
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {['Maruti Arena', 'NEXA', 'Honda Cars', 'Royal Enfield', 'Commercial Vehicles', 'Certified Used Cars'].map((brand) => (
                  <Link key={brand} href="/inventory" className="text-metal-400 text-sm hover:text-amber-cta transition-all flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-olive-600"></span>
                    {brand}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Column 4 — Headquarters */}
            <motion.div variants={fadeUp}>
              <h3 className="text-metal-50 font-body font-bold text-[11px] tracking-[0.25em] uppercase mb-8 relative inline-block">
                Headquarters
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-amber-cta"></span>
              </h3>
              <ul className="flex flex-col gap-6">
                <li className="flex gap-4 items-start">
                  <div className="mt-1 w-5 h-5 flex items-center justify-center shrink-0 text-olive-500">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                  </div>
                  <div className="text-metal-400 text-sm leading-relaxed">
                    <p className="font-semibold text-metal-200">Corporate HQ</p>
                    <p>123, G.N. Chetty Road, T.Nagar, Chennai</p>
                  </div>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="w-5 h-5 flex items-center justify-center shrink-0 text-amber-cta">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <a href="tel:+919876543210" className="text-metal-100 text-sm font-semibold hover:text-amber-cta transition-colors">+91 98765 43210</a>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="w-5 h-5 flex items-center justify-center shrink-0 text-olive-500">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <a href="mailto:info@thrivenicars.com" className="text-metal-400 text-sm hover:text-metal-100 transition-colors">info@thrivenicars.com</a>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Bottom Bar - Clean and Minimal */}
          <div className="border-t border-white/5 mt-20 pt-8 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <p className="text-metal-500 text-[10px] uppercase tracking-[0.2em] leading-none">
                © 2026 THRIVENI CARS.
              </p>
              <div className="flex gap-6">
                {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((legal) => (
                  <Link key={legal} href={`/${legal.toLowerCase().replace(/ /g, '-')}`} className="text-metal-600 text-[9px] uppercase tracking-widest hover:text-amber-cta transition-colors">
                    {legal}
                  </Link>
                ))}
              </div>
            </div>
            
            <p className="text-metal-600 text-[9px] uppercase tracking-[0.35em] font-bold hover:text-amber-cta transition-colors">
              DEVELOPED BY THINK2THRIVE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
