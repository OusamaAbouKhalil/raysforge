import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#F5E3CF]/10 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 rounded-full bg-[#4C5526] blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-[#4C5526] blur-3xl bottom-10 right-10"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-[#4C5526]">
            We Forge Digital Futures
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Where strategic creativity meets precision execution, transforming visions into digital realities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg">
              Let's Create Together
            </Button>
            <Button variant="outline" size="lg" className="group">
              <span>View Our Work</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;