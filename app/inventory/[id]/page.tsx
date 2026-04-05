import Image from 'next/image';
import Link from 'next/link';

export default function CarDetailPage() {
  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-20">
      <div className="container-custom">
        <div className="text-metal-500 text-sm mb-6">
          <Link href="/" className="hover:text-amber-cta">Home</Link> / <Link href="/inventory" className="hover:text-amber-cta">Inventory</Link> / Maruti Arena / Swift
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3">
            {/* Image Gallery */}
            <div className="aspect-[16/9] relative rounded-xl overflow-hidden bg-metal-100 shadow-sm">
              <Image src="/images/placeholder-car.jpg" alt="Car" fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-metal-900/80 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-md">1 / 6</div>
            </div>
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2 snap-x">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-24 h-16 shrink-0 relative rounded-lg overflow-hidden cursor-pointer snap-start ${i === 1 ? 'ring-2 ring-olive-600' : 'opacity-70 hover:opacity-100'}`}>
                  <Image src="/images/placeholder-car.jpg" alt="Thumb" fill className="object-cover" />
                </div>
              ))}
            </div>

            {/* Car Header */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-olive-100 text-olive-700 text-xs px-2.5 py-1 rounded font-semibold uppercase tracking-wider">Maruti Arena</span>
                <span className="bg-metal-200 text-metal-800 text-xs px-2.5 py-1 rounded font-semibold uppercase tracking-wider">New</span>
              </div>
              <h1 className="font-display text-4xl text-metal-900 font-semibold">Swift</h1>
              <p className="text-metal-500 text-lg mt-1">ZXI Plus Dual Tone</p>
              
              <div className="mt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-metal-200 pb-6">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-4xl font-semibold text-metal-900">₹8.99 Lakh</span>
                    <span className="text-metal-500 text-sm">onwards</span>
                  </div>
                  <p className="text-xs text-metal-400 mt-1">Ex-showroom price, Chennai</p>
                </div>
                <div className="bg-olive-50 px-4 py-2 rounded-lg border border-olive-100">
                  <div className="text-olive-700 font-medium text-sm">EMI from ₹12,500/month</div>
                  <button className="text-amber-cta text-xs font-semibold mt-1 hover:underline">Calculate EMI →</button>
                </div>
              </div>
            </div>

            {/* Specs Grid */}
            <div className="mt-8 bg-bg-section rounded-xl p-6 md:p-8 border border-metal-100">
              <h2 className="font-display text-2xl text-metal-800 mb-6">Key Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Engine CC', value: '1197 cc' },
                  { label: 'Max Power', value: '89 bhp' },
                  { label: 'Fuel Type', value: 'Petrol' },
                  { label: 'Transmission', value: 'Manual' },
                  { label: 'Mileage', value: '22.38 kmpl' },
                  { label: 'Seating', value: '5 Seats' },
                  { label: 'Boot Space', value: '268 L' },
                  { label: 'Fuel Tank', value: '37 L' },
                ].map((spec, i) => (
                  <div key={i}>
                    <div className="text-metal-400 text-xs uppercase tracking-wider mb-1">{spec.label}</div>
                    <div className="text-metal-800 font-semibold">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10">
              <h2 className="font-display text-2xl text-metal-800 mb-4">Description</h2>
              <p className="text-metal-600 leading-relaxed">
                The Maruti Suzuki Swift has been India&apos;s favorite hatchback for over a decade. The new generation brings sportier looks, enhanced fuel efficiency with the dual-jet engine, and premium features like a 7-inch SmartPlay Studio infotainment system, auto climate control, and cruise control.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3">
            {/* Sticky Lead Form */}
            <div className="sticky top-24 bg-white rounded-2xl shadow-automotive overflow-hidden border border-metal-100">
              <div className="bg-olive-800 p-6 text-white text-center">
                <h3 className="font-display text-2xl mb-2">Interested in this car?</h3>
                <p className="text-olive-200 text-sm">Get the best price & exclusive offers directly from our team.</p>
              </div>
              <div className="p-6">
                <form className="flex flex-col gap-4">
                  <input type="text" placeholder="Full Name" className="w-full border border-metal-200 rounded-lg px-4 py-3 outline-none focus:border-olive-600 focus:ring-1 focus:ring-olive-600" />
                  <input type="tel" placeholder="Phone Number" className="w-full border border-metal-200 rounded-lg px-4 py-3 outline-none focus:border-olive-600 focus:ring-1 focus:ring-olive-600" />
                  <select className="w-full border border-metal-200 rounded-lg px-4 py-3 outline-none focus:border-olive-600 focus:ring-1 focus:ring-olive-600 bg-white text-metal-600">
                    <option value="">Preferred Branch</option>
                    <option value="tnagar">T.Nagar</option>
                    <option value="annanagar">Anna Nagar</option>
                  </select>
                  <button type="submit" className="w-full bg-amber-cta text-metal-900 font-bold py-4 rounded-lg mt-2 hover:bg-amber-light transition-colors">
                    Get Best Price
                  </button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-metal-100">
                  <p className="text-center text-sm text-metal-500 mb-4">Or connect directly</p>
                  <a href="https://wa.me/919876543210" className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-medium hover:bg-[#20bd5a] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
