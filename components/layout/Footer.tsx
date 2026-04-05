import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      {/* Pre-Footer Strip */}
      <div className="py-10 bg-olive-800">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl font-display text-metal-50 text-center md:text-left">
            Ready to find your perfect car?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link href="/contact" className="bg-amber-cta text-metal-900 font-semibold px-8 py-3 rounded-sm text-center hover:bg-amber-light transition-colors">
              Book Test Drive
            </Link>
            <a href="https://wa.me/919876543210" className="border border-metal-50 text-metal-50 px-8 py-3 rounded-sm text-center hover:bg-metal-50/10 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-metal-900 pt-16 pb-10">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="flex flex-col inline-flex">
              <Image src="/images/thriveni-logo.svg" alt="Thriveni Cars Logo" width={140} height={40} className="w-auto h-8" />
            </Link>
            <p className="text-metal-400 text-sm mt-2">Chennai&apos;s Premier Multi-Brand Dealership</p>
            <p className="text-metal-400 text-sm mt-4 leading-relaxed">
              Your trusted partner for Maruti Arena, NEXA, Honda, Royal Enfield and Commercial vehicles.
            </p>
            <div className="flex gap-3 mt-6">
              {['instagram', 'facebook', 'youtube', 'linkedin'].map((social) => (
                <a key={social} href={`#${social}`} className="w-9 h-9 rounded-full bg-metal-800 text-metal-300 flex items-center justify-center hover:bg-olive-600 hover:text-white transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
                </a>
              ))}
            </div>
            <p className="text-xs text-metal-500 mt-4">Authorized Maruti Suzuki | Honda | Royal Enfield Dealer</p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-metal-50 font-body font-semibold text-sm tracking-widest uppercase mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-amber-cta"></span>
            </h3>
            <ul className="flex flex-col gap-1.5 mt-2">
              {['Home', 'About Us', 'Inventory', 'Offers', 'Testimonials', 'Contact Us', 'Careers'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} className="text-metal-400 text-sm hover:text-amber-cta transition-colors flex items-center gap-2 group py-1.5">
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">›</span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Our Brands */}
          <div>
            <h3 className="text-metal-50 font-body font-semibold text-sm tracking-widest uppercase mb-4 relative inline-block">
              Our Brands
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-amber-cta"></span>
            </h3>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {['Maruti Arena', 'NEXA', 'Honda', 'Royal Enfield', 'Commercial Vehicles', 'Used Cars'].map((brand) => (
                <Link key={brand} href="/inventory" className="text-center bg-metal-800 text-metal-300 text-xs px-3 py-1.5 rounded-sm hover:bg-olive-700 hover:text-white transition-colors">
                  {brand}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-metal-50 font-body font-semibold text-sm tracking-widest uppercase mb-4 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-amber-cta"></span>
            </h3>
            <ul className="flex flex-col gap-4 mt-2">
              <li className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-metal-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <div className="text-metal-400 text-sm">
                  <p>123, G.N. Chetty Road, T.Nagar</p>
                  <p>45, Second Avenue, Anna Nagar</p>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-amber-cta shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="tel:+919876543210" className="text-amber-cta text-sm font-medium">+91 98765 43210</a>
              </li>
              <li className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-metal-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:info@thrivenicars.com" className="text-metal-400 text-sm">info@thrivenicars.com</a>
              </li>
              <li className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-metal-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="text-metal-400 text-sm">Mon–Sat 9AM–7PM, Sun 10AM–4PM</span>
              </li>
            </ul>
            <a href="https://wa.me/919876543210" className="mt-6 inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white border border-[#25D366] px-4 py-2 rounded-sm text-sm transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="container-custom border-t border-metal-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-metal-500 text-xs">© 2025 Thriveni Cars. All rights reserved.</p>
          <p className="text-metal-600 text-xs">Developed by Thriveni Tech</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-metal-500 text-xs hover:text-metal-300">Privacy Policy</Link>
            <span className="text-metal-700">·</span>
            <Link href="/terms" className="text-metal-500 text-xs hover:text-metal-300">Terms of Use</Link>
            <span className="text-metal-700">·</span>
            <Link href="/sitemap" className="text-metal-500 text-xs hover:text-metal-300">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center"
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-metal-900 text-white text-xs px-3 py-2 rounded-lg mr-3 shadow-lg whitespace-nowrap hidden sm:block">
          Chat with us
        </span>
        <div className="relative">
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75"></div>
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          </div>
        </div>
      </a>
    </footer>
  );
}
