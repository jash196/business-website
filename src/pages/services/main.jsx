import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from '../../components/Layout.jsx';
import PageHero from '../../components/PageHero.jsx';
import SectionHeading from '../../components/SectionHeading.jsx';
import Reveal from '../../components/Reveal.jsx';
import ServiceCard from '../../components/ServiceCard.jsx';
import TestimonialCarousel from '../../components/TestimonialCarousel.jsx';
import CTA from '../../components/CTA.jsx';
import { services } from '../../data.js';
import '../../styles.css';

const process = [
  {
    title: 'Discover',
    text: 'We audit your business, customers, competitors, positioning, website, and current growth channels.'
  },
  {
    title: 'Design',
    text: 'We create a clear strategy, sitemap, content direction, visual system, and conversion-focused user journey.'
  },
  {
    title: 'Deliver',
    text: 'We build, test, launch, and refine the experience so your team has a complete growth foundation.'
  }
];

function ServicesPage() {
  return (
    <Layout activePage="Services">
      <PageHero
        eyebrow="Services"
        title="Everything your business website needs to look premium and convert better."
        text="Choose full-service support or focused help across strategy, design, development, content, automation, and analytics."
      />

      <section className="section">
        <SectionHeading
          eyebrow="Capabilities"
          title="Services for ambitious companies."
          text="Each service is built to work independently or together as a complete growth system."
          align="center"
        />
        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Process"
          title="A simple process from idea to launch."
          text="We keep projects structured so every decision supports your business goal."
        />
        <div className="values-grid">
          {process.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <article className="value-card">
                <span className="eyebrow">Step {index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <TestimonialCarousel />
      <CTA />
    </Layout>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ServicesPage />
  </React.StrictMode>
);
