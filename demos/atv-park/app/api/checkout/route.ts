import { NextRequest, NextResponse } from 'next/server'

const SERVICE_PRICES: Record<string, number> = {
  'ATV Rentals': 19900,
  'Guided Tours': 24900,
  'Private Events': 49900,
  'Safety Gear': 4900,
  'Rider Training': 9900,
  'Group Packages': 14900,
}

const SERVICE_LABELS: Record<string, string> = {
  'ATV Rentals': '$199.00/day',
  'Guided Tours': '$249.00/person',
  'Private Events': '$499.00 deposit',
  'Safety Gear': '$49.00/day',
  'Rider Training': '$99.00/session',
  'Group Packages': '$149.00/person',
}

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY
  if (!stripeKey) {
    return NextResponse.json({ error: 'Stripe key not configured' }, { status: 500 })
  }
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://atv-park.vercel.app'

  try {
    const body = await request.json()
    const { date, timeSlot, service, customerName, customerEmail, customerPhone, atvsBooked } = body

    if (!date || !timeSlot || !service || !customerName || !customerEmail) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const unitPrice = SERVICE_PRICES[service]
    if (!unitPrice) {
      return NextResponse.json({ error: 'Invalid service' }, { status: 400 })
    }

    const quantity = Number(atvsBooked) || 1
    const totalPrice = unitPrice * quantity

    // Use fetch directly instead of Stripe SDK for better serverless compatibility
    const sessionRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stripeKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'payment_method_types[0]': 'card',
        'line_items[0][price_data][currency]': 'usd',
        'line_items[0][price_data][product_data][name]': `${service} — ${date} @ ${timeSlot}`,
        'line_items[0][price_data][product_data][description]': `${quantity}x ${service} for ${customerName}. ${SERVICE_LABELS[service]} per unit.`,
        'line_items[0][price_data][unit_amount]': String(unitPrice),
        'line_items[0][quantity]': String(quantity),
        'mode': 'payment',
        'success_url': `${baseUrl}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
        'cancel_url': `${baseUrl}/#services`,
        'metadata[date]': date,
        'metadata[timeSlot]': timeSlot,
        'metadata[service]': service,
        'metadata[customerName]': customerName,
        'metadata[customerEmail]': customerEmail,
        'metadata[customerPhone]': customerPhone || '',
        'metadata[atvsBooked]': String(quantity),
        'metadata[totalPrice]': String(totalPrice),
      }),
    })

    if (!sessionRes.ok) {
      const errText = await sessionRes.text()
      console.error('Stripe error response:', sessionRes.status, errText)
      let errData
      try { errData = JSON.parse(errText) } catch { errData = { error: { message: errText } } }
      return NextResponse.json({ error: errData.error?.message || 'Stripe request failed', details: errData }, { status: 500 })
    }

    const session = await sessionRes.json()
    return NextResponse.json({ url: session.url })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal server error'
    console.error('Checkout error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
