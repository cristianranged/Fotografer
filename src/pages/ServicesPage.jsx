import ContactCtaSection from '@/components/sections/ContactCtaSection';
import ExperiencePromiseSection from '@/components/sections/ExperiencePromiseSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import servicesContent from '@/content/services.json';
import { whatsappUrl } from '@/constants/site';
function ServicePackagesSection({ service }) {
  return (
    <section className="package-section">
      <div className="container">
        <div className="package-heading">
          <p className="eyebrow">Servicios Rangel Shot</p>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
        {service.gallery && (
          <div className="portfolio-gallery">
            {service.gallery.map((image) => (
              <img
                key={image}
                src={`/images/bodas/${image}`}
                alt="Fotografía de boda"
                loading="lazy"
              />
            ))}
          </div>
        )}
        <div className="package-table-wrap">
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
                      Cotizar <span>→</span>
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
