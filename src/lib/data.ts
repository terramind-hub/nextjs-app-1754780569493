import { Product } from '@/types/product';
import { User } from '@/types/user';
import { Order } from '@/types/order';

// Product categories
export const categories = [
  { id: '1', name: 'Electronics', slug: 'electronics' },
  { id: '2', name: 'Clothing', slug: 'clothing' },
  { id: '3', name: 'Books', slug: 'books' },
  { id: '4', name: 'Home & Garden', slug: 'home-garden' },
  { id: '5', name: 'Sports & Outdoors', slug: 'sports-outdoors' },
  { id: '6', name: 'Beauty & Personal Care', slug: 'beauty-personal-care' },
  { id: '7', name: 'Toys & Games', slug: 'toys-games' },
  { id: '8', name: 'Automotive', slug: 'automotive' }
];

// Sample products
export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life and superior sound quality.',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop'
    ],
    category: 'Electronics',
    categoryId: '1',
    brand: 'AudioTech',
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    stock: 45,
    sku: 'AT-WBH-001',
    tags: ['wireless', 'bluetooth', 'noise-cancelling', 'premium'],
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Quick charge (15 min = 3 hours)',
      'Premium leather ear cups',
      'Bluetooth 5.0'
    ],
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Impedance': '32 ohms',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.0, 3.5mm jack'
    }
  },
  {
    id: '2',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable organic cotton t-shirt available in multiple colors.',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=500&h=500&fit=crop'
    ],
    category: 'Clothing',
    categoryId: '2',
    brand: 'EcoWear',
    rating: 4.2,
    reviewCount: 89,
    inStock: true,
    stock: 120,
    sku: 'EW-OCT-001',
    tags: ['organic', 'cotton', 'sustainable', 'casual'],
    features: [
      '100% Organic Cotton',
      'Pre-shrunk fabric',
      'Reinforced seams',
      'Available in 8 colors',
      'Machine washable'
    ],
    specifications: {
      'Material': '100% Organic Cotton',
      'Fit': 'Regular',
      'Care': 'Machine wash cold',
      'Origin': 'Made in USA'
    }
  },
  {
    id: '3',
    name: 'The Art of Programming',
    description: 'Comprehensive guide to modern programming practices and software development.',
    price: 49.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop'
    ],
    category: 'Books',
    categoryId: '3',
    brand: 'TechPress',
    rating: 4.8,
    reviewCount: 234,
    inStock: true,
    stock: 67,
    sku: 'TP-AOP-001',
    tags: ['programming', 'software', 'development', 'education'],
    features: [
      '500+ pages of content',
      'Code examples included',
      'Updated for 2024',
      'Beginner to advanced',
      'Digital version included'
    ],
    specifications: {
      'Pages': '512',
      'Publisher': 'TechPress',
      'Language': 'English',
      'ISBN': '978-1234567890',
      'Format': 'Paperback + Digital'
    }
  },
  {
    id: '4',
    name: 'Smart Home Security Camera',
    description: '4K wireless security camera with night vision, motion detection, and smartphone app.',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop'
    ],
    category: 'Electronics',
    categoryId: '1',
    brand: 'SecureHome',
    rating: 4.3,
    reviewCount: 156,
    inStock: true,
    stock: 32,
    sku: 'SH-SC4K-001',
    tags: ['security', 'camera', '4k', 'smart-home', 'wireless'],
    features: [
      '4K Ultra HD recording',
      'Night vision up to 30ft',
      'Motion detection alerts',
      'Two-way audio',
      'Cloud storage included'
    ],
    specifications: {
      'Resolution': '4K (3840x2160)',
      'Field of View': '110°',
      'Night Vision': 'Up to 30ft',
      'Storage': 'Cloud + Local SD',
      'Connectivity': 'Wi-Fi 802.11ac'
    }
  },
  {
    id: '5',
    name: 'Yoga Mat Premium',
    description: 'Non-slip premium yoga mat with alignment lines and carrying strap.',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1506629905607-d405b7a30db9?w=500&h=500&fit=crop'
    ],
    category: 'Sports & Outdoors',
    categoryId: '5',
    brand: 'ZenFit',
    rating: 4.6,
    reviewCount: 92,
    inStock: true,
    stock: 78,
    sku: 'ZF-YMP-001',
    tags: ['yoga', 'fitness', 'non-slip', 'premium', 'exercise'],
    features: [
      'Non-slip surface',
      'Alignment guide lines',
      'Extra thick 6mm',
      'Eco-friendly materials',
      'Carrying strap included'
    ],
    specifications: {
      'Dimensions': '72" x 24" x 6mm',
      'Material': 'TPE (Thermoplastic Elastomer)',
      'Weight': '2.5 lbs',
      'Texture': 'Non-slip both sides',
      'Care': 'Wipe clean with damp cloth'
    }
  },
  {
    id: '6',
    name: 'Ceramic Coffee Mug Set',
    description: 'Set of 4 handcrafted ceramic coffee mugs with unique glazed finish.',
    price: 39.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=500&fit=crop'
    ],
    category: 'Home & Garden',
    categoryId: '4',
    brand: 'ArtisanCraft',
    rating: 4.4,
    reviewCount: 67,
    inStock: true,
    stock: 95,
    sku: 'AC-CCM-004',
    tags: ['ceramic', 'coffee', 'handcrafted', 'set', 'kitchen'],
    features: [
      'Set of 4 mugs',
      'Handcrafted ceramic',
      'Unique glazed finish',
      'Microwave safe',
      'Dishwasher safe'
    ],
    specifications: {
      'Capacity': '12 oz each',
      'Material': 'High-quality ceramic',
      'Dimensions': '4" H x 3.5" W',
      'Care': 'Dishwasher and microwave safe',
      'Set Size': '4 pieces'
    }
  }
];

