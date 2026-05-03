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
function PaletteIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" /></svg>
}
function ArrowIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
}

export default function Home() {
  const services = [
    { title: 'Interior Painting', desc: 'Living rooms, bedrooms, kitchens, and bathrooms. We prep, prime, and paint with meticulous attention to detail.', color: 'bg-indigo-100 text-indigo-600', price: 'From $1,200' },
    { title: 'Exterior Painting', desc: 'Complete exterior transformations. Power washing, scraping, priming, and premium paint that lasts 10+ years.', color: 'bg-pink-100 text-pink-600', price: 'From $3,500' },
    { title: 'Cabinet Refinishing', desc: 'Transform dated kitchens without the cost of replacement. Sand, prime, spray-finish for a factory-smooth look.', color: 'bg-amber-100 text-amber-600', price: 'From $2,800' },
    { title: 'Commercial Painting', desc: 'Offices, retail, restaurants, and warehouses. Minimal disruption, flexible scheduling, professional results.', color: 'bg-emerald-100 text-emerald-600', price: 'From $5,000' },
    { title: 'Power Washing', desc: 'Decks, driveways, patios, and siding. Restore surfaces to like-new condition before painting or staining.', color: 'bg-cyan-100 text-cyan-600', price: 'From $350' },
    { title: 'Deck & Fence Staining', desc: 'Preserve and beautify your outdoor wood. UV-protective stains that keep your deck looking new season after season.', color: 'bg-orange-100 text-orange-600', price: 'From $800' },
  ]

  const projects = [
    { title: 'Modern Kitchen Cabinet Refresh', location: 'Myers Park, Charlotte', category: 'Cabinet Refinishing', colors: 'Benjamin Moore "Simply White"', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop' },
    { title: 'Full Exterior Transformation', location: 'Dilworth, Charlotte', category: 'Exterior Painting', colors: 'Sherwin-Williams "Naval" + "Alabaster"', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop' },
    { title: 'Living Room Color Update', location: 'South End, Charlotte', category: 'Interior Painting', colors: 'Benjamin Moore "Revere Pewter"', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=400&fit=crop' },
    { title: 'Office Building Repaint', location: 'Uptown, Charlotte', category: 'Commercial', colors: 'Sherwin-Williams "Agreeable Gray"', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop' },
    { title: 'Victorian Exterior Restoration', location: 'NoDa, Charlotte', category: 'Exterior Painting', colors: 'Custom 3-color palette', img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop' },
    { title: 'Master Bedroom Suite', location: 'Ballantyne, Charlotte', category: 'Interior Painting', colors: 'Farrow & Ball "Hague Blue"', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop' },
  ]

  const colorPalettes = [
    { name: 'Coastal Calm', colors: ['#E8F4F8', '#B4D4E7', '#6BA3BE', '#2E6B8A', '#1A3A4A'] },
    { name: 'Modern Neutral', colors: ['#F5F0EB', '#D4C5B5', '#A89585', '#6D5D4E', '#3D3228'] },
    { name: 'Bold Statement', colors: ['#FDF2F8', '#FBCFE8', '#F472B6', '#DB2777', '#9D174D'] },
    { name: 'Earth Tones', colors: ['#FEF3C7', '#D9A066', '#B07D4E', '#78593A', '#4A3728'] },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center">
                <PaletteIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Prime Coat Painters</h1>
                <p className="text-sm text-gray-500">Professional Painting Services</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-600 hover:text-primary transition">Services</Link>
              <Link href="#gallery" className="text-gray-600 hover:text-primary transition">Gallery</Link>
              <Link href="#colors" className="text-gray-600 hover:text-primary transition">Colors</Link>
              <Link href="#reviews" className="text-gray-600 hover:text-primary transition">Reviews</Link>
              <Link href="#contact" className="text-gray-600 hover:text-primary transition">Contact</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <a href="tel:7045550567" className="hidden sm:flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition">
                <PhoneIcon className="w-5 h-5" />
                <span>(704) 555-0567</span>
              </a>
              <a href="tel:7045550567" className="sm:hidden bg-primary text-white px-4 py-3 rounded-lg">
                <PhoneIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-pink-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-80 h-80 bg-indigo-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-40 w-64 h-64 bg-amber-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <PaletteIcon className="w-4 h-4 mr-2" />
                Sherwin-Williams Preferred Painter
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your Space <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">With Color</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From interior makeovers to full exterior transformations, we bring your vision to life with premium paints and expert craftsmanship. Free color consultation included.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#contact" className="flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition shadow-lg">
                  <PaletteIcon className="w-5 h-5 mr-3" />
                  Free Color Consultation
                </a>
                <a href="#gallery" className="flex items-center justify-center border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition">
                  View Our Work
                  <ArrowIcon className="w-5 h-5 ml-2" />
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <StarIcon className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="font-semibold">4.9</span>
                  <span className="ml-1">from 350+ reviews</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-1" />
                  <span>Licensed & Insured</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop" alt="Professional painter at work" className="w-full h-[500px] object-cover" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-red-400"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-400"></div>
                    <div className="w-8 h-8 rounded-full bg-green-400"></div>
                    <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">500+ Colors</p>
                    <p className="text-xs text-gray-500">Available for consultation</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">12+</p>
                  <p className="text-xs text-gray-500">Years Exp.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Painting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From a single accent wall to a complete commercial repaint, we deliver flawless results every time</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div key={svc.title} className="group bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${svc.color}`}>
                  <PaletteIcon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{svc.title}</h3>
                <p className="text-gray-600 mb-4">{svc.desc}</p>
                <div className="text-sm font-semibold text-primary">{svc.price}</div>
              </div>
            ))}
          </div>

          {/* Brand Partnerships */}
          <div className="mt-16 text-center">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Trusted Paint Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <a href="https://www.sherwin-williams.com/visualizer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition font-bold text-lg">Sherwin-Williams</a>
              <a href="https://www.benjaminmoore.com/en-us/color-overview" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition font-bold text-lg">Benjamin Moore</a>
              <span className="text-gray-400 font-bold text-lg">Farrow & Ball</span>
              <span className="text-gray-400 font-bold text-lg">Dunn-Edwards</span>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Transformations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">See the difference professional painting makes. Every project includes color consultation and premium materials.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="relative overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-primary">{project.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{project.location}</p>
                  <div className="flex items-center space-x-2">
                    <PaletteIcon className="w-4 h-4 text-primary" />
                    <span className="text-xs text-gray-600">{project.colors}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Consultation */}
      <section id="colors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Free Color Consultation</h2>
              <p className="text-xl text-gray-600 mb-8">Choosing the right color can be overwhelming. Our expert color consultants help you find the perfect palette for your space — completely free.</p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">In-Home Color Preview</h3>
                    <p className="text-gray-600 text-sm">We bring large color samples and test them in your actual lighting conditions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Digital Visualization</h3>
                    <p className="text-gray-600 text-sm">See your rooms painted virtually before we start — no surprises</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Color Matching</h3>
                    <p className="text-gray-600 text-sm">Match existing decor, furniture, and fixtures for a cohesive look</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition">Book Free Consultation</a>
                <a href="https://www.sherwin-williams.com/visualizer" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition">Try Color Visualizer</a>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Popular Palettes</p>
              <div className="space-y-6">
                {colorPalettes.map((palette) => (
                  <div key={palette.name} className="bg-gray-50 rounded-xl p-6">
                    <p className="font-semibold text-gray-900 mb-3">{palette.name}</p>
                    <div className="flex gap-2">
                      {palette.colors.map((color) => (
                        <div key={color} className="flex-1 h-16 rounded-lg shadow-inner" style={{ backgroundColor: color }}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 mt-6">
                <a href="https://www.pantone.com/color-of-the-year" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">See 2026 Pantone Color of the Year →</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet Refinishing Highlight */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/20 text-sm font-semibold px-4 py-1 rounded-full mb-4">High-Value Service</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Cabinet Refinishing</h2>
              <p className="text-xl opacity-90 mb-8">Transform your kitchen for a fraction of the cost of new cabinets. Our spray-finish technique delivers a factory-smooth look that lasts.</p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-3xl font-bold">70%</p>
                  <p className="text-sm opacity-80">Less than cabinet replacement</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">5-7</p>
                  <p className="text-sm opacity-80">Days average project time</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">10yr</p>
                  <p className="text-sm opacity-80">Durability guarantee</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-sm opacity-80">Kitchens transformed</p>
                </div>
              </div>
              <a href="#contact" className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">Get Cabinet Quote <ArrowIcon className="w-5 h-5 ml-2" /></a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop" alt="Refinished white kitchen cabinets" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (<StarIcon key={i} className="w-6 h-6 text-yellow-500" />))}
              <span className="ml-2 font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600">(350+ reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Amanda R.', initials: 'AR', color: 'bg-pink-100 text-pink-600', text: '"They transformed our dated kitchen cabinets into a modern masterpiece. The spray finish is flawless — everyone asks if they\'re new!"', type: 'Cabinet Refinishing' },
              { name: 'David & Lisa W.', initials: 'DW', color: 'bg-indigo-100 text-indigo-600', text: '"Our entire exterior looks brand new. The crew was professional, clean, and finished ahead of schedule. Couldn\'t be happier!"', type: 'Exterior Painting' },
              { name: 'Marcus T.', initials: 'MT', color: 'bg-amber-100 text-amber-600', text: '"The color consultation was a game-changer. They helped us pick the perfect palette for our open floor plan. Absolutely love it."', type: 'Interior Painting' },
            ].map((review) => (
              <div key={review.name} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (<StarIcon key={i} className="w-5 h-5 text-yellow-500" />))}
                </div>
                <p className="text-gray-700 mb-6">{review.text}</p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-3 ${review.color}`}>
                    <span className="font-bold text-sm">{review.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Space?</h2>
              <p className="text-xl text-gray-600 mb-8">Get a free, detailed estimate with no obligation. We include a complimentary color consultation with every quote.</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <PhoneIcon className="w-6 h-6 text-primary" />
                  <span className="text-lg text-gray-900">Phone: (704) 555-0567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <PaletteIcon className="w-6 h-6 text-primary" />
                  <span className="text-lg text-gray-900">Email: hello@primecoatpainters.com</span>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Our Process</h3>
                <div className="space-y-3">
                  {['Free consultation & color preview', 'Detailed written estimate', 'Surface prep & protection', 'Premium paint application', 'Final walkthrough & touch-ups'].map((step, i) => (
                    <div key={step} className="flex items-center space-x-3">
                      <span className="w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Estimate</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="First" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Last" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="(555) 555-1234" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select a service...</option>
                    <option>Interior Painting</option>
                    <option>Exterior Painting</option>
                    <option>Cabinet Refinishing</option>
                    <option>Commercial Painting</option>
                    <option>Power Washing</option>
                    <option>Deck &amp; Fence Staining</option>
                    <option>Color Consultation Only</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tell Us About Your Project</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Rooms, square footage, timeline, color ideas..."></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition">Request Free Estimate</button>
              </form>
              <p className="text-center text-sm text-gray-500 mt-4">Includes complimentary color consultation</p>
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
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <PaletteIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Prime Coat Painters</h3>
                  <p className="text-xs text-gray-400">Professional Painting Services</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Transforming spaces with color since 2014. Licensed, insured, and dedicated to perfection.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#services" className="hover:text-white transition">Interior Painting</Link></li>
                <li><Link href="#services" className="hover:text-white transition">Exterior Painting</Link></li>
                <li><Link href="#services" className="hover:text-white transition">Cabinet Refinishing</Link></li>
                <li><Link href="#services" className="hover:text-white transition">Commercial Painting</Link></li>
                <li><Link href="#services" className="hover:text-white transition">Power Washing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Color Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://www.sherwin-williams.com/visualizer" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">SW Color Visualizer</a></li>
                <li><a href="https://www.benjaminmoore.com/en-us/color-overview" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">BM Color Gallery</a></li>
                <li><a href="https://www.pantone.com/color-of-the-year" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Pantone Color of Year</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Phone: (704) 555-0567</li>
                <li>hello@primecoatpainters.com</li>
                <li>Charlotte, NC Area</li>
                <li className="pt-2">
                  <span className="bg-gray-800 text-xs px-2 py-1 rounded mr-1">Licensed</span>
                  <span className="bg-gray-800 text-xs px-2 py-1 rounded mr-1">Insured</span>
                  <span className="bg-gray-800 text-xs px-2 py-1 rounded">EPA Lead-Safe</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Prime Coat Painters. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
