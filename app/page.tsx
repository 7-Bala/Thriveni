import { 
  Hero, 
  BrandShowcase, 
  FeaturedInventory,
  WhyChooseUs, 
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
      <WhyChooseUs />
      <EMICalculator />
      <TestimonialCarousel />
      <OffersPreview />
      <CallToAction />
    </>
  );
}
