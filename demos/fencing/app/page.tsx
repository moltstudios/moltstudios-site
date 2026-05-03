import Link from 'next/link'
function PhoneIcon({className}:{className?:string}){return <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>}
function StarIcon({className}:{className?:string}){return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>}
function CheckIcon({className}:{className?:string}){return <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>}

export default function Home(){
  const materials = [
    {name:'Wood Fencing',pros:['Natural beauty','Customizable height/style','Affordable','Easy to repair'],cons:['Requires staining/sealing','May warp over time','15-20yr lifespan'],price:'$25-45/linear ft',emoji:'🌲',color:'bg-green-100 text-green-700'},
    {name:'Vinyl Fencing',pros:['Virtually maintenance-free','Won\'t rot, fade, or warp','20-30yr lifespan','Easy to clean'],cons:['Higher upfront cost','Limited color options','Can become brittle in extreme cold'],price:'$35-55/linear ft',emoji:'🏠',color:'bg-blue-100 text-blue-700'},
    {name:'Chain Link',pros:['Most affordable option','Durable and secure','Low maintenance','Quick installation'],cons:['Less privacy','Industrial appearance','Can rust over time'],price:'$15-25/linear ft',emoji:'🔗',color:'bg-gray-100 text-gray-700'},
    {name:'Ornamental Iron',pros:['Elegant, classic look','Extremely durable','Adds property value','100yr+ lifespan'],cons:['Higher cost','Professional install required','Requires occasional painting'],price:'$50-100/linear ft',emoji:'🏛️',color:'bg-purple-100 text-purple-700'},
  ]
  const projects = [
    {title:'White Vinyl Privacy Fence',type:'Residential',img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'},
    {title:'Cedar Wood Estate Fence',type:'Residential',img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop'},
    {title:'Black Aluminum Perimeter',type:'Residential',img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop'},
    {title:'Commercial Security Fence',type:'Commercial',img:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop'},
    {title:'Pool Safety Enclosure',type:'Residential',img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop'},
    {title:'Dog Run & Play Area',type:'Residential',img:'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop'},
  ]
  return(
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl">🚧</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Boundary Pro Fencing</h1>
                <p className="text-xs text-gray-500">Defining Your Property, Protecting Your Privacy</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#materials" className="text-gray-600 hover:text-primary transition">Materials</Link>
              <Link href="#portfolio" className="text-gray-600 hover:text-primary transition">Portfolio</Link>
              <Link href="#quote" className="text-gray-600 hover:text-primary transition">Quote Calculator</Link>
              <Link href="#contact" className="text-gray-600 hover:text-primary transition">Contact</Link>
            </nav>
            <div className="flex items-center space-x-3">
              <a href="tel:9195550123" className="hidden lg:flex items-center space-x-2 text-gray-700 font-semibold"><PhoneIcon className="w-5 h-5 text-primary"/><span>(919) 555-0123</span></a>
              <a href="#quote" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition text-sm">Instant Quote</a>
            </div>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-violet-50 to-purple-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-violet-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">🚧 Licensed &amp; Insured • Free Estimates</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Defining Your Property, <span className="text-primary">Protecting Your Privacy</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional fence installation for every need and budget. From classic wood to elegant iron, we build fences that last.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#quote" className="flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition shadow-lg">Get Instant Quote</a>
                <a href="tel:9195550123" className="flex items-center justify-center border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition"><PhoneIcon className="w-5 h-5 mr-3"/>(919) 555-0123</a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center"><StarIcon className="w-5 h-5 text-yellow-500 mr-1"/><span className="font-semibold">4.9</span><span className="ml-1">(200+ reviews)</span></div>
                <div className="flex items-center"><CheckIcon className="w-5 h-5 text-green-500 mr-1"/><span>300+ Installations</span></div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" alt="Beautiful residential fence installation" className="w-full h-[500px] object-cover"/>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">5yr</p>
                  <p className="text-xs text-gray-500">Workmanship Warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="materials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fence Materials Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the right material for your needs and budget</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {materials.map((m)=>(
              <div key={m.name} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center text-2xl ${m.color}`}>{m.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{m.name}</h3>
                    <p className="text-primary font-semibold">{m.price}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-green-700 mb-2 flex items-center"><CheckIcon className="w-4 h-4 mr-1"/>Pros</p>
                    <ul className="space-y-1 text-sm text-gray-600">{m.pros.map((p)=><li key={p}>• {p}</li>)}</ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-amber-700 mb-2">Considerations</p>
                    <ul className="space-y-1 text-sm text-gray-600">{m.cons.map((c)=><li key={c}>• {c}</li>)}</ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-2">Not sure which material is right for you?</p>
            <a href="https://www.homedepot.com/c/ab/types-of-fences/9ba683603be9fa45c2a2318a" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Fence Material Guide →</a>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-xl text-gray-600">Quality installations that stand the test of time</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p)=>(
              <div key={p.title} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
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

      <section id="quote" className="py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Instant Quote Calculator</h2>
            <p className="text-lg opacity-90">Get an instant estimate for your fence project</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Fence Length (linear feet)</label>
                <input type="number" placeholder="e.g. 150" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"/>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Material</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Wood (Cedar/Pressure-Treated)</option>
                  <option>Vinyl (White/Tan)</option>
                  <option>Chain Link (Galvanized/Black)</option>
                  <option>Aluminum (Black/Bronze)</option>
                  <option>Wrought Iron</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Gate(s) Needed</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>None</option>
                  <option>1 Walk Gate (4ft)</option>
                  <option>1 Drive Gate (10ft)</option>
                  <option>2+ Gates</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Project Type</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>New Installation</option>
                  <option>Replace Existing Fence</option>
                  <option>Repair/Extend Existing</option>
                </select>
              </div>
              <div className="bg-violet-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Estimated Range</p>
                <p className="text-3xl font-bold text-primary">$3,750 - $6,750</p>
                <p className="text-xs text-gray-500 mt-1">*Final quote may vary based on site conditions</p>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition">Get Detailed Quote</button>
            </form>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-xl text-gray-600 mb-8">Free on-site estimates. We come to you.</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4"><PhoneIcon className="w-6 h-6 text-primary"/><span className="text-lg">(919) 555-0123</span></div>
                <div className="flex items-center space-x-4"><span className="text-xl">📧</span><span className="text-lg">info@boundaryprofencing.com</span></div>
                <div className="flex items-center space-x-4"><span className="text-xl">📍</span><span className="text-lg">Raleigh-Durham, NC Area</span></div>
              </div>
              <div className="bg-violet-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://www.homedepot.com/c/ab/types-of-fences/9ba683603be9fa45c2a2318a" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Fence Types Guide →</a></li>
                  <li><a href="https://www.americanfenceassociation.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">American Fence Association →</a></li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Free On-Site Estimate</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label><input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"/></div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label><input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"/></div>
                </div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label><input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"/></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Email</label><input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"/></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Address</label><input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Property address"/></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label><select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>New Fence Installation</option>
                  <option>Fence Replacement</option>
                  <option>Gate Installation</option>
                  <option>Fence Repair</option>
                </select></div>
                <div><label className="block text-sm font-semibold text-gray-700 mb-2">Notes</label><textarea rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Material preference, timeline, etc."></textarea></div>
                <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition">Schedule Free Estimate</button>
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
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center text-xl">🚧</div>
                <h3 className="text-lg font-bold">Boundary Pro Fencing</h3>
              </div>
              <p className="text-gray-400 text-sm">Professional fence installation with quality materials and expert craftsmanship.</p>
            </div>
            <div><h4 className="font-semibold mb-4">Materials</h4><ul className="space-y-2 text-gray-400 text-sm"><li>Wood Fencing</li><li>Vinyl Fencing</li><li>Chain Link</li><li>Aluminum/Iron</li></ul></div>
            <div><h4 className="font-semibold mb-4">Services</h4><ul className="space-y-2 text-gray-400 text-sm"><li>New Installation</li><li>Replacement</li><li>Gate Installation</li><li>Repairs</li></ul></div>
            <div><h4 className="font-semibold mb-4">Contact</h4><ul className="space-y-2 text-gray-400 text-sm"><li>(919) 555-0123</li><li>info@boundaryprofencing.com</li><li>Raleigh-Durham, NC</li></ul></div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm"><p>&copy; {new Date().getFullYear()} Boundary Pro Fencing. All rights reserved.</p></div>
        </div>
      </footer>
    </div>
  )
}
