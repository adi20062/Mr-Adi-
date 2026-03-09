import React, { useState } from 'react';
import { Menu, X, IceCream } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Updated links based on user request
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Photos', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="bg-ice-cream-pink p-2 rounded-full group-hover:bg-pink-300 transition-colors">
                 <IceCream className="h-8 w-8 text-white" />
              </div>
              <span className="font-bold text-2xl text-gray-800 tracking-tight">
                Cabell's <span className="text-pink-500">Ice Cream</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive(link.path) 
                    ? 'text-pink-500' 
                    : 'text-gray-600 hover:text-pink-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/location" className="ml-4 bg-ice-cream-blue text-blue-900 px-5 py-2 rounded-full font-semibold hover:bg-blue-300 transition-colors shadow-sm whitespace-nowrap">
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-pink-500 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                   isActive(link.path)
                    ? 'text-pink-600 bg-pink-50'
                    : 'text-gray-700 hover:text-pink-500 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;