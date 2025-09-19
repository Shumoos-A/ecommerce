import { createContext, useContext, useState, ReactNode } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type FavoriteContextType = {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
};

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const toggleFavorite = (product: Product) => {
    setFavorites((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) throw new Error("useFavorite must be used inside FavoriteProvider");
  return context;
};
