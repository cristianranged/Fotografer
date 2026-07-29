import Carousel from '@/components/common/Carousel';
import BusinessSchema from '@/components/seo/BusinessSchema';
import GallerySection from '@/components/sections/GallerySection';
import ContactCtaSection from '@/components/sections/ContactCtaSection';
import homeContent from '@/content/home.json';
import { imageAssets } from '@/utils/imageAssets';

export default function HomePage() {
  return (
    <>
      <BusinessSchema />
      <section className="hero-area">
        <Carousel
          items={homeContent.hero.slides}
          autoPlay
          className="hero-carousel"
          renderItem={(slide) => (
            <div className="hero-slide">
              <img
                src={
                  slide.id === 'boda'
                    ? imageAssets.heroBoda
                    : slide.id === 'retrato'
                      ? imageAssets.heroPareja
                      : imageAssets.heroEvento
                }
                alt={slide.alt}
                loading="eager"
              />
            </div>
          )}
        />
      </section>
      <GallerySection />
      <ContactCtaSection />
    </>
  );
}
