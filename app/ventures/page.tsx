import Image from 'next/image';
import Link from 'next/link';

export default function VenturesPage() {
  return (
    <div className="min-h-screen">
      {/* SECTION 1 — HERO */}
      <section className="relative h-[50vh] flex items-center bg-metal-900 pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-metal-900 to-transparent z-10"></div>
        <Image src="/images/placeholder-car.jpg" alt="Services" fill priority className="object-cover object-center z-0 opacity-40" />
        <div className="container-custom relative z-20">
          <div className="text-metal-400 text-sm mb-6">Home / Our Ventures</div>
          <div className="uppercase tracking-widest text-amber-cta text-xs mb-4 font-semibold">OUR SERVICES</div>
          <h1 className="font-display text-display-xl text-metal-50 leading-tight">Everything You Need.<br />Right Here.</h1>
          <p className="text-metal-300 text-lg max-w-2xl mt-4 leading-relaxed">
            From your first test drive to insurance, service, and beyond — Thriveni is your lifelong automotive partner.
          </p>
        </div>
      </section>

      {/* SECTION 2 — SERVICES GRID */}
      <section className="bg-bg-primary py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Sales - Large */}
            <div className="lg:col-span-2 bg-olive-800 rounded-2xl p-8 text-white group hover:-translate-y-2 transition-transform shadow-sm hover:shadow-automotive">
              <h2 className="font-display text-3xl mb-2">New Car Sales</h2>
              <p className="text-olive-200 mb-6 max-w-md">Zero compromise on quality. Best price guarantee across all our authorized brands.</p>
              <ul className="space-y-3 mb-8">
                {['Exclusive lead ownership', 'Personalised sales manager', 'Test drive at home'].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-olive-700 flex items-center justify-center text-amber-cta text-xs">✓</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/inventory" className="text-amber-cta font-medium hover:underline">Explore Inventory →</Link>
            </div>

            {/* Service Centre */}
            <div className="bg-metal-800 rounded-2xl p-8 text-white group hover:-translate-y-2 transition-transform shadow-sm hover:shadow-automotive">
              <h2 className="font-display text-2xl mb-2">Service Centre</h2>
              <p className="text-metal-300 text-sm mb-6">Authorized service for Maruti Suzuki & Honda with genuine spare parts.</p>
              <ul className="space-y-2 mb-8 text-sm text-metal-400">
                <li>General service & maintenance</li>
                <li>Denting & painting</li>
                <li>AC service & electrical</li>
              </ul>
              <button className="text-amber-cta font-medium hover:underline">Book Service →</button>
            </div>

            {/* Driving School */}
            <div className="bg-white border border-metal-100 rounded-2xl p-8 group hover:-translate-y-2 transition-transform shadow-sm hover:shadow-automotive">
              <h2 className="font-display text-2xl text-metal-900 mb-2">Driving School</h2>
              <p className="text-metal-600 text-sm mb-6">Learn in the same car you plan to buy. Certified instructors and flexible timings.</p>
              <ul className="space-y-2 mb-8 text-sm text-metal-500">
                <li>Basic & Advanced courses</li>
                <li>Simulator training</li>
                <li>License assistance</li>
              </ul>
              <button className="text-olive-700 font-medium hover:underline">Enquire Now →</button>
            </div>

            {/* Finance & Exchange */}
            <div className="bg-bg-section border border-metal-100 rounded-2xl p-8 group hover:-translate-y-2 transition-transform shadow-sm hover:shadow-automotive">
              <h2 className="font-display text-2xl text-metal-900 mb-2">Finance & Exchange</h2>
              <p className="text-metal-600 text-sm mb-6">10+ partner banks for pre-approved loans and best exchange bonuses.</p>
              <ul className="space-y-2 mb-8 text-sm text-metal-500">
                <li>Up to 100% on-road funding</li>
                <li>Instant evaluation</li>
                <li>Hassle-free paperwork</li>
              </ul>
              <button className="text-olive-700 font-medium hover:underline">Calculate EMI →</button>
            </div>

            {/* Insurance */}
            <div className="bg-white border border-metal-100 rounded-2xl p-8 group hover:-translate-y-2 transition-transform shadow-sm hover:shadow-automotive">
              <h2 className="font-display text-2xl text-metal-900 mb-2">Insurance</h2>
              <p className="text-metal-600 text-sm mb-6">Motor insurance simplified. Cashless claims across our network.</p>
              <ul className="space-y-2 mb-8 text-sm text-metal-500">
                <li>New car insurance</li>
                <li>Easy renewals</li>
                <li>Zero-depreciation covers</li>
              </ul>
              <button className="text-olive-700 font-medium hover:underline">Get a Quote →</button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — ENQUIRY FORM */}
      <section className="bg-olive-800 py-24">
        <div className="container-custom flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 text-white">
            <h2 className="font-display text-4xl mb-4">Book a Service or Get a Quote</h2>
            <p className="text-olive-200 mb-8">Whatever your automotive needs, our team is ready to assist you. We guarantee a response within 2 business hours.</p>
            <ul className="space-y-4 text-olive-100">
              <li className="flex items-center gap-3">
                <span className="bg-olive-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">✓</span>
                Priority booking for existing customers
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-olive-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">✓</span>
                Transparent estimates with no hidden costs
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Your Name" className="border border-metal-200 rounded-lg px-4 py-3" required />
                <input type="tel" placeholder="Phone Number" className="border border-metal-200 rounded-lg px-4 py-3" required />
                <select className="border border-metal-200 rounded-lg px-4 py-3 bg-white text-metal-600" required>
                  <option value="">Select Service Type</option>
                  <option value="sales">Sales Enquiry</option>
                  <option value="service">Service Booking</option>
                  <option value="finance">Finance Query</option>
                  <option value="insurance">Insurance</option>
                  <option value="driving">Driving School</option>
                </select>
                <textarea rows={3} placeholder="Additional Details (Optional)" className="border border-metal-200 rounded-lg px-4 py-3 resize-none"></textarea>
                <button type="submit" className="bg-amber-cta text-metal-900 font-bold py-4 rounded-lg mt-2 hover:bg-amber-light">Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
