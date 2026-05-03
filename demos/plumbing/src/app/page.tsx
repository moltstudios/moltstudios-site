import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Emergency Sticky Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
          <span className="font-bold">🚨 Plumbing Emergency?</span>
          <a href="tel:16155550789" className="underline font-bold hover:text-yellow-300 transition">
            Call Now: (615) 555-0789 — We Answer 24/7
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-cyan-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CF</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">ClearFlow Plumbing</span>
                <span className="hidden sm:inline text-xs text-gray-500 ml-2">License #TN-PLB-8472</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#services" className="text-gray-700 hover:text-cyan-700 font-medium transition">Services</Link>
              <Link href="#gallery" className="text-gray-700 hover:text-cyan-700 font-medium transition">Recent Work</Link>
              <Link href="#reviews" className="text-gray-700 hover:text-cyan-700 font-medium transition">Reviews</Link>
              <Link href="#contact" className="text-gray-700 hover:text-cyan-700 font-medium transition">Contact</Link>
            </nav>
            <div className="flex items-center gap-3">
              <a href="tel:16155550789" className="hidden md:block text-cyan-700 font-bold text-lg">(615) 555-0789</a>
              <Link href="#contact" className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition text-sm">
                Emergency Service
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-cyan-800 via-cyan-700 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1920&q=80" alt="Plumber at work" fill className="object-cover opacity-15" priority />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 animate-pulse">
                ⚡ Same-Day Service Guaranteed
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                When Water Flows Wrong, We Make It Right
              </h1>
              <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
                Nashville's most trusted plumbers since 2010. Clogged drains, leaking pipes, broken water heaters — we fix it all, 24/7. Licensed, insured, and background-checked.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:16155550789" className="flex items-center justify-center gap-2 bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-600 transition shadow-xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call Now: (615) 555-0789
                </a>
                <Link href="#contact" className="flex items-center justify-center gap-2 bg-white text-cyan-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl">
                  Get Free Estimate
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                {["⭐ 4.9 Google (480+ Reviews)", "✓ Licensed & Insured", "✓ Background-Checked", "✓ Same-Day Service"].map((badge, i) => (
                  <span key={i} className="bg-white/10 px-3 py-1.5 rounded-lg">{badge}</span>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-cyan-600/50 rounded-2xl p-5 shadow-2xl backdrop-blur">
                <Image src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80" alt="Professional plumber" width={550} height={400} className="rounded-xl" />
                <div className="mt-4 flex items-center justify-between">
                  <div><p className="text-cyan-100 text-sm">Trusted by</p><p className="font-bold text-lg">2,400+ Nashville Homes</p></div>
                  <div className="bg-red-500 rounded-xl px-4 py-2 font-bold">24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none"><path d="M0 80L48 70C96 60 192 40 288 30C384 20 480 20 576 25C672 30 768 40 864 45C960 50 1056 50 1152 45C1248 40 1344 30 1392 25L1440 20V80H0Z" fill="white"/></svg>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Plumbing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From quick fixes to full installations — we handle it all</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Drain Cleaning", desc: "Stubborn clogs cleared fast with professional rooter equipment", icon: "🚿", color: "bg-cyan-100" },
              { title: "Leak Repair", desc: "Hidden leak detection and lasting repairs to stop water damage", icon: "💧", color: "bg-blue-100" },
              { title: "Water Heater", desc: "Tank and tankless water heater installation, repair & replacement", icon: "🔥", color: "bg-red-100" },
              { title: "Sewer Line", desc: "Camera inspection, trenchless repair, and sewer line replacement", icon: "🔧", color: "bg-green-100" },
              { title: "Bathroom Remodel", desc: "Full bathroom plumbing for renovations and new construction", icon: "🛁", color: "bg-purple-100" },
              { title: "24/7 Emergency", desc: "Burst pipes, flooding, gas leaks — we respond in under 60 minutes", icon: "🚨", color: "bg-red-100" },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-7 shadow-lg hover:shadow-xl transition">
                <div className={`w-14 h-14 ${s.color} rounded-lg flex items-center justify-center text-2xl mb-5`}>{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Jobs</h2>
            <p className="text-xl text-gray-600">Real results from our Nashville plumbing projects</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Sewer Camera Inspection", area: "East Nashville", img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&q=80" },
              { title: "Water Heater Replacement", area: "Franklin, TN", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80" },
              { title: "Emergency Pipe Repair", area: "Brentwood, TN", img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&q=80" },
            ].map((p, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-lg">
                <Image src={p.img} alt={p.title} width={400} height={300} className="w-full h-64 object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
                  <div className="text-white"><h3 className="font-bold text-lg">{p.title}</h3><p className="text-cyan-200 text-sm">{p.area}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-cyan-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Why Nashville Trusts ClearFlow</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "60 min", label: "Emergency Response", sub: "Average arrival time" },
              { stat: "2,400+", label: "Jobs Completed", sub: "Since 2010" },
              { stat: "4.9★", label: "Google Rating", sub: "480+ reviews" },
              { stat: "$0", label: "Diagnostic Fee", sub: "With any repair" },
            ].map((item, i) => (
              <div key={i} className="text-center bg-white/10 rounded-xl p-6 backdrop-blur">
                <div className="text-4xl font-bold text-yellow-400 mb-2">{item.stat}</div>
                <div className="font-semibold text-lg mb-1">{item.label}</div>
                <div className="text-cyan-200 text-sm">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">480+ five-star reviews from Nashville homeowners</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "David R.", loc: "Nashville, TN", text: "Pipe burst at 2am. ClearFlow was here in 40 minutes and had it fixed before sunrise. Absolute lifesavers!" },
              { name: "Amanda T.", loc: "Franklin, TN", text: "They replaced our ancient water heater same-day. Fair price, clean work, and they even cleaned up after. Highly recommend." },
              { name: "Marcus W.", loc: "Brentwood, TN", text: "Used their camera inspection to find a hidden sewer leak. Saved us thousands compared to another quote. Honest and professional." },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}</div>
                <p className="text-gray-700 mb-5 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cyan-700 rounded-full flex items-center justify-center text-white font-bold">{t.name[0]}</div>
                  <div><p className="font-bold text-gray-900">{t.name}</p><p className="text-gray-500 text-sm">{t.loc}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Booking */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get Help Now</h2>
              <p className="text-lg text-gray-600 mb-8">Whether it's an emergency or a scheduled repair, we're ready. Call us 24/7 or fill out the form for a free estimate.</p>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 text-cyan-700 text-xl">📞</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Call Us 24/7</h3>
                    <a href="tel:16155550789" className="text-cyan-700 text-2xl font-bold">(615) 555-0789</a>
                    <p className="text-gray-500 text-sm">Average response: under 2 minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 text-cyan-700 text-xl">📍</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Service Area</h3>
                    <p className="text-gray-700">Nashville, Franklin, Brentwood, Murfreesboro & surrounding areas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 text-cyan-700 text-xl">🛡️</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Our Guarantee</h3>
                    <p className="text-gray-700">No fix, no fee. 100% satisfaction guaranteed on every job.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">Credentials</h3>
                <div className="flex flex-wrap gap-3">
                  {["Licensed & Insured", "TN License #PLB-8472", "BBB A+ Rated", "Background-Checked"].map((b, i) => (
                    <span key={i} className="bg-white rounded-lg px-3 py-1.5 text-sm font-semibold text-gray-700 shadow-sm">{b}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Service</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Name *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
                  <input type="tel" placeholder="Phone *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
                </div>
                <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500">
                  <option value="">Service needed *</option>
                  <option>Drain Cleaning</option><option>Leak Repair</option><option>Water Heater</option>
                  <option>Sewer Line</option><option>Bathroom Remodel</option><option>Emergency — URGENT</option>
                </select>
                <textarea rows={3} placeholder="Describe the issue..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
                <button type="submit" className="w-full bg-cyan-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-cyan-800 transition shadow-lg">
                  Get Free Estimate
                </button>
                <p className="text-gray-500 text-xs text-center">We typically respond within 15 minutes during business hours.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyan-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center"><span className="text-cyan-900 font-bold">CF</span></div>
                <span className="text-lg font-bold">ClearFlow Plumbing</span>
              </div>
              <p className="text-cyan-200 mb-4 leading-relaxed">Nashville's trusted plumber since 2010. Licensed, insured, and always here when you need us — day or night.</p>
              <p className="text-cyan-300 text-sm">TN License #PLB-8472</p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Services</h3>
              <ul className="space-y-2 text-cyan-200">{["Drain Cleaning","Leak Repair","Water Heater","Sewer Line","Emergency 24/7"].map((s,i) => <li key={i}><a href="#services" className="hover:text-white transition">{s}</a></li>)}</ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Contact</h3>
              <ul className="space-y-2 text-cyan-200">
                <li><a href="tel:16155550789" className="hover:text-white transition font-bold">(615) 555-0789</a></li>
                <li>info@clearflowplumbing.com</li>
                <li>Nashville, TN & surrounding areas</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cyan-800 mt-10 pt-6 text-center text-cyan-400 text-sm">
            © 2026 ClearFlow Plumbing. All rights reserved. | Licensed & Insured in TN
          </div>
        </div>
      </footer>
    </div>
  );
}
