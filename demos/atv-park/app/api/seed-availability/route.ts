import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

const TIME_SLOTS = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "1:00 PM - 3:00 PM",
  "3:00 PM - 5:00 PM",
  "5:00 PM - 7:00 PM",
  "7:00 PM - 9:00 PM",
]

export async function POST() {
  const rows = []

  for (let i = 0; i < 90; i++) {
    const d = new Date()
    d.setDate(d.getDate() + i)
    const date = d.toISOString().split('T')[0]

    for (const timeSlot of TIME_SLOTS) {
      rows.push({ date, time_slot: timeSlot, total_atvs: 15, booked_atvs: 0 })
    }
  }

  const { error } = await supabaseAdmin
    .from('availability')
    .upsert(rows, { onConflict: 'date,time_slot', ignoreDuplicates: true })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, seeded: rows.length })
}
