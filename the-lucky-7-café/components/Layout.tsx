import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { Menu, X, ShoppingBag, User as UserIcon, LogOut, Facebook, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/Button';
import { CONTACT_INFO } from '../constants';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout, isAdmin } = useAuth();
  const { items } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                 <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-xl font-serif group-hover:bg-brand-redDark transition-colors">7</div>
                 <span className="font-serif font-bold text-xl tracking-tight text-brand-wood">The Lucky 7 Café</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`font-medium transition-colors ${location.pathname === link.path ? 'text-brand-red' : 'text-brand-wood hover:text-brand-red'}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/menu">
                <div className="relative p-2 text-brand-wood hover:text-brand-red cursor-pointer transition-colors">
                  <ShoppingBag size={24} />
                  {items.length > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-red rounded-full animate-pulse">
                      {items.reduce((acc, i) => acc + i.quantity, 0)}
                    </span>
                  )}
                </div>
              </Link>
              
              {user ? (
                <div className="flex items-center gap-4">
                   <Link to={isAdmin ? "/admin/dashboard" : "/dashboard"}>
                      <Button variant="ghost" className="flex items-center gap-2">
                        <UserIcon size={20} />
                        <span className="hidden lg:inline">{user.name.split(' ')[0]}</span>
                      </Button>
                   </Link>
                   <Button variant="outline" size="sm" onClick={logout}>
                     <LogOut size={18} />
                   </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link to="/login"><Button variant="ghost">Login</Button></Link>
                  <Link to="/signup"><Button variant="primary">Sign Up</Button></Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <Link to="/menu" className="relative text-brand-wood">
                  <ShoppingBag size={24} />
                  {items.length > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-red rounded-full">
                      {items.reduce((acc, i) => acc + i.quantity, 0)}
                    </span>
                  )}
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-brand-wood hover:text-brand-red focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? 'bg-brand-cream text-brand-red' : 'text-brand-wood hover:text-brand-red hover:bg-brand-cream'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4 pb-3">
                {user ? (
                   <div className="px-3 space-y-2">
                      <Link to={isAdmin ? "/admin/dashboard" : "/dashboard"} onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-wood font-bold">Dashboard</Link>
                      <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="block text-brand-red w-full text-left">Sign Out</button>
                   </div>
                ) : (
                  <div className="px-3 flex flex-col gap-2">
                     <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block text-center w-full py-2 border rounded border-brand-wood">Login</Link>
                     <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="block text-center w-full py-2 bg-brand-red text-white rounded">Sign Up</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-wood text-brand-cream pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">The Lucky 7 Café</h3>
              <p className="text-brand-cream/80 mb-4">
                Shelbyville’s Favorite American Diner. Veteran-owned and serving the community with love, hospitality, and great food.
              </p>
              <div className="flex space-x-4">
                 <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors"><Facebook size={24} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/menu" className="hover:text-white/80 transition-colors">Menu</Link></li>
                <li><Link to="/about" className="hover:text-white/80 transition-colors">About Us</Link></li>
                <li><Link to="/gallery" className="hover:text-white/80 transition-colors">Gallery</Link></li>
                <li><Link to="/contact" className="hover:text-white/80 transition-colors">Contact</Link></li>
                <li><Link to="/admin/login" className="text-sm opacity-50 hover:opacity-100 transition-opacity">Admin Login</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Visit Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 flex-shrink-0 text-brand-red" size={20} />
                  <span>{CONTACT_INFO.address.split(',')[0]}<br/>{CONTACT_INFO.address.split(',')[1]}, {CONTACT_INFO.address.split(',')[2]}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="flex-shrink-0 text-brand-red" size={20} />
                  <span>{CONTACT_INFO.phone}</span>
                </li>
                <li className="text-sm text-brand-cream/70 mt-4">
                  {CONTACT_INFO.hours}
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-brand-woodLight mt-12 pt-8 text-center text-sm text-brand-cream/60">
            <p>&copy; {new Date().getFullYear()} The Lucky 7 Café. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};