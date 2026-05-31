import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  try {
    if (!supabase) return NextResponse.json({ error: 'Supabase env missing' }, { status: 400 })
    const body = await req.json()
    const status = body.payment_method === 'Cash on Delivery' ? 'processing' : 'pending_payment_verification'
    const { data, error } = await supabase
      .from('orders')
      .insert({ ...body, status })
      .select()
      .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 400 })
    return NextResponse.json({ order: data })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 })
  }
}

export async function GET(req: Request) {
  if (!supabase) return NextResponse.json({ orders: [] })
  const url = new URL(req.url)
  const pin = url.searchParams.get('pin')
  if (pin !== process.env.ADMIN_PIN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ orders: data })
}

export async function PATCH(req: Request) {
  try {
    if (!supabase) return NextResponse.json({ error: 'Supabase env missing' }, { status: 400 })
    const body = await req.json()
    if (body.pin !== process.env.ADMIN_PIN) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const { data, error } = await supabase
      .from('orders')
      .update({ status: body.status })
      .eq('id', body.id)
      .select()
      .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 400 })
    return NextResponse.json({ order: data })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 })
  }
}
