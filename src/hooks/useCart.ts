'use client';

import { useContext } from 'react';
import { CartContext } from '@/components/CartProvider';

export function useCart() {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  // Add the missing getCartItemCount function
  const getCartItemCount = () => {
    return context.itemCount;
  };
  
  return {
    ...context,
    getCartItemCount
  };
}