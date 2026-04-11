import { Metadata } from 'next';
import { motion } from 'framer-motion';
import HeroImage from '@/components/ui/HeroImage';
import { SECTION_BG_IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Commercial Vehicles - Thriveni Cars Salem',
  description: 'Explore commercial vehicles for business at Thriveni Cars. Maruti, Tata, Ashok Leyland and more commercial solutions.',
};

export default function CommercialBrandPage() {
  const models = [
    { name: 'Maruti Eeco', price: '₹7.5L', capacity: '5-8 Seater', image: '/placeholder.png' },
    { name: 'Tata Ace', price: '₹6.5L', capacity: 'Cargo', image: '/placeholder.png' },
    { name: 'Maruti S-Presso CNG', price: '₹4.2L', capacity: '5 Seater', image: '/placeholder.png' },
    { name: 'Tata Intra', price: '₹8.5L', capacity: 'Cargo', image: '/placeholder.png' },
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <HeroImage
        src={SECTION_BG_IMAGES.cityRoad}
        alt="Commercial Vehicles"
        overlay="dark-full"
        priority
      >
        <div className="container-custom relative z-20 h-[60vh] flex flex-col justify-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-2 bg-gray-600/20 border border-gray-400/50 rounded-lg mb-6">
              <span className="text-gray-400 font-body text-xs uppercase tracking-widest font-bold">Commercial</span>
            </div>
            <h1 className="font-display text-display-2xl text-white leading-tight mb-6">
              Powering Your Business Growth
            </h1>
            <p className="text-metal-300 font-body max-w-xl">
              Commercial vehicles designed for performance, reliability, and profitability. Built for businesses that demand efficiency.
            </p>
          </motion.div>
        </div>
      </HeroImage>

      {/* Business Solutions Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl text-metal-900 mb-6">Built for Business</h2>
              <div className="space-y-4 font-body text-metal-600">
                <p>
                  Our commercial vehicle segment offers robust solutions for transportation, logistics, and passenger comfort. Each vehicle is
                  engineered for maximized ROI and operational efficiency.
                </p>
                <p>
                  From daily commutes to long-distance cargo, our commercial fleet provides value, durability, and low total cost of ownership.
                </p>
              </div>

              <div className="mt-10 space-y-3">
                {['Maximum Payload', 'Fuel Efficiency', 'Easy Maintenance', 'Strong Warranty'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-700 rounded-full" />
                    <span className="text-metal-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-square bg-gradient-to-br from-gray-100 to-slate-100 rounded-lg flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-6xl font-display font-bold text-gray-700 mb-2">4+</div>
                <div className="text-metal-600 font-body">Commercial Solutions</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-32 bg-bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl text-metal-900 mb-4">Commercial Fleet</h2>
            <p className="text-metal-500 max-w-2xl mx-auto">
              Cost-effective solutions with financing options tailored for businesses and entrepreneurs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {models.map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-metal-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-slate-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-gray-700">{model.name}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-mono font-bold text-xl text-metal-900 mb-2">{model.price}</div>
                  <div className="text-sm text-metal-500 mb-4">{model.capacity}</div>
                  <button className="w-full bg-gray-700 text-white py-2 rounded font-body font-semibold text-sm hover:bg-gray-800 transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <h2 className="font-display text-4xl text-metal-900 mb-16 text-center">Why Choose Thriveni Commercial?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Financing',
                desc: 'Flexible EMI options tailored for business cash flows',
              },
              {
                title: 'Fleet Discounts',
                desc: 'Special rates for bulk purchases and fleet operators',
              },
              {
                title: 'Extended Warranty',
                desc: 'Comprehensive coverage for commercial operations',
              },
              {
                title: 'Fast Insurance',
                desc: 'Quick-track insurance processing for commercial vehicles',
              },
              {
                title: 'Dedicated Support',
                desc: 'Priority after-sales service for business continuity',
              },
              {
                title: 'Trade-In Options',
                desc: 'Upgrade your commercial fleet with best valuations',
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 border border-metal-200 rounded-lg hover:border-gray-700 transition-colors"
              >
                <h3 className="font-display font-semibold text-lg text-metal-900 mb-2">{benefit.title}</h3>
                <p className="font-body text-metal-600 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-700 to-slate-700">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl text-white mb-6">Let&apos;s Grow Your Business Together</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">Connect with our commercial vehicle specialists for customized solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919876543210" className="inline-flex items-center justify-center bg-white text-gray-700 px-8 py-4 rounded font-body font-bold hover:bg-gray-100 transition-colors">
                Call Specialist
              </a>
              <a href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded font-body font-bold hover:bg-white/10 transition-colors">
                Request Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
