import Link from 'next/link'
function PhoneIcon({className}:{className?:string}){return <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>}
function StarIcon({className}:{className?:string}){return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>}
function CheckIcon({className}:{className?:string}){return <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>}

export default function Home(){
  const services = [
    {title:'Driveways',desc:'New driveway installation, replacement, and expansion. Built to withstand heavy use and harsh weather.',emoji:'🚗',price:'From $4,500'},
    {title:'Patios',desc:'Custom patio designs that extend your living space outdoors. Stamped, stained, or brushed finish.',emoji:'🏠',price:'From $3,000'},
    {title:'Walkways & Paths',desc:'Elegant concrete paths that guide visitors safely and enhance curb appeal.',emoji:'🚶',price:'From $1,500'},
    {title:'Stamped Concrete',desc:'Beautiful patterns that mimic stone, brick, or slate at a fraction of the cost.',emoji:'🎨',price:'From $6/sq ft'},
    {title:'Foundations',desc:'Slab foundations, footings, and structural concrete for homes and buildings.',emoji:'🏗️',price:'Custom Quote'},
    {title:'Decorative Overlays',desc:'Transform existing concrete without replacement. Restore, resurface, and beautify.',emoji:'✨',price:'From $5/sq ft'},
  ]
  const patterns = [
    {name:'Ashlar Slate',desc:'Classic rectangular pattern',img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'},
    {name:'Cobblestone',desc:'Old-world European charm',img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop'},
    {name:'Brick Pattern',desc:'Traditional and timeless',img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop'},
  ]
  const projects = [
    {title:'Stamped Driveway Transformation',type:'Residential',img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop'},
    {title:'Pool Deck with Stamped Border',type:'Residential',img:'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop'},
    {title:'Commercial Parking Lot',type:'Commercial',img:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop'},
    {title:'Backyard Patio with Fire Pit',type:'Residential',img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop'},
    {title:'Decorative Walkway',type:'Residential',img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop'},
    {title:'Foundation & Slab',type:'Construction',img:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop'},
  ]
  return(
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-2xl">🧱</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Solid Foundation Concrete</h1>
                <p className="text-xs text-gray-500">Built To Last, Designed To Impress</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-600 hover:text-primary transition">Services</Link>
              <Link href="#patterns" className="text-gray-600 hover:text-primary transition">Patterns</Link>
              <Link href="#portfolio" className="text-gray-600 hover:text-primary transition">Portfolio</Link>
              <Link href="#contact" className="text-gray-600 hover:text-primary transition">Contact</Link>
            </nav>
            <div className="flex items-center space-x-3">
              <a href="tel:7045550890" className="hidden lg:flex items-center space-x-2 text-gray-700 font-semibold"><PhoneIcon className="w-5 h-5 text-primary"/><span>(704) 555-0890</span></a>
              <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition text-sm">Free Estimate</a>
            </div>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-slate-50 to-stone-100 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-slate-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">🧱 Licensed &amp; Insured • 20+ Years Experience</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Built To Last, <span className="text-primary">Designed To Impress</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From stunning stamped patios to durable commercial foundations, we deliver concrete solutions that stand the test of time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#contact" className="flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition shadow-lg">Get Free Estimate</a>
                <a href="#patterns" className="flex items-center justify-center border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition">View Patterns</a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center"><StarIcon className="w-5 h-5 text-yellow-500 mr-1"/><span className="font-semibold">4.9</span><span className="ml-1">(250+ reviews)</span></div>
                <div className="flex items-center"><CheckIcon className="w-5 h-5 text-green-500 mr-1"/><span>400+ Projects</span></div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop" alt="Beautiful stamped concrete driveway" className="w-full h-[500px] object-cover"/>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">25yr</p>
                  <p className="text-xs text-gray-500">Warranty Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Concrete Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From residential driveways to commercial foundations</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s)=>(
              <div key={s.title} className="group bg-gray-50 rounded-xl p-8 hover:shadow-lg hover:bg-slate-50 transition">
                <div className="text-4xl mb-4">{s.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 mb-4">{s.desc}</p>
                <p className="text-sm font-semibold text-primary">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="patterns" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stamped Concrete Patterns</h2>
            <p className="text-xl text-gray-600">Beautiful textures that mimic natural materials</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {patterns.map((p)=>(
              <div key={p.name} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                <img src={p.img} alt={p.name} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{p.name}</h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Explore more concrete design ideas:</p>
            <a href="https://www.concretenetwork.com/stamped-concrete/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Stamped Concrete Guide →</a>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600">Quality work that speaks for itself</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p)=>(
              <div key={p.title} className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition">
                <div className="relative overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"/>
                  <div className="absolute top-3 left-3"><span className="bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-primary">{p.type}</span></div>
                </div>
                <div className="p-5"><h3 className="font-bold text-gray-900">{p.title}</h3></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Solid Foundation?</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[{stat:'20+',label:'Years Experience'},{stat:'400+',label:'Projects Completed'},{stat:'25yr',label:'Warranty'},{stat:'100%',label:'Satisfaction'}].map((item)=>(
              <div key={item.label}>
                <p className="text-4xl font-bold mb-2">{item.stat}</p>
                <p className="text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get Your Free Estimate</h2>
              <p className="text-xl text-gray-600 mb-8">Detailed, no-obligation quotes for your concrete project.</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4"><PhoneIcon className="w-6 h-6 text-primary"/><span className="text-lg">(704) 555-0890</span></div>
                <div className="flex items-center space-x-4"><span className="text-xl">📧</span><span className="text-lg">info@solidfoundationconcrete.com</span></div>
                <div className="flex items-center space-x-4"><span className="text-xl">📍</span><span className="text-lg">Charlotte, NC &amp; Surrounding Areas</span></div>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://www.concretenetwork.com/concrete/patterns/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Concrete Network Patterns →</a></li>
                  <li><a href="https://www.concretenetwork.com/stamped-concrete/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stamped Concrete Guide →</a></li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Free Quote</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label><input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"/></div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label><input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"/></div>
                </div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label><input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"/></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Email</label><input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"/></div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select a service...</option>
                    <option>Driveway</option>
                    <option>Patio</option>
                    <option>Walkway/Path</option>
                    <option>Stamped Concrete</option>
                    <option>Foundation</option>
                    <option>Decorative Overlay</option>
                    <option>Commercial Project</option>
                  </select>
                </div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label><textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Size, timeline, current condition..."></textarea></div>
                <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition">Get Free Estimate</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-xl">🧱</div>
                <h3 className="text-lg font-bold">Solid Foundation Concrete</h3>
              </div>
              <p className="text-gray-400 text-sm">Quality concrete work built to last. Serving Charlotte and surrounding areas since 2006.</p>
            </div>
            <div><h4 className="font-semibold mb-4">Services</h4><ul className="space-y-2 text-gray-400 text-sm"><li>Driveways</li><li>Patios</li><li>Walkways</li><li>Stamped Concrete</li><li>Foundations</li></ul></div>
            <div><h4 className="font-semibold mb-4">Resources</h4><ul className="space-y-2 text-gray-400 text-sm"><li><a href="https://www.concretenetwork.com/concrete/patterns/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Concrete Patterns</a></li><li><a href="https://www.concretenetwork.com/stamped-concrete/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Stamped Guide</a></li></ul></div>
            <div><h4 className="font-semibold mb-4">Contact</h4><ul className="space-y-2 text-gray-400 text-sm"><li>(704) 555-0890</li><li>info@solidfoundationconcrete.com</li><li>Charlotte, NC Area</li></ul></div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm"><p>&copy; {new Date().getFullYear()} Solid Foundation Concrete. All rights reserved.</p></div>
        </div>
      </footer>
    </div>
  )
}
