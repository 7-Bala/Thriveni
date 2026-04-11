import { Metadata } from 'next';
import { motion } from 'framer-motion';
import HeroImage from '@/components/ui/HeroImage';
import { SECTION_BG_IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Honda - Innovation Meets Reliability | Thriveni Cars',
  description: 'Discover Honda vehicles at Thriveni Cars. City, Amaze, WR-V, CR-V and more with advanced technology and reliability you can trust.',
};

export default function HondaBrandPage() {
  const models = [
    { name: 'City', price: '₹11.5L', fuel: 'Petrol/Diesel', image: '/placeholder.png' },
    { name: 'Amaze', price: '₹7.5L', fuel: 'Petrol/Diesel', image: '/placeholder.png' },
    { name: 'WR-V', price: '₹9.5L', fuel: 'Petrol/Diesel', image: '/placeholder.png' },
    { name: 'CR-V', price: '₹28.5L', fuel: 'Diesel', image: '/placeholder.png' },
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <HeroImage
        src={SECTION_BG_IMAGES.cityRoad}
        alt="Honda Vehicles"
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
            <div className="inline-block px-4 py-2 bg-red-500/20 border border-red-400/50 rounded-lg mb-6">
              <span className="text-red-400 font-body text-xs uppercase tracking-widest font-bold">Honda</span>
            </div>
            <h1 className="font-display text-display-2xl text-white leading-tight mb-6">
              The Power of Dreams
            </h1>
            <p className="text-metal-300 font-body max-w-xl">
              Honda brings innovation, reliability, and passion to every vehicle. Experience the perfect blend of performance and efficiency.
            </p>
          </motion.div>
        </div>
      </HeroImage>

      {/* Brand Story Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl text-metal-900 mb-6">Honda Promise</h2>
              <div className="space-y-4 font-body text-metal-600">
                <p>
                  For over seven decades, Honda has been synonymous with innovation and reliability. Our commitment to engineering excellence
                  translates into vehicles that deliver performance, efficiency, and durability.
                </p>
                <p>
                  Every Honda is built with precision engineering and advanced safety technologies, ensuring peace of mind on every journey.
                </p>
              </div>

              <div className="mt-10 space-y-3">
                {['Advanced Technology', 'Superior Safety', 'Fuel Efficiency', 'Legendary Reliability'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full" />
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
              className="aspect-square bg-gradient-to-br from-red-100 to-pink-100 rounded-lg flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-6xl font-display font-bold text-red-600 mb-2">6</div>
                <div className="text-metal-600 font-body">Models Available</div>
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
            <h2 className="font-display text-4xl text-metal-900 mb-4">Honda Models</h2>
            <p className="text-metal-500 max-w-2xl mx-auto">
              From compact sedans to premium SUVs, Honda delivers excellence across all segments.
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
                <div className="aspect-square bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-red-600">{model.name}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-mono font-bold text-xl text-metal-900 mb-2">{model.price}</div>
                  <div className="text-sm text-metal-500 mb-4">{model.fuel}</div>
                  <button className="w-full bg-red-600 text-white py-2 rounded font-body font-semibold text-sm hover:bg-red-700 transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl text-white mb-6">Experience Honda Innovation</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">Visit our Honda showroom at Thriveni for test drives and exclusive offers.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919876543210" className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-4 rounded font-body font-bold hover:bg-gray-100 transition-colors">
                Call Us
              </a>
              <a href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded font-body font-bold hover:bg-white/10 transition-colors">
                Book Test Drive
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
