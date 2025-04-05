import { useEffect, useState } from 'react';
import { Product } from '../types/product';
import { fetchProducts, fetchProductsByCategory } from '../utils/api';

export const useProducts = (category?: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = category 
          ? await fetchProductsByCategory(category) 
          : await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [category]);

  return { products, loading, error };
};