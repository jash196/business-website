import React from 'react';
import { createRoot } from 'react-dom/client';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Layout from '../../components/Layout.jsx';
import PageHero from '../../components/PageHero.jsx';
import ContactForm from '../../components/ContactForm.jsx';
import Reveal from '../../components/Reveal.jsx';
import '../../styles.css';

const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    text: 'hello@nexaworks.example'
  },
  {
    icon: Phone,
    title: 'Phone',
    text: '+1 555 0198 762'
  },
  {
    icon: MapPin,
    title: 'Location',
    text: 'New York, London, and remote projects worldwide'
  },
  {
    icon: Clock,
    title: 'Hours',
    text: 'Monday to Friday, 9:00 AM to 6:00 PM'
  }
];

function ContactPage() {
  return (
    <Layout activePage="Contact">
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want your business website to achieve."
        text="Share your project details and we will help map the right strategy, structure, and website experience."
      />

      <section className="contact-grid">
        <div className="contact-info-stack">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 70}>
                <article className="contact-info-card">
                  <Icon size={24} />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </section>
    </Layout>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactPage />
  </React.StrictMode>
);
