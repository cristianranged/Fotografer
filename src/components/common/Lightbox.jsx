import { useEffect } from 'react';

export default function Lightbox({ images, activeIndex, onClose, onPrev, onNext }) {
  const image = images[activeIndex];
  const isOpen = activeIndex >= 0;

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'ArrowLeft') {
        onPrev();
      }
      if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !image) {
    return null;
  }

  const handleBackdropClick = (event) => {
    if (event.target.dataset.lightboxOverlay) {
      onClose();
    }
  };

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      data-lightbox-overlay
      onClick={handleBackdropClick}
    >
      <div className="lightbox-content">
        <button
          type="button"
          className="lightbox-close"
          onClick={onClose}
          aria-label="Cerrar galería"
        >
          ×
        </button>
        <button
          type="button"
          className="lightbox-arrow lightbox-arrow--prev"
          onClick={onPrev}
          aria-label="Anterior"
        >
          ‹
        </button>
        <img src={image.src} alt={image.alt} loading="eager" />
        <button
          type="button"
          className="lightbox-arrow lightbox-arrow--next"
          onClick={onNext}
          aria-label="Siguiente"
        >
          ›
        </button>
        <p className="lightbox-caption">{image.alt}</p>
      </div>
    </div>
  );
}
