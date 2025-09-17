import { createContext, useState } from "react";
import Product from "../pages/Product";

// إنشاء الكونتكست
export const ShopContext = createContext();

export function ShopContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const currency = '$';
  const delivery_free = 10;
const [search , setSearch] = useState('');
const [showSearch,setshowSearch] = useState(false)

  // دالة إضافة عنصر للسلة (مثال بسيط)
  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  // قيمة الكونتكست
  const value = {
    Product , currency , delivery_free ,
    search,setSearch,showSearch,setshowSearch,

   cartItems,
  addToCart,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}
