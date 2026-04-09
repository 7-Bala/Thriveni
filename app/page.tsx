import { prisma } from '@/lib/prisma';
import { 
  Hero, 
  BrandShowcase, 
  FeaturedInventory,
  WhyThriveni, 
  EMICalculator,
  TestimonialCarousel,
  OffersPreview,
  CallToAction 
} from '@/components/sections/HomeSections';

export default async function Home() {
  const featuredCars = await prisma.car.findMany({
    where: { isFeatured: true },
    take: 4,
    orderBy: { createdAt: 'desc' }
  });

  // Fallback to latest 4 cars if no featured ones are marked
  const carsToShow = featuredCars.length > 0 
    ? featuredCars 
    : await prisma.car.findMany({ take: 4, orderBy: { createdAt: 'desc' } });

  return (
    <>
      <Hero />
      <BrandShowcase />
      <FeaturedInventory initialCars={carsToShow} />
      <WhyThriveni />
      <EMICalculator />
      <TestimonialCarousel />
      <OffersPreview />
      <CallToAction />
    </>
  );
}
