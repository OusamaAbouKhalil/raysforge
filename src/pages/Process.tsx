import React from 'react';
import * as Icons from 'lucide-react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import { steps } from '../data/steps';

const Process: React.FC = () => {
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
            How It Works
          </h1>
          <p className="text-xl text-gray-700">
            Our proven process transforms your vision into reality through a series of strategic steps.
          </p>
        </div>
      </Section>

      {/* Process Detail */}
      <Section>
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#4C5526]/20 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-24 relative">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step number indicator (desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#4C5526] text-[#F5E3CF] flex items-center justify-center font-bold text-xl hidden md:flex">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}>
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      {/* Step number indicator (mobile) */}
                      <div className="w-10 h-10 rounded-full bg-[#4C5526] text-[#F5E3CF] flex items-center justify-center font-bold text-lg mr-3 md:hidden">
                        {index + 1}
                      </div>
                      <h2 className="text-3xl font-bold text-[#4C5526]">
                        {step.title}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">
                      {step.description}
                    </p>
                    <div className="bg-[#F5E3CF]/30 p-6 rounded-lg">
                      {step.id === 'discover' && (
                        <div className="space-y-4">
                          <h3 className="font-medium text-[#4C5526]">What happens in this phase:</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="h-5 w-5 mr-2 rounded-full bg-[#4C5526]/20 flex-shrink-0 flex items-center justify-center text-[#4C5526]">•</span>
                              <span>Initial consultation to understand your goals and challenges</span>
                            </li>
                            <li className="flex items-start">
                              <span className="h-5 w-5 mr-2 rounded-full bg-[#4C5526]/20 flex-shrink-0 flex items-center justify-center text-[#4C5526]">•</span>
                              <span>Market and competitor analysis</span>
                            </li>
                            <li className="flex items-start">
                              <span className="h-5 w-5 mr-2 rounded-full bg-[#4C5526]/20 flex-shrink-0 flex items-center justify-center text-[#4C5526]">•</span>
                              <span>Audience research and insight gathering</span>
                            </li>
                            <li className="flex items-start">
                              <span className="h-5 w-5 mr-2 rounded-full bg-[#4C5526]/20 flex-shrink-0 flex items-center justify-center text-[#4C5526]">•</span>
                              <span>Opportunity identification and strategic planning</span>
                            </li>
                          </ul>
                        </div>
                      )}
                      
                      {step.id === 'design' && (
                        <div className="space-y-4">
                          <h3 className="font-medium text-[#4C5526]">What happens in this phase:</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="h-5 w-5 mr-2 rounded-full bg-[#4C5526]/20 flex-shrink-0 flex items-center justify-center text-[#4C5526]">•</span>
                              <span>Creative concept development and refinement</span>
                            </li>
                            <li className="flex items-start">
                              <span className="h-5 w-5 mr-2 rounded-full bg-[#4C5526]/20 flex-shrink-0 flex items-center justify-center text-[#4C5526]">•</span>
                              <span>Strategic solution mapping and planning</span>
                            </li>
                            <li className="flex items-start">
                              <span className="h-5 w-5 mr-2 rounded-full bg-[#4C5526]/20 flex-shrink-0 flex items-center justify-center text-[#4C5526]">•</span>
                              <span>Visual and messaging framework development</span>
                            </li>
                            <li className="flex items-start">
                              <span className="h-5 w-5 mr-2 rounded-full bg-[#4C5526]/20 flex-shrink-0 flex items-center justify-center text-[#4C5526]">•</span>
                              <span>Presentation of concepts for feedback and approval</span>
                            </li>
                          </ul>
                        </div>
                      )}
                      
                      {step.id === 'forge' && (
                        <div className="space-y-4">
                          <h3 className="font-medium text-[#4C5526]">What happens in this phase:</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="h-5 w-5 mr-2 rounded-full bg-[#4C5526]/20 flex-shrink-0 flex items-center justify-center text-[#4C5526]">•</span>
                              <span>Production and development of approved concepts</span>
                            </li>
                            <li className="flex items-start">
                              <span className="h-5 w-5 mr-2 rounded-full bg-[#4C5526]/20 flex-shrink-0 flex items-center justify-center text-[#4C5526]">•</span>
                              <span>Iterative refinement based on ongoing feedback</span>
                            </li>
                            <li className="flex items-start">
                              <span className="h-5 w-5 mr-2 rounded-full bg-[#4C5526]/20 flex-shrink-0 flex items-center justify-center text-[#4C5526]">•</span>
                              <span>Quality assurance and testing</span>
                            </li>
                            <li className="flex items-start">
                              <span className="h-5 w-5 mr-2 rounded-full bg-[#4C5526]/20 flex-shrink-0 flex items-center justify-center text-[#4C5526]">•</span>
                              <span>Preparation for launch and deployment</span>
                            </li>
                          </ul>
                        </div>
                      )}
                      
                      {step.id === 'launch' && (
                        <div className="space-y-4">
                          <h3 className="font-medium text-[#4C5526]">What happens in this phase:</h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="h-5 w-5 mr-2 rounded-full bg-[#4C5526]/20 flex-shrink-0 flex items-center justify-center text-[#4C5526]">•</span>
                              <span>Implementation and deployment of the final product</span>
                            </li>
                            <li className="flex items-start">
                              <span className="h-5 w-5 mr-2 rounded-full bg-[#4C5526]/20 flex-shrink-0 flex items-center justify-center text-[#4C5526]">•</span>
                              <span>Training and knowledge transfer</span>
                            </li>
                            <li className="flex items-start">
                              <span className="h-5 w-5 mr-2 rounded-full bg-[#4C5526]/20 flex-shrink-0 flex items-center justify-center text-[#4C5526]">•</span>
                              <span>Performance monitoring and optimization</span>
                            </li>
                            <li className="flex items-start">
                              <span className="h-5 w-5 mr-2 rounded-full bg-[#4C5526]/20 flex-shrink-0 flex items-center justify-center text-[#4C5526]">•</span>
                              <span>Ongoing support and strategic partnership</span>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className={`flex items-center justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="w-40 h-40 rounded-full bg-[#F5E3CF] flex items-center justify-center shadow-lg">
                      <div className="text-[#4C5526]">
                        {renderIcon(step.icon)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="light">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#4C5526]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700">
              Common questions about our process and how we work together.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-[#4C5526]">How long does the typical project take?</h3>
              <p className="text-gray-700">
                Project timelines vary based on scope and complexity. A brand refresh might take 4-6 weeks, while a comprehensive marketing campaign could take 2-3 months. During our discovery phase, we'll provide a detailed timeline for your specific project.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-[#4C5526]">How involved will I need to be in the process?</h3>
              <p className="text-gray-700">
                We believe in collaborative partnerships. Your input is vital during key milestones like discovery, concept approval, and feedback rounds. We'll establish clear communication channels and expectations at the start of our engagement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-[#4C5526]">Do you offer ongoing support after project completion?</h3>
              <p className="text-gray-700">
                Absolutely. Many of our clients maintain ongoing relationships with us for strategic guidance, content updates, campaign management, and more. We can create custom support packages based on your needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-[#4C5526]">How do you measure success?</h3>
              <p className="text-gray-700">
                We establish clear KPIs and success metrics at the beginning of each project, aligned with your business goals. Whether it's brand awareness, engagement, conversions, or other metrics, we track performance and provide regular reports.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Process;