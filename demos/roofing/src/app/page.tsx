import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SR</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Summit Roofing Co.</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#services" className="text-gray-700 hover:text-blue-900 font-medium transition">
                Services
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-900 font-medium transition">
                About Us
              </Link>
              <Link href="#portfolio" className="text-gray-700 hover:text-blue-900 font-medium transition">
                Portfolio
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-blue-900 font-medium transition">
                Testimonials
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-900 font-medium transition">
                Contact
              </Link>
            </nav>

            {/* Contact Info */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:17045550123" className="text-blue-900 font-bold text-lg hover:text-blue-700 transition">
                (704) 555-0123
              </a>
              <Link
                href="#contact"
                className="bg-red-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-700 transition shadow-lg hover:shadow-xl"
              >
                Get Free Quote
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Roof installation"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold mb-4">
                GAF Certified • 30 Years Experience
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Protecting Charlotte Homes From The Top Down
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Trusted by over 900 families in the Charlotte area. We provide premium roofing solutions with
                guaranteed satisfaction. Get your free roof inspection today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="tel:17045550123"
                  className="flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now: (704) 555-0123
                </Link>
                <Link
                  href="#contact"
                  className="flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Free Inspection
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-blue-100">600+ Google Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-100">A+ BBB Accredited</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-100">Licensed & Insured</span>
                </div>
              </div>
            </div>

            {/* Before/After Preview */}
            <div className="relative">
              <div className="relative bg-blue-800 rounded-2xl p-4 shadow-2xl">
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                    alt="New roof installation"
                    width={600}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <p className="text-blue-100">Project Completed</p>
                    <p className="font-bold">124 Homes This Year</p>
                  </div>
                  <Link
                    href="#portfolio"
                    className="text-yellow-400 font-semibold hover:text-yellow-300 transition"
                  >
                    View Portfolio →
                  </Link>
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
              Our Roofing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive roofing solutions for residential and commercial properties across the Charlotte area
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Roof Replacement",
                description: "Complete roof replacement with premium shingles and expert installation",
                icon: "🛠️",
                color: "bg-blue-100"
              },
              {
                title: "Roof Repair",
                description: "Quick and durable repairs for leaks, storm damage, and wear",
                icon: "🔧",
                color: "bg-green-100"
              },
              {
                title: "Roof Inspection",
                description: "Comprehensive 25-point inspections to identify potential issues",
                icon: "🔍",
                color: "bg-yellow-100"
              },
              {
                title: "Emergency Service",
                description: "24/7 storm damage response and immediate repairs",
                icon: "⚡",
                color: "bg-red-100"
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

          {/* Service Area */}
          <div className="mt-16 bg-blue-900 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Serving Charlotte & Surrounding Areas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-yellow-400 mb-2">Core Service Area</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Charlotte, NC</li>
                  <li>• Concord, NC</li>
                  <li>• Matthews, NC</li>
                  <li>• Huntersville, NC</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-yellow-400 mb-2">Extended Service</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Pineville, NC</li>
                  <li>• Fort Mill, SC</li>
                  <li>• Rock Hill, SC</li>
                  <li>• Monroe, NC</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-yellow-400 mb-2">Emergency Response</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• 24/7 Storm Damage</li>
                  <li>• Immediate Repairs</li>
                  <li>• After-Hours Service</li>
                  <li>• Insurance Claims Help</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80"
                  alt="Roofing team at work"
                  width={600}
                  height={450}
                  className="rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 rounded-xl p-6 shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-gray-900">30+</div>
                <div className="text-gray-900 font-semibold">Years Experience</div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trusted by Thousands of Charlotte Families
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Summit Roofing Co. has been protecting Charlotte homes since 1995. As a GAF Master Elite certified
                contractor, we offer the highest quality materials and workmanship guaranteed by the GAF
                warranty program.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of licensed professionals has completed over 900 roofing projects across the
                Charlotte metro area. Every project is backed by our comprehensive warranty and customer satisfaction guarantee.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">900+</div>
                  <div className="text-gray-600 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">600+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">25+</div>
                  <div className="text-gray-600 text-sm">Team Members</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="#contact"
                  className="bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our portfolio of completed roofing projects across the Charlotte area
            </p>
          </div>

          {/* Featured Project */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80"
              alt="Complete roof replacement project"
              width={1200}
              height={600}
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8 md:p-12">
              <div className="text-white">
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  Featured Project
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-3 mb-2">
                  Complete Roof Replacement - South Charlotte
                </h3>
                <p className="text-blue-200 mb-4">
                  2,400 sq ft Colonial - asphalt shingles - completed March 2026
                </p>
                <div className="flex gap-4">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    GAF Certified
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    25-Year Warranty
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80",
                title: "Storm Damage Repair",
                area: "Huntersville, NC"
              },
              {
                src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
                title: "New Installation",
                area: "Concord, NC"
              },
              {
                src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
                title: "Roof Replacement",
                area: "Charlotte, NC"
              },
              {
                src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
                title: "Commercial Project",
                area: "Ballantyne, NC"
              },
              {
                src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
                title: "Metal Roof",
                area: "Pineville, NC"
              },
              {
                src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
                title: "Roof Inspection",
                area: "Matthews, NC"
              }
            ].map((project, index) => (
              <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={project.src}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">{project.title}</h3>
                    <p className="text-blue-200 text-sm">{project.area}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition"
            >
              View All Projects →
            </Link>
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
              Read reviews from homeowners who trusted Summit Roofing Co.
            </p>
          </div>

          {/* Google Reviews Summary */}
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-8 h-8 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg
                    className="w-8 h-8 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-2">4.9</div>
                <p className="text-gray-600 text-lg">
                  600+ Google Reviews • A+ Rated by BBB
                </p>
              </div>
              <div className="flex-1 max-w-xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-gray-700 text-lg mb-4">
                    "Summit Roofing did an amazing job on our roof replacement. The team was professional, cleaned up
                    thoroughly, and the new roof looks fantastic! Highly recommend their services."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold">
                      TM
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Timothy M.</p>
                      <p className="text-gray-600">Charlotte, NC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Concord, NC",
                text: "They fixed a major leak in one day and kept everything clean. Their customer service is top-notch!",
                rating: 5
              },
              {
                name: "Michael Davis",
                location: "Huntersville, NC",
                text: "Professional, reliable, and affordable. Got our roof inspected and they caught issues we didn't know about.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                location: "Matthews, NC",
                text: "The team was punctual and the quality of work is exceptional. Best roofing experience we've ever had!",
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get Your Free Roof Inspection Today
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Schedule your free 25-point roof inspection with Summit Roofing Co. Our experts will assess your roof's
                condition and provide you with a detailed report and no-obligation quote.
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
                    <a href="tel:17045550123" className="text-blue-900 text-2xl font-bold hover:text-blue-700 transition">
                      (704) 555-0123
                    </a>
                    <p className="text-gray-600">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                    <a href="mailto:info@summitroofing.com" className="text-blue-900 text-xl font-semibold hover:text-blue-700 transition">
                      info@summitroofing.com
                    </a>
                    <p className="text-gray-600">We typically respond within 1 hour</p>
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
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">Our Certifications</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700">
                    GAF Certified
                  </div>
                  <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700">
                    GAF Master Elite
                  </div>
                  <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700">
                    A+ BBB Rated
                  </div>
                  <div className="bg-gray-100 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700">
                    Licensed & Insured
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Request Your Free Quote
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
                    placeholder="(704) 555-0123"
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
                    <option value="inspection">Roof Inspection</option>
                    <option value="repair">Roof Repair</option>
                    <option value="replacement">Roof Replacement</option>
                    <option value="storm-damage">Storm Damage Repair</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Tell us about your roofing needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition shadow-lg hover:shadow-xl"
                >
                  Get My Free Quote
                </button>

                <p className="text-center text-gray-600 text-sm">
                  By submitting this form, you agree to be contacted about your roofing needs.
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
                  <span className="text-blue-900 font-bold text-xl">SR</span>
                </div>
                <span className="text-xl font-bold">Summit Roofing Co.</span>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Protecting Charlotte homes since 1995. As a GAF Master Elite certified contractor, we deliver
                premium roofing solutions with guaranteed satisfaction.
              </p>
              <div className="flex gap-4">
                <a href="tel:17045550123" className="bg-yellow-400 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-300 transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a href="mailto:info@summitroofing.com" className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
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
                <li><Link href="#services" className="text-blue-100 hover:text-white transition">Services</Link></li>
                <li><Link href="#about" className="text-blue-100 hover:text-white transition">About Us</Link></li>
                <li><Link href="#portfolio" className="text-blue-100 hover:text-white transition">Portfolio</Link></li>
                <li><Link href="#testimonials" className="text-blue-100 hover:text-white transition">Testimonials</Link></li>
                <li><Link href="#contact" className="text-blue-100 hover:text-white transition">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-4">Our Services</h3>
              <ul className="space-y-3">
                <li><a href="#contact" className="text-blue-100 hover:text-white transition">Roof Replacement</a></li>
                <li><a href="#contact" className="text-blue-100 hover:text-white transition">Roof Repair</a></li>
                <li><a href="#contact" className="text-blue-100 hover:text-white transition">Roof Inspection</a></li>
                <li><a href="#contact" className="text-blue-100 hover:text-white transition">Storm Damage Repair</a></li>
                <li><a href="#contact" className="text-blue-100 hover:text-white transition">24/7 Emergency Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-blue-300 text-sm">
                © 2026 Summit Roofing Co. All rights reserved. | Licensed & Insured in NC
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
