import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

const TIME_SLOTS = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "1:00 PM - 3:00 PM",
  "3:00 PM - 5:00 PM",
  "5:00 PM - 7:00 PM",
  "7:00 PM - 9:00 PM",
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const date = searchParams.get('date')

  if (!date) {
    return NextResponse.json({ error: 'Date parameter is required' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('availability')
    .select('time_slot, total_atvs, booked_atvs')
    .eq('date', date)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const availabilityMap: Record<string, number> = {}
  for (const slot of TIME_SLOTS) {
    availabilityMap[slot] = 15
  }

  for (const row of data ?? []) {
    availabilityMap[row.time_slot] = row.total_atvs - row.booked_atvs
  }

  return NextResponse.json({ date, availability: availabilityMap })
}
