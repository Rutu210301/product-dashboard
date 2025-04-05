import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Product } from '../../types/product';
import Swal from 'sweetalert2';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onViewDetails, onAddToCart }: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);  // This calls the parent component's add to cart function
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${product.title} added to cart!`,
      showConfirmButton: false,
      timer: 1500,
      toast: true,
      background: '#f5f5f5'
    });
  };

  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          sx={{ height: 140, objectFit: 'contain', p: 1, bgcolor: 'background.paper' }}
          image={product.image}
          alt={product.title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="h3" noWrap>
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {product.category}
          </Typography>
          <Typography variant="h6" color="primary">
            ${product.price.toFixed(2)}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
          <Button size="small" onClick={() => onViewDetails(product)}>
            View Details
          </Button>
          <Button size="small" color="secondary" variant="contained"  onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};