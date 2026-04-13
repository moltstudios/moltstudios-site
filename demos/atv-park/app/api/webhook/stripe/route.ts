import { NextRequest, NextResponse } from 'next/server'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!
const STRIPE_KEY = process.env.STRIPE_SECRET_KEY!

async function supabaseInsert(table: string, data: Record<string, unknown>) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_SERVICE_KEY,
      'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
    },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const err = await res.json()
    console.error(`Supabase insert error (${table}):`, err)
    throw new Error(err.message || 'Insert failed')
  }
  return res.json()
}

async function supabaseQuery(table: string, params: Record<string, string>) {
  const qs = new URLSearchParams(params).toString()
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${qs}`, {
    headers: {
      'apikey': SUPABASE_SERVICE_KEY,
      'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
    },
  })
  if (!res.ok) {
    const err = await res.json()
    console.error(`Supabase query error (${table}):`, err)
    throw new Error(err.message || 'Query failed')
  }
  return res.json()
}

async function supabaseUpdate(table: string, data: Record<string, unknown>, params: Record<string, string>) {
  const qs = new URLSearchParams(params).toString()
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${qs}`, {
    method: 'PATCH',
    headers: {
      'apikey': SUPABASE_SERVICE_KEY,
      'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
    },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const err = await res.json()
    console.error(`Supabase update error (${table}):`, err)
    throw new Error(err.message || 'Update failed')
  }
  return res.json()
}

export async function POST(request: NextRequest) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')

  // For now, parse the webhook without signature verification
  // TODO: Set up proper webhook secret in Stripe Dashboard
  let event: { type: string; data: { object: { metadata: Record<string, string>; id: string } } }

  try {
    event = JSON.parse(body)
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const { date, timeSlot, service, customerName, customerEmail, customerPhone, atvsBooked, totalPrice } = session.metadata

    try {
      // Create booking
      await supabaseInsert('bookings', {
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

      // Update availability
      const existing = await supabaseQuery('availability', { date: `eq.${date}`, time_slot: `eq.${timeSlot}` })

      if (existing.length > 0) {
        const currentBooked = existing[0].booked_atvs || 0
        await supabaseUpdate('availability',
          { booked_atvs: currentBooked + Number(atvsBooked), updated_at: new Date().toISOString() },
          { date: `eq.${date}`, time_slot: `eq.${timeSlot}` }
        )
      } else {
        await supabaseInsert('availability', {
          date,
          time_slot: timeSlot,
          total_atvs: 15,
          booked_atvs: Number(atvsBooked),
        })
      }

      console.log(`Booking confirmed: ${customerName} - ${service} on ${date} @ ${timeSlot}`)
    } catch (err) {
      console.error('Booking creation error:', err)
      return NextResponse.json({ error: 'Failed to process booking' }, { status: 500 })
    }
  }

  return NextResponse.json({ received: true })
}
