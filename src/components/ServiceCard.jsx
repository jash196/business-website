import { BarChart3, Megaphone, Search, Sparkles, Target, Workflow } from 'lucide-react';

const icons = { BarChart3, Megaphone, Search, Sparkles, Target, Workflow };

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon] || Target;

  return (
    <article className="service-card">
      <div className="icon-box"><Icon size={24} /></div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  );
}
