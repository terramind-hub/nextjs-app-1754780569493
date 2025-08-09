// Product types for ecommerce application

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  categoryId: string;
  brand: string;
  sku: string;
  stock: number;
  rating: number;
  reviewCount: number;
  tags: string[];
  features: string[];
  specifications: Record<string, string>;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  colors?: string[];
  sizes?: string[];
  isActive: boolean;
  isFeatured: boolean;
  isOnSale: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  parentId?: string;
  level: number;
  isActive: boolean;
  productCount: number;
  createdAt: string;
  updatedAt: string;
};

export type CartItem = {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
  price: number;
  addedAt: string;
};

export type ProductFilter = {
  categories: string[];
  brands: string[];
  priceRange: {
    min: number;
    max: number;
  };
  rating: number;
  inStock: boolean;
  onSale: boolean;
  colors: string[];
  sizes: string[];
};

export type ProductSort = 
  | 'name-asc'
  | 'name-desc'
  | 'price-asc'
  | 'price-desc'
  | 'rating-desc'
  | 'newest'
  | 'oldest'
  | 'popularity';

export type ProductSearchParams = {
  query?: string;
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  inStock?: boolean;
  onSale?: boolean;
  color?: string;
  size?: string;
  sort?: ProductSort;
  page?: number;
  limit?: number;
};

export type ProductReview = {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  images?: string[];
  verified: boolean;
  helpful: number;
  createdAt: string;
  updatedAt: string;
};

export type Inventory = {
  productId: string;
  sku: string;
  quantity: number;
  reserved: number;
  available: number;
  reorderLevel: number;
  reorderQuantity: number;
  supplier: string;
  cost: number;
  lastRestocked: string;
  location: string;
};