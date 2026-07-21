import Carousel from '@/components/common/Carousel';
import testimonials from '@/content/testimonials.json';

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section section-space">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Palabras que atesoramos</p>
          <h2>La emoción también se lee.</h2>
        </div>
        <Carousel
          items={testimonials}
          className="testimonial-carousel"
          renderItem={(testimonial) => (
            <article className="testimonial">
              <span className="testimonial__quote">“</span>
              <p>{testimonial.text}</p>
              <footer>
                <strong>{testimonial.name}</strong>
                <span>Experiencia Rangel Shot</span>
              </footer>
            </article>
          )}
        />
      </div>
    </section>
  );
}
