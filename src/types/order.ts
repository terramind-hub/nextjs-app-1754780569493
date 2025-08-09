// Order status enum
export type OrderStatus = 
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded';

// Individual item in an order
export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
}

// Shipping address
export interface ShippingAddress {
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone?: string;
}

// Payment information
export interface PaymentInfo {
  method: 'credit_card' | 'paypal' | 'stripe' | 'apple_pay' | 'google_pay';
  cardLast4?: string;
  cardBrand?: string;
  transactionId: string;
}

// Main order interface
export interface Order {
  id: string;
  userId: string;
  orderNumber: string;
  status: OrderStatus;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  currency: string;
  shippingAddress: ShippingAddress;
  billingAddress?: ShippingAddress;
  paymentInfo: PaymentInfo;
  notes?: string;
  trackingNumber?: string;
  estimatedDelivery?: string;
  createdAt: string;
  updatedAt: string;
  shippedAt?: string;
  deliveredAt?: string;
}

// Order creation payload (for checkout)
export interface CreateOrderRequest {
  items: Omit<OrderItem, 'id'>[];
  shippingAddress: ShippingAddress;
  billingAddress?: ShippingAddress;
  paymentMethod: PaymentInfo['method'];
  notes?: string;
  promoCode?: string;
}

// Order update payload
export interface UpdateOrderRequest {
  status?: OrderStatus;
  trackingNumber?: string;
  estimatedDelivery?: string;
  notes?: string;
}

// Order summary for lists
export interface OrderSummary {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  total: number;
  currency: string;
  itemCount: number;
  createdAt: string;
  estimatedDelivery?: string;
}

// Export the main types
export type { Order, OrderItem, OrderStatus };