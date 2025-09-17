import React from "react";
import { createRoot } from "react-dom/client";   // React 19 ✅
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// استيراد الكونتكست
import { ShopContextProvider } from "./context/ShopContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
