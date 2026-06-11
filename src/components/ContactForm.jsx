import { useState } from 'react';
import { Send } from 'lucide-react';

const initialForm = {
  name: '',
  email: '',
  company: '',
  message: ''
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Thanks! This demo form is ready to connect with your backend or form provider.');
    setForm(initialForm);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Full name
        <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required />
      </label>
      <label>
        Email address
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
      </label>
      <label>
        Company
        <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="Company name" />
      </label>
      <label>
        Project details
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us what you want to build" rows="5" required />
      </label>
      <button className="button" type="submit">
        Send message <Send size={18} />
      </button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
