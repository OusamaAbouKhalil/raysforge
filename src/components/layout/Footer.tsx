import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4C5526] text-[#F5E3CF] pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Flame size={24} className="mr-2" />
              <span className="font-bold text-xl">RaysForgee</span>
            </Link>
            <p className="text-[#F5E3CF]/80 mb-6">
              We forge digital futures through strategic creativity and precision execution.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#F5E3CF] hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#F5E3CF] hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#F5E3CF] hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-[#F5E3CF] hover:text-white transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-[#F5E3CF]/80 hover:text-white transition-colors">
                  Marketing Strategy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#F5E3CF]/80 hover:text-white transition-colors">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#F5E3CF]/80 hover:text-white transition-colors">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#F5E3CF]/80 hover:text-white transition-colors">
                  Digital Lab Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-[#F5E3CF]/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-[#F5E3CF]/80 hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-[#F5E3CF]/80 hover:text-white transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#F5E3CF]/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-[#F5E3CF]/80">example@raysforgee.com</li>
              <li className="text-[#F5E3CF]/80">0000000000</li>
              <li className="text-[#F5E3CF]/80">
              Testtttttt<br />
                Testtttttt<br />
                Testtttttt
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#F5E3CF]/20 text-center md:flex md:justify-between md:items-center">
          <p className="text-[#F5E3CF]/60 text-sm">
            &copy; {new Date().getFullYear()} RaysForgee. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-[#F5E3CF]/60 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors mr-4">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;