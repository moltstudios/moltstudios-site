import "./globals.css";

export default function Home() {
  return (
    <div className="page-bg relative overflow-hidden">
      {/* Background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Navigation */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-semibold text-lg tracking-tight">OpenDrones</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#specs" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Specs</a>
            <a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Features</a>
            <a href="#contact" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-28 pb-20 px-6">
        <div className="max-w-xl mx-auto">
          {/* Product Card */}
          <div className="glass-card p-8 md:p-10 animate-fade-in-up animate-delay-1">
            {/* Coming Soon Badge */}
            <div className="flex justify-center mb-6">
              <span className="coming-soon-badge">Coming Soon</span>
            </div>

            {/* Product Image / Illustration */}
            <div className="product-image-container mb-8 animate-fade-in-up animate-delay-2">
              <BatteryIllustration />
            </div>

            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-2 animate-fade-in-up animate-delay-2">
              FPV Battery Pack
            </h1>

            {/* Tagline */}
            <p className="text-center text-gray-500 text-base md:text-lg mb-8 animate-fade-in-up animate-delay-3">
              One pack. Two connectors. Zero compromises.
            </p>

            {/* Dual Connector Callout */}
            <div className="flex justify-center gap-3 mb-8 animate-fade-in-up animate-delay-3">
              <div className="connector-badge flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-indigo-50 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="4" />
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="6" y2="12" />
                    <line x1="18" y1="12" x2="22" y2="12" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-indigo-900">XT30</div>
                  <div className="text-[10px] text-gray-400">High-power</div>
                </div>
              </div>
              <div className="connector-badge flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-indigo-50 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="12" cy="12" r="7" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-indigo-900">BT2.0</div>
                  <div className="text-[10px] text-gray-400">Micro whoop</div>
                </div>
              </div>
            </div>

            {/* Specs */}
            <div id="specs" className="mb-8 animate-fade-in-up animate-delay-4">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Specifications</h2>
              <div className="bg-white/50 rounded-2xl p-5 backdrop-blur-sm">
                <SpecRow label="Cell Type" value="18650 Li-ion" />
                <SpecRow label="Capacity" value="3500 mAh" />
                <SpecRow label="Configuration" value="1S1P" />
                <SpecRow label="Connectors" value="XT30 + BT2.0" />
                <SpecRow label="Weight" value="~48g" />
                <SpecRow label="Discharge" value="20A continuous" />
              </div>
            </div>

            {/* CTA */}
            <div className="text-center animate-fade-in-up animate-delay-5">
              <button className="cta-button w-full">
                Notify Me at Launch
              </button>
              <p className="text-xs text-gray-400 mt-3">No spam. Just one email when it&apos;s ready.</p>
            </div>
          </div>

          {/* Features Section */}
          <section id="features" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
            <FeatureCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              }
              title="Dual Connectors"
              description={'XT30 for 5" builds and BT2.0 for micro whoops. One pack does both.'}
            />
            <FeatureCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              }
              title="18650 Cells"
              description="Premium Samsung/Molicel cells. Reliable, safe, and long-lasting."
            />
            <FeatureCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              }
              title="Light Weight"
              description="Under 50 grams. Every gram counts when you're ripping freestyle."
            />
          </section>

          {/* Contact / Footer */}
          <section id="contact" className="mt-16 text-center">
            <div className="glass-card p-8">
              <h2 className="text-xl font-bold mb-2">Interested?</h2>
              <p className="text-gray-500 text-sm mb-6">
                We&apos;re looking for beta testers. Get early access and help shape the final product.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-400 transition-all"
                />
                <button className="cta-button !py-3 !px-6 whitespace-nowrap text-sm">
                  Join Waitlist
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-xs text-gray-400">
        <p>© 2026 OpenDrones. Built with precision.</p>
      </footer>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="spec-row">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm font-medium text-gray-900">{value}</span>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="glass-card p-6 text-center">
      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-indigo-50 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-semibold text-sm mb-2">{title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}

function BatteryIllustration() {
  return (
    <svg
      className="battery-illustration"
      viewBox="0 0 200 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Battery body */}
      <rect x="40" y="30" width="120" height="90" rx="12" fill="#F3F0FF" stroke="#4F46E5" strokeWidth="1.5" />

      {/* Battery top terminal */}
      <rect x="75" y="22" width="50" height="12" rx="4" fill="#E0DAFB" stroke="#4F46E5" strokeWidth="1.5" />

      {/* Cell representation */}
      <rect x="55" y="48" width="36" height="56" rx="6" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1" />
      <rect x="109" y="48" width="36" height="56" rx="6" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1" />

      {/* Plus/Minus labels */}
      <text x="73" y="82" textAnchor="middle" fill="#6366F1" fontSize="16" fontWeight="600">+</text>
      <text x="127" y="82" textAnchor="middle" fill="#6366F1" fontSize="16" fontWeight="600">−</text>

      {/* Connector wires going down */}
      <line x1="73" y1="120" x2="73" y2="135" stroke="#4F46E5" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="127" y1="120" x2="127" y2="135" stroke="#4F46E5" strokeWidth="1.5" strokeDasharray="3 2" />

      {/* XT30 connector label */}
      <rect x="50" y="135" width="46" height="14" rx="4" fill="#4F46E5" />
      <text x="73" y="145.5" textAnchor="middle" fill="white" fontSize="8" fontWeight="600">XT30</text>

      {/* BT2.0 connector label */}
      <rect x="104" y="135" width="46" height="14" rx="4" fill="#6366F1" />
      <text x="127" y="145.5" textAnchor="middle" fill="white" fontSize="8" fontWeight="600">BT2.0</text>
    </svg>
  );
}
