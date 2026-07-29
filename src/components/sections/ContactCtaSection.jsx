import siteContent from '@/content/site.json';
import { whatsappUrl } from '@/constants/site';

export default function ContactCtaSection() {
  const { contactCta } = siteContent;
  return (
    <section className="contact-cta-section">
      <div className="container contact-cta-section__content">
        <div>
          <p className="eyebrow">{contactCta.eyebrow}</p>
          <h2>{contactCta.title}</h2>
        </div>
        <div className="contact-cta-section__actions">
          <a
            className="button button--light"
            href={whatsappUrl('Hola, quiero información del servicio de fotografía y video.')}
            target="_blank"
            rel="noreferrer"
          >
            {contactCta.whatsappLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
