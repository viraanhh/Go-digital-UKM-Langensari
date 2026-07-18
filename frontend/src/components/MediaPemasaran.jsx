import { useState, useEffect } from 'react';
import { getMediaPemasaranByUmkm } from '../services/api';
import './MediaPemasaran.css';

function warnaPlatform(platform) {
  const key = platform.toLowerCase().replace(/\s+/g, '');
  const warnaMap = {
    instagram: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    facebook: '#1877f2',
    shopee: '#ee4d2d',
    tokopedia: '#42b549',
    gofood: '#00aa13',
    grabfood: '#00b14f',
    shopeefood: '#ee4d2d',
    tiktokshop: '#000000',
  };
  return warnaMap[key] || '#555'; // abu-abu default untuk platform yang belum dikenal
}

function MediaPemasaran({ umkmId }) {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMediaPemasaranByUmkm(umkmId)
      .then((data) => setMedia(data))
      .finally(() => setLoading(false));
  }, [umkmId]);

  if (loading) return null;

  return (
    <section className="section-media">
      <h2>Media Pemasaran</h2>
      {media.length === 0 ? (
        <p className="info-kosong">Media pemasaran belum tersedia.</p>
      ) : (
        <div className="media-buttons">
          {media.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-media"
              style={{ background: warnaPlatform(item.platform) }}
            >
              {item.platform}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

export default MediaPemasaran;