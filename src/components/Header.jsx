import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navigation } from '../data.js';

export default function Header({ activePage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="NexaWorks home">
        <span className="brand-mark">N</span>
        <span>NexaWorks</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
        {navigation.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={activePage === item.label ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="/contact/">
        Start a project <ArrowRight size={18} />
      </a>
    </header>
  );
}
