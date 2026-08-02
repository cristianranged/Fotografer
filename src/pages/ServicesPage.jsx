import { useEffect, useState } from 'react';
import ContactCtaSection from '@/components/sections/ContactCtaSection';
import ExperiencePromiseSection from '@/components/sections/ExperiencePromiseSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import servicesContent from '@/content/services.json';
import { whatsappUrl } from '@/constants/site';

function ServicePackagesSection({ service }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const gallery = service.gallery ?? [];
  const visibleGallery = showAllPhotos ? gallery : gallery.slice(0, 3);
  const hasMorePhotos = gallery.length > 3;

  return (
    <section className="package-section" id={service.id}>
      <div className="container">
        <div className="package-heading">
          <p className="eyebrow">Servicios Rangel Shot</p>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
        {gallery.length > 0 && (
          <div className="portfolio-gallery">
            {visibleGallery.map((image) => (
              <figure className="portfolio-gallery__item" key={image}>
                <img
                  src={`/images/${service.galleryFolder}/${image}`}
                  alt={`Fotografía de ${service.title.toLowerCase()}`}
                  loading="lazy"
                />
              </figure>
            ))}
            {hasMorePhotos && (
              <button
                type="button"
                className="button button--light portfolio-gallery__toggle"
                onClick={() => setShowAllPhotos((current) => !current)}
              >
                {showAllPhotos ? 'Mostrar menos' : 'Ver más fotografías'}
              </button>
            )}
          </div>
        )}
        <div className="package-table-wrap">
          <div className="package-card-list">
            {service.packages.map((packageOption) => (
              <article className="package-card" key={packageOption.name}>
                <div className="package-card__header">
                  <h3>{packageOption.name}</h3>
                  <strong>{packageOption.price}</strong>
                </div>
                <p>{packageOption.includes}</p>
                <a
                  href={whatsappUrl(
                    `Hola, quiero información del paquete: ${packageOption.name}`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Solicitar información <span>→</span>
                </a>
              </article>
            ))}
          </div>
          <table>
            <thead>
              <tr>
                <th>Experiencia</th>
                <th>Incluye</th>
                <th>Inversión</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {service.packages.map((packageOption) => (
                <tr key={packageOption.name}>
                  <td>{packageOption.name}</td>
                  <td>{packageOption.includes}</td>
                  <td>
                    <strong>{packageOption.price}</strong>
                  </td>
                  <td>
                    <a
                      href={whatsappUrl(
                        `Hola, quiero información del paquete: ${packageOption.name}`,
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Cotizar ahora <span>→</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
export default function ServicesPage() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');

    if (!hash) return;

    requestAnimationFrame(() => {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }, []);

  return (
    <>
      <section className="page-hero page-hero--services">
        <div className="container">
          <p className="eyebrow">{servicesContent.hero.eyebrow}</p>
          <h1>{servicesContent.hero.title}</h1>
          <p>{servicesContent.hero.description}</p>
        </div>
      </section>
      {servicesContent.offerings.map((item) => (
        <ServicePackagesSection key={item.id} service={item} />
      ))}
      <ExperiencePromiseSection />
      <TestimonialsSection />
      <ContactCtaSection />
    </>
  );
}
