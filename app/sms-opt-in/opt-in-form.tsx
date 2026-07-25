'use client'

import { useState } from 'react'

export default function OptInForm() {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone || !consent) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main style={{ minHeight: '100vh', background: '#0a0a0f', color: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: '500px', padding: '48px', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '24px' }}>✅</div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>You&apos;re subscribed!</h1>
          <p style={{ color: '#888', lineHeight: 1.6 }}>
            You&apos;ll receive a confirmation SMS shortly at <strong style={{ color: '#667eea' }}>{phone}</strong>.
            Save our number: <strong>+1 833-366-5801</strong>.
          </p>
          <p style={{ color: '#666', marginTop: '24px', fontSize: '0.9rem' }}>
            Reply STOP to any message to unsubscribe. Reply HELP for assistance.
          </p>
          <a href="/" style={{ display: 'inline-block', marginTop: '32px', color: '#667eea', textDecoration: 'none' }}>
            ← Back to Home
          </a>
        </div>
      </main>
    )
  }

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0f', color: '#e0e0e0' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '120px 24px 80px' }}>
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontSize: '0.85rem', color: '#667eea', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            SMS Consent
          </span>
        </div>

        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '16px', background: 'linear-gradient(135deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Sign up for SMS Updates
        </h1>

        <p style={{ color: '#888', lineHeight: 1.6, marginBottom: '40px' }}>
          Stay connected with Molt Studios. Get project updates, support notifications,
          and important service alerts delivered straight to your phone.
        </p>

        {/* Program Details */}
        <div style={{ background: '#14141f', borderRadius: '12px', padding: '24px', marginBottom: '40px', border: '1px solid #1e1e2e' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>📋 Program Details</h2>
          <ul style={{ color: '#999', lineHeight: 1.8, paddingLeft: '20px', margin: 0, fontSize: '0.9rem' }}>
            <li><strong>Sender:</strong> Molt Studios (+1 833-366-5801)</li>
            <li><strong>Message Frequency:</strong> 1-10 messages per month</li>
            <li><strong>Message Types:</strong> Business communications, customer support, service alerts, AI assistant responses</li>
            <li><strong>Rates:</strong> Standard message and data rates may apply from your mobile carrier</li>
          </ul>
        </div>

        {/* Opt-In Form */}
        <form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#aaa', marginBottom: '8px', fontWeight: 500 }}>
              Full Name (optional)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              style={{
                width: '100%',
                padding: '14px 16px',
                background: '#14141f',
                border: '1px solid #1e1e2e',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#aaa', marginBottom: '8px', fontWeight: 500 }}>
              Mobile Phone Number *
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 123-4567"
              required
              style={{
                width: '100%',
                padding: '14px 16px',
                background: '#14141f',
                border: '1px solid #1e1e2e',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
          </div>

          {/* Consent Checkbox */}
          <label style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            cursor: 'pointer',
            marginBottom: '28px',
            padding: '16px',
            background: '#14141f',
            borderRadius: '8px',
            border: '1px solid #1e1e2e',
          }}>
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
              style={{ marginTop: '3px', width: '18px', height: '18px', accentColor: '#667eea' }}
            />
            <span style={{ fontSize: '0.9rem', color: '#bbb', lineHeight: 1.5 }}>
              <strong style={{ color: '#fff' }}>I consent to receive SMS messages</strong> from Molt Studios
              at the phone number provided above. I understand that standard message and data rates may apply,
              that I will receive 1-10 messages per month, and that I can reply <strong>STOP</strong> to unsubscribe
              or <strong>HELP</strong> for assistance at any time. I have read and agree to the{' '}
              <a href="/privacy" style={{ color: '#667eea' }}>Privacy Policy</a>.
            </span>
          </label>

          <button
            type="submit"
            disabled={!phone || !consent}
            style={{
              width: '100%',
              padding: '16px',
              background: phone && consent
                ? 'linear-gradient(135deg, #667eea, #764ba2)'
                : '#1e1e2e',
              border: 'none',
              borderRadius: '8px',
              color: phone && consent ? '#fff' : '#555',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: phone && consent ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s',
            }}
          >
            Opt In to SMS →
          </button>
        </form>

        {/* Opt-Out Info */}
        <div style={{ background: '#14141f', borderRadius: '12px', padding: '20px', marginBottom: '40px', border: '1px solid #1e1e2e' }}>
          <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>🚫 Opt Out Anytime</h3>
          <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
            Reply <strong style={{ color: '#e0e0e0' }}>STOP</strong> to any SMS to unsubscribe instantly.
            Reply <strong style={{ color: '#e0e0e0' }}>HELP</strong> for support.
            You can also email <a href="mailto:support@moltstudios.app" style={{ color: '#667eea' }}>support@moltstudios.app</a> or call <strong>+1 833-366-5801</strong>.
          </p>
        </div>

        <div style={{ paddingTop: '24px', borderTop: '1px solid #1e1e2e' }}>
          <a href="/" style={{ color: '#667eea', textDecoration: 'none' }}>← Back to Home</a>
          <span style={{ margin: '0 12px', color: '#333' }}>|</span>
          <a href="/privacy" style={{ color: '#667eea', textDecoration: 'none' }}>Privacy Policy</a>
        </div>
      </div>
    </main>
  )
}
