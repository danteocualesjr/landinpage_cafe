import { useState, useEffect, useCallback } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1501339847302-ac426a4c7c6f?w=800&q=80', alt: 'Coffee shop interior', span: 'tall' },
    { id: 2, url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80', alt: 'Coffee beans closeup', span: '' },
    { id: 3, url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80', alt: 'Latte art from above', span: '' },
    { id: 4, url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80', alt: 'Coffee shop ambiance', span: 'wide' },
    { id: 5, url: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80', alt: 'Coffee cup', span: '' },
    { id: 6, url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80', alt: 'Barista at work', span: 'tall' },
    { id: 7, url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80', alt: 'Coffee and pastries', span: '' },
    { id: 8, url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80', alt: 'Coffee bar counter', span: 'wide' },
  ];

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = '';
  }, []);

  const navigate = useCallback((dir) => {
    setSelectedIndex(prev => {
      if (prev === null) return null;
      return dir === 'next'
        ? (prev + 1) % images.length
        : (prev - 1 + images.length) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigate('next');
      if (e.key === 'ArrowLeft') navigate('prev');
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex, closeLightbox, navigate]);

  return (
    <>
      <section id="gallery" className="gallery">
        <div className="gallery__header reveal">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">A peek inside</h2>
          <p className="section-subtitle">
            The warmth, the details, the craft. Come see what makes us different.
          </p>
        </div>

        <div className="gallery__mosaic">
          {images.map((img, i) => (
            <div
              key={img.id}
              className={`gallery__item ${img.span ? `gallery__item--${img.span}` : ''} reveal`}
              onClick={() => openLightbox(i)}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <img src={img.url} alt={img.alt} loading="lazy" />
              <div className="gallery__item-overlay">
                <span className="gallery__item-label">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">
            <FaTimes />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={images[selectedIndex].url} alt={images[selectedIndex].alt} />
          </div>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); navigate('next'); }}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
          <div className="lightbox__counter">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
