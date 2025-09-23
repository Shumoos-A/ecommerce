import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useFavorite } from "../context/FavoriteContext";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorite();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-700">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50/40 to-pink-50/30 pt-24 px-6">
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-6 md:p-10">
        {/* صورة المنتج */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center mb-8"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md rounded-2xl shadow-lg object-cover"
          />
        </motion.div>

        {/* معلومات المنتج */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>

          <div className="flex items-center justify-center md:justify-start gap-6 mb-6">
            <span className="text-2xl font-semibold text-purple-600">
              ${product.price}
            </span>
            <span className="text-gray-500">⭐ {product.rating}</span>
          </div>

          {/* أزرار */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => addToCart(product)}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
            >
              Add to Cart
            </button>

            <button
              onClick={() => toggleFavorite(product)}
              className="flex items-center gap-2 px-6 py-2 rounded-2xl font-medium transition-all duration-200 shadow-lg border border-gray-300 hover:bg-gray-100"
            >
              <Heart
                size={22}
                className={
                  isFavorite(product.id)
                    ? "text-red-500 fill-red-500"
                    : "text-gray-500"
                }
              />
              {isFavorite(product.id) ? "Added to Favorites" : "Add to Favorites"}
            </button>
          </div>
        </motion.div>

        {/* زر الرجوع */}
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 font-medium underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
