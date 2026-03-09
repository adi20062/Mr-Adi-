import { MenuItem, Review, DashboardStats } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Lucky 7 Grand Slam',
    description: 'Two eggs, bacon, sausage, pancakes, and hash browns.',
    price: 12.99,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Eggs', 'Bacon', 'Sausage', 'Flour', 'Milk', 'Potatoes']
  },
  {
    id: '2',
    name: 'Biscuits & Gravy',
    description: 'Homemade buttermilk biscuits smothered in sausage gravy.',
    price: 8.99,
    category: 'Breakfast',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxmAg_7gFvpoIAyd-3MaGK7Vgb4T6u62GdA&s',
    ingredients: ['Flour', 'Buttermilk', 'Sausage', 'Milk', 'Pepper']
  },
  {
    id: '3',
    name: 'The Shelby Burger',
    description: '1/2 lb beef patty, cheddar, bacon, onion rings, BBQ sauce.',
    price: 14.50,
    category: 'Lunch',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    ingredients: ['Beef', 'Cheese', 'Bacon', 'Onion', 'Bun']
  },
  {
    id: '4',
    name: 'Club Sandwich',
    description: 'Turkey, ham, bacon, lettuce, tomato, mayo on toasted sourdough.',
    price: 11.99,
    category: 'Lunch',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'Kids Pancakes',
    description: 'Silver dollar pancakes with fruit smile.',
    price: 6.99,
    category: 'Kids',
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    name: 'Bread Pudding',
    description: 'Our famous homemade bread pudding with vanilla sauce.',
    price: 5.99,
    category: 'Dessert',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '7',
    name: 'Coffee',
    description: 'Endless cup of freshly brewed coffee.',
    price: 2.99,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '8',
    name: 'Cinnamon Roll',
    description: 'Giant warm cinnamon roll with cream cheese frosting.',
    price: 4.50,
    category: 'Bakery',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=800'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 5,
    text: 'Best breakfast in Shelbyville! The biscuits and gravy are to die for.',
    date: '2023-10-15',
    source: 'Google'
  },
  {
    id: '2',
    author: 'John D.',
    rating: 4,
    text: 'Great service and classic diner atmosphere. Very friendly staff.',
    date: '2023-11-02',
    source: 'Google'
  },
  {
    id: '3',
    author: 'Emily R.',
    rating: 5,
    text: 'Love the veteran-owned vibe. Food came out fast and hot.',
    date: '2023-12-10',
    source: 'Google'
  },
  {
    id: '4',
    author: 'Mike T.',
    rating: 5,
    text: 'The Lucky 7 Grand Slam is a challenge to finish but delicious!',
    date: '2024-01-05',
    source: 'Google'
  }
];

export const MOCK_STATS: DashboardStats = {
  dailyOrders: [
    { name: 'Mon', value: 45 },
    { name: 'Tue', value: 52 },
    { name: 'Wed', value: 48 },
    { name: 'Thu', value: 61 },
    { name: 'Fri', value: 85 },
    { name: 'Sat', value: 120 },
    { name: 'Sun', value: 110 },
  ],
  revenue: [
    { name: 'Mon', value: 1200 },
    { name: 'Tue', value: 1500 },
    { name: 'Wed', value: 1300 },
    { name: 'Thu', value: 1800 },
    { name: 'Fri', value: 2500 },
    { name: 'Sat', value: 3800 },
    { name: 'Sun', value: 3500 },
  ],
  topDishes: [
    { name: 'Grand Slam', value: 150 },
    { name: 'Shelby Burger', value: 120 },
    { name: 'Biscuits & Gravy', value: 110 },
    { name: 'Bread Pudding', value: 90 },
  ]
};

export const CONTACT_INFO = {
  address: "418 Miller Ave, Shelbyville, IN",
  phone: "+1 317-604-5085",
  hours: "Mon-Sun: 6am - 2pm",
  email: "hello@lucky7cafe.com",
  facebook: "https://www.facebook.com/thelucky7cafe"
};