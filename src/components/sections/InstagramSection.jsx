import homeContent from '@/content/home.json';

export default function InstagramSection() {
  const { instagramSection } = homeContent;

  return (
    <section className="instagram-section section-space">
      <div className="container instagram-section__wrapper">
        <div className="section-heading instagram-section__heading">
          <p className="eyebrow">Instagram</p>
          <h2>{instagramSection.title}</h2>
          <p>{instagramSection.description}</p>
        </div>
        <div className="instagram-section__card">
          <div className="instagram-section__preview" data-instagram-widget="placeholder">
            <span>Feed de Instagram</span>
            <p>
              Sección preparada para conectar con el widget oficial o la API cuando decidas
              activarla.
            </p>
          </div>
          <a
            className="button button--primary instagram-section__button"
            href="https://www.instagram.com/rangel_shot/"
            target="_blank"
            rel="noreferrer"
          >
            Ver Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
