
import React from "react";
import { Instagram, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-xl border-t border-white/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
             <div className="w-12 h-12 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
    <span className="text-white font-bold text-lg">H&S</span>
  </div>
</div>

              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  EliteStore
                </h3>
                <p className="text-sm text-gray-600">Premium Shopping Experience</p>
              </div>
            </div>
            <p className="text-gray-600 max-w-md">
              Discover amazing products from our curated collection. We bring you the finest selection of electronics, fashion, and lifestyle products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Home & Garden</li>
              <li>Sports</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-gray-600">Developed with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span className="text-gray-600">by</span>
            <div className="font-semibold text-gray-800 flex flex-col">
              
             <span>Shumoos Abdulrasool</span>
               <span>Huda Hussein</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <motion.a
              href="https://www.instagram.com/shumo.os?igsh=MXEwa2tqOXIxbWlhcg=="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Instagram className="w-4 h-4" />
            </motion.a>
<motion.a
              href="https://www.instagram.com/_ocyi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Instagram className="w-4 h-4" />
            </motion.a>

            


            <span className="text-gray-500 text-sm">
              © 2025 EliteStore. All rights reserved.
            </span>
          </div>
        </div>
      </div>


    <Link
  href="#comments"
  className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
>
  Comments
</Link>


    </footer>
  );
};

export default Footer;