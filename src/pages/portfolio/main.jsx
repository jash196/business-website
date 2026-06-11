import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from '../../components/Layout.jsx';
import PageHero from '../../components/PageHero.jsx';
import SectionHeading from '../../components/SectionHeading.jsx';
import Reveal from '../../components/Reveal.jsx';
import CTA from '../../components/CTA.jsx';
import { projects } from '../../data.js';
import '../../styles.css';

function PortfolioPage() {
  return (
    <Layout activePage="Portfolio">
      <PageHero
        eyebrow="Portfolio"
        title="Selected projects with measurable business impact."
        text="Explore examples of brand, website, and growth system work designed for stronger trust and better performance."
      />

      <section className="section">
        <SectionHeading
          eyebrow="Case studies"
          title="Premium digital work for modern business teams."
          text="These sample projects show how the website structure can present a professional agency portfolio."
          align="center"
        />
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 90}>
              <article className="project-card">
                <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
                <div className="project-content">
                  <div className="project-meta">
                    <span>{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <strong className="result-pill">{project.result}</strong>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="What clients get"
          title="A complete launch-ready experience, not just a design mockup."
          text="Each engagement can include strategy notes, page content, React components, responsive styling, deployment guidance, and conversion tracking recommendations."
        />
        <div className="values-grid">
          <Reveal>
            <article className="value-card">
              <h3>Clear messaging</h3>
              <p>Headlines, service blocks, and case study layouts structured for trust and decision-making.</p>
            </article>
          </Reveal>
          <Reveal delay={90}>
            <article className="value-card">
              <h3>Modern interface</h3>
              <p>Responsive sections, cards, animation, carousel, and premium visual treatment.</p>
            </article>
          </Reveal>
          <Reveal delay={180}>
            <article className="value-card">
              <h3>Developer-ready code</h3>
              <p>Reusable components, organized folders, and multi-page Vite configuration.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <CTA />
    </Layout>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortfolioPage />
  </React.StrictMode>
);
