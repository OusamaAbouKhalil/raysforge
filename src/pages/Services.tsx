import React from 'react';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { services } from '../data/services';

const Services: React.FC = () => {
  // Dynamic icon rendering
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    return IconComponent ? <IconComponent size={48} className="text-[#4C5526]" /> : null;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <Section background="secondary" className="pt-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#4C5526]">
            Our Services
          </h1>
          <p className="text-xl text-gray-700">
            Comprehensive digital solutions crafted with creativity and strategic precision to help your brand thrive.
          </p>
        </div>
      </Section>

      {/* Services Detail */}
      <Section>
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="mb-6">
                  {renderIcon(service.icon)}
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#4C5526]">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {service.description}
                </p>
                <div className="space-y-4">
                  {service.id === 'marketing' && (
                    <>
                      <div className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-3 text-[#4C5526] mt-1" />
                        <div>
                          <h3 className="font-medium text-[#4C5526]">Brand Strategy</h3>
                          <p className="text-gray-700">Positioning, messaging frameworks, and competitive analysis to differentiate your brand.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-3 text-[#4C5526] mt-1" />
                        <div>
                          <h3 className="font-medium text-[#4C5526]">Campaign Development</h3>
                          <p className="text-gray-700">Integrated campaigns that deliver consistent messaging across all channels.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-3 text-[#4C5526] mt-1" />
                        <div>
                          <h3 className="font-medium text-[#4C5526]">Performance Marketing</h3>
                          <p className="text-gray-700">Data-driven approaches to optimize your marketing spend and maximize ROI.</p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {service.id === 'design' && (
                    <>
                      <div className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-3 text-[#4C5526] mt-1" />
                        <div>
                          <h3 className="font-medium text-[#4C5526]">Brand Identity</h3>
                          <p className="text-gray-700">Logo design, visual systems, and brand guidelines that capture your essence.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-3 text-[#4C5526] mt-1" />
                        <div>
                          <h3 className="font-medium text-[#4C5526]">UI/UX Design</h3>
                          <p className="text-gray-700">User-centered design that creates intuitive, engaging digital experiences.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-3 text-[#4C5526] mt-1" />
                        <div>
                          <h3 className="font-medium text-[#4C5526]">Print & Packaging</h3>
                          <p className="text-gray-700">Stunning physical materials that bring your brand into the tangible world.</p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {service.id === 'content' && (
                    <>
                      <div className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-3 text-[#4C5526] mt-1" />
                        <div>
                          <h3 className="font-medium text-[#4C5526]">Video Production</h3>
                          <p className="text-gray-700">Compelling visual storytelling from concept to final edit.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-3 text-[#4C5526] mt-1" />
                        <div>
                          <h3 className="font-medium text-[#4C5526]">Social Media Content</h3>
                          <p className="text-gray-700">Platform-specific content that drives engagement and builds community.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-3 text-[#4C5526] mt-1" />
                        <div>
                          <h3 className="font-medium text-[#4C5526]">Copywriting & Messaging</h3>
                          <p className="text-gray-700">Persuasive, clear communication that reflects your brand voice.</p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {service.id === 'digital' && (
                    <>
                      <div className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-3 text-[#4C5526] mt-1" />
                        <div>
                          <h3 className="font-medium text-[#4C5526]">Web Development</h3>
                          <p className="text-gray-700">Custom websites and applications that deliver exceptional user experiences.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-3 text-[#4C5526] mt-1" />
                        <div>
                          <h3 className="font-medium text-[#4C5526]">Digital Transformation</h3>
                          <p className="text-gray-700">Strategic integration of digital technologies into your business processes.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-3 text-[#4C5526] mt-1" />
                        <div>
                          <h3 className="font-medium text-[#4C5526]">Innovation Consulting</h3>
                          <p className="text-gray-700">Forward-thinking solutions to prepare your business for the future.</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              <div className={`bg-[#4C5526]/10 rounded-lg overflow-hidden aspect-video ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {service.id === 'marketing' && (
                  <img 
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Marketing Strategy Team"
                    className="w-full h-full object-cover"
                  />
                )}
                {service.id === 'design' && (
                  <img 
                    src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Design Work"
                    className="w-full h-full object-cover"
                  />
                )}
                {service.id === 'content' && (
                  <img 
                    src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Content Creation"
                    className="w-full h-full object-cover"
                  />
                )}
                {service.id === 'digital' && (
                  <img 
                    src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Digital Lab"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="primary">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            We're proud of the relationships we've built and the results we've delivered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <Card>
  <Card.Content>
    <div className="flex flex-col h-full">
      <p className="text-[#4C5526] mb-6 italic">
        "RaysForgee completely reimagined our brand identity. They dug deep into our mission, values, and market voice — and forged a visual language that feels 100% SwiftGo. We've never looked more aligned or more iconic."
      </p>
      <div className="mt-auto">
        <p className="font-bold text-[#4C5526]">Ousama</p>
        <p className="text-sm text-gray-600">Founder, SwiftGo</p>
      </div>
    </div>
  </Card.Content>
</Card>

<Card>
  <Card.Content>
    <div className="flex flex-col h-full">
      <p className="text-[#4C5526] mb-6 italic">
        "When we needed to level up our brand storytelling, RaysForgee came through with a content strategy that felt cinematic. The content they produced didn’t just hit KPIs — it actually made our audience *feel* something. That’s rare."
      </p>
      <div className="mt-auto">
        <p className="font-bold text-[#4C5526]">Ousama</p>
        <p className="text-sm text-gray-600">Founder, SwiftGo</p>
      </div>
    </div>
  </Card.Content>
</Card>

<Card>
  <Card.Content>
    <div className="flex flex-col h-full">
      <p className="text-[#4C5526] mb-6 italic">
        "RaysForgee’s marketing strategy flipped the switch for us. Their data-driven, design-forward campaigns helped us hit growth targets we’d been chasing for months — and made it look effortless."
      </p>
      <div className="mt-auto">
        <p className="font-bold text-[#4C5526]">Ousama</p>
        <p className="text-sm text-gray-600">Founder, SwiftGo</p>
      </div>
    </div>
  </Card.Content>
</Card>

        </div>
      </Section>
    </Layout>
  );
};

export default Services;