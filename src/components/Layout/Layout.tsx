import { Container } from '@mui/material';
import { Header } from './Header';
import { useThemeStore } from '../../store/themeStore';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

interface LayoutProps {
  children: React.ReactNode;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortOption: string;
  onSortChange: (option: string) => void;
  categories: string[];
  onCartOpen: () => void; // Add this line
}

export const Layout = ({
  children,
  onCartOpen,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortOption,
  onSortChange,
  categories
}: LayoutProps) => {
  const { theme } = useThemeStore();

  const muiTheme = createTheme({
    palette: {
      mode: theme,
      background: {
        default: theme === 'dark' ? '#121212' : '#f5f5f5',
        paper: theme === 'dark' ? '#1e1e1e' : '#ffffff',
      },
    },
    components: {
      MuiSelect: {
        styleOverrides: {
          select: {
            backgroundColor: theme === 'dark' ? '#1e1e1e' : '#ffffff',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Header
       onCartOpen={onCartOpen}
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
        sortOption={sortOption}
        onSortChange={onSortChange}
        categories={categories}
      />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {children}
      </Container>
    </ThemeProvider>
  );
};