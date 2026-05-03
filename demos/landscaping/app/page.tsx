import Link from 'next/link'

function PhoneIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
}
function StarIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
}
function CheckIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
}

export default function Home() {
  const services = [
    { title: 'Lawn Care & Maintenance', desc: 'Regular mowing, edging, fertilization, and weed control to keep your lawn lush and healthy year-round.', emoji: '🌿', price: 'From $150/mo' },
    { title: 'Hardscaping', desc: 'Patios, retaining walls, outdoor kitchens, fire pits, and walkways built to last with premium materials.', emoji: '🧱', price: 'From $5,000' },
    { title: 'Irrigation Systems', desc: 'Smart sprinkler design, installation, and repair. Efficient watering that saves water and money.', emoji: '💧', price: 'From $2,500' },
    { title: 'Tree & Shrub Service', desc: 'Pruning, removal, planting, and health assessments. Keep your trees beautiful and your property safe.', emoji: '🌳', price: 'From $300' },
    { title: 'Landscape Design', desc: 'Custom landscape architecture tailored to your property, lifestyle, and budget. 3D renderings included.', emoji: '📐', price: 'From $1,500' },
    { title: 'Outdoor Lighting', desc: 'Path lighting, accent lighting, and security lighting that transforms your property after dark.', emoji: '💡', price: 'From $1,200' },
  ]

  const projects = [
    { title: 'Backyard Patio & Fire Pit', category: 'Hardscaping', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop' },
    { title: 'Front Yard Complete Redesign', category: 'Landscape Design', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop' },
    { title: 'Outdoor Kitchen & Living', category: 'Hardscaping', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop' },
    { title: 'Japanese Garden Installation', category: 'Landscape Design', img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop' },
    { title: 'Pool Surround Landscaping', category: 'Hardscaping', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop' },
    { title: 'Commercial Property Refresh', category: 'Maintenance', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop' },
  ]

  const seasons = [
    { name: 'Spring', emoji: '🌸', tasks: 'Clean-up, mulching, planting, fertilization, irrigation startup' },
    { name: 'Summer', emoji: '☀️', tasks: 'Mowing, watering, pest control, pruning, hardscape projects' },
    { name: 'Fall', emoji: '🍂', tasks: 'Leaf removal, aeration, overseeding, winterization prep' },
    { name: 'Winter', emoji: '❄️', tasks: 'Snow removal, planning, hardscape design, tree pruning' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Seasonal Promo */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white text-center py-3 px-4">
        <p className="text-sm font-semibold">🌸 Spring Clean-Up Special — Book Now &amp; Save 15%! <a href="#contact" className="font-bold underline hover:opacity-80">Get Quote →</a></p>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-2xl">🌿</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">GreenScape</h1>
                <p className="text-xs text-gray-500">Outdoor Living</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-600 hover:text-primary transition">Services</Link>
              <Link href="#portfolio" className="text-gray-600 hover:text-primary transition">Portfolio</Link>
              <Link href="#seasons" className="text-gray-600 hover:text-primary transition">Seasonal</Link>
              <Link href="#plans" className="text-gray-600 hover:text-primary transition">Plans</Link>
              <Link href="#contact" className="text-gray-600 hover:text-primary transition">Contact</Link>
            </nav>
            <div className="flex items-center space-x-3">
              <a href="tel:6155550456" className="hidden lg:flex items-center space-x-2 text-gray-700 font-semibold"><PhoneIcon className="w-5 h-5 text-primary" /><span>(615) 555-0456</span></a>
              <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition text-sm">Free Consultation</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">🌿 Licensed &amp; Insured • 15+ Years Experience</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Bringing Your Outdoor Vision <span className="text-primary">To Life</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From stunning landscapes to custom hardscaping, we create outdoor spaces that extend your living area and increase your property value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#contact" className="flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition shadow-lg">Free Design Consultation</a>
                <a href="#portfolio" className="flex items-center justify-center border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition">View Portfolio</a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center"><StarIcon className="w-5 h-5 text-yellow-500 mr-1" /><span className="font-semibold">4.8</span><span className="ml-1">(300+ reviews)</span></div>
                <div className="flex items-center"><CheckIcon className="w-5 h-5 text-green-500 mr-1" /><span>500+ Projects</span></div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" alt="Beautiful landscaped backyard" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">+35%</p>
                  <p className="text-xs text-gray-500">Avg. Property Value Increase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Landscaping Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Complete outdoor solutions from design through maintenance</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div key={svc.title} className="group bg-gray-50 rounded-xl p-8 hover:shadow-lg hover:bg-green-50 transition">
                <div className="text-4xl mb-4">{svc.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{svc.title}</h3>
                <p className="text-gray-600 mb-4">{svc.desc}</p>
                <p className="text-sm font-semibold text-primary">{svc.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600">Transformations that speak for themselves</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="relative overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-56 object-cover group-hover:scale-105 transition duration-300" />
                  <div className="absolute top-3 left-3"><span className="bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-primary">{p.category}</span></div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Services */}
      <section id="seasons" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Year-Round Care</h2>
            <p className="text-xl text-gray-600">We keep your property beautiful every season</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasons.map((s) => (
              <div key={s.name} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition">
                <div className="text-4xl mb-3">{s.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.name}</h3>
                <p className="text-gray-600 text-sm">{s.tasks}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section id="plans" className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Maintenance Plans</h2>
            <p className="text-xl opacity-90">Set it and forget it — we handle everything</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Essential', price: '$199', freq: '/month', features: ['Bi-weekly mowing & edging', 'Monthly fertilization', 'Seasonal clean-ups (2x)', 'Weed control'] },
              { name: 'Premium', price: '$349', freq: '/month', features: ['Weekly mowing & edging', 'Monthly fertilization & pest control', 'Seasonal clean-ups (4x)', 'Irrigation monitoring', 'Shrub trimming (quarterly)', 'Priority scheduling'], popular: true },
              { name: 'Estate', price: '$599', freq: '/month', features: ['Weekly full-service maintenance', 'Complete pest & weed management', 'Year-round seasonal services', 'Smart irrigation management', 'Monthly shrub & tree care', 'Outdoor lighting maintenance', 'Dedicated account manager'] },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-xl p-8 ${plan.popular ? 'bg-white text-gray-900 shadow-2xl scale-105' : 'bg-white/10 backdrop-blur-sm'}`}>
                {plan.popular && <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4">MOST POPULAR</span>}
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-gray-900' : ''}`}>{plan.name}</h3>
                <div className="mb-6"><span className="text-4xl font-bold">{plan.price}</span><span className={`text-sm ${plan.popular ? 'text-gray-500' : 'opacity-80'}`}>{plan.freq}</span></div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start space-x-2">
                      <CheckIcon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-green-500' : 'text-green-300'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-gray-700' : ''}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center py-3 rounded-lg font-semibold transition ${plan.popular ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-white/20 hover:bg-white/30'}`}>Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Reviews</h2>
            <div className="flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (<StarIcon key={i} className="w-6 h-6 text-yellow-500" />))}
              <span className="ml-2 font-bold">4.8/5</span><span className="text-gray-600">(300+ reviews)</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rachel & Tom B.', text: '"Our backyard went from boring grass to an outdoor paradise. The patio and fire pit area is where we spend every evening now."', type: 'Hardscaping' },
              { name: 'Kevin M.', text: '"Best maintenance crew in Nashville. They\'re reliable, professional, and my lawn has never looked this good. Worth every penny."', type: 'Maintenance Plan' },
              { name: 'Susan L.', text: '"The landscape design blew us away. They created a 3D rendering so we could see exactly what it would look like. Exceeded expectations."', type: 'Landscape Design' },
            ].map((r) => (
              <div key={r.name} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<StarIcon key={i} className="w-5 h-5 text-yellow-500" />))}</div>
                <p className="text-gray-700 mb-6">{r.text}</p>
                <p className="font-semibold text-gray-900">{r.name}</p>
                <p className="text-sm text-gray-500">{r.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Start Your Outdoor Transformation</h2>
              <p className="text-xl text-gray-600 mb-8">Free design consultation and detailed proposal. We bring your vision to life.</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4"><PhoneIcon className="w-6 h-6 text-primary" /><span className="text-lg">(615) 555-0456</span></div>
                <div className="flex items-center space-x-4"><span className="text-xl">📧</span><span className="text-lg">hello@greenscapeoutdoor.com</span></div>
                <div className="flex items-center space-x-4"><span className="text-xl">📍</span><span className="text-lg">Nashville, TN &amp; Surrounding Areas</span></div>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Outdoor Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://www.houzz.com/photos/landscaping" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Houzz Landscaping Ideas →</a></li>
                  <li><a href="https://www.landscapeprofessionals.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">National Assoc. of Landscape Professionals →</a></li>
                  <li><a href="https://www.epa.gov/watersense/landscaping" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">EPA Water-Efficient Landscaping →</a></li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label><input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="First" /></div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label><input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Last" /></div>
                </div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label><input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="(555) 555-1234" /></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Email</label><input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="you@example.com" /></div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interested In</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select a service...</option>
                    <option>Landscape Design</option>
                    <option>Hardscaping (Patio/Walkway/Wall)</option>
                    <option>Lawn Care &amp; Maintenance</option>
                    <option>Irrigation System</option>
                    <option>Tree &amp; Shrub Service</option>
                    <option>Outdoor Lighting</option>
                    <option>Maintenance Plan</option>
                    <option>Spring Clean-Up</option>
                  </select>
                </div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label><textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Describe your project, budget range, and timeline..."></textarea></div>
                <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition">Request Free Consultation</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-xl">🌿</div>
                <h3 className="text-lg font-bold">GreenScape Outdoor Living</h3>
              </div>
              <p className="text-gray-400 text-sm">Creating stunning outdoor living spaces since 2011. Licensed, insured, and passionate about your landscape.</p>
            </div>
            <div><h4 className="font-semibold mb-4">Services</h4><ul className="space-y-2 text-gray-400 text-sm"><li>Lawn Care</li><li>Hardscaping</li><li>Irrigation</li><li>Tree Service</li><li>Landscape Design</li></ul></div>
            <div><h4 className="font-semibold mb-4">Resources</h4><ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="https://www.houzz.com/photos/landscaping" target="_blank" rel="noopener noreferrer" className="hover:text-white">Houzz Ideas</a></li>
              <li><a href="https://www.landscapeprofessionals.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white">NALP</a></li>
              <li><a href="https://www.epa.gov/watersense/landscaping" target="_blank" rel="noopener noreferrer" className="hover:text-white">EPA WaterSense</a></li>
            </ul></div>
            <div><h4 className="font-semibold mb-4">Contact</h4><ul className="space-y-2 text-gray-400 text-sm"><li>(615) 555-0456</li><li>hello@greenscapeoutdoor.com</li><li>Nashville, TN Area</li></ul></div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} GreenScape Outdoor Living. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
