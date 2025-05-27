import React from 'react';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

const Container: React.FC<ContainerProps> = ({ 
  className = '', 
  children,
  size = 'lg'
}) => {
  const sizeStyles = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    full: 'max-w-full'
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeStyles[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;