// Sample users
export const users: User[] = [
  {
    id: '1',
    email: 'john.doe@example.com',
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    role: 'customer',
    createdAt: new Date('2024-01-15'),
    addresses: [
      {
        id: '1',
        type: 'shipping',
        firstName: 'John',
        lastName: 'Doe',
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'US',
        isDefault: true
      }
    ],
    preferences: {
      newsletter: true,
      notifications: true,
      currency: 'USD',
      language: 'en'
    }
  },
  {
    id: '2',
    email: 'jane.smith@example.com',
    name: 'Jane Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    role: 'customer',
    createdAt: new Date('2024-02-20'),
    addresses: [
      {
        id: '2',
        type: 'shipping',
        firstName: 'Jane',
        lastName: 'Smith',
        street: '456 Oak Ave',
        city: 'Los Angeles',
        state: 'CA',
        zipCode: '90210',
        country: 'US',
        isDefault: true
      }
    ],
    preferences: {
      newsletter: false,
      notifications: true,
      currency: 'USD',
      language: 'en'
    }
  }
];

// Sample orders
export const orders: Order[] = [
  {
    id: '1',
    userId: '1',
    status: 'delivered',
    total: 229.98,
    subtotal: 199.98,
    tax: 20.00,
    shipping: 10.00,
    items: [
      {
        id: '1',
        productId: '1',
        name: 'Wireless Bluetooth Headphones',
        price: 199.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop'
      }
    ],
    shippingAddress: {
      id: '1',
      type: 'shipping',
      firstName: 'John',
      lastName: 'Doe',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'US',
      isDefault: true
    },
    paymentMethod: {
      type: 'card',
      last4: '4242',
      brand: 'visa'
    },
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-05'),
    trackingNumber: 'TRK123456789'
  },
  {
    id: '2',
    userId: '1',
    status: 'processing',
    total: 119.98,
    subtotal: 109.98,
    tax: 10.00,
    shipping: 0.00,
    items: [
      {
        id: '2',
        productId: '2',
        name: 'Organic Cotton T-Shirt',
        price: 29.99,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop'
      },
      {
        id: '3',
        productId: '3',
        name: 'The Art of Programming',
        price: 49.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=100&h=100&fit=crop'
      }
    ],
    shippingAddress: {
      id: '1',
      type: 'shipping',
      firstName: 'John',
      lastName: 'Doe',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'US',
      isDefault: true
    },
    paymentMethod: {
      type: 'card',
      last4: '4242',
      brand: 'visa'
    },
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10')
  }
];

// Product reviews
export const reviews = [
  {
    id: '1',
    productId: '1',
    userId: '1',
    userName: 'John Doe',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
    rating: 5,
    title: 'Excellent sound quality!',
    comment: 'These headphones exceeded my expectations. The noise cancellation is fantastic and the battery life is as advertised.',
    createdAt: new Date('2024-03-02'),
    verified: true,
    helpful: 12
  },
  {
    id: '2',
    productId: '1',
    userId: '2',
    userName: 'Jane Smith',
    userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
    rating: 4,
    title: 'Great value for money',
    comment: 'Good headphones overall. The build quality is solid and they are very comfortable to wear for long periods.',
    createdAt: new Date('2024-02-28'),
    verified: true,
    helpful: 8
  },
  {
    id: '3',
    productId: '2',
    userId: '1',
    userName: 'John Doe',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
    rating: 4,
    title: 'Soft and comfortable',
    comment: 'Really nice organic cotton t-shirt. The fabric feels great and the fit is perfect.',
    createdAt: new Date('2024-03-12'),
    verified: true,
    helpful: 5
  }
];

// Inventory data
export const inventory = [
  { productId: '1', stock: 45, reserved: 5, available: 40 },
  { productId: '2', stock: 120, reserved: 8, available: 112 },
  { productId: '3', stock: 67, reserved: 3, available: 64 },
  { productId: '4', stock: 32, reserved: 2, available: 30 },
  { productId: '5', stock: 78, reserved: 6, available: 72 },
  { productId: '6', stock: 95, reserved: 4, available: 91 }
];

// Export with alternative names for consistency
export { products as seedProducts };
export { categories as seedCategories };
export { users as seedUsers };
export { orders as seedOrders };