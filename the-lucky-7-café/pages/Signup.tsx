import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';

export const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Simulate signup
    login(formData.email, UserRole.USER);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 bg-brand-cream">
       <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-xl space-y-6">
          <div className="text-center">
             <h2 className="text-3xl font-serif font-bold text-gray-900">Create Account</h2>
             <p className="mt-2 text-sm text-gray-600">Join the Lucky 7 family</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
             <div>
               <label className="block text-sm font-medium text-gray-700">Full Name</label>
               <input name="name" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red" onChange={handleChange} />
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700">Email</label>
               <input name="email" type="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red" onChange={handleChange} />
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700">Phone Number</label>
               <input name="phone" type="tel" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red" onChange={handleChange} />
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700">Password</label>
               <input name="password" type="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red" onChange={handleChange} />
             </div>
             <div>
               <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
               <input name="confirmPassword" type="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red" onChange={handleChange} />
             </div>
             
             <div className="flex items-center">
                <input id="terms" type="checkbox" required className="h-4 w-4 text-brand-red focus:ring-brand-red border-gray-300 rounded" />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">I agree to the Terms & Conditions</label>
             </div>

             <Button type="submit" className="w-full">Sign Up</Button>
          </form>

          <div className="text-center text-sm">
             <span className="text-gray-500">Already have an account? </span>
             <Link to="/login" className="font-medium text-brand-red hover:text-brand-redDark">
               Log in
             </Link>
          </div>
       </div>
    </div>
  );
};