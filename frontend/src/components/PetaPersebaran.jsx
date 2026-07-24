import { useState, useEffect } from 'react';
import { getPetaPersebaran } from '../services/api';
import Lightbox from './Lightbox';
import './PetaPersebaran.css';

function PetaPersebaran() {
  const [peta, setPeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    getPetaPersebaran()
      .then((data) => setPeta(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  return (
    <section className="section-peta">
      <h2>Peta Persebaran UMKM RW 06 Langensari</h2>

      {peta?.image_url ? (
        <img
          src={peta.image_url}
          alt="Peta persebaran UMKM RW 06 Langensari"
          className="peta-image"
          onClick={() => setLightboxOpen(true)}
        />
      ) : (
        <div className="peta-placeholder">
          <span>🗺️</span>
          <p>Peta sedang disiapkan</p>
        </div>
      )}

      {peta?.deskripsi && <p className="peta-deskripsi">{peta.deskripsi}</p>}

      {lightboxOpen && (
        <Lightbox
          images={[peta.image_url]}
          startIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
}

export default PetaPersebaran;