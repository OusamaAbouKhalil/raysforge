import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const ContactCTA: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <Section background="secondary" className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 rounded-full bg-[#4C5526] blur-3xl -top-20 -right-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-[#4C5526] blur-3xl bottom-20 -left-20"></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#4C5526]">
          Ready to Forge Something Amazing?
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Let's collaborate to bring your vision to life with our strategic creativity and expert execution.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={() => navigate('/contact')}
          >
            Start a Project
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="group"
            onClick={() => navigate('/portfolio')}
          >
            <span>Explore Our Work</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default ContactCTA;