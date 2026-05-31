import { Product } from './types'

export const demoProducts: Product[] = [
  {
    id: 'p1',
    slug: 'premium-cotton-tshirt',
    name: 'Premium Cotton T-Shirt',
    price: 650,
    compare_at_price: 850,
    image_url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=1200&auto=format&fit=crop'
    ],
    description: 'Soft cotton everyday T-shirt.',
    long_description: 'Premium breathable cotton fabric দিয়ে তৈরি comfortable everyday T-shirt. Regular fit, smooth stitching এবং daily use-এর জন্য perfect.',
    category: 'Clothing',
    brand: 'ShopBD',
    sku: 'TSHIRT-001',
    stock: 25,
    features: ['100% soft cotton feel', 'Comfortable regular fit', 'Machine washable', 'Daily wear friendly'],
    specs: { Material: 'Cotton', Fit: 'Regular', Origin: 'Bangladesh', Warranty: '7 days replacement' },
    is_active: true
  },
  {
    id: 'p2',
    slug: 'classic-sneakers',
    name: 'Classic Sneakers',
    price: 1850,
    compare_at_price: 2200,
    image_url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&auto=format&fit=crop'
    ],
    description: 'Comfortable casual sneakers.',
    long_description: 'Lightweight casual sneakers, walking এবং everyday outfit-এর সাথে use করার জন্য suitable. Grip sole এবং padded inner comfort রয়েছে.',
    category: 'Footwear',
    brand: 'ShopBD',
    sku: 'SHOE-002',
    stock: 12,
    features: ['Lightweight design', 'Comfortable inner padding', 'Durable outsole', 'Casual streetwear look'],
    specs: { Upper: 'Synthetic', Sole: 'Rubber', Closure: 'Lace-up', Warranty: '7 days replacement' },
    is_active: true
  },
  {
    id: 'p3',
    slug: 'smart-backpack',
    name: 'Smart Backpack',
    price: 1250,
    compare_at_price: 1500,
    image_url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=1200&auto=format&fit=crop'
    ],
    description: 'Durable backpack for daily use.',
    long_description: 'Office, school, travel এবং daily use-এর জন্য durable backpack. Multiple compartments, laptop space এবং comfortable shoulder straps রয়েছে.',
    category: 'Bags',
    brand: 'ShopBD',
    sku: 'BAG-003',
    stock: 18,
    features: ['Laptop compartment', 'Multiple pockets', 'Comfortable straps', 'Travel friendly'],
    specs: { Capacity: '22L', Material: 'Polyester', Laptop: 'Up to 15 inch', Warranty: '7 days replacement' },
    is_active: true
  }
]

export function findDemoProduct(slugOrId: string) {
  return demoProducts.find(product => product.slug === slugOrId || product.id === slugOrId)
}
