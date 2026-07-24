import { useState, useEffect } from 'react';
import { getFotoProdukByUmkm } from '../services/api';
import Spinner from './Spinner';
import Lightbox from './Lightbox';
import './Produk.css';

function Produk({ umkmId }) {
  const [foto, setFoto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    getFotoProdukByUmkm(umkmId)
      .then((data) => setFoto(data))
      .finally(() => setLoading(false));
  }, [umkmId]);

  const urlFoto = foto.map((item) => item.foto_url);

  return (
    <section className="section-produk">
      <h2>Produk</h2>

      {loading ? (
        <Spinner text="Memuat galeri produk..." />
      ) : foto.length === 0 ? (
        <p className="info-kosong">Belum ada foto produk.</p>
      ) : (
        <div className="produk-grid">
          {foto.map((item, index) => (
            <img
              key={item.id}
              src={item.foto_url}
              alt="Foto produk"
              className="produk-galeri-item"
              onClick={() => setLightboxIndex(index)}
            />
          ))}
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={urlFoto}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}

export default Produk;