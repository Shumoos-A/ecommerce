import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "MacBook Pro 16-inch",
    price: 2399,
    originalPrice: 2599,
    category: "Electronics",
    image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg",
    description: "Powerful laptop with M2 chip, perfect for professionals and creatives.",
    rating: 4.8,
    reviews: 342
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 999,
    category: "Electronics",
    image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
    description: "Latest iPhone with titanium design and advanced camera system.",
    rating: 4.7,
    reviews: 1205
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 349,
    originalPrice: 399,
    category: "Electronics",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
    description: "Premium noise-canceling wireless headphones.",
    rating: 4.6,
    reviews: 892
  },
  {
    id: 4,
    name: "Yellow suit",
    price: 150,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A modern yellow suit, radiating vibrancy and adding a touch of elegance and boldness to any look",
    rating: 4.5,
    reviews: 567
  },
  {
    id: 5,
    name: "Samsung 4K Smart TV",
    price: 799,
    originalPrice: 899,
    category: "Electronics",
    image: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg",
    description: "55-inch 4K Smart TV with HDR and built-in streaming apps.",
    rating: 4.4,
    reviews: 3450
  },
  {
    id: 6,
    name: "Earring",
    price: 2300,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1727947553983-1e1aee64605b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sparkling, luxurious diamond earrings, adding a touch of elegance and sophistication to any look",
    rating: 4.3,
    reviews: 156
  },
  {
    id: 7,
    name: "Gaming Mechanical Keyboard",
    price: 179,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1756694938681-23f28a08fdde?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "RGB mechanical keyboard with blue switches for gaming.",
    rating: 4.7,
    reviews: 1567
  },
  {
    id: 8,
    name: "Wireless Mouse",
    price: 79,
    originalPrice: 99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1648943018909-81249dd16d52?q=80&w=701&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ergonomic wireless mouse with precision tracking.",
    rating: 4.2,
    reviews: 189
  },
  {
    id: 9,
    name: "Neclace",
    price: 1900,
    category: "Fashion",
    image: "https://plus.unsplash.com/premium_photo-1681276168529-fec94bbf342d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A luxurious diamond necklace, sparkling with elegance and sophistication, adding a touch of glamour and beauty to any look",
    rating: 4.6,
    reviews: 312
  },
  {
    id: 10,
    name: "Fitness Tracker",
    price: 199,
    originalPrice: 249,
    category: "Electronics",
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    description: "Advanced fitness tracker with heart rate monitoring.",
    rating: 4.4,
    reviews: 678
  },
  {
    id: 11,
    name: "Desk set up",
    price: 450,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1663654752348-aeb46632c56b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The computer setup is neat and stylish, featuring a monitor, keyboard, and mouse, with soft lighting and organized cables",
    rating: 4.5,
    reviews: 234
  },
  {
    id: 12,
    name: "Bluetooth Speaker",
    price: 89,
    originalPrice: 119,
    category: "Electronics",
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg",
    description: "Portable waterproof speaker with premium sound quality.",
    rating: 4.3,
    reviews: 456
  },
  {
    id: 13,
    name: "Dress",
    price: 89,
    originalPrice: 119,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1654512697735-d7ff21350443?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Classic dress for occasions and weddings",
    rating: 4.3,
    reviews: 457
  },
  {id: 14,
    name: "White Room",
    price: 800,
    category: "Furniture",
    image: "https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sleeping A designated place for a new bike, a bed and a closet, with a safe and private neighborhood",
    rating: 4.3,
    reviews: 423
  },
  {
    id: 15,
    name: "chair",
    price: 250,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "brown wooden framed yellow padded chair Modern minimalist home design",
    rating: 3.8,
    reviews: 578
  },
  {
    id: 16,
    name: "Mirror",
    price: 660,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "brown wooden framed yellow padded chair Modern minimalist home design",
    rating: 4.3,
    reviews: 678
  },
   {
    id: 17,
    name: "Treasury",
    price: 450,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1641725968226-6531c9b642c4?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "a black and white room with a chair and a table",
    rating: 4.3,
    reviews: 800
  },
  {
    id: 18,
    name: "Brown Room",
    price: 1000,
    category: "Furniture",
    image: "https://plus.unsplash.com/premium_photo-1661963239507-7bdf41a5e66b?q=80&w=823&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "3D Render of Luxury hotel room",
    rating: 5,
    reviews: 329
  },
   {
    id: 19,
    name: "Chair",
    price: 150,
    category: "Furniture",
    image: "https://plus.unsplash.com/premium_photo-1661458310766-39606514ba2f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "House with cozy boho ethnic interior in living room. Green plants in flower pots. Decoration at home.",
    rating: 4.3,
    reviews: 167
  },
  
  {
  id: 21,
  name: "Room",
  price: 150,
  category: "Furniture",
  image: "https://plus.unsplash.com/premium_photo-1676968002658-19c30e37e808?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "Bright white room with a green plant, creating a calm and fresh vibe",
  rating: 4.3,
  reviews: 763
  },
  {
  id: 22,
  name: "Room",
  price: 1200,
  category: "Furniture",
  image: "https://plus.unsplash.com/premium_photo-1661940838955-328e043c6d03?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "A bright, modern room with vibrant furniture, highlighted by an orange sofa that adds a touch of energy and warmth to the space",
  rating: 4.3,
  reviews: 1230
  },
  {
  id: 23,
  name: "Room",
  price: 150,
  category: "Furniture",
  image: "https://plus.unsplash.com/premium_photo-1684182360759-081852cf3b31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "a bedroom with a bed, desk, and mirror",
  rating: 4.3,
  reviews: 987
  },
  {
  id: 24,
  name: "Tulip",
  price: 35,
  category: "Flower",
  image: "https://plus.unsplash.com/premium_photo-1677567937502-9da446164f64?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "An elegant pink tulip, radiating delicacy and beauty, adding a touch of softness and joy wherever it is placed",
  rating: 3.8,
  reviews: 200
  },
  {
  id: 25,
  name: "White Rose",
  price: 50,
  category: "Flower",
  image: "https://plus.unsplash.com/premium_photo-1675003662462-56cb6cd7a26e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "A pure white rose bouquet, radiating delicacy and serenity, adding a touch of elegance and calm to any occasion",
  rating: 3.8,
  reviews: 220
  },
  {
  id: 26,
  name: "Harmony in Bloom",
  price: 35,
  category: "Flower",
  image: "https://images.unsplash.com/photo-1672865459153-fb147830ea03?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "A striking bouquet of red and white flowers, blending love and purity, adding beauty and charm to any occasion",
  rating: 3.8,
  reviews: 240
  },
  {
  id: 27,
  name: "Pink Serenity",
  price: 45,
  category: "Flower",
  image: "https://plus.unsplash.com/premium_photo-1673546785110-a74ad6261a2a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "A stunning bouquet of flowers in baby pink gradients, radiating delicacy and femininity, adding a dreamy and soft touch to any occasion",
  rating: 3.8,
  reviews: 320
},
{
  id: 28,
  name: "Purple Elegance",
  price: 80,
  category: "Flower",
  image: "https://plus.unsplash.com/premium_photo-1676272319102-52c8331e0a06?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "A enchanting bouquet of roses in purple gradients, radiating elegance and mystery, adding a dreamy and sophisticated touch to any occasion",
  rating: 3.8,
  reviews: 3009
},
{
  id: 29,
  name: "Pink Whispers",
  price: 80,
  category: "Flower",
  image: "https://plus.unsplash.com/premium_photo-1674581220925-6a394e06f4f5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "An elegant bouquet of roses in various pink shades, catching the eye and filling the space with warmth and delicacy",
  rating: 3.8,
  reviews: 3080
},
{
  id: 30,
  name: "Brown Bag",
  price: 210,
  category: "Fashion",
  image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "A modern brown handbag, combining elegance and practicality, perfectly complementing any outfit with a stylish, contemporary touch",
  rating: 3.8,
  reviews: 3010
},
{
  id: 31,
  name: "White Bag",
  price: 190,
  category: "Fashion",
  image: "https://images.unsplash.com/photo-1682745230951-8a5aa9a474a0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "A stylish and elegant white handbag, giving your look a touch of purity and sophistication",
  rating: 3.8,
  reviews: 7790
},
{
 id: 32,
  name: "Heels",
  price: 120,
  category: "Fashion",
  image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "Elegant high-heeled shoes, combining sophistication and femininity, adding a touch of height and confidence to your look",
  rating: 3.8,
  reviews: 7798
},
{
 id: 33,
  name: "Blue Jacket",
  price: 500,
  category: "Fashion",
  image: "https://images.unsplash.com/photo-1689692891188-658adfa11fb4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "A short blue jacket, trendy and distinctive, perfectly completing any outfit with style",
  rating: 3.8,
  reviews: 7478
},
];

export const categories = [
  "All",
  "Electronics",
  "Fashion", 
  "Furniture",
  "Flower"
  
];

