import { useMemo } from 'react';
import { randomBusinessImages } from '../data.js';

export default function RandomImage({ alt = 'Business team working together' }) {
  const selectedImage = useMemo(() => {
    const index = Math.floor(Math.random() * randomBusinessImages.length);
    return randomBusinessImages[index];
  }, []);

  return (
    <figure className="random-image-card">
      <img src={selectedImage} alt={alt} loading="lazy" />
      <figcaption>Random business image selected on page load</figcaption>
    </figure>
  );
}
