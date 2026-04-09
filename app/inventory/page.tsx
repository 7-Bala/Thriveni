import { prisma } from '@/lib/prisma';
import InventoryClient from './InventoryClient';
import HeroImage from '@/components/ui/HeroImage';
import { HERO_IMAGES } from '@/lib/images';

export const dynamic = 'force-dynamic';

export default async function InventoryPage() {
  const cars = await prisma.car.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header — Hero Section */}
      <section className="bg-metal-900 overflow-hidden">
        <HeroImage 
          src={HERO_IMAGES.inventoryPage} 
          alt="Thriveni Cars Inventory" 
          overlay="dark-full"
          objectPosition="center 60%"
          priority
        >
          <div className="container-custom py-32">
            <div className="animate-fade-up">
              <span className="text-amber-cta text-[11px] uppercase tracking-widest font-bold block mb-4">THRIVENI STOCK</span>
              <h1 className="font-display text-5xl md:text-6xl text-white mb-6">Discovery Suite.</h1>
              <p className="text-metal-400 text-lg max-w-xl">Explore our current inventory across 8 premium branches in Salem.</p>
            </div>
          </div>
        </HeroImage>
      </section>

      <InventoryClient initialCars={cars} />
    </div>
  );
}
