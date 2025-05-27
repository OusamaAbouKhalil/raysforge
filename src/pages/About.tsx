import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import TeamGrid from '../components/about/TeamGrid';

const About: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Section background="secondary" className="pt-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#4C5526]">
            About Us
          </h1>
          <p className="text-xl text-gray-700">
            Meet the forge masters who transform visions into digital realities.
          </p>
        </div>
      </Section>

      {/* Our Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#4C5526]">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                RaysForgee was founded in 2020 by a collective of creative professionals united by a shared vision: to forge digital experiences that transcend the ordinary and create meaningful connections between brands and their audiences.
              </p>
              <p>
                We recognized that in an increasingly digital world, the most successful brands are those that combine strategic thinking with creative execution, technical precision with emotional resonance. This philosophy became the foundation of our approach.
              </p>
              <p>
                Today, we're a growing team of strategists, designers, writers, and digital specialists who collaborate to create work that doesn't just look good—it works. We partner with clients who share our passion for quality and our belief that great work comes from deep understanding, bold thinking, and meticulous craftsmanship.
              </p>
            </div>
          </div>
          <div className="bg-[#4C5526]/10 rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="RaysForgee team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section background="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[#4C5526]">Our Values</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            The principles that guide our work and define our culture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-[#4C5526]">Strategic Creativity</h3>
            <p className="text-gray-700">
              We believe creativity must be purposeful. Every design choice, word, and pixel serves a strategic objective and contributes to measurable outcomes.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-[#4C5526]">Craftsmanship</h3>
            <p className="text-gray-700">
              Like master blacksmiths, we approach our work with discipline, patience, and attention to detail, refining each element until it achieves excellence.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-[#4C5526]">Authentic Collaboration</h3>
            <p className="text-gray-700">
              We foster transparent, honest partnerships with our clients, believing that the best work emerges from open communication and mutual respect.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-[#4C5526]">Continuous Innovation</h3>
            <p className="text-gray-700">
              We embrace change, constantly exploring new technologies and methodologies to keep our clients at the forefront of their industries.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-[#4C5526]">Impact-Driven</h3>
            <p className="text-gray-700">
              We measure our success by the tangible results we create for our clients, whether that's increased engagement, revenue growth, or brand recognition.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-[#4C5526]">Inclusive Excellence</h3>
            <p className="text-gray-700">
              We believe diversity of thought and perspective leads to stronger creative solutions, and we cultivate an environment where all voices are valued.
            </p>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[#4C5526]">The Forge Masters</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Meet the talented team behind our creative solutions.
          </p>
        </div>
        
        <TeamGrid />
      </Section>
    </Layout>
  );
};

export default About;