import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuCategory } from '../types';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'All'>('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const categories = ['All', ...Object.values(MenuCategory)];

  return (
    <div className="bg-ice-cream-yellow/20 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            Our Menu
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From classic swirls to towering sundaes, explore our delicious selection of treats made fresh daily.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as MenuCategory | 'All')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-sm ${
                activeCategory === cat
                  ? 'bg-pink-500 text-white transform scale-105 shadow-md'
                  : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full group">
              <div className="h-56 overflow-hidden relative">
                 <img 
                   src={item.image} 
                   alt={item.name} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 {item.popular && (
                   <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                     POPULAR
                   </div>
                 )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                   <span className="text-pink-600 font-bold bg-pink-50 px-2 py-1 rounded-lg">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;