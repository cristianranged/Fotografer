import { Link } from 'react-router-dom';
import homeContent from '@/content/home.json';

export default function AboutSection() {
  const { about } = homeContent;
  return (
    <section className="about-preview section-space">
      <div className="container about-preview__grid">
        <div className="about-preview__photos">
          {about.images.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
          ))}
        </div>
        <div className="about-preview__content">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>
            {about.title}
            <br />
            <em>{about.highlight}</em>
          </h2>
          <p>{about.description}</p>
          <Link to="/nosotros" className="text-link">
            {about.action} <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
