import { Link } from 'react-router-dom';
import Carousel from '@/components/common/Carousel';
import BusinessSchema from '@/components/seo/BusinessSchema';
import AboutSection from '@/components/sections/AboutSection';
import ExperiencePromiseSection from '@/components/sections/ExperiencePromiseSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import homeContent from '@/content/home.json';

export default function HomePage() {
  return (
    <>
      <BusinessSchema />
      <section className="hero-area">
        <Carousel
          items={homeContent.hero.slides}
          autoPlay
          className="hero-carousel"
          renderItem={(slide) => (
            <div className="hero-slide" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="hero-content">
                <p className="eyebrow">{homeContent.hero.eyebrow}</p>
                <h1>
                  {homeContent.hero.title} <em>{homeContent.hero.highlight}</em>
                </h1>
                <p className="hero-copy">{homeContent.hero.description}</p>
                <div className="hero-actions">
                  <Link to="/contacto" className="button button--primary">
                    {homeContent.hero.primaryAction}
                  </Link>
                  <Link to="/servicios" className="button button--ghost">
                    {homeContent.hero.secondaryAction}
                  </Link>
                </div>
              </div>
            </div>
          )}
        />
      </section>
      <section className="intro-strip">
        <div className="container">
          <p>{homeContent.intro}</p>
        </div>
      </section>
      <AboutSection />
      <section className="services-section section-space">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{homeContent.servicesSection.eyebrow}</p>
            <h2>{homeContent.servicesSection.title}</h2>
            <p>{homeContent.servicesSection.description}</p>
          </div>
          <div className="service-grid">
            {homeContent.servicesSection.services.map((service, index) => (
              <Link
                to={`/servicios#${service.id}`}
                className={`service-card service-card--${index + 1}`}
                key={service.id}
              >
                <img src={service.image} alt={`Fotografía para ${service.title}`} loading="lazy" />
                <span className="service-card__overlay" />
                <span className="service-card__content">
                  <img src={service.icon} alt="" />
                  <b>{service.title}</b>
                  <small>{service.description}</small>
                  <i>{homeContent.servicesSection.action}</i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ExperiencePromiseSection />
      <TestimonialsSection />
    </>
  );
}
