export enum MenuCategory {
  SOFT_SERVE = 'Soft Serve',
  SHAKES = 'Shakes',
  SUNDAES = 'Sundaes',
  SPECIALS = 'Seasonal Specials',
  BANANA_SPLIT = 'Banana Split'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image?: string;
  popular?: boolean;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}