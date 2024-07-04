import React from 'react';
import HeroSection from './sections/HeroSection';
import FeatureSection from './sections/FeatureSection';
import ServiceSection from './sections/ServiceSection';
import PricingSection from './sections/PricingSection';
import TestimonailSection from './sections/TestimonailSection';
import Footer from './components/Footer';

function App() {
  return (
    <main className='font-monument text-[1.2vw]'>
      <HeroSection />
      <FeatureSection />
      <ServiceSection />
      <PricingSection />
      <TestimonailSection />
      <Footer />
    </main>
  );
}

export default App;
