import Image from 'next/image';
import Link from 'next/link';

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      
      {/* HERO */}
      <section className="bg-metal-900 py-20 relative">
        <div className="absolute top-0 w-full bg-amber-cta text-metal-900 text-sm font-semibold text-center py-2 z-10">
          Monsoon Offers end in: 12 : 04 : 45 : 30
        </div>
        <div className="container-custom mt-8 text-center">
          <h1 className="font-display text-5xl text-metal-50 max-w-3xl mx-auto leading-tight">Exclusive Deals You Won&apos;t Find Anywhere Else</h1>
          <p className="text-metal-400 mt-4 max-w-2xl mx-auto">Enquire directly with us and unlock special prices not available on official brand portals.</p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {['All Offers', 'Maruti Arena', 'NEXA', 'Honda', 'Royal Enfield', 'Events'].map((tab, i) => (
              <button key={tab} className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-amber-cta text-metal-900' : 'bg-metal-800 text-metal-300 hover:bg-metal-700'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED OFFER */}
      <section className="py-12 bg-bg-section">
        <div className="container-custom">
          <div className="bg-olive-800 rounded-2xl overflow-hidden flex flex-col md:flex-row relative">
            <div className="md:w-1/2 aspect-[16/9] md:aspect-auto relative bg-olive-900">
              <Image src="/images/placeholder-car.jpg" alt="Featured Offer" fill className="object-cover opacity-80" />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center items-start">
              <div className="bg-amber-cta text-metal-900 text-xs font-bold px-3 py-1 rounded mb-4">FEATURED OFFER</div>
              <h2 className="font-display text-4xl text-white mb-4">Mega Exchange Bonus</h2>
              <ul className="text-olive-200 space-y-2 mb-6">
                <li>• ₹50,000 extra on exchange value</li>
                <li>• Free accessories worth ₹15,000</li>
                <li>• Assured buyback guarantee</li>
              </ul>
              <div className="flex items-center gap-2 text-sm text-olive-300 mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Valid till 30 June 2025
              </div>
              <button className="bg-amber-cta text-metal-900 font-bold px-8 py-4 rounded hover:bg-amber-light transition-colors">
                Claim This Offer
              </button>
              <div className="text-xs text-olive-400 mt-4">*T&C apply. Valid on select models only.</div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERS GRID */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="relative overflow-hidden rounded-xl border border-metal-100 bg-white hover:shadow-automotive hover:-translate-y-1 transition-all group">
                <div className="absolute top-4 -right-8 rotate-45 bg-amber-cta text-metal-900 text-xs font-bold px-8 py-1 z-10 shadow-sm">
                  LIMITED
                </div>
                <div className="aspect-[16/9] relative bg-metal-100 overflow-hidden">
                  <Image src="/images/placeholder-car.jpg" alt="Offer" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="inline-block bg-olive-50 text-olive-700 text-xs px-2.5 py-1 rounded font-semibold uppercase tracking-wider mb-3">Maruti Arena</div>
                  <h3 className="font-display text-2xl text-metal-800 mb-2">Low EMI Festival</h3>
                  <p className="text-sm text-metal-500 line-clamp-2 mb-4">Drive home a new car with EMIs starting as low as ₹4,999/month. Zero processing fee.</p>
                  
                  <div className="pt-4 border-t border-metal-100 flex justify-between items-center mt-auto">
                    <span className="text-xs text-metal-400 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      Ends in 12 days
                    </span>
                    <Link href="/contact" className="text-amber-cta font-medium text-sm hover:underline">Enquire Now →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URGENCY CTA */}
      <section className="bg-amber-cta py-16 text-center">
        <div className="container-custom">
          <h2 className="font-display text-4xl text-metal-900 mb-3">Don&apos;t Miss Out on These Deals</h2>
          <p className="text-metal-800 mb-8 max-w-xl mx-auto">These prices are exclusive to Thriveni Cars — not available on official portals.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/inventory" className="bg-metal-900 text-white px-10 py-4 rounded font-medium hover:bg-metal-800">View Inventory</Link>
            <Link href="/contact" className="bg-white text-metal-900 border border-transparent px-10 py-4 rounded font-medium hover:bg-metal-50">Book Test Drive</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
