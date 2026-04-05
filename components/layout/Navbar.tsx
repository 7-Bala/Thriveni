'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
  const navBg = isScrolled || !isHome ? 'bg-metal-900/95 backdrop-blur-md border-b border-olive-800/30' : 'bg-transparent';

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-amber-cta z-[60] origin-left" 
        style={{ scaleX }} 
      />
      
      <header className="fixed w-full top-0 z-50 flex flex-col">
        {/* Top Bar */}
        <div className="h-10 bg-metal-900 text-metal-100 font-body text-xs hidden lg:flex items-center justify-between px-6 xl:px-16 border-b border-white/5">
          <div>Chennai&apos;s Premier Multi-Brand Dealership</div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-amber-cta transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
            <div className="flex items-center gap-2 hover:text-amber-cta transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </div>
            <div>Mon–Sat: 9AM–7PM</div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={`h-[72px] transition-all duration-300 ${navBg}`}>
          <div className="container-custom h-full flex items-center justify-between">
            <Link href="/" className="flex flex-col">
              <Image src="/images/thriveni-logo.svg" alt="Thriveni Cars Logo" width={140} height={40} className="w-auto h-8 lg:h-10" priority />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 h-full" ref={dropdownRef}>
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                return (
                  <div key={link.label} className="relative h-full flex items-center" 
                       onMouseEnter={() => setActiveDropdown(link.label)}
                       onMouseLeave={() => setActiveDropdown(null)}>
                    <Link 
                      href={link.href}
                      className={`font-body text-sm font-medium transition-colors ${isActive ? 'text-amber-cta' : 'text-metal-100 hover:text-amber-cta'}`}
                    >
                      {link.label}
                      {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-cta" />}
                    </Link>
                    
                    {/* Dropdown */}
                    {link.dropdown && (
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div 
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-0 mt-0 min-w-[220px] bg-metal-900 border border-olive-800/20 shadow-automotive py-2 z-50"
                          >
                            {link.dropdown.map((sublink) => (
                              <Link 
                                key={sublink.label} 
                                href={sublink.href}
                                className={`block py-2.5 px-4 text-sm transition-all duration-150 flex items-center gap-2 hover:pl-6 ${pathname === sublink.href ? 'text-amber-cta border-l-2 border-amber-cta bg-metal-800/50' : 'text-metal-100 hover:text-amber-cta'}`}
                              >
                                {sublink.label}
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
            <div className="hidden lg:flex items-center gap-4">
              <button className="text-metal-100 hover:text-amber-cta p-2 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </button>
              <Link href="/contact" className="bg-amber-cta text-metal-900 font-body font-semibold text-sm px-5 py-2.5 rounded-sm hover:bg-amber-light transition-colors">
                Book Test Drive
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button 
              className="lg:hidden relative z-50 p-2 w-10 h-10 flex flex-col justify-center gap-1.5 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <motion.span 
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} 
                className="w-6 h-0.5 bg-current block transition-all"
              />
              <motion.span 
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} 
                className="w-6 h-0.5 bg-current block transition-all"
              />
              <motion.span 
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} 
                className="w-6 h-0.5 bg-current block transition-all"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 bg-metal-900 z-40 flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 mt-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div 
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex flex-col"
                >
                  <Link 
                    href={link.href}
                    className={`font-display text-3xl ${pathname === link.href ? 'text-amber-cta' : 'text-white'}`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="flex flex-col gap-3 mt-3 pl-4 border-l border-white/10">
                      {link.dropdown.map((sublink) => (
                        <Link 
                          key={sublink.label} 
                          href={sublink.href}
                          className="text-metal-400 text-lg hover:text-amber-cta transition-colors"
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto pt-10 flex flex-col gap-4"
            >
              <div className="flex justify-between text-metal-300">
                <a href="tel:+919876543210" className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Call Us
                </a>
                <a href="https://wa.me/919876543210" className="flex items-center gap-2 text-[#25D366]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  WhatsApp
                </a>
              </div>
              <Link href="/contact" className="w-full bg-amber-cta text-metal-900 font-semibold py-4 text-center rounded-sm text-lg" onClick={() => setMobileMenuOpen(false)}>
                Book Test Drive
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
