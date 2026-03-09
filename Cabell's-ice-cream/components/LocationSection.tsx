import React from 'react';
import { MapPin, Clock, Phone, Mail, AlertCircle } from 'lucide-react';
import { SHOP_INFO } from '../constants';

const LocationSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Winter Note */}
        <div className="bg-white border-l-4 border-pink-500 p-4 mb-12 rounded-r-lg shadow-sm flex items-start gap-3">
          <AlertCircle className="text-pink-500 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-gray-800">Seasonal Update</h3>
            <p className="text-gray-600">{SHOP_INFO.seasonNote}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Info Card */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 h-full">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Visit Us</h1>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-ice-cream-blue p-3 rounded-full">
                  <MapPin className="text-blue-700 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Address</h3>
                  <p className="text-gray-600">{SHOP_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-ice-cream-yellow p-3 rounded-full">
                  <Clock className="text-yellow-700 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">{SHOP_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-ice-cream-pink p-3 rounded-full">
                  <Phone className="text-pink-700 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-600">{SHOP_INFO.phone}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Send us a Message</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-200 focus:outline-none" />
                <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-200 focus:outline-none" />
                <textarea rows={3} placeholder="How was your ice cream?" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-200 focus:outline-none"></textarea>
                <button className="w-full bg-pink-500 text-white font-bold py-3 rounded-lg hover:bg-pink-600 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl border border-gray-200 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3076.62123456789!2d-85.7712!3d39.5234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDMxJzI0LjIiTiA4NcKwNDYnMTYuMyJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LocationSection;