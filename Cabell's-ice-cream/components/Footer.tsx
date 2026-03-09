import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { SHOP_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ice-cream-blue/30 mt-auto pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{SHOP_INFO.name}</h3>
            <p className="text-gray-600 mb-4">
              Serving smiles and sundaes in Shelbyville since the sweet beginning. 
              Family owned, community focused.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="bg-white p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white p-2 rounded-full text-pink-500 hover:bg-pink-500 hover:text-white transition-all shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white p-2 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition-all shadow-sm">
                <Twitter size={20} />
              </a>
            </div>
            <p className="mt-4 text-sm font-semibold text-pink-600">Follow Us for Specials!</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#/menu" className="text-gray-600 hover:text-pink-500">Menu</a></li>
              <li><a href="#/gallery" className="text-gray-600 hover:text-pink-500">Photo Gallery</a></li>
              <li><a href="#/reviews" className="text-gray-600 hover:text-pink-500">Reviews</a></li>
              <li><a href="#/contact" className="text-gray-600 hover:text-pink-500">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Find Us</h3>
            <p className="text-gray-600">{SHOP_INFO.address}</p>
            <p className="text-gray-600 mt-2">{SHOP_INFO.phone}</p>
            <div className="mt-4 inline-block bg-white px-4 py-2 rounded-lg border border-pink-200 shadow-sm">
               <span className="text-sm font-medium text-gray-500">Status: </span>
               <span className="text-sm font-bold text-pink-600">{SHOP_INFO.seasonNote.includes('Open') ? 'Open Now' : 'Seasonal Hours'}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {SHOP_INFO.name}. All rights reserved. Designed with ❤️.
        </div>
      </div>
    </footer>
  );
};

export default Footer;