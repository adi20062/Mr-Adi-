import { MenuCategory, MenuItem, Review } from './types';
import { IceCream, Sparkles, Coffee, Star, MapPin, Clock, Phone } from 'lucide-react';

export const SHOP_INFO = {
  name: "Cabell's Ice Cream",
  address: "1658 IN-44, Shelbyville, IN 46176",
  phone: "(555) 123-4567", // Placeholder
  hours: "Mon-Sun: 11:00 AM - 9:00 PM",
  seasonNote: "Closed for winter season. Reopening in February!",
  rating: 4.7
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Soft Serve',
    description: 'Creamy vanilla, rich chocolate, or a twist of both.',
    price: '$3.50',
    category: MenuCategory.SOFT_SERVE,
    popular: true,
    // Soft serve cone
    image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'The Ultimate Banana Split',
    description: 'Three scoops, fresh banana, pineapple, strawberry, chocolate syrup, whipped cream, and a cherry.',
    price: '$7.50',
    category: MenuCategory.BANANA_SPLIT,
    popular: true,
    // Loaded Sundae/Split
    image: 'https://www.seriouseats.com/thmb/4LVJ0Tqw5RFwilsms-dMzGmtUC8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20240513-BananaSplit-AmandaSuarez-hero2-ca996ebfcca5477da9da82cba923efd9.jpg'
  },
  {
    id: '3',
    name: 'Hand-Spun Milkshakes',
    description: 'Thick and creamy. Flavors: Vanilla, Chocolate, Strawberry, Peanut Butter.',
    price: '$5.00',
    category: MenuCategory.SHAKES,
    popular: true,
    // Milkshake
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Hot Fudge Sundae',
    description: 'Warm fudge over cold soft serve with nuts and whipped cream.',
    price: '$5.50',
    category: MenuCategory.SUNDAES,
    // Chocolate Sundae
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    name: 'Pumpkin Spice Delight',
    description: 'Seasonal fall favorite with graham cracker crumbles.',
    price: '$6.00',
    category: MenuCategory.SPECIALS,
    // Fall colored ice cream
    image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely delicious! The soft serve is the creamiest in Shelbyville. A true family favorite.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "John D.",
    rating: 4,
    text: "Great ice cream and friendly staff. The drive-thru was a bit slow, but worth the wait for that Banana Split!",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Emily R.",
    rating: 5,
    text: "Love the family atmosphere and Christian values. Always a happy place to visit with the kids.",
    date: "3 months ago"
  }
];

export const CHART_DATA = [
  { name: 'Vanilla', popularity: 85 },
  { name: 'Chocolate', popularity: 80 },
  { name: 'Twist', popularity: 95 },
  { name: 'Strawberry', popularity: 60 },
  { name: 'Mint Chip', popularity: 70 },
  { name: 'Cookie Dough', popularity: 90 },
];