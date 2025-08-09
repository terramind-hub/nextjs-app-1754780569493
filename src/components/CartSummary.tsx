'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { cn } from '@/lib/utils';

// Helper function to format currency
function formatCurrency(amount: number, currency: string = 'USD'): string {
  // Validate currency code (ISO 4217 format)
  const validCurrency = /^[A-Z]{3}$/.test(currency) ? currency : 'USD';
  
  // Guard against non-number amounts
  const validAmount = typeof amount === 'number' && !isNaN(amount) ? amount : 0;
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: validCurrency,
  }).format(validAmount);
}

export default function CartSummary() {
  const { items, getCartTotal, getCartItemCount } = useCart();
  const [isCalculating, setIsCalculating] = useState(false);

  // Calculate totals
  const subtotal = getCartTotal();
  const itemCount = getCartItemCount();
  
  // Tax calculation (8.5% for demo)
  const taxRate = 0.085;
  const tax = subtotal * taxRate;
  
  // Shipping calculation
  const shippingThreshold = 50;
  const shippingCost = subtotal >= shippingThreshold ? 0 : 9.99;
  
  // Total calculation
  const total = subtotal + tax + shippingCost;

  const handleCheckout = () => {
    setIsCalculating(true);
    // Simulate calculation delay
    setTimeout(() => {
      setIsCalculating(false);
    }, 500);
  };

  if (items.length === 0) {
    return (
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <p className="text-gray-600 dark:text-gray-400 text-center py-8">
          Your cart is empty
        </p>
        <Link href="/products">
          <Button className="w-full">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 sticky top-4">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})
          </span>
          <span className="font-medium">{formatCurrency(subtotal)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Shipping</span>
          <span className={cn(
            "font-medium",
            shippingCost === 0 && "text-green-600 dark:text-green-400"
          )}>
            {shippingCost === 0 ? 'FREE' : formatCurrency(shippingCost)}
          </span>
        </div>
        
        {subtotal < shippingThreshold && (
          <p className="text-xs text-blue-600 dark:text-blue-400">
            Add {formatCurrency(shippingThreshold - subtotal)} more for free shipping
          </p>
        )}
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Tax</span>
          <span className="font-medium">{formatCurrency(tax)}</span>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
          <div className="flex justify-between">
            <span className="text-base font-semibold">Total</span>
            <span className="text-lg font-bold">{formatCurrency(total)}</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <Link href="/checkout" className="block">
          <Button 
            className="w-full" 
            size="lg"
            onClick={handleCheckout}
            disabled={isCalculating}
          >
            {isCalculating ? 'Calculating...' : 'Proceed to Checkout'}
          </Button>
        </Link>
        
        <Link href="/products" className="block">
          <Button variant="outline" className="w-full">
            Continue Shopping
          </Button>
        </Link>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Secure checkout
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Free returns
          </span>
        </div>
      </div>
    </div>
  );
}