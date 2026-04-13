"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const timeSlots = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "1:00 PM - 3:00 PM",
  "3:00 PM - 5:00 PM",
  "5:00 PM - 7:00 PM",
  "7:00 PM - 9:00 PM",
];

const services = [
  { name: "ATV Rentals", price: "$199/day", icon: "🏍️", desc: "Premium Polaris Sportsman 450 ATVs ready for adventure on our 50+ mile trail system." },
  { name: "Guided Tours", price: "$249/person", icon: "🗺️", desc: "Expert-led tours through scenic trails with wildlife viewing and breathtaking vistas." },
  { name: "Private Events", price: "Custom Quote", icon: "🎉", desc: "Corporate retreats, birthday parties, and group adventures tailored to your needs." },
  { name: "Safety Gear", price: "$49/day", icon: "🛡️", desc: "Full safety equipment including helmets, goggles, gloves, and protective padding." },
  { name: "Rider Training", price: "$99/session", icon: "🎓", desc: "Beginner-friendly training sessions with certified instructors for all skill levels." },
  { name: "Group Packages", price: "From $149/person", icon: "👥", desc: "Discounted group rates for parties of 6 or more. Perfect for team building." },
];

const galleryPhotos = [
  "/images/gallery/photo1.jpg",
  "/images/gallery/photo2.jpg",
  "/images/gallery/photo3.jpg",
  "/images/gallery/photo4.jpg",
  "/images/gallery/photo5.jpg",
  "/images/gallery/photo6.jpg",
  "/images/gallery/photo7.jpg",
  "/images/gallery/photo8.jpg",
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("5:00 PM - 7:00 PM");
  const [selectedService, setSelectedService] = useState("ATV Rentals");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setSelectedDate(today);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-lg">
                M2M
              </div>
              <span
                className={`text-xl font-bold ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Miles 2 Miles
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className={`text-sm font-medium ${
                  scrolled ? "text-gray-700 hover:text-orange-600" : "text-white/90 hover:text-white"
                } transition-colors`}
              >
                About
              </a>
              <a
                href="#services"
                className={`text-sm font-medium ${
                  scrolled ? "text-gray-700 hover:text-orange-600" : "text-white/90 hover:text-white"
                } transition-colors`}
              >
                Services
              </a>
              <a
                href="#gallery"
                className={`text-sm font-medium ${
                  scrolled ? "text-gray-700 hover:text-orange-600" : "text-white/90 hover:text-white"
                } transition-colors`}
              >
                Gallery
              </a>
              <a
                href="#contact"
                className={`text-sm font-medium ${
                  scrolled ? "text-gray-700 hover:text-orange-600" : "text-white/90 hover:text-white"
                } transition-colors`}
              >
                Contact
              </a>
              <a
                href="#services"
                className="px-5 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-900 via-red-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
            animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -50, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ride the{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Wild
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience 50+ miles of thrilling ATV trails at Miles 2 Miles Adventure Park.
            Unleash your spirit of adventure on our fleet of Polaris Sportsman 450 ATVs.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#services"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full text-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all"
            >
              Book Your Adventure
            </a>
            <a
              href="#about"
              className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Miles 2 Miles
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Miles 2 Miles ATV Adventure Park is your premier destination for off-road excitement.
                Located on over 500 acres of diverse terrain, our park features 50+ miles of maintained
                trails winding through forests, hills, mud pits, and scenic overlooks.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our fleet of 15 Polaris Sportsman 450 ATVs are meticulously maintained and ready to deliver
                an unforgettable riding experience. Whether you&apos;re a first-time rider or a seasoned
                off-road enthusiast, our trails offer something for everyone.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-orange-600">15</div>
                  <div className="text-sm text-gray-500">Polaris Sportsman 450 ATVs</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-red-600">50+</div>
                  <div className="text-sm text-gray-500">Miles of Trails</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <div className="text-9xl mb-6">🏔️</div>
                <motion.div
                  className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full text-lg"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  🏍️ Adventure Awaits!
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of ATV adventures and book your ride today
            </p>
          </div>

          {/* Booking Calendar */}
          <motion.div
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Book Your Adventure
            </h3>

            {/* Date Picker */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full md:w-auto px-6 py-3 border-2 border-gray-200 rounded-xl text-orange-600 font-semibold focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-lg"
              />
            </div>

            {/* Time Slots */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Select Time Slot
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      selectedTime === slot
                        ? "border-orange-500 bg-orange-50 shadow-md"
                        : "border-gray-200 hover:border-orange-300 hover:bg-orange-50/50"
                    }`}
                  >
                    <div className="font-semibold text-gray-900">{slot}</div>
                    <div
                      className={`text-sm mt-1 ${
                        selectedTime === slot
                          ? "text-orange-600 font-semibold"
                          : "text-orange-500"
                      }`}
                    >
                      {selectedTime === slot ? "Selected: 15 ATVs" : "Available: 15 ATVs"}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Service Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Select Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => setSelectedService("ATV Rentals")}
                  className={`p-4 rounded-xl border-2 transition-all text-center ${
                    selectedService === "ATV Rentals"
                      ? "border-orange-500 bg-orange-50 shadow-md"
                      : "border-gray-200 hover:border-orange-300"
                  }`}
                >
                  <div className="font-bold text-gray-900">ATV Rentals</div>
                  <div className="text-orange-600 font-semibold">$199/day</div>
                </button>
                <button
                  onClick={() => setSelectedService("Guided Tours")}
                  className={`p-4 rounded-xl border-2 transition-all text-center ${
                    selectedService === "Guided Tours"
                      ? "border-orange-500 bg-orange-50 shadow-md"
                      : "border-gray-200 hover:border-orange-300"
                  }`}
                >
                  <div className="font-bold text-gray-900">Guided Tours</div>
                  <div className="text-orange-600 font-semibold">$249/person</div>
                </button>
                <button
                  onClick={() => setSelectedService("Private Events")}
                  className={`p-4 rounded-xl border-2 transition-all text-center ${
                    selectedService === "Private Events"
                      ? "border-orange-500 bg-orange-50 shadow-md"
                      : "border-gray-200 hover:border-orange-300"
                  }`}
                >
                  <div className="font-bold text-gray-900">Private Events</div>
                  <div className="text-orange-600 font-semibold">Custom Quote</div>
                </button>
              </div>
            </div>

            {/* Confirm Booking */}
            <div className="text-center">
              <button className="px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full text-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all">
                Confirm Booking
              </button>
            </div>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.name}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <div className="text-orange-600 font-semibold mb-3">{service.price}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check out the action from Miles 2 Miles ATV Adventure Park
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPhotos.map((photo, idx) => (
              <motion.div
                key={photo}
                className="relative group overflow-hidden rounded-2xl aspect-square"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Image
                  src={photo}
                  alt={`ATV Park Gallery Photo ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold">
                    Photo {idx + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-orange-900 via-red-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Have questions or ready to book your ATV adventure? Reach out to us and our team
                will get back to you within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Location</div>
                    <div className="text-white font-medium">500 Acre Adventure Park, Trail Country</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">
                    📞
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Phone</div>
                    <div className="text-white font-medium">(555) 123-RIDE</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">
                    ✉️
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Email</div>
                    <div className="text-white font-medium">info@miles2miles.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">
                    🕐
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Hours</div>
                    <div className="text-white font-medium">Open Daily 8:00 AM - 9:00 PM</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your adventure plans..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all text-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-lg">
                  M2M
                </div>
                <span className="text-xl font-bold text-white">Miles 2 Miles</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your premier ATV adventure destination with 50+ miles of trails and 15 top-of-the-line
                Polaris Sportsman 450 ATVs.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">Services</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-orange-400 transition-colors">Gallery</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 500 Acre Adventure Park</li>
                <li>📞 (555) 123-RIDE</li>
                <li>✉️ info@miles2miles.com</li>
                <li>🕐 Open Daily 8AM - 9PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Miles 2 Miles ATV Adventure Park. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
