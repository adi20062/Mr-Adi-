export enum UserRole {
  GUEST = 'GUEST',
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Breakfast' | 'Lunch' | 'Kids' | 'Dessert' | 'Drinks' | 'Bakery';
  image: string;
  ingredients?: string[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'Pending' | 'Preparing' | 'Ready' | 'Delivered';
  type: 'Pickup' | 'Delivery';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: 'Google' | 'Website';
}

export interface DashboardStats {
  dailyOrders: { name: string; value: number }[];
  revenue: { name: string; value: number }[];
  topDishes: { name: string; value: number }[];
}