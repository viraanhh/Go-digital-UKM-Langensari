import { useState, useEffect } from 'react';
import { getBrandingByUmkm } from '../services/api';
import './Branding.css';

function Branding({ umkmId }) {
  const [branding, setBranding] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBrandingByUmkm(umkmId)
      .then((data) => setBranding(data))
      .finally(() => setLoading(false));
  }, [umkmId]);

  if (loading) return null;

  const belumAdaData = !branding || (!branding.logo_url && !branding.tagline && !branding.deskripsi_brand);

  return (
    <section className="section-branding">
      <h2>Branding</h2>

      {belumAdaData ? (
        <p className="info-kosong">Sedang dalam proses penyusunan.</p>
      ) : (
        <div className="branding-content">
          <img
            src={branding.logo_url || 'https://placehold.co/120x120?text=Logo'}
            alt="Logo UMKM"
            className="branding-logo"
          />
          <div>
            <p className="branding-tagline">{branding.tagline || 'Tagline belum tersedia'}</p>
            <p>{branding.deskripsi_brand || 'Deskripsi brand belum tersedia'}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Branding;