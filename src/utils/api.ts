import { Product } from "../types/product";

const API_BASE = 'https://fakestoreapi.com';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_BASE}/products`);
  return response.json();
};

export const fetchCategories = async (): Promise<string[]> => {
  const response = await fetch(`${API_BASE}/products/categories`);
  return response.json();
};

export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  const response = await fetch(`${API_BASE}/products/category/${category}`);
  return response.json();
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_BASE}/products/${id}`);
  return response.json();
};