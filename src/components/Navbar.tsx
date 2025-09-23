import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Heart, User, Home as HomeIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useFavorite } from "../context/FavoriteContext";

interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchTerm, setSearchTerm }) => {
  const { getTotalItems } = useCart();
  const { favorites } = useFavorite();
  const totalItems = getTotalItems();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/20 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="w-12 h-12 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg"
  >
    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
      <span className="text-white font-bold text-lg">S&H</span>
    </div>
  </motion.div>
  <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
    EliteStore
  </span>
</Link>


          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all duration-200 placeholder-gray-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-gray-50/80 hover:bg-gray-100/80 transition-colors duration-200"
              >
                <HomeIcon className="w-5 h-5 text-gray-600" />
              </motion.button>
            </Link>

            <Link to="/favorites">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2.5 rounded-xl bg-gray-50/80 hover:bg-gray-100/80 transition-colors duration-200"
              >
                <Heart className="w-5 h-5 text-pink-500" />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {favorites.length}
                  </span>
                )}
              </motion.button>
            </Link>

            <Link to="/cart">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </motion.button>
            </Link>

           <Link to="/login">
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="p-2.5 rounded-xl bg-gray-50/80 hover:bg-gray-100/80 transition-colors duration-200"
  >
    <User className="w-5 h-5 text-gray-600" />
  </motion.button>
</Link>

          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
