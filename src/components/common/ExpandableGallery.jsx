import { useState } from 'react';

export default function ExpandableGallery({ images, initialVisible = 3 }) {
  const [expanded, setExpanded] = useState(false);
  const visibleCount = expanded ? images.length : initialVisible;

  return (
    <div className="expandable-gallery">
      <div className="expandable-gallery__grid">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`expandable-gallery__item ${index < visibleCount ? 'is-visible' : ''}`}
            aria-hidden={index >= visibleCount}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading={index < visibleCount ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
      {images.length > initialVisible && (
        <button
          type="button"
          className="button button--ghost expandable-gallery__toggle"
          aria-expanded={expanded}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? 'Mostrar menos' : 'Ver más'}
        </button>
      )}
    </div>
  );
}
