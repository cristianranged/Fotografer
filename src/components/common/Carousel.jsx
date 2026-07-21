import { useEffect, useState } from 'react';

export default function Carousel({
  items,
  renderItem,
  className = '',
  autoPlay = false,
  interval = 3000,
}) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (!autoPlay) return undefined;
    const id = window.setInterval(() => setActive((value) => (value + 1) % items.length), interval);
    return () => window.clearInterval(id);
  }, [autoPlay, interval, items.length]);
  const previous = () => setActive((active - 1 + items.length) % items.length);
  const next = () => setActive((active + 1) % items.length);
  return (
    <div className={`react-carousel ${className}`}>
      <div className="react-carousel__viewport">
        {items.map((item, index) => (
          <div
            key={item.id || index}
            className={`react-carousel__slide ${index === active ? 'is-active' : ''}`}
            aria-hidden={index !== active}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
      {items.length > 1 && (
        <>
          <button
            type="button"
            className="react-carousel__previous"
            aria-label="Anterior"
            onClick={previous}
          >
            ‹
          </button>
          <button
            type="button"
            className="react-carousel__next"
            aria-label="Siguiente"
            onClick={next}
          >
            ›
          </button>
          <div className="react-carousel__dots">
            {items.map((item, index) => (
              <button
                type="button"
                key={item.id || index}
                className={index === active ? 'is-active' : ''}
                aria-label={`Ir a la diapositiva ${index + 1}`}
                aria-current={index === active}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
