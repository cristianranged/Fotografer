import homeContent from '@/content/home.json';
import ExpandableGallery from '@/components/common/ExpandableGallery';
import { getGalleryImages } from '@/utils/galleryLoader';

export default function GallerySection() {
  const { featuredGallery } = homeContent;
  const images = getGalleryImages(featuredGallery.folder);

  return (
    <section className="gallery-section section-space">
      <div className="container gallery-section__wrapper">
        <div className="section-heading gallery-section__heading">
          <p className="eyebrow">{featuredGallery.eyebrow}</p>
          <h2>{featuredGallery.title}</h2>
        </div>
        <ExpandableGallery images={images} initialVisible={3} />
      </div>
    </section>
  );
}
