import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { services } from '../../data/services';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ServiceShowcase: React.FC = () => {
  const navigate = useNavigate();
  
  // Dynamic icon rendering
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    return IconComponent ? <IconComponent size={32} className="text-[#4C5526]" /> : null;
  };

  return (
    <Section id="services" background="light">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4C5526]">What We Do</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We combine strategic thinking with creative execution to deliver exceptional results across our core service areas.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <Card key={service.id} hover className="h-full flex flex-col">
            <Card.Content className="flex flex-col h-full">
              <div className="mb-4">
                {renderIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#4C5526]">{service.title}</h3>
              <p className="text-gray-700 mb-6 flex-grow">{service.description}</p>
              <button 
                onClick={() => navigate('/services')}
                className="text-[#4C5526] font-medium flex items-center group"
              >
                Learn More 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Card.Content>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button 
          variant="primary"
          onClick={() => navigate('/services')}
        >
          Explore All Services
        </Button>
      </div>
    </Section>
  );
};

export default ServiceShowcase;