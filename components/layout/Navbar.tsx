'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';
import BrandLogo from '@/components/ui/BrandLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isHome = pathname === '/';
  // SOLID bg for secondary pages, blurred only on scroll as requested
  const navBg = isScrolled ? 'bg-metal-900/90 backdrop-blur-md border-b border-white/5' : (isHome ? 'bg-transparent' : 'bg-metal-900');

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-amber-cta z-[60] origin-left"
        style={{ scaleX }}
      />

      <header className="fixed w-full top-0 z-50 flex flex-col">
        {/* Top Bar - Refined Typography */}
        <div className="h-10 bg-metal-900 text-metal-100 font-body text-[10px] uppercase tracking-[0.2em] hidden lg:flex items-center justify-between px-10 xl:px-16 border-b border-white/5">
          <div>Salem&apos;s No.1 Multi-Brand Dealership</div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 hover:text-amber-cta transition-colors cursor-pointer">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
            <div className="flex items-center gap-2 text-[#25D366] hover:brightness-110 transition-all cursor-pointer">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </div>
            <div>MON–SAT: 9AM–7PM</div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={`h-[80px] transition-all duration-500 ease-in-out ${navBg}`}>
          <div className="container-custom h-full flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/thriveni-logo.svg"
                alt="Thriveni Cars Logo"
                width={160}
                height={50}
                className="w-auto h-9 lg:h-11 transition-transform group-hover:scale-[1.02]"
                priority
              />
            </Link>

            {/* Desktop Nav - Animated Underline */}
            <nav
              className="hidden lg:flex items-center gap-10 h-full"
              ref={dropdownRef}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setHoveredLink(null);
              }}
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                return (
                  <div
                    key={link.label}
                    className="relative h-full flex items-center group/nav"
                    onMouseEnter={() => {
                      setActiveDropdown(link.label);
                      setHoveredLink(link.label);
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setHoveredLink(null)}
                      className={`relative py-1 font-body text-[13px] font-medium tracking-wide transition-colors ${isActive ? 'text-white' : 'text-metal-400 hover:text-white'}`}
                    >
                      {link.label}

                      {/* Static Active State */}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-cta/40" />
                      )}

                      {/* Ultra-Smooth Sliding Line */}
                      {hoveredLink === link.label && (
                        <motion.span
                          layoutId="navHoverIndicator"
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-cta z-10"
                          transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
                        />
                      )}
                    </Link>

                    {/* Dropdown */}
                    {link.dropdown && (
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-full left-0 min-w-[280px] bg-metal-900 border border-white/5 py-6 z-50 overflow-hidden"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
                          >
                            {/* Ghostly Background Image for Dropdown Removed */}

                            {link.dropdown.map((sublink) => (
                              <Link
                                key={sublink.label}
                                href={sublink.href}
                                className={`group/sub block py-3 px-8 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 flex items-center gap-4 hover:translate-x-2 relative z-10 ${pathname === sublink.href ? 'text-amber-cta border-l-2 border-amber-cta bg-white/5' : 'text-metal-300 hover:text-white'}`}
                              >
                                {sublink.label.includes('Maruti') || sublink.label.includes('NEXA') || sublink.label.includes('Honda') || sublink.label.includes('Royal') ? (
                                  <div className="flex items-center gap-3">
                                    <BrandLogo
                                      brand={sublink.label.includes('Arena') ? 'arena' : sublink.label.includes('NEXA') ? 'nexa' : sublink.label.includes('Honda') ? 'honda' : 're'}
                                      size="sm"
                                      variant="light"
                                    />
                                    <span>{sublink.label}</span>
                                  </div>
                                ) : (
                                  sublink.label
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="tel:+919876543210" className="font-mono text-[11px] text-metal-400 hover:text-white transition-colors tracking-wider">+91 98765 43210</a>
              <Link
                href="/contact"
                className="bg-amber-cta text-white font-body font-semibold text-[11px] uppercase tracking-[0.15em] px-6 py-3 hover:bg-amber-light transition-colors"
              >
                Book Test Drive
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden relative z-50 p-2 w-10 h-10 flex flex-col justify-center gap-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                className="w-7 h-0.5 bg-current block transition-all"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="w-7 h-0.5 bg-current block transition-all"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                className="w-7 h-0.5 bg-current block transition-all"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full Screen Menu - Sliding Path */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 bg-metal-900 z-40 flex flex-col pt-32 px-10 pb-12 overflow-y-auto"
          >
            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex flex-col"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-display text-4xl uppercase tracking-wider text-white`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="flex flex-col gap-4 mt-4 pl-6 border-l border-white/5">
                      {link.dropdown.map((sublink) => (
                        <Link
                          key={sublink.label}
                          href={sublink.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-metal-400 text-xl font-body hover:text-white transition-colors"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-24 pt-12 border-t border-white/5 flex flex-col gap-6"
            >
              <div className="flex justify-between items-center text-metal-300">
                <a href="tel:+919876543210" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 text-lg font-medium">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Call Us
                </a>
                <a href="https://wa.me/919876543210" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 text-[#25D366] text-lg font-medium">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                  WhatsApp
                </a>
              </div>
              <Link
                href="/contact"
                className="w-full bg-amber-cta text-white font-bold py-5 text-center rounded-sm text-lg uppercase tracking-widest shadow-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Test Drive
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
