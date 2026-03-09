import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { MOCK_STATS, MENU_ITEMS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, DollarSign, ShoppingBag, Utensils, Edit, Trash2, Plus, Image as ImageIcon, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'menu' | 'orders' | 'settings'>('overview');

  if (!user || user.role !== 'ADMIN') {
    return <div className="p-8 text-center text-red-600 font-bold">Unauthorized Access</div>;
  }

  const renderOverview = () => (
    <div className="space-y-8 animate-fade-in">
       {/* Stats Cards */}
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Orders</p>
                <p className="text-2xl font-bold text-gray-800">1,245</p>
              </div>
              <ShoppingBag className="text-blue-500 opacity-20" size={40} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
             <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm font-medium">Revenue</p>
                <p className="text-2xl font-bold text-gray-800">$45,200</p>
              </div>
              <DollarSign className="text-green-500 opacity-20" size={40} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
             <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm font-medium">New Users</p>
                <p className="text-2xl font-bold text-gray-800">342</p>
              </div>
              <Users className="text-yellow-500 opacity-20" size={40} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
             <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm font-medium">Menu Items</p>
                <p className="text-2xl font-bold text-gray-800">{MENU_ITEMS.length}</p>
              </div>
              <Utensils className="text-red-500 opacity-20" size={40} />
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
             <h3 className="text-lg font-bold mb-6 text-gray-700">Weekly Revenue</h3>
             <div className="h-80 w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <LineChart data={MOCK_STATS.revenue}>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
                   <XAxis dataKey="name" axisLine={false} tickLine={false} />
                   <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `$${val}`} />
                   <Tooltip />
                   <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={3} activeDot={{ r: 8 }} />
                 </LineChart>
               </ResponsiveContainer>
             </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
             <h3 className="text-lg font-bold mb-6 text-gray-700">Top Selling Dishes</h3>
             <div className="h-80 w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={MOCK_STATS.topDishes} layout="vertical">
                   <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                   <XAxis type="number" hide />
                   <YAxis dataKey="name" type="category" width={120} tick={{fontSize: 12}} />
                   <Tooltip />
                   <Bar dataKey="value" fill="#D32F2F" radius={[0, 4, 4, 0]} barSize={20} />
                 </BarChart>
               </ResponsiveContainer>
             </div>
          </div>
        </div>
    </div>
  );

  const renderMenuManagement = () => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
             <h3 className="text-lg font-bold text-gray-700">Menu Items</h3>
             <Button size="sm" className="flex items-center gap-2"><Plus size={16}/> Add Item</Button>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                   <th className="px-6 py-4 font-medium text-gray-500">Image</th>
                   <th className="px-6 py-4 font-medium text-gray-500">Name</th>
                   <th className="px-6 py-4 font-medium text-gray-500">Category</th>
                   <th className="px-6 py-4 font-medium text-gray-500">Price</th>
                   <th className="px-6 py-4 font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody>
                 {MENU_ITEMS.map((item) => (
                   <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-6 py-4"><img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" /></td>
                      <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                      <td className="px-6 py-4"><span className="bg-gray-100 px-2 py-1 rounded text-xs">{item.category}</span></td>
                      <td className="px-6 py-4 font-bold text-brand-red">${item.price.toFixed(2)}</td>
                      <td className="px-6 py-4 flex gap-2">
                         <button className="p-2 text-blue-600 hover:bg-blue-50 rounded"><Edit size={18}/></button>
                         <button className="p-2 text-red-600 hover:bg-red-50 rounded"><Trash2 size={18}/></button>
                      </td>
                   </tr>
                 ))}
              </tbody>
            </table>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-wood text-brand-cream hidden md:block">
         <div className="p-6">
            <h2 className="text-2xl font-serif font-bold">Admin Panel</h2>
         </div>
         <nav className="px-4 space-y-2">
            <button onClick={() => setActiveTab('overview')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'overview' ? 'bg-brand-red text-white' : 'hover:bg-white/10'}`}>
               <ShoppingBag size={20} /> Overview
            </button>
            <button onClick={() => setActiveTab('menu')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'menu' ? 'bg-brand-red text-white' : 'hover:bg-white/10'}`}>
               <Utensils size={20} /> Menu Items
            </button>
            <button onClick={() => setActiveTab('orders')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'orders' ? 'bg-brand-red text-white' : 'hover:bg-white/10'}`}>
               <Clock size={20} /> Orders
            </button>
            <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'settings' ? 'bg-brand-red text-white' : 'hover:bg-white/10'}`}>
               <ImageIcon size={20} /> Gallery & Site
            </button>
         </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto h-screen">
         <div className="mb-8 flex justify-between items-center md:hidden">
            <h1 className="text-2xl font-bold text-brand-wood">Admin Dashboard</h1>
         </div>

         {activeTab === 'overview' && renderOverview()}
         {activeTab === 'menu' && renderMenuManagement()}
         {activeTab === 'orders' && <div className="bg-white p-8 rounded-xl shadow text-center text-gray-500">Order Management Module</div>}
         {activeTab === 'settings' && <div className="bg-white p-8 rounded-xl shadow text-center text-gray-500">Site Settings & Gallery Module</div>}
      </main>
    </div>
  );
};