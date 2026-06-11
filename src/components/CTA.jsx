import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="cta-band">
      <div>
        <span className="eyebrow">Ready to grow?</span>
        <h2>Build a business website that looks premium and performs like a sales asset.</h2>
        <p>Share your goals and we will help you plan the next stage of brand, marketing, and operations growth.</p>
      </div>
      <a className="button light" href="/contact/">
        Book a consultation <ArrowRight size={18} />
      </a>
    </section>
  );
}
