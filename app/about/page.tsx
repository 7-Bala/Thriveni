import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1 — HERO */}
      <section className="relative h-[60vh] flex items-center bg-metal-900 pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-metal-900 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-metal-900/40 z-10 md:hidden"></div>
        <Image src="https://images.unsplash.com/photo-1562519819-016930ada31c?auto=format&fit=crop&q=80&w=1920" alt="Showroom" fill priority className="object-cover object-center z-0" />
        <div className="container-custom relative z-20">
          <div className="text-metal-400 text-sm mb-6">Home / About Us</div>
          <div className="uppercase tracking-widest text-amber-cta text-xs mb-4 font-semibold">EST. 2009</div>
          <h1 className="font-display text-display-xl text-metal-50 leading-tight">
            Built on Trust. Driven by Passion.
          </h1>
          <p className="text-metal-300 text-lg max-w-2xl mt-6 leading-relaxed">
            For over 15 years, Thriveni Cars has been connecting Chennai families with the perfect vehicles at the best prices — with honesty at every step.
          </p>
        </div>
      </section>

      {/* SECTION 2 — COMPANY STORY */}
      <section id="story" className="bg-bg-primary py-24">
        <div className="container-custom flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="text-olive-600 font-body text-xs uppercase tracking-[0.3em] font-semibold">OUR STORY</div>
            <h2 className="font-display text-3xl text-metal-800 mt-2 leading-tight">From a Single Showroom to Chennai&apos;s Largest Multi-Brand Dealership</h2>
            
            <div className="mt-10 flex flex-col gap-6 relative before:absolute before:inset-y-0 before:left-1 before:w-px before:bg-metal-200">
              {[
                { year: '2009', text: 'Founded in T.Nagar with a single Maruti Arena showroom' },
                { year: '2012', text: 'Expanded to 3 branches. Added NEXA lineup.' },
                { year: '2016', text: 'Partnership with Honda Cars India' },
                { year: '2019', text: 'Royal Enfield & Commercial vehicle division added' },
                { year: '2023', text: 'Crossed 10,000 satisfied customers milestone' },
                { year: '2025', text: '8 branches across Chennai, 200+ vehicles in stock' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-olive-600 mt-1.5 shrink-0 z-10" />
                  <div>
                    <div className="font-mono text-olive-600 font-medium">{item.year}</div>
                    <div className="text-metal-600 text-sm mt-1">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-automotive bg-metal-100">
              <Image src="/images/placeholder-car.jpg" alt="Dealership History" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg flex items-center gap-4">
              <div className="w-1.5 h-12 bg-olive-600 rounded-full" />
              <div className="font-display text-xl text-metal-800 font-semibold">15+ Years<br /><span className="text-sm font-body text-metal-500 font-normal">Est. 2009</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — VISION & VALUES */}
      <section className="bg-bg-section py-20">
        <div className="container-custom">
          <div className="text-center">
            <div className="text-olive-600 font-body text-xs uppercase tracking-[0.3em] font-semibold">OUR PURPOSE</div>
            <h2 className="font-display text-4xl text-metal-800 mt-2">What We Stand For</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-olive-800 text-white rounded-xl p-8">
              <svg className="w-8 h-8 text-olive-200 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              <h3 className="font-display text-xl mb-3">Our Vision</h3>
              <p className="text-olive-200 text-sm leading-relaxed">To be the most trusted and recommended multi-brand dealership in South India.</p>
            </div>
            
            <div className="bg-amber-cta text-metal-900 rounded-xl p-8">
              <svg className="w-8 h-8 text-metal-900 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              <h3 className="font-display text-xl mb-3">Our Mission</h3>
              <p className="text-metal-900 text-sm leading-relaxed font-medium">To make vehicle ownership a joyful, transparent, and hassle-free experience for every customer.</p>
            </div>
            
            <div className="bg-white border border-metal-100 rounded-xl p-8">
              <svg className="w-8 h-8 text-olive-600 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <h3 className="font-display text-xl text-metal-800 mb-3">Our Values</h3>
              <ul className="flex flex-col gap-3">
                {['Trust & Honesty', 'Radical Transparency', 'Service Excellence', 'Customer-First Approach'].map((val, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-metal-600">
                    <svg className="w-4 h-4 text-olive-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — LEADERSHIP */}
      <section id="leadership" className="bg-bg-primary py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="text-olive-600 font-body text-xs uppercase tracking-[0.3em] font-semibold">LEADERSHIP</div>
            <h2 className="font-display text-4xl text-metal-800 mt-2">The People Behind Thriveni</h2>
          </div>
          
          <div className="bg-metal-900 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-automotive max-w-5xl mx-auto">
            <div className="md:w-2/5 aspect-square relative bg-metal-800">
              <Image src="/images/placeholder-car.jpg" alt="MD" fill className="object-cover grayscale" />
            </div>
            <div className="md:w-3/5 p-10 flex flex-col justify-center">
              <div className="text-amber-cta text-xs uppercase tracking-widest font-semibold mb-2">Managing Director</div>
              <h3 className="font-display text-3xl text-metal-50">S. Thriveni</h3>
              <p className="font-display text-xl text-metal-200 leading-relaxed mt-6 italic border-l-2 border-amber-cta pl-4">
                &quot;Our success is not measured by the number of cars we sell, but by the trust we earn from the families who choose us.&quot;
              </p>
              <p className="text-metal-400 text-sm mt-6 leading-relaxed">
                With a vision to revolutionize the unorganized automobile retail sector, Thriveni started this journey with a single core principle: transparency. Today, leading a team of over 500 professionals across 8 branches, the commitment remains unchanged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CSR */}
      <section id="csr" className="bg-metal-900 py-20">
        <div className="container-custom">
          <div className="text-center md:text-left mb-12">
            <div className="text-amber-cta font-body text-xs uppercase tracking-[0.3em] font-semibold">GIVING BACK</div>
            <h2 className="font-display text-4xl text-metal-50 mt-2">Our Commitment to Chennai</h2>
            <p className="text-metal-400 mt-4 max-w-2xl">Thriveni Cars believes in growing alongside the community it serves.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Road Safety Camps', desc: 'Free defensive driving workshops in schools across the city.', num: '50+' },
              { title: 'Scholarship Programme', desc: 'Annual scholarships for merit students from underprivileged backgrounds.', num: '200+' },
              { title: 'Green Pledge', desc: 'Trees planted around our dealerships for every 10 cars sold.', num: '500+' }
            ].map((csr, i) => (
              <div key={i} className="bg-metal-800 border border-metal-700 rounded-xl overflow-hidden group">
                <div className="aspect-[16/9] relative bg-metal-700">
                  <Image src="/images/placeholder-car.jpg" alt={csr.title} fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-metal-100 text-xl">{csr.title}</h3>
                  <p className="text-metal-400 text-sm leading-relaxed mt-2">{csr.desc}</p>
                  <div className="mt-6 flex items-end gap-2">
                    <span className="font-display text-3xl text-amber-cta leading-none">{csr.num}</span>
                    <span className="text-metal-500 text-xs uppercase tracking-widest pb-1">Impacted</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
