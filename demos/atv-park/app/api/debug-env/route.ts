import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    hasStripeKey: !!process.env.STRIPE_SECRET_KEY,
    stripeKeyPrefix: process.env.STRIPE_SECRET_KEY?.substring(0, 12) || 'MISSING',
    hasBaseUrl: !!process.env.NEXT_PUBLIC_BASE_URL,
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'MISSING',
    nodeEnv: process.env.NODE_ENV,
  })
}
