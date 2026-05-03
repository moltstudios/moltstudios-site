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
function CalendarIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
}
function HeartIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
}
function ClockIcon({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
}

export default function Home() {
  const services = [
    { title: 'General Dentistry', desc: 'Cleanings, fillings, crowns, and preventive care to keep your smile healthy for life.', icon: '🦷' },
    { title: 'Cosmetic Dentistry', desc: 'Veneers, teeth whitening, bonding, and smile makeovers that boost your confidence.', icon: '✨' },
    { title: 'Dental Implants', desc: 'Permanent tooth replacement that looks, feels, and functions like your natural teeth.', icon: '🔧' },
    { title: 'Orthodontics', desc: 'Traditional braces, clear aligners, and Invisalign for straighter, healthier smiles.', icon: '😁' },
    { title: 'Emergency Dental', desc: 'Same-day appointments for toothaches, broken teeth, and urgent dental needs.', icon: '🚑' },
    { title: 'Pediatric Dentistry', desc: 'Gentle, kid-friendly dental care in a fun, comfortable environment for little ones.', icon: '👶' },
  ]

  const team = [
    { name: 'Dr. Sarah Chen, DDS', role: 'Lead Dentist & Founder', bio: '15+ years of experience. Specializes in cosmetic dentistry and implants.', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop' },
    { name: 'Dr. Michael Torres, DMD', role: 'Orthodontist', bio: 'Invisalign Platinum Provider with over 1,000 cases completed.', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop' },
    { name: 'Dr. Emily Park, DDS', role: 'Pediatric Dentist', bio: 'Board-certified pediatric dentist who makes every child feel at home.', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=400&h=400&fit=crop' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* New Patient Banner */}
      <div className="bg-gradient-to-r from-primary to-accent text-white text-center py-3 px-4">
        <p className="text-sm font-semibold">🎉 New Patient Special: <span className="underline">$99 Exam, Cleaning & X-Rays</span> — <a href="#contact" className="font-bold hover:opacity-80">Book Now →</a></p>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-cyan-400 rounded-full flex items-center justify-center text-2xl">😊</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Bright Smile Dental</h1>
                <p className="text-xs text-gray-500">Your Comfort, Your Smile, Our Priority</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-600 hover:text-primary transition">Services</Link>
              <Link href="#team" className="text-gray-600 hover:text-primary transition">Our Team</Link>
              <Link href="#reviews" className="text-gray-600 hover:text-primary transition">Reviews</Link>
              <Link href="#insurance" className="text-gray-600 hover:text-primary transition">Insurance</Link>
              <Link href="#contact" className="text-gray-600 hover:text-primary transition">Contact</Link>
            </nav>

            <div className="flex items-center space-x-3">
              <a href="tel:9195550345" className="hidden lg:flex items-center space-x-2 text-gray-700 font-semibold">
                <PhoneIcon className="w-5 h-5 text-primary" />
                <span>(919) 555-0345</span>
              </a>
              <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition text-sm">
                <span className="hidden sm:inline">Book Appointment</span>
                <CalendarIcon className="w-5 h-5 sm:hidden" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-sky-50 to-cyan-50 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-sky-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <HeartIcon className="w-4 h-4 mr-2" />
                Gentle, Compassionate Care
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Comfort, Your Smile, <span className="text-primary">Our Priority</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience dentistry that puts you first. From routine cleanings to complete smile makeovers, we make every visit comfortable and stress-free.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#contact" className="flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition shadow-lg">
                  <CalendarIcon className="w-5 h-5 mr-3" />
                  Book Appointment
                </a>
                <a href="tel:9195550345" className="flex items-center justify-center border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition">
                  <PhoneIcon className="w-5 h-5 mr-3" />
                  (919) 555-0345
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <StarIcon className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="font-semibold">4.9</span>
                  <span className="ml-1">from 400+ reviews</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="w-5 h-5 text-primary mr-1" />
                  <span>Open 7 AM - 7 PM</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop" alt="Modern dental office with friendly staff" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-lg border border-sky-100">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">🎉</div>
                  <div>
                    <p className="font-bold text-gray-900">New Patient Special</p>
                    <p className="text-primary font-bold text-lg">$99 Exam & X-Rays</p>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Dental Care</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need for a healthy, beautiful smile — all under one roof</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div key={svc.title} className="group bg-gray-50 rounded-xl p-8 hover:shadow-lg hover:bg-sky-50 transition">
                <div className="text-4xl mb-4">{svc.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{svc.title}</h3>
                <p className="text-gray-600">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section id="team" className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Your Dental Team</h2>
            <p className="text-xl text-gray-600">Experienced, compassionate professionals who genuinely care about your comfort</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                <img src={member.img} alt={member.name} className="w-full h-72 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Banner */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Take a Virtual Tour of Our Office</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">See our modern, comfortable facility before your first visit. State-of-the-art technology in a relaxing environment.</p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 max-w-3xl mx-auto">
            <div className="text-6xl mb-4">🏥</div>
            <p className="text-lg font-semibold">360° Virtual Office Tour</p>
            <p className="text-sm opacity-80 mt-2">Click to explore our treatment rooms, waiting area, and technology</p>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section id="insurance" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Insurance & Financing</h2>
            <p className="text-xl text-gray-600">We accept most major dental insurance plans and offer flexible financing</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Insurance Accepted</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Delta Dental', 'Cigna', 'MetLife', 'Aetna', 'Guardian', 'United Healthcare', 'BlueCross', 'Humana'].map((ins) => (
                  <div key={ins} className="flex items-center space-x-2">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 text-sm">{ins}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">Don&apos;t see yours? Call us — we likely accept it.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Financing</h3>
              <p className="text-gray-600 mb-4">No insurance? No problem. We offer affordable payment plans so cost never stands between you and your smile.</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 text-sm">0% interest financing available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 text-sm">In-house savings plan for uninsured</span>
                </div>
              </div>
              <a href="https://www.carecredit.com/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-primary font-semibold hover:underline text-sm">Apply for CareCredit →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Patient Reviews</h2>
            <div className="flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (<StarIcon key={i} className="w-6 h-6 text-yellow-500" />))}
              <span className="ml-2 font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600">(400+ reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Jennifer L.', text: '"I used to be terrified of the dentist. Dr. Chen and her team made me feel so comfortable — I actually look forward to my visits now!"', type: 'Anxiety Patient' },
              { name: 'Carlos R.', text: '"My Invisalign treatment was seamless. Dr. Torres explained every step and my smile has never looked better. Worth every penny!"', type: 'Orthodontics' },
              { name: 'Michelle & Kids', text: '"Dr. Park is amazing with our kids. They actually BEG to go to the dentist now. The office is so welcoming and fun."', type: 'Pediatric Patient' },
            ].map((review) => (
              <div key={review.name} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (<StarIcon key={i} className="w-5 h-5 text-yellow-500" />))}
                </div>
                <p className="text-gray-700 mb-6">{review.text}</p>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-12 bg-red-50 border-y border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <span className="text-4xl">🚑</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Dental Emergency?</h3>
                <p className="text-gray-600">Same-day emergency appointments available. Don&apos;t wait in pain.</p>
              </div>
            </div>
            <a href="tel:9195550345" className="flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition">
              <PhoneIcon className="w-5 h-5" />
              <span>Emergency: (919) 555-0345</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Book Your Appointment</h2>
              <p className="text-xl text-gray-600 mb-8">New patients welcome! Schedule your first visit and take advantage of our $99 exam special.</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4"><PhoneIcon className="w-6 h-6 text-primary" /><span className="text-lg">(919) 555-0345</span></div>
                <div className="flex items-center space-x-4"><ClockIcon className="w-6 h-6 text-primary" /><span className="text-lg">Mon-Fri 7 AM - 7 PM • Sat 8 AM - 2 PM</span></div>
                <div className="flex items-center space-x-4"><HeartIcon className="w-6 h-6 text-primary" /><span className="text-lg">hello@brightsmileDental.com</span></div>
              </div>

              <div className="bg-sky-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Dental Anxiety Resources</h3>
                <p className="text-gray-600 text-sm mb-3">Nervous about your visit? You&apos;re not alone. We offer sedation options and a calming environment.</p>
                <a href="https://www.mouthhealthy.org/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold text-sm hover:underline">Learn about dental anxiety →</a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Appointment</h3>
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interested In</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select a service...</option>
                    <option>General Checkup &amp; Cleaning</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Dental Implants</option>
                    <option>Orthodontics / Invisalign</option>
                    <option>Emergency Dental</option>
                    <option>Pediatric Visit</option>
                    <option>New Patient Exam ($99 Special)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date/Time</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="e.g. Tuesday morning, next week" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Insurance Provider</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="e.g. Delta Dental, or None" />
                </div>
                <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition">Request Appointment</button>
              </form>
              <p className="text-center text-sm text-gray-500 mt-4">We&apos;ll confirm your appointment within 2 hours</p>
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
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-cyan-400 rounded-full flex items-center justify-center text-xl">😊</div>
                <div>
                  <h3 className="text-lg font-bold">Bright Smile Dental</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Gentle, comprehensive dental care for the whole family. Your comfort is our priority.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>General Dentistry</li>
                <li>Cosmetic Dentistry</li>
                <li>Dental Implants</li>
                <li>Orthodontics</li>
                <li>Emergency Dental</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://www.carecredit.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">CareCredit Financing</a></li>
                <li><a href="https://www.ada.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">ADA - Find a Dentist</a></li>
                <li><a href="https://www.mouthhealthy.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Mouth Healthy (ADA)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>(919) 555-0345</li>
                <li>hello@brightsmileDental.com</li>
                <li>Mon-Fri 7AM-7PM</li>
                <li>Sat 8AM-2PM</li>
                <li>Raleigh, NC Area</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Bright Smile Dental. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
