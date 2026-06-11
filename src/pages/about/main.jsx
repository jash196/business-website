import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from '../../components/Layout.jsx';
import PageHero from '../../components/PageHero.jsx';
import SectionHeading from '../../components/SectionHeading.jsx';
import Reveal from '../../components/Reveal.jsx';
import RandomImage from '../../components/RandomImage.jsx';
import CTA from '../../components/CTA.jsx';
import '../../styles.css';

const values = [
  {
    title: 'Clarity before complexity',
    text: 'We turn scattered ideas into focused positioning, simple offers, and measurable action plans.'
  },
  {
    title: 'Design with purpose',
    text: 'Every interaction, page, and section is built to help visitors understand why they should trust you.'
  },
  {
    title: 'Execution that compounds',
    text: 'We create reusable systems, not one-time campaigns, so your team can keep improving after launch.'
  }
];

const timeline = [
  {
    year: '2014',
    title: 'Started as a strategy studio',
    text: 'NexaWorks began by helping founders sharpen their positioning and launch stronger market offers.'
  },
  {
    year: '2018',
    title: 'Expanded into digital growth',
    text: 'We added website strategy, paid growth, SEO, and marketing operations to connect strategy with revenue.'
  },
  {
    year: '2026',
    title: 'A modern growth partner',
    text: 'Today, we combine brand, web, analytics, and operations into one practical growth system.'
  }
];

function AboutPage() {
  return (
    <Layout activePage="About">
      <PageHero
        eyebrow="About NexaWorks"
        title="A business partner for brands that want sharper growth."
        text="We are a team of strategists, designers, developers, and operators helping ambitious companies build better business systems."
      />

      <section className="split-section">
        <Reveal className="split-copy">
          <SectionHeading
            eyebrow="Our approach"
            title="We combine strategy, design, and execution under one roof."
            text="Most business websites fail because they look nice but do not communicate value. We solve that by connecting messaging, user experience, visual design, conversion strategy, and performance measurement."
          />
          <ul className="check-list">
            <li>Discovery workshops for clear goals</li>
            <li>Premium design systems for brand consistency</li>
            <li>Measurable launch plans for long-term growth</li>
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <RandomImage alt="Business professionals planning a strategy" />
        </Reveal>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Values"
          title="Professional principles behind every project."
          text="Our work is designed to be useful, beautiful, measurable, and easy for your team to maintain."
          align="center"
        />
        <div className="values-grid">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 90}>
              <article className="value-card">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Journey"
          title="Built through years of practical business work."
          text="We have grown from a consulting studio into a complete digital growth partner."
        />
        <div className="timeline">
          {timeline.map((item, index) => (
            <Reveal key={item.year} delay={index * 80}>
              <article className="timeline-item">
                <span>{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </Layout>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AboutPage />
  </React.StrictMode>
);
