import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-brand-cream min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-center text-brand-wood mb-12">Get in Touch</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="bg-white p-10 rounded-xl shadow-lg space-y-8 h-full">
             <div>
                <h3 className="text-2xl font-bold mb-8 text-brand-red border-b pb-4">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                     <div className="p-4 bg-brand-cream rounded-full text-brand-wood group-hover:bg-brand-red group-hover:text-white transition-colors"><MapPin size={24} /></div>
                     <div>
                        <p className="font-bold text-gray-500 text-sm uppercase tracking-wide">Address</p>
                        <p className="text-lg font-medium">{CONTACT_INFO.address}</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                     <div className="p-4 bg-brand-cream rounded-full text-brand-wood group-hover:bg-brand-red group-hover:text-white transition-colors"><Phone size={24} /></div>
                     <div>
                        <p className="font-bold text-gray-500 text-sm uppercase tracking-wide">Phone</p>
                        <p className="text-lg font-medium">{CONTACT_INFO.phone}</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                     <div className="p-4 bg-brand-cream rounded-full text-brand-wood group-hover:bg-brand-red group-hover:text-white transition-colors"><Mail size={24} /></div>
                     <div>
                        <p className="font-bold text-gray-500 text-sm uppercase tracking-wide">Email</p>
                        <p className="text-lg font-medium">{CONTACT_INFO.email}</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                     <div className="p-4 bg-brand-cream rounded-full text-brand-wood group-hover:bg-brand-red group-hover:text-white transition-colors"><Clock size={24} /></div>
                     <div>
                        <p className="font-bold text-gray-500 text-sm uppercase tracking-wide">Business Hours</p>
                        <p className="text-lg font-medium">{CONTACT_INFO.hours}</p>
                     </div>
                  </div>
                  
                  <div className="pt-6 mt-6 border-t">
                     <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-600 hover:text-blue-800 font-bold transition-colors">
                        <Facebook size={24} /> Follow us on Facebook
                     </a>
                  </div>
                </div>
             </div>
          </div>

          {/* Map */}
          <div className="bg-white p-2 rounded-xl shadow-lg h-[500px] overflow-hidden">
             <iframe 
               title="Lucky 7 Cafe Location"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.467439564853!2d-85.7851044!3d39.5203012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b17212c5ddb5b%3A0xcbab82b86b694b9d!2sThe%20Lucky%207%20Cafe!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
               width="100%" 
               height="100%" 
               style={{ border: 0, borderRadius: '0.75rem' }} 
               allowFullScreen 
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade">
             </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};