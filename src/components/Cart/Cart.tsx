import { Drawer, Box, Typography, Button, Divider, IconButton, Badge } from '@mui/material';
import { Close, Delete, Add, Remove } from '@mui/icons-material';
import { useCartStore } from '../../store/cartStore';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const Cart = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { cart, itemCount, addToCart, removeFromCart, updateQuantity, clearCart } = useCartStore();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) {
      handleRemoveItem(id);
      return;
    }
    updateQuantity(id, newQuantity);
    showSuccessToast('Quantity updated');
  };

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
    showSuccessToast('Item removed from cart');
  };

  const handleClearCart = () => {
    clearCart();
    showSuccessToast('Cart cleared');
  };

  const showSuccessToast = (message: string) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500,
      toast: true,
      background: '#f5f5f5'
    });
  };

  return (
    <Drawer 
      anchor="right" 
      open={open} 
      onClose={onClose}
      PaperProps={{
        sx: { 
          width: { xs: '100vw', sm: 400 },
          bgcolor: 'background.paper'
        }
      }}
    >
      <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" component="h2">
            Your Cart ({itemCount})
          </Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        
        <Divider sx={{ mb: 2 }} />
        
        {cart.length === 0 ? (
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
            Your cart is empty
          </Typography>
        ) : (
          <>
            <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  layout
                >
                  <Box sx={{ display: 'flex', gap: 2, mb: 3, p: 1 }}>
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{ width: 80, height: 80, objectFit: 'contain' }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1" noWrap>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ${item.price.toFixed(2)}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <IconButton
                          size="small"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          <Remove fontSize="small" />
                        </IconButton>
                        <Typography variant="body1" sx={{ mx: 1 }}>
                          {item.quantity}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <Add fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="error"
                          sx={{ ml: 'auto' }}
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                  <Divider />
                </motion.div>
              ))}
            </Box>
            
            <Box sx={{ mt: 'auto', pt: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6" fontWeight="bold">
                  ${totalPrice.toFixed(2)}
                </Typography>
              </Box>
              
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ mb: 2 }}
                onClick={() => {
                  Swal.fire({
                    title: 'Proceed to checkout?',
                    text: `Total: $${totalPrice.toFixed(2)}`,
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Checkout',
                    cancelButtonText: 'Continue Shopping'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      // Add your checkout logic here
                      Swal.fire('Order Placed!', 'Your order has been processed.', 'success');
                    }
                  });
                }}
              >
                Checkout
              </Button>
              
              <Button
                variant="outlined"
                color="error"
                fullWidth
                onClick={() => {
                  Swal.fire({
                    title: 'Clear your cart?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: 'Clear Cart'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      handleClearCart();
                    }
                  });
                }}
              >
                Clear Cart
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default Cart;