import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-[#4C5526] text-[#F5E3CF] hover:bg-[#3A4120] focus:ring-[#4C5526]',
    secondary: 'bg-[#F5E3CF] text-[#4C5526] hover:bg-[#E9D3B8] focus:ring-[#F5E3CF]',
    outline: 'border-2 border-[#4C5526] text-[#4C5526] hover:bg-[#4C5526] hover:text-[#F5E3CF] focus:ring-[#4C5526]'
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;