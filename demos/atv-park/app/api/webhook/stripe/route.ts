import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig!, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Webhook signature verification failed'
    return NextResponse.json({ error: message }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const { date, timeSlot, service, customerName, customerEmail, customerPhone, atvsBooked, totalPrice } = session.metadata!

    const { error: bookingError } = await supabaseAdmin.from('bookings').insert({
      date,
      time_slot: timeSlot,
      service,
      customer_name: customerName,
      customer_email: customerEmail,
      customer_phone: customerPhone || null,
      atvs_booked: Number(atvsBooked),
      total_price: Number(totalPrice) / 100,
      stripe_session_id: session.id,
      status: 'confirmed',
    })

    if (bookingError) {
      console.error('Failed to create booking:', bookingError)
      return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 })
    }

    const { data: availData, error: availFetchError } = await supabaseAdmin
      .from('availability')
      .select('booked_atvs')
      .eq('date', date)
      .eq('time_slot', timeSlot)
      .single()

    if (availFetchError || !availData) {
      const { error: upsertError } = await supabaseAdmin
        .from('availability')
        .upsert(
          { date, time_slot: timeSlot, total_atvs: 15, booked_atvs: Number(atvsBooked) },
          { onConflict: 'date,time_slot' }
        )
      if (upsertError) {
        console.error('Failed to create availability:', upsertError)
      }
    } else {
      const { error: updateError } = await supabaseAdmin
        .from('availability')
        .update({ booked_atvs: availData.booked_atvs + Number(atvsBooked), updated_at: new Date().toISOString() })
        .eq('date', date)
        .eq('time_slot', timeSlot)
      if (updateError) {
        console.error('Failed to update availability:', updateError)
      }
    }
  }

  return NextResponse.json({ received: true })
}
