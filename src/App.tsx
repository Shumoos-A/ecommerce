import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { FavoriteProvider } from "./context/FavoriteContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import FavoritesPage from "./pages/FavoritesPage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Comments from "./pages/Comments";
import Login from "./pages/Login"; // استدعاء صفحة Login
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetails from "./pages/ProductDetails"
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CartProvider>
      <FavoriteProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="flex-grow mt-16">
              <Routes>
                <Route path="/" element={<Home searchTerm={searchTerm} />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/comments" element={<Comments />} />
                    <Route path="/login" element={<Login />} /> {/* 👈 هنا */}
                   <Route path="/checkout" element={<CheckoutPage />} />  
                   <Route path="/product/:id" element={<ProductDetails/>} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </FavoriteProvider>
    </CartProvider>
  );
}

export default App;
