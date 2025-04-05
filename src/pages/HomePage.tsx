import { useState, useEffect } from 'react';
import { Grid as MuiGrid } from '@mui/material';
import { useCategories } from '../hooks/useCategories';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from '../components/Product/ProductCard';
import { ProductModal } from '../components/Product/ProductModal';
import { Loader } from '../components/UI/Loader';
import { ErrorMessage } from '../components/UI/ErrorMessage';
import { Product } from '../types/product';
import { useCartStore } from '../store/cartStore';


interface HomePageProps {
  searchQuery: string;
  selectedCategory: string;
  sortOption: string;
}

export const HomePage = ({
  searchQuery,
  selectedCategory,
  sortOption
}: HomePageProps) => {
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const { products, loading, error } = useProducts(selectedCategory);
  const { categories } = useCategories();
  const { addToCart } = useCartStore();

  // Debounce search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, quantity: 1 });
  };

  // Filter and sort products
  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'price-low') return a.price - b.price;
      if (sortOption === 'price-high') return b.price - a.price;
      return 0; // Default sorting
    });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <MuiGrid container spacing={4}>
      {filteredProducts.map((product) => (
  <MuiGrid 
    {...{
      item: true,
      key: product.id,
      xs: 12,
      sm: 6,
      md: 4,
      lg: 3
    } as any}  // Temporary type assertion
  >
            <ProductCard
              product={product}
              onViewDetails={handleViewDetails}
              onAddToCart={handleAddToCart}
            />
          </MuiGrid>
        ))}
      </MuiGrid>

      <ProductModal
        product={selectedProduct}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </>
  );
};