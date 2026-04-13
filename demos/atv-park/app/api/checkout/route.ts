import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

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

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

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

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${service} — ${date} @ ${timeSlot}`,
              description: `${quantity}x ${service} for ${customerName}. ${SERVICE_LABELS[service]} per unit.`,
            },
            unit_amount: unitPrice,
          },
          quantity,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/#services`,
      metadata: {
        date,
        timeSlot,
        service,
        customerName,
        customerEmail,
        customerPhone: customerPhone || '',
        atvsBooked: String(quantity),
        totalPrice: String(totalPrice),
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal server error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
