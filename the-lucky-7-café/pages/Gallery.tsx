import React, { useState } from 'react';

const galleryImages = [
  { id: 1, category: 'Food', src: 'https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&q=80&w=800', alt: 'Grand Slam Breakfast' },
  { id: 2, category: 'Interior', src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800', alt: 'Cozy Dining Area' },
  { id: 3, category: 'Food', src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800', alt: 'The Shelby Burger' },
  { id: 4, category: 'Street View', src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800', alt: 'Storefront' },
  { id: 5, category: 'Food', src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800', alt: 'Bread Pudding' },
  { id: 6, category: 'Interior', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', alt: 'Counter Seating' },
  { id: 7, category: 'Food', src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=800', alt: 'Biscuits & Gravy' },
  { id: 8, category: 'Interior', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYeKTV0A-ig4g3t0GsjYyLnwLJPYwoDvYZ0Q&s', alt: 'Family Booths' },
];

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Food' | 'Interior' | 'Street View'>('All');

  const filteredImages = filter === 'All' ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <div className="bg-brand-cream min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
           <h1 className="text-4xl font-serif font-bold text-brand-wood mb-4">Photo Gallery</h1>
           <p className="text-gray-600">A glimpse into The Lucky 7 Café experience.</p>
        </div>
      
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {['All', 'Food', 'Interior', 'Street View'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === cat 
                  ? 'bg-brand-red text-white shadow-md' 
                  : 'bg-white text-brand-wood hover:bg-gray-100 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img) => (
            <div key={img.id} className="group relative overflow-hidden rounded-xl shadow-lg aspect-square bg-gray-200">
               <img 
                 src={img.src} 
                 alt={img.alt} 
                 className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110" 
               />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.alt}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};