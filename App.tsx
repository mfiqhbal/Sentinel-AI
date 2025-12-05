import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DemoSection from './components/DemoSection';
import UseCases from './components/UseCases';
import Architecture from './components/Architecture';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <DemoSection />
        <Features />
        <HowItWorks />
        <UseCases />
        <Architecture />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;