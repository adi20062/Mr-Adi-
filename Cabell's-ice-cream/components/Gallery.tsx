import React from 'react';

const Gallery: React.FC = () => {
  // Curated Unsplash images of ice cream, sundaes, and family vibes
  const images = [
    "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=600&q=80", // Pink ice cream
    "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=600&q=80", // Sundae
    "https://images.unsplash.com/photo-1515037028865-0a2a82603f7c?auto=format&fit=crop&w=600&q=80", // Family eating
    "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80", // Bowl
    "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=600&q=80", // Scoop
    "https://www.seriouseats.com/thmb/gGOhKFGQ8z26-AArDS3APfGPOAU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20240513-BananaSplit-AmandaSuarez-00-d8f8346e325840129e22ec18129205f1.jpg", // Big sundae
    "https://www.seriouseats.com/thmb/Tl8TYsZAaV1EZBliu3qrJGtWC8A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20240513-BananaSplit-AmandaSuarez-step2-d0cbc7ded1e749d49f3d7f0b3dd70048.jpg", // Handshake
    "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=600&q=80", // Holding cone
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"  // Shop interior vibe
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sweet Moments</h1>
          <p className="text-gray-600">A glimpse into the daily joy at Cabell's.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl shadow-md ${index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold tracking-widest bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">VIEW</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;