import type { Metadata } from 'next'
import OptInForm from './opt-in-form'

export const metadata: Metadata = {
  title: 'SMS Opt-In — Molt Studios',
  description: 'Opt in to receive SMS messages from Molt Studios.',
}

export default function SmsOptInPage() {
  return <OptInForm />
}
