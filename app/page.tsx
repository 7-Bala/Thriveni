import { Hero, BrandShowcase, WhyChooseUs, CallToAction } from '@/components/sections/HomeSections';

export default async function Home() {
  return (
    <>
      <Hero />
      <BrandShowcase />
      <WhyChooseUs />
      <CallToAction />
    </>
  );
}
