import { AppBar, Toolbar, Typography, IconButton, Badge, Box, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { ShoppingCart, Brightness4, Brightness7 } from '@mui/icons-material';
import { useCartStore } from '../../store/cartStore';
import { useThemeStore } from '../../store/themeStore';

interface HeaderProps {
  onCartOpen: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortOption: string;
  onSortChange: (option: string) => void;
  categories: string[];
}

export const Header = ({
  onCartOpen,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortOption,
  onSortChange,
  categories
}: HeaderProps) => {
  const { itemCount } = useCartStore();
  const { theme, toggleTheme } = useThemeStore();

  return (
    <AppBar position="sticky" sx={{ mb: 4 }}>
      <Toolbar sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        gap: 2,
        flexWrap: 'wrap',
        py: 2
      }}>
        <Typography variant="h6" component="div" sx={{ mr: 2 }}>
          ShopEasy
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          flexWrap: 'wrap',
          flexGrow: 1
        }}>
          <TextField
            size="small"
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            sx={{ 
              width: 200,
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'background.paper'
              }
            }}
          />

          <FormControl size="small" sx={{ minWidth: 180 }}>
            <InputLabel sx={{ 
              color: 'text.primary',
              '&.Mui-focused': {
                color: 'text.primary'
              }
            }}>
              Category
            </InputLabel>
            <Select
              value={selectedCategory}
              label="Category"
              onChange={(e) => onCategoryChange(e.target.value as string)}
              sx={{ 
                backgroundColor: 'background.paper',
                '& .MuiSelect-select': {
                  bgcolor: 'background.paper',
                  color: 'text.primary'
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'divider'
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main'
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main'
                }
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: 'background.paper',
                    '& .MuiMenuItem-root': {
                      color: 'text.primary',
                      '&:hover': {
                        bgcolor: 'action.hover'
                      }
                    }
                  }
                }
              }}
            >
              <MenuItem value="">All Categories</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 180 }}>
            <InputLabel sx={{ 
              color: 'text.primary',
              '&.Mui-focused': {
                color: 'text.primary'
              }
            }}>
              Sort By
            </InputLabel>
            <Select
              value={sortOption}
              label="Sort By"
              onChange={(e) => onSortChange(e.target.value as string)}
              sx={{ 
                backgroundColor: 'background.paper',
                '& .MuiSelect-select': {
                  bgcolor: 'background.paper',
                  color: 'text.primary'
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'divider'
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main'
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main'
                }
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: 'background.paper',
                    '& .MuiMenuItem-root': {
                      color: 'text.primary',
                      '&:hover': {
                        bgcolor: 'action.hover'
                      }
                    }
                  }
                }
              }}
            >
              <MenuItem value="default">Default</MenuItem>
              <MenuItem value="price-low">Price: Low to High</MenuItem>
              <MenuItem value="price-high">Price: High to Low</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
            <IconButton color="inherit" onClick={toggleTheme}>
              {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            
            <IconButton color="inherit" aria-label="cart" onClick={onCartOpen}>
              <Badge badgeContent={itemCount} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};