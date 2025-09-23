
// src/pages/Home.tsx
import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // 👈 لإضافة الرابط
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import { products } from '../data/products';
import { Product } from '../types';

interface HomeProps {
  searchTerm: string;
}

const Home: React.FC<HomeProps> = ({ searchTerm }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [sortBy, setSortBy] = useState('name');
  const [showComments, setShowComments] = useState(false);
  const commentsRef = useRef<HTMLDivElement>(null);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  // تعليقات
  const comments = [
    { id: 1, name: "Ali", avatar: "https://i.pravatar.cc/50?img=4", message: "Great product!", date: "2025-09-19 09:00 AM" },
    { id: 2, name: "Sara", avatar: "https://i.pravatar.cc/50?img=5", message: "Fast delivery!", date: "2025-09-18 03:20 PM" },
    { id: 3, name: "Ahmed", avatar: "https://i.pravatar.cc/50?img=6", message: "Highly recommended!", date: "2025-09-17 07:10 PM" },
    { id: 4, name: "Huda", avatar: "https://i.pravatar.cc/50?img=7", message: "Excellent quality!", date: "2025-09-16 11:45 AM" },
    { id: 5, name: "Layla", avatar: "https://i.pravatar.cc/50?img=8", message: "Very satisfied!", date: "2025-09-15 02:30 PM" },
    { id: 6, name: "Omar", avatar: "https://i.pravatar.cc/50?img=9", message: "Will buy again!", date: "2025-09-14 06:50 PM" },
    { id: 7, name: "Nora", avatar: "https://i.pravatar.cc/50?img=10", message: "Amazing service!", date: "2025-09-13 10:10 AM" },
    { id: 8, name: "Zaid", avatar: "https://i.pravatar.cc/50?img=11", message: "Loved the packaging!", date: "2025-09-12 04:20 PM" },
    { id: 9, name: "Mona", avatar: "https://i.pravatar.cc/50?img=12", message: "Affordable and stylish!", date: "2025-09-11 01:00 PM" },
    { id: 10, name: "Yusuf", avatar: "https://i.pravatar.cc/50?img=13", message: "Top-notch quality!", date: "2025-09-10 05:40 PM" },
  ];

  const toggleComments = () => {
    setShowComments(!showComments);
    setTimeout(() => {
      commentsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50/40 to-pink-50/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Discover Amazing Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect items from our curated collection of premium products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Filters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>

          <div className="lg:col-span-3">
            <motion.div className="mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="text-gray-600">
                Showing {filteredAndSortedProducts.length} products
                {searchTerm && ` for "${searchTerm}"`}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
            </motion.div>

            {filteredAndSortedProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </motion.div>
            ) : (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    layout
                  >
                    {/* 👇 رابط يوديك لصفحة تفاصيل المنتج */}
                    <Link to={`/product/${product.id}`}>
                      <ProductCard product={product} />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* زر التعليقات */}
            <div className="flex justify-center my-8">
              <button
                onClick={toggleComments}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {showComments ? "Hide Comments" : "Show Comments"}
              </button>
            </div>

            {/* قسم التعليقات */}
            {showComments && (
              <div ref={commentsRef} className="flex flex-col items-center pt-8 pb-12 px-4 transition-all duration-500 w-full">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Customer Comments
                </h2>

                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
                  {comments.map((c) => (
                    <div key={c.id} className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-5">
                      <div className="flex items-center mb-3">
                        <img
                          src={c.avatar}
                          alt={c.name}
                          className="w-12 h-12 rounded-full mr-3 object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-800">{c.name}</p>
                          <p className="text-gray-400 text-xs">{c.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-700">{c.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
