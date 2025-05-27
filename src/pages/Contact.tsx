import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Section background="secondary" className="pt-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#4C5526]">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700">
            Let's start a conversation about your next project.
          </p>
        </div>
      </Section>

      {/* Contact Info and Form */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#4C5526]">Get In Touch</h2>
            <p className="text-lg text-gray-700 mb-8">
              Whether you have a specific project in mind or just want to explore possibilities, we're here to help. Fill out the form and we'll be in touch soon.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#4C5526] mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-[#4C5526] mb-1">Visit Us</h3>
                  <p className="text-gray-700">
                  Testttttttttttt<br />
                    Testttttttttttt<br />
                    Testttttttttttt
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#4C5526] mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-[#4C5526] mb-1">Call Us</h3>
                  <p className="text-gray-700">+961 0000000000</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#4C5526] mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-[#4C5526] mb-1">Email Us</h3>
                  <p className="text-gray-700">example@raysforgee.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-[#4C5526] mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-[#4C5526] mb-1">Busniess Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 9am - 6pm PST<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F5E3CF]/30 p-6 rounded-lg">
              <h3 className="font-bold text-[#4C5526] mb-3">Ready for a Discovery Call?</h3>
              <p className="text-gray-700 mb-4">
                Schedule a 30-minute consultation to discuss your project needs and explore how we can help.
              </p>
              <button className="bg-[#4C5526] text-[#F5E3CF] px-4 py-2 rounded-md hover:bg-[#3A4120] transition-colors">
                Book a Call
              </button>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-[#4C5526]">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="none" containerSize="full" className="p-0">
        <div className="h-96 bg-[#4C5526]/10 w-full rounded-lg overflow-hidden relative">
          {/* This would typically be a Google Maps embed */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-[#4C5526] text-lg font-medium">Interactive Map Would Appear Here</p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;