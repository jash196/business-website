import { Mail, MapPin, Phone } from 'lucide-react';
import { navigation } from '../data.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <a className="brand footer-brand" href="/" aria-label="NexaWorks home">
            <span className="brand-mark">N</span>
            <span>NexaWorks</span>
          </a>
          <p>
            Strategic consulting, digital systems, and brand experiences for companies ready to grow with confidence.
          </p>
        </div>
        <div>
          <h3>Company</h3>
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <p><Mail size={16} /> hello@nexaworks.example</p>
          <p><Phone size={16} /> +1 555 0198 762</p>
          <p><MapPin size={16} /> New York, London, Remote</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} NexaWorks. All rights reserved.</span>
        <span>Built with React multi-page architecture.</span>
      </div>
    </footer>
  );
}
