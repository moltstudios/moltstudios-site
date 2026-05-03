import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Emergency Banner */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        {/* Emergency Banner */}
        <div className="bg-red-600 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">⚡</span>
              <span className="font-bold text-sm">24/7 Emergency Service Available</span>
            </div>
            <a href="tel:19195550456" className="text-white font-bold hover:text-yellow-300 transition text-sm">
              Call Now: (919) 555-0456
            </a>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CC</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Climate Comfort HVAC</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#services" className="text-gray-700 hover:text-blue-800 font-medium transition">
                Services
              </Link>
              <Link href="#maintenance" className="text-gray-700 hover:text-blue-800 font-medium transition">
                Maintenance Plans
              </Link>
              <Link href="#portfolio" className="text-gray-700 hover:text-blue-800 font-medium transition">
                Before & After
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-blue-800 font-medium transition">
                Reviews
              </Link>
              <Link href="#financing" className="text-gray-700 hover:text-blue-800 font-medium transition">
                Financing
              </Link>
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:19195550456" className="text-blue-800 font-bold text-lg hover:text-blue-600 transition">
                (919) 555-0456
              </a>
              <Link
                href="#book"
                className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg hover:shadow-xl"
              >
                Book Online
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Seasonal Messaging */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1585647347484-2bb90e55a40e?w=1920&q=80"
            alt="HVAC technician working on AC unit"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold mb-4">
                Spring AC Tune-Up Special - $89
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Year-Round Comfort, Just One Call Away
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Your trusted NATE-certified HVAC experts serving Charlotte since 2008. AC repair, heating, duct cleaning,
                and indoor air quality - all with 24/7 emergency service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="tel:19195550456"
                  className="flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now: (919) 555-0456
                </Link>
                <Link
                  href="#book"
                  className="flex items-center justify-center gap-2 bg-white text-blue-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Schedule Free Estimate
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                  <span className="text-yellow-400">🏆</span>
                  <span className="text-blue-100">NATE Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                  <span className="text-yellow-400">🌿</span>
                  <span className="text-blue-100">EPA Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-blue-100">4.9 Google Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                  <span className="text-yellow-400">✓</span>
                  <span className="text-blue-100">BBB A+ Rated</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative bg-blue-700 rounded-2xl p-4 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1632804368154-b6474b3c5a6c?w=800&q=80"
                  alt="Modern HVAC installation"
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-yellow-400 rounded-xl p-4 shadow-xl hidden md:block">
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-gray-900 font-semibold">Emergency Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete HVAC Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AC repair to heating installation, we've got your home covered year-round
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AC Repair",
                description: "Fast, reliable air conditioning repair and installation services",
                icon: "❄️",
                color: "bg-blue-100"
              },
              {
                title: "Heating",
                description: "Furnace repair, heat pump service, and heating installation",
                icon: "🔥",
                color: "bg-red-100"
              },
              {
                title: "Duct Cleaning",
                description: "Professional duct cleaning for better air quality and efficiency",
                icon: "🌬️",
                color: "bg-green-100"
              },
              {
                title: "Indoor Air Quality",
                description: "Air purifiers, humidifiers, and whole-home air quality solutions",
                icon: "🏠",
                color: "bg-purple-100"
              },
              {
                title: "Smart Thermostats",
                description: "Programmable and smart thermostat installation and setup",
                icon: "📱",
                color: "bg-yellow-100"
              },
              {
                title: "Emergency Service",
                description: "24/7 emergency HVAC repairs when you need us most",
                icon: "🚨",
                color: "bg-orange-100"
              },
              {
                title: "Preventive Maintenance",
                description: "Regular maintenance to prevent costly breakdowns",
                icon: "🛠️",
                color: "bg-teal-100"
              },
              {
                title: "New System Installation",
                description: "Energy-efficient HVAC system installation and replacement",
                icon: "⚙️",
                color: "bg-indigo-100"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                <div className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center text-2xl mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Before & After: See The Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our HVAC installations and upgrades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1563716725683-2c736a9e0b4e?w=600&q=80"
                  alt="Old inefficient AC unit"
                  width={600}
                  height={400}
                  className="rounded-xl opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-red-600 text-white px-6 py-3 rounded-full font-bold text-xl">
                    BEFORE
                  </span>
                </div>
              </div>
              <p className="text-center mt-4 text-gray-600 font-semibold">
                Old, inefficient unit • High energy bills • Poor cooling
              </p>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80"
                  alt="New energy-efficient HVAC system"
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-green-600 text-white px-6 py-3 rounded-full font-bold text-xl">
                    AFTER
                  </span>
                </div>
              </div>
              <p className="text-center mt-4 text-gray-600 font-semibold">
                New energy-efficient system • Lower bills • Superior comfort
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans Section */}
      <section id="maintenance" className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Protect Your Investment with a Maintenance Plan
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Regular maintenance prevents costly breakdowns, extends equipment life, and keeps your system
                running at peak efficiency.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 text-blue-900 font-bold">
                    ✓
                  </div>
                  <p className="text-blue-100">Priority scheduling for emergencies</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 text-blue-900 font-bold">
                    ✓
                  </div>
                  <p className="text-blue-100">15% discount on all repairs</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 text-blue-900 font-bold">
                    ✓
                  </div>
                  <p className="text-blue-100">Extended equipment warranty</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 text-blue-900 font-bold">
                    ✓
                  </div>
                  <p className="text-blue-100">Annual system inspection and tune-up</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-xl"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="#book"
                  className="flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl"
                >
                  Book Maintenance
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold mb-2">$89</div>
                <div className="text-2xl font-semibold">per year</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✓</span>
                  <span className="text-lg">2 annual inspections</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✓</span>
                  <span className="text-lg">Priority emergency service</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✓</span>
                  <span className="text-lg">15% repair discount</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✓</span>
                  <span className="text-lg">Extended warranty coverage</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">✓</span>
                  <span className="text-lg">Free filter replacement reminder</span>
                </div>
              </div>
              <button className="w-full bg-white text-blue-900 py-4 rounded-lg font-bold text-lg hover:bg-blue-100 transition">
                Sign Up for Maintenance Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section id="financing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Financing Available
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't let cost stop you from a comfortable home. Get approved in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">0%</div>
              <div className="text-xl font-semibold text-gray-700 mb-4">Interest for 18 Months</div>
              <p className="text-gray-600">Same as cash financing with approved credit</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">$89</div>
              <div className="text-xl font-semibold text-gray-700 mb-4">per month*</div>
              <p className="text-gray-600">Starting at with approved credit on new systems</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">5 min</div>
              <div className="text-xl font-semibold text-gray-700 mb-4">Approval Time</div>
              <p className="text-gray-600">Quick online application, instant decision</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Apply for Financing
            </Link>
            <p className="text-gray-600 text-sm mt-4">*Monthly payment example with approved credit. Terms and conditions apply.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4.9 stars from 312 Google reviews - See why Charlotte trusts us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jennifer M.",
                location: "Charlotte, NC",
                text: "Emergency service at 11pm on a Sunday! They had our AC working again in under an hour. Incredible response time.",
                rating: 5
              },
              {
                name: "Robert K.",
                location: "Huntersville, NC",
                text: "Professional installation of our new heat pump. The team was knowledgeable, clean, and explained everything.",
                rating: 5
              },
              {
                name: "Sarah L.",
                location: "Concord, NC",
                text: "Their maintenance plan saved us hundreds in repairs this summer. Worth every penny!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Booking Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Book Your Service Online
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Schedule your HVAC service at your convenience. Choose from available time slots and get instant confirmation.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Call Us Anytime</h3>
                    <a href="tel:19195550456" className="text-blue-900 text-2xl font-bold hover:text-blue-700 transition">
                      (919) 555-0456
                    </a>
                    <p className="text-gray-600">24/7 Emergency Service</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Service Area</h3>
                    <p className="text-gray-900">Charlotte, NC & Surrounding Areas</p>
                    <p className="text-gray-600">Free estimates within 25 miles</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Response Time</h3>
                    <p className="text-gray-900">We answer in under 2 minutes</p>
                    <p className="text-gray-600">Same-day service guaranteed</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">Our Certifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 text-center">
                    NATE Certified
                  </div>
                  <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 text-center">
                    EPA 608 Certified
                  </div>
                  <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 text-center">
                    BBB A+ Rated
                  </div>
                  <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 text-center">
                    Licensed & Insured
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div id="contact" className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Request Service Appointment
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="(919) 555-0456"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  >
                    <option value="">Select a service</option>
                    <option value="ac-repair">AC Repair</option>
                    <option value="ac-install">AC Installation</option>
                    <option value="heating-repair">Heating Repair</option>
                    <option value="heating-install">Heating Installation</option>
                    <option value="duct-cleaning">Duct Cleaning</option>
                    <option value="air-quality">Indoor Air Quality</option>
                    <option value="maintenance">Maintenance Plan</option>
                    <option value="emergency">24/7 Emergency</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Tell us about your HVAC needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition shadow-lg hover:shadow-xl"
                >
                  Request Appointment
                </button>

                <p className="text-center text-gray-600 text-sm">
                  By submitting this form, you agree to be contacted about your HVAC service request.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-xl">CC</span>
                </div>
                <span className="text-xl font-bold">Climate Comfort HVAC</span>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Serving Charlotte since 2008. NATE certified technicians providing top-quality HVAC services with
                24/7 emergency response. Your comfort is our priority.
              </p>
              <div className="flex gap-4">
                <a href="tel:19195550456" className="bg-yellow-400 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-300 transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a href="mailto:info@climatecomfort.com" className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#services" className="text-blue-100 hover:text-white transition">Services</a></li>
                <li><a href="#maintenance" className="text-blue-100 hover:text-white transition">Maintenance Plans</a></li>
                <li><a href="#portfolio" className="text-blue-100 hover:text-white transition">Before & After</a></li>
                <li><a href="#testimonials" className="text-blue-100 hover:text-white transition">Reviews</a></li>
                <li><a href="#financing" className="text-blue-100 hover:text-white transition">Financing</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-4">Our Services</h3>
              <ul className="space-y-3">
                <li><a href="#contact" className="text-blue-100 hover:text-white transition">AC Repair & Install</a></li>
                <li><a href="#contact" className="text-blue-100 hover:text-white transition">Heating Services</a></li>
                <li><a href="#contact" className="text-blue-100 hover:text-white transition">Duct Cleaning</a></li>
                <li><a href="#contact" className="text-blue-100 hover:text-white transition">Air Quality</a></li>
                <li><a href="#contact" className="text-blue-100 hover:text-white transition">24/7 Emergency</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-blue-300 text-sm">
                © 2026 Climate Comfort HVAC. All rights reserved. | Licensed & Insured in NC
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-blue-300 hover:text-white transition">Privacy Policy</a>
                <a href="#" className="text-blue-300 hover:text-white transition">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
