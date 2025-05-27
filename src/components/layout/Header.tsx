import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flame } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'What We Do', href: '/services' },
  { title: 'How It Works', href: '/process' },
  { title: 'The Work', href: '/portfolio' },
  { title: 'About Us', href: '/about' },
  { title: 'Contact', href: '/contact' }
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || mobileMenuOpen 
          ? 'glass-effect shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <div className="text-[#4C5526] flex items-center">
              <Flame size={28} className="mr-2 group-hover:animate-bounce" />
              <span className="font-bold text-xl">RaysForgee</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-medium transition-all duration-300 hover:text-[#4C5526] relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-0.5 after:bg-[#4C5526] after:transition-all after:duration-300 hover:after:w-full ${
                  location.pathname === item.href
                    ? 'text-[#4C5526] after:w-full'
                    : isScrolled ? 'text-gray-700' : 'text-gray-800'
                }`}
              >
                {item.title}
              </Link>
            ))}
            <Button 
              variant="primary" 
              size="sm"
              className="hover:scale-105 transition-transform duration-300"
            >
              Let's Create
            </Button>
          </nav>

          <button
            className="md:hidden text-gray-800 hover:text-[#4C5526] transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="mt-6 pb-6">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block font-medium py-2 transition-all duration-300 hover:translate-x-2 ${
                    location.pathname === item.href
                      ? 'text-[#4C5526]'
                      : 'text-gray-700'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
              <Button 
                variant="primary" 
                size="sm" 
                className="w-full mt-4 hover:scale-105 transition-transform duration-300"
              >
                Let's Create
              </Button>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;