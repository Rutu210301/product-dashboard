import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { Layout } from './components/Layout/Layout';
import { useCategories } from './hooks/useCategories';
import Cart from './components/Cart/Cart';

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('default');
  const { categories } = useCategories();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Layout
      onCartOpen={() => setIsCartOpen(true)}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
      sortOption={sortOption}
      onSortChange={setSortOption}
      categories={categories}
      
    >
      <HomePage 
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        sortOption={sortOption}
      />
      <Cart open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </Layout>
  );
}

export default App;