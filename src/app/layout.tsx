import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/components/AuthProvider'
import CartProvider from '@/components/CartProvider'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Terramind Store - Premium Ecommerce Experience',
  description: 'Discover premium products with our modern ecommerce platform. Shop with confidence, secure checkout, and fast delivery.',
  keywords: 'ecommerce, shopping, products, online store, premium',
  authors: [{ name: 'Terramind' }],
  creator: 'Terramind',
  publisher: 'Terramind',
  openGraph: {
    title: 'Terramind Store - Premium Ecommerce Experience',
    description: 'Discover premium products with our modern ecommerce platform.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Terramind Store',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terramind Store - Premium Ecommerce Experience',
    description: 'Discover premium products with our modern ecommerce platform.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <div className="min-h-screen bg-background">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <footer className="border-t bg-muted/50 py-8">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Terramind Store</h3>
                      <p className="text-muted-foreground text-sm">
                        Premium ecommerce experience with quality products and exceptional service.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-4">Shop</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="/products" className="hover:text-foreground transition-colors">All Products</a></li>
                        <li><a href="/products?category=electronics" className="hover:text-foreground transition-colors">Electronics</a></li>
                        <li><a href="/products?category=clothing" className="hover:text-foreground transition-colors">Clothing</a></li>
                        <li><a href="/products?category=home" className="hover:text-foreground transition-colors">Home & Garden</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-4">Customer Service</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="/contact" className="hover:text-foreground transition-colors">Contact Us</a></li>
                        <li><a href="/shipping" className="hover:text-foreground transition-colors">Shipping Info</a></li>
                        <li><a href="/returns" className="hover:text-foreground transition-colors">Returns</a></li>
                        <li><a href="/faq" className="hover:text-foreground transition-colors">FAQ</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-4">Account</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="/auth/signin" className="hover:text-foreground transition-colors">Sign In</a></li>
                        <li><a href="/orders" className="hover:text-foreground transition-colors">Order History</a></li>
                        <li><a href="/profile" className="hover:text-foreground transition-colors">Profile</a></li>
                        <li><a href="/wishlist" className="hover:text-foreground transition-colors">Wishlist</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; 2024 Terramind Store. All rights reserved. Built with Terramind.</p>
                  </div>
                </div>
              </footer>
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}