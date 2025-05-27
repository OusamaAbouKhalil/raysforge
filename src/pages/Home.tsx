import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import ServiceShowcase from '../components/home/ServiceShowcase';
import ProcessSteps from '../components/home/ProcessSteps';
import FeaturedWork from '../components/home/FeaturedWork';
import ContactCTA from '../components/home/ContactCTA';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <ServiceShowcase />
      <ProcessSteps />
      <FeaturedWork />
      <ContactCTA />
    </Layout>
  );
};

export default Home;