import { useState, useEffect, useRef } from 'react';
import './Lightbox.css';

function Lightbox({ images, startIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const touchStartX = useRef(null);
  const isSingle = images.length <= 1;

  const goPrev = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
      if (!isSingle && e.key === 'ArrowLeft') goPrev();
      if (!isSingle && e.key === 'ArrowRight') goNext();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  function handleTouchStart(e) {
    if (isSingle) return;
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (isSingle || touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;

    if (diff > 50) goPrev();
    else if (diff < -50) goNext();

    touchStartX.current = null;
  }

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Tutup">✕</button>

      {!isSingle && (
        <button
          className="lightbox-nav lightbox-prev"
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          aria-label="Foto sebelumnya"
        >
          ‹
        </button>
      )}

      <div
        className="lightbox-image-wrapper"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[currentIndex]}
          alt={`Foto ${currentIndex + 1}`}
          className={isZoomed ? 'zoomed' : ''}
          onClick={() => setIsZoomed((z) => !z)}
        />
        {!isSingle && (
          <p className="lightbox-indicator">{currentIndex + 1} / {images.length}</p>
        )}
      </div>

      {!isSingle && (
        <button
          className="lightbox-nav lightbox-next"
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          aria-label="Foto berikutnya"
        >
          ›
        </button>
      )}
    </div>
  );
}

export default Lightbox;