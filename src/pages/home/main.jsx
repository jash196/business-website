import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Layout from '../../components/Layout.jsx';
import SectionHeading from '../../components/SectionHeading.jsx';
import Reveal from '../../components/Reveal.jsx';
import RandomImage from '../../components/RandomImage.jsx';
import TestimonialCarousel from '../../components/TestimonialCarousel.jsx';
import ServiceCard from '../../components/ServiceCard.jsx';
import CTA from '../../components/CTA.jsx';
import { services, stats } from '../../data.js';
import '../../styles.css';

function HomePage() {
  return (
    <Layout activePage="Home">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">Business growth agency</span>
          <h1>Build a brand that grows beyond ordinary.</h1>
          <p>
            NexaWorks creates premium business websites, clear growth strategies, and digital systems for companies that want better leads, better operations, and better customer trust.
          </p>
          <div className="hero-actions">
            <a className="button" href="/contact/">
              Start your project <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="/portfolio/">
              View case studies <PlayCircle size={18} />
            </a>
          </div>
        </div>
        <div className="hero-media" aria-label="Business collaboration image">
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
              alt="Business team collaborating in a modern office"
            />
          </div>
          <div className="floating-card">
            <strong>240%</strong>
            <span>Average lift in qualified campaign performance after our growth redesigns.</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80}>
              <article className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="What we do"
          title="Business services designed for visibility, trust, and conversion."
          text="From brand strategy to analytics, our services connect high-level direction with practical execution."
          align="center"
        />
        <div className="services-grid">
          {services.slice(0, 6).map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="split-section">
        <Reveal>
          <RandomImage />
        </Reveal>
        <Reveal className="split-copy" delay={120}>
          <span className="eyebrow">Fresh visual experience</span>
          <h2>Every page feels modern, responsive, and ready for real business use.</h2>
          <p>
            This template includes animated sections, a business carousel, professional cards, curated imagery, and clean multi-page routing using separate HTML files for each page.
          </p>
          <ul className="check-list">
            <li>Multi-page React architecture, not a React Router SPA</li>
            <li>Responsive layout for mobile, tablet, and desktop</li>
            <li>Reusable components for faster scaling</li>
          </ul>
        </Reveal>
      </section>

      <TestimonialCarousel />
      <CTA />
    </Layout>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
