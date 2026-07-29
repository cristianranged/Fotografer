import { useMemo, useState } from 'react';
import Lightbox from '@/components/common/Lightbox';
import { getGalleryImages } from '@/utils/galleryLoader';

export default function ServiceGallery({ folder, title }) {
  const images = useMemo(() => getGalleryImages(folder), [folder]);
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const visibleImages = showAll ? images : images.slice(0, 3);

  const handleOpen = (index) => setActiveIndex(index);
  const handleClose = () => setActiveIndex(-1);
  const handlePrev = () =>
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  const handleNext = () => setActiveIndex((current) => (current + 1) % images.length);

  return (
    <>
      <div className="service-gallery">
        <div className="service-gallery__grid">
          {visibleImages.map((image, index) => (
            <button
              type="button"
              key={image.src}
              className="service-gallery__item"
              onClick={() => handleOpen(index)}
              aria-label={`Abrir imagen ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} loading={index < 2 ? 'eager' : 'lazy'} />
            </button>
          ))}
        </div>
        {images.length > 3 && (
          <button
            type="button"
            className="button button--light service-gallery__toggle"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? 'Mostrar menos' : 'Ver más'}
          </button>
        )}
      </div>
      <Lightbox
        images={images}
        activeIndex={activeIndex}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
