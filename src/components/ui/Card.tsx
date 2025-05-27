import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ className = '', children, hover = false }) => {
  const baseStyles = 'bg-white rounded-lg overflow-hidden';
  const hoverStyles = hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : 'shadow-md';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ className = '', children }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

export interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt, className = '' }) => {
  return (
    <div className={`w-full aspect-video overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
};

Card.Content = CardContent;
Card.Image = CardImage;

export default Card;