import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { FavoriteProvider } from "./context/FavoriteContext";


createRoot(document.getElementById("root") as HTMLElement).render(
 
  <StrictMode>
    <CartProvider>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </CartProvider>
  </StrictMode>
  
);

  