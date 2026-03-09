import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { User, Clock, Heart, Settings, Star, MessageSquare } from 'lucide-react';

export const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  const [showReviewModal, setShowReviewModal] = useState(false);

  if (!user) return <div>Access Denied</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <aside className="w-full md:w-1/4">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
             <div className="w-24 h-24 bg-brand-cream rounded-full mx-auto flex items-center justify-center text-4xl mb-4 border-4 border-brand-red/20">
                {user.name.charAt(0)}
             </div>
             <h2 className="text-xl font-bold">{user.name}</h2>
             <p className="text-gray-500 text-sm mb-6">{user.email}</p>
             <nav className="space-y-2 text-left">
                <button className="flex items-center gap-3 w-full p-3 bg-brand-red text-white rounded-lg font-medium shadow-sm transition-transform hover:scale-105">
                   <User size={18} /> My Profile
                </button>
                <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-lg text-gray-600 transition-colors">
                   <Clock size={18} /> Order History
                </button>
                <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-lg text-gray-600 transition-colors">
                   <Heart size={18} /> Saved Dishes
                </button>
                <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-lg text-gray-600 transition-colors">
                   <Settings size={18} /> Account Settings
                </button>
             </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
           {/* Welcome Banner */}
           <div className="bg-gradient-to-r from-brand-wood to-brand-woodLight p-8 rounded-xl shadow-md text-white flex justify-between items-center">
              <div>
                 <h1 className="text-3xl font-serif font-bold mb-2">Hello, {user.name}!</h1>
                 <p className="opacity-90">Ready for your next meal at The Lucky 7 Café?</p>
              </div>
              <Button onClick={() => setShowReviewModal(!showReviewModal)} variant="primary" className="bg-white text-brand-wood hover:bg-gray-100">
                <MessageSquare size={18} className="mr-2"/> Write a Review
              </Button>
           </div>

           {showReviewModal && (
             <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 animate-fade-in">
                <h3 className="text-lg font-bold mb-4">Leave a Review</h3>
                <div className="flex gap-2 mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} size={24} className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors" />)}
                </div>
                <textarea className="w-full border border-gray-300 rounded-md p-3 focus:ring-brand-red focus:border-brand-red" rows={3} placeholder="Tell us about your experience..."></textarea>
                <div className="mt-4 text-right space-x-2">
                   <Button variant="ghost" onClick={() => setShowReviewModal(false)}>Cancel</Button>
                   <Button>Submit Review</Button>
                </div>
             </div>
           )}

           {/* Past Orders */}
           <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold mb-4 text-brand-wood">Recent Orders</h3>
              <div className="space-y-4">
                 {[1, 2].map(order => (
                    <div key={order} className="border border-gray-100 rounded-lg p-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                       <div className="flex items-start gap-4">
                          <div className="bg-brand-cream p-3 rounded-lg text-2xl">🍔</div>
                          <div>
                             <p className="font-bold text-brand-wood">Order #{2023000 + order}</p>
                             <p className="text-sm text-gray-500">October {10 + order}, 2023</p>
                             <p className="text-sm text-gray-600 mt-1">Lucky 7 Grand Slam, Coffee</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className="font-bold text-lg text-brand-wood">$15.98</p>
                          <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-green-100 text-green-800 mb-2">Delivered</span>
                          <div>
                             <Button size="sm" variant="outline" className="text-xs">Reorder</Button>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};