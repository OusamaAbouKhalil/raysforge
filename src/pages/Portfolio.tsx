import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import ProjectGrid from '../components/portfolio/ProjectGrid';

const Portfolio: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Section background="secondary" className="pt-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#4C5526]">
            Our Work
          </h1>
          <p className="text-xl text-gray-700">
            A showcase of our creative solutions and strategic campaigns for clients across industries.
          </p>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section>
        <ProjectGrid />
      </Section>

      {/* Process Overview */}
      <Section background="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Each project follows our proven process to ensure exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="w-16 h-16 rounded-full bg-[#F5E3CF] flex items-center justify-center mx-auto mb-4">
              <span className="text-[#4C5526] font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Discover</h3>
            <p className="opacity-90">We explore your vision and goals to understand your unique needs.</p>
          </div>
          
          <div>
            <div className="w-16 h-16 rounded-full bg-[#F5E3CF] flex items-center justify-center mx-auto mb-4">
              <span className="text-[#4C5526] font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Design</h3>
            <p className="opacity-90">Our team crafts strategic solutions tailored to your objectives.</p>
          </div>
          
          <div>
            <div className="w-16 h-16 rounded-full bg-[#F5E3CF] flex items-center justify-center mx-auto mb-4">
              <span className="text-[#4C5526] font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Forge</h3>
            <p className="opacity-90">We bring concepts to life through meticulous execution.</p>
          </div>
          
          <div>
            <div className="w-16 h-16 rounded-full bg-[#F5E3CF] flex items-center justify-center mx-auto mb-4">
              <span className="text-[#4C5526] font-bold text-xl">4</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Launch</h3>
            <p className="opacity-90">Your vision comes to life with optimized implementation.</p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Portfolio;