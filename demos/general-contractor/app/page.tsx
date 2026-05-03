import Link from 'next/link'
import { Phone, Mail, Clock, Shield, CheckCircle, Star, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">BrightStar Electric</h1>
                <p className="text-sm text-gray-500">Licensed Master Electrician</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-600 hover:text-primary transition">Services</Link>
              <Link href="#projects" className="text-gray-600 hover:text-primary transition">Projects</Link>
              <Link href="#about" className="text-gray-600 hover:text-primary transition">About</Link>
              <Link href="#reviews" className="text-gray-600 hover:text-primary transition">Reviews</Link>
              <Link href="#contact" className="text-gray-600 hover:text-primary transition">Contact</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <a href="tel:8045550234" className="hidden sm:flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition">
                <Phone className="w-5 h-5" />
                <span>(804) 555-0234</span>
              </a>
              <a href="tel:8045550234" className="md:hidden bg-accent text-white px-4 py-3 rounded-lg">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                Licensed & Insured • BBB Accredited
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Powering Your Life, <span className="text-primary">Safely</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From panel upgrades to EV charger installation, we deliver expert electrical solutions for your home and business. 24/7 emergency service available.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="tel:8045550234"
                  className="flex items-center justify-center bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  24/7 Emergency: (804) 555-0234
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition"
                >
                  Get Free Quote
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="font-semibold">4.9</span>
                  <span className="ml-1">from 200+ reviews</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-500 mr-2" />
                  <span>Since 2008</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop"
                  alt="Electrician installing electrical panel"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Licensed Master</p>
                    <p className="text-sm text-gray-500">NABCEP Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-accent text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-xl font-bold">
              <Phone className="w-6 h-6" />
              <span>Emergency Service Available 24/7</span>
            </div>
            <a
              href="tel:8045550234"
              className="flex items-center space-x-2 bg-white text-accent px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              <span>Call Now</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Electrical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to complex installations, we provide complete electrical solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Panel Upgrade */}
            <div className="group bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Panel Upgrades</h3>
              <p className="text-gray-600 mb-4">
                Upgrade to 200-amp panels for better power capacity and safety. Perfect for modern homes and new appliances.
              </p>
              <div className="text-sm font-semibold text-primary">Starting at $2,500</div>
            </div>

            {/* EV Charger */}
            <div className="group bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition">
                <Shield className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">EV Charger Installation</h3>
              <p className="text-gray-600 mb-4">
                Install Tesla, Ford, or generic EV chargers. We handle permits, panel upgrades, and full installation.
              </p>
              <div className="text-sm font-semibold text-green-600">Starting at $1,200</div>
            </div>

            {/* Panel Replacement */}
            <div className="group bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition">
              <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-200 transition">
                <Shield className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Panel Replacement</h3>
              <p className="text-gray-600 mb-4">
                Safe removal of old, outdated panels and complete replacement with modern, code-compliant systems.
              </p>
              <div className="text-sm font-semibold text-yellow-600">Starting at $3,000</div>
            </div>

            {/* Troubleshooting */}
            <div className="group bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-200 transition">
                <Shield className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Troubleshooting</h3>
              <p className="text-gray-600 mb-4">
                Diagnose and fix flickering lights, tripped breakers, outlets not working, and mysterious electrical issues.
              </p>
              <div className="text-sm font-semibold text-orange-600">Starting at $150</div>
            </div>

            {/* Smart Home */}
            <div className="group bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition">
                <Shield className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Home Integration</h3>
              <p className="text-gray-600 mb-4">
                Install smart switches, thermostats, lighting, and security systems for a connected, automated home.
              </p>
              <div className="text-sm font-semibold text-purple-600">Starting at $500</div>
            </div>

            {/* Lighting */}
            <div className="group bg-gray-50 rounded-xl p-8 hover:bg-blue-50 transition">
              <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pink-200 transition">
                <Shield className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lighting Installation</h3>
              <p className="text-gray-600 mb-4">
                Interior and exterior lighting, recessed lighting, landscape lighting, and security lighting solutions.
              </p>
              <div className="text-sm font-semibold text-pink-600">Starting at $300</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our work in action. From panel upgrades to complete rewiring projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop"
                alt="Electrical panel installation"
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">200-Amp Panel Upgrade</p>
                  <p className="text-sm">Residential • Richmond</p>
                </div>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                alt="EV charger installation"
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Tesla Charger Installation</p>
                  <p className="text-sm">Residential • Henrico</p>
                </div>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop"
                alt="Commercial electrical work"
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Commercial Panel Upgrade</p>
                  <p className="text-sm">Commercial • Short Pump</p>
                </div>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&h=400&fit=crop"
                alt="Lighting installation"
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Landscape Lighting</p>
                  <p className="text-sm">Residential • Chesterfield</p>
                </div>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Smart home installation"
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Smart Home Installation</p>
                  <p className="text-sm">Residential • Glen Allen</p>
                </div>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop"
                alt="Electrical wiring"
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Full Home Rewiring</p>
                  <p className="text-sm">Residential • Midlothian</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop"
                  alt="Our team of electricians"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-primary">15+</p>
                    <p className="text-sm text-gray-600">Years</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">500+</p>
                    <p className="text-sm text-gray-600">Projects</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">100%</p>
                    <p className="text-sm text-gray-600">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose BrightStar Electric?
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Licensed Master Electrician</h3>
                    <p className="text-gray-600">Fully licensed, bonded, and insured. We meet all local and state codes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">NABCEP Certified</h3>
                    <p className="text-gray-600">Certified in solar and renewable energy installation. EV charger specialists.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Transparent Pricing</h3>
                    <p className="text-gray-600">Free estimates, no hidden fees, fixed-price diagnostics.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">24/7 Emergency Service</h3>
                    <p className="text-gray-600">We answer in under 2 minutes. Same-day service available.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Warranty Included</h3>
                    <p className="text-gray-600">Complete warranty on all labor and materials. 100% satisfaction guaranteed.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:8045550234"
                  className="flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Your Free Estimate
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Meet Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <Star className="w-6 h-6 text-yellow-500" />
              <Star className="w-6 h-6 text-yellow-500" />
              <Star className="w-6 h-6 text-yellow-500" />
              <Star className="w-6 h-6 text-yellow-500" />
              <Star className="w-6 h-6 text-yellow-500" />
              <span className="ml-2 font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600">(200+ reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Outstanding service! They installed a 200-amp panel and our home has never been safer. Highly recommend for any electrical work."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-primary">JM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">James M.</p>
                  <p className="text-sm text-gray-500">Residential Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Installed our Tesla charger and couldn't be happier. Professional, on-time, and fair pricing. Best electrician in Richmond!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-green-600">SK</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah K.</p>
                  <p className="text-sm text-gray-500">EV Charger Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "We've used BrightStar for multiple projects - panel upgrades, rewiring, and smart home installation. Always top quality!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-purple-600">RT</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Robert T.</p>
                  <p className="text-sm text-gray-500">Commercial Customer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://g.page/your-page?view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              <Star className="w-5 h-5 mr-2" />
              View All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Power Up Your Home?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get a free, no-obligation estimate for your electrical project. We respond within 2 hours during business hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6" />
                  <span className="text-lg">Phone: (804) 555-0234</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6" />
                  <span className="text-lg">Email: info@brightstarelectric.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6" />
                  <span className="text-lg">24/7 Emergency Service Available</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Estimate</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="(555) 555-1234"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Panel Upgrade</option>
                    <option>EV Charger Installation</option>
                    <option>Panel Replacement</option>
                    <option>Troubleshooting</option>
                    <option>Smart Home Installation</option>
                    <option>Lighting</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition"
                >
                  Submit Estimate Request
                </button>
              </form>
              <p className="text-center text-sm text-gray-500 mt-4">
                We respect your privacy. No spam, ever.
              </p>
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
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">BrightStar Electric</h3>
                  <p className="text-sm text-gray-400">Licensed Master Electrician</p>
                </div>
              </div>
              <p className="text-gray-400">
                Professional electrical services for residential and commercial clients since 2008.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#services" className="hover:text-white transition">Panel Upgrades</Link></li>
                <li><Link href="#services" className="hover:text-white transition">EV Chargers</Link></li>
                <li><Link href="#services" className="hover:text-white transition">Panel Replacement</Link></li>
                <li><Link href="#services" className="hover:text-white transition">Smart Home</Link></li>
                <li><Link href="#services" className="hover:text-white transition">Lighting</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: (804) 555-0234</li>
                <li>Email: info@brightstarelectric.com</li>
                <li>24/7 Emergency Service</li>
                <li>Richmond, VA Area</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800 text-xs px-3 py-1 rounded">Licensed</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded">Insured</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded">Bonded</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded">NABCEP</span>
                <span className="bg-gray-800 text-xs px-3 py-1 rounded">BBB</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} BrightStar Electric. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
