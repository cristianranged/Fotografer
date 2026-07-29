import { useEffect, useState } from 'react';
import homeContent from '@/content/home.json';

const fallbackPosts = [
  {
    id: 'fallback-1',
    media_type: 'IMAGE',
    media_url: '/images/pareja/03.JPG',
    permalink: 'https://www.instagram.com/',
    caption: 'Última publicación de ejemplo',
  },
  {
    id: 'fallback-2',
    media_type: 'IMAGE',
    media_url: '/images/bodas/1.JPG',
    permalink: 'https://www.instagram.com/',
    caption: 'Momento de la sesión reciente',
  },
  {
    id: 'fallback-3',
    media_type: 'IMAGE',
    media_url: '/images/eventos/acordeon.JPG',
    permalink: 'https://www.instagram.com/',
    caption: 'Detalle de una celebración',
  },
];

export default function InstagramSection() {
  const { instagramSection } = homeContent;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadPosts = async () => {
      try {
        const response = await fetch('/api/instagram');
        if (!response.ok) throw new Error('No se pudo cargar el feed');

        const data = await response.json();
        const nextPosts = Array.isArray(data.posts) ? data.posts : [];

        if (isMounted) {
          setPosts(nextPosts.length > 0 ? nextPosts : fallbackPosts);
        }
      } catch (error) {
        console.error(error);
        if (isMounted) {
          setPosts(fallbackPosts);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadPosts();

    return () => {
      isMounted = false;
    };
  }, []);

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
            {loading ? (
              <p className="instagram-section__status">Cargando publicaciones recientes…</p>
            ) : (
              <div className="instagram-section__feed">
                {posts.slice(0, 3).map((post) => {
                  const imageSrc = post.media_url || post.thumbnail_url || '/images/pareja/03.JPG';
                  const caption =
                    post.caption?.replace(/\n/g, ' ').slice(0, 90) || 'Publicación reciente';

                  return (
                    <a
                      key={post.id}
                      className="instagram-section__post"
                      href={post.permalink || 'https://www.instagram.com/'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={imageSrc} alt={caption} />
                      <div className="instagram-section__post-meta">
                        <span>{caption}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
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
