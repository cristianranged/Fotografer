import homeContent from '@/content/home.json';

export default function ExperiencePromiseSection() {
  const { promise } = homeContent;
  return (
    <section className="promise-section section-space">
      <div className="container">
        <div className="section-heading section-heading--light">
          <p className="eyebrow">{promise.eyebrow}</p>
          <h2>
            {promise.title}
            <br />
            <em>{promise.highlight}</em>
          </h2>
        </div>
        <div className="promise-grid">
          {promise.items.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
