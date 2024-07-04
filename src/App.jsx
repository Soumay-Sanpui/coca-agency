import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import FeatureSection from './sections/FeatureSection';
import ServiceSection from './sections/ServiceSection';
import PricingSection from './sections/PricingSection';

function App() {
  return (
    <main className='font-monument text-[1.2vw]'>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ServiceSection />
      <PricingSection />
    </main>
  );
}

export default App;
