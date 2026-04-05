import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-metal-900 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-metal-900/90 to-metal-900/30 z-10" />
        <div className="absolute inset-0 bg-metal-900/50 z-10 md:hidden" />
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="container-custom relative z-20 flex justify-between items-center w-full">
        <div className="max-w-2xl text-white">
          <div className="inline-block animate-fadeUp opacity-0" style={{ animationDelay: '0.3s' }}>
            <span className="bg-olive-600/20 border border-olive-500/30 text-olive-200 text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
              Chennai&apos;s No.1 Multi-Brand Dealership
            </span>
          </div>

          <h1 className="font-display text-display-2xl text-metal-50 leading-tight mt-6">
            <div className="animate-fadeUp opacity-0" style={{ animationDelay: '0.4s' }}>Drive Your</div>
            <div className="animate-fadeUp opacity-0" style={{ animationDelay: '0.5s' }}><span className="text-amber-cta italic">Dream Car</span></div>
            <div className="animate-fadeUp opacity-0" style={{ animationDelay: '0.6s' }}>Home Today.</div>
          </h1>

          <p className="text-metal-300 text-lg font-body font-light mt-6 max-w-lg leading-relaxed animate-fadeUp opacity-0" style={{ animationDelay: '0.8s' }}>
            Explore 200+ new and pre-owned vehicles across Maruti Arena, NEXA, Honda, Royal Enfield, and Commercial segments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fadeUp opacity-0" style={{ animationDelay: '1s' }}>
            <Link href="/inventory" className="bg-amber-cta text-metal-900 font-semibold px-8 py-4 rounded-sm hover:bg-amber-light transition-all hover:scale-105 active:scale-95 text-base text-center">
              Explore Inventory
            </Link>
            <Link href="/contact" className="border-2 border-metal-100 text-metal-100 px-8 py-4 rounded-sm hover:bg-metal-100 hover:text-metal-900 transition-all text-base text-center">
              Book Test Drive
            </Link>
          </div>

          <div className="flex gap-8 mt-12 animate-fadeUp opacity-0" style={{ animationDelay: '1.2s' }}>
            <div>
              <div className="font-display text-3xl text-amber-cta">15+ Years</div>
              <div className="font-body text-xs text-metal-400 uppercase tracking-widest mt-1">Of Excellence</div>
            </div>
            <div>
              <div className="font-display text-3xl text-amber-cta">10,000+</div>
              <div className="font-body text-xs text-metal-400 uppercase tracking-widest mt-1">Happy Families</div>
            </div>
            <div>
              <div className="font-display text-3xl text-amber-cta">5 Brands</div>
              <div className="font-body text-xs text-metal-400 uppercase tracking-widest mt-1">Under One Roof</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fadeUp opacity-0" style={{ animationDelay: '1.5s' }}>
        <div className="w-[2px] h-12 bg-metal-700 overflow-hidden">
          <div className="w-full h-1/2 bg-amber-cta animate-[fadeUp_1.5s_ease-out_infinite]" />
        </div>
        <span className="text-metal-400 text-xs">Scroll to explore</span>
      </div>
    </section>
  );
}

export function BrandShowcase() {
  const brands = [
    { name: 'Maruti Arena', models: 42 },
    { name: 'NEXA', models: 18 },
    { name: 'Honda', models: 15 },
    { name: 'Royal Enfield', models: 28 },
    { name: 'Commercial Vehicles', models: 12 },
  ];

  return (
    <section className="bg-bg-primary py-20">
      <div className="container-custom">
        <div className="text-center md:text-left">
          <span className="text-olive-600 font-body text-xs uppercase tracking-[0.3em] font-semibold">OUR BRANDS</span>
          <h2 className="font-display text-4xl text-metal-800 mt-2">5 Iconic Brands. One Destination.</h2>
          <p className="text-metal-500 text-base mt-3">From budget-friendly hatchbacks to premium sedans, rugged motorcycles to commercial fleets.</p>
        </div>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 gap-6 mt-12 pb-6 lg:pb-0 snap-x">
          {brands.map((brand, i) => (
            <Link href={`/inventory?brand=${brand.name}`} key={i} className="min-w-[200px] snap-center group block bg-white rounded-lg border border-metal-100 p-6 text-center hover:border-olive-400 hover:shadow-automotive transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-15 mx-auto bg-metal-100 rounded flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                <span className="text-xs text-metal-400">Logo</span>
              </div>
              <h3 className="font-body font-semibold text-metal-700 mt-4">{brand.name}</h3>
              <p className="text-olive-600 text-sm mt-1">{brand.models} Models</p>
              <div className="text-amber-cta text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                View All →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="bg-metal-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#BAC5A7_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-amber-cta font-body text-xs uppercase tracking-[0.3em] font-semibold">WHY THRIVENI</span>
          <h2 className="font-display text-4xl text-metal-50 mt-2">More Than Just a Dealership</h2>
          <p className="text-metal-400 mt-4">We are committed to providing transparency, exclusive offers, and end-to-end support for a seamless ownership experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {[
            { title: "Exclusive Leads", desc: "Your enquiry reaches only us, not 5 other dealers" },
            { title: "Genuine Stock", desc: "100% authentic vehicles, transparent pricing" },
            { title: "Quick Response", desc: "Sales team calls back within 15 minutes" },
            { title: "End-to-End Service", desc: "Sales, insurance, finance, RTO under one roof" },
            { title: "Driving School", desc: "Learn in the same car you plan to buy" },
            { title: "15+ Years Trust", desc: "Serving Chennai families since 2009" }
          ].map((feature, i) => (
            <div key={i} className="bg-metal-800/60 border border-metal-700/50 rounded-lg p-6 hover:border-olive-600/50 hover:bg-metal-800 transition-all group">
              <div className="w-12 h-12 text-olive-400 group-hover:text-amber-cta transition-colors bg-metal-800 rounded flex items-center justify-center">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className="font-display text-lg text-metal-100 mt-4">{feature.title}</h3>
              <p className="font-body text-sm text-metal-400 mt-2 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CallToAction() {
  return (
    <section className="bg-olive-800 py-16">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2">
            <h2 className="font-display text-3xl text-metal-50">Get the Best Deal on Your Next Car</h2>
            <p className="text-olive-200 text-sm mt-3 leading-relaxed max-w-md">
              Our experts will call you with the best price guarantee — no shared leads, no spam.
            </p>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="text" placeholder="Name" className="flex-1 bg-metal-800/50 border border-olive-600/50 text-metal-50 placeholder-metal-400 px-4 py-3.5 rounded outline-none focus:border-amber-cta" />
              <input type="tel" placeholder="Phone" className="flex-1 bg-metal-800/50 border border-olive-600/50 text-metal-50 placeholder-metal-400 px-4 py-3.5 rounded outline-none focus:border-amber-cta" />
              <button type="submit" className="bg-amber-cta text-metal-900 font-semibold px-8 py-3.5 rounded hover:bg-amber-light whitespace-nowrap transition-colors">
                Request Callback
              </button>
            </form>
            <p className="text-olive-300 text-xs mt-3 flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Your data is 100% private. We never share leads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
