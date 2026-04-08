import { 
  Hero, 
  BrandShowcase, 
  FeaturedInventory,
  BrandAuthority, 
  EMICalculator,
  TestimonialCarousel,
  OffersPreview,
  CallToAction 
} from '@/components/sections/HomeSections';

export default async function Home() {
  return (
    <>
      <Hero />
      <BrandShowcase />
      <FeaturedInventory />
      <BrandAuthority />
      <EMICalculator />
      <TestimonialCarousel />
      <OffersPreview />
      <CallToAction />
    </>
  );
}
