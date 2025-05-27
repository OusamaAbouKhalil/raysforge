import React from 'react';
import Container from './Container';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  background?: 'light' | 'dark' | 'primary' | 'secondary' | 'none';
}

const Section: React.FC<SectionProps> = ({ 
  id,
  className = '', 
  children,
  containerSize = 'lg',
  background = 'light'
}) => {
  const backgroundStyles = {
    light: 'bg-[#F5E3CF]/20',
    dark: 'bg-[#4C5526] text-[#F5E3CF]',
    primary: 'bg-[#4C5526]/90 text-[#F5E3CF]',
    secondary: 'bg-[#F5E3CF]',
    none: ''
  };

  return (
    <section 
      id={id}
      className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};

export default Section;