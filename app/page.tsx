'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] },
  }),
}

const projects = [
  {
    title: 'STL Floor Plan',
    desc: 'AI-powered floor plan generation tool',
    url: 'https://frontend-molt-studios.vercel.app',
    tag: 'AI Product',
    color: '#667eea',
  },
  {
    title: 'OpenDrones',
    desc: 'Drone battery e-commerce platform',
    url: 'https://opendrones.vercel.app',
    tag: 'E-Commerce',
    color: '#43e97b',
  },
  {
    title: 'Miles 2 Miles',
    desc: 'ATV park booking and management system',
    url: 'https://miles-2-miles.vercel.app',
    tag: 'Booking',
    color: '#f093fb',
  },
  {
    title: 'Mission Control',
    desc: 'Real-time multi-agent monitoring dashboard',
    url: 'https://mission-control-api-gamma.vercel.app',
    tag: 'Dashboard',
    color: '#4facfe',
  },
  {
    title: 'Research Hub',
    desc: 'AI-driven research pipeline and knowledge base',
    url: 'https://molt-research.vercel.app',
    tag: 'Research',
    color: '#f59e0b',
  },
]

const stats = [
  { value: '4B+', label: 'Tokens Processed', detail: 'Equivalent to reading every book in the Library of Congress 1,000 times' },
  { value: '9', label: 'AI Agents', detail: 'Running 24/7 across research, development, and operations' },
  { value: '24/7', label: 'Always On', detail: 'Agents that never sleep, never miss a lead, never stop learning' },
  { value: '5+', label: 'Years Experience', detail: 'Deep software engineering background powering every solution' },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  return (
    <main className={styles.main}>
      {/* Background */}
      <div className={styles.bg} />
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />
      <div className={styles.bgOrb3} />

      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>M</span>
            <span className={styles.logoText}>Molt Studios</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact" className={styles.navCta}>Get in Touch</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <motion.section
        ref={heroRef}
        className={styles.hero}
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroTag}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            A subsidiary of Reynoso Industries
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            We build AI that
            <br />
            <span className={styles.gradientText}>actually works.</span>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Multi-agent orchestration. Automated workflows. Custom AI solutions
            that transform how businesses operate. We don't just talk about AI —
            we ship it every single day.
          </motion.p>

          <motion.div
            className={styles.heroCtas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a href="#contact" className={styles.btnPrimary}>
              Start a Project
            </a>
            <a href="#work" className={styles.btnSecondary}>
              See Our Work →
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Bar */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={styles.statCard}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className={styles.servicesSection} id="about">
        <div className={styles.sectionInner}>
          <motion.div
            className={styles.sectionTag}
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            What We Do
          </motion.div>
          <motion.h2
            className={styles.sectionTitle}
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            AI-powered solutions
            <br />
            built by people who use them.
          </motion.h2>

          <div className={styles.servicesGrid}>
            {[
              {
                icon: '🤖',
                title: 'Multi-Agent Orchestration',
                desc: 'Teams of AI agents working together 24/7 — researching, building, deploying. Powered by OpenClaw, our custom orchestration framework.',
              },
              {
                icon: '⚡',
                title: 'Automated Workflows',
                desc: 'Lead generation, research pipelines, content creation, customer support — automated end-to-end with intelligent agents.',
              },
              {
                icon: '🛠',
                title: 'Custom AI Solutions',
                desc: 'Purpose-built AI tools for your specific business needs. Not chatbots — real systems that do real work autonomously.',
              },
              {
                icon: '📊',
                title: 'Intelligent Dashboards',
                desc: 'Real-time monitoring and control for your AI workforce. See what your agents are doing, optimize performance, scale operations.',
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                className={styles.serviceCard}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className={styles.workSection} id="work">
        <div className={styles.sectionInner}>
          <motion.div
            className={styles.sectionTag}
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Work
          </motion.div>
          <motion.h2
            className={styles.sectionTitle}
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Battle-tested on
            <br />
            real products.
          </motion.h2>

          <div className={styles.projectsGrid}>
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectCard}
                custom={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div
                  className={styles.projectAccent}
                  style={{ background: `linear-gradient(135deg, ${project.color}40, ${project.color}10)` }}
                />
                <div className={styles.projectTag} style={{ color: project.color }}>
                  {project.tag}
                </div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <span className={styles.projectLink} style={{ color: project.color }}>
                  Visit →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className={styles.behindSection}>
        <div className={styles.sectionInner}>
          <motion.div
            className={styles.sectionTag}
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Behind the Scenes
          </motion.div>
          <motion.h2
            className={styles.sectionTitle}
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our agents never sleep.
          </motion.h2>
          <motion.p
            className={styles.sectionDesc}
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            9 AI agents running around the clock — researching, building, deploying.
            Here&apos;s what that actually looks like.
          </motion.p>

          <div className={styles.screenshotsGrid}>
            <motion.div
              className={styles.screenshotCard}
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img src="/screenshots/discord-agent-activity.png" alt="AI agents clocking in and out on Discord" className={styles.screenshot} />
              <div className={styles.screenshotLabel}>Agents clocking in/out via Discord</div>
            </motion.div>

            <motion.div
              className={styles.screenshotCard}
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img src="/screenshots/discord-jin-research.png" alt="Research completion report" className={styles.screenshot} />
              <div className={styles.screenshotLabel}>Research completion reports</div>
            </motion.div>

            <motion.div
              className={styles.screenshotCard}
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img src="/screenshots/mission-control-leads.png" alt="Mission Control lead dashboard" className={styles.screenshot} />
              <div className={styles.screenshotLabel}>Mission Control dashboard</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className={styles.contactSection} id="contact">
        <motion.div
          className={styles.contactCard}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.contactAccent} />
          <h2>Let&apos;s build something
            <br />
            <span className={styles.gradientText}>extraordinary.</span>
          </h2>
          <p>
            Whether you need a full AI automation system or a single intelligent workflow,
            we&apos;d love to hear about your project.
          </p>
          <div className={styles.contactCtas}>
            <a href="mailto:hello@moltstudios.app" className={styles.btnPrimary}>
              hello@moltstudios.app
            </a>
            <a href="https://discord.com/invite/clawd" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
              Join Our Discord
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <span className={styles.logoMark}>M</span>
            <span>Molt Studios</span>
          </div>
          <p>A subsidiary of Reynoso Industries</p>
          <p className={styles.footerCopy}>© 2026 Molt Studios. We genuinely love this stuff.</p>
        </div>
      </footer>
    </main>
  )
}
