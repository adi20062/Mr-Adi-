import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Star, Truck, Utensils, Clock } from 'lucide-react';
import { MENU_ITEMS, REVIEWS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1920)' }}>
        <div className="text-center text-white px-4 max-w-4xl z-10">
          <div className="mb-4 inline-block bg-brand-red px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider animate-bounce">Veteran Owned & Operated</div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-shadow">The Lucky 7 Café</h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">Shelbyville’s Favorite American Diner serving breakfast & lunch with a smile.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/menu"><Button size="lg" className="shadow-lg transform hover:-translate-y-1 transition-transform">View Menu</Button></Link>
            <Link to="/menu"><Button size="lg" variant="secondary" className="shadow-lg bg-white text-brand-wood hover:bg-gray-100 transform hover:-translate-y-1 transition-transform">Order Online</Button></Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-yellow-400 bg-black/30 inline-flex px-6 py-2 rounded-full backdrop-blur-sm">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={20} />)}
            </div>
            <span className="text-white font-semibold">4.7 (173+ Reviews)</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white -mt-10 relative z-20 rounded-t-3xl shadow-2xl mx-4 lg:mx-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-xl bg-brand-cream/30 hover:bg-brand-cream/50 transition-colors">
            <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-6 text-brand-red">
               <Utensils size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 font-serif">Dine-In</h3>
            <p className="text-gray-600">Enjoy our cozy, family-friendly atmosphere with fast, friendly service.</p>
          </div>
          <div className="p-8 rounded-xl bg-brand-cream/30 hover:bg-brand-cream/50 transition-colors">
            <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-6 text-brand-red">
               <Truck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 font-serif">Delivery</h3>
            <p className="text-gray-600">Hot and fresh food delivered right to your door step in Shelbyville.</p>
          </div>
          <div className="p-8 rounded-xl bg-brand-cream/30 hover:bg-brand-cream/50 transition-colors">
            <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-6 text-brand-red">
               <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 font-serif">Takeout</h3>
            <p className="text-gray-600">Order ahead online and pick up at your convenience. Ready when you are.</p>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-brand-wood mb-4">Customer Favorites</h2>
            <p className="text-gray-600">Don't know what to order? Try one of our best sellers.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MENU_ITEMS.slice(0, 4).map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="overflow-hidden h-48">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg mb-1 leading-tight group-hover:text-brand-red transition-colors">{item.name}</h3>
                    <span className="font-bold text-brand-red">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{item.description}</p>
                  <Link to="/menu" className="block text-center w-full py-2 rounded border border-brand-wood text-brand-wood font-bold hover:bg-brand-wood hover:text-white transition-colors">Order Now</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu"><Button variant="outline" size="lg" className="border-2">View Full Menu</Button></Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
            <div className="absolute top-4 -left-4 w-full h-full border-4 border-brand-red rounded-lg hidden md:block"></div>
            <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=800" alt="Cafe Interior" className="rounded-lg shadow-xl relative z-10 w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-brand-wood mb-6">More Than Just a Diner</h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              We are a veteran-owned establishment proud to serve the Shelbyville community. 
              Whether you're here for our famous biscuits and gravy or just a cup of coffee and a chat, 
              we treat everyone like family.
            </p>
            <div className="flex gap-4">
               <Link to="/about"><Button>Our Story</Button></Link>
               <Link to="/gallery"><Button variant="ghost">View Gallery</Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-brand-wood text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-cream opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.slice(0, 3).map(review => (
              <div key={review.id} className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="italic mb-6 text-brand-cream/90 text-lg">"{review.text}"</p>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center font-bold">
                      {review.author.charAt(0)}
                   </div>
                   <div>
                      <div className="font-bold">{review.author}</div>
                      <div className="text-xs text-white/50">{review.source} Review</div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};