import React from "react";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "../types";
import { useCart } from "../context/CartContext";
import { useFavorite } from "../context/FavoriteContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorite();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const isFavorite = favorites.some((item) => item.id === product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="group bg-white/60 backdrop-blur-xl rounded-2xl border border-white/30 overflow-hidden shadow-lg hover:shadow-2xl hover:bg-white/70 transition-all duration-500"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-3">
            {/* Favorite Button */}
            <motion.button
              onClick={() => toggleFavorite(product)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-200"
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"
                }`}
              />
            </motion.button>

            {/* Cart Button */}
            <motion.button
              onClick={handleAddToCart}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <ShoppingCart className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Sale Badge */}
        {product.originalPrice && (
          <div className="absolute top-3 left-3">
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Sale
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-800">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
