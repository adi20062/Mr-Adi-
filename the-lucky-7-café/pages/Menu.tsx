import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../constants';
import { Button } from '../components/ui/Button';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Menu: React.FC = () => {
  const { addToCart, items, total } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', 'Breakfast', 'Lunch', 'Kids', 'Dessert', 'Drinks', 'Bakery'];
  
  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-brand-cream pb-20">
      {/* Menu Header */}
      <div className="bg-brand-wood py-12 text-center text-white">
        <h1 className="text-4xl font-serif font-bold mb-4">Our Menu</h1>
        <p className="max-w-2xl mx-auto text-brand-cream/80">Fresh ingredients, generous portions, and made with love.</p>
      </div>

      {/* Categories & Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Categories */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
            <h3 className="font-bold text-lg mb-4 text-brand-wood">Categories</h3>
            <div className="space-y-2 flex flex-col">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left px-4 py-2 rounded-md transition-colors ${
                    activeCategory === cat 
                      ? 'bg-brand-red text-white font-medium' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Menu Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-brand-wood">{item.name}</h3>
                    <span className="font-bold text-brand-red bg-brand-red/10 px-2 py-1 rounded-md text-sm">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
                  {item.ingredients && (
                     <p className="text-xs text-gray-400 mb-4 italic">Contains: {item.ingredients.join(', ')}</p>
                  )}
                  <Button 
                    onClick={() => addToCart(item, 1)}
                    className="w-full gap-2"
                  >
                    <Plus size={16} /> Add to Order
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Cart Button (Mobile) or Sticky Footer */}
      {items.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 border-t border-gray-200 z-40">
           <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">{items.reduce((a,b) => a+b.quantity, 0)} Items</p>
                <p className="text-xl font-bold text-brand-wood">${total.toFixed(2)}</p>
              </div>
              <Link to="/checkout">
                 <Button size="lg" className="shadow-lg">
                    Checkout <ShoppingCart className="ml-2" size={20} />
                 </Button>
              </Link>
           </div>
        </div>
      )}
    </div>
  );
};