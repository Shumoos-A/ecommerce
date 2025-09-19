import { useFavorite } from "../context/FavoriteContext";
import ProductCard from "../components/ProductCard";

const FavoritesPage = () => {
  const { favorites } = useFavorite();

  return (
    <div className="p-6 pt-24">
      <h2 className="text-3xl font-bold mb-8">My Favorites ❤️</h2>

      {favorites.length === 0 ? (
        <p className="text-gray-500 text-lg">No favorite products yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
