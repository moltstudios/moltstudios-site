import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Molt Studios',
  description: 'Privacy Policy for Molt Studios, a subsidiary of Reynoso Industries LLC.',
}

export default function PrivacyPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0f', color: '#e0e0e0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 24px 80px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '8px', background: 'linear-gradient(135deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#888', marginBottom: '48px' }}>Last updated: July 25, 2026</p>

        <Section title="1. Introduction">
          <p>Reynoso Industries LLC ("we," "us," or "our"), doing business as Molt Studios, is located at 810 Gibb St, Winston-Salem, NC 27103. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and disclose your information, particularly in relation to our SMS messaging services.</p>
          <p>For any privacy questions, contact us at <a href="mailto:support@moltstudios.app" style={{ color: '#667eea' }}>support@moltstudios.app</a> or call <strong>+1 833-366-5801</strong>.</p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We collect the following types of information:</p>
          <ul>
            <li><strong>Phone Number:</strong> Your mobile phone number when you opt in to receive SMS messages from us.</li>
            <li><strong>Name:</strong> Your name if provided during opt-in or account creation.</li>
            <li><strong>Message Content:</strong> The content of SMS messages you send to us, including any keywords (STOP, HELP, etc.) and your responses.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our services, including message delivery status and timestamps.</li>
            <li><strong>Technical Data:</strong> IP address, device type, and carrier information associated with your phone number.</li>
          </ul>
        </Section>

        <Section title="3. How We Use SMS Messaging">
          <p>We use SMS messaging (sent from +1 833-366-5801 and +1 336-910-1313) for the following purposes:</p>
          <ul>
            <li><strong>Business Communications:</strong> Appointment reminders, service updates, and project notifications.</li>
            <li><strong>Customer Support:</strong> Responding to your inquiries and providing technical assistance.</li>
            <li><strong>Service Alerts:</strong> Notifications about your account, project status, or service changes.</li>
            <li><strong>AI Assistant Responses:</strong> Automated responses from our SMS-based AI assistant service.</li>
          </ul>
          <p><strong>Message Frequency:</strong> Message frequency varies depending on the service. Typical frequency is 1-10 messages per month. You will only receive messages you have opted in to receive.</p>
        </Section>

        <Section title="4. Data Sharing with Carriers">
          <p><strong>This section is provided in accordance with A2P 10DLC carrier requirements.</strong></p>
          <p>To deliver SMS messages, we share certain information with mobile carriers (including but not limited to T-Mobile, AT&T, Verizon, and US Cellular) through our messaging service provider, Twilio Inc. This information includes:</p>
          <ul>
            <li>Your phone number</li>
            <li>Message content (for spam and abuse monitoring)</li>
            <li>Message delivery metadata (timestamps, delivery status)</li>
            <li>Sender identification (our business name and registered campaign)</li>
          </ul>
          <p>Carriers use this information for message delivery, spam filtering, fraud prevention, and compliance monitoring as required by CTIA guidelines and FCC regulations.</p>
        </Section>

        <Section title="5. SMS Opt-In and Consent">
          <p>You opt in to receive SMS messages from Molt Studios by:</p>
          <ul>
            <li>Providing your phone number through our SMS opt-in form at <a href="https://moltstudios.app/sms-opt-in" style={{ color: '#667eea' }}>moltstudios.app/sms-opt-in</a></li>
            <li>Texting a keyword (such as START or YES) to one of our numbers</li>
            <li>Providing your phone number during project onboarding with explicit consent</li>
          </ul>
          <p>Consent is not required as a condition of purchasing any goods or services.</p>
        </Section>

        <Section title="6. Opt-Out Instructions">
          <p>You can opt out of receiving SMS messages at any time by:</p>
          <ul>
            <li><strong>Replying STOP</strong> to any message you receive from us. You will receive a confirmation message.</li>
            <li><strong>Replying HELP</strong> for assistance with opt-out or message frequency information.</li>
            <li><strong>Contacting us</strong> at support@moltstudios.app or +1 833-366-5801.</li>
          </ul>
          <p>After opting out, you will receive one final confirmation message. No further messages will be sent unless you opt back in.</p>
        </Section>

        <Section title="7. Data Retention">
          <p>We retain SMS message data for up to 24 months for quality assurance, dispute resolution, and compliance with carrier requirements. After this period, message content is deleted. Your phone number and opt-in status are retained as long as you are an active subscriber and for 90 days after you opt out.</p>
        </Section>

        <Section title="8. Third-Party Service Providers">
          <p>We use the following third-party services to deliver SMS messages and may share your data with them:</p>
          <ul>
            <li><strong>Twilio Inc.</strong> — SMS message delivery, phone number management, and A2P 10DLC campaign registration.</li>
            <li><strong>The Campaign Registry (TCR)</strong> — A2P 10DLC brand and campaign registration management.</li>
            <li><strong>Mobile Carriers</strong> — T-Mobile, AT&T, Verizon, US Cellular, and other US mobile carriers for message delivery.</li>
          </ul>
          <p>We do not sell, rent, or share your personal data with any other third parties for marketing purposes.</p>
        </Section>

        <Section title="9. Your Rights">
          <p>Depending on your location, you may have the following rights:</p>
          <ul>
            <li>Access: Request a copy of your personal data</li>
            <li>Rectification: Request correction of inaccurate data</li>
            <li>Erasure: Request deletion of your data</li>
            <li>Opt-out: Unsubscribe from SMS communications at any time</li>
            <li>Withdraw consent: Withdraw previously given consent for data processing</li>
          </ul>
          <p>To exercise these rights, contact support@moltstudios.app.</p>
        </Section>

        <Section title="10. Security">
          <p>We implement appropriate technical and organizational measures to protect your personal data, including encryption in transit (TLS), access controls, and regular security reviews. However, no method of transmission over the internet is 100% secure.</p>
        </Section>

        <Section title="11. Children's Privacy">
          <p>Our SMS services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.</p>
        </Section>

        <Section title="12. Changes to This Policy">
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. For significant changes, we will provide notice through SMS or email.</p>
        </Section>

        <Section title="13. Contact Us">
          <p>If you have questions about this Privacy Policy or our data practices, please contact:</p>
          <p>
            <strong>Reynoso Industries LLC</strong> (d/b/a Molt Studios)<br />
            810 Gibb St<br />
            Winston-Salem, NC 27103<br />
            Email: <a href="mailto:support@moltstudios.app" style={{ color: '#667eea' }}>support@moltstudios.app</a><br />
            Phone: <strong>+1 833-366-5801</strong>
          </p>
        </Section>

        <div style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid #222' }}>
          <a href="/" style={{ color: '#667eea', textDecoration: 'none' }}>← Back to Molt Studios</a>
        </div>
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '40px' }}>
      <h2 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>{title}</h2>
      <div style={{ lineHeight: 1.7, color: '#b0b0b0' }}>{children}</div>
    </section>
  )
}
