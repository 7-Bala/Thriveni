import { Metadata } from 'next';
import { motion } from 'framer-motion';
import HeroImage from '@/components/ui/HeroImage';
import { SECTION_BG_IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Royal Enfield - Iconic Motorcycles | Thriveni Cars',
  description: 'Ride the legends. Explore Royal Enfield motorcycles at Thriveni Cars. Classic 350, Bullet, Hunter, Interceptor and more.',
};

export default function RoyalEnfieldBrandPage() {
  const models = [
    { name: 'Classic 350', price: '₹1.65L', fuel: 'Petrol', image: '/placeholder.png' },
    { name: 'Bullet 350', price: '₹1.59L', fuel: 'Petrol', image: '/placeholder.png' },
    { name: 'Hunter 350', price: '₹1.49L', fuel: 'Petrol', image: '/placeholder.png' },
    { name: 'Interceptor 650', price: '₹2.99L', fuel: 'Petrol', image: '/placeholder.png' },
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <HeroImage
        src={SECTION_BG_IMAGES.cityRoad}
        alt="Royal Enfield Motorcycles"
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
            <div className="inline-block px-4 py-2 bg-amber-700/20 border border-amber-600/50 rounded-lg mb-6">
              <span className="text-amber-700 font-body text-xs uppercase tracking-widest font-bold">Royal Enfield</span>
            </div>
            <h1 className="font-display text-display-2xl text-white leading-tight mb-6">
              Built Like a Gun. Feels Like a Feather.
            </h1>
            <p className="text-metal-300 font-body max-w-xl">
              Royal Enfield motorcycles are more than machines—they&apos;re companions for adventure. Heritage meets modern engineering.
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
              <h2 className="font-display text-4xl text-metal-900 mb-6">Heritage & Innovation</h2>
              <div className="space-y-4 font-body text-metal-600">
                <p>
                  Since 1901, Royal Enfield has been crafting motorcycles that inspire wanderlust and adventure. Every bike carries a legacy of
                  simplicity, durability, and soul.
                </p>
                <p>
                  From the iconic Bullet to the modern Interceptor, Royal Enfield bikes are built for riders who seek more than transportation—they
                  seek experiences.
                </p>
              </div>

              <div className="mt-10 space-y-3">
                {['Iconic Heritage', 'Easy Maintenance', 'Strong Community', 'Adventure Ready'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-700 rounded-full" />
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
              className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-6xl font-display font-bold text-amber-700 mb-2">12+</div>
                <div className="text-metal-600 font-body">Iconic Models</div>
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
            <h2 className="font-display text-4xl text-metal-900 mb-4">Popular Models</h2>
            <p className="text-metal-500 max-w-2xl mx-auto">
              Handpicked Royal Enfield motorcycles available at Thriveni with complete financing and service support.
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
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-amber-700">{model.name}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-mono font-bold text-xl text-metal-900 mb-2">{model.price}</div>
                  <div className="text-sm text-metal-500 mb-4">{model.fuel}</div>
                  <button className="w-full bg-amber-700 text-white py-2 rounded font-body font-semibold text-sm hover:bg-amber-800 transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-orange-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl text-white mb-6">Ready for Your Next Adventure?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">Visit Thriveni for a test ride and join the Royal Enfield community.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919876543210" className="inline-flex items-center justify-center bg-white text-amber-700 px-8 py-4 rounded font-body font-bold hover:bg-gray-100 transition-colors">
                Call Us
              </a>
              <a href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded font-body font-bold hover:bg-white/10 transition-colors">
                Book Test Ride
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
