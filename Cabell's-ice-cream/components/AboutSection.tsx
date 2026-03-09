import React from 'react';
import { Heart, Users, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CHART_DATA, SHOP_INFO } from '../constants';

const AboutSection: React.FC = () => {
  const colors = ['#FFC1CC', '#C1E1FF', '#FFF5BA', '#C1FFD7', '#D4A373', '#A78BFA'];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">More Than Just Ice Cream</h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At {SHOP_INFO.name}, we believe that a simple cone can bring a community together. 
              Founded on strong Christian family values, our shop has been a staple in Shelbyville, providing not just 
              desserts, but a place where memories are made.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We take pride in serving high-quality soft serve, fresh ingredients, and smiles. 
              Whether you're celebrating a little league win or just need a sweet treat on a Tuesday, we're here for you.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 bg-pink-50 rounded-xl">
                 <Heart className="text-pink-500" />
                 <span className="font-semibold text-gray-800">Family Values</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                 <Users className="text-blue-500" />
                 <span className="font-semibold text-gray-800">Community Focus</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            {/* Updated Image: Walk-up window style interaction */}
            <img 
              src="https://images.unsplash.com/photo-1516559828984-fb3b99548b21?auto=format&fit=crop&w=800&q=80" 
              alt="Ordering at the ice cream window" 
              className="rounded-3xl shadow-2xl w-full object-cover transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 shadow-inner">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Shelbyville's Flavor Favorites</h2>
            <p className="text-gray-500">What our neighbors are ordering most this season</p>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHART_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
                <Bar dataKey="popularity" radius={[8, 8, 0, 0]} animationDuration={1500}>
                  {CHART_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;