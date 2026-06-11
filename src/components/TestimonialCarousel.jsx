import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data.js';

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    const normalizedIndex = (index + testimonials.length) % testimonials.length;
    setActiveIndex(normalizedIndex);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="carousel-section" aria-label="Client testimonials carousel">
      <div className="carousel-card">
        <Quote className="quote-icon" size={42} aria-hidden="true" />
        <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {testimonials.map((item) => (
            <article className="carousel-slide" key={item.name}>
              <p>“{item.quote}”</p>
              <h3>{item.name}</h3>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
        <div className="carousel-controls">
          <button type="button" aria-label="Previous testimonial" onClick={() => goToSlide(activeIndex - 1)}>
            <ChevronLeft size={20} />
          </button>
          <div className="carousel-dots" aria-label="Choose testimonial">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={index === activeIndex ? 'active' : ''}
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <button type="button" aria-label="Next testimonial" onClick={() => goToSlide(activeIndex + 1)}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
