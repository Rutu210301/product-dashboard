import { Modal, Box, Typography, Button, Rating, Divider, Chip, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { Product } from '../../types/product';
import Swal from 'sweetalert2';

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '80%', md: '60%' },
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  overflow: 'auto',
  p: 4,
};

// SweetAlert toast configuration
const showCartNotification = (productTitle: string) => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `${productTitle} added to cart!`,
    showConfirmButton: false,
    timer: 1500,
    toast: true,
    background: 'background.paper',
    customClass: {
      container: 'swal2-toast-container-above-navbar',
      popup: 'swal2-toast-popup-above-navbar',
      title: 'swal2-toast-title-above-navbar'
    },
    target: 'body',
    backdrop: false
  });
};

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductModal = ({ product, open, onClose, onAddToCart }: ProductModalProps) => {
  const handleAddToCart = () => {
    if (!product) return;
    
    onAddToCart(product);
    showCartNotification(product.title);
    onClose();
  };

  if (!product) return null;

  return (
    <Modal 
      open={open} 
      onClose={onClose}
      sx={{
        // Ensure modal backdrop appears above everything except notifications
        zIndex: (theme) => theme.zIndex.modal - 1 
      }}
    >
      <Box sx={modalStyle}>
        <IconButton
          onClick={onClose}
          sx={{ 
            position: 'absolute', 
            right: 8, 
            top: 8,
            color: 'text.primary'
          }}
        >
          <Close />
        </IconButton>
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 4 
        }}>
          {/* Product Image */}
          <Box sx={{ 
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Box
              component="img"
              src={product.image}
              alt={product.title}
              sx={{ 
                width: '100%', 
                maxHeight: 400, 
                objectFit: 'contain',
                borderRadius: 1
              }}
            />
          </Box>
          
          {/* Product Details */}
          <Box sx={{ flex: 2 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              {product.title}
            </Typography>
            
            <Chip 
              label={product.category} 
              color="primary" 
              sx={{ 
                mb: 2,
                textTransform: 'capitalize'
              }} 
            />
            
            <Typography variant="h5" color="primary" gutterBottom>
              ${product.price.toFixed(2)}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating 
                value={product.rating.rate} 
                precision={0.1} 
                readOnly 
                sx={{ mr: 1 }}
              />
              <Typography variant="body2" color="text.secondary">
                ({product.rating.count} reviews)
              </Typography>
            </Box>
            
            <Divider sx={{ my: 2 }} />
            
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>
            
            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{ 
                mt: 3,
                py: 1.5,
                fontWeight: 'bold'
              }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};