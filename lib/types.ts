export type Product = {
  id: string
  slug: string
  name: string
  price: number
  compare_at_price?: number | null
  image_url: string
  images?: string[] | null
  description: string
  long_description?: string | null
  category?: string | null
  brand?: string | null
  sku?: string | null
  stock: number
  features?: string[] | null
  specs?: Record<string, string> | null
  is_active?: boolean
  created_at?: string
}

export type CartItem = Product & { quantity: number }

export type OrderStatus =
  | 'pending_payment_verification'
  | 'payment_approved'
  | 'payment_rejected'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'

export type Order = {
  id: string
  customer_name: string
  phone: string
  address: string
  payment_method: string
  sender_number?: string
  trx_id?: string
  paid_amount?: number
  note?: string
  status: OrderStatus
  items: CartItem[]
  total: number
  created_at: string
}
