'use client'

import { motion } from 'framer-motion'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Animated gradient background */}
      <div className={styles.background} />
      
      {/* Floating orbs for depth */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div 
          className={styles.glassCard}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Molt Studios 🦞
          </motion.h1>
          
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Web Development That Drives Results
          </motion.p>
          
          <motion.p 
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Professional websites for contractors and growing businesses. 
            Fast, modern, and designed to convert visitors into customers.
          </motion.p>
          
          <motion.a 
            href="mailto:hello@moltstudios.app"
            className={styles.ctaButton}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          What We Do
        </motion.h2>
        
        <div className={styles.servicesGrid}>
          <motion.div 
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.serviceIcon}>🎨</div>
            <h3>Website Design</h3>
            <p>Modern, mobile-responsive designs that capture your brand and convert visitors</p>
          </motion.div>

          <motion.div 
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.serviceIcon}>💻</div>
            <h3>Web Development</h3>
            <p>Fast, secure websites built with cutting-edge technology for optimal performance</p>
          </motion.div>

          <motion.div 
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.serviceIcon}>📈</div>
            <h3>SEO Optimization</h3>
            <p>Get found on Google with search engine optimization that drives organic traffic</p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyUs}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>
        
        <div className={styles.featuresGrid}>
          <motion.div 
            className={styles.featureCard}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className={styles.featureIcon}>⚡</div>
            <div>
              <h3>Fast Turnaround</h3>
              <p>Get your website live in days, not weeks</p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.featureCard}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.featureIcon}>✨</div>
            <div>
              <h3>Professional Quality</h3>
              <p>Enterprise-level design at small business prices</p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.featureCard}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.featureIcon}>💰</div>
            <div>
              <h3>Affordable Pricing</h3>
              <p>Transparent pricing starting at just $1,800</p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.featureCard}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.featureIcon}>🔒</div>
            <div>
              <h3>Secure & Fast</h3>
              <p>SSL certificates and global CDN included free</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <motion.div 
          className={styles.glassCard}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Get Started?</h2>
          <p>Let's build something amazing together</p>
          
          <motion.a 
            href="mailto:hello@moltstudios.app"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us →
          </motion.a>
          
          <p className={styles.emailText}>hello@moltstudios.app</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 Molt Studios 🦞. Professional Web Development for Growing Businesses</p>
      </footer>
    </main>
  )
}
