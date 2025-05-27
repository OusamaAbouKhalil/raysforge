import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { steps } from '../../data/steps';
import Section from '../ui/Section';

const ProcessSteps: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  // Dynamic icon rendering
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    return IconComponent ? <IconComponent size={28} /> : null;
  };

  return (
    <Section id="process" background="primary">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Our proven process transforms your vision into reality through a series of strategic steps.
        </p>
      </div>
      
      {/* Step indicators */}
      <div className="flex justify-between max-w-3xl mx-auto mb-12 relative">
        {/* Progress line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#F5E3CF]/30 -translate-y-1/2 z-0"></div>
        <div 
          className="absolute top-1/2 left-0 h-1 bg-[#F5E3CF] -translate-y-1/2 z-0 transition-all duration-500"
          style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
        ></div>
        
        {/* Step circles */}
        {steps.map((step, index) => (
          <button
            key={step.id}
            className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all ${
              index <= activeStep 
                ? 'bg-[#F5E3CF] text-[#4C5526]' 
                : 'bg-[#F5E3CF]/30 text-[#F5E3CF]/70'
            }`}
            onClick={() => setActiveStep(index)}
          >
            {renderIcon(step.icon)}
          </button>
        ))}
      </div>
      
      {/* Step content */}
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{steps[activeStep].title}</h3>
          <p className="text-lg opacity-90">{steps[activeStep].description}</p>
        </div>
      </div>
    </Section>
  );
};

export default ProcessSteps